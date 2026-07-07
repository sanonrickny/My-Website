# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack at localhost:3000
npm run build    # Production build with Turbopack
npm run lint     # Run ESLint
```

There are no tests in this project.

## Architecture

Single-page portfolio built with **Next.js 16 App Router**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

**Key files:**
- `src/app/page.tsx` — The entire portfolio UI lives here as one large `"use client"` component. All sections (Hero, About, Skills, Experience, Projects, Contact, Footer) are rendered inline with data defined as arrays of objects within the same file.
- `src/app/layout.tsx` — Sets metadata, loads Google Fonts (`Playfair_Display` as `--font-display`, `DM_Sans` as `--font-body`), wraps the app in `ThemeProvider`.
- `src/app/globals.css` — All theming via CSS custom properties on `:root` (light) and `.dark` (dark). Reusable utility classes: `.glass-nav`, `.card`, `.card-title`, `.badge`, `.logo-text`, `.font-display`, `.link-nav`, `.link-muted`, `.btn-primary`, `.btn-outline`, `.icon-btn`.
- `src/components/theme-provider.tsx` — Wraps `next-themes` with dark as default; also exports `ThemeToggle` button.
- `src/components/typewriter-effect.tsx` — Standalone animated typewriter cycling through an array of strings.

## Theming

Colors are defined exclusively as CSS variables in `globals.css` — never use hardcoded hex values in components. The accent color differs by theme: `#8b6530` in light mode, `#c9a96e` in dark mode. Dark mode is toggled by adding `.dark` class to `<html>` (handled by `next-themes`).

## Styling conventions

- Use CSS variables (`var(--accent)`, `var(--card)`, etc.) via inline `style` props for colors that must change with the theme.
- Use Tailwind utility classes for layout, spacing, and typography sizing.
- Hover states on interactive elements use the utility classes in `globals.css` (`.link-nav`, `.link-muted`, `.btn-primary`, `.btn-outline`, `.icon-btn`, `.card-title`) — plain CSS `:hover` rules referencing CSS variables. Do not add inline `onMouseEnter`/`onMouseLeave` handlers for styling.
- Animations use Framer Motion. The `fadeUp` and `stagger` variants defined at the top of `page.tsx` are the standard animation pattern used across all sections.
