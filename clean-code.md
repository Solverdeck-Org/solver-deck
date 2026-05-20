# Clean Code Guidelines for Next.js 16+ • Tailwind CSS v4 • TypeScript • React • Bun • Biome

**Purpose**: This is a strict rulebook for AI code generation (and human developers). Follow **every rule** to produce readable, maintainable, type-safe, performant code. Violations will be rejected in reviews. These rules eliminate 95%+ of common AI-generated code problems.

**Last Updated**: May 2026 (Next.js 16.2+ LTS, Tailwind v4, React 19 via Next.js)

---

## 1. Stack & Required Versions

| Technology       | Version          | Key Reason                          | Docs |
|------------------|------------------|-------------------------------------|------|
| **Next.js**      | 16+ (LTS 16.2.6+) | App Router, Server Components default, React Compiler, new caching | [nextjs.org/docs](https://nextjs.org/docs) |
| **Tailwind CSS** | v4+             | CSS-first config, massive perf gains, new engine | [tailwindcss.com/docs](https://tailwindcss.com/docs) • [Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide) |
| **TypeScript**   | Strict mode     | Zero `any`, full type safety       | [typescriptlang.org/docs](https://www.typescriptlang.org/docs/) |
| **React**        | 19+ (via Next)  | Server Components, Actions, Compiler | [react.dev](https://react.dev/) |
| **Bun**          | Latest          | Fast runtime & package manager     | [bun.sh/docs](https://bun.sh/docs) |
| **Biome**        | Latest          | Blazing-fast lint + format (replaces ESLint + Prettier) | [biomejs.dev](https://biomejs.dev/) |

**Project Init Recommendation**:
```bash
bun create next-app@latest . --yes
# Then install: bun add -D @biomejs/biome
# Configure biome.json (see below)
```

---

## 2. File Size Limits (Hard Rules)

These are **non-negotiable**. AI frequently produces 200+ line monsters — reject them.

| File Type                  | Max Lines | Action if Exceeded                  |
|----------------------------|-----------|-------------------------------------|
| `app/**/page.tsx`          | **60**    | Split into smaller components + server actions |
| `app/**/layout.tsx`        | **50**    | Extract metadata/logic              |
| `app/**/loading.tsx` / `error.tsx` | **40** | Keep minimal                        |
| Any **Component** (`.tsx`) | **80-100** | Extract sub-components/hooks (aim <80) |
| Custom **Hooks** (`use*.ts`) | **50**   | Split logic                         |
| **Utils** / **lib**        | **40**    | Pure functions only                 |
| **Server Actions** (`actions.ts`) | **60** | One action per file if complex      |

**Enforcement**:
- Code review checklist includes line count.
- Use editor ruler + Biome (add custom rule if possible via plugins).
- Prefer **composition**: one component = one clear responsibility.

---

## 3. TypeScript — Zero Tolerance Policy

**NO `any` — EVER.** This is the #1 AI mistake.

### Mandatory Rules
- `tsconfig.json` must have:
  ```json
  {
    "compilerOptions": {
      "strict": true,
      "noImplicitAny": true,
      "strictNullChecks": true,
      "noUncheckedIndexedAccess": true,
      "exactOptionalPropertyTypes": true
    }
  }
  ```
- **Always** type everything:
  ```tsx
  interface UserProfileProps {
    user: User;
    onUpdate: (data: Partial<User>) => Promise<void>;
  }

  export function UserProfile({ user, onUpdate }: UserProfileProps) { ... }
  ```
- Use `unknown` + type guards when dynamic data arrives.
- Prefer `interface` for object shapes, `type` for unions/aliases.
- Use Zod for runtime validation + `z.infer<typeof schema>` for types.
- **Never** use `// @ts-ignore` or `// @ts-nocheck`. Use `// biome-ignore` only with explanation.

---

## 4. Tailwind CSS v4 — Avoid All Deprecated v3 Classnames

**Critical**: Many AIs still output v3 syntax. v4 has a new engine and **breaking changes**.

### Forbidden (v3) → Required (v4)

| Deprecated v3                  | v4 Replacement                          | Notes |
|--------------------------------|-----------------------------------------|-------|
| `bg-opacity-50`, `text-opacity-50`, etc. | `bg-black/50`, `text-black/50`         | **Most common AI error** |
| `@tailwind base;`<br>`@tailwind components;`<br>`@tailwind utilities;` | `@import "tailwindcss";`               | In `app/globals.css` |
| `shadow-sm` / `shadow`         | `shadow-xs` / `shadow-sm`              | Shadow scale shifted |
| `rounded` / `rounded-sm`       | `rounded-sm` / `rounded-xs`            | Same shift |
| `blur` / `blur-sm`             | `blur-sm` / `blur-xs`                  | — |
| `outline-none`                 | `outline-hidden`                       | — |
| `ring` (default 3px)           | `ring-3` or `ring-1 ring-blue-500`     | Default ring width changed to 1px |
| `flex-shrink-0`                | `shrink-0`                             | — |
| `flex-grow`                    | `grow`                                 | — |
| `overflow-ellipsis`            | `text-ellipsis`                        | — |
| `decoration-slice` / `decoration-clone` | `box-decoration-slice` / `box-decoration-clone` | — |
| Arbitrary values `bg-[--brand]` | `bg-(--brand)`                         | Use parentheses |
| Spaces in arbitrary: `grid-cols-[max-content, auto]` | `grid-cols-[max-content_auto]` | Use underscore |

**Correct Next.js + Tailwind v4 Setup** (`app/globals.css`):
```css
@import "tailwindcss";

@theme {
  --font-sans: var(--font-geist-sans);
  /* Add custom theme tokens here */
}

/* Optional: restore some v3 defaults if needed */
@layer base {
  button { cursor: pointer; }
}
```

**PostCSS** (`postcss.config.mjs`):
```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

**Full Migration**: Run `bunx @tailwindcss/upgrade` then review.

---

## 5. Project Architecture (Clean + Feature-Based)

**Goal**: Changes to one feature should touch **as few files as possible**.

```
src/ (or root)
├── app/                          # ONLY routing + thin orchestration (<60 lines each)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── (marketing)/
│   ├── (dashboard)/
│   │   └── layout.tsx
│   └── api/                      # Route handlers only when needed
├── features/                     # Business domains (user, billing, products...)
│   ├── user/
│   │   ├── components/           # Small, focused UI pieces
│   │   ├── hooks/
│   │   ├── actions.ts            # Server Actions (typed)
│   │   ├── types.ts
│   │   └── index.ts
│   └── product/
├── shared/                       # Truly reusable across features
│   ├── ui/                       # Design system primitives (Button, Card, Input...)
│   │   ├── button.tsx            # <80 lines each
│   │   └── ...
│   ├── lib/                      # Pure utils, API clients, formatters
│   ├── hooks/                    # Cross-feature hooks
│   └── types/                    # Global types
├── public/
└── biome.json
```

**Key Rules**:
- `app/` folder = **thin**. No heavy logic, no big components.
- **Server Components by default**. Add `"use client"` **only** for:
  - Browser APIs, event handlers, state, effects.
- Use **Server Actions** for all mutations (progressive enhancement).
- Keep `features/` self-contained.

---

## 6. General Coding Rules (Common AI Failures)

### Components & JSX
- One component per file (except tiny sub-components).
- Destructure props immediately.
- Early returns for loading/error/empty states.
- **Never** put complex logic or long ternaries in JSX.
- Use `key` on every list item (stable, unique).
- Extract repeated JSX into components.

### Data Fetching & State
- Fetch **in Server Components** or Route Handlers.
- Use `cache: 'force-cache'` / `revalidate` explicitly.
- For client state: prefer URL (`useSearchParams`), then `useState`/`useReducer`.
- Heavy client state → Zustand (typed) or TanStack Query.
- **Never** fetch in `useEffect` unless absolutely necessary.

### Error Handling & UX
- Every route **must** have `loading.tsx` + `error.tsx`.
- Wrap data fetches in `<Suspense>`.
- Server Actions: always return typed result `{ success: boolean; data?: T; error?: string }`.
- Show user-friendly messages. Never leak stack traces.

### Performance & Modern Next.js 16+
- Always use `<Image>` from `next/image` with `sizes`, `priority` where critical.
- Use React Compiler (enabled by default in Next 16) — avoid manual `useMemo`/`useCallback` unless profiling shows need.
- Dynamic imports for heavy modals/charts: `const Heavy = dynamic(() => import('./Heavy'))`
- Metadata API (generateMetadata) instead of `next/head`.

### Naming & Organization
- **Components**: PascalCase (`UserProfileCard.tsx`)
- **Hooks**: `use` prefix (`useUserProfile.ts`)
- **Files**: kebab-case for non-components if needed.
- Functions: verb + noun (`fetchUserData`, `handleSubmit`)
- Constants: `SCREAMING_SNAKE_CASE` for true constants.

### Imports & Biome
- Use `@/` alias (configured in `tsconfig.json` + `biome.json`).
- Biome will auto-sort and remove unused imports — let it.
- Recommended `biome.json` (strict):
  ```json
  {
    "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
    "organizeImports": { "enabled": true },
    "linter": {
      "enabled": true,
      "rules": {
        "recommended": true,
        "correctness": { "noUnusedImports": "error" },
        "suspicious": { "noExplicitAny": "error" },
        "complexity": { "noExcessiveCognitiveComplexity": "warn" }
      }
    },
    "formatter": { "enabled": true, "indentStyle": "space", "indentWidth": 2 }
  }
  ```

---

## 7. Skills & Patterns You Must Use

| Skill / Pattern                  | When to Use                              | Benefit |
|----------------------------------|------------------------------------------|---------|
| **React Server Components**      | Default for everything possible         | Zero JS bundle, direct DB access |
| **Server Actions**               | All form submissions & mutations        | Type-safe, progressive enhancement |
| **Suspense + loading.tsx**       | Any async data                          | Streaming UI, instant feedback |
| **Error Boundaries (error.tsx)** | Every route segment                     | Graceful failures |
| **Zod + Server Action validation**| Any user input                          | Runtime + compile-time safety |
| **next/image + next/font**       | All images & custom fonts               | Optimized, self-hosting |
| **Parallel Routes + Interception**| Modals, dashboards with side panels     | Native UX without client state |
| **URL State** (`useSearchParams`)| Filters, pagination, tabs               | Shareable, bookmarkable, no client state |
| **Composition over Props**       | Complex UIs                             | Smaller, reusable pieces |
| **Optimistic Updates**           | Likes, comments, form submits           | Perceived instant feedback |

---

## 8. What AI Usually Gets Wrong (Checklist Before Output)

- [ ] Used `any` anywhere?
- [ ] File > line limit?
- [ ] Used deprecated Tailwind v3 classes (`bg-opacity-*`, old shadows, `@tailwind` directives)?
- [ ] Put business logic in a page or client component?
- [ ] No loading/error states?
- [ ] Inline styles or `style={{}}` instead of Tailwind?
- [ ] Fetched data with `useEffect`?
- [ ] Used Pages Router patterns (`getServerSideProps`, `next/router`)?
- [ ] Magic numbers/strings without constants?
- [ ] No types on props or actions?
- [ ] Long nested ternaries or 50-line JSX return?

**If any checked → REWRITE.**

---

## 9. Resources & Further Reading

- **Clean Code Principles**: *Clean Code* by Robert C. Martin (functions <20 lines, meaningful names, single responsibility)
- **Next.js 16 App Router**: https://nextjs.org/docs/app
- **Tailwind v4 Full Changes**: https://tailwindcss.com/docs/upgrade-guide
- **TypeScript Strict Best Practices**: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
- **React Server Components Deep Dive**: https://react.dev/reference/rsc/server-components
- **Biome Configuration Guide**: https://biomejs.dev/guides/configure-biome/
- **Feature-Sliced Design** (inspiration): https://feature-sliced.design/
- **Practical Clean Architecture for Next.js**: Search "Clean Architecture Next.js 16" (many production examples exist)

---

**Final Rule**: When in doubt, make it **smaller**, **more typed**, and **more server-first**.

Copy this file into your project root and reference it in every prompt to the AI:

> "Strictly follow every rule in `/clean-code.md`. No exceptions."

This document will dramatically improve code quality and reduce iteration cycles.