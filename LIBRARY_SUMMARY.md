# Simple React UI Kit — Library Summary

A lightweight, flexible UI component library for React 19+ with full TypeScript support.

- **NPM**: `simple-react-ui-kit`
- **Storybook Demo**: https://miksrv.github.io/simple-react-ui-kit/
- **GitHub**: https://github.com/miksrv/simple-react-ui-kit

---

## Installation

```bash
npm install simple-react-ui-kit
# or
yarn add simple-react-ui-kit
```

Import global styles in your app entry point:

```tsx
import 'simple-react-ui-kit/dist/index.css'
```

---

## CSS Customization

Override CSS variables to theme the library. Import the stylesheet first:

```tsx
import 'simple-react-ui-kit/dist/index.css'
```

Then override variables in your own stylesheet:

```css
:root {
    /* Primary color (buttons, links, checkboxes) */
    --color-main: #2688eb;
    --color-main-hover: #4c96ea;
    --color-main-active: #237edd;
    --color-main-background: #d6eaff;

    /* Semantic colors */
    --color-green: #4bb34b;
    --color-orange: #f8a01c;
    --color-red: #e64646;

    /* Input fields */
    --input-background-color: #f2f3f5;
    --input-border-color: #e0e1e7;
    --input-label-color: #6d7885;

    /* Dropdowns */
    --dropdown-background-color: #ffffff;
    --dropdown-background-color-hover: #f2f3f5;

    /* Buttons */
    --button-primary-color: #ffffff;
    --button-primary-background: var(--color-main);
    --button-primary-background-hover: var(--color-main-hover);

    /* Containers */
    --container-background-color: #ffffff;
    --container-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.12);

    /* Layout */
    --border-radius: 4px;
    --font-size: 14px;
}
```

The full list of available CSS variables is documented in the [README Style Variables section](https://github.com/miksrv/simple-react-ui-kit#style-variables-customization).

---

## Common Types

```typescript
import type { ElementSizeType, ButtonModeType } from 'simple-react-ui-kit'

type ElementSizeType = 'small' | 'medium' | 'large'
type ButtonModeType = 'primary' | 'secondary' | 'outline' | 'link'
```

---

## Utility

```typescript
import { cn } from 'simple-react-ui-kit'

// Combine class names conditionally
cn(styles.base, isActive && styles.active, className)
```

---

## Components

### Badge

Compact label with optional icon and remove button.

```tsx
import { Badge } from 'simple-react-ui-kit'

<Badge label="New" />
<Badge label="Tag" icon="Tag" size="small" />
<Badge label="Removable" onClickRemove={(key) => console.log('removed', key)} />
```

| Prop            | Type                               | Default    | Description                         |
| --------------- | ---------------------------------- | ---------- | ----------------------------------- |
| `label`         | `string \| number`                 | —          | Text content                        |
| `icon`          | `IconTypes \| React.ReactElement`  | —          | Icon displayed alongside label      |
| `size`          | `'small' \| 'medium' \| 'large'`   | `'medium'` | Badge size                          |
| `onClickRemove` | `(key?: string \| number) => void` | —          | Shows remove button, fires on click |
| `className`     | `string`                           | —          | Additional CSS classes              |

---

### Button

Versatile button supporting icons, loading state, sizes, modes, and optional link rendering.

```tsx
import { Button } from 'simple-react-ui-kit'

<Button label="Save" mode="primary" />
<Button label="Cancel" mode="outline" />
<Button label="Delete" mode="primary" variant="negative" />
<Button label="Open" link="/dashboard" />
<Button label="Loading..." loading />
<Button icon="Download" label="Export" size="small" />
<Button stretched>Full Width</Button>
```

| Prop        | Type                                              | Default     | Description                                                                                                                                                                      |
| ----------- | ------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`     | `string`                                          | —           | Button text                                                                                                                                                                      |
| `children`  | `React.ReactNode`                                 | —           | Button content (alternative to label)                                                                                                                                            |
| `mode`      | `'primary' \| 'secondary' \| 'outline' \| 'link'` | `'primary'` | Visual style                                                                                                                                                                     |
| `variant`   | `'positive' \| 'negative'`                        | —           | Positive/negative color variant                                                                                                                                                  |
| `size`      | `'small' \| 'medium' \| 'large'`                  | —           | Button size                                                                                                                                                                      |
| `icon`      | `IconTypes`                                       | —           | Icon name                                                                                                                                                                        |
| `loading`   | `boolean`                                         | `false`     | Show loading spinner                                                                                                                                                             |
| `stretched` | `boolean`                                         | `false`     | Full-width button                                                                                                                                                                |
| `link`      | `string`                                          | —           | Render as `<a>` with this href                                                                                                                                                   |
| `noIndex`   | `boolean`                                         | `false`     | Add `rel="noindex"` to link                                                                                                                                                      |
| `disabled`  | `boolean`                                         | —           | Disable the button. When combined with `link`, the anchor uses `aria-disabled="true"`, `tabIndex={-1}`, and omits `href` — making it non-navigable and screen-reader accessible. |

---

### Calendar

Interactive inline calendar with date range selection and navigation.

```tsx
import { Calendar } from 'simple-react-ui-kit'

// Single date selection
<Calendar onDateSelect={(date) => console.log(date)} />

// Date range selection
<Calendar
    datePeriod={['2024-01-01', '2024-01-31']}
    onPeriodSelect={(start, end) => console.log(start, end)}
/>

// With constraints
<Calendar
    minDate="2024-01-01"
    maxDate="2024-12-31"
    locale="ru"
/>
```

| Prop                 | Type                                             | Default | Description                                                                                                       |
| -------------------- | ------------------------------------------------ | ------- | ----------------------------------------------------------------------------------------------------------------- |
| `datePeriod`         | `[string?, string?]`                             | —       | Selected date range (YYYY-MM-DD). When changed externally, the calendar navigates to the month of the start date. |
| `minDate`            | `string`                                         | —       | Minimum selectable date (day granularity)                                                                         |
| `maxDate`            | `string`                                         | —       | Maximum selectable date (day granularity)                                                                         |
| `locale`             | `'en' \| 'ru'`                                   | `'en'`  | Language for labels                                                                                               |
| `hideDaysOfWeek`     | `boolean`                                        | `false` | Hide day-of-week header row                                                                                       |
| `containerClassName` | `string`                                         | —       | Class for outer container                                                                                         |
| `onDateSelect`       | `(date: string) => void`                         | —       | Called on single date click                                                                                       |
| `onPeriodSelect`     | `(startDate?: string, endDate?: string) => void` | —       | Called on range selection                                                                                         |

---

### Checkbox

Three-state checkbox (checked / unchecked / indeterminate) with accessible label.

```tsx
import { Checkbox } from 'simple-react-ui-kit'

<Checkbox label="Accept terms" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
<Checkbox label="Select all" indeterminate />
<Checkbox label="Disabled option" disabled />
```

| Prop            | Type                        | Default | Description                         |
| --------------- | --------------------------- | ------- | ----------------------------------- |
| `label`         | `string \| React.ReactNode` | —       | Label displayed next to checkbox    |
| `indeterminate` | `boolean`                   | `false` | Partial check state                 |
| `id`            | `string`                    | auto    | HTML id (auto-generated if omitted) |
| `checked`       | `boolean`                   | —       | Controlled checked state            |
| `disabled`      | `boolean`                   | —       | Disable the checkbox                |
| `className`     | `string`                    | —       | Additional CSS classes              |

---

### Container

Layout wrapper with optional title, action area, header, and footer slots.

```tsx
import { Container } from 'simple-react-ui-kit'

<Container title="Dashboard">
    <p>Main content here</p>
</Container>

<Container
    title="Users"
    action={<Button label="Add user" size="small" />}
    footer={<p>Total: 100</p>}
>
    <Table ... />
</Container>

// Custom header
<Container header={<MyCustomHeader />}>
    Content
</Container>
```

| Prop        | Type              | Default | Description                    |
| ----------- | ----------------- | ------- | ------------------------------ |
| `title`     | `string`          | —       | Header title text              |
| `action`    | `React.ReactNode` | —       | Element placed in header right |
| `header`    | `React.ReactNode` | —       | Custom header (replaces title) |
| `children`  | `React.ReactNode` | —       | Main content                   |
| `footer`    | `React.ReactNode` | —       | Footer content                 |
| `className` | `string`          | —       | Additional CSS classes         |

---

### DatePicker

Dropdown date picker combining Calendar with preset range buttons.

```tsx
import { DatePicker, PresetOption } from 'simple-react-ui-kit'

// Single date
<DatePicker
    onDateSelect={(date) => console.log(date)}
    placeholder="Pick a date"
/>

// Date range with presets
<DatePicker
    datePeriod={['2024-01-01', '2024-01-31']}
    onPeriodSelect={(start, end) => console.log(start, end)}
    locale="en"
/>

// Hide specific presets
<DatePicker
    hidePresets={[PresetOption.QUARTER, PresetOption.HALF_YEAR]}
    onDateSelect={(date) => console.log(date)}
/>
```

**PresetOption enum**:

| Value       | Description    |
| ----------- | -------------- |
| `TODAY`     | Today          |
| `DAY`       | Last 24 hours  |
| `WEEK`      | Last 7 days    |
| `MONTH`     | Last 30 days   |
| `QUARTER`   | Last 3 months  |
| `HALF_YEAR` | Last 6 months  |
| `YEAR`      | Last 12 months |

| Prop                 | Type             | Default          | Description                  |
| -------------------- | ---------------- | ---------------- | ---------------------------- |
| `placeholder`        | `string`         | `'Select date'`  | Trigger button placeholder   |
| `disabled`           | `boolean`        | `false`          | Disable the picker           |
| `buttonMode`         | `ButtonModeType` | `'primary'`      | Style of trigger button      |
| `hidePresets`        | `PresetOption[]` | —                | Presets to hide              |
| `periodDatesFormat`  | `string`         | `'DD.MM.YYYY'`   | Date range display format    |
| `singleDateFormat`   | `string`         | `'DD MMMM YYYY'` | Single date display format   |
| + all Calendar props | —                | —                | See Calendar component above |

---

### Dialog

Modal dialog with backdrop overlay, close/back buttons, and portal rendering. When open, `document.body` overflow is set to `hidden` and is restored to its original value on unmount, preventing scroll interference with the rest of the page.

```tsx
import { Dialog } from 'simple-react-ui-kit'

const [open, setOpen] = useState(false)

<Dialog
    open={open}
    title="Confirm action"
    onCloseDialog={() => setOpen(false)}
>
    <p>Are you sure?</p>
    <Button label="Confirm" mode="primary" />
</Dialog>

// With back button and custom width
<Dialog
    open={open}
    title="Step 2"
    maxWidth="700px"
    showBackLink
    backLinkCaption="Back to step 1"
    onBackClick={() => setStep(1)}
    onCloseDialog={() => setOpen(false)}
>
    Content
</Dialog>
```

| Prop              | Type                                   | Default   | Description                               |
| ----------------- | -------------------------------------- | --------- | ----------------------------------------- |
| `open`            | `boolean`                              | `false`   | Whether dialog is visible                 |
| `title`           | `string`                               | —         | Dialog header text                        |
| `maxWidth`        | `string`                               | `'500px'` | Max width of dialog                       |
| `contentHeight`   | `string`                               | —         | Fixed height of content area              |
| `showOverlay`     | `boolean`                              | `true`    | Show backdrop overlay                     |
| `showCloseButton` | `boolean`                              | `false`   | Show × close button                       |
| `showBackLink`    | `boolean`                              | `false`   | Show back navigation link                 |
| `backLinkCaption` | `string`                               | —         | Text for back link                        |
| `parentRef`       | `React.RefObject<HTMLElement \| null>` | —         | Portal container (default: document.body) |
| `onCloseDialog`   | `() => void`                           | —         | Called on close (button or Escape key)    |
| `onBackClick`     | `() => void`                           | —         | Called on back link click                 |
| `children`        | `React.ReactNode`                      | —         | Dialog body content                       |

---

### Icon

Inline SVG icon from the built-in icon set (60+ icons).

```tsx
import { Icon } from 'simple-react-ui-kit'

<Icon name="Settings" />
<Icon name="HeartFilled" className={styles.red} />
<Icon name="Search" style={{ width: 24, height: 24 }} />
```

**Available icons** (grouped by category):

| Category    | Icons                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Arrows      | `ArrowUp`, `ArrowDown`, `KeyboardUp`, `KeyboardDown`, `KeyboardLeft`, `KeyboardRight`, `DoubleUp`                                          |
| UI Controls | `Close`, `Menu`, `Settings`, `VerticalDots`, `Bell`, `Search`, `Download`, `Exit`                                                          |
| Checkboxes  | `RadioButtonChecked`, `RadioButtonUnchecked`, `CheckboxChecked`, `CheckboxUnchecked`, `CheckboxIndeterminate`, `CheckCircle`, `PlusCircle` |
| Objects     | `Camera`, `Photo`, `Bookmark`, `Award`, `Tag`, `Feed`, `Comment`, `Map`, `Compass`, `Cloud`, `Position`                                    |
| Status      | `Eye`, `HeartEmpty`, `HeartFilled`, `StarEmpty`, `StarFilled`, `ReportError`                                                               |
| Actions     | `Layers`, `Link`, `Pencil`, `Tune`, `FullscreenIn`, `FullscreenOut`, `External`, `Rotate`                                                  |
| Weather     | `Sun`, `Moon`, `Water`, `WaterDrop`, `Thermometer`, `Pressure`, `Wind`, `Lightning`                                                        |
| People      | `User`, `Users`                                                                                                                            |
| Misc        | `Time`, `Point`, `PinDrop`, `Clip`, `Telegram`, `Chart`, `BarChart`, `EditLocation`, `SolarPower`                                          |

| Prop        | Type        | Default | Description              |
| ----------- | ----------- | ------- | ------------------------ |
| `name`      | `IconTypes` | —       | Icon name (**required**) |
| `className` | `string`    | —       | Additional CSS classes   |

---

### Input

Text input field with label, error message, style modes, and size variants.

```tsx
import { Input } from 'simple-react-ui-kit'

<Input label="Email" type="email" placeholder="you@example.com" />
<Input label="Username" error="Username is required" />
<Input mode="ghost" placeholder="Search..." />
<Input size="small" label="Compact input" />
```

| Prop                                | Type                             | Default     | Description                                                  |
| ----------------------------------- | -------------------------------- | ----------- | ------------------------------------------------------------ |
| `label`                             | `string`                         | —           | Input label                                                  |
| `error`                             | `string`                         | —           | Error message below input                                    |
| `mode`                              | `'primary' \| 'ghost'`           | `'primary'` | Visual style                                                 |
| `size`                              | `'small' \| 'medium' \| 'large'` | `'medium'`  | Input size                                                   |
| `className`                         | `string`                         | —           | Additional CSS classes                                       |
| + all standard `<input>` attributes | —                                | —           | `type`, `value`, `onChange`, `disabled`, `placeholder`, etc. |

---

### Message

Alert / notification box with type-based icon and styling.

```tsx
import { Message } from 'simple-react-ui-kit'

<Message type="success" title="Saved!">Your changes have been saved.</Message>
<Message type="error" title="Error">Something went wrong.</Message>
<Message type="warning">Please review your input.</Message>
<Message type="info">This action cannot be undone.</Message>
```

| Prop        | Type                                          | Default | Description            |
| ----------- | --------------------------------------------- | ------- | ---------------------- |
| `type`      | `'error' \| 'warning' \| 'success' \| 'info'` | —       | Variant style          |
| `title`     | `string`                                      | —       | Bold message heading   |
| `children`  | `React.ReactNode`                             | —       | Message body           |
| `className` | `string`                                      | —       | Additional CSS classes |

---

### Overlay

Backdrop overlay for custom modals/drawers. Renders relative to a parent element.

```tsx
import { Overlay } from 'simple-react-ui-kit'

const containerRef = useRef<HTMLDivElement>(null)

<div ref={containerRef} style={{ position: 'relative' }}>
    <Overlay
        open={isOpen}
        overlayId="my-overlay"
        parentRef={containerRef}
        onClose={() => setIsOpen(false)}
    />
    <MyModalContent />
</div>
```

| Prop        | Type                                   | Default | Description                      |
| ----------- | -------------------------------------- | ------- | -------------------------------- |
| `open`      | `boolean`                              | `false` | Overlay visibility               |
| `overlayId` | `string`                               | —       | Unique identifier (**required**) |
| `parentRef` | `React.RefObject<HTMLElement \| null>` | —       | Parent container for positioning |
| `onClose`   | `() => void`                           | —       | Called when overlay is clicked   |

---

### Popout

Dropdown panel anchored to a trigger element, with portal rendering and click-outside close. While open, the dropdown position is updated reactively on window scroll and resize, so the panel stays correctly anchored even when the page scrolls or the viewport changes.

```tsx
import { Popout } from 'simple-react-ui-kit'
import type { PopoutHandleProps } from 'simple-react-ui-kit'

// Basic usage
<Popout trigger={<Button label="Options" />} position="right">
    <ul>
        <li>Edit</li>
        <li>Delete</li>
    </ul>
</Popout>

// Close on item click
<Popout
    trigger="More"
    closeOnChildrenClick
    onOpenChange={(isOpen) => console.log(isOpen)}
>
    <MenuItem>Action 1</MenuItem>
</Popout>

// Programmatic control
const popoutRef = useRef<PopoutHandleProps>(null)

<Popout ref={popoutRef} trigger="Open">
    <button onClick={() => popoutRef.current?.close()}>Close me</button>
</Popout>
```

| Prop                   | Type                        | Default   | Description                                               |
| ---------------------- | --------------------------- | --------- | --------------------------------------------------------- |
| `trigger`              | `React.ReactNode \| string` | —         | Element that opens the popout                             |
| `position`             | `'left' \| 'right'`         | `'right'` | Popout horizontal alignment                               |
| `disabled`             | `boolean`                   | `false`   | Disable the popout                                        |
| `closeOnChildrenClick` | `boolean`                   | `false`   | Auto-close when content is clicked                        |
| `portal`               | `boolean`                   | `false`   | Use fixed positioning (for fixed/overflow-hidden parents) |
| `onOpenChange`         | `(isOpen: boolean) => void` | —         | Called on open/close state change                         |
| `className`            | `string`                    | —         | Additional CSS classes                                    |
| `children`             | `React.ReactNode`           | —         | Popout panel content                                      |

**Ref handle** (`PopoutHandleProps`):

| Method    | Description                       |
| --------- | --------------------------------- |
| `close()` | Programmatically close the popout |

---

### Progress

Horizontal progress bar with color variants and configurable height.

```tsx
import { Progress } from 'simple-react-ui-kit'

<Progress value={75} />
<Progress value={40} color="orange" height={4} />
<Progress value={100} color="green" />
<Progress value={20} color="red" />
```

| Prop        | Type                                     | Default  | Description            |
| ----------- | ---------------------------------------- | -------- | ---------------------- |
| `value`     | `number`                                 | `0`      | Percentage (0–100)     |
| `height`    | `number`                                 | `2`      | Bar height in pixels   |
| `color`     | `'main' \| 'red' \| 'orange' \| 'green'` | `'main'` | Bar color              |
| `className` | `string`                                 | —        | Additional CSS classes |

---

### Select

Full-featured dropdown select with search, multi-select, and custom option rendering. Each instance generates a unique ID via `useId()` so that multiple selects on the same page do not conflict. ARIA attributes (`aria-controls`, `aria-expanded`, `aria-disabled`, `aria-multiselectable`) are set correctly for screen reader support. The dropdown is rendered in a portal and its position updates on window scroll and resize while open, keeping it correctly anchored in scrollable or dynamic layouts.

```tsx
import { Select } from 'simple-react-ui-kit'
import type { SelectOptionType } from 'simple-react-ui-kit'

const options: SelectOptionType<number>[] = [
    { key: 1, value: 'Option A' },
    { key: 2, value: 'Option B', icon: 'Star' },
    { key: 3, value: 'Option C', disabled: true },
]

// Single select
<Select
    label="Category"
    options={options}
    value={selected}
    onSelect={(items) => setSelected(items?.[0]?.key)}
/>

// Multi-select with search
<Select
    label="Tags"
    options={options}
    value={selectedKeys}
    multiple
    searchable
    clearable
    placeholder="Search tags..."
    onSelect={(items) => setSelected(items?.map(i => i.key))}
/>

// With loading state
<Select
    label="Users"
    options={users}
    loading={isFetching}
    onOpen={fetchUsers}
    searchable
    onSearch={(text) => fetchUsers(text)}
/>
```

**SelectOptionType\<T\>**:

| Field      | Type            | Description         |
| ---------- | --------------- | ------------------- |
| `key`      | `T`             | Unique identifier   |
| `value`    | `string`        | Display label       |
| `icon`     | `IconTypes`     | Icon from icon set  |
| `image`    | `{src: string}` | Image URL           |
| `emoji`    | `string`        | Emoji character     |
| `disabled` | `boolean`       | Disable this option |

| Prop              | Type                                                     | Default           | Description                      |
| ----------------- | -------------------------------------------------------- | ----------------- | -------------------------------- |
| `options`         | `SelectOptionType<T>[]`                                  | `[]`              | Available options                |
| `value`           | `T \| T[]`                                               | —                 | Selected key(s)                  |
| `label`           | `string`                                                 | —                 | Select field label               |
| `placeholder`     | `string`                                                 | —                 | Placeholder text                 |
| `notFoundCaption` | `string`                                                 | `'Nothing found'` | Empty search result text         |
| `multiple`        | `boolean`                                                | `false`           | Enable multi-select              |
| `searchable`      | `boolean`                                                | `false`           | Show search input                |
| `clearable`       | `boolean`                                                | `false`           | Show clear all button            |
| `loading`         | `boolean`                                                | `false`           | Show loading spinner in dropdown |
| `disabled`        | `boolean`                                                | `false`           | Disable the select               |
| `required`        | `boolean`                                                | `false`           | Mark field as required           |
| `closeOnSelect`   | `boolean`                                                | `true`            | Close dropdown after selection   |
| `error`           | `string`                                                 | —                 | Error message below select       |
| `size`            | `'small' \| 'medium' \| 'large'`                         | `'medium'`        | Select size                      |
| `onSelect`        | `(selected: SelectOptionType<T>[] \| undefined) => void` | —                 | Called on selection change       |
| `onSearch`        | `(text?: string) => void`                                | —                 | Called on search input change    |
| `onOpen`          | `() => void`                                             | —                 | Called when dropdown opens       |
| `className`       | `string`                                                 | —                 | Additional CSS classes           |

---

### Skeleton

Animated placeholder used during content loading.

```tsx
import { Skeleton } from 'simple-react-ui-kit'

// Mimic a text line
<Skeleton style={{ width: '200px', height: '16px' }} />

// Mimic an avatar
<Skeleton style={{ width: '40px', height: '40px', borderRadius: '50%' }} />

// Mimic a card
<Skeleton style={{ width: '100%', height: '120px' }} />
```

| Prop                                                 | Type     | Default | Description            |
| ---------------------------------------------------- | -------- | ------- | ---------------------- |
| `className`                                          | `string` | —       | Additional CSS classes |
| + standard `<div>` attributes (style, onClick, etc.) |          |         |                        |

---

### Spinner

Animated circular loading indicator (SVG).

```tsx
import { Spinner } from 'simple-react-ui-kit'

<Spinner />
<Spinner className={styles.large} style={{ width: 32, height: 32 }} />
```

| Prop                          | Type     | Default | Description            |
| ----------------------------- | -------- | ------- | ---------------------- |
| `className`                   | `string` | —       | Additional CSS classes |
| + standard `<svg>` attributes |          |         |                        |

---

### Table

Data table with sorting, sticky header, loading skeletons, column formatters, and scroll height.

```tsx
import { Table } from 'simple-react-ui-kit'
import type { ColumnProps } from 'simple-react-ui-kit'

interface User {
    id: number
    name: string
    role: string
    active: boolean
}

const columns: ColumnProps<User>[] = [
    { header: 'ID',    accessor: 'id',     isSortable: true },
    { header: 'Name',  accessor: 'name',   isSortable: true },
    { header: 'Role',  accessor: 'role' },
    {
        header: 'Status',
        accessor: 'active',
        formatter: (value) => value ? <Badge label="Active" /> : <Badge label="Inactive" />
    },
]

<Table
    columns={columns}
    data={users}
    loading={isLoading}
    defaultSort={{ key: 'name', direction: 'asc' }}
    stickyHeader
    maxHeight={400}
    noDataCaption="No users found"
/>
```

**ColumnProps\<T\>**:

| Field        | Type                                     | Description                   |
| ------------ | ---------------------------------------- | ----------------------------- |
| `header`     | `string \| React.ReactNode`              | Column header content         |
| `accessor`   | `keyof T`                                | Data key to read from row     |
| `isSortable` | `boolean`                                | Enable client-side sorting    |
| `hidden`     | `boolean`                                | Hide this column              |
| `className`  | `string`                                 | Class applied to each cell    |
| `formatter`  | `(value, row, index) => React.ReactNode` | Custom cell renderer          |
| `background` | `(value, row) => string`                 | Dynamic cell background color |

**SortConfig\<T\>**:

| Field       | Type              | Description       |
| ----------- | ----------------- | ----------------- |
| `key`       | `keyof T`         | Column to sort by |
| `direction` | `'asc' \| 'desc'` | Sort direction    |

| Prop             | Type               | Default | Description                      |
| ---------------- | ------------------ | ------- | -------------------------------- |
| `data`           | `T[]`              | `[]`    | Row data array                   |
| `columns`        | `ColumnProps<T>[]` | `[]`    | Column definitions               |
| `size`           | `ElementSizeType`  | —       | Row size variant                 |
| `defaultSort`    | `SortConfig<T>`    | —       | Initial sort state               |
| `loading`        | `boolean`          | `false` | Show skeleton rows while loading |
| `stickyHeader`   | `boolean`          | `false` | Keep header visible on scroll    |
| `verticalBorder` | `boolean`          | `false` | Show vertical column separators  |
| `height`         | `number \| null`   | —       | Fixed table height (px)          |
| `maxHeight`      | `number \| null`   | —       | Maximum table height (px)        |
| `noDataCaption`  | `string`           | —       | Empty-state message              |
| `className`      | `string`           | —       | Additional CSS classes           |

---

## Complete Import Reference

```tsx
// Components
import {
    Badge,
    Button,
    Calendar,
    Checkbox,
    Container,
    DatePicker,
    Dialog,
    Icon,
    Input,
    Message,
    Overlay,
    Popout,
    Progress,
    Select,
    Skeleton,
    Spinner,
    Table
} from 'simple-react-ui-kit'

// Types
import type {
    ElementSizeType,
    ButtonModeType,
    IconTypes,
    SelectOptionType,
    ColumnProps,
    SortConfig,
    PopoutHandleProps,
    PresetOption
} from 'simple-react-ui-kit'

// Utility
import { cn } from 'simple-react-ui-kit'
```

---

## Quick Recipes

### Form with validation

```tsx
const [name, setName] = useState('')
const [error, setError] = useState('')

<Input
    label="Name"
    value={name}
    error={error}
    onChange={(e) => {
        setName(e.target.value)
        setError('')
    }}
/>
<Button
    label="Submit"
    mode="primary"
    onClick={() => {
        if (!name) setError('Name is required')
    }}
/>
```

### Confirmation dialog

```tsx
const [open, setOpen] = useState(false)

<Button label="Delete" variant="negative" onClick={() => setOpen(true)} />

<Dialog
    open={open}
    title="Delete item?"
    maxWidth="400px"
    onCloseDialog={() => setOpen(false)}
>
    <Message type="warning">This cannot be undone.</Message>
    <Button label="Delete" variant="negative" onClick={handleDelete} />
    <Button label="Cancel" mode="outline" onClick={() => setOpen(false)} />
</Dialog>
```

### Data table with loading state

```tsx
const { data, loading } = useFetchUsers()

<Container title="Users">
    <Table
        columns={userColumns}
        data={data}
        loading={loading}
        stickyHeader
        maxHeight={500}
        defaultSort={{ key: 'name', direction: 'asc' }}
        noDataCaption="No users found"
    />
</Container>
```

### Multiselect with search

```tsx
const [selected, setSelected] = useState<number[]>([])

<Select
    label="Assign to"
    options={userOptions}
    value={selected}
    multiple
    searchable
    clearable
    onSelect={(items) => setSelected(items?.map(i => i.key) ?? [])}
/>
```
