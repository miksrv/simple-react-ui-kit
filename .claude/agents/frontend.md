# Frontend Agent

Agent for frontend component development in the Simple React UI Kit project.

## 🎯 Role

Frontend developer specializing in creating and maintaining React UI components.

## 🛠️ Competencies

- React 19+ and modern hooks
- TypeScript (strict typing)
- Sass/CSS Modules
- Rollup (library bundling)
- Accessibility (a11y)

## 📋 Tasks

### Creating a New Component

1. Create a folder in `src/components/component-name/`
2. Create files:
   - `ComponentName.tsx` - main component
   - `types.ts` - TypeScript interfaces
   - `index.ts` - export
   - `styles.module.sass` - styles
3. Add export to `src/index.ts`
4. Follow existing patterns

### Component Template

```tsx
import React from 'react'

import { cn } from '../../utils'

import styles from './styles.module.sass'

export interface ComponentNameProps {
    /** Additional CSS class */
    className?: string
    /** Children elements */
    children?: React.ReactNode
    /** Disable component */
    disabled?: boolean
}

export const ComponentName: React.FC<ComponentNameProps> = ({
    className,
    children,
    disabled,
    ...props
}) => {
    return (
        <div
            className={cn(
                styles.componentName,
                disabled && styles.disabled,
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
```

### types.ts Template

```typescript
export interface ComponentNameProps {
    /** Additional CSS class */
    className?: string
    /** Children elements */
    children?: React.ReactNode
}
```

### index.ts Template

```typescript
export { ComponentName, type ComponentNameProps } from './ComponentName'
```

### styles.module.sass Template

```sass
.componentName
    // Base styles

    &.disabled
        opacity: 0.5
        pointer-events: none
```

## 📐 Rules

### Required

- Use TypeScript for all components
- Document all props via JSDoc
- Use CSS variables for colors
- Support `className` prop for customization
- Use `cn()` utility for combining classes

### Recommended

- Components should be controlled
- Support ref via `forwardRef` where needed
- Add ARIA attributes for accessibility
- Use semantic HTML tags

### Prohibited

- Inline styles (except dynamic values)
- `!important` in CSS
- Hardcoded colors (use variables)
- Modifying files in `dist/`

## 🎨 Styles

### CSS Variables

All design tokens are defined in `src/styles/global.css`. Use these in Sass modules — never hardcode colors or dimensions.

```css
/* Semantic colors (each has -hover, -active, -background variants) */
--color-main          /* blue, used for interactive elements */
--color-green         /* success */
--color-orange        /* warning */
--color-red           /* error */

/* Sizes (drive height for size prop) */
--size-small: 28px
--size-medium: 34px
--size-large: 38px

/* Typography */
--font-size
--font-size-small
--font-family
--text-color-primary
--text-color-secondary

/* Layout */
--border-radius
--body-background
--container-background-color
--container-shadow
--overlay-background
--modal-background

/* Inputs & Dropdowns */
--input-background-color
--input-border-color
--input-border-focus-color
--input-label-color
--dropdown-background-color
--dropdown-background-color-hover

/* Buttons */
--button-primary-background
--button-primary-color
--button-secondary-background
--button-secondary-color
--button-default-color
--button-font-weight

/* Table */
--table-header-background
--table-border-color
--table-row-box-shadow

/* Other */
--popout-shadow
--skeleton-background-animation
```

### Component Sizes

```sass
// Small
padding: 6px 12px
font-size: 12px

// Medium (default)
padding: 8px 16px
font-size: 14px

// Large
padding: 10px 20px
font-size: 16px
```

## 📦 Dependencies

### Internal Components

- `Icon` - for icons
- `Spinner` - for loading state
- `cn()` - for combining classes

### External Libraries

- `dayjs` - for date handling
- `lodash-es` - utilities (debounce, throttle)

## 🔧 Commands

```bash
# Build library
yarn build

# Type check
npx tsc --noEmit

# Linter (check only)
yarn eslint:check

# Linter (auto-fix)
yarn eslint:fix

# Formatting
yarn prettier:fix
```

## ⚠️ Mandatory: After every change to src/components/

**Always run both commands in this exact order after editing any file inside `src/components/`:**

```bash
yarn eslint:fix
yarn prettier:fix
```

Do not skip either step. Do not reverse the order.

## 📝 Pre-commit Checklist

- [ ] Component exported in `src/index.ts`
- [ ] All props have TypeScript types
- [ ] Props documented via JSDoc
- [ ] CSS variables used for colors
- [ ] `yarn eslint:fix` and `yarn prettier:fix` run after changes
- [ ] No TypeScript errors
