export interface ScreenshotItem {
  id: string;
  src: string;
  alt: string;
}

/**
 * Screenshot paths under /public.
 * Replace with real assets: /screenshots/1.png, etc.
 */
export const screenshots: ScreenshotItem[] = [
  { id: "1", src: "/screenshots/1.png", alt: "Creatinely home" },
  { id: "2", src: "/screenshots/2.png", alt: "Creatinely notifications" },
  { id: "3", src: "/screenshots/3.png", alt: "Creatinely calendar" },
  { id: "4", src: "/screenshots/4.png", alt: "Creatinely statistics" },
  { id: "5", src: "/screenshots/5.png", alt: "Creatinely home (dark)" },
  { id: "6", src: "/screenshots/6.png", alt: "Creatinely notifications (dark)" },
];

export const screenshotsSectionTitle = "A better way to stay consistent";
export const screenshotsSectionSubtitle =
  "Designed for clarity and simplicity.";
