import{j as e}from"./index-BNGFX5oi.js";import"./iframe-NGxwQjTZ.js";import{i as p}from"./types-DHzuYu1v.js";import{a as n}from"./Table-DadTRiB0.js";import"./index-B53Eu0ub.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Components/Button",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A versatile button component that supports four visual modes, three sizes, positive/negative variants, icons, a loading spinner, and an optional link wrapper. Use the `link` prop to render the button inside an `<a>` tag without changing its appearance."}}},argTypes:{children:{control:"text",description:"Button label content (takes precedence over `label` when both are provided)"},label:{control:"text",description:"Alternative text label (use when children is not a plain string)"},mode:{control:"select",options:["primary","secondary","outline","link"],description:"Visual style of the button",table:{defaultValue:{summary:"primary"},type:{summary:'"primary" | "secondary" | "outline" | "link"'}}},size:{control:"inline-radio",options:["small","medium","large"],description:"Size of the button",table:{defaultValue:{summary:"medium"},type:{summary:'"small" | "medium" | "large"'}}},variant:{control:"select",options:[void 0,"positive","negative"],description:"Applies a semantic colour overlay — green for positive, red for negative",table:{type:{summary:'"positive" | "negative"'}}},icon:{control:"select",options:Object.keys(p),description:"Named icon rendered inside the button (replaces spinner when `loading` is false)",table:{type:{summary:"IconTypes"}}},loading:{control:"boolean",description:"Replaces the button content with a spinner and prevents interaction",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disables the button",table:{defaultValue:{summary:"false"}}},stretched:{control:"boolean",description:"Expands the button to fill 100% of its container width",table:{defaultValue:{summary:"false"}}},link:{control:"text",description:"When provided, wraps the button in an `<a>` tag pointing to this URL"},noIndex:{control:"boolean",description:'Adds `rel="noindex nofollow"` to the link wrapper (effective only with `link`)'},onClick:{control:!1,description:"Standard button click handler"}}},t={args:{children:"Click me",mode:"primary",size:"medium"},parameters:{docs:{description:{story:"Default interactive button. Use the Controls panel to explore all available props."}}}},a={name:"Modes",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(n,{mode:"primary",children:"Primary"}),e.jsx(n,{mode:"secondary",children:"Secondary"}),e.jsx(n,{mode:"outline",children:"Outline"}),e.jsx(n,{mode:"link",children:"Link"})]}),parameters:{docs:{description:{story:"All four `mode` options shown side by side."}}}},o={name:"Sizes",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(n,{size:"small",children:"Small"}),e.jsx(n,{size:"medium",children:"Medium"}),e.jsx(n,{size:"large",children:"Large"})]}),parameters:{docs:{description:{story:"The three available sizes: `small`, `medium`, and `large`."}}}},r={name:"With Icon",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(n,{icon:"Map",children:"With Map Icon"}),e.jsx(n,{icon:"Settings",children:"Settings"}),e.jsx(n,{icon:"Bell",mode:"secondary",children:"Notifications"}),e.jsx(n,{icon:"Download",mode:"outline",children:"Download"}),e.jsx(n,{icon:"Settings","aria-label":"Settings"})]}),parameters:{docs:{description:{story:"Buttons with icons. When no text is provided the button renders as a compact icon-only square."}}}},i={name:"Loading State",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(n,{loading:!0,children:"Primary Loading"}),e.jsx(n,{loading:!0,mode:"secondary",children:"Secondary Loading"}),e.jsx(n,{loading:!0,mode:"outline",children:"Outline Loading"})]}),parameters:{docs:{description:{story:"When `loading` is `true` the button content is replaced with a spinner and the button becomes non-interactive."}}}},s={name:"Positive / Negative Variants",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(n,{variant:"positive",children:"Confirm"}),e.jsx(n,{variant:"negative",children:"Delete"}),e.jsx(n,{mode:"outline",variant:"positive",children:"Outline Positive"}),e.jsx(n,{mode:"outline",variant:"negative",children:"Outline Negative"})]}),parameters:{docs:{description:{story:"The `variant` prop overlays a semantic colour — green (`positive`) for confirmatory actions and red (`negative`) for destructive ones."}}}},d={name:"As Link",args:{children:"Open GitHub",link:"https://github.com/miksrv/simple-react-ui-kit",mode:"primary",icon:"External"},parameters:{docs:{description:{story:"When the `link` prop is set the button is wrapped in an `<a>` tag. The visual appearance is identical to a regular button."}}}},l={name:"Stretched (Full Width)",render:()=>e.jsx("div",{style:{maxWidth:"400px",width:"100%"},children:e.jsx(n,{stretched:!0,children:"Full Width Button"})}),parameters:{docs:{description:{story:"With `stretched` the button expands to 100% of its parent container width."}}}},c={name:"Disabled",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(n,{disabled:!0,children:"Disabled Primary"}),e.jsx(n,{disabled:!0,mode:"secondary",children:"Disabled Secondary"}),e.jsx(n,{disabled:!0,mode:"outline",children:"Disabled Outline"})]}),parameters:{docs:{description:{story:"Disabled buttons are visually muted and do not respond to clicks."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    mode: 'primary',
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default interactive button. Use the Controls panel to explore all available props.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Modes',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
            <Button mode='primary'>Primary</Button>
            <Button mode='secondary'>Secondary</Button>
            <Button mode='outline'>Outline</Button>
            <Button mode='link'>Link</Button>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'All four \`mode\` options shown side by side.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
            <Button size='small'>Small</Button>
            <Button size='medium'>Medium</Button>
            <Button size='large'>Large</Button>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'The three available sizes: \`small\`, \`medium\`, and \`large\`.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With Icon',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
            <Button icon='Map'>With Map Icon</Button>
            <Button icon='Settings'>Settings</Button>
            <Button icon='Bell' mode='secondary'>
                Notifications
            </Button>
            <Button icon='Download' mode='outline'>
                Download
            </Button>
            {/* Icon-only button (no text) */}
            <Button icon='Settings' aria-label='Settings' />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Buttons with icons. When no text is provided the button renders as a compact icon-only square.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Loading State',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
            <Button loading>Primary Loading</Button>
            <Button loading mode='secondary'>
                Secondary Loading
            </Button>
            <Button loading mode='outline'>
                Outline Loading
            </Button>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'When \`loading\` is \`true\` the button content is replaced with a spinner and the button becomes non-interactive.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Positive / Negative Variants',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
            <Button variant='positive'>Confirm</Button>
            <Button variant='negative'>Delete</Button>
            <Button mode='outline' variant='positive'>
                Outline Positive
            </Button>
            <Button mode='outline' variant='negative'>
                Outline Negative
            </Button>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'The \`variant\` prop overlays a semantic colour — green (\`positive\`) for confirmatory actions and red (\`negative\`) for destructive ones.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'As Link',
  args: {
    children: 'Open GitHub',
    link: 'https://github.com/miksrv/simple-react-ui-kit',
    mode: 'primary',
    icon: 'External'
  },
  parameters: {
    docs: {
      description: {
        story: 'When the \`link\` prop is set the button is wrapped in an \`<a>\` tag. The visual appearance is identical to a regular button.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Stretched (Full Width)',
  render: () => <div style={{
    maxWidth: '400px',
    width: '100%'
  }}>
            <Button stretched>Full Width Button</Button>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'With \`stretched\` the button expands to 100% of its parent container width.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
            <Button disabled>Disabled Primary</Button>
            <Button disabled mode='secondary'>
                Disabled Secondary
            </Button>
            <Button disabled mode='outline'>
                Disabled Outline
            </Button>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons are visually muted and do not respond to clicks.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const b=["Default","Modes","Sizes","WithIcon","LoadingState","Variants","AsLink","Stretched","Disabled"];export{d as AsLink,t as Default,c as Disabled,i as LoadingState,a as Modes,o as Sizes,l as Stretched,s as Variants,r as WithIcon,b as __namedExportsOrder,x as default};
