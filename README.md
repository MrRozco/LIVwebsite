# Living in Vibrance – Next.js 15 (App Router)

This project is a fully owned, license-clean Living in Vibrance site using Next.js 15, TypeScript, and SCSS. The app is designed for static site generation by default and optimized for performance and SEO.

## Requirements

- Node.js 20+
- npm 10+

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build & Run

```bash
npm run build
npm run start
```

## Static Export (Optional)

Static export works for all static pages.

```bash
npm run build
npm run export
```

If you need `next export`, add the following to scripts and enable `output: "export"` in next.config.ts.

## Design Tokens & SCSS Variables

All colors, typography, spacing, and breakpoints live in:

- styles/abstracts/\_colors.scss
- styles/abstracts/\_typography.scss
- styles/abstracts/\_variables.scss
- styles/abstracts/\_breakpoints.scss

Change a token once and the entire site updates.

## Adding Pages

Create a new route inside:

- app/(site)/your-page/page.tsx

Add navigation entries in:

- lib/data.ts → `navItems`

## Data Management

All static content lives in:

- lib/data.ts

Update the arrays for services, team members, testimonials, blog posts, pricing, FAQ, gallery, and shop items.

## Components

- components/ui: reusable primitives (Button, Card, Input)
- components/globals: layout (Header, Footer, Navbar)
- components/custom: page sections (Hero, ServicesSection, etc.)

## License Cleanup

All text, labels, and assets are original placeholders. Replace `public/assets` images with your own owned assets as needed.

## SEO

- Metadata per page in each route file
- robots.ts and sitemap.ts in app/

### Production SEO Configuration

- Primary domain: https://www.livinginvibrance.com
- Canonical URLs configured for main routes
- Open Graph and Twitter card images configured
- JSON-LD structured data added for `WebSite`, `Organization`, and `LocalBusiness`
- Non-production indexing disabled via `robots.ts`

Optional environment variables for webmaster verification:

- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_BING_SITE_VERIFICATION`

### Manual SEO Tasks (recommended)

- Connect Google Search Console and Bing Webmaster Tools
- Submit `https://www.livinginvibrance.com/sitemap.xml`
- Connect analytics and conversion tracking for leads/forms
- Build internal links from informational content to `/assessment` and `/contact`

## Notes

- Primary home is in app/page.tsx (temporary due to tooling limitations). Move to app/(site)/page.tsx once app/page.tsx is removed.
