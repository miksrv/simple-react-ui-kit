# Migration guide: component stylesheet (`styles.css`)

The component styles now ship as `simple-react-ui-kit/styles.css` instead of being injected into
`<head>` by JavaScript.

**Why:** injected styles appear only when the bundle runs. A server-rendered page (Next.js, Remix)
is painted with unstyled buttons, containers and menus first and jumps when the app hydrates. Search
engines count this as layout shift (Core Web Vitals CLS). A real stylesheet is loaded with the page,
cached by the browser and styles the very first paint.

**What to do:**

1. Import the stylesheet once in the app entry, after the tokens and before your own overrides:

    ```ts
    // Next.js (pages router): pages/_app.tsx
    // Vite / CRA: src/main.tsx
    import 'simple-react-ui-kit/theme.css'
    import 'simple-react-ui-kit/styles.css'
    import '@/styles/theme.css' // your overrides
    ```

    Without this import every component renders unstyled.

2. **Check the cascade.** Injected styles used to be appended at the end of `<head>`, after the app
   stylesheets, so they won over an app rule of the same specificity: a `className` passed to a kit
   component with, say, `.myButton { height: 40px }` was silently ignored. Now the app styles load
   last and such rules apply. Review the places where you pass `className` to kit components and
   delete rules that were never meant to apply, or raise the specificity of those that were
   duplicated to win (`!important`, doubled selectors).

3. **Remove workarounds.** If the project copied the kit CSS into the server HTML (e.g. a `<style>`
   in Next.js `_document`) to avoid the layout shift, delete it.

---

# Migration guide: design tokens (`theme.css`)

This guide is for projects that consume `simple-react-ui-kit` and are upgrading to the release that
ships the design tokens as `theme.css`. It lists what changed, why, and what to do in the host project,
step by step. Use it as the checklist when bringing another project onto this version.

**In one paragraph:** the kit now ships its tokens as a stylesheet (`simple-react-ui-kit/theme.css`)
with a built-in dark theme, organised in three layers (primitives → semantic → component). Form fields
share one label, one error style and one focus ring. Defaults moved to current conventions: 36px
controls, 6px control radius, 12px card radius, 13px/500 labels, 4px spacing grid. A handful of
hardcoded values and bugs were fixed along the way.

---

## 1. Upgrade checklist

1. **Import the tokens once**, before your own overrides, in the app entry point.

    ```ts
    // Next.js (pages router): pages/_app.tsx
    // Vite / CRA: src/main.tsx
    import 'simple-react-ui-kit/theme.css'
    import '@/styles/theme.css' // your overrides
    ```

    Previously the kit shipped no stylesheet and every project had to redefine every variable.
    Components reference tokens without fallbacks, so a project that skips this import renders unstyled.

2. **Trim your theme file to real overrides.** Delete every token whose value equals the kit default
   (see `src/styles/theme.css`). Keep brand colours, size tweaks and anything project-specific.
   A typical override file shrinks to 20–40 lines.

3. **Rename tokens** you still define, using the table in section 3.

4. **Dark theme.** The kit switches on `data-theme="dark"`: on `<html>` for the whole page, or on any
   element to darken only that subtree. If your project already uses that
   attribute, your dark overrides keep working; put them under `:root[data-theme='dark']`.
   If you used a different mechanism (a class, `prefers-color-scheme`), either set the attribute or
   copy the dark block from `theme.css` into your own selector.
   Alias tokens of your own (`--my-card-bg: var(--surface-1)`) must be declared on `:root, [data-theme]`,
   not on `:root` alone, or they keep the light value inside a dark subtree (see the comment on layer 3 in
   `theme.css`).

5. **Style `body` yourself.** The old `global.css` set `body { background; color }`. `theme.css`
   defines variables only. Add to your global stylesheet:

    ```css
    body {
        background: var(--body-background);
        color: var(--text-color-primary);
        font: var(--font-size) / var(--line-height) var(--font-family);
    }
    ```

6. **Check deep imports.** `package.json` now has an `exports` map. Only `simple-react-ui-kit`,
   `simple-react-ui-kit/theme.css` and `simple-react-ui-kit/package.json` can be imported.
   Anything like `simple-react-ui-kit/dist/...` must go.

7. **Review the visual changes** in section 4 and decide for each whether to accept the new default or
   pin the old value in your override file.

8. **Run the app in both themes** and check: form labels, Select with tags, icon-only buttons, tables,
   dialogs, anything that used `Badge` in a list (its outer margin is gone).

---

## 2. Token architecture

```
theme.css
├── 1. Primitives   --size-*  --space-*  --radius-*  --font-*  --duration-*  --ease  --z-*
├── 2. Semantic     --body-background  --surface-1..3  --border  --border-strong
│                   --text-color-*  --color-main*  --color-green|orange|red*
│                   --shadow-sm|md|lg  --focus-ring  --focus-outline
├── 3. Component    --input-*  --button-*  --badge-*  --container-*  --dialog-*
│                   --popout-*  --dropdown-*  --table-*  --tooltip-*  --message-*  …
└── 4. Dark theme   [data-theme='dark']  (colours only; <html> or any subtree)
```

Override at the level that matches the scope of the change:

| You want to…                         | Override                                     |
| ------------------------------------ | -------------------------------------------- |
| Rebrand                              | `--color-main*` (layer 2)                    |
| Make every card and menu flatter     | `--radius-*` (layer 1)                       |
| Round only the buttons               | `--button-radius` (layer 3)                  |
| Switch to filled (grey) fields       | `--input-background-color: var(--surface-2)` |
| Denser UI                            | `--size-control-*`, `--space-*`              |
| Different font stack                 | `--font-family`                              |
| Keep the kit radius but bigger cards | `--container-radius`                         |

Rules the kit now follows internally (apply the same in your project's own components):

- No hardcoded colours, radii, durations, z-indexes or spacing in component styles — tokens only.
- Component tokens alias semantic tokens, never raw values, so a theme switch cascades.
- Keyboard focus uses `:focus-visible`; `:hover` and `:focus` never share a rule.
- Components do not set outer margins; parents lay them out with `gap`.
- Animations are disabled under `prefers-reduced-motion: reduce`.

---

## 3. Token changes

### Renamed or replaced

| Before                                                       | After                                                      | Notes                                                       |
| ------------------------------------------------------------ | ---------------------------------------------------------- | ----------------------------------------------------------- |
| `global.css` (not published)                                 | `simple-react-ui-kit/theme.css`                            | Import it; see step 1                                       |
| `--border-radius` as the only radius                         | `--radius-xs                                               | sm                                                          | md              | lg  | xl  | full` + per-component | `--border-radius` stays as the alias for the control radius (`6px`) |
| hardcoded `0.5px` borders                                    | `--input-border: 1px solid …`, `--border`                  | Hairlines rendered inconsistently; 1px everywhere           |
| hardcoded `rgba(0,0,0,.11)` skeleton                         | `--skeleton-background`                                    |                                                             |
| hardcoded dialog shadow                                      | `--dialog-shadow`                                          |                                                             |
| hardcoded `z-index` values                                   | `--z-dropdown`, `--z-overlay`, `--z-dialog`, `--z-tooltip` | Same default values as before                               |
| hardcoded transitions (`300ms cubic-bezier…`, `.15s`, `.2s`) | `--duration-fast                                           | base                                                        | slow`, `--ease` |     |
| invalid `box-shadow: rgba(var(--input-border-focus-color))`  | `--focus-ring`                                             | The old rule was not valid CSS, so fields had no focus ring |
| `--table-header-background-hover: rgba(255,255,255,.1)`      | `var(--surface-3)`                                         | Old value was invisible on a light header                   |

### New tokens (defaults)

| Token                                                          | Default                                                     |
| -------------------------------------------------------------- | ----------------------------------------------------------- |
| `--space-1` … `--space-6`                                      | `4px 8px 12px 16px 20px 24px`                               |
| `--radius-xs / sm / md / lg / xl / full`                       | `2px 4px 6px 8px 12px 9999px`                               |
| `--font-size-large`, `--line-height`                           | `16px`, `1.5`                                               |
| `--font-weight-normal / medium / semibold`                     | `400 / 500 / 600`                                           |
| `--duration-fast / base / slow`, `--ease`                      | `150ms / 200ms / 300ms`, `cubic-bezier(0.2, 0, 0, 1)`       |
| `--z-dropdown / overlay / dialog / tooltip`                    | `405 / 500 / 600 / 10000`                                   |
| `--surface-1 / 2 / 3`                                          | `#fff / #f3f4f6 / #e9ebee`                                  |
| `--border`, `--border-strong`                                  | `#e4e6ea`, `#cfd3d9`                                        |
| `--text-color-disabled`                                        | `#9aa3ad`                                                   |
| `--ink-rgb`                                                    | `23, 28, 36` (shadow tint)                                  |
| `--shadow-sm / md / lg`                                        | see `theme.css`                                             |
| `--focus-ring-color`, `--focus-ring`, `--focus-outline`        | `color-mix(main 30%)`, `0 0 0 3px …`, `2px solid main`      |
| `--container-radius`, `--container-padding`                    | `var(--radius-xl)`, `var(--space-4)`                        |
| `--dialog-radius`, `--dialog-shadow`                           | `var(--radius-xl)`, `var(--shadow-lg)`                      |
| `--popout-radius`                                              | `var(--radius-lg)`                                          |
| `--input-radius`                                               | `var(--border-radius)`                                      |
| `--input-disabled-background-color`                            | `var(--surface-2)`                                          |
| `--input-placeholder-color`                                    | `var(--text-color-secondary)`                               |
| `--input-label-font-size / -weight / -gap`                     | `13px / 500 / 6px`                                          |
| `--input-hint-font-size`                                       | `var(--font-size-small)`                                    |
| `--button-radius`                                              | `var(--border-radius)`                                      |
| `--button-outline-color / -border-color / -border-color-hover` | primary text, `var(--border-strong)`, secondary text        |
| `--button-link-color / -hover`                                 | `var(--color-main)`, `var(--color-main-hover)`              |
| `--badge-radius`, `--badge-background`, `--badge-border-color` | `var(--radius-sm)`, `var(--surface-2)`, `var(--border)`     |
| `--message-radius`                                             | `var(--radius-lg)`                                          |
| `--tooltip-radius / -background / -color`                      | `var(--radius-sm)`, primary text colour, `var(--surface-1)` |
| `--progress-radius`, `--progress-background`                   | `var(--radius-full)`, `var(--surface-3)`                    |
| `--skeleton-radius`, `--skeleton-background`                   | `var(--radius-md)`, `var(--surface-3)`                      |

### Changed defaults

| Token                       | Before                                                 | After                         | Why                                                         |
| --------------------------- | ------------------------------------------------------ | ----------------------------- | ----------------------------------------------------------- |
| `--size-small/medium/large` | `28 / 34 / 38px`                                       | `28 / 36 / 44px`              | 36px is the common desktop control; 44px is a touch target  |
| `--size-control-*`          | `24 / 30 / 36px`                                       | inherit `--size-*`            | One scale unless a project needs two                        |
| `--border-radius`           | `4px`                                                  | `6px` (`--radius-md`)         | Matches current desktop UI conventions                      |
| `--input-background-color`  | `#f2f3f5` (filled)                                     | `var(--surface-1)` (outlined) | Input was already transparent; Select was filled. Now equal |
| `--input-border`            | `0.5px solid`                                          | `1px solid`                   | Hairline borders blur on non-retina screens                 |
| `--input-label-color`       | `#6d7885`                                              | `var(--text-color-secondary)` | One grey                                                    |
| `--container-shadow`        | `inset 0 0 0 .5px rgba(…)`                             | `0 0 0 1px var(--border)`     | Same hairline look, token-driven, no blur                   |
| `--overlay-background`      | `rgba(242,243,252,.7)`                                 | `rgba(ink, .45)`              | Standard dimming scrim                                      |
| `--color-green/orange/red`  | `#4bb34b / #f8a01c / #e64646`                          | `#2f7d43 / #b9560f / #b42318` | Old tones fail 4.5:1 contrast as text on white              |
| `--color-*-background`      | saturated tints                                        | pale tints of the same hue    | Pairs with the deeper tones above                           |
| `--color-main-hover/active` | lighter / darker                                       | both darker                   | Hover should deepen, not fade                               |
| `--font-family`             | includes `'Segoe UI (Custom)'`, `'Open Sans (Custom)'` | system stack                  | Custom names were project-specific                          |

To keep the previous look while you migrate, pin the old values in your override file:

```css
/* legacy-look.css — temporary, remove once screens are reviewed */
:root {
    --size-medium: 34px;
    --size-control-small: 24px;
    --size-control-medium: 30px;
    --size-control-large: 36px;
    --border-radius: 4px;
    --container-radius: var(--border-radius);
    --dialog-radius: var(--border-radius);
    --popout-radius: var(--border-radius);
    --badge-radius: var(--border-radius);
    --input-background-color: #f2f3f5;
    --input-label-font-size: var(--font-size);
    --input-label-font-weight: 400;
}
```

---

## 4. Visual changes by component

Everything below is the new default. Each item names the token to override if you want the old behaviour.

**Input, TextArea, Select**

- Same label on all three: 13px, weight 500, 6px gap below (`--input-label-*`). Before: 14px/400 with 6px (Input) or 4px (Select) gaps.
- Same field background (`--input-background-color`). Before: Input transparent, Select filled grey.
- Error state is a red border plus the message; the field is no longer filled red. Error focus shows a red ring.
- Disabled fields use `--input-disabled-background-color` and `--text-color-disabled` instead of `opacity: .5`.
- Placeholder colour is `--input-placeholder-color`.
- Focus shows the soft ring from `--focus-ring` (the previous rule was invalid CSS and rendered nothing).
- `[readonly]` text uses `--text-color-secondary` instead of a hardcoded black alpha (works in dark theme).
- Select: option rows are at least one control height tall and have a `--shadow-md`; the list offset no longer assumes a 34px trigger. Selected tags sit in a 4px gap grid; Badge margins are gone.

**Button**

- Icon and text are spaced with `gap` (6px; 4px at `small`) instead of an SVG margin.
- `:focus-visible` draws `--focus-outline`. `:focus` no longer shares the hover background.
- Icon-only buttons (`noText`) are square: no horizontal padding, `aspect-ratio: 1`. Set a `width` on the button if you relied on the old padding.
- `mode='outline'` and `mode='link'` are now styled. Both were accepted by the types but had no CSS, so they rendered as the plain ghost button. `outline` draws a 1px `--border-strong` border; `link` is brand-coloured text that underlines on hover. If you used either as a ghost button, switch to `mode='secondary'` or override the new `--button-outline-*` / `--button-link-*` tokens.
- `large` uses `--font-size-large` (16px).
- Disabled opacity is `.5` (was `.64`).

**Badge**

- No outer `margin: 2px`. Lay badges out with `gap` in the parent.
- `medium` text is 12px (`--font-size-small`); `large` stays 14px.
- Background `--badge-background` (surface-2), border `1px solid var(--badge-border-color)`, radius `--badge-radius` (4px).

**Container**

- Radius `--container-radius` (12px), padding `--container-padding` (16px; was 15px).
- Title is 16px/600 (was inherited size, 500). Header and actions use `gap` instead of margins.

**Dialog**

- Radius `--dialog-radius` (12px), shadow `--dialog-shadow`, header padding 16px, title 16px/600.
- Back and close buttons are vertically centred in the header and show a focus outline.

**Table**

- Header cells: weight 500 and `--text-color-secondary` (was browser-default bold, primary colour).
- Header hover is visible on light themes (`--table-header-background-hover`).

**Calendar / DatePicker**

- Selected start and end dates are `--color-main` with contrast text; the in-between range is `--color-main-background`. Before, the range selectors did not match the component's class names, so range days were not highlighted at all.
- Header and day-of-week rows use `--surface-2` / `--border`; weekdays are 12px secondary text.
- Mobile breakpoint unified at 768px (was 728px in two places, 768px in another).

**Tooltip, Popout, Message, Progress, Skeleton, Overlay**

- Radii, shadows, z-indexes and durations come from tokens (see section 3). Progress bars are pill-shaped (`--progress-radius: var(--radius-full)`). Animations stop under `prefers-reduced-motion`.

---

## 5. Recommended app-level conventions

The kit sets the look of individual controls; how a page composes them is up to the project.
These conventions are what the defaults were tuned for. Adopt them in the project's own layout styles.

**Rhythm.** Everything on a 4px grid using `--space-*`. Between form fields: `--space-4` (16px).
Between sections: `--space-6` (24px). Between a label and its field: `--input-label-gap`.
Between buttons in a row: `--space-2` / `--space-3`.

**Radius tiers.** Inner elements have a smaller radius than their container, never the same one:
controls `--radius-md` (6) → menus and messages `--radius-lg` (8) → cards and dialogs `--radius-xl` (12).
Chips and tooltips `--radius-sm` (4).

**Form width.** Text fields read best at 480–720px. Give a form column `max-width: 680px`, or use a
two-column grid on wide screens (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`) and let
full-width elements such as maps or editors span both columns. Do not stretch a title input to 1200px.

**Labels and hints.** Label above the field, 13px/500 secondary colour (the kit default). Helper or
error text below, 12px. Every field gets a label, including maps, editors and upload zones.

**Actions.** Primary action right-aligned as `mode='primary'`, cancel as `mode='outline'` or `mode='link'`,
destructive actions as `variant='negative'`. One primary per form. On mobile stack them full-width
or pin them to the bottom.

**Density.** Desktop apps: `--size-control-medium: 36px`. Touch-first or marketing pages: 44px.
Dense admin tables: 32px. Change the token, not individual components.

**Dark mode.** Toggle `data-theme="dark"` on `<html>` and override only colour tokens. Sizes, radii and
motion never change between themes.

---

## 6. Example: migrating a project theme file

Before (an excerpt of a typical pre-`theme.css` project file, 200+ lines):

```css
:root {
    --size-small: 24px;
    --size-medium: 32px;
    --size-large: 38px;
    --size-control-medium: 40px;
    --font-size: 14px;
    --font-size-small: 12px;
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --border-radius: 8px;
    --body-background: #f1f2f4;
    --container-background-color: #ffffff;
    --container-shadow: 0 0 0 1px #e4e6ea;
    --input-background-color: #f3f4f6;
    --input-border-color: #cfd3d9;
    --input-border: 1px solid var(--input-border-color);
    --input-label-color: #6d7885;
    --dropdown-background-color: #ffffff;
    --dropdown-background-color-hover: #f3f4f6;
    --color-main: #3770b1;
    --color-main-hover: #2f64a0;
    --color-main-active: #295891;
    --color-main-background: #e3eefb;
    --button-primary-background: var(--color-main);
    /* … 150 more lines that duplicate kit defaults … */
}
:root[data-theme='dark'] {
    /* … another 80 lines … */
}
```

After (`theme.css` imported first; only real overrides remain):

```css
:root {
    /* Brand */
    --color-main: #3770b1;
    --color-main-hover: #2f64a0;
    --color-main-active: #295891;
    --color-main-background: #e3eefb;

    /* Project-specific tokens the kit does not know about */
    --width-max: 1260px;
    --color-tier-gold: #ffd700;
}

:root[data-theme='dark'] {
    --color-main: #4f93e6;
    --color-main-hover: #66a2eb;
    --color-main-active: #3f85d9;
    --color-main-background: #243a55;
}
```

Decisions to make while trimming:

- `--size-control-medium: 40px` → drop it (36px) unless the product is touch-first.
- `--border-radius: 8px` → drop it (6px controls, 12px cards) or keep `8px` deliberately.
- `--input-background-color: grey` → drop it for outlined fields, keep for filled fields.
- Project-only tokens (layout widths, domain colours) stay; keep them in a clearly separated block.
- If the project defined `--radius-sm/md/lg` with its own values, map them: the kit scale is
  `xs 2 / sm 4 / md 6 / lg 8 / xl 12`. Replace project usages of a differently-sized `--radius-md`
  with the matching kit step rather than redefining the kit token.

---

## 7. Troubleshooting

- **Components render unstyled (default browser buttons, no card backgrounds).**
  `simple-react-ui-kit/styles.css` is not imported. Add it after `theme.css`.

- **Controls render with no size or colour.** `theme.css` is not imported, or is imported after a
  stylesheet that resets custom properties. It must load once, before your overrides.
- **Focus ring is missing in an old browser.** `--focus-ring-color` uses `color-mix()`
  (Chrome 111+, Safari 16.2+, Firefox 113+). For older targets set
  `--focus-ring-color: rgba(38, 136, 235, 0.3)` in your overrides.
- **Dark theme does not apply.** The selector is `:root[data-theme='dark']`. Check that the attribute
  is on `<html>`, not `<body>`.
- **Badges in a list are touching.** The outer margin was removed; add `gap` to the parent.
- **An icon-only button got narrower.** It is now square. Set `width` or wrap the icon in text if you
  need the old shape.
- **Build error: cannot import `simple-react-ui-kit/dist/...`.** Use the package root or
  `simple-react-ui-kit/theme.css`; deep paths are not exported.
