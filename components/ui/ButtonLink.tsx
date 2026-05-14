import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-card px-5 py-3 text-sm font-extrabold transition duration-200",
        "active:translate-y-px [box-shadow:0_1px_0_rgba(255,255,255,0.55)_inset]",
        variant === "primary" &&
          "bg-cyanbrand-400 text-graphite-950 shadow-glow hover:bg-cyanbrand-300",
        variant === "secondary" &&
          "border border-graphite-200 bg-white text-graphite-950 shadow-sm hover:border-cyanbrand-300 hover:bg-porcelain-50 hover:text-cyanbrand-600",
        variant === "dark" &&
          "bg-graphite-950 text-white hover:bg-graphite-800",
        variant === "ghost" &&
          "text-graphite-700 hover:bg-graphite-100 hover:text-graphite-950",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
