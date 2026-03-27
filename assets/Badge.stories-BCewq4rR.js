import{j as e}from"./index-BNGFX5oi.js";import{B as a}from"./Table-DadTRiB0.js";import{i as m}from"./types-DHzuYu1v.js";import"./iframe-NGxwQjTZ.js";import"./index-B53Eu0ub.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Components/Badge",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"A compact label used to highlight status, categories, or metadata. Supports icons (named or custom React elements), three sizes, and an optional remove button for interactive tag-like use cases."}}},argTypes:{label:{control:"text",description:"Text label displayed inside the badge",table:{type:{summary:"string | number"}}},icon:{control:"select",options:Object.keys(m),description:"Named icon or a custom React element displayed alongside the label",table:{type:{summary:"IconTypes | React.ReactElement"}}},size:{control:"inline-radio",options:["small","medium","large"],description:"Controls the visual size of the badge",table:{defaultValue:{summary:"medium"},type:{summary:'"small" | "medium" | "large"'}}},onClickRemove:{control:!1,description:"Callback fired when the remove (×) button is clicked. Receives the label value as the argument. Renders a remove button when provided.",table:{type:{summary:"(key?: string | number) => void"}}},className:{control:"text",description:"Additional CSS class names for custom styling"},style:{control:"object",description:"Inline style object applied to the badge wrapper"}}},n={name:"Default",args:{label:"Badge",size:"medium"},parameters:{docs:{description:{story:"A basic badge with just a text label. Use the Controls panel to explore all props."}}}},o={name:"With Icon",args:{label:"Wind Speed",icon:"Wind",size:"medium"},parameters:{docs:{description:{story:"Badge with a named icon rendered to the left of the label."}}}},s={name:"With Remove Button",args:{label:"Removable",icon:"Tag",size:"medium",onClickRemove:t=>alert(`Removed: ${String(t)}`)},parameters:{docs:{description:{story:"When `onClickRemove` is provided a close (×) button appears. Clicking it fires the callback with the badge label as the argument — useful for tag-style inputs."}}}},i={name:"Sizes",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Small",icon:"Point",size:"small"}),e.jsx(a,{label:"Medium",icon:"Point",size:"medium"}),e.jsx(a,{label:"Large",icon:"Point",size:"large"})]}),parameters:{docs:{description:{story:"The three available sizes — `small`, `medium`, and `large` — displayed side by side."}}}},l={name:"All Variants",render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",alignItems:"center"},children:[e.jsx(a,{label:"Icon Badge",icon:"StarFilled",size:"medium"}),e.jsx(a,{label:"Removable",icon:"Tag",size:"medium",onClickRemove:()=>{}}),e.jsx(a,{label:"Emoji",icon:e.jsx("span",{role:"img","aria-label":"fire",children:"🔥"}),size:"medium"}),e.jsx(a,{label:"Custom Color",size:"medium",style:{backgroundColor:"#3b82f6",color:"#fff"}}),e.jsx(a,{label:"No Icon",size:"medium"}),e.jsx(a,{label:"Small + Icon",icon:"Bell",size:"small"}),e.jsx(a,{label:"Large + Remove",icon:"Close",size:"large",onClickRemove:()=>{}})]}),parameters:{docs:{description:{story:"An overview of the most common badge configurations: icon-only, removable, emoji icon, custom colour, no icon, and mixed sizes."}}}},r={name:"With Emoji Icon",render:()=>e.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Happy",icon:e.jsx("span",{role:"img","aria-label":"happy",children:"😊"}),size:"medium"}),e.jsx(a,{label:"Cool",icon:e.jsx("span",{role:"img","aria-label":"cool",children:"😎"}),size:"medium"}),e.jsx(a,{label:"Surprised",icon:e.jsx("span",{role:"img","aria-label":"surprised",children:"😲"}),size:"medium"}),e.jsx(a,{label:"Love",icon:e.jsx("span",{role:"img","aria-label":"love",children:"😍"}),size:"medium"})]}),parameters:{docs:{description:{story:"The `icon` prop accepts any `React.ReactElement`, making it easy to embed emoji spans or custom SVGs alongside the label."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    label: 'Badge',
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic badge with just a text label. Use the Controls panel to explore all props.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With Icon',
  args: {
    label: 'Wind Speed',
    icon: 'Wind',
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge with a named icon rendered to the left of the label.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'With Remove Button',
  args: {
    label: 'Removable',
    icon: 'Tag',
    size: 'medium',
    onClickRemove: (key: string | undefined) => alert(\`Removed: \${String(key)}\`)
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`onClickRemove\` is provided a close (×) button appears. Clicking it fires the callback with the badge label as the argument — useful for tag-style inputs.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
            <Badge label='Small' icon='Point' size='small' />
            <Badge label='Medium' icon='Point' size='medium' />
            <Badge label='Large' icon='Point' size='large' />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'The three available sizes — \`small\`, \`medium\`, and \`large\` — displayed side by side.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    alignItems: 'center'
  }}>
            <Badge label='Icon Badge' icon='StarFilled' size='medium' />
            <Badge label='Removable' icon='Tag' size='medium' onClickRemove={() => {}} />
            <Badge label='Emoji' icon={<span role='img' aria-label='fire'>
                        🔥
                    </span>} size='medium' />
            <Badge label='Custom Color' size='medium' style={{
      backgroundColor: '#3b82f6',
      color: '#fff'
    }} />
            <Badge label='No Icon' size='medium' />
            <Badge label='Small + Icon' icon='Bell' size='small' />
            <Badge label='Large + Remove' icon='Close' size='large' onClickRemove={() => {}} />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'An overview of the most common badge configurations: icon-only, removable, emoji icon, custom colour, no icon, and mixed sizes.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With Emoji Icon',
  render: () => <div style={{
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  }}>
            <Badge label='Happy' icon={<span role='img' aria-label='happy'>
                        😊
                    </span>} size='medium' />
            <Badge label='Cool' icon={<span role='img' aria-label='cool'>
                        😎
                    </span>} size='medium' />
            <Badge label='Surprised' icon={<span role='img' aria-label='surprised'>
                        😲
                    </span>} size='medium' />
            <Badge label='Love' icon={<span role='img' aria-label='love'>
                        😍
                    </span>} size='medium' />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'The \`icon\` prop accepts any \`React.ReactElement\`, making it easy to embed emoji spans or custom SVGs alongside the label.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const y=["Default","WithIcon","WithRemove","Sizes","AllVariants","WithEmojiIcon"];export{l as AllVariants,n as Default,i as Sizes,r as WithEmojiIcon,o as WithIcon,s as WithRemove,y as __namedExportsOrder,h as default};
