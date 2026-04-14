---
name: Storybook Story Authoring Patterns
description: Rules for writing Storybook stories — meta structure, CSF3 format, argTypes, title conventions, story naming and variants
type: feedback
---

## File Location

Stories live in `storybook/stories/ComponentName.stories.tsx`. The `storybook/` directory is at the repo root, not inside `src/`.

---

## Import Pattern

```tsx
import React from 'react' // always present, even if JSX is implicit

import type { Meta, StoryObj } from '@storybook/react'

import { ComponentName, type ComponentNameProps, iconNames } from '../../src'
// iconNames is imported when a prop accepts icon names (for the 'select' control)
```

For stateful stories, also import hooks:

```tsx
import React, { useState } from 'react'
```

Import path from stories to source is always `'../../src'`.

---

## Format: CSF3 (Component Story Format 3)

The project uses **CSF3** exclusively — `StoryObj<typeof meta>`, not the older `StoryFn` / `Template.bind({})` pattern. The only exception is the Select story, which uses a local `Template` function component with `useState` for stateful demos, but the story objects themselves are still `StoryObj<typeof meta>`.

```tsx
const meta: Meta<ComponentNameProps> = { ... }
export default meta
type Story = StoryObj<typeof meta>   // local alias used consistently

export const Default: Story = { ... }
```

---

## Meta Object Structure

```tsx
const meta: Meta<ComponentNameProps> = {
    title: 'Category/ComponentName',
    component: ComponentName,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'One-paragraph description of what the component does and its main use cases.'
            }
        }
    },
    argTypes: {
        // one entry per prop
    }
}
```

### `title` Naming Convention (Category/ComponentName)

There are two categories observed in the codebase:

- `'Components/Badge'`, `'Components/Button'` — standalone display/UI primitives
- `'Controls/Input'`, `'Controls/Select'`, `'Controls/Checkbox'` — form input controls

New components should follow whichever category fits: display elements → `Components/`, form controls → `Controls/`.

### `tags: ['autodocs']`

Always include. This enables Storybook's automatic docs page generation.

### `parameters.docs.description.component`

Write one paragraph describing the component purpose, variants it supports, and any important behavioral notes. Mention prop names inline using backtick formatting, e.g., `'Use the \`link\` prop to render the button inside an \`<a>\` tag.'`

---

## argTypes Structure

Each prop in `argTypes` uses this pattern:

```tsx
propName: {
    control: 'text' | 'boolean' | 'select' | 'inline-radio' | 'object' | false,
    description: 'Description of what this prop does',
    options: ['value1', 'value2'],    // for select/inline-radio only
    table: {
        defaultValue: { summary: 'defaultValue' },   // optional: shows in docs table
        type: { summary: '"value1" | "value2"' }     // optional: shows in docs table
    }
}
```

### Control type rules

- `string` props → `control: 'text'`
- `boolean` props → `control: 'boolean'`
- Union string types with 2-3 options (e.g., `'small' | 'medium' | 'large'`) → `control: 'inline-radio'`
- Union string types with 4+ options → `control: 'select'`
- `IconTypes` props → `control: 'select', options: Object.keys(iconNames)` — requires `iconNames` import
- Callback props (`onClick`, `onChange`, `onSelect`) → `control: false, description: '...'`
- Complex object/array props (e.g., `options`, `value`) → `control: false`
- Action callbacks in Select → `{ action: 'onSelect', description: '...' }` pattern

### `table` field usage

- Always include `table.defaultValue.summary` when there is a default value (e.g., `'medium'`, `'primary'`, `'false'`)
- Include `table.type.summary` for union types that should be shown in the docs table
- Skip `table` entirely for simple text/boolean props that don't need extra documentation

---

## Story Object Structure

### Simple story with args (no render function)

```tsx
export const Default: Story = {
    args: {
        children: 'Click me',
        mode: 'primary',
        size: 'medium'
    },
    parameters: {
        docs: {
            description: { story: 'One sentence describing this specific story.' }
        }
    }
}
```

### Custom render story (multiple instances, layout, wrappers)

```tsx
export const Sizes: Story = {
    name: 'Sizes',
    render: () => (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button size='small'>Small</Button>
            <Button size='medium'>Medium</Button>
            <Button size='large'>Large</Button>
        </div>
    ),
    parameters: {
        docs: {
            description: { story: 'The three available sizes: `small`, `medium`, and `large`.' }
        }
    }
}
```

### Stateful story (for interactive components like Select)

Define a local `Template` function component with `useState` inside the story file, then reference it in `render`:

```tsx
const Template = (args: SelectProps<string>) => {
    const [value, setValue] = useState<string | string[] | undefined>(args.value)
    return (
        <Select
            {...args}
            value={value}
            onSelect={(opts) => {
                setValue(opts?.[0]?.key)
            }}
        />
    )
}

export const Default: StoryObj<typeof meta> = {
    render: Template,
    args: { options: countries, placeholder: 'Select a country' }
}
```

### `name` property

The `name` property overrides the export identifier as the display name in Storybook UI:

```tsx
export const WithRemove: Story = {
    name: 'With Remove Button',
    ...
}
```

Use `name` whenever the display label should have spaces or formatting different from the export identifier. For simple cases like `Default`, `Checked`, `Disabled`, `Sizes`, the export identifier is sufficient and `name` is omitted.

---

## Story Naming Conventions

Required stories for every component:

- `Default` — the main interactive story; uses `args`, no `render`, allows Controls panel exploration
- `Disabled` — shows the disabled state (use `render` if showing multiple disabled variants)
- `Sizes` — if the component has a `size` prop; use `render` with all three sizes side by side

Additional stories based on what the component supports:

- `WithIcon` / `With Icon` — if there's an `icon` prop
- `WithError` / `With Error` — if there's an `error` prop
- `LoadingState` / `Loading State` — if there's a `loading` prop
- `Modes` — if there's a `mode` prop with multiple options
- `Variants` / `Positive / Negative Variants` — if there's a `variant` prop
- `Required` — if there's a `required` prop
- `Checked`, `Indeterminate` — for Checkbox-style components
- `AllVariants` — a showcase combining multiple states (useful for badge-like components)

---

## Inline Styles in Stories

Stories use inline `style` props for layout containers — this is intentional and acceptable only in Storybook stories (never in production components):

```tsx
<div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
```

Common layout patterns:

- Side by side: `{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }`
- Stacked vertically: `{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }`
- Full width constraint: `{ maxWidth: '400px', width: '100%' }`

---

## `parameters.docs.description.story`

Every story should have a one-sentence description in `parameters.docs.description.story`. Use backticks to reference prop names inline:

- "The `ghost` mode renders a minimal borderless input — useful for inline search fields."
- "When `loading` is `true` the button content is replaced with a spinner and the button becomes non-interactive."
- "All four `mode` options shown side by side."

---

## Data Fixtures in Story Files

For complex components (like Select), define sample data arrays at the module level, above the stories:

```tsx
const countries: Array<SelectOptionType<string>> = [
    { key: 'us', value: 'United States', emoji: '🇺🇸' },
    ...
]
```

These live in the story file itself — there is no shared fixtures file.
