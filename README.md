<a id="top"></a>

<!-- PROJECT TITLE -->

**Simple React UI Kit** is a lightweight, fully typed React component library for building modern web interfaces. It provides 16 production-ready UI components with full TypeScript support, a minimal bundle footprint, and deep theming capabilities via CSS variables — everything you need to ship consistent, accessible UIs faster.

<div align="center">
  <h3>Lightweight, accessible React UI components with full TypeScript support</h3>

<a href="https://miksrv.github.io/simple-react-ui-kit/" target="_blank">StoryBook</a>
·
<a href="CHANGELOG.md" target="_blank">Changelog</a>
·
<a href="https://github.com/miksrv/simple-react-ui-kit/issues/new?assignees=miksrv&labels=bug&projects=&template=1-bug.yml&title=%5BBug%5D%3A+">Report Bug</a>
·
<a href="https://github.com/miksrv/simple-react-ui-kit/issues/new?assignees=miksrv&labels=enhancement&template=2-feature-request.yml&title=%5BFeature%5D%3A+">Request Feature</a>
·
<a href="#contact">Contact</a>

</div>

<br />

<!-- PROJECT BADGES -->
<div align="center">

[![Contributors][contributors-badge]][contributors-url]
[![Forks][forks-badge]][forks-url]
[![Stargazers][stars-badge]][stars-url]
[![Issues][issues-badge]][issues-url]
[![MIT License][license-badge]][license-url]

[![UI Checks](https://github.com/miksrv/simple-react-ui-kit/actions/workflows/checks.yml/badge.svg)](https://github.com/miksrv/simple-react-ui-kit/actions/workflows/checks.yml)
[![Release package](https://github.com/miksrv/simple-react-ui-kit/actions/workflows/publish.yml/badge.svg)](https://github.com/miksrv/simple-react-ui-kit/actions/workflows/publish.yml)
[![Deploy Storybook](https://github.com/miksrv/simple-react-ui-kit/actions/workflows/storybook.yml/badge.svg)](https://github.com/miksrv/simple-react-ui-kit/actions/workflows/storybook.yml)
[![Quality Gate](https://github.com/miksrv/simple-react-ui-kit/actions/workflows/sonarcloud.yml/badge.svg)](https://github.com/miksrv/simple-react-ui-kit/actions/workflows/sonarcloud.yml)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=miksrv_simple-react-ui-kit&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=miksrv_simple-react-ui-kit)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=miksrv_simple-react-ui-kit&metric=coverage)](https://sonarcloud.io/summary/new_code?id=miksrv_simple-react-ui-kit)
[![ZIP Size](https://badgen.net/bundlephobia/minzip/simple-react-ui-kit@latest?color=blue)](https://bundlephobia.com/result?p=simple-react-ui-kit)
[![Installs](https://badgen.net/npm/dt/simple-react-ui-kit?label=installs&icon=npm&color=blue)](https://npmtrends.com/simple-react-ui-kit)

</div>

<!-- TABLE OF CONTENTS -->

### Table of Contents

- [About the Project](#about-of-project)
    - [Built With](#built-with)
- [Installation](#installation)
- [Components](#usage)
    - [Badge](#badge)
    - [Button](#button)
    - [Calendar](#calendar)
    - [Checkbox](#checkbox)
    - [Container](#container)
    - [DatePicker](#datepicker)
    - [Dialog](#dialog)
    - [Icon](#icon)
    - [Input](#input)
    - [TextArea](#textarea)
    - [Message](#message)
    - [Popout](#popout)
    - [Progress](#progress)
    - [Select](#select)
    - [Skeleton](#skeleton)
    - [Spinner](#spinner)
    - [Table](#table)
- [Contributing](#contributing)
    - [Top Contributors](#top-contributors)
- [Style Variables Customization](#style-variables-customization)
- [License](#license)
- [Acknowledgments](#acknowledgments)

<!-- ABOUT OF PROJECT -->

## About the Project

**Simple React UI Kit** is an open-source React component library focused on developer experience, accessibility, and design flexibility. Built with TypeScript, Sass Modules, and Rollup, it delivers a minimal bundle footprint without sacrificing functionality.

### Key Features

1. **17 Production-Ready Components** — Badge, Button, Calendar, Checkbox, Container, DatePicker, Dialog, Icon, Input, Message, Popout, Progress, Select, Skeleton, Spinner, Table, and TextArea — all fully documented in Storybook.
2. **Full TypeScript Support** — Every component ships with strict type definitions and IntelliSense-friendly prop interfaces.
3. **Themeable via CSS Variables** — Override design tokens at the `:root` level to integrate any design system or dark-mode theme.
4. **Accessible by Default** — Components include proper ARIA attributes, keyboard navigation, and focus management out of the box.
5. **Minimal Bundle Size** — Bundled with Rollup, tree-shakeable, and free from heavy peer dependencies.

### Real-World Usage

One real-world application of this library is the interface for an IoT weather station. You can check out the live demo: [Weather Station Demo](https://meteo.miksoft.pro/). The source code is available in the [Weather Station Repository](https://github.com/miksrv/arduino-weather-station).

<p align="right">
  (<a href="#top">Back to top</a>)
</p>

### Built With

The project is built with a modern, battle-tested frontend stack.

- [![JavaScript][js-badge]][js-url] Core language powering the component logic.
- [![TypeScript][ts-badge]][ts-url] Strict static typing for safer, more maintainable code.
- [![Sass][sass-badge]][sass-url] Modular, component-scoped styling with Sass modules.
- [![GitHub Actions][githubactions-badge]][githubactions-url] CI/CD pipeline for automated testing, linting, and publishing.
- [![SonarCloud][sonarcloud-badge]][sonarcloud-url] Continuous code quality and security analysis.
- [![Jest][jest-badge]][jest-url] Unit testing with Jest and React Testing Library.

<p align="right">
  (<a href="#top">Back to top</a>)
</p>

<!-- INSTALLATION -->

## Installation

Install **Simple React UI Kit** via npm:

```sh
npm install simple-react-ui-kit
```

Or with Yarn:

```sh
yarn add simple-react-ui-kit
```

<p align="right">
  (<a href="#top">Back to top</a>)
</p>

<!-- USAGE -->

## Usage

Each component is individually importable and fully typed. The examples below cover the most common use cases — refer to [Storybook](https://miksrv.github.io/simple-react-ui-kit/) for live interactive demos of every component and its props.

### Badge

The `Badge` component is a compact, stylized label for tagging and categorizing content. It supports an optional icon, a remove button with a callback, and three size variants.

<details>
  <summary>Badge Component Example</summary>

Check out the full documentation and examples in Storybook: [Badge Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-badge--docs).

#### Props:

- **`key`**: A unique key for identifying the badge (optional).
- **`label`**: The text content inside the badge.
- **`icon`**: An optional icon to display alongside the badge text.
- **`size`**: Size of the badge (`small`, `medium`, `large`).
- **`onClickRemove`**: A callback function to handle removal of the badge. This is triggered when the remove button is clicked.

#### Example Usage:

```tsx
import React from 'react'
import { Badge } from 'simple-react-ui-kit'

const App = () => (
    <div>
        {/* Badge with label and icon */}
        <Badge
            label='New'
            icon='CheckCircle'
        />

        {/* Removable Badge */}
        <Badge
            label='Removable'
            onClickRemove={(key) => alert(`Removed: ${key}`)}
        />

        {/* Badge without icon */}
        <Badge label='Simple Badge' />
    </div>
)

export default App
```

In this example:

- The first badge displays a label and an icon.
- The second badge includes a removal button, which triggers an alert when clicked.
- The third badge is a simple label without an icon or removal option.

For more details and live examples, check out the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-badge--docs).

</details>

### Button

The `Button` component is a versatile, accessible button with multiple visual modes, size variants, loading states, icon support, and optional link behavior.

<details>
  <summary>Button Component Example</summary>

Check out the full documentation and examples in Storybook: [Button Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-button--docs).

#### Props:

- **`className`**: Additional class names for custom styling.
- **`link`**: If provided, the button acts as a link.
- **`noIndex`**: Prevents search engines from indexing the button when used as a link.
- **`stretched`**: If `true`, the button takes the full width of the container.
- **`loading`**: Shows a loading spinner instead of button content.
- **`size`**: Controls button size (`small`, `medium`, `large`).
- **`mode`**: Visual style of the button (`primary`, `secondary`, `outline`, `link`).
- **`variant`**: Variant for styling (`positive`, `negative`).
- **`icon`**: Displays an icon inside the button.
- **`children`**: React children to be displayed inside the button.
- **`label`**: Text content for the button.
- **`disabled`**: Disables the button. When used together with `link`, the anchor renders with `aria-disabled="true"`, `tabIndex={-1}`, and no `href`, making it non-navigable and accessible.

#### Example Usage:

```tsx
import React from 'react'
import { Button } from 'simple-react-ui-kit'

const App = () => (
    <div>
        {/* Primary Button */}
        <Button
            mode='primary'
            onClick={() => alert('Primary Button Clicked!')}
        >
            Primary Button
        </Button>

        {/* Secondary Button with Icon */}
        <Button
            mode='secondary'
            icon='CheckCircle'
            onClick={() => alert('Secondary Button Clicked!')}
        >
            Secondary Button
        </Button>

        {/* Button with Loading State */}
        <Button
            mode='primary'
            loading={true}
        >
            Loading...
        </Button>

        {/* Link Button */}
        <Button
            mode='link'
            link='https://example.com'
        >
            Visit Example
        </Button>
    </div>
)

export default App
```

In this example:

- The first button demonstrates a simple primary button with a click handler.
- The second button showcases a secondary button with an icon.
- The third button is in a loading state with a spinner.
- The fourth button acts as a link.

For more details and live examples, check out the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-button--docs).

</details>

### Calendar

The `Calendar` component is an interactive date picker supporting single-date and date-range selection, `en`/`ru` localization, min/max date constraints, and keyboard navigation.

<details>
  <summary>Calendar Component Example</summary>

Check out the full documentation and examples in Storybook: [Calendar Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-calendar--docs).

#### Props:

- **`hideDaysOfWeek`**: Hides the days of the week row if set to `true`.
- **`datePeriod`**: Tuple of start and end dates (`[string?, string?]`) for range selection.
- **`minDate`**: Minimum selectable date (`YYYY-MM-DD`).
- **`maxDate`**: Maximum selectable date (`YYYY-MM-DD`).
- **`locale`**: Locale for month and day names (`'ru'` or `'en'`).
- **`containerClassName`**: Additional class name for the calendar container.
- **`onDateSelect`**: Callback for single date selection.
- **`onPeriodSelect`**: Callback for period selection (start and end dates).

```tsx
import React, { useState } from 'react'
import { Calendar } from 'simple-react-ui-kit'

const App = () => {
    const [period, setPeriod] = useState<[string?, string?]>([])

    return (
        <div>
            <Calendar
                locale='en'
                minDate='2023-01-01'
                maxDate='2025-12-31'
                datePeriod={period}
                onPeriodSelect={(start, end) => setPeriod([start, end])}
            />
        </div>
    )
}

export default App
```

In this example:

- The Calendar allows selecting a date range between 2023-01-01 and 2025-12-31.
- The selected period is managed in React state and updated via the onPeriodSelect callback.
- The calendar is displayed in English.

For more details and live examples, check out the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-calendar--docs).

</details>

### Checkbox

The `Checkbox` component is a fully controlled input that supports checked, unchecked, and indeterminate states, along with optional labels, disabled mode, and an accessible `onChange` handler.

<details>
  <summary>Checkbox Component Example</summary>

Check out the full documentation and examples in Storybook: [Checkbox Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-checkbox--docs).

#### Props:

- **`label`**: Optional label to be displayed alongside the checkbox (can be a string or a ReactNode).
- **`indeterminate`**: If `true`, renders the checkbox in an indeterminate state.
- **`disabled`**: If `true`, disables the checkbox interaction.
- **`checked`**: Indicates whether the checkbox is checked (can be controlled via this prop).
- **`onChange`**: Function called when the checkbox state changes.
- **`id`**: Optional HTML `id` attribute, used to link the label with the checkbox.

#### Example Usage:

```tsx
import React from 'react'
import { Checkbox } from 'simple-react-ui-kit'

const App = () => (
    <div>
        {/* Basic Checkbox */}
        <Checkbox label='Basic Checkbox' />

        {/* Checked Checkbox */}
        <Checkbox
            label='Checked Checkbox'
            checked={true}
        />

        {/* Indeterminate Checkbox */}
        <Checkbox
            label='Indeterminate Checkbox'
            indeterminate={true}
        />

        {/* Disabled Checkbox */}
        <Checkbox
            label='Disabled Checkbox'
            disabled={true}
        />

        {/* Checkbox with onChange handler */}
        <Checkbox
            label='Interactive Checkbox'
            onChange={(e) => console.log(e.target.checked)}
        />
    </div>
)

export default App
```

In this example:

- The first checkbox is a basic checkbox with a label.
- The second checkbox is pre-checked using the `checked` prop.
- The third checkbox demonstrates the indeterminate state.
- The fourth checkbox is disabled and cannot be interacted with.
- The fifth checkbox includes an `onChange` handler to capture the change in its state.

For more details and live examples, check out the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-checkbox--docs).

</details>

### Container

The `Container` component is a flexible layout wrapper for organizing content with optional title, action element, custom header, and footer sections — ideal for cards, panels, and page sections.

<details>
  <summary>Container Component Example</summary>

Check out the full documentation and examples in Storybook: [Container Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-container--docs).

#### Props:

- **`className`**: Additional class names for custom styling.
- **`title`**: Optional title for the container, typically displayed in the header.
- **`action`**: Optional action element (button, link, etc.) displayed in the header.
- **`header`**: Custom header content, if different from the default title and action.
- **`children`**: Main content of the container.
- **`footer`**: Optional footer content, typically used for additional actions or information.

#### Example Usage:

```tsx
import React from 'react'
import { Container } from 'simple-react-ui-kit'

const App = () => (
    <div>
        {/* Basic Container with Title */}
        <Container title='Basic Container'>This is the main content inside the container.</Container>

        {/* Container with Custom Header and Footer */}
        <Container
            header={<div>Custom Header</div>}
            footer={<div>Footer Content</div>}
        >
            Content goes here...
        </Container>

        {/* Container with Action Button */}
        <Container
            title='Container with Action'
            action={<button onClick={() => alert('Action Clicked!')}>Action</button>}
        >
            This container has a button action in the header.
        </Container>

        {/* Custom Styled Container */}
        <Container className='custom-container-class'>This container has custom styles applied.</Container>
    </div>
)

export default App
```

In this example:

- The first container demonstrates a simple setup with a title and content.
- The second container includes a custom header and footer.
- The third container has an action button in the header.
- The fourth container shows how to apply custom styles via the `className` prop.

For more details and live examples, check out the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-container--docs).

</details>

### DatePicker

The `DatePicker` component provides a user-friendly trigger button with a dropdown calendar for selecting single dates or date ranges. It includes built-in preset options (Today, Last Week, etc.) and is ideal for dashboards and report filters.

<details>
  <summary>DatePicker Component Example</summary>

Check out the full documentation and examples in Storybook: [DatePicker Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-datepicker--docs).

#### Props:

- **`hidePresets`**: Array of preset keys to hide from the presets list.
- **`periodDatesFormat`**: Format for displaying period ranges (default: `DD.MM.YYYY`).
- **`singleDateFormat`**: Format for displaying a single date (default: `DD MMMM YYYY`).
- **`placeholder`**: Caption shown when no date is selected (default: `Select date`).
- **`disabled`**: Disables the date picker if `true`.
- **`buttonMode`**: Button mode for the trigger (`primary`, `secondary`, etc.).
- All other `Calendar` props are supported.

#### Example Usage:

```tsx
import React, { useState } from 'react'
import { DatePicker } from 'simple-react-ui-kit'

const App = () => {
    const [period, setPeriod] = useState<[string?, string?]>([])

    return (
        <DatePicker
            periodDatesFormat='DD.MM.YYYY'
            singleDateFormat='DD MMMM YYYY'
            onPeriodSelect={(start, end) => setPeriod([start, end])}
            placeholder='Choose a date'
            buttonMode='primary'
        />
    )
}

export default App
```

In this example:

- The `DatePicker` component allows users to select a date or date range.
- The selected period is stored in the `period` state variable.
- Custom date formats and captions are provided for better user experience.
- The button mode is set to `primary` for visual emphasis.

For more details and live examples, check out the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/controls-datepicker--docs).

</details>

### Dialog

The `Dialog` component is an accessible modal with a backdrop overlay, configurable dimensions, back/close button controls, Escape key handling, and optional parent-relative positioning.

<details>
  <summary>Dialog Component Example</summary>

Check out the full documentation and examples in Storybook: [Dialog Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-dialog--docs).

#### Props:

- **`open`**: Controls whether the dialog is open or closed.
- **`title`**: Title text displayed in the dialog header.
- **`contentHeight`**: Height of the dialog content (e.g., `300px`).
- **`maxWidth`**: Maximum width of the dialog (e.g., `500px`). Defaults to `500px`.
- **`showOverlay`**: Determines if the backdrop overlay is displayed. Defaults to `true`.
- **`backLinkCaption`**: Caption for the back button.
- **`showBackLink`**: Determines if the back button is displayed.
- **`showCloseButton`**: Determines if the close button is displayed.
- **`parentRef`**: Reference to the parent element for positioning the dialog.
- **`children`**: Content to be displayed inside the dialog.
- **`onBackClick`**: Callback function triggered when the back button is clicked.
- **`onCloseDialog`**: Callback function triggered when the dialog is closed (including Escape key).

#### Example Usage:

```tsx
import React, { useState, useRef } from 'react'
import { Dialog, Button } from 'simple-react-ui-kit'

const App = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const parentRef = useRef<HTMLDivElement | null>(null)

    return (
        <div
            ref={parentRef}
            style={{ position: 'relative', height: '300px' }}
        >
            <Button onClick={() => setIsDialogOpen(true)}>Open Dialog</Button>
            <Dialog
                open={isDialogOpen}
                title='Dialog Header'
                contentHeight='200px'
                maxWidth='400px'
                backLinkCaption='Back'
                showBackLink
                parentRef={parentRef}
                onBackClick={() => alert('Back button clicked!')}
                onCloseDialog={() => setIsDialogOpen(false)}
            >
                <p>This is the dialog content!</p>
                <Button onClick={() => setIsDialogOpen(false)}>Close Dialog</Button>
            </Dialog>
        </div>
    )
}

export default App
```

In this example:

- The `Dialog` is opened and closed using the `isDialogOpen` state.
- The `backLinkCaption` and `showBackLink` props enable a back button with a custom caption.
- The dialog is positioned relative to the `parentRef` container.

For more detailed examples and live usage, check out the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-dialog--docs).

</details>

### Icon

The `Icon` component renders scalable SVG icons by name, accepting any additional SVG attributes for full customization. Use it in buttons, navigation items, or anywhere consistent iconography is needed.

<details>
  <summary>Icon Component Example</summary>

Explore the full documentation and examples in Storybook: [Icon Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-icon--docs).

#### Props:

- **`name`**: Required. The icon identifier — must match one of the predefined icon names.
- **`className`**: Optional class name for custom styling.
- **`...props`**: Any additional `SVGSVGElement` attributes (`onClick`, `style`, `width`, `height`, etc.) passed directly to the SVG.

#### Example Usage:

```tsx
import React from 'react'
import { Icon } from 'simple-react-ui-kit'

const App = () => {
    return (
        <div>
            <h1>My Application</h1>
            <Icon
                name='Search'
                className='icon-search'
            />
            <Icon
                name='Settings'
                className='icon-settings'
            />
            <Icon
                name='User'
                className='icon-user'
            />
        </div>
    )
}

export default App
```

In this example, `Search`, `Settings`, and `User` icons are rendered with custom class names for styling.

For more detailed examples and interactive demonstrations, visit the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-icon--docs).

</details>

### Input

The `Input` component is a fully featured form field with label, error message, required indicator, and disabled state support. It extends all standard `HTMLInputElement` attributes for maximum flexibility.

<details>
  <summary>Input Component Example</summary>

Check out the full documentation and examples in Storybook: [Input Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-input--docs).

#### Props:

- **`label`**: Optional label text displayed above the input field.
- **`mode`**: Visual style of the input field (`primary`, `ghost`). Defaults to `primary`.
- **`size`**: Size of the input field, can be `small`, `medium` or `large`.
- **`error`**: Error message displayed below the input field, used for validation feedback.
- **`className`**: Additional class names for custom styling.
- **`required`**: Marks the input as required.
- **`disabled`**: Disables the input, preventing user interaction.

Additionally, the `Input` component accepts all standard input attributes from `React.InputHTMLAttributes<HTMLInputElement>`, making it flexible for various input scenarios (e.g., `type`, `placeholder`, `value`, etc.).

#### Example Usage:

```tsx
import React, { useState } from 'react'
import { Input } from 'simple-react-ui-kit'

const App = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<string | undefined>()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)
        setError(value.length < 3 ? 'Input must be at least 3 characters long.' : undefined)
    }

    return (
        <div>
            <Input
                label='Username'
                placeholder='Enter your username'
                value={inputValue}
                onChange={handleInputChange}
                required
                error={error}
            />
        </div>
    )
}

export default App
```

In this example:

- The `Input` component displays a label and an error message if the input text is too short.
- The input's required attribute visually indicates that it’s a required field.
- The input value is managed with React state, and validation logic sets an error message conditionally.

For more detailed examples and live usage, check out the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-input--docs).

</details>

### TextArea

The `TextArea` component is a multi-line text input with label, error message, required indicator, and disabled state support. Wraps the native `<textarea>` element.

<details>
  <summary>TextArea Component Example</summary>

Check out the full documentation and examples in Storybook: [TextArea Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/controls-textarea--docs).

#### Props:

- **`label`**: Optional label text displayed above the textarea.
- **`mode`**: Visual style of the textarea (`primary`, `ghost`). Defaults to `primary`.
- **`size`**: Size of the textarea, can be `small`, `medium` or `large`.
- **`error`**: Error message displayed below the textarea, used for validation feedback.
- **`resize`**: Controls resize behavior of the textarea (`none`, `vertical`, `horizontal`, `both`). Defaults to `vertical`.
- **`autoResize`**: When `true`, the textarea height grows automatically to fit its content. The resize handle is hidden when this is active. Defaults to `false`.
- **`className`**: Additional class names for custom styling.
- **`required`**: Marks the textarea as required.
- **`disabled`**: Disables the textarea, preventing user interaction.

Additionally, the `TextArea` component accepts all standard textarea attributes from `React.TextareaHTMLAttributes<HTMLTextAreaElement>`, making it flexible for various use cases (e.g., `rows`, `placeholder`, `value`, etc.).

#### Example Usage:

```tsx
import React, { useState } from 'react'
import { TextArea } from 'simple-react-ui-kit'

const App = () => {
    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<string | undefined>()

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value
        setValue(text)
        setError(text.length > 0 && text.length < 10 ? 'Comment must be at least 10 characters long.' : undefined)
    }

    return (
        <div>
            <TextArea
                label='Comment'
                placeholder='Write your comment...'
                value={value}
                onChange={handleChange}
                required
                rows={4}
                error={error}
            />
        </div>
    )
}

export default App
```

In this example:

- The `TextArea` component displays a label and an error message if the text is too short.
- The required attribute visually indicates that it's a required field.
- The textarea value is managed with React state, and validation logic sets an error message conditionally.

For more detailed examples and live usage, check out the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/controls-textarea--docs).

</details>

### Message

The `Message` component renders styled notification banners in four semantic variants — `error`, `warning`, `success`, and `info` — with an optional title and arbitrary React content.

<details>
  <summary>Message Component Example</summary>

Check out the full documentation and examples in Storybook: [Message Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-message--docs).

#### Props:

- **`type`**: Defines the visual style of the message. Accepts one of the following values: `'error'`, `'warning'`, `'success'`, or `'info'`.
- **`title`**: The title of the message that appears at the top (optional).
- **`children`**: The content inside the message box, which can be any React node (optional).

#### Example Usage:

```tsx
import React from 'react'
import { Message } from 'simple-react-ui-kit'

const App = () => (
    <div>
        {/* Error message with title and content */}
        <Message
            type='error'
            title='Error!'
        >
            There was an issue with your request.
        </Message>

        {/* Success message without title */}
        <Message type='success'>Operation completed successfully!</Message>

        {/* Info message with custom content */}
        <Message
            type='info'
            title='Information'
        >
            <ul>
                <li>First info item</li>
                <li>Second info item</li>
            </ul>
        </Message>
    </div>
)

export default App
```

In this example:

- The first `Message` displays an error with a title and content.
- The second `Message` shows a success message without a title.
- The third `Message` provides information with a custom list as its content.

For more details and live examples, check out the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-message--docs).

</details>

### Popout

The `Popout` component is a floating panel triggered by a button, typically used for dropdown menus or contextual actions. It supports left/right positioning, portal rendering for overflow-hidden containers, auto-repositioning on scroll and resize, and an imperative `close()` handle.

<details>
  <summary>Popout Component Example</summary>

Explore the full documentation and examples in Storybook: [Popout Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-popout--docs).

#### Props:

- **`className`**: Additional class names for custom styling.
- **`disabled`**: Disables the popout trigger, preventing the popout from opening.
- **`position`**: Position of the popout relative to the trigger element. Possible values: `'left'` or `'right'`.
- **`trigger`**: The content inside the button that triggers the popout (could be text, an icon, or a React node).
- **`children`**: The content to display inside the popout when it's open.
- **`closeOnChildrenClick`**: A boolean flag that, when set to `true`, closes the popout when any child inside the popout is clicked.
- **`onOpenChange`**: Callback function triggered when isOpen state changes.
- **`portal`**: When set to `true`, renders the popout content with fixed positioning (useful inside fixed or overflow-hidden containers).

#### Example Usage:

```tsx
import React, { useRef } from 'react'
import { Popout, PopoutHandleProps } from 'simple-react-ui-kit'

const App = () => {
    const popoutRef = useRef<PopoutHandleProps>(null)

    const handleClosePopout = () => {
        if (popoutRef.current) {
            popoutRef.current.close()
        }
    }

    return (
        <div>
            <Popout
                ref={popoutRef}
                position='right'
                trigger='Open Popout'
                closeOnChildrenClick={true}
            >
                <div>
                    <p>Popout Content</p>
                    <button onClick={handleClosePopout}>Close</button>
                </div>
            </Popout>
        </div>
    )
}

export default App
```

In this example:

- The `Popout` component is positioned to the right of the trigger button.
- The `closeOnChildrenClick` prop is set to `true`, meaning the popout will close when any of its children are clicked.
- A reference to the popout is used to manually close it via the `close` function.

#### Imperative Handle:

The `Popout` component provides an imperative handle with a `close()` method, which allows programmatic control over closing the popout.

For more detailed examples and interactive demonstrations, visit the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-popout--docs).

</details>

### Select

The `Select` component is a fully featured dropdown with single and multi-select modes, search filtering, clear button, async loading state, portal rendering, and ARIA accessibility. It auto-repositions on scroll and resize to stay correctly anchored in any layout.

<details>
  <summary>Select Component Example</summary>

Check out the full documentation and examples in Storybook: [Select Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/controls-select--docs).

#### Props:

- **`options`**: Array of selectable options, each with a `key` and `value`.
- **`value`**: Selected value(s); can be a single key or an array of keys for multiple selection.
- **`multiple`**: Enables multiple selection mode.
- **`searchable`**: Allows searching/filtering options.
- **`clearable`**: Shows a button to clear the selection.
- **`loading`**: Displays a loading spinner in the dropdown.
- **`closeOnSelect`**: Whether the dropdown closes after selecting an option (default: `true`).
- **`size`**: Size of the select field (`small`, `medium`, `large`).
- **`label`**: Optional label for the select field.
- **`placeholder`**: Placeholder text when nothing is selected.
- **`notFoundCaption`**: Text shown when no options match the search.
- **`error`**: Error message for validation feedback.
- **`required`**: Marks the field as required.
- **`disabled`**: Disables the select. The component uses `aria-disabled` for accessibility.
- **`onSelect`**: Callback when the selection changes.
- **`onSearch`**: Callback when the search input changes.
- **`onOpen`**: Callback when the dropdown is opened.

#### Example Usage:

```tsx
import React, { useState } from 'react'
import { Select } from 'simple-react-ui-kit'

const options = [
    { key: 'apple', value: 'Apple' },
    { key: 'banana', value: 'Banana' },
    { key: 'orange', value: 'Orange' }
]

const App = () => {
    const [selected, setSelected] = useState<string | undefined>()

    return (
        <Select
            options={options}
            value={selected}
            onSelect={(opts) => setSelected(opts?.[0]?.key)}
            label='Choose a fruit'
            placeholder='Select...'
            clearable
            searchable
        />
    )
}

export default App
```

In this example:

- The `Select` component displays a searchable dropdown of fruits.
- The user can clear the selection or search for an option.
- The selected value is managed in React state.
- For more details and live examples, check out the Storybook Documentation.

</details>

### Skeleton

The `Skeleton` component is an animated loading placeholder that mimics the shape of content while it is being fetched, reducing perceived load time and layout shift.

<details>
  <summary>Skeleton Component Example</summary>

Explore the full documentation and examples in Storybook: [Skeleton Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-skeleton--docs).

#### Props:

- **`className`**: Additional class names to match the skeleton's shape and size to the content it represents.
- **`...props`**: All standard `HTMLDivElement` attributes are accepted (`style`, `width`, `height`, etc.).

#### Example Usage:

```tsx
import React from 'react'
import { Skeleton } from 'simple-react-ui-kit'

const App = () => {
    return (
        <div>
            <h1>Loading Content</h1>
            <Skeleton style={{ width: '100%', height: '200px' }} />
        </div>
    )
}

export default App
```

In this example, the skeleton fills a `200px`-tall block as a placeholder while content loads. Use the `className` prop or inline styles to match any shape — text lines, image blocks, or card layouts.

For more detailed examples and interactive demonstrations, visit the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-skeleton--docs).

</details>

### Spinner

The `Spinner` component is an SVG-based animated loading indicator that signals ongoing processes such as data fetching or form submission.

<details>
  <summary>Spinner Component Example</summary>

Explore the full documentation and examples in Storybook: [Spinner Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-spinner--docs).

#### Props:

- **`className`**: Additional class names for custom styling.
- **`...props`**: All standard `SVGSVGElement` attributes are accepted (`width`, `height`, `style`, etc.).

#### Example Usage:

```tsx
import React from 'react'
import { Spinner } from 'simple-react-ui-kit'

const App = () => {
    return (
        <div>
            <h1>Loading...</h1>
            <Spinner
                className='custom-spinner'
                width={50}
                height={50}
            />
        </div>
    )
}

export default App
```

In this example, `width` and `height` control the spinner size, and `className` applies custom styles.

For more detailed examples and interactive demonstrations, visit the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-spinner--docs).

</details>

### Table

The `Table` component renders structured data with sortable columns, sticky headers, skeleton loading states, custom cell formatters, and optional vertical borders — suitable for dashboards, reports, and data management interfaces.

<details>
  <summary>Table Component Example</summary>

Explore the full documentation and examples in Storybook: [Table Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-table--docs).

#### Props:

- **`data`**: An optional array of data objects to be displayed in the table. Each object corresponds to a row in the table.
- **`size`**: Size of the table columns and rows, can be `small`, `medium` or `large`.
- **`defaultSort`**: An optional configuration object for default sorting behavior. It defines the key and direction (ascending or descending) for initial sorting.
- **`className`**: Additional class names for custom styling, allowing you to integrate your CSS styles.
- **`height`**: Specifies the table height in pixels or allows auto height if set to `null`.
- **`maxHeight`**: The maximum height of the table, if there is little data, the table will not stretch.
- **`columns`**: An array defining the column configurations, including header content, accessor keys, sortability, and custom formatters.
- **`loading`**: A boolean that indicates whether the table is in a loading state. When `true`, skeleton placeholders are displayed instead of data.
- **`stickyHeader`**: A boolean that, when set to `true`, keeps the table header fixed at the top during scrolling.
- **`verticalBorder`**: A boolean to control the visibility of vertical borders between columns for improved readability.
- **`noDataCaption`**: Text to display when there is no data available in the table.

#### Example Usage:

```tsx
import React from 'react'
import { Table } from 'simple-react-ui-kit'

const App = () => {
    const data = [
        { id: 1, name: 'Item 1', price: 100 },
        { id: 2, name: 'Item 2', price: 200 }
    ]

    const columns = [
        { header: 'ID', accessor: 'id', isSortable: true },
        { header: 'Name', accessor: 'name', isSortable: true },
        { header: 'Price', accessor: 'price', isSortable: true, formatter: (value) => `$${value}` }
    ]

    return (
        <Table
            data={data}
            columns={columns}
            defaultSort={{ key: 'name', direction: 'asc' }}
            loading={false}
            stickyHeader
        />
    )
}

export default App
```

In this example, the table renders two rows with sortable columns and a `formatter` that adds a currency symbol to the price column. Set `loading={true}` to show skeleton placeholders during async data fetching.

For more detailed examples and interactive demonstrations, visit the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-table--docs).

</details>

### Progress

The `Progress` component renders a horizontal progress bar with configurable percentage value, height, and color theme (`main`, `red`, `orange`, `green`).

<details>
  <summary>Progress Component Example</summary>

Check out the full documentation and examples in Storybook: [Progress Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-progress--docs).

#### Props:

- **`value`**: Current progress value (percentage, from 0 to 100).
- **`height`**: Height of the progress bar in pixels.
- **`color`**: Color theme for the progress bar (`main`, `red`, `orange`, `green`).
- **`className`**: Additional class names for custom styling.

#### Example Usage:

```tsx
import React from 'react'
import { Progress } from 'simple-react-ui-kit'

const App = () => (
    <div>
        {/* Default progress bar */}
        <Progress value={50} />

        {/* Custom height and color */}
        <Progress
            value={75}
            height={8}
            color='green'
        />

        {/* Progress bar with custom styles */}
        <Progress
            value={30}
            className='my-progress-bar'
        />
    </div>
)

export default App
```

In this example:

- The first progress bar shows 50% completion with default height and color.
- The second bar is 75% complete, taller, and uses the green color theme.
- The third bar demonstrates adding a custom CSS class.

- For more details and live examples, check out the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-progress--docs).

</details>

<p align="right">
  (<a href="#top">Back to top</a>)
</p>

<!-- STYLE VARIABLES CUSTOMIZATION -->

## Style Variables Customization

### Style Customization and Theming

All components are themed via CSS custom properties defined on `:root`. Override any variable in your own stylesheet to align with your design system or implement dark mode — no build step or config required.

#### Available CSS Variables

- **Primary Colors:**
    - `--color-contrast`: Contrast color (typically used for text on colored backgrounds).
    - `--color-green`: Default green color.
    - `--color-green-hover`: Hover state for green color.
    - `--color-green-active`: Active state for green color.
    - `--color-green-background`: Background green color (for success input, message etc.).
    - `--color-orange`: Default orange color.
    - `--color-orange-hover`: Hover state for orange color.
    - `--color-orange-active`: Active state for orange color.
    - `--color-orange-background`: Background orange color (for warning input, message etc.).
    - `--color-red`: Default red color.
    - `--color-red-hover`: Hover state for red color.
    - `--color-red-active`: Active state for red color.
    - `--color-red-background`: Background red color (for error input, message etc.).
    - `--color-main`: Main base color, used for buttons, links, checkbox icons.
    - `--color-main-hover`: Hover state for main color.
    - `--color-main-active`: Active state for main color.
    - `--color-main-background`: Background main color (for info input, message etc.).

- **Text and Typography:**
    - `--font-size`: Default font size.
    - `--font-size-small`: Font size for smaller text.
    - `--font-family`: Global font family.
    - `--text-color-primary`: Main text color.
    - `--text-color-secondary`: Secondary text color.
    - `--text-color-secondary-hover`: Secondary text color on hover.

- **Layout and Containers:**
    - `--body-background`: Background color for the body.
    - `--border-radius`: Global border radius for components.
    - `--container-shadow`: Shadow effect for containers.
    - `--container-background-color`: Default background color for containers.
    - `--container-error-background-color`: Background color for containers in error state.
    - `--container-error-color`: Text color for error containers.
    - `--container-success-background-color`: Background color for containers in success state.
    - `--container-success-color`: Text color for success containers.

- **Input Fields and Dropdowns:**
    - `--dropdown-background-color`: Background color for dropdowns.
    - `--dropdown-background-color-hover`: Hover state for dropdown background.
    - `--input-background-color`: Background color for input fields.
    - `--input-label-color`: Color for input labels.
    - `--input-border-color`: Border color for input fields.
    - `--input-border`: Full border styling for inputs.

- **Buttons:**
    - `--button-font-weight`: Font weight for buttons.
    - `--button-default-color`: Default text color for buttons.
    - `--button-default-background`: Default background color for buttons.
    - `--button-default-background-hover`: Hover background color for buttons.
    - `--button-default-background-active`: Active background color for buttons.
    - `--button-primary-color`: Text color for primary buttons.
    - `--button-primary-background`: Background color for primary buttons.
    - `--button-primary-background-hover`: Hover state for primary buttons.
    - `--button-primary-background-active`: Active state for primary buttons.
    - `--button-secondary-color`: Text color for secondary buttons.
    - `--button-secondary-background`: Background color for secondary buttons.
    - `--button-secondary-background-hover`: Hover state for secondary buttons.
    - `--button-secondary-background-active`: Active state for secondary buttons.

- **Popouts:**
    - `--popout-shadow`: Shadow effect for popouts and modals.

- **Tables:**
    - `--table-header-background`: Background color for table headers.
    - `--table-header-background-hover`: Hover state for table headers.
    - `--table-border-color`: Border color for tables.
    - `--table-row-box-shadow`: Box shadow for table row separators.

- **Skeleton:**
    - `--skeleton-background-animation`: Background gradient for content loading animation.

#### Example: Overriding Variables for Custom Themes

Declare your overrides in a global stylesheet — they take effect across all components immediately:

```css
:root {
    /* Element Heights for `size` props */
    --size-small: 24px;
    --size-medium: 28px;
    --size-large: 32px;

    /* Primary Colors */
    --color-contrast: #ffffff;

    --color-green: #4bb34b;
    --color-green-hover: #48ac4a;
    --color-green-active: #45a64a;
    --color-green-background: #e5ffe5; /* For dark: #2E3E2B */

    --color-orange: #f8a01c;
    --color-orange-hover: #ee9a1d;
    --color-orange-active: #e4941f;
    --color-orange-background: #fff2db; /* For dark: #5e5443 */

    --color-red: #e64646;
    --color-red-hover: #dd4446;
    --color-red-active: #d44245;
    --color-red-background: #ffdddd; /* For dark: #522e2e */

    --color-main: #2688eb;
    --color-main-hover: #4c96ea;
    --color-main-active: #237edd;
    --color-main-background: #d6eaff; /* For dark: #3c4957 */

    /* Text and Typography */
    --font-size: 14px;
    --font-size-small: 13px;
    --font-family:
        -apple-system, BlinkMacSystemFont, 'Segoe UI (Custom)', Roboto, 'Helvetica Neue', 'Open Sans (Custom)',
        system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    --text-color-primary: rgba(0, 0, 0, 0.9);
    --text-color-secondary: #818c99;
    --text-color-secondary-hover: #939ca9;

    /* Layout and Containers */
    --border-radius: 4px;
    --body-background: #ebedf0;
    --modal-background: #ffffff;
    --overlay-background: rgba(242, 243, 252, 0.7);
    --container-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.12);
    --container-background-color: #ffffff;
    --container-error-background-color: #ffe9e9;
    --container-error-color: var(--color-red);
    --container-success-background-color: #e8f9e8;
    --container-success-color: var(--color-green);

    /* Input Fields and Dropdowns */
    --dropdown-background-color: #ffffff;
    --dropdown-background-color-hover: #f2f3f5;
    --dropdown-badge-background-color: #ffffff;
    --input-background-color: #f2f3f5;
    --input-label-color: #6d7885;
    --input-border: 0.5px solid var(--input-border-color);
    --input-border-color: #e0e1e7;
    --input-border-focus-color: var(--color-main);

    /* Buttons */
    --button-font-weight: 500;
    --button-default-color: var(--color-main);
    --button-default-background: transparent;
    --button-default-background-hover: #f7f8fa;
    --button-default-background-active: #f1f2f5;

    --button-primary-color: #ffffff;
    --button-primary-background: var(--color-main);
    --button-primary-background-hover: var(--color-main-hover);
    --button-primary-background-active: var(--color-main-active);

    --button-secondary-background: rgba(235, 242, 250, 0.99);
    --button-secondary-background-hover: rgba(223, 234, 246, 0.99);
    --button-secondary-background-active: rgba(213, 226, 241, 0.99);
    --button-secondary-color: var(--color-main);
    --button-secondary-color-hover: var(--color-main-hover);
    --button-secondary-color-active: var(--color-main-active);

    /* Popout */
    --popout-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.08);

    /* Table */
    --table-header-background: #f9f9fb;
    --table-header-background-hover: rgba(255, 255, 255, 0.1);
    --table-border-color: var(--input-border-color);
    --table-row-box-shadow: inset 0 -1px var(--input-border-color);

    /* Skeleton */
    --skeleton-background-animation: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.04), transparent);
}
```

<p align="right">
  (<a href="#top">Back to top</a>)
</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions of all kinds are welcome — bug reports, feature requests, documentation improvements, and pull requests.

**To contribute:**

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

For more detailed contributing guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

### Releasing a New Version

Once a pull request is merged into `main`, follow these steps to publish a release:

1. After your pull request is merged, run the command `yarn changeset` to begin the release process.
2. Select the type of changes (major, minor, patch) and enter a detailed description of the changes.
3. This will create a markdown file in the `.changeset` directory describing the changes.

    **Important:** If you don't proceed with the next command, the release will be postponed.

4. To trigger the release process after the merge into `main`, run the command `yarn changeversion`. This will:
    - Update the version number in the `package.json`.
    - Update the `CHANGELOG.md` with the list of changes.

Once this is done, merging this branch into `main` will automatically publish a new release.

### Top contributors

<a href="https://github.com/miksrv/simple-react-ui-kit/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=miksrv/simple-react-ui-kit" alt="contrib.rocks image" />
</a>

<p align="right">
  (<a href="#top">Back to top</a>)
</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

<p align="right">
  (<a href="#top">Back to top</a>)
</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Resources and tools that were helpful during the development of this project:

1. [GitHub Readme Template](https://github.com/miksrv/GitHub-Project-README-Template)
2. [React Documentation](https://react.dev/)
3. [Sass Documentation](https://sass-lang.com/)
4. [Jest Testing Framework](https://jestjs.io/)

<p align="right">
  (<a href="#top">Back to top</a>)
</p>

<!-- CONTACT -->

## Contact

Misha - [miksoft.pro](https://miksoft.pro)

<p align="right">
  (<a href="#top">Back to top</a>)
</p>

<!-- MARKDOWN VARIABLES (LINKS, IMAGES) -->

[contributors-badge]: https://img.shields.io/github/contributors/miksrv/simple-react-ui-kit.svg?style=for-the-badge
[contributors-url]: https://github.com/miksrv/simple-react-ui-kit/graphs/contributors
[forks-badge]: https://img.shields.io/github/forks/miksrv/simple-react-ui-kit.svg?style=for-the-badge
[forks-url]: https://github.com/miksrv/simple-react-ui-kit/network/members
[stars-badge]: https://img.shields.io/github/stars/miksrv/simple-react-ui-kit.svg?style=for-the-badge
[stars-url]: https://github.com/miksrv/simple-react-ui-kit/stargazers
[issues-badge]: https://img.shields.io/github/issues/miksrv/simple-react-ui-kit.svg?style=for-the-badge
[issues-url]: https://github.com/miksrv/simple-react-ui-kit/issues
[license-badge]: https://img.shields.io/github/license/miksrv/simple-react-ui-kit.svg?style=for-the-badge
[license-url]: https://github.com/miksrv/simple-react-ui-kit/blob/master/LICENSE

<!-- Other ready-made icons can be seen for example here: https://github.com/inttter/md-badges -->

[js-badge]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000
[js-url]: https://www.javascript.com/
[ts-badge]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff
[ts-url]: https://www.typescriptlang.org/
[sass-badge]: https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff
[sass-url]: https://sass-lang.com/
[jest-badge]: https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white
[jest-url]: https://jestjs.io/
[sonarcloud-badge]: https://img.shields.io/badge/SonarCloud-F3702A?logo=sonarcloud&logoColor=fff
[sonarcloud-url]: https://sonarcloud.io/
[githubactions-badge]: https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white
[githubactions-url]: https://docs.github.com/en/actions
