<?php

declare(strict_types=1);

$config = require __DIR__ . '/config.php';

function respond(int $status, bool $success, string $message): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'success' => $success,
        'message' => $message,
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

function clean_text(?string $value, int $maxLength = 500): string
{
    $value = trim((string) $value);
    $value = preg_replace('/[\x00-\x1F\x7F]/u', ' ', $value) ?? '';
    $value = strip_tags($value);
    $value = preg_replace('/\s+/u', ' ', $value) ?? '';

    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength, 'UTF-8');
    }

    return substr($value, 0, $maxLength);
}

function is_checked(mixed $value): bool
{
    return in_array((string) $value, ['1', 'on', 'true', 'yes'], true);
}

function ensure_dir(string $dir): void
{
    if (!is_dir($dir) && !mkdir($dir, 0755, true) && !is_dir($dir)) {
        respond(500, false, 'Не удалось подготовить хранилище заявок.');
    }
}

function client_ip(): string
{
    $candidates = [
        $_SERVER['HTTP_CF_CONNECTING_IP'] ?? '',
        $_SERVER['HTTP_X_REAL_IP'] ?? '',
        $_SERVER['REMOTE_ADDR'] ?? '',
    ];

    foreach ($candidates as $candidate) {
        if (filter_var($candidate, FILTER_VALIDATE_IP)) {
            return $candidate;
        }
    }

    return 'unknown';
}

function apply_cors(array $config): void
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    if ($origin !== '' && in_array($origin, $config['allowed_origins'], true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Vary: Origin');
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Accept');
    }

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}

function check_rate_limit(string $ip, array $config): void
{
    $rateDir = rtrim($config['storage_dir'], '/') . '/rate-limit';
    ensure_dir($rateDir);

    $file = $rateDir . '/' . hash('sha256', $ip) . '.json';
    $now = time();
    $window = (int) $config['rate_limit']['window_seconds'];
    $maxRequests = (int) $config['rate_limit']['max_requests'];
    $timestamps = [];

    if (is_file($file)) {
        $decoded = json_decode((string) file_get_contents($file), true);
        if (is_array($decoded)) {
            $timestamps = array_filter($decoded, static fn ($stamp) => is_int($stamp) && $stamp > $now - $window);
        }
    }

    if (count($timestamps) >= $maxRequests) {
        respond(429, false, 'Слишком много заявок за короткое время. Попробуйте позже или позвоните.');
    }

    $timestamps[] = $now;
    file_put_contents($file, json_encode(array_values($timestamps)), LOCK_EX);
}

function save_upload(array $file, array $config): string
{
    if (($file['error'] ?? UPLOAD_ERR_NO_FILE) === UPLOAD_ERR_NO_FILE) {
        return '';
    }

    if (($file['error'] ?? UPLOAD_ERR_OK) !== UPLOAD_ERR_OK) {
        respond(400, false, 'Не удалось загрузить фото. Попробуйте отправить заявку без файла.');
    }

    if (($file['size'] ?? 0) > $config['max_upload_bytes']) {
        respond(400, false, 'Фото слишком большое. Максимальный размер — 5 МБ.');
    }

    $tmpName = (string) ($file['tmp_name'] ?? '');
    $mime = function_exists('mime_content_type') ? mime_content_type($tmpName) : '';

    if (!isset($config['allowed_mime_types'][$mime])) {
        respond(400, false, 'Поддерживаются только изображения JPG, PNG, WEBP, HEIC или HEIF.');
    }

    $uploadDir = rtrim($config['storage_dir'], '/') . '/uploads';
    ensure_dir($uploadDir);

    $extension = $config['allowed_mime_types'][$mime];
    $filename = date('Ymd-His') . '-' . bin2hex(random_bytes(8)) . '.' . $extension;
    $destination = $uploadDir . '/' . $filename;

    if (!move_uploaded_file($tmpName, $destination)) {
        respond(500, false, 'Не удалось сохранить фото. Попробуйте отправить заявку без файла.');
    }

    return 'storage/uploads/' . $filename;
}

function append_csv(array $lead, array $config): void
{
    $storageDir = rtrim($config['storage_dir'], '/');
    ensure_dir($storageDir);

    $file = $storageDir . '/leads.csv';
    $isNew = !is_file($file);
    $handle = fopen($file, 'ab');

    if ($handle === false) {
        respond(500, false, 'Не удалось сохранить заявку.');
    }

    if ($isNew) {
        fputcsv($handle, [
            'created_at',
            'ip',
            'name',
            'phone',
            'service',
            'car',
            'message',
            'photo_path',
            'user_agent',
        ], ';', '"', '');
    }

    fputcsv($handle, [
        $lead['created_at'],
        $lead['ip'],
        $lead['name'],
        $lead['phone'],
        $lead['service'],
        $lead['car'],
        $lead['message'],
        $lead['photo_path'],
        $lead['user_agent'],
    ], ';', '"', '');

    fclose($handle);
}

function send_lead_email(array $lead, array $config): bool
{
    if (!$config['mail_enabled'] || $config['recipient_email'] === '[EMAIL]') {
        return false;
    }

    $subject = 'Новая заявка с сайта: ' . $config['site_name'];
    $body = implode("\n", [
        'Новая заявка с сайта ' . $config['site_name'],
        '',
        'Дата: ' . $lead['created_at'],
        'Имя: ' . $lead['name'],
        'Телефон: ' . $lead['phone'],
        'Услуга: ' . $lead['service'],
        'Автомобиль: ' . ($lead['car'] ?: 'не указан'),
        'Комментарий: ' . ($lead['message'] ?: 'не указан'),
        'Фото: ' . ($lead['photo_path'] ?: 'не приложено'),
        'IP: ' . $lead['ip'],
        'User-Agent: ' . $lead['user_agent'],
    ]);

    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . $config['site_name'] . ' <' . $config['from_email'] . '>',
        'Reply-To: ' . $config['recipient_email'],
    ];

    return mail($config['recipient_email'], $subject, $body, implode("\r\n", $headers));
}

apply_cors($config);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, false, 'Метод не поддерживается.');
}

$honeypot = clean_text($_POST['company'] ?? '', 120);
if ($honeypot !== '') {
    respond(200, true, 'Спасибо! Заявка отправлена.');
}

$ip = client_ip();
check_rate_limit($ip, $config);

$name = clean_text($_POST['name'] ?? '', 120);
$phone = clean_text($_POST['phone'] ?? '', 80);
$service = clean_text($_POST['service'] ?? '', 120);
$car = clean_text($_POST['car'] ?? '', 160);
$message = clean_text($_POST['message'] ?? '', 1200);
$phoneDigits = preg_replace('/\D+/', '', $phone) ?? '';

$allowedServices = [
    'ремонт скола',
    'ремонт трещины',
    'тонировка',
    'бронь лобового стекла',
    'растонировка',
    'другое',
];

if ($name === '' || $phone === '' || $service === '') {
    respond(422, false, 'Заполните имя, телефон и услугу.');
}

if (strlen($phoneDigits) < 10) {
    respond(422, false, 'Укажите корректный телефон.');
}

if (!in_array($service, $allowedServices, true)) {
    respond(422, false, 'Выберите корректную услугу.');
}

if (!is_checked($_POST['personalDataConsent'] ?? null)) {
    respond(422, false, 'Необходимо согласие на обработку персональных данных.');
}

if (!is_checked($_POST['privacyPolicyConsent'] ?? null)) {
    respond(422, false, 'Необходимо подтвердить ознакомление с политикой обработки персональных данных.');
}

$photoPath = '';
if (isset($_FILES['photo'])) {
    $photoPath = save_upload($_FILES['photo'], $config);
}

$lead = [
    'created_at' => date('c'),
    'ip' => $ip,
    'name' => $name,
    'phone' => $phone,
    'service' => $service,
    'car' => $car,
    'message' => $message,
    'photo_path' => $photoPath,
    'user_agent' => clean_text($_SERVER['HTTP_USER_AGENT'] ?? '', 255),
];

append_csv($lead, $config);

if (!send_lead_email($lead, $config)) {
    error_log('Lead email was not sent. Check recipient_email/mail() or configure SMTP.');
}

respond(200, true, 'Спасибо! Заявка отправлена. Мы свяжемся с вами, чтобы уточнить детали и время записи.');
