"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import clsx from "clsx";

interface AppleButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
}

export function AppleButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: AppleButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue focus-visible:ring-offset-2";

  const styles = {
    primary:
      "bg-apple-blue text-white hover:bg-apple-blue-hover active:bg-apple-blue-active shadow-soft",
    secondary:
      "bg-white text-[#1d1d1f] border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 active:bg-neutral-100",
  };

  const combined = clsx(base, styles[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combined}>
      {children}
    </Link>
  );
}
