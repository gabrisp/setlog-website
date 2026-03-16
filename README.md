# Creatinely Website

Landing site for the Creatinely iOS app. Built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS**. No backend, database, or CMS — all content lives in local constants and TypeScript files.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- **`app/`** — Routes: `layout.tsx`, `page.tsx` (Home), `privacy/page.tsx`, `terms/page.tsx`, `globals.css`
- **`components/home/`** — Hero, ScreenshotsSection, FeaturesSection, CtaBanner
- **`components/shared/`** — Container, SectionHeading, AppleButton, AppIcon, FloatingNav, Footer
- **`content/`** — `site.ts` (App Store URL, site name, contact), `features.ts`, `screenshots.ts`, `legal.ts`

## Configuration

### App Store link

Edit **`content/site.ts`** and set:

```ts
export const APP_STORE_URL = "https://apps.apple.com/app/your-app-id";
```

This updates every “Download on the App Store” button across the site.

### Assets

- **App icon:** Add `public/icon.png` (e.g. 512×512 or 1024×1024). Until then, the Hero uses a placeholder icon.
- **Screenshots:** Add `public/screenshots/1.png`, `2.png`, `3.png`, `4.png`. If missing, the slider shows placeholders. Recommended: iPhone aspect ratio (9:19), PNG or JPG.

### Legal and copy

- **Privacy / Terms:** Update version and dates in `content/legal.ts`. Full text is in `app/privacy/page.tsx` and `app/terms/page.tsx`.
- **Site copy:** Hero and CTA text are in `content/site.ts` and in the Hero/CtaBanner components. Features are in `content/features.ts`.

## Build and deploy

```bash
npm run build
npm start
```

Deploy the output of `next build` to Vercel, Netlify, or any Node host. Set `BASE_URL` in `content/site.ts` to your production URL for correct metadata and OG tags.

## Tech stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Swiper (screenshot slider)
- lucide-react (icons)
- clsx (class names)

No backend, database, or CMS.
