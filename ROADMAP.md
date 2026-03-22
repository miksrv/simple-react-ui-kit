# ROADMAP.md

This document captures the results of a systematic code audit of **Simple React UI Kit** (`src/components/`). Every issue below was identified by reading every `.tsx`, `types.ts`, `utils.ts`, and `index.ts` file in the library. Items are grouped by concern, numbered sequentially within each prefix, and prioritised by user/developer impact. This file is intended to be used by agents or contributors to resolve the listed tasks in order of priority.

---

## Accessibility

### A11Y-01 — Calendar previous/next month buttons have no accessible label

**File:** `src/components/calendar/Calendar.tsx`
**Priority:** High
**Description:** The navigation buttons contain only an `<Icon>` SVG with no text and no `aria-label`. Screen readers announce them as unlabelled buttons. Fix: add `aria-label="Previous month"` and `aria-label="Next month"`. Also add `type="button"` to prevent accidental form submission.

---

### A11Y-02 — Calendar day cells are not keyboard-navigable

**File:** `src/components/calendar/Calendar.tsx`
**Priority:** High
**Description:** Each day is a `<div>` with an `onClick` handler but no `tabIndex`, `role`, `onKeyDown`, or `aria-label`. Keyboard-only users cannot interact with the calendar at all. Fix: render the calendar grid with `role="grid"`, day cells as `role="gridcell"` containing a `role="button"` with `tabIndex={0}` on the focused date, and add arrow-key navigation between days.

---

### A11Y-03 — Input label is not programmatically associated with the input element

**File:** `src/components/input/Input.tsx`
**Priority:** High
**Description:** The rendered `<label>` has no `htmlFor` and the `<input>` has no `id`. Clicking the label does not focus the input and screen readers do not announce the label when the input is focused. Fix: generate a stable ID with `useId()` and link them via `htmlFor`/`id`.

---

### A11Y-04 — Select label is not associated with the combobox

**File:** `src/components/select/Select.tsx`
**Priority:** High
**Description:** The `<label>` element has no `htmlFor` attribute and the combobox container has no `aria-labelledby`. Screen readers cannot announce the field label when the combobox is focused. Fix: use `useId()` to generate an ID for the label element and reference it via `aria-labelledby` on the combobox container.

---

### A11Y-05 — Progress bar has no ARIA role or value attributes

**File:** `src/components/progress/Progress.tsx`
**Priority:** High
**Description:** The component renders a plain `<div>` with no semantic markup. Screen readers cannot convey progress information. Fix: add `role="progressbar"`, `aria-valuenow={value}`, `aria-valuemin={0}`, and `aria-valuemax={100}` to the outer container, plus an `aria-label` prop.

---

### A11Y-06 — Spinner has no accessible label

**File:** `src/components/spinner/Spinner.tsx`
**Priority:** Medium
**Description:** The SVG has no `aria-label`, `role`, or `<title>` element. Screen readers provide no indication that loading is in progress. Fix: add `role="status"` and `aria-label="Loading"` (or a configurable prop) to the SVG element.

---

### A11Y-07 — Dialog does not trap focus while open

**File:** `src/components/dialog/Dialog.tsx`
**Priority:** High
**Description:** When the dialog is open, Tab focus is not trapped inside it. Users can Tab through focusable elements behind the overlay, violating the WCAG 2.1 SC 2.1.2 requirement that modal dialogs confine focus. Focus is also not moved into the dialog when it opens. Fix: implement a focus trap (move focus to the first focusable child on open; cycle Tab/Shift-Tab within the dialog; restore focus to the trigger on close).

---

### A11Y-08 — Badge remove button has no accessible label

**File:** `src/components/badge/Badge.tsx`
**Priority:** Medium
**Description:** The remove `<button>` contains only an `<Icon name="Close" />` with no text and no `aria-label`. Screen readers announce it as an unlabelled button. Fix: add `aria-label={\`Remove ${label}\`}`and`type="button"` to the button element.

---

### A11Y-09 — Table sortable column headers have no `aria-sort` attribute

**File:** `src/components/table/Table.tsx`
**Priority:** Medium
**Description:** Sortable `<th>` elements display a visual sort icon but no `aria-sort` attribute. Screen readers cannot convey sort state. Fix: set `aria-sort="ascending"` / `"descending"` / `"none"` based on `sortConfig`, and ensure column headers are keyboard-activatable (`tabIndex={0}` + `onKeyDown` or wrapped in `<button>`).

---

### A11Y-10 — Popout trigger `<span>` has no keyboard event handler

**File:** `src/components/popout/Popout.tsx`
**Priority:** Medium
**Description:** The trigger is a `<span role="button" tabIndex={0}>` that responds to mouse clicks but has no `onKeyDown` handler. Keyboard users who Tab to the span and press Enter or Space receive no response. Fix: add an `onKeyDown` handler that calls `toggleOpen` when `key === 'Enter'` or `key === ' '`.

---

## Type Safety

### TYPE-01 — `SelectOptionType.image` reuses the browser's `MediaImage` interface as a general image descriptor

**File:** `src/components/select/types.ts`
**Priority:** Medium
**Description:** `image?: MediaImage` borrows the Web Media Session API's `MediaImage` type (from `lib.dom.d.ts`). Using a browser API type as a general image descriptor creates a semantic mismatch and couples consumers to `lib.dom` being present. Fix: define a purpose-built interface (e.g. `SelectOptionImage { src: string; alt?: string }`) in the library's own types and export it.

---

### TYPE-02 — `Table.formatter` second argument is typed as `T[]` (full dataset) but named `row`

**File:** `src/components/table/types.ts`
**Priority:** High
**Description:** `formatter: (value: T[keyof T], row: T[], index: number) => React.ReactNode` — the parameter is named `row` but is actually the full sorted dataset array. This is misleading and causes consumers to write incorrect code expecting a single row. Fix: either rename the parameter to `data`/`rows` with clear JSDoc (if full-array access is intentional), or change the call site to pass the individual row item.

---

### TYPE-03 — `ContainerProps` and `MessageProps` extend `HTMLAttributes<HTMLDivElement>` but render `<section>` elements

**File:** `src/components/container/types.ts`, `src/components/message/types.ts`
**Priority:** Medium
**Description:** Both interfaces promise `HTMLDivElement` event types but the rendered root is `<section>` (`HTMLElement`). Refs and type-narrowed event handlers will have incorrect types. Fix: change the generic parameter to `HTMLElement` or `HTMLSectionElement` in both interfaces.

---

### TYPE-04 — `cn()` does not accept `null`, which is a common output of optional chaining

**File:** `src/utils.ts`
**Priority:** Low
**Description:** `cn` is typed as `(...args: Array<string | boolean | undefined>)`. While `null` is filtered correctly at runtime, TypeScript raises a type error when a consumer passes `null` (common after optional chaining like `condition?.styles.active`). Fix: broaden the signature to `Array<string | boolean | null | undefined>`.

---

### TYPE-05 — `onPeriodSelect` callback parameters are typed as optional but are never `undefined` at call sites

**File:** `src/components/calendar/types.ts`
**Priority:** Low
**Description:** `onPeriodSelect?: (startDate?: string, endDate?: string) => void` marks both arguments as optional, but the implementation always provides both values. Consumers add unnecessary `undefined` guards. Fix: type the parameters as required: `(startDate: string, endDate: string) => void`.

---

## API & Developer Experience

### QOL-01 — `DatePicker` trigger button has no configurable `className` or layout prop

**File:** `src/components/datepicker/DatePicker.tsx`
**Priority:** Medium
**Description:** The inner `<Button>` has no exposed `triggerClassName` or similar prop. Consumers cannot control the button's width, margins, or custom styling without an extra wrapper element. Fix: add a `triggerClassName?: string` prop and pass it to the inner `<Button className={triggerClassName}>`.

---

### QOL-02 — `Calendar` uses `containerClassName` while every other component uses `className`

**File:** `src/components/calendar/types.ts`
**Priority:** Low
**Description:** The root wrapper is styled via `containerClassName`, an inconsistent name compared to the rest of the library. Fix: accept `className` as the canonical prop name (aliasing `containerClassName` for backwards compatibility).

---

### QOL-03 — `Select.onSearch` types the parameter as optional when it is always called with a string

**File:** `src/components/select/types.ts`
**Priority:** Low
**Description:** `onSearch?: (text?: string) => void` — `text` is always a string at call sites. Typing it as optional forces consumers to write unnecessary `text ?? ''` guards. Fix: type it as `(text: string) => void`.

---

### QOL-04 — `Popout` has no viewport-aware placement; no `top` position option

**File:** `src/components/popout/types.ts`
**Priority:** Low
**Description:** `position` only supports `'left' | 'right'` (horizontal alignment). The popout always opens below the trigger with no way to open above it when the trigger is near the bottom of the viewport. Fix: add a `'top'` option and implement viewport-overflow detection to auto-flip the popout when there is insufficient space below.

---

### QOL-05 — `Table` rows use index-based keys, causing reconciliation issues on data mutation

**File:** `src/components/table/Table.tsx`
**Priority:** Medium
**Description:** Data rows and loading skeleton rows use `key={\`tr${rowIndex}\`}`. When rows are added, removed, or reordered, React matches by key position rather than identity, causing unnecessary DOM mutations. Fix: add a `rowKey`prop that accepts a key accessor field name or function (e.g.`rowKey="id"`or`rowKey={(row) => row.id}`), falling back to index only when not provided.

---

## Refactoring

### REFACTOR-01 — `Overlay` uses imperative DOM manipulation instead of a React portal

**File:** `src/components/overlay/Overlay.tsx`
**Priority:** Medium
**Description:** The overlay element is created, appended, and removed via raw `document.createElement` / `appendChild` / `remove` inside a `useEffect`. It is the only component in the library that bypasses React's rendering model. Fix: replace with a `ReactDOM.createPortal` rendering into `document.body`, toggling visibility via CSS or conditional rendering. This makes the component more predictable in concurrent mode and easier to test.

---

### REFACTOR-02 — `Checkbox` manually synchronises an internal ref with the forwarded ref via `useEffect`

**File:** `src/components/checkbox/Checkbox.tsx`
**Priority:** Medium
**Description:** The component uses `forwardRef` but introduces an internal `inputRef` and synchronises it to the forwarded ref inside a `useEffect`. This introduces an extra render cycle before the external ref is populated. Fix: use a callback ref that both sets `indeterminate` and populates the forwarded ref in a single pass, eliminating the internal `inputRef` and the synchronisation effect.

---

### REFACTOR-03 — `Dialog` uses `useState` to generate a stable ID where `useId` is the idiomatic choice

**File:** `src/components/dialog/Dialog.tsx`
**Priority:** Low
**Description:** `const [internalId] = useState(() => crypto.randomUUID())` generates a stable ID via a lazy initialiser. The React-idiomatic, SSR-safe approach is `useId()` (available since React 18). Fix: replace with `const internalId = useId()`.

---

### REFACTOR-04 — `Select` `selectedOptions` and `filteredOptions` memos are tightly coupled, causing unnecessary recomputation

**File:** `src/components/select/Select.tsx`
**Priority:** Low
**Description:** `filteredOptions` depends on `selectedOptions` for the already-selected exclusion check (`!selectedOptions?.some(...)`), causing the filtered list to recompute whenever any item is selected — even when the search string has not changed. Fix: compute the selected set as a `Set<key>` or `Map<key, option>` for O(1) lookup and decouple the two memos so filtering only re-runs when the search string or the options list changes.

---

### REFACTOR-05 — `DatePicker` accesses CalendarProps via `props.x` instead of destructuring

**File:** `src/components/datepicker/DatePicker.tsx`
**Priority:** Low
**Description:** Several inherited `CalendarProps` fields (`datePeriod`, `onPeriodSelect`, `onDateSelect`, `locale`, `hidePresets`) are accessed as `props.datePeriod`, `props?.onPeriodSelect`, etc. throughout the component body rather than being destructured from the function parameters. This is inconsistent with the rest of the library. Fix: destructure all consumed props at the top of the component function.
