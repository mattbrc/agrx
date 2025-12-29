# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production (static export to /out)
npm run lint     # Run ESLint
npm start        # Serve production build
```

## Architecture

This is a Next.js 16 App Router project configured for **static export** (`output: "export"` in next.config.ts). The site is a healthcare clinic landing page for "AG Rx".

**Key configuration:**
- Static export mode - no server-side features, generates static HTML to `/out`
- Images are unoptimized (required for static export)
- Path alias `@/*` maps to `./src/*`
- Tailwind CSS v4 with PostCSS
- ESLint 9 flat config with Next.js core-web-vitals and TypeScript rules

**Source structure:**
- `src/app/` - App Router pages and layouts
- `src/app/page.tsx` - Main landing page with all sections (client component with booking modal state)
- `src/app/layout.tsx` - Root layout with Geist fonts and metadata
- `src/app/globals.css` - Global styles and Tailwind imports

**Styling conventions:**
- Tailwind utility classes throughout
- Emerald color scheme for primary branding
- Zinc for neutral/gray colors
