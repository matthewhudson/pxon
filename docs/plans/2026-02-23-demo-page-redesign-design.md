# PXON Demo Page Redesign — SNES RPG UI

## Overview

Redesign the `docs/index.html` demo page from a generic corporate style to a bold SNES RPG menu UI aesthetic (Final Fantasy VI / Chrono Trigger inspired). Pure CSS implementation, single self-contained HTML file, zero external dependencies beyond Google Fonts.

## Visual Foundation

- **Background:** Deep navy/indigo (#0a0a2e) with subtle scanline overlay
- **Font:** "Press Start 2P" (Google Fonts) — iconic pixel font
- **Color palette:**
  - Window chrome: #1a1a4e, #2a2a6e (classic RPG blues)
  - Text: white/cream (#e8e8e8)
  - Accents: gold (#ffd700) for highlights
  - RPG borders: bright outer edge (#8888ff), inner dark edge (#1a1a3e)
- **Window chrome:** Double-border RPG dialog boxes — outer bright edge, inner dark edge, gradient blue fill
- **Cursor:** RPG triangle pointer (▶) for menu items

## Page Structure

### 1. Hero Section
- "PXON" title in large pixel font with decorative star characters
- "Pixel Object Notation" tagline below
- Centered layout

### 2. Info Dialog Box
- RPG-styled dialog describing the project
- Links styled as RPG menu items with ▶ prefix
- Links to GitHub repo and PXON spec

### 3. Example Cards (side-by-side, stack on mobile)
- **Mario Sprite:** Classic 16x16 pixel character in SNES palette (red hat, blue overalls)
- **1-Up Mushroom:** Classic 16x16 sprite (green/white cap, tan stem)
- Each card is an RPG dialog window with:
  - Title in pixel font
  - Pixel grid visualization
  - Collapsible "View JSON" toggle styled as RPG menu selection

### 4. Custom Input Section
- RPG dialog window
- Dark-themed textarea with pixel border
- "VISUALIZE" button styled as RPG action button (gold text, dark bg, pixel border, glow on hover)
- Success/error messages as RPG system messages

## Technical Approach

- **Pure CSS** for all decorative elements (no images, no SVGs)
- RPG borders via nested box-shadows and layered borders
- Single self-contained HTML file
- Google Fonts: "Press Start 2P" only external dependency
- Same JS rendering logic for pixel grids (float-based, div per pixel)
- Responsive: flexbox grid, stacks single-column on mobile
- Dark-themed code blocks with green monospace text

## Pixel Sprites

### Mario (16x16)
Standard SNES-era Mario sprite using colors:
- Red (#ff0000) for hat and shirt
- Blue (#0000cc) for overalls
- Skin (#ffb580) for face/hands
- Brown (#8b4513) for hair and shoes
- White (#ffffff) for gloves/eyes

### 1-Up Mushroom (16x16)
Classic mushroom sprite using colors:
- Green (#00a800) for cap spots
- White (#ffffff) for cap base
- Tan (#ffcc99) for stem
- Black (#000000) for outlines

## Content Changes

- **Remove:** Basic 3x3 square example, heart example
- **Add:** Mario sprite example, 1-Up mushroom example
- **Keep:** Custom PXON input section (restyled)
- **Keep:** Info section about PXON (restyled as RPG dialog)
