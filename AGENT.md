# Funroad Multi-Vendor E-Commerce Agent Guide

## Commands
- Build: `bun run build` / `npm run build`
- Dev: `bun run dev` / `npm run dev`
- Lint: `bun run lint` / `npm run lint`
- Type check: `bun run build` (no separate typecheck command)
- Database: `bun run db:fresh` (migrate), `bun run db:seed` (seed), `bun run db:reset` (fresh + seed)
- Generate types: `bun run generate:types` (PayloadCMS types)

## Architecture
- **Framework**: Next.js 15 App Router with TypeScript
- **CMS**: PayloadCMS 3.x with multi-tenant plugin
- **Database**: MongoDB via Mongoose adapter
- **State**: tRPC + TanStack Query for client-server communication
- **UI**: Radix UI + Tailwind CSS + shadcn/ui components
- **Auth**: PayloadCMS built-in auth with custom access controls

## Code Style
- **Imports**: Use `@/` prefix for src imports, `@payload-config` for payload config
- **Components**: Functional components with TypeScript, use `"use client"` directive when needed
- **Styling**: Tailwind CSS with `cn()` utility for class merging, shadcn/ui component variants
- **Types**: Strict TypeScript with `noUncheckedIndexedAccess`, generate PayloadCMS types
- **File Structure**: Module-based architecture under `src/modules/`, UI components in `src/components/ui/`
- **Naming**: kebab-case for files, PascalCase for components, camelCase for variables
- **Error Handling**: Use toast notifications (sonner), async/await patterns
