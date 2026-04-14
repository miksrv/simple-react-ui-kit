---
name: Component Authoring Patterns
description: Rules for writing new UI components — structure, TypeScript conventions, cn() usage, prop patterns, Sass class naming
type: feedback
---

## File and Folder Structure

Every component lives at `src/components/<component-name>/` and must contain exactly:

- `ComponentName.tsx` — main component
- `ComponentName.test.tsx` — unit tests
- `index.ts` — barrel export
- `styles.module.sass` — Sass module styles
- `types.ts` — TypeScript types (always a separate file, never inline in the component)
- `utils.ts` — only if needed

**Why:** The project enforces strict separation of types, styles, tests, and component logic. The index.ts barrel is what gets re-exported from `src/index.ts`.

**How to apply:** Never embed interfaces directly in `.tsx` files. Always put them in `types.ts` and import from there.

---

## TypeScript Interface Conventions

### Interface naming and extension

- Interface names follow the pattern `ComponentNameProps` (e.g., `ButtonProps`, `BadgeProps`, `InputProps`)
- Interfaces always extend the relevant HTML attributes type:
    - For `<div>` wrappers: `extends React.HTMLAttributes<HTMLDivElement>`
    - For `<input>` wrappers: `extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>` (use `Omit` to override conflicting props like `size`)
    - For `<button>` wrappers: `extends React.ButtonHTMLAttributes<HTMLButtonElement>`
    - For checkbox: `extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>` (prevents overriding `type`)
- Generic components use `<T>` directly on the interface: `export interface SelectProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>`

### Prop order in interface

1. `className?: string` — always first, always optional
2. Component-specific boolean flags (e.g., `required`, `disabled`, `loading`, `multiple`)
3. `size?: ElementSizeType` — from shared types
4. String/number props (e.g., `label`, `placeholder`, `error`)
5. Complex object props (e.g., `options`, `value`)
6. Callback props (e.g., `onSelect`, `onSearch`, `onClickRemove`)
7. `children?: React.ReactNode` — near the end if applicable

### JSDoc

Every prop must have a `/** Description */` JSDoc comment. The comment sits on the line immediately above the prop definition, no blank line between comment and prop. Example:

```ts
/** Additional class names for custom styling */
className?: string
/** Size of the component */
size?: ElementSizeType
```

### Shared types

- `ElementSizeType = 'small' | 'medium' | 'large'` — import from `../../types`
- `ButtonModeType = 'primary' | 'secondary' | 'outline' | 'link'` — import from `../../types`
- `IconTypes` — import from `../icon`

### Interface file header

Always include a JSDoc block comment for the interface itself:

```ts
/**
 * ComponentName component properties
 */
export interface ComponentNameProps ...
```

---

## Component Implementation

### Import order (exact pattern)

```tsx
import React from 'react'

import { cn } from '../../utils'
import { Icon } from '../icon' // cross-component imports come here
import { Spinner } from '../spinner'

import { ComponentNameProps } from './types' // local types last before styles

import styles from './styles.module.sass'
```

Note: blank line between each import group (node_modules, utils/cross-component, local, styles).

### Component function signature

- Use `React.FC<ComponentNameProps>` as the type
- Destructure all named props, spread `...props` at the end
- Apply default values inline in the destructure: `size = 'medium'`, `mode = 'primary'`
- Simple components use arrow function expression (no `function` keyword), often written as a single-expression return with parentheses and no explicit `return` keyword
- Stateful/complex components use arrow function with `{}` body

### cn() usage

`cn()` accepts any number of `string | boolean | undefined` arguments and joins truthy strings with spaces. Import path is always `../../utils`.

Patterns:

```tsx
// Boolean conditions (no ternary needed):
cn(styles.badge, size && styles[size], className)

// Dynamic class from prop value (string indexing):
cn(styles.button, mode && styles[mode], variant && styles[variant])

// Multiple conditions on root element:
cn(className, styles.select, required && styles.required, disabled && styles.disabled)
```

Key rules:

- `className` from props comes **first** in `cn()` when on the root element (see Input, Select) OR **last** (see Badge, Checkbox) — verify which the component uses; prefer first position for root elements
- Dynamic variant/mode/size classes use bracket notation: `styles[mode]`, `styles[size]`
- Boolean flag classes use `&&`: `loading && styles.loading`
- `cn()` is never used in Sass files, only in TSX

### Props spreading

- Spread `...props` on the root DOM element: `<div {...props} className={cn(...)}>`
- When there's a multi-element structure, spread only goes to the root element (e.g., Input spreads on the outer wrapper `div`, not the inner `input`)
- The `className` from `cn()` overrides anything that might come through `...props` — place the computed `className` explicitly

### children handling

- Conditionally render: `{children && <div className={styles.content}>{children}</div>}`
- Or render directly: `{label?.length ? label : children}`

### forwardRef pattern

Used when a component wraps a native form element that consumers may need to ref (e.g., Checkbox):

```tsx
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, ...props }, ref) => { ... }
)
Checkbox.displayName = 'Checkbox'
```

### useId for accessible IDs

Complex form components (Checkbox, Select) use `useId()` to generate unique IDs:

```tsx
const generatedId = useId()
const inputId = id ?? generatedId
```

---

## Sass Module Conventions

### File format: `.sass` (not `.scss`)

Indentation-based syntax, no braces or semicolons.

### Class naming: camelCase

All class names are camelCase: `.inputContainer`, `.formField`, `.buttonLink`, `.valueContainer`, `.clearButton`, `.labelText`. No kebab-case, no BEM with double underscores.

### Root class matches component name

The primary root class mirrors the component name: `.button`, `.badge`, `.select`, `.checkbox`, `.inputContainer` (container suffix used when the root wraps child elements).

### Size/variant classes as siblings

Sizes and modes are applied as sibling classes on the same element and nested inside the root class using `&`:

```sass
.button
    // base styles
    &.small
        height: var(--size-small)
    &.medium
        height: var(--size-medium)
    &.primary
        background-color: var(--button-primary-background)
```

### CSS variables pattern

All colors, sizes, fonts, borders use CSS variables — never hardcoded values for theme-sensitive properties:

```sass
font-family: var(--font-family), sans-serif
font-size: var(--font-size)
color: var(--text-color-primary)
border: var(--input-border)
background-color: var(--input-background-color)
height: var(--size-small)      // var(--size-medium), var(--size-large)
border-radius: var(--border-radius)
```

Color variables:

- `var(--color-red)`, `var(--color-red-hover)`, `var(--color-red-active)`, `var(--color-red-background)`
- `var(--color-green)`, `var(--color-green-hover)`, `var(--color-green-active)`
- `var(--color-contrast)`

State classes:

- `.disabled` — applied to wrapper, uses `opacity` or `pointer-events: none`
- `.required` — triggers `::after` with `'*'` content on the label
- `.error` — applies red border and background
- `.loading` — `cursor: wait; pointer-events: none`
- `.focused`, `.open` — transient interaction state classes

---

## index.ts Barrel File

Each component's `index.ts` exports the component and its types separately:

```ts
export { Badge } from './Badge'
export { type BadgeProps } from './types'
```

The main `src/index.ts` re-exports all components and their types. When adding a new component, add a line following the alphabetical order already present.

---

## src/index.ts Export Pattern

```ts
export { ComponentName, type ComponentNameProps } from './components/component-name'
```

The `cn` utility is also exported from the root index: `export { cn } from './utils'`.
