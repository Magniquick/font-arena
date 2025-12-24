# AGENTS

## Stack & Layout
- React 19 + TypeScript + Vite (vite resolved to `rolldown-vite@7.2.5` via overrides).
- Styling via Tailwind CSS 4 (see `tailwind.config.js`) plus custom CSS in `src/styles/` (e.g., `arena.css`, `components.css`, `index.css`, `variables.css`).
- Dependency lockfile: `bun.lock` (prefer `bun install` to match). TypeScript build uses project refs (`tsconfig.app.json`, `tsconfig.node.json`).

## Setup & Commands
- Install: `bun install` (respects `bun.lock`).
- Dev server: `bun run dev` (Vite).
- Build: `bun run build` (runs `tsc -b` then `vite build`).
- Lint: `bun run lint` (flat ESLint config; ignores `dist`).
- Preview production build: `bun run preview`.

## Code Organization
- Entry: `src/main.tsx` mounts `App` with `StrictMode` and global styles.
- `src/App.tsx` renders the `Arena` component.
- Components: `src/components/` (`Arena` main screen, `FontCard`, `CodePreview`, `DesignPreview`, `UIShellPreview`).
- State/logic: `src/hooks/useTournament.ts` orchestrates tournament rounds; `src/utils/gameLogic.ts` shuffles fonts and builds matches; `src/utils/fontLoader.ts` dynamically injects Google Fonts.
- Data: `src/data/fonts.ts` holds font lists (`MONO_FONTS`, `SANS_FONTS`, `POPULAR_FONTS`).
- Assets: `src/assets/` (e.g., `react.svg`); public assets in `public/`.

## Interaction & Logic Highlights
- `Arena` manages mode (`design` | `code` | `ui`), language for code preview, and tournament state via `useTournament`. In code mode it feeds `MONO_FONTS`; otherwise `SANS_FONTS`.
- `useTournament` starts with shuffled fonts, preloads via `loadFont`, tracks rounds/matches, accumulates winners, and sets `champion` when one remains. `restart` restarts with shuffled fonts.
- `gameLogic.createRound` pairs fonts sequentially; single odd item currently dropped (no bye handling implemented).
- `FontCard` renders font name/badge and delegates preview: `CodePreview` (syntax-highlighted snippets with registered JS/Python/Rust), `UIShellPreview` (UI shell mock), or `DesignPreview` (headline/buttons/inputs/tags).
- `fontLoader.loadFont` injects `<link>` for Google Fonts using family names; reuses by id to avoid duplicates.
- Progress indicator in `Arena` uses `Math.log2(progress.roundLength * 2)` to derive round number and `progress.matchIndex + 1` for match count.

## Styling Notes
- Tailwind colors and radii use CSS variables (`--color-*`, `--radius-*`).
- Component-specific classes defined in CSS files under `src/styles/`; Tailwind utility classes heavily used in `UIShellPreview`.

## Testing & Quality
- No automated tests present. Run `bun run lint` for checks.

## Gotchas / Tips
- Ensure fonts exist on Google Fonts; `loadFont` assumes standard family naming and appends weights `400;700`.
- Odd-numbered font lists lose the last item in `createRound`; adjust if you need bye handling.
- `CodePreview` uses `react-syntax-highlighter` light build; languages must be registered before use (already for JS/Python/Rust).
- Vite uses the rolldown build; use `bun run preview` to test production output.
