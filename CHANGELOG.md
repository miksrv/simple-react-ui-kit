# simple-react-ui-kit

## 1.4.0

### Patch Changes

- Upgraded yarn version from `4.8.1` to `4.9.1`
- Upgraded yarn version from `4.8.1` to `4.9.1`

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
