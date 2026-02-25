# PXON Demo Page Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign `docs/index.html` from generic corporate style to a bold SNES RPG menu UI with Mario and 1-Up Mushroom pixel art examples.

**Architecture:** Single self-contained HTML file. Pure CSS for all RPG decorative elements (double-border dialog boxes, pixel-art buttons, scanline overlay). "Press Start 2P" Google Font. Same float-based JS pixel grid rendering logic, updated with new sprite data.

**Tech Stack:** HTML, CSS, vanilla JS, Google Fonts ("Press Start 2P")

**Design doc:** `docs/plans/2026-02-23-demo-page-redesign-design.md`

---

### Task 1: CSS Foundation — Dark Background, Pixel Font, Base Reset

**Files:**
- Modify: `docs/index.html` (full rewrite of `<style>` block and `<head>`)

**Step 1: Replace the `<head>` section**

Replace the Google Fonts link from Inter to Press Start 2P. Update the `<style>` block with:

- CSS custom properties for the SNES palette:
  - `--bg-deep: #0a0a2e` (page background)
  - `--window-bg: #1a1a4e` (dialog box fill)
  - `--window-border-light: #8888ff` (outer bright edge)
  - `--window-border-dark: #1a1a3e` (inner dark edge)
  - `--text-primary: #e8e8e8` (body text)
  - `--text-gold: #ffd700` (accents, buttons)
  - `--text-green: #68ff68` (code text)
  - `--code-bg: #0d0d2d` (code blocks)
- Body: dark background, pixel font, centered max-width 900px
- Scanline overlay via `body::after` with repeating-linear-gradient (2px lines, semi-transparent)

**Step 2: Verify in browser**

Run: `pnpm run docs:serve` (or open `docs/index.html` directly)
Expected: Dark navy background, pixel font applied to all text, subtle scanline overlay visible

**Step 3: Commit**

```bash
git add docs/index.html
git commit -m "style: add SNES RPG CSS foundation with pixel font and dark theme"
```

---

### Task 2: RPG Dialog Box Component

**Files:**
- Modify: `docs/index.html` (add `.rpg-box` CSS class)

**Step 1: Create the RPG dialog box CSS**

Add `.rpg-box` class that creates the classic double-border RPG window:
- Background: `var(--window-bg)`
- Border: 4px solid `var(--window-border-light)`
- Outline: 4px solid `var(--window-border-dark)`
- Box-shadow: `inset 0 0 0 2px var(--window-border-dark), 0 0 0 2px #000`
- Padding: 24px
- `image-rendering: pixelated` where applicable

Also style:
- `.rpg-box h2` — gold text, uppercase, letter-spacing
- `.rpg-box p` — lighter text, line-height 2 for readability with pixel font
- `.rpg-link` — styled as `▶ Link Text` with gold hover glow
- `.rpg-btn` — gold text on dark bg, pixel border, `text-shadow: 2px 2px 0 #000`, hover glow via box-shadow

**Step 2: Verify in browser**

Apply `.rpg-box` to the info section. Should look like a classic FF6 blue dialog box.

**Step 3: Commit**

```bash
git add docs/index.html
git commit -m "style: add RPG dialog box component with borders and button styles"
```

---

### Task 3: Hero Section

**Files:**
- Modify: `docs/index.html` (rewrite `<header>` HTML + add hero CSS)

**Step 1: Rewrite the header HTML**

Replace the current `<header>` with:
- `<h1>` containing `★  P X O N  ★` (spaced letters, decorative stars)
- `<p class="tagline">` with "Pixel Object Notation"
- Both centered, hero section with extra vertical padding

**Step 2: Add hero CSS**

- `h1`: font-size 2rem (scales down on mobile), color gold, text-shadow for pixel glow
- `.tagline`: smaller pixel font, lighter color, letter-spacing
- Header padding: 60px top, 30px bottom

**Step 3: Verify in browser**

Expected: Bold gold pixel-font title with stars, tagline below, dark background, centered

**Step 4: Commit**

```bash
git add docs/index.html
git commit -m "style: add SNES RPG hero section with pixel title"
```

---

### Task 4: Info Dialog Box Section

**Files:**
- Modify: `docs/index.html` (rewrite info section HTML)

**Step 1: Restyle the info section**

Wrap the project description in an `.rpg-box`. Restyle:
- Description text about PXON
- Links as RPG menu items: `<a class="rpg-link" href="...">▶ View on GitHub</a>`
- Link to PXON spec: `<a class="rpg-link" href="...">▶ PXON Specification</a>`

**Step 2: Verify in browser**

Expected: Blue RPG dialog box with project description, links appear as selectable menu items with ▶ prefix

**Step 3: Commit**

```bash
git add docs/index.html
git commit -m "style: restyle info section as RPG dialog box"
```

---

### Task 5: Mario Sprite Data

**Files:**
- Modify: `docs/index.html` (replace `examples.basic` in JS)

**Step 1: Create Mario 16x16 sprite data**

Replace the `basic` example with a `mario` example. Define a 16x16 grid using the PXON demo format:
- Colors map: `R: '#E52521'` (red), `B: '#0038A8'` (blue overalls), `S: '#FFB580'` (skin), `H: '#6B3304'` (hair/shoes), `Y: '#FBD000'` (buttons)
- Pixel array: Classic standing Mario pose — red cap, face with mustache, red shirt, blue overalls, brown shoes
- The sprite should be recognizably Mario at 16x16

**Step 2: Update the corresponding HTML section**

Change "Basic PXON Example" to "Mario Sprite" with id `mario-json` and `mario-grid`.

**Step 3: Verify in browser**

Expected: Mario sprite renders correctly in pixel grid — recognizable red cap, face, blue overalls

**Step 4: Commit**

```bash
git add docs/index.html
git commit -m "feat: add Mario sprite example replacing basic square"
```

---

### Task 6: 1-Up Mushroom Sprite Data

**Files:**
- Modify: `docs/index.html` (replace `examples.heart` in JS)

**Step 1: Create 1-Up Mushroom 16x16 sprite data**

Replace the `heart` example with a `mushroom` example. Define a 16x16 grid:
- Colors map: `G: '#00A800'` (green spots), `W: '#FFFFFF'` (white cap), `T: '#FFCC99'` (tan stem), `K: '#000000'` (black outline), `E: '#FFE0BD'` (eye whites)
- Pixel array: Classic 1-Up mushroom — dome top with green spots on white, two eyes, tan stem
- Should be recognizably the 1-Up mushroom at 16x16

**Step 2: Update the corresponding HTML section**

Change "Heart PXON Example" to "1-Up Mushroom" with id `mushroom-json` and `mushroom-grid`.

**Step 3: Verify in browser**

Expected: 1-Up mushroom renders correctly — green/white dome cap with spots, eyes, tan stem

**Step 4: Commit**

```bash
git add docs/index.html
git commit -m "feat: add 1-Up Mushroom sprite example replacing heart"
```

---

### Task 7: Example Cards Layout

**Files:**
- Modify: `docs/index.html` (CSS for side-by-side cards + rpg-box styling on examples)

**Step 1: Style the example cards**

- Wrap Mario and Mushroom examples in a `.examples-grid` flex container
- Each card is an `.rpg-box` with:
  - Title as `<h2>` in gold
  - Pixel grid centered within the box
  - Collapsible JSON section styled dark with green monospace text
  - `details summary` styled as RPG menu item: `▶ View PXON JSON`
- Grid: `display: flex; gap: 24px; flex-wrap: wrap;` — side by side on desktop, stacked on mobile
- Each card: `flex: 1 1 380px; min-width: 300px;`

**Step 2: Style the pixel grid**

- Remove old `.pixel` border styling for empty cells (no dotted borders on dark bg)
- Empty pixels: transparent (shows rpg-box background)
- Pixel size: 16px per pixel for 16x16 sprites (256px total width — fits nicely)
- Grid border: 2px solid var(--window-border-light)

**Step 3: Verify in browser**

Expected: Two RPG dialog boxes side by side, each showing a pixel art sprite. On narrow screens they stack.

**Step 4: Commit**

```bash
git add docs/index.html
git commit -m "style: add side-by-side RPG card layout for example sprites"
```

---

### Task 8: Custom Input Section Restyle

**Files:**
- Modify: `docs/index.html` (CSS + HTML for custom input section)

**Step 1: Restyle the custom input section**

- Wrap in `.rpg-box`
- Textarea: dark background (`var(--code-bg)`), green text (`var(--text-green)`), pixel border matching RPG style, monospace font (not pixel font — readability)
- Button: `.rpg-btn` class — gold text, dark bg, pixel border, glow on hover
- Success message: RPG system message style — green text in a small bordered box
- Error message: Red/pink text in a small bordered box

**Step 2: Verify in browser**

Expected: Custom input in an RPG box, dark textarea, gold VISUALIZE button, grid renders below

**Step 3: Commit**

```bash
git add docs/index.html
git commit -m "style: restyle custom input section with RPG theme"
```

---

### Task 9: Responsive Polish and Final Touches

**Files:**
- Modify: `docs/index.html`

**Step 1: Add responsive breakpoints**

```css
@media (max-width: 700px) {
  /* Stack example cards, reduce font sizes, adjust padding */
}
```

- Title: scale down to 1.2rem on mobile
- RPG boxes: reduce padding to 16px
- Example grid: force single column

**Step 2: Add finishing CSS touches**

- `::selection` styled with gold background
- Smooth hover transitions on buttons and links
- Ensure scanline overlay doesn't interfere with interactivity (`pointer-events: none`)

**Step 3: Full visual verification in browser**

Open `docs/index.html` and verify:
- [ ] Dark SNES RPG background with scanlines
- [ ] Gold pixel-font title with stars
- [ ] Info section as RPG dialog box
- [ ] Mario sprite renders correctly
- [ ] 1-Up mushroom sprite renders correctly
- [ ] Custom input works (paste JSON, click VISUALIZE)
- [ ] Responsive — stacks on narrow viewport
- [ ] All links work (GitHub, PXON spec)

**Step 4: Commit**

```bash
git add docs/index.html
git commit -m "style: add responsive polish and final RPG touches"
```

---

### Task 10: Final Validation

**Step 1: Run project validation**

```bash
pnpm run validate
```

Expected: All lint, format, typecheck, and tests pass (demo page is not part of the build/test pipeline, but ensure nothing is broken)

**Step 2: Visual spot-check**

Open `docs/index.html` in browser one final time and confirm the full experience is cohesive.
