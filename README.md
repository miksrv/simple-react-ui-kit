<a id="top"></a>

<!-- PROJECT TITLE -->

Welcome to the **Simple React UI Kit** repository! This project is designed to provide a collection of reusable UI components for React-based applications. Whether you're building a simple app or a complex web project, this UI kit offers a solid foundation to speed up your development.

<div align="center">
  <h3>Simple and lightweight UI kit for React developers</h3>

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

- [About of Project](#about-of-project)
    - [Built With](#built-with)
- [Installation](#installation)
- [Usage Components](#usage)
    - [Badge](#badge)
    - [Button](#button)
    - [Checkbox](#checkbox)
    - [Container](#container)
    - [Dropdown](#dropdown)
    - [Dialog](#dialog)
    - [Icon](#icon)
    - [Input](#input)
    - [Message](#message)
    - [MultiSelect](#multiselect)
    - [Popout](#popout)
    - [Skeleton](#skeleton)
    - [Spinner](#spinner)
    - [Table](#table)
- [Contributing](#contributing)
    - [Top Contributors](#top-contributors)
- [Style Variables Customization](#style-variables-customization)
- [License](#license)
- [Acknowledgments](#acknowledgments)

<!-- ABOUT OF PROJECT -->

## About of Project

The **Simple React UI Kit** is a collection of essential UI components for building responsive web applications using React. It includes various common components like buttons, inputs, modals, and more. The main focus of this kit is simplicity and ease of use while maintaining flexibility for custom styling.

### Key Features:

1. **Reusable Components** – Save time with prebuilt, modular UI components.
2. **Customizable** – Easily style components to match your design system.
3. **Lightweight** – Minimal dependencies and easy to integrate into any project.
4. **Typescript Support** – Fully typed components for TypeScript users.

### Example Usage

One of the applications of this UI Kit is in the interface of a weather station. You can check out the demo here: [Weather Station Demo](https://meteo.miksoft.pro/). The source code for this project can be found in the repository: [Weather Station Repository](https://github.com/miksrv/arduino-weather-station).

<p align="right">
  (<a href="#top">Back to top</a>)
</p>

### Built With

This project is built with modern JavaScript technologies to ensure flexibility and ease of use.

- [![JavaScript][js-badge]][js-url] Core languages used in frontend development.
- [![TypeScript][ts-badge]][ts-url] TypeScript extends JavaScript by adding types to the language.
- [![Sass][sass-badge]][sass-url] Styling the user interface.
- [![GitHub Actions][githubactions-badge]][githubactions-url] Continuous integration and deployment pipeline for automating tests and deployment processes.
- [![SonarCloud][sonarcloud-badge]][sonarcloud-url] Code quality and security analysis.
- [![Jest][jest-badge]][jest-url] Delightful JavaScript Testing Framework with a focus on simplicity.

<p align="right">
  (<a href="#top">Back to top</a>)
</p>

<!-- INSTALLATION -->

## Installation

To install **Simple React UI Kit**, you can use npm:

```sh
npm install simple-react-ui-kit
```

Or if you're using Yarn:

```sh
yarn add simple-react-ui-kit
```

<p align="right">
  (<a href="#top">Back to top</a>)
</p>

<!-- USAGE -->

## Usage

Below are examples of how to use some of the components in this UI Kit. Whether you're integrating into an existing project or starting fresh, these examples will help you get up and running.

### Badge

The `Badge` component is a small, stylized label that can display text, an optional icon, and a remove button. It is ideal for tagging or categorizing items and includes a callback for handling removal.

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
            icon='Check'
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

The `Button` component is a versatile and customizable button element with multiple variants, sizes, and loading states. It can also act as a link when provided with a URL.

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
            icon='check'
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

### Checkbox

The `Checkbox` component is a customizable input element used for toggling between checked, unchecked, and indeterminate states. It includes support for labels and provides additional flexibility with its disabled and indeterminate options.

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

The `Container` component is a flexible layout wrapper designed to organize and present content with optional headers, footers, and actions. It supports customizable class names and offers flexibility for displaying various sections such as a title, custom header, and footer.

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

### Dropdown

The `Dropdown` component provides a flexible, customizable dropdown menu for selecting options. It supports various features such as custom icons, images, placeholders, error messages, and a clearable state. It also handles clicks outside the dropdown to close it automatically.

<details>
  <summary>Dropdown Component Example</summary>

Check out the full documentation and examples in Storybook: [Dropdown Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-dropdown--docs).

#### Props:

- **`className`**: Additional class names for custom styling.
- **`options`**: Array of dropdown options (with a `key`, `value`, and optional `icon` or `image`).
- **`required`**: Marks the dropdown as required.
- **`disabled`**: Disables the dropdown.
- **`clearable`**: Allows the dropdown to be cleared (reset to no selection).
- **`searchable`**: Allow searching within options.
- **`loading`**: Show loading spinner.
- **`placeholder`**: Placeholder text shown when no option is selected.
- **`notFoundCaption`**: Text to display in the option list if there are no options or nothing found.
- **`label`**: Label text for the dropdown.
- **`size`**: Dropdown size (`small`, `medium`, `large`).
- **`error`**: Error message shown for validation errors.
- **`value`**: Currently selected value (key) in the dropdown.
- **`onSelect`**: Callback function triggered when an option is selected.
- **`onSearch`**: Callback function triggered when a search is made.
- **`onOpen`**: Callback function triggered when the dropdown is opened.

#### Example Usage:

```tsx
import React, { useState } from 'react'
import { Dropdown, DropdownOption } from 'simple-react-ui-kit'

const options: DropdownOption<string>[] = [
    { key: 'option1', value: 'Option 1' },
    { key: 'option2', value: 'Option 2', icon: 'Check' },
    { key: 'option3', value: 'Option 3', disabled: true }
]

const App = () => {
    const [selectedOption, setSelectedOption] = useState<string | undefined>()

    return (
        <div>
            <Dropdown
                label='Choose an option'
                options={options}
                placeholder='Select an option'
                value={selectedOption}
                onSelect={(option) => setSelectedOption(option?.key)}
                clearable
                searchable
            />
        </div>
    )
}

export default App
```

In this example:

- The `Dropdown` is populated with three options, where one of the options is disabled.
- The selected option is stored in the `selectedOption` state.
- A clearable dropdown is demonstrated, allowing users to reset their selection.

For more detailed examples and live usage, check out the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-dropdown--docs).

</details>

### Dialog

The `Dialog` component provides a customizable modal dialog for displaying content, actions, and headers. It supports features such as a backdrop overlay, configurable dimensions, a back button, and a close button. The component is designed to be flexible and accessible, with support for custom actions and responsive positioning.

<details>
  <summary>Dialog Component Example</summary>

Check out the full documentation and examples in Storybook: [Dialog Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-dialog--docs).

#### Props:

- **`open`**: Controls whether the dialog is open or closed.
- **`header`**: Header text for the dialog.
- **`contentHeight`**: Height of the dialog content (e.g., `300px`).
- **`maxWidth`**: Maximum width of the dialog (e.g., `500px`).
- **`backLinkCaption`**: Caption for the back button.
- **`showBackLink`**: Determines if the back button is displayed.
- **`showCloseButton`**: Determines if the close button is displayed.
- **`parentRef`**: Reference to the parent element for positioning the dialog.
- **`children`**: Content to be displayed inside the dialog.
- **`onBackClick`**: Callback function triggered when the back button is clicked.
- **`onCloseDialog`**: Callback function triggered when the dialog is closed.

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
                header='Dialog Header'
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

The `Icon` component serves as a flexible and reusable way to display various icons within your application. It allows for easy integration of SVG icons, enhancing the visual appeal and usability of your UI.

<details>
  <summary>Icon Component Example</summary>

Explore the full documentation and examples in Storybook: [Icon Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-icon--docs).

#### Props:

- **`name`**: A required property that specifies the name of the icon to be displayed. It should correspond to one of the predefined icon types in your application.

- **`className`**: An optional property for adding additional class names to the icon for custom styling.

- **`...props`**: This spread operator allows you to pass any additional SVG properties (such as `onClick`, `style`, etc.) directly to the SVG element.

#### Example Usage:

```tsx
import React from 'react'
import { Icon } from 'simple-react-ui-kit'

const App = () => {
    return (
        <div>
            <h1>My Application</h1>
            <Icon
                name='Home'
                className='icon-home'
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

In this example:

- The `Icon` component is used to render icons for home, settings, and user, each with custom class names for styling.

#### Features:

- **Customizable**: The `Icon` component can accept additional properties that allow for further customization, such as event handlers and styling.

- **Flexible Integration**: Use the component anywhere in your application where an icon is needed, ensuring consistency across your UI.

- **SVG Support**: The component is built to render SVG icons, providing scalability and clarity in display.

#### Utility:

The `Icon` component is ideal for applications requiring a variety of icons, such as navigation bars, buttons, and informational displays. It enhances the user experience through intuitive iconography while maintaining a clean and manageable codebase.

For more detailed examples and interactive demonstrations, visit the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-icon--docs).

</details>

### Input

The `Input` component provides a versatile, customizable input field with optional label and error message support. It includes visual indicators for required and disabled states, allowing for enhanced form usability.

<details>
  <summary>Input Component Example</summary>

Check out the full documentation and examples in Storybook: [Input Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-input--docs).

#### Props:

- **`label`**: Optional label text displayed above the input field.
- **`size`**: Size of the input field, can be `small`, `medium` or `large`.
- **`error`**: Error message displayed below the input field, used for validation feedback.
- **`className`**: Additional class names for custom styling.
- **`required`**: Marks the input as required.
- **`disabled`**: Disables the input, preventing user interaction.

Additionally, the `Input` component accepts all standard input attributes from `React.InputHTMLAttributes<HTMLInputElement>`, making it flexible for various input scenarios (e.g., `type`, `placeholder`, `value`, etc.).

#### Example Usage:

```tsx
import React, { useState } from 'react'
import Input from 'simple-react-ui-kit'

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

### Message

The `Message` component is a versatile message display box that supports different visual styles (`error`, `warning`, `success`, and `info`). It is used to present messages to users, providing a title and content area, with the ability to customize the type of message displayed.

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

### MultiSelect

The `MultiSelect` component allows users to select multiple options from a dropdown list with customizable features such as search, loading state, and error handling. It supports adding and removing selected options, making it a great choice for forms requiring multiple selections.

<details>
  <summary>MultiSelect Component Example</summary>

Check out the full documentation and examples in Storybook: [MultiSelect Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-multiselect--docs).

#### Props:

- **`options`**: Array of options to display in the dropdown. Each option should be an object with a `key` and `value`.
- **`value`**: Array of selected values (keys) in the dropdown.
- **`onSelect`**: Callback function triggered when an option is selected or deselected. Receives the updated list of selected options.
- **`onSearch`**: Callback function triggered when a search is made, receiving the search text.
- **`onOpen`**: Callback function triggered when the dropdown is opened.
- **`placeholder`**: Placeholder text to display in the search input field when no value is selected.
- **`label`**: Optional label text displayed above the dropdown.
- **`error`**: Optional error message displayed below the dropdown for validation feedback.
- **`required`**: Marks the dropdown as required.
- **`disabled`**: Disables the dropdown, preventing user interaction.
- **`loading`**: Indicates a loading state, displaying a spinner while data is being fetched or processed.
- **`closeOnSelect`**: Whether to close the dropdown when an option is selected.
- **`notFoundCaption`**: Text to display in the options list if no options are found after a search.

#### Example Usage:

```tsx
import React, { useState } from 'react'
import MultiSelect from 'simple-react-ui-kit'

const App = () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([])
    const [searchText, setSearchText] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const options = [
        { key: '1', value: 'Option 1' },
        { key: '2', value: 'Option 2' },
        { key: '3', value: 'Option 3' }
        // Add more options here
    ]

    const handleSelect = (selectedOptions: { key: string; value: string }[]) => {
        setSelectedValues(selectedOptions.map((option) => option.key))
    }

    const handleSearch = (text: string) => {
        setSearchText(text)
        // You can implement search logic here
    }

    return (
        <div>
            <MultiSelect
                label='Select Options'
                options={options}
                value={selectedValues}
                onSelect={handleSelect}
                onSearch={handleSearch}
                placeholder='Search options'
                loading={loading}
                required
                notFoundCaption='No options found'
            />
        </div>
    )
}

export default App
```

In this example:

- The `MultiSelect` component displays a list of options and allows for multiple selections.
- The `onSelect` callback updates the selected values in state.
- The `onSearch` callback handles search functionality, updating the list of options based on user input.
- The component handles loading states and error messages to improve user experience.

For more detailed examples and live usage, check out the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-multiselect--docs).

</details>

### Popout

The `Popout` component is designed to create a floating container that opens and closes when triggered, often used for menus, tooltips, or additional actions. It provides a button as a trigger and offers flexible positioning for the popout content, either to the left or right of the button.

<details>
  <summary>Popout Component Example</summary>

Explore the full documentation and examples in Storybook: [Popout Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-popout--docs).

#### Props:

- **`className`**: Additional class names for custom styling.
- **`position`**: Position of the popout relative to the trigger element. Possible values: `'left'` or `'right'`.
- **`action`**: The content inside the button that triggers the popout (could be text, an icon, or a React node).
- **`children`**: The content to display inside the popout when it's open.
- **`closeOnChildrenClick`**: A boolean flag that, when set to `true`, closes the popout when any child inside the popout is clicked.
- **`onOpenChange`**: Callback function triggered when isOpen state changes.

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
                action='Open Popout'
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

### Skeleton

The `Skeleton` component is a simple placeholder used to indicate the loading state of content, typically displayed as a gray box or shape that mimics the layout of the actual content. It helps improve user experience by showing an outline of the content while it's being loaded.

<details>
  <summary>Skeleton Component Example</summary>

Explore the full documentation and examples in Storybook: [Skeleton Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-skeleton--docs).

#### Props:

- **`className`**: Additional class names for custom styling. You can use this prop to apply different styles or layouts to match the skeleton to the shape and size of the content it represents.
- **`...props`**: This component also accepts all standard `HTMLDivElement` attributes, allowing you to customize it further (e.g., setting width, height, etc.).

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

In this example:

- The `Skeleton` component is used as a placeholder for a large block of content that is still loading.
- Inline styles define the skeleton's width and height, making it flexible for different layouts and components.

#### Customization:

You can apply additional CSS classes via the `className` prop to further style the skeleton. The skeleton automatically fills the space of its parent, making it suitable for a variety of content-loading placeholders such as text, images, and buttons.

#### Utility:

- The skeleton is commonly used in list views, card layouts, or media-heavy sections where content loading might take longer.
- It provides a smooth transition once the content is loaded, enhancing user experience.

For more detailed examples and interactive demonstrations, visit the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-skeleton--docs).

</details>

### Spinner

The `Spinner` component is a loading indicator represented as a rotating circle or animation. It visually communicates to users that a process is ongoing, enhancing the user experience during loading states or asynchronous operations.

<details>
  <summary>Spinner Component Example</summary>

Explore the full documentation and examples in Storybook: [Spinner Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-spinner--docs).

#### Props:

- **`className`**: Additional class names for custom styling. Use this prop to apply different styles or sizes to the spinner.
- **`...props`**: The spinner component accepts all standard `SVGSVGElement` attributes, allowing for further customization, such as setting dimensions or color.

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

In this example:

- The `Spinner` component is used as a loading indicator while content is being fetched.
- Additional properties like `width` and `height` can be set to control the spinner's size, while the `className` prop allows for custom styling.

#### Customization:

You can customize the appearance of the spinner by adding a `className` for your CSS styles. The spinner's fill colors and sizes can also be adjusted using inline styles or CSS classes.

#### Utility:

- The spinner is an essential component in any application that requires user feedback during loading processes, such as data fetching or processing tasks.
- It provides a clear visual cue, helping to reduce user frustration and confusion during wait times.

For more detailed examples and interactive demonstrations, visit the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-spinner--docs).

</details>

### Table

The `Table` component is a versatile data representation tool designed for displaying tabular data with support for sorting, loading states, and custom formatting. It enhances data visibility and interaction, making it ideal for applications requiring organized data presentation.

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

In this example:

- The `Table` component displays a simple dataset with sortable columns.
- The `formatter` prop formats the price column to display currency.
- The `loading` prop is set to `false`, so the actual data is shown instead of skeletons.

#### Features:

- **Sorting**: Clickable column headers enable sorting by ascending or descending order based on the column's data type.

- **Loading State**: The component displays skeleton loaders while data is being fetched, improving user experience during asynchronous operations.

- **Custom Formatting**: Each column can have a custom formatter function, allowing for dynamic presentation of data.

#### Utility:

The `Table` component is perfect for displaying structured data in applications like dashboards, reports, or data management systems. It allows users to sort and view data effectively, enhancing usability and engagement.

For more detailed examples and interactive demonstrations, visit the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-table--docs).

</details>

<p align="right">
  (<a href="#top">Back to top</a>)
</p>

<!-- STYLE VARIABLES CUSTOMIZATION -->

## Style Variables Customization

### Style Customization and Theming

The components in this UI Kit are designed to be highly customizable, allowing you to easily override the default style variables to match your project's design or create custom themes. All the style variables are defined in the `:root` and can be overridden in your CSS by redeclaring them.

#### Available CSS Variables:

Here is a list of all the CSS variables you can override to customize the look and feel of the components:

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

    - `--table-font-size`: Font size for table content.
    - `--table-header-background`: Background color for table headers.
    - `--table-header-background-hover`: Hover state for table headers.
    - `--table-border-color`: Border color for tables.

- **Skeleton:**
    - `--skeleton-background-animation`: Background gradient for content loading animation.

#### Example: Overriding Variables for Custom Themes

To customize the theme, simply override the default values in your stylesheet:

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

Contributions are what make the open-source community such an incredible resource for developers. Any contributions you make are greatly appreciated!

**To contribute:**

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

For more detailed contributing guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

### Releasing a new version

If your contribution is ready to be released after the pull request is merged into the `main` branch, follow these steps:

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

This project is distributed under the MIT License. See [LICENSE](LICENSE) for more information.

<p align="right">
  (<a href="#top">Back to top</a>)
</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Here are a few resources that helped inspire or were invaluable during the development of this project:

1. [GutHub Readme Template](https://github.com/miksrv/GitHub-Project-README-Template)
2. [React Documentation](https://react.dev/)
3. [Styled Components](https://styled-components.com/)
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
