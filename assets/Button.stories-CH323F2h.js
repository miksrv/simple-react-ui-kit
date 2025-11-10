import{j as r}from"./index-Dp4qm-vq.js";import"./iframe-BsjYbfxr.js";import{i as u}from"./types-DHzuYu1v.js";import{a as s}from"./Table-SCBOCyvy.js";import"./index-BLJ8-H9c.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Controls/Button",component:s,argTypes:{mode:{control:{type:"select"},options:["primary","secondary","outline","link"],table:{defaultValue:{summary:"primary"},type:{summary:'"primary", "secondary", "outline", "link"'}}},size:{control:{type:"inline-radio"},options:["small","medium","large"],table:{type:{summary:'"small", "medium", "large"'}}},variant:{control:{type:"select"},options:["","positive","negative"],table:{type:{summary:'"positive", "negative", null'}}},icon:{control:{type:"select"},options:Object.keys(u).map(t=>t)},loading:{description:"Show loading spinner instead of button content",control:{type:"boolean"}},disabled:{description:"Disabled button content",control:{type:"boolean"}},stretched:{description:"Whether the button takes up the full width of the container",control:{type:"boolean"}},label:{control:{type:"text"}},link:{control:{type:"text"},description:"Link to navigate to when the button is clicked"}}},c=t=>r.jsx(s,{...t,children:"Click me"}),a=({buttons:t})=>r.jsx("div",{style:{display:"flex",gap:"10px"},children:t.map((m,d)=>r.jsx(s,{...m,children:m.content},d))}),o=c.bind({});o.args={mode:"primary",size:"medium"};const e=a.bind({});e.args={buttons:[{mode:"primary",size:"medium",content:"Primary Medium"},{mode:"primary",size:"medium",content:"With icon",icon:"Map"},{mode:"primary",size:"medium",icon:"Settings"},{mode:"primary",size:"medium",label:"Loading...",loading:!0},{mode:"primary",size:"medium",content:"Disabled",disabled:!0},{mode:"primary",size:"medium",content:"Positive",variant:"positive"},{mode:"primary",size:"medium",content:"Negative",variant:"negative"}]};e.argTypes={buttons:{table:{disable:!0}}};const n=a.bind({});n.args={buttons:[{mode:"secondary",size:"medium",content:"Primary Medium"},{mode:"secondary",size:"medium",content:"With icon",icon:"Map"},{mode:"secondary",size:"medium",icon:"Settings"},{mode:"secondary",size:"medium",label:"Loading...",loading:!0},{mode:"secondary",size:"medium",content:"Disabled",disabled:!0},{mode:"secondary",size:"medium",content:"Positive",variant:"positive"},{mode:"secondary",size:"medium",content:"Negative",variant:"negative"}]};const i=a.bind({});i.args={buttons:[{mode:"outline",size:"medium",content:"Primary Medium"},{mode:"outline",size:"medium",content:"With icon",icon:"Map"},{mode:"outline",size:"medium",icon:"Settings"},{mode:"outline",size:"medium",label:"Loading...",loading:!0},{mode:"outline",size:"medium",content:"Disabled",disabled:!0},{mode:"outline",size:"medium",content:"Positive",variant:"positive"},{mode:"outline",size:"medium",content:"Negative",variant:"negative"}]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"(args: ButtonProps) => <Button {...args}>Click me</Button>",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  buttons
}: ButtonGroupProps) => <div style={{
  display: 'flex',
  gap: '10px'
}}>
        {buttons.map((buttonProps, index) => <Button key={index} {...buttonProps}>
                {buttonProps.content}
            </Button>)}
    </div>`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  buttons
}: ButtonGroupProps) => <div style={{
  display: 'flex',
  gap: '10px'
}}>
        {buttons.map((buttonProps, index) => <Button key={index} {...buttonProps}>
                {buttonProps.content}
            </Button>)}
    </div>`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  buttons
}: ButtonGroupProps) => <div style={{
  display: 'flex',
  gap: '10px'
}}>
        {buttons.map((buttonProps, index) => <Button key={index} {...buttonProps}>
                {buttonProps.content}
            </Button>)}
    </div>`,...i.parameters?.docs?.source}}};const z=["Sandbox","Primary","Secondary","Outline"];export{i as Outline,e as Primary,o as Sandbox,n as Secondary,z as __namedExportsOrder,x as default};
