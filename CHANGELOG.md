# CHANGELOG

## 1.5.13

### Patch Changes

- Upgraded UI Libraries
- Fixed UI Table key error (Encountered two children with the same key)
- Refactoring UI Unit tests, improved SonarQube properties, and Jest config
- Added emoji for Dropdown, updated Storybook story for Dropdown component
- Refactoring SonarQube issues

## 1.5.12

### Patch Changes

- Upgraded UI Libraries
- Upgraded Storybook from `9` to `10`
- Implemented Progress UI Component
- Added stories for Progress, added new property, fixed all stories
- Updated storybook sidemenu structure

## 1.5.11

### Patch Changes

- Added support for custom icons in the Badge component
- Expanded examples in Storybook for the Badge component

## 1.5.10

### Patch Changes

- Added test for `stretched` prop for button
- Fixed Prettier issues
- Updated node version from `20` to `22` in the CI/CD
- Upgraded storybook from `8.6.14` to `9.1.10`
- Upgraded UI Libraries

## 1.5.9

### Patch Changes

- Updated Dependencies

## 1.5.8

### Patch Changes

- Fixed props styles for Button as Link

## 1.5.7

### Patch Changes

- Refactoring Dialog component

## 1.5.6

### Patch Changes

- Updated Storybook libraries
- Fixed `disabled` prop for `Button` component with `link` variant

## 1.5.5

### Patch Changes

- Added default cursor for disabled `Popout` component

## 1.5.4

### Patch Changes

- Updated UI Libraries
- Added new props `disabled` for `Popout` component

## 1.5.3

### Patch Changes

- Fixed Dialog Header height

## 1.5.2

### Patch Changes

- Updated Storybook libraries
- Changed `Popout` component prop `action` to `trigger`
- Removed UI Button component from `Popout` component
- Updated Readme
- Updated UI Popout tests and stories
- Updated UI Kit Libraries

## 1.5.1

### Patch Changes

- Fixed the height for Input UI Component

## 1.5.0

### Minor Changes

- Added type `ElementSizeType` for the size prop in all UI components
- Added common `size` prop for the `Badge` component
- Replaced `size` prop to the common type for the `Button` component
- Updated `Badge` UI test cases
- Added `showOverlay` with true default value for the `Dialog` component
- Added test cases for the prop `showOverlay` for `Dialog` component
- When `showBackLink` in `Dialog` is false (default), header has alignment to the left
- Default medium size prop for the `Dropdown` component
- Fixed margin for the left icon in the `Dropdown` component
- Added common `size` prop for the `Input` component
- Added new test cases for the `Input` component, covering the `size` prop
- Added borders for the `Message` component
- Added common `size` prop for the `Table` component
- Added new test cases for the `Table` component, covering the `size` prop
- Added new CSS variables for type `ElementSizeType` props `--size-small`, `--size-medium`, `--size-large`
- Changed default CSS variable color for `--color-main-hover`, `--input-border-color`, `--table-header-background`
- Added more common default fonts for `--font-family` CSS variable
- Added new CSS variable `--table-row-box-shadow`
- Removed CSS variable `--table-font-size`
- Improved all stories for UI components
- Updated README.md
- Fixed code style for ESLint and Prettier

## 1.4.1

### Patch Changes

- Calls onCloseDialog when Escape key is pressed and dialog is open

## 1.4.0

### Minor Changes

- Implemented new Dialog UI Component
- Implemented new internal Overlay Component
- Added new variables for CSS Vars (--modal-background, --overlay-background)
- Created Story for UI Dialog
- Updated README
- Upgraded yarn version from `4.8.1` to `4.9.1`
- Upgraded UI Libraries
- Upgraded Storybook Libraries

## 1.3.8

### Patch Changes

- Fixed Popout component useRef
- Changed yarn version from 4.5.0 to 4.8.1
- Updated UI Libraries

## 1.3.7

### Patch Changes

- Migrated from React 18 to React 19
- Updated Storybook libraries
- Updated UI dependencies
- Added new property `closeOnSelect` for the `MultiSelect` component
- Improved story for the `MultiSelect` component

## 1.3.6

### Patch Changes

- Added new property `hidden` for the column of the `Table` component
- Added new UI test for testing the column property `hidden` in the `Table` component
- Updated Storybook libraries
- Updated UI dependencies
- Added column interface description for the Storybook `Table` component
- Added `build` directory to `.gitignore`, removed directory from the repository

## 1.3.5

### Patch Changes

- Added `maxHeight` parameter for the table component
- Added `noDataCaption` parameter and display caption when there is no data
- New tests for the table component
- Removed unused dependency `embla-carousel-react`

## 1.3.4

### Patch Changes

- Updated UI Libraries
- Fixed some SonarQube issues

## 1.3.3

### Patch Changes

- Added Keyboard 'Escape' event for Dropdown and MultiSelect UI Components

## 1.3.2

### Patch Changes

- Added CSS var '--dropdown-badge-background-color' for badges in the MultiSelect
- Fixed Button positive and negative hover text color
- Updated Readme

## 1.3.1

### Patch Changes

- Added additional UI tests for Dropdown, Input and MultiSelect
- Added className props for Input UI component
- Fixed SVG arrow icon color for MultiSelect and Dropdown
- Fixed Multiselect and Dropdown backspace keyboard event

## 1.3.0

### Minor Changes

- Dependent libraries updated
- Changed background callback for Table 'string' => 'string | undefined'
- Updated Storybook
- Improved Dropdown UI component styles
- Added Dropdown new properties - 'searchable', 'loading', 'notFoundCaption'
- Added Dropdown new callback - 'onSearch'
- Changed Dropdown value type 'React.ReactNode | string | number' => 'string'
- Implemented UI tests for new Dropdown component functionality
- Added new CSS Variable: '--input-border-focus-color'
- Added MultiSelect UI Component story for Storybook
- Implemented new MultiSelect UI Component, added Unit Tests
- Improved some Unit Test for Input Component
- Optimize Dropdown Component styles
- Improved Badge UI Component
- Added additional Unit Test for Badge Component
- Updated Readme file

## 1.2.4

### Patch Changes

- Added new UI Message component
- Implemented Unit tests for Message component
- Implemented stories for Message component
- Fixed Container component margin top for header
- Fixed Checkbox component styles
- Added CSS vars colors: --color-(green|orange|red|main)-background
- Updated Readme (Message component, Style Variables Customization)
- Updated UI libraries (typescript, globals)

## 1.2.3

### Patch Changes

- Changed Badge prop: key and label from 'string' to 'string | number'
- Added README Checkbox Component description
- Fixed Button component noText style (if label and children empty)
- Implemented new UI component - Checkbox
- Added new Popout component prop -> onOpenChange callback
- Added new Unit test for Popout callback: onOpenChange
- Added CSS --color-main variables
- Changed CSS variables order in the global.css and README.md
- Added story for Checkbox UI component
- Added Button only icon variant for storybook

## 1.2.2

### Patch Changes

- Fixed UI Tables styles
- Fixed UI Dropdown SVG icon style
- Added CONTRIBUTING.md and SECURITY.md

## 1.2.1

### Patch Changes

- Added new UI component - Badge
- Added story for Badge component
- Implemented UI tests for Badge component
- Fixed background styles for Popout component
- Updated README.md

## 1.2.0

### Minor Changes

- Added new UI component - Container
- Added Story for UI Components
- Implemented UI Unit Tests
- Updated UI dev packages
- Added --table-font-size CSS variable
- Added --skeleton-background-animation CSS variable
- Updated README.md - Container component + Style Variables Customization
- Implemented new UI Input Component, Unit Tests
- Added story for Input Component
- Updated Readme and Security
- Updated Storybook libraries

## 1.1.1

### Patch Changes

- Added new story for Spinner component
- Export PopoutHandleProps type for UI Popout Component
- Fixed styles for UI Spinner component
- Removed "Place" Icon
- Renamed some icons
- Added icons: Cloud, Compass, Lightning, Pressure, SolarPower, Thermometer, Water, WaterDrop, Wind

## 1.1.0

### Minor Changes

- Added new UI Components: Popout, Dropdown, Skeleton, Table
- Added new icons: BarChart, Chart, Download, ArrowUp, ArrowDown
- Added story for UI Components: Dropdown, Popout, Skeleton, Table
- Improved Button UI Component styles
- Improved icons story for storybook
- Improved global styles variables
- Dependent libraries updated
- Renamed "GPS" icons to "Position"
- Renamed "Address" icons to "AddressSign"
- Renamed icons "Dark" -> "Moon", "Light" -> "Sun"
- Removed icons Down, Up, LeftLarge

## 1.0.3

### Patch Changes

- Rebuild UI architecture
- Fixed Button component styles
- Added story for Button component
- Rename concat class names functions (cn)

## 1.0.2

### Patch Changes

- Testing new version

## 1.0.1

### Patch Changes

- First version of Simple React UI Library
