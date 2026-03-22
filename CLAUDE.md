# CLAUDE.md - Instructions for Claude AI

This file contains instructions for Claude AI when working with the **Simple React UI Kit** project.

## 📋 Project Overview

**Simple React UI Kit** is a lightweight and flexible UI library for React applications. The project provides a set of reusable components with full TypeScript support.

### Key Characteristics

- **Language**: TypeScript
- **Framework**: React 19+
- **Bundler**: Rollup
- **Styles**: Sass Modules
- **Testing**: Jest + Testing Library
- **Documentation**: Storybook 10
- **Version Management**: Changesets

## 🏗️ Project Structure

```
simple-react-ui-kit/
├── src/
│   ├── components/          # UI components
│   │   ├── badge/           # Badge component
│   │   ├── button/          # Button component
│   │   ├── calendar/        # Calendar component
│   │   ├── checkbox/        # Checkbox component
│   │   ├── container/       # Container component
│   │   ├── datepicker/      # DatePicker component
│   │   ├── dialog/          # Dialog component
│   │   ├── icon/            # Icon component
│   │   ├── input/           # Input component
│   │   ├── message/         # Message component
│   │   ├── overlay/         # Overlay component
│   │   ├── popout/          # Popout component
│   │   ├── progress/        # Progress component
│   │   ├── select/          # Select component (with multiselect support)
│   │   ├── skeleton/        # Skeleton component
│   │   ├── spinner/         # Spinner component
│   │   └── table/           # Table component
│   ├── styles/              # Global styles
│   ├── index.ts             # Main export
│   ├── types.ts             # Common types
│   └── utils.ts             # Utilities (cn, etc.)
├── storybook/               # Storybook stories
├── tests/                   # Test configuration
├── .claude/                 # Claude AI configuration
│   └── agents/              # Claude agents
└── package.json
```

## 🤖 Available Agents

### Frontend Agent

**File**: `.claude/agents/frontend.md`

Specializes in:

- Developing new UI components
- Refactoring existing components
- Adding new props and functionality
- Working with styles (Sass modules)
- TypeScript typing

### QA Agent

**File**: `.claude/agents/qa.md`

Specializes in:

- Writing UI Unit tests (Jest + Testing Library)
- Test coverage analysis
- Testing edge cases
- Accessibility testing

### Documentation Agent

**File**: `.claude/agents/docs.md`

Specializes in:

- Writing Storybook stories
- Updating README
- Documenting component APIs
- JSDoc comments

## 📦 Commands

```bash
# Install dependencies
yarn install

# Build library
yarn build

# Run tests
yarn test

# Run tests with coverage
yarn test:coverage

# Lint check
yarn eslint:check

# Format code
yarn prettier:fix
```

## 📐 Code Style Guidelines

### Component Structure

Each component should be in a separate folder and contain:

```
component-name/
├── ComponentName.tsx       # Main component
├── ComponentName.test.tsx  # Unit tests
├── index.ts                # Export
├── styles.module.sass      # Styles
├── types.ts                # TypeScript types
└── utils.ts                # Utilities (optional)
```

### Component Template

```tsx
import React from 'react'

import { cn } from '../../utils'

import styles from './styles.module.sass'

export interface ComponentNameProps {
    /** Prop description */
    className?: string
    /** Children elements */
    children?: React.ReactNode
}

export const ComponentName: React.FC<ComponentNameProps> = ({ className, children, ...props }) => {
    return (
        <div
            className={cn(styles.componentName, className)}
            {...props}
        >
            {children}
        </div>
    )
}
```

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
})
```

### Storybook Story Template

```tsx
import type { Meta, StoryFn } from '@storybook/react'

import { ComponentName, ComponentNameProps } from '../../src'

const meta: Meta<ComponentNameProps> = {
    title: 'Components/ComponentName',
    component: ComponentName,
    argTypes: {
        // Argument descriptions
    }
}

export default meta

const Template: StoryFn<ComponentNameProps> = (args) => <ComponentName {...args} />

export const Default = Template.bind({})
Default.args = {
    // Default props
}
```

## 🎨 Styles

### CSS Variables

The project uses CSS variables for customization:

```css
:root {
    --simple-ui-form-background
    --simple-ui-form-background-hover
    --simple-ui-form-border-color
    --simple-ui-form-border-color-hover
    --simple-ui-form-border-color-active
    --simple-ui-form-text-color
    --simple-ui-form-placeholder-color
    --simple-ui-button-primary-background
    --simple-ui-button-primary-border-color
    --simple-ui-button-primary-text-color
    /* ... and others */
}
```

### cn() Utility

The `cn` utility is used for combining classes:

```tsx
import { cn } from '../../utils'
;<div className={cn(styles.base, isActive && styles.active, className)} />
```

## 📋 Tasks for Claude

### First Task: Project Analysis

Claude should:

1. Analyze all components in `src/components/`
2. Study existing tests and their coverage
3. Check Storybook stories
4. Create a `LIBRARY_SUMMARY.md` file with:
    - Complete list of components and their APIs
    - Usage examples
    - Integration recommendations

This file can be used in other projects to integrate the library.

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/simple-react-ui-kit)
- [Storybook Demo](https://miksrv.github.io/simple-react-ui-kit/)
- [GitHub Repository](https://github.com/miksrv/simple-react-ui-kit)

## ⚠️ Important Notes

1. **Do not modify** files in `dist/` - these are generated files
2. **Always** add types for new props
3. **Always** write tests for new features
4. **Use** existing patterns and styles
5. **Export** new components through `src/index.ts`
