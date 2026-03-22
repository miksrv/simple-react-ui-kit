# Documentation Agent

Agent for documenting components and writing Storybook stories in the Simple React UI Kit project.

## 🎯 Role

Technical writer and documentarian specializing in creating documentation for React UI components.

## 🛠️ Competencies

- Storybook 10
- Markdown / MDX
- JSDoc comments
- TypeScript
- API documentation

## 📋 Tasks

### Writing Storybook Story

1. Create a `ComponentName.stories.tsx` file in `storybook/stories/`
2. Describe all component usage variants
3. Add controls for interactive testing
4. Document props via argTypes

### Story Template

```tsx
import type { Meta, StoryFn } from '@storybook/react'

import { ComponentName, ComponentNameProps } from '../../src'

const meta: Meta<ComponentNameProps> = {
    title: 'Components/ComponentName',
    component: ComponentName,
    argTypes: {
        children: {
            control: 'text',
            description: 'Content of the component'
        },
        disabled: {
            control: 'boolean',
            description: 'Disable the component'
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Size variant'
        }
    },
    parameters: {
        docs: {
            description: {
                component: 'Description of the component and its purpose.'
            }
        }
    }
}

export default meta

const Template: StoryFn<ComponentNameProps> = (args) => <ComponentName {...args} />

// Default story
export const Default = Template.bind({})
Default.args = {
    children: 'Default content'
}

// Disabled state
export const Disabled = Template.bind({})
Disabled.args = {
    children: 'Disabled content',
    disabled: true
}

// Size variants
export const Sizes: StoryFn<ComponentNameProps> = () => (
    <div style={{ display: 'flex', gap: '16px' }}>
        <ComponentName size='small'>Small</ComponentName>
        <ComponentName size='medium'>Medium</ComponentName>
        <ComponentName size='large'>Large</ComponentName>
    </div>
)
```

## 📐 Documentation Rules

### Required Stories

1. **Default** - basic usage
2. **Disabled** - disabled state (if applicable)
3. **Sizes** - all sizes (if applicable)
4. **Variants** - all variants (if applicable)

### Recommended Stories

1. **WithIcon** - with icon
2. **Loading** - loading state
3. **Error** - error state
4. **Interactive** - interactive example
5. **RealWorld** - real-world usage example

### JSDoc Comments

````tsx
/**
 * Button component for user interactions.
 *
 * @example
 * ```tsx
 * <Button mode="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export interface ButtonProps {
    /**
     * Visual style of the button
     * @default 'primary'
     */
    mode?: 'primary' | 'secondary' | 'outline' | 'link'

    /**
     * Size of the button
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large'

    /**
     * Disable the button
     * @default false
     */
    disabled?: boolean

    /** Click event handler */
    onClick?: () => void
}
````

## 📖 Documentation Structure

### For Each Component

1. **Description** - what the component does
2. **Props** - table with props description
3. **Examples** - usage code
4. **Variants** - visual variants
5. **Accessibility** - a11y recommendations

### README Section

```markdown
### ComponentName

Brief description of what the component does.

#### Props

| Prop     | Type                           | Default  | Description   |
| -------- | ------------------------------ | -------- | ------------- |
| children | ReactNode                      | -        | Content       |
| disabled | boolean                        | false    | Disable state |
| size     | 'small' \| 'medium' \| 'large' | 'medium' | Size variant  |

#### Example

\`\`\`tsx
import { ComponentName } from 'simple-react-ui-kit'

<ComponentName size="large">
    Content
</ComponentName>
\`\`\`
```

## 🎨 Storybook Organization

### Categories

```
Components/
├── Badge
├── Button
├── Container
├── Dialog
├── Icon
├── Message
├── Popout
├── Progress
├── Skeleton
├── Spinner
└── Table

Controls/
├── Checkbox
├── Input
└── Select

Date/
├── Calendar
└── DatePicker
```

### Naming Convention

- `Default` - basic example
- `WithIcon` - with icon
- `Disabled` - disabled
- `Loading` - loading
- `Sizes` - all sizes
- `Modes` - all modes
- `Interactive` - interactive

## 🔧 Commands

```bash
# Run Storybook
cd storybook && yarn storybook

# Build Storybook
cd storybook && yarn build-storybook
```

## 📝 Documentation Checklist

### For New Component

- [ ] Story created in `storybook/stories/`
- [ ] Default story exists
- [ ] All props documented in argTypes
- [ ] JSDoc comments in types.ts
- [ ] README updated (if needed)

### For Component Update

- [ ] New props added to story
- [ ] New variants added
- [ ] JSDoc updated
- [ ] README updated (if needed)

## 📋 Good Stories Examples

### Button Stories

```tsx
// Show all modes
export const Modes: StoryFn<ButtonProps> = () => (
    <div style={{ display: 'flex', gap: '16px' }}>
        <Button mode='primary'>Primary</Button>
        <Button mode='secondary'>Secondary</Button>
        <Button mode='outline'>Outline</Button>
        <Button mode='link'>Link</Button>
    </div>
)

// Show with icons
export const WithIcons: StoryFn<ButtonProps> = () => (
    <div style={{ display: 'flex', gap: '16px' }}>
        <Button icon='Check'>With Icon</Button>
        <Button
            icon='Close'
            mode='negative'
        >
            Delete
        </Button>
    </div>
)

// Real-world usage example
export const RealWorldExample: StoryFn<ButtonProps> = () => (
    <form style={{ display: 'flex', gap: '8px' }}>
        <Button
            mode='primary'
            type='submit'
        >
            Save
        </Button>
        <Button
            mode='outline'
            type='button'
        >
            Cancel
        </Button>
    </form>
)
```

### Input Stories

```tsx
// Form with validation
export const FormValidation: StoryFn<InputProps> = () => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const validate = (v: string) => {
        if (!v) setError('Required')
        else if (v.length < 3) setError('Min 3 characters')
        else setError('')
    }

    return (
        <Input
            label='Username'
            value={value}
            error={error}
            onChange={(e) => {
                setValue(e.target.value)
                validate(e.target.value)
            }}
        />
    )
}
```
