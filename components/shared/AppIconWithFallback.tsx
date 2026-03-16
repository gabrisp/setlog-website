"use client";

import { useState } from "react";
import Image from "next/image";
import { AppIcon } from "./AppIcon";
import { SITE_NAME } from "@/content/site";

const sizeClasses = {
  sm: "w-16 h-16 sm:w-20 sm:h-20",
  md: "w-24 h-24 sm:w-28 sm:h-28",
  lg: "w-32 h-32 sm:w-36 sm:h-36",
} as const;

interface AppIconWithFallbackProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

/** Use in Hero: shows /icon.png when available, otherwise placeholder. */
export function AppIconWithFallback({
  size = "lg",
  className = "",
}: AppIconWithFallbackProps) {
  const [failed, setFailed] = useState(false);
  if (failed) return <AppIcon size={size} className={className} />;
  return (
    <div
      className={`${sizeClasses[size]} relative shrink-0 overflow-hidden ${className}`}
    >
      <Image
        src="/icon.png"
        alt={`${SITE_NAME} app icon`}
        fill
        sizes="(max-width: 640px) 80px, 144px"
        className="object-cover"
        priority
        onError={() => setFailed(true)}
      />
    </div>
  );
}
