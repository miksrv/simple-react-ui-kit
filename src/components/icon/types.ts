import React from 'react'

import { TooltipProp } from '../tooltip'

/**
 * Icon component properties
 */
export interface IconProps extends React.SVGProps<SVGSVGElement> {
    /** The name of the icon to be displayed */
    name: IconTypes
    /** Additional class names for custom styling */
    className?: string
    /** Tooltip shown on hover and keyboard focus: the text, or `{ content, placement, delay, ... }`.
     *  An icon with a tooltip becomes focusable and is exposed to assistive technologies
     *  as an image labelled with the tooltip text (both can be overridden via props). */
    tooltip?: TooltipProp
}

export const iconNames = {
    AddressSign: 'AddressSign',
    Award: 'Award',
    ArrowUp: 'ArrowUp',
    ArrowDown: 'ArrowDown',
    BarChart: 'BarChart',
    Calendar: 'Calendar',
    Camera: 'Camera',
    Bookmark: 'Bookmark',
    CheckCircle: 'CheckCircle',
    CheckboxChecked: 'CheckboxChecked',
    CheckboxIndeterminate: 'CheckboxIndeterminate',
    CheckboxUnchecked: 'CheckboxUnchecked',
    Clip: 'Clip',
    Close: 'Close',
    Cloud: 'Cloud',
    Chart: 'Chart',
    Comment: 'Comment',
    Compass: 'Compass',
    Download: 'Download',
    DoubleUp: 'DoubleUp',
    EditLocation: 'EditLocation',
    Lightning: 'Lightning',
    Exit: 'Exit',
    External: 'External',
    Eye: 'Eye',
    Feed: 'Feed',
    FullscreenIn: 'FullscreenIn',
    FullscreenOut: 'FullscreenOut',
    HeartEmpty: 'HeartEmpty',
    HeartFilled: 'HeartFilled',
    Layers: 'Layers',
    Link: 'Link',
    Lock: 'Lock',
    KeyboardUp: 'KeyboardUp',
    KeyboardDown: 'KeyboardDown',
    KeyboardLeft: 'KeyboardLeft',
    KeyboardRight: 'KeyboardRight',
    Map: 'Map',
    Menu: 'Menu',
    Moon: 'Moon',
    Bell: 'Bell',
    Pencil: 'Pencil',
    PinDrop: 'PinDrop',
    PlusCircle: 'PlusCircle',
    QuestionCircle: 'QuestionCircle',
    Point: 'Point',
    Position: 'Position',
    Pressure: 'Pressure',
    Photo: 'Photo',
    RadioButtonChecked: 'RadioButtonChecked',
    RadioButtonUnchecked: 'RadioButtonUnchecked',
    ReportError: 'ReportError',
    Rotate: 'Rotate',
    Ruler: 'Ruler',
    Search: 'Search',
    Settings: 'Settings',
    StarEmpty: 'StarEmpty',
    StarFilled: 'StarFilled',
    SolarPower: 'SolarPower',
    Sun: 'Sun',
    Tag: 'Tag',
    Telegram: 'Telegram',
    Thermometer: 'Thermometer',
    Time: 'Time',
    Tune: 'Tune',
    User: 'User',
    Users: 'Users',
    VerticalDots: 'VerticalDots',
    Water: 'Water',
    WaterDrop: 'WaterDrop',
    Wind: 'Wind'
} as const

export type IconTypes = keyof typeof iconNames
