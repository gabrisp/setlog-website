"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { screenshots } from "@/content/screenshots";
import { getTranslations } from "@/content/locales";
import type { Locale } from "@/lib/i18n";

function ScreenshotPlaceholder({ alt }: { alt: string }) {
  return (
    <div
      className="relative aspect-[9/19] w-full max-w-[280px] mx-auto rounded-[2.5rem] overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-soft-lg flex items-center justify-center"
      role="img"
      aria-label={alt}
    >
      <span className="text-sm text-neutral-400 font-medium">Screenshot</span>
    </div>
  );
}

function ScreenshotImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  if (error) return <ScreenshotPlaceholder alt={alt} />;
  return (
    <div className="relative aspect-[9/19] w-full max-w-[280px] mx-auto rounded-[2.5rem] overflow-hidden shadow-soft-lg border border-neutral-200/80 bg-neutral-100">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 360px"
        className="object-cover object-top"
        onError={() => setError(true)}
      />
    </div>
  );
}

export function ScreenshotsSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <section className="py-16 sm:py-20 md:py-24 overflow-hidden">
      <Container>
        <SectionHeading
          title={t.screenshots.title}
          subtitle={t.screenshots.subtitle}
          className="mb-12 sm:mb-16"
        />
      </Container>

      <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-x-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1.15}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 28 },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-neutral-300 !opacity-100",
            bulletActiveClass: "!bg-apple-blue !w-6",
          }}
          className="!pb-12"
        >
          {screenshots.map((shot) => (
            <SwiperSlide key={shot.id}>
              <ScreenshotImage src={shot.src} alt={shot.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
