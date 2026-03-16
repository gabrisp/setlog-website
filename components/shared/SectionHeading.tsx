import { type ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  as?: "h2" | "h3";
}

export function SectionHeading({
  title,
  subtitle,
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <Tag className="text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl md:text-4xl">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-3 max-w-xl mx-auto text-base text-neutral-500 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
