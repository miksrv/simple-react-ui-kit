---
name: Test Authoring Patterns
description: Rules for writing Jest + Testing Library tests — structure, what to always test, query preferences, mock setup, edge cases
type: feedback
---

## File Location and Naming

Test file is `ComponentName.test.tsx` inside the component folder. It tests the component in isolation.

---

## Import Order

```tsx
import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
// OR for async tests:
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { ComponentName } from './ComponentName'
import { ComponentNameProps } from './types'
// Import styles only when testing exact CSS module class names:
import styles from './styles.module.sass'
```

Note: some older tests import from `@testing-library/dom` and `@testing-library/react` separately (`fireEvent, screen` from dom, `render` from react) — the newer pattern in the codebase consolidates into a single `@testing-library/react` import.

---

## Describe Block and defaultProps

Always use a single top-level `describe('ComponentName Component', () => { ... })`.

Define `defaultProps` as a typed constant inside the describe block, using the full props type:

```tsx
describe('Button Component', () => {
    const defaultProps: ButtonProps = {
        label: 'Click Me',
        mode: 'primary',
        size: 'medium'
    }
    ...
})
```

**No `beforeEach(jest.clearAllMocks)`** is used in most components — this is only added in Select (which has complex mocking). Do not add it unless the component actually uses mocks that need resetting.

**Select-specific setup**: Select test has `beforeEach(() => { jest.clearAllMocks(); document.body.innerHTML = '' })` because it creates portal DOM nodes.

---

## Test Coverage Requirements

### Always include these tests

1. **Smoke render**: renders without crashing, basic content visible

    ```tsx
    it('renders the button with label', () => {
        render(<Button {...defaultProps} />)
        expect(screen.getByText(/Click Me/i)).toBeInTheDocument()
    })
    ```

2. **Custom className**: className is applied to the correct element

    ```tsx
    it('applies additional class names', () => {
        const { container } = render(
            <Badge
                {...defaultProps}
                className='custom-badge-class'
            />
        )
        expect(container.querySelector('div')).toHaveClass('custom-badge-class')
    })
    // OR use container.firstChild for wrapper components:
    expect(container.firstChild).toHaveClass('custom-class')
    ```

3. **All boolean flag props**: each prop that controls a CSS class gets its own test

    ```tsx
    it('applies stretched class when stretched prop is true', () => {
        render(
            <Button
                {...defaultProps}
                stretched={true}
            />
        )
        expect(screen.getByText(/Click Me/i)).toHaveClass('stretched')
    })
    ```

4. **All enum/union props**: iterate over all valid values with forEach + unmount

    ```tsx
    it('applies the correct class for each mode', () => {
        const modes: ButtonModeType[] = ['primary', 'secondary', 'outline', 'link']
        modes.forEach((mode) => {
            const { unmount } = render(
                <Button
                    {...defaultProps}
                    mode={mode}
                />
            )
            expect(screen.getByText('Click Me')).toHaveClass(mode)
            unmount()
        })
    })
    ```

5. **Default prop values**: verify that the component applies the default value class when the prop is not provided

6. **User interaction events** (where applicable):
    - Click: `fireEvent.click(element)` + `expect(handler).toHaveBeenCalledTimes(1)`
    - Change: `fireEvent.change(input, { target: { value: 'test' } })`
    - Keyboard: `fireEvent.keyDown(element, { key: 'Enter' })` / `{ key: 'Escape' }` / `{ key: 'ArrowDown' }`
    - Focus/blur: `fireEvent.focus(input)` / `fireEvent.blur(input)`

7. **Conditional rendering**: test elements that render only when a prop is provided, and also that they do NOT render when the prop is absent

    ```tsx
    it('renders icon when provided', () => {
        const { container } = render(<Badge {...defaultProps} />)
        expect(container.querySelector('svg')).toBeInTheDocument()
    })
    it('renders without icon when icon prop is not provided', () => {
        const { container } = render(<Badge label='No Icon' />)
        expect(container.querySelector('svg')).not.toBeInTheDocument()
    })
    ```

8. **Disabled state**: check `toBeDisabled()` on native elements, class on wrapper, `aria-disabled` attribute

9. **Accessibility attributes**: `aria-checked`, `aria-disabled`, `aria-expanded`, `aria-label`, `role` — test all aria attributes the component sets

10. **Extra HTML attributes pass-through**: test that arbitrary attributes spread correctly
    ```tsx
    it('passes through additional HTML attributes', () => {
        const { container } = render(
            <Badge
                label='Test'
                data-testid='badge-test'
            />
        )
        expect(container.querySelector('[data-testid="badge-test"]')).toBeInTheDocument()
    })
    ```

---

## Query Preferences

| Situation                     | Preferred query                                                                                                                                                                                                      |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Finding by visible text       | `screen.getByText(/Text/i)` — use regex with `i` flag for case-insensitivity                                                                                                                                         |
| Finding form elements by role | `screen.getByRole('button')`, `screen.getByRole('checkbox')`, `screen.getByRole('combobox')`, `screen.getByRole('textbox')`, `screen.getByRole('listbox')`, `screen.getByRole('link')`, `screen.getByRole('option')` |
| Finding by placeholder        | `screen.getByPlaceholderText(/placeholder/i)`                                                                                                                                                                        |
| Querying SVG/native elements  | `container.querySelector('svg')`, `container.querySelector('input[type="checkbox"]')`                                                                                                                                |
| Testing absence               | `screen.queryByText(...)` / `screen.queryByRole(...)` — returns null instead of throwing                                                                                                                             |
| Querying by CSS class         | `container.querySelector('.className')` or `container.querySelector(\`.\${styles.className}\`)`                                                                                                                      |
| Role with accessible name     | `screen.getByRole('button', { name: /open dropdown/i })` — for multiple buttons                                                                                                                                      |
| Finding parent                | `.closest('div')`, `.closest(\`.\${styles.container}\`)`                                                                                                                                                             |
| Getting all matching          | `screen.getAllByRole('option')`, `screen.getAllByText(...)`                                                                                                                                                          |

**Never** use `getByTestId` unless there is no other viable query — prefer roles and text.

---

## Mock Patterns

### jest.fn() for callbacks

```tsx
const handleClick = jest.fn()
render(
    <Button
        {...defaultProps}
        onClick={handleClick}
    />
)
fireEvent.click(screen.getByText(/Click Me/i))
expect(handleClick).toHaveBeenCalledTimes(1)
```

### Mocking in defaultProps

For components that require callbacks (e.g., Checkbox's `onChange`), include `jest.fn()` directly in `defaultProps`:

```tsx
const defaultProps: CheckboxProps = {
    onChange: jest.fn()
}
```

### Spying on window methods

For complex components with event listeners:

```tsx
const addSpy = jest.spyOn(window, 'addEventListener')
// ... trigger action
expect(addSpy).toHaveBeenCalledWith('resize', expect.any(Function))
addSpy.mockRestore()
```

### Async tests

Use `waitFor` from `@testing-library/react` for state updates triggered by events:

```tsx
await waitFor(() => {
    expect(screen.getByText('Option Three')).toBeInTheDocument()
})
```

For setTimeout-based delays (e.g., Select's blur handling with 150ms timeout):

```tsx
await new Promise((resolve) => setTimeout(resolve, 200))
expect(container.querySelector('.focused')).not.toBeInTheDocument()
```

---

## Class Name Testing

### Simple class names (no CSS modules hash)

When Sass modules are configured to output plain class names in test environment, use string literals:

```tsx
expect(button).toHaveClass('stretched')
expect(button).toHaveClass('primary')
expect(button).toHaveClass('loading')
```

### CSS module class names

When the exact module-hashed class name matters (especially for size variants that don't appear as plain text), import the styles and use the module reference:

```tsx
import styles from './styles.module.sass'

expect(badgeElement).toHaveClass(styles.large)
expect(badgeElement).toHaveClass(styles.medium)
expect(inputContainer).toHaveClass(styles.small)
```

### Regex class matching

For partial/pattern matching:

```tsx
expect(formField).toHaveClass(/primary/)
expect(formField).toHaveClass(/ghost/)
```

---

## Icon/SVG Testing

Test icon/SVG presence via `container.querySelector('svg')`:

```tsx
it('renders an icon if icon prop is provided', () => {
    const { container } = render(
        <Button
            {...defaultProps}
            icon='CheckCircle'
        />
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
})
```

For testing which specific icon is rendered, compare the `d` attribute of the `path` element between two renders:

```tsx
const iconElement = container.querySelector('svg')
const expectedIcon = render(<Icon name='CheckboxIndeterminate' />)
const receivedPath = iconElement?.querySelector('path')?.getAttribute('d')
const expectedPath = expectedIcon?.container?.querySelector('path')?.getAttribute('d')
expect(receivedPath).toBe(expectedPath)
```

---

## forwardRef Testing

Test both function ref and object ref forms:

```tsx
it('forwards ref as a function', () => {
    const refFn = jest.fn()
    render(
        <Checkbox
            label='Ref test'
            checked={false}
            onChange={jest.fn()}
            ref={refFn}
        />
    )
    expect(refFn).toHaveBeenCalledWith(expect.any(HTMLInputElement))
})

it('forwards ref as an object', () => {
    const refObj = React.createRef<HTMLInputElement>()
    render(
        <Checkbox
            label='Ref test'
            checked={false}
            onChange={jest.fn()}
            ref={refObj}
        />
    )
    expect(refObj.current).toBeInstanceOf(HTMLInputElement)
})
```

---

## Edge Cases to Always Cover

- Empty/undefined optional props: component renders without crashing when optional props are omitted
- Empty string vs undefined for text props: `error=''` should NOT trigger error state, `error='message'` should
- Numeric label types: test with `label={42}` when the type is `string | number`
- Both/neither variants: e.g., when both `label` and `children` are provided, test which takes priority
- State combinations: test multiple props together (e.g., `required` + `disabled` both applying classes simultaneously)
- DOM-level properties that can't be set via React props: `input.indeterminate` must be checked on the DOM node directly

---

## Test Grouping with Comments

For large test files (like Select), group related tests with comment headers:

```tsx
// === Basic Rendering ===
// === States ===
// === Searchable ===
// === Multiple choice ===
// === Keyboard Accessibility ===
// === Portal and Outside Click ===
```
