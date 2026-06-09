export interface ScreenshotItem {
  id: string;
  src: string;
  alt: string;
}

/**
 * Screenshot paths under /public.
 * Replace with real assets once received.
 */
export const screenshots: ScreenshotItem[] = [
  { id: "1", src: "/screenshots/1.png", alt: "SetLog today" },
  { id: "2", src: "/screenshots/2.png", alt: "SetLog workout" },
  { id: "3", src: "/screenshots/3.png", alt: "SetLog calendar" },
  { id: "4", src: "/screenshots/4.png", alt: "SetLog statistics" },
  { id: "5", src: "/screenshots/5.png", alt: "SetLog today (dark)" },
  { id: "6", src: "/screenshots/6.png", alt: "SetLog workout (dark)" },
];

export const screenshotsSectionTitle = "A smarter way to train";
export const screenshotsSectionSubtitle =
  "Designed for clarity and simplicity.";
