import{j as o}from"./index-Dp4qm-vq.js";import"./iframe-BsjYbfxr.js";import{T as t}from"./Table-SCBOCyvy.js";import"./index-BLJ8-H9c.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Components/Table",component:t,parameters:{docs:{description:{component:`
\`\`\`typescript
/**
 * Column properties for table component
 */
export interface ColumnProps<T> {
    /** Header content for the column */
    header: string | React.ReactNode
    /** Accessor key to map data for the column */
    accessor: keyof T
    /** Additional class names for custom styling */
    className?: string
    /** Whether the column is sortable */
    isSortable?: boolean
    /** Whether the column is hidden */
    hidden?: boolean
    /** Function to set background color based on the cell's value */
    background?: (value: T[keyof T], row: T) => string | undefined
    /** Formatter function to format the cell value */
    formatter?: (value: T[keyof T], row: T[], index: number) => React.ReactNode
}
\`\`\``}}}},r=[{header:"ID",accessor:"id",isSortable:!0,className:"id-column"},{header:"Name",accessor:"name",className:"name-column"},{header:"Age",accessor:"age",isSortable:!0,formatter:a=>o.jsxs("strong",{children:[a," years"]})},{header:"City",accessor:"city"}],s=[{id:1,name:"John Doe",age:28,city:"New York"},{id:2,name:"Jane Smith",age:34,city:"San Francisco"},{id:3,name:"Michael Johnson",age:45,city:"Los Angeles"},{id:4,name:"Emily Davis",age:23,city:"Chicago"}],c=a=>o.jsx(t,{...a}),e=c.bind({});e.args={data:s,columns:r,className:"custom-table",loading:!1,size:"medium",stickyHeader:!0,verticalBorder:!0,defaultSort:{key:"id",direction:"asc"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <Table {...args} />",...e.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,u as default};
