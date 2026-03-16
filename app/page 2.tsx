import { Hero } from "@/components/home/Hero";
import { ScreenshotsSection } from "@/components/home/ScreenshotsSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScreenshotsSection />
      <FeaturesSection />
      <CtaBanner />
    </>
  );
}
