<a id="top"></a>

<!-- PROJECT TITLE -->
Welcome to the **Simple React UI Kit** repository! This project is designed to provide a collection of reusable UI components for React-based applications. Whether you're building a simple app or a complex web project, this UI kit offers a solid foundation to speed up your development.

<div align="center">
  <h3>A versatile and lightweight UI kit for React developers</h3>
  <br />
  <a href="https://miksrv.github.io/simple-react-ui-kit/" target="_blank">StoryBook</a>
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

</div>

<!-- TABLE OF CONTENTS -->
### Table of Contents

- [About of Project](#about-of-project)
    - [Built With](#built-with)
- [Installation](#installation)
- [Usage Components](#usage)
    - [Button](#button-component)
    - [Container](#container-component)
    - [Dropdown](#dropdown-component)
    - [Icon](#icon-component)
    - [Popout](#popout-component)
    - [Skeleton](#skeleton-component)
    - [Spinner](#spinner-component)
    - [Table](#table-component)
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

### Button Component

The `Button` component is a versatile and customizable button element with multiple variants, sizes, and loading states. It can also act as a link when provided with a URL.

Check out the full documentation and examples in Storybook: [Button Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-button--docs).

#### Props:
- **`className`**: Additional class names for custom styling.
- **`link`**: If provided, the button acts as a link.
- **`noIndex`**: Prevents search engines from indexing the button when used as a link.
- **`stretched`**: If `true`, the button takes the full width of the container.
- **`loading`**: Shows a loading spinner instead of button content.
- **`size`**: Controls button size (`small`, `medium`).
- **`mode`**: Visual style of the button (`primary`, `secondary`, `outline`, `link`).
- **`variant`**: Variant for styling (`positive`, `negative`).
- **`icon`**: Displays an icon inside the button.
- **`children`**: React children to be displayed inside the button.
- **`label`**: Text content for the button.

#### Example Usage:

```tsx
import React from 'react';
import { Button } from 'simple-react-ui-kit';

const App = () => (
  <div>
    {/* Primary Button */}
    <Button mode="primary" onClick={() => alert('Primary Button Clicked!')}>
      Primary Button
    </Button>

    {/* Secondary Button with Icon */}
    <Button mode="secondary" icon="check" onClick={() => alert('Secondary Button Clicked!')}>
      Secondary Button
    </Button>

    {/* Button with Loading State */}
    <Button mode="primary" loading={true}>
      Loading...
    </Button>

    {/* Link Button */}
    <Button mode="link" link="https://example.com">
      Visit Example
    </Button>
  </div>
);

export default App;
```

In this example:
- The first button demonstrates a simple primary button with a click handler.
- The second button showcases a secondary button with an icon.
- The third button is in a loading state with a spinner.
- The fourth button acts as a link.

For more details and live examples, check out the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-button--docs).

### Container Component

The `Container` component is a flexible layout wrapper designed to organize and present content with optional headers, footers, and actions. It supports customizable class names and offers flexibility for displaying various sections such as a title, custom header, and footer.

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
import React from 'react';
import { Container } from 'simple-react-ui-kit';

const App = () => (
  <div>
    {/* Basic Container with Title */}
    <Container title="Basic Container">
      This is the main content inside the container.
    </Container>

    {/* Container with Custom Header and Footer */}
    <Container
      header={<div>Custom Header</div>}
      footer={<div>Footer Content</div>}
    >
      Content goes here...
    </Container>

    {/* Container with Action Button */}
    <Container
      title="Container with Action"
      action={<button onClick={() => alert('Action Clicked!')}>Action</button>}
    >
      This container has a button action in the header.
    </Container>

    {/* Custom Styled Container */}
    <Container className="custom-container-class">
      This container has custom styles applied.
    </Container>
  </div>
);

export default App;
```

In this example:
- The first container demonstrates a simple setup with a title and content.
- The second container includes a custom header and footer.
- The third container has an action button in the header.
- The fourth container shows how to apply custom styles via the `className` prop.

For more details and live examples, check out the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-container--docs).

### Dropdown Component

The `Dropdown` component provides a flexible, customizable dropdown menu for selecting options. It supports various features such as custom icons, images, placeholders, error messages, and a clearable state. It also handles clicks outside the dropdown to close it automatically.

Check out the full documentation and examples in Storybook: [Dropdown Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-dropdown--docs).

#### Props:
- **`className`**: Additional class names for custom styling.
- **`options`**: Array of dropdown options (with a `key`, `value`, and optional `icon` or `image`).
- **`required`**: Marks the dropdown as required.
- **`disabled`**: Disables the dropdown.
- **`clearable`**: Allows the dropdown to be cleared (reset to no selection).
- **`placeholder`**: Placeholder text shown when no option is selected.
- **`label`**: Label text for the dropdown.
- **`error`**: Error message shown for validation errors.
- **`value`**: Currently selected value (key) in the dropdown.
- **`onSelect`**: Callback function triggered when an option is selected.
- **`onOpen`**: Callback function triggered when the dropdown is opened.

#### Example Usage:

```tsx
import React, { useState } from 'react';
import { Dropdown, DropdownOption } from 'simple-react-ui-kit';

const options: DropdownOption<string>[] = [
  { key: 'option1', value: 'Option 1' },
  { key: 'option2', value: 'Option 2', icon: 'Check' },
  { key: 'option3', value: 'Option 3', disabled: true }
];

const App = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  return (
    <div>
      <Dropdown
        label="Choose an option"
        options={options}
        placeholder="Select an option"
        value={selectedOption}
        onSelect={(option) => setSelectedOption(option?.key)}
        clearable
      />
    </div>
  );
};

export default App;
```

In this example:
- The `Dropdown` is populated with three options, where one of the options is disabled.
- The selected option is stored in the `selectedOption` state.
- A clearable dropdown is demonstrated, allowing users to reset their selection.

For more detailed examples and live usage, check out the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-dropdown--docs).

### Icon Component

The `Icon` component serves as a flexible and reusable way to display various icons within your application. It allows for easy integration of SVG icons, enhancing the visual appeal and usability of your UI.

Explore the full documentation and examples in Storybook: [Icon Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-icon--docs).

#### Props:

- **`name`**: A required property that specifies the name of the icon to be displayed. It should correspond to one of the predefined icon types in your application.

- **`className`**: An optional property for adding additional class names to the icon for custom styling.

- **`...props`**: This spread operator allows you to pass any additional SVG properties (such as `onClick`, `style`, etc.) directly to the SVG element.

#### Example Usage:

```tsx
import React from 'react';
import { Icon } from 'simple-react-ui-kit';

const App = () => {
  return (
    <div>
      <h1>My Application</h1>
      <Icon name="Home" className="icon-home" />
      <Icon name="Settings" className="icon-settings" />
      <Icon name="User" className="icon-user" />
    </div>
  );
};

export default App;
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

### Popout Component

The `Popout` component is designed to create a floating container that opens and closes when triggered, often used for menus, tooltips, or additional actions. It provides a button as a trigger and offers flexible positioning for the popout content, either to the left or right of the button.

Explore the full documentation and examples in Storybook: [Popout Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-popout--docs).

#### Props:
- **`className`**: Additional class names for custom styling.
- **`position`**: Position of the popout relative to the trigger element. Possible values: `'left'` or `'right'`.
- **`action`**: The content inside the button that triggers the popout (could be text, an icon, or a React node).
- **`children`**: The content to display inside the popout when it's open.
- **`closeOnChildrenClick`**: A boolean flag that, when set to `true`, closes the popout when any child inside the popout is clicked.

#### Example Usage:

```tsx
import React, { useRef } from 'react';
import { Popout, PopoutHandleProps } from 'simple-react-ui-kit';

const App = () => {
  const popoutRef = useRef<PopoutHandleProps>(null);

  const handleClosePopout = () => {
    if (popoutRef.current) {
      popoutRef.current.close();
    }
  };

  return (
    <div>
      <Popout
        ref={popoutRef}
        position="right"
        action="Open Popout"
        closeOnChildrenClick={true}
      >
        <div>
          <p>Popout Content</p>
          <button onClick={handleClosePopout}>Close</button>
        </div>
      </Popout>
    </div>
  );
};

export default App;
```

In this example:
- The `Popout` component is positioned to the right of the trigger button.
- The `closeOnChildrenClick` prop is set to `true`, meaning the popout will close when any of its children are clicked.
- A reference to the popout is used to manually close it via the `close` function.

#### Imperative Handle:
The `Popout` component provides an imperative handle with a `close()` method, which allows programmatic control over closing the popout.

For more detailed examples and interactive demonstrations, visit the [Storybook Documentation](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-popout--docs).

### Skeleton Component

The `Skeleton` component is a simple placeholder used to indicate the loading state of content, typically displayed as a gray box or shape that mimics the layout of the actual content. It helps improve user experience by showing an outline of the content while it's being loaded.

Explore the full documentation and examples in Storybook: [Skeleton Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-skeleton--docs).

#### Props:
- **`className`**: Additional class names for custom styling. You can use this prop to apply different styles or layouts to match the skeleton to the shape and size of the content it represents.
- **`...props`**: This component also accepts all standard `HTMLDivElement` attributes, allowing you to customize it further (e.g., setting width, height, etc.).

#### Example Usage:

```tsx
import React from 'react';
import { Skeleton } from 'simple-react-ui-kit';

const App = () => {
  return (
    <div>
      <h1>Loading Content</h1>
      <Skeleton style={{ width: '100%', height: '200px' }} />
    </div>
  );
};

export default App;
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

### Spinner Component

The `Spinner` component is a loading indicator represented as a rotating circle or animation. It visually communicates to users that a process is ongoing, enhancing the user experience during loading states or asynchronous operations.

Explore the full documentation and examples in Storybook: [Spinner Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-spinner--docs).

#### Props:
- **`className`**: Additional class names for custom styling. Use this prop to apply different styles or sizes to the spinner.
- **`...props`**: The spinner component accepts all standard `SVGSVGElement` attributes, allowing for further customization, such as setting dimensions or color.

#### Example Usage:

```tsx
import React from 'react';
import { Spinner } from 'simple-react-ui-kit';

const App = () => {
  return (
    <div>
      <h1>Loading...</h1>
      <Spinner className="custom-spinner" width={50} height={50} />
    </div>
  );
};

export default App;
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

### Table Component

The `Table` component is a versatile data representation tool designed for displaying tabular data with support for sorting, loading states, and custom formatting. It enhances data visibility and interaction, making it ideal for applications requiring organized data presentation.

Explore the full documentation and examples in Storybook: [Table Component Storybook](https://miksrv.github.io/simple-react-ui-kit/?path=/docs/components-table--docs).

#### Props:

- **`data`**: An optional array of data objects to be displayed in the table. Each object corresponds to a row in the table.

- **`defaultSort`**: An optional configuration object for default sorting behavior. It defines the key and direction (ascending or descending) for initial sorting.

- **`className`**: Additional class names for custom styling, allowing you to integrate your CSS styles.

- **`height`**: Specifies the table height in pixels or allows auto height if set to `null`.

- **`columns`**: An array defining the column configurations, including header content, accessor keys, sortability, and custom formatters.

- **`loading`**: A boolean that indicates whether the table is in a loading state. When `true`, skeleton placeholders are displayed instead of data.

- **`stickyHeader`**: A boolean that, when set to `true`, keeps the table header fixed at the top during scrolling.

- **`verticalBorder`**: A boolean to control the visibility of vertical borders between columns for improved readability.

#### Example Usage:

```tsx
import React from 'react';
import { Table } from 'simple-react-ui-kit';

const App = () => {
  const data = [
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 200 },
  ];

  const columns = [
    { header: 'ID', accessor: 'id', isSortable: true },
    { header: 'Name', accessor: 'name', isSortable: true },
    { header: 'Price', accessor: 'price', isSortable: true, formatter: (value) => `$${value}` },
  ];

  return (
    <Table
      data={data}
      columns={columns}
      defaultSort={{ key: 'name', direction: 'asc' }}
      loading={false}
      stickyHeader
    />
  );
};

export default App;
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

<p align="right">
  (<a href="#top">Back to top</a>)
</p>

<!-- CONTRIBUTING -->
## Style Variables Customization

### Style Customization and Theming

The components in this UI Kit are designed to be highly customizable, allowing you to easily override the default style variables to match your project's design or create custom themes. All the style variables are defined in the `:root` and can be overridden in your CSS by redeclaring them.

#### Available CSS Variables:
Here is a list of all the CSS variables you can override to customize the look and feel of the components:

- **Primary Colors:**
    - `--color-green`: Default green color.
    - `--color-green-hover`: Hover state for green color.
    - `--color-green-active`: Active state for green color.
    - `--color-orange`: Default orange color.
    - `--color-orange-hover`: Hover state for orange color.
    - `--color-orange-active`: Active state for orange color.
    - `--color-red`: Default red color.
    - `--color-red-hover`: Hover state for red color.
    - `--color-red-active`: Active state for red color.
    - `--color-contrast`: Contrast color (typically used for text on colored backgrounds).

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
    - `--button-default-background`: Default background color for buttons.
    - `--button-default-color`: Default text color for buttons.
    - `--button-default-background-hover`: Hover background color for buttons.
    - `--button-default-background-active`: Active background color for buttons.
    - `--button-primary-background`: Background color for primary buttons.
    - `--button-primary-color`: Text color for primary buttons.
    - `--button-primary-background-hover`: Hover state for primary buttons.
    - `--button-primary-background-active`: Active state for primary buttons.
    - `--button-secondary-background`: Background color for secondary buttons.
    - `--button-secondary-color`: Text color for secondary buttons.
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
    /* Primary Colors */
    --color-green: #4bb34b;
    --color-green-hover: #48AC4A;
    --color-green-active: #45A64A;

    --color-orange: #F8A01C;
    --color-orange-hover: #EE9A1D;
    --color-orange-active: #E4941F;

    --color-red: #e64646;
    --color-red-hover: #DD4446;
    --color-red-active: #D44245;

    --color-contrast: #FFF;

    /* Text and Typography */
    --font-size: 14px;
    --font-size-small: 13px;
    --font-family: -apple-system, system-ui, 'Helvetica Neue', Roboto, sans-serif;
    --text-color-primary: rgba(0, 0, 0, 0.9);
    --text-color-secondary: #818c99;
    --text-color-secondary-hover: #939CA9;

    /* Layout and Containers */
    --body-background: #ebedf0;
    --border-radius: 4px;
    --container-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.12);
    --container-background-color: #fff;
    --container-error-background-color: #FFE9E9;
    --container-error-color: var(--color-red);
    --container-success-background-color: #E8F9E8;
    --container-success-color: var(--color-green);

    /* Input Fields and Dropdowns */
    --dropdown-background-color: #ffffff;
    --dropdown-background-color-hover: #f2f3f5;
    --input-background-color: #f2f3f5;
    --input-label-color: #6d7885;
    --input-border-color: #cbcccd;
    --input-border: 0.5px solid var(--input-border-color);

    /* Buttons */
    --button-font-weight: 500;
    --button-default-background: transparent;
    --button-default-color: #3770b1;
    --button-default-background-hover: #f7f8fa;
    --button-default-background-active: #f1f2f5;

    --button-primary-background: #2688eb;
    --button-primary-color: #ffffff;
    --button-primary-background-hover: #2483e4;
    --button-primary-background-active: #237edd;

    --button-secondary-background: rgba(235,242,250,.99);
    --button-secondary-background-hover: rgba(223,234,246,.99);
    --button-secondary-color: #3770b1;
    --button-secondary-color-hover: #356cac;
    --button-secondary-background-active: rgba(213,226,241,.99);
    --button-secondary-color-active: #3368a8;

    /* Popout */
    --popout-shadow: 0 0 2px rgba(0,0,0,.08), 0 4px 16px rgba(0,0,0,.08);

    /* Table */
    --table-font-size: var(--font-size-small);
    --table-header-background: #f2f3f5;
    --table-header-background-hover: rgba(255, 255, 255, 0.1);
    --table-border-color: var(--input-border-color);

    /* Skeleton */
    --skeleton-background-animation: linear-gradient( 90deg, transparent, rgba(0, 0, 0, 0.04), transparent );
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
