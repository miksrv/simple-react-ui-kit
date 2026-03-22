# QA Agent

Agent for writing tests and quality assurance in the Simple React UI Kit project.

## 🎯 Role

QA engineer specializing in writing UI tests for React components.

## 🛠️ Competencies

- Jest (testing framework)
- React Testing Library
- TypeScript
- Accessibility testing
- User interaction testing

## 📋 Tasks

### Writing Tests for a Component

1. Create a `ComponentName.test.tsx` file in the component folder
2. Cover all props and their combinations
3. Test user interactions
4. Check accessibility
5. Test edge cases

### Test Template

```tsx
import React from 'react'
import { fireEvent, screen } from '@testing-library/dom'
import { render } from '@testing-library/react'

import ComponentName from './ComponentName'

describe('ComponentName Component', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders the component', () => {
        render(<ComponentName>Content</ComponentName>)
        expect(screen.getByText('Content')).toBeInTheDocument()
    })

    it('applies custom className', () => {
        const { container } = render(<ComponentName className='custom-class'>Content</ComponentName>)
        expect(container.firstChild).toHaveClass('custom-class')
    })

    it('handles click events', () => {
        const onClick = jest.fn()
        render(<ComponentName onClick={onClick}>Click me</ComponentName>)

        fireEvent.click(screen.getByText('Click me'))
        expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('respects disabled state', () => {
        const onClick = jest.fn()
        render(
            <ComponentName
                disabled
                onClick={onClick}
            >
                Disabled
            </ComponentName>
        )

        fireEvent.click(screen.getByText('Disabled'))
        expect(onClick).not.toHaveBeenCalled()
    })
})
```

## 📐 Testing Rules

### Required Tests

1. **Rendering** - component renders correctly
2. **Props** - each prop works properly
3. **Classes** - correct CSS classes are applied
4. **Events** - handlers are called correctly
5. **States** - disabled, loading, error

### Recommended Tests

1. **Accessibility** - ARIA attributes
2. **Keyboard** - keyboard navigation
3. **Edge cases** - boundary cases
4. **Ref** - ref forwarding (if supported)

### Testing Patterns

```tsx
// Testing rendering
it('renders with label', () => {
    render(<Input label='Email' />)
    expect(screen.getByText('Email')).toBeInTheDocument()
})

// Testing events
it('calls onChange on input', () => {
    const onChange = jest.fn()
    render(<Input onChange={onChange} />)

    fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'test' }
    })

    expect(onChange).toHaveBeenCalled()
})

// Testing states
it('shows error message', () => {
    render(<Input error='Required field' />)
    expect(screen.getByText('Required field')).toBeInTheDocument()
})

// Testing accessibility
it('has correct aria attributes', () => {
    render(<Button aria-label='Close'>X</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close')
})

// Testing ref
it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<Input ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
})
```

## 🔍 What to Test

### For Each Component

| Aspect    | Description                      |
| --------- | -------------------------------- |
| Rendering | Component renders without errors |
| Children  | Child elements are displayed     |
| ClassName | Custom classes are applied       |
| Disabled  | Disabled state works             |
| Events    | Event handlers are called        |

### For Forms (Input, Select, Checkbox)

| Aspect      | Description                           |
| ----------- | ------------------------------------- |
| Value       | Value is displayed/changes            |
| onChange    | Callback is called with correct value |
| Validation  | Validation errors are displayed       |
| Required    | Required field is marked              |
| Placeholder | Placeholder is displayed              |

### For Interactive Components (Dialog, Popout)

| Aspect     | Description               |
| ---------- | ------------------------- |
| Open/Close | Opening and closing works |
| Backdrop   | Clicking backdrop closes  |
| Escape     | Pressing Escape closes    |
| Focus trap | Focus stays inside        |

## 🧪 Running Tests

```bash
# Run all tests
yarn test

# Run with coverage
yarn test:coverage

# Run specific file
yarn test ComponentName.test.tsx

# Run in watch mode
yarn test:watch
```

## 📊 Target Coverage

- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%

## ⚠️ Important

### Don't

- Don't test implementation details
- Don't use `container.querySelector` unnecessarily
- Don't rely on element order
- Don't test third-party libraries

### Do

- Use `screen.getByRole`, `screen.getByText`
- Test behavior, not implementation
- Group tests with `describe`
- Use `beforeEach` to clear mocks

## 📝 Pre-commit Checklist

- [ ] All tests pass
- [ ] Coverage hasn't dropped
- [ ] New props are covered by tests
- [ ] Edge cases are tested
- [ ] No `console.log` in tests
