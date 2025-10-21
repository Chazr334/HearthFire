## Hearthfire — Light the Fire • Keep the Flame

Inclusive, historically-informed Heathen community site built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui-inspired components. The experience blends a dark stone aesthetic with ember highlights, poetic storytelling, and plain-language guidance where clarity matters most.

### Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with custom palette and tailwindcss-animate
- shadcn/ui utility patterns and lucide-react icons
- Client-side validation with Zod

### Getting Started
```bash
pnpm install
pnpm dev
```
Visit `http://localhost:3000` to explore the site locally.

### Production Build
```bash
pnpm build
pnpm start
```

### Project Highlights
- Poetic hero and ritual copy paired with plain-language accessibility and policy sections.
- Responsive layout with sticky navigation, skip link, and keyboard-friendly mobile menu.
- Seed data for events, social links, and contact topics in `lib/data.ts`.
- Structured data (`Organization` + seeded `Event` entries) injected via JSON-LD.
- Subtle ember particle animation that respects `prefers-reduced-motion`.

### File Structure
- `app/` — App Router pages, root layout, global styles, sitemap, and robots rules.
- `components/` — Reusable UI (hero, section wrapper, cards, forms, callouts).
- `lib/` — Seed data, SEO helpers, motion hook, and utility functions.
- `public/` — Logo SVG and a small stone texture placeholder.
- `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json` — Build configuration.

### Accessibility Notes
Semantic markup, descriptive labels, aria-live validation feedback, visible focus states, and motion-reduction fallbacks are baked into both components and styles.
