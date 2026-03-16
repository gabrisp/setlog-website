import Image from "next/image";
import { Pill } from "lucide-react";

interface AppIconProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "w-16 h-16 sm:w-20 sm:h-20",
  md: "w-24 h-24 sm:w-28 sm:h-28",
  lg: "w-32 h-32 sm:w-36 sm:h-36",
};

export function AppIcon({ size = "lg", className = "" }: AppIconProps) {
  return (
    <div
      className={`${sizes[size]} flex shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-50 shadow-soft border border-neutral-100/80 ${className}`}
      aria-hidden
    >
      <Pill className="w-1/2 h-1/2 text-neutral-400" strokeWidth={1.5} />
    </div>
  );
}

/** Icon from image URL (e.g. /icon.png). */
export function AppIconImage({
  src,
  alt,
  size = "lg",
  className = "",
}: AppIconProps & { src: string; alt: string }) {
  return (
    <div
      className={`${sizes[size]} relative shrink-0 overflow-hidden rounded-3xl shadow-soft border border-neutral-100/80 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 80px, 144px"
        className="object-cover"
        priority
      />
    </div>
  );
}
