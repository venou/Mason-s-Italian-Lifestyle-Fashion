# Mason's Italian Lifestyle & Fashion

A fashion-focused landing page built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. The project recreates a premium editorial storefront experience for Mason's, with large-format imagery, motion-driven section reveals, and a newsletter popup flow.

## Overview

The homepage is composed from reusable sections in the `app/components` directory and currently includes:

- Announcement bar
- Sticky header navigation
- Hero banner for the SS26 collection
- Category highlights
- Milano feature section
- Brand story / About Us section
- Personal Shopper callout
- Newsletter popup
- Footer with newsletter and social links

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- `motion` for animations
- `lucide-react` for icons

## Project Structure

```text
app/
  components/
    AboutUs.tsx
    AnnouncementBar.tsx
    Categories.tsx
    Footer.tsx
    Header.tsx
    Hero.tsx
    MilanoFeature.tsx
    NewsletterPopup.tsx
    PersonalShopper.tsx
  globals.css
  layout.tsx
  page.tsx
```

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` starts the Next.js development server on port `3000`
- `npm run build` creates a production build
- `npm run start` starts the production server on port `3000`

## Environment Variables

An `.env.example` file is included with:

- `GEMINI_API_KEY`
- `APP_URL`

These variables are not currently used by the visible frontend components in this repo, but they are documented in the project template and may be intended for future integrations.

## Styling and UX Notes

- Global typography uses Google Fonts: `Playfair Display` and `Montserrat`
- Tailwind CSS v4 is configured in [`app/globals.css`](./app/globals.css)
- Section transitions and popup animations are handled with `motion`
- The newsletter popup opens automatically 3 seconds after page load

## Current State

This project is currently a polished static marketing page. Most CTAs and navigation items are presentational placeholders, and there is no backend integration yet for search, account, cart, newsletter signup, or WhatsApp booking.

## Author

Shiva Kumar
