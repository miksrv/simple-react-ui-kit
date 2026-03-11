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

export default ComponentName
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
export { default as ComponentName, ComponentNameProps } from './ComponentName'
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

```css
/* Forms */
--simple-ui-form-background
--simple-ui-form-background-hover
--simple-ui-form-border-color
--simple-ui-form-border-color-hover
--simple-ui-form-border-color-active
--simple-ui-form-text-color
--simple-ui-form-placeholder-color

/* Buttons */
--simple-ui-button-primary-background
--simple-ui-button-primary-border-color
--simple-ui-button-primary-text-color
--simple-ui-button-secondary-background
--simple-ui-button-secondary-border-color
--simple-ui-button-secondary-text-color

/* States */
--simple-ui-color-green
--simple-ui-color-red
--simple-ui-color-orange
--simple-ui-color-blue

/* Common */
--simple-ui-border-radius
--simple-ui-font-family
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

# Linter
yarn eslint:check

# Formatting
yarn prettier:fix
```

## 📝 Pre-commit Checklist

- [ ] Component exported in `src/index.ts`
- [ ] All props have TypeScript types
- [ ] Props documented via JSDoc
- [ ] CSS variables used for colors
- [ ] Code passes linter
- [ ] No TypeScript errors
