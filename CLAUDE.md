# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PXON (Pixel Object Notation) is a TypeScript library for handling pixel art data in a JSON-based format. It provides import, export, and manipulation of pixel data with EXIF-like metadata. Zero runtime dependencies. Published to npm with CJS, ESM, and type definition outputs.

## Commands

- **Build:** `pnpm run build` (cleans dist/ then bundles via tsup)
- **Dev mode:** `pnpm run dev` (tsup watch mode)
- **Test:** `pnpm run test` (vitest run)
- **Run single test:** `pnpm exec vitest run --testPathPattern="<pattern>"`
- **Test watch:** `pnpm run test:watch`
- **Test coverage:** `pnpm run test:coverage`
- **Lint:** `pnpm run lint` / `pnpm run lint:fix`
- **Format:** `pnpm run format` / `pnpm run format:check`
- **Typecheck:** `pnpm run typecheck`
- **Full validation:** `pnpm run validate` (lint + format + typecheck + test)

## Architecture

The entire library is a single source file (`src/index.ts`) with its tests in `src/index.test.ts`.

**Core class: `PXON`**
- Stores pixels in a `Map<string, Pixel>` keyed by `"x:y"` coordinate strings for O(1) lookups
- Private `_data: PXONData` holds metadata (artist, software, copyright, etc.) exposed via getter/setter pairs
- `import(data)` / `export()` handle serialization to/from the `PXONImportData`/`PXONExportData` interfaces
- `setPixel()` defaults: color `#ffffff`, size `1`

**Interfaces:** `PXONData`, `Pixel`, `PXONImportData`, `PXONExportData` — all defined in `src/index.ts`.

## Build Outputs

tsup produces artifacts in `dist/`:
- `dist/index.mjs` — ES Modules
- `dist/index.cjs` — CommonJS
- `dist/index.d.ts` — Type declarations
- `dist/index.d.cts` — CJS type declarations

## Code Style

- **Prettier:** No semicolons, single quotes, trailing commas (ES5), 100 char width
- **TypeScript:** Strict mode with `noImplicitAny` and `strictNullChecks`
- **ESLint:** Flat config format (`eslint.config.js`), typescript-eslint + prettier plugins
- **Node:** v22 required (enforced via `.nvmrc` and `engine-strict=true`)

## Toolchain

- **Package manager:** pnpm
- **Bundler:** tsup (esbuild-based)
- **Test runner:** Vitest
- **CI:** GitHub Actions with pnpm

## Release Process

Uses [Changesets](https://github.com/changesets/changesets) for versioning. Commits follow conventional commit format.
