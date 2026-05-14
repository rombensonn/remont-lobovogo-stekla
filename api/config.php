<?php

return [
    // TODO: заменить на точное название бизнеса
    'site_name' => 'Ремонт и тонировка автостёкол',
    'base_url' => 'https://example.com',

    // TODO: заменить [EMAIL] на рабочий email администратора.
    'recipient_email' => '[EMAIL]',
    'from_email' => 'noreply@example.com',

    // Для dev можно оставить localhost. Для production добавьте реальный домен.
    'allowed_origins' => [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:8080',
        'https://example.com',
    ],

    // На части хостингов mail() отключён или попадает в спам.
    // Для production лучше заменить отправку на SMTP через PHPMailer.
    'mail_enabled' => true,

    'storage_dir' => dirname(__DIR__) . '/storage',
    'max_upload_bytes' => 5 * 1024 * 1024,
    'allowed_mime_types' => [
        'image/jpeg' => 'jpg',
        'image/png' => 'png',
        'image/webp' => 'webp',
        'image/heic' => 'heic',
        'image/heif' => 'heif',
    ],
    'rate_limit' => [
        'window_seconds' => 600,
        'max_requests' => 3,
    ],
];
