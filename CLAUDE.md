# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sentiment3 landing page - a single-page marketing site for a Web3/crypto sentiment marketing service. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

**Single-page structure**: All page components live in `app/page.tsx` as a monolithic file (~1000 lines). Each section is a separate function component:
- `Navigation` - Fixed navbar with scroll detection and mobile menu
- `HeroSection` - Main hero with animated sentiment dashboard card
- `TrustMarquee` - Auto-scrolling marquee banner
- `ProblemSection`, `HowItWorksSection`, `ComparisonSection` - Marketing content
- `PricingSection` - 4-tier pricing cards (Experimental, Starter, Growth, Launch)
- `FAQSection` - Accordion FAQ with useState for open/close
- `FinalCTASection`, `Footer` - Bottom sections

**Styling system**: Custom Tailwind theme in `tailwind.config.ts` with:
- Color palette: `midnight`, `charcoal`, `slate`, `mist`, `cream`, `sand`, `lime`, `coral`, `lavender`, `mint`
- Fonts: Space Grotesk (display), Inter (body)
- Custom animations: `marquee`, `float`, `pulse-slow`
- Custom shadows: `soft`, `soft-lg`, `lime`, `lime-sm`

**CSS utilities** in `app/globals.css`:
- Button classes: `.btn-primary`, `.btn-secondary`, `.btn-lime`
- Tag classes: `.tag`, `.tag-dark`, `.tag-lime`, `.tag-outline`
- Card classes: `.card`, `.card-dark`, `.card-elevated`
- Effects: `.card-hover`, `.animated-underline`, `.glow-lime`
- Section spacing: `.section-padding`

**Icons**: lucide-react library (imported in page.tsx)
