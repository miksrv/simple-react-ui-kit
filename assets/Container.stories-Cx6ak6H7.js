import{j as e}from"./index-BNGFX5oi.js";import"./iframe-NGxwQjTZ.js";import{a as n}from"./Table-DadTRiB0.js";import{C as t}from"./Container-HlEsX_2w.js";import{P as l}from"./Progress-WcxM7vEd.js";import"./index-B53Eu0ub.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/Container",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A card-style layout wrapper rendered as a `<section>` element. It composes a header area (title, custom header, action slot), a main content area (`children`), and an optional footer. All slots are optional — include only what you need."}}},argTypes:{title:{control:"text",description:"Heading text rendered in the header as an `<h2>` element"},children:{control:!1,description:"Main body content of the container"},action:{control:!1,description:"React node placed in the header action slot (right-aligned). Typically a button or link."},header:{control:!1,description:"Custom header node that replaces or supplements the default title. Rendered between the title and the action slot."},footer:{control:!1,description:"Footer content rendered below the main body, separated by a border"},className:{control:"text",description:"Additional CSS class names for custom styling"}}},o={args:{title:"Container Title"},render:d=>e.jsx(t,{...d,children:e.jsx("p",{children:"This is the main content area of the container. Add any React content here."})}),parameters:{docs:{description:{story:"A container with a title and simple text content. Use the Controls panel to change the title and explore other props."}}}},r={name:"With Action",render:()=>e.jsx(t,{title:"Latest Updates",action:e.jsx(n,{size:"small",mode:"outline",children:"See all"}),children:e.jsx("p",{children:"Content with an action button in the header."})}),parameters:{docs:{description:{story:'The `action` slot places a React node at the right edge of the header — ideal for "See all", "Edit", or settings buttons.'}}}},a={name:"With Custom Header",render:()=>e.jsx(t,{title:"Profile Completion",header:e.jsxs("div",{style:{fontSize:12,color:"#666",marginBottom:4},children:["Complete your profile to unlock all features",e.jsx(l,{value:60,height:4,color:"main"})]}),children:e.jsx("p",{children:"The custom header is rendered between the title and the action slot."})}),parameters:{docs:{description:{story:"Use the `header` prop to inject arbitrary content (e.g. a progress bar, subtitle, or status badge) into the header area alongside the title."}}}},i={name:"With Footer",render:()=>e.jsx(t,{title:"Invoice #1042",footer:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8},children:[e.jsx(n,{mode:"outline",size:"small",children:"Cancel"}),e.jsx(n,{size:"small",children:"Pay now"})]}),children:e.jsx("p",{children:"Invoice details and line items would go here."})}),parameters:{docs:{description:{story:"The `footer` slot renders below the body, separated by a line — great for action bars with confirm/cancel buttons."}}}},s={name:"Full Example",render:()=>e.jsx(t,{title:"User Registration",action:e.jsx(n,{size:"small",mode:"link",children:"Need help?"}),header:e.jsxs("div",{style:{fontSize:12,color:"#666"},children:["Fill in all required fields to create your account",e.jsx(l,{value:40,height:3,color:"main"})]}),footer:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:13,color:"#666"},children:"Step 1 of 3"}),e.jsx(n,{children:"Continue"})]}),style:{maxWidth:500},children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,padding:"8px 0"},children:e.jsx("p",{style:{margin:0},children:"Main form content goes here — inputs, selects, checkboxes, etc."})})}),parameters:{docs:{description:{story:"A fully-composed example using all slots: `title`, `action`, `header` (with progress bar), body content, and `footer` (with step navigation)."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Container Title'
  },
  render: args => <Container {...args}>
            <p>This is the main content area of the container. Add any React content here.</p>
        </Container>,
  parameters: {
    docs: {
      description: {
        story: 'A container with a title and simple text content. Use the Controls panel to change the title and explore other props.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With Action',
  render: () => <Container title='Latest Updates' action={<Button size='small' mode='outline'>
                    See all
                </Button>}>
            <p>Content with an action button in the header.</p>
        </Container>,
  parameters: {
    docs: {
      description: {
        story: 'The \`action\` slot places a React node at the right edge of the header — ideal for "See all", "Edit", or settings buttons.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'With Custom Header',
  render: () => <Container title='Profile Completion' header={<div style={{
    fontSize: 12,
    color: '#666',
    marginBottom: 4
  }}>
                    Complete your profile to unlock all features
                    <Progress value={60} height={4} color='main' />
                </div>}>
            <p>The custom header is rendered between the title and the action slot.</p>
        </Container>,
  parameters: {
    docs: {
      description: {
        story: 'Use the \`header\` prop to inject arbitrary content (e.g. a progress bar, subtitle, or status badge) into the header area alongside the title.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'With Footer',
  render: () => <Container title='Invoice #1042' footer={<div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 8
  }}>
                    <Button mode='outline' size='small'>
                        Cancel
                    </Button>
                    <Button size='small'>Pay now</Button>
                </div>}>
            <p>Invoice details and line items would go here.</p>
        </Container>,
  parameters: {
    docs: {
      description: {
        story: 'The \`footer\` slot renders below the body, separated by a line — great for action bars with confirm/cancel buttons.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Full Example',
  render: () => <Container title='User Registration' action={<Button size='small' mode='link'>
                    Need help?
                </Button>} header={<div style={{
    fontSize: 12,
    color: '#666'
  }}>
                    Fill in all required fields to create your account
                    <Progress value={40} height={3} color='main' />
                </div>} footer={<div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }}>
                    <span style={{
      fontSize: 13,
      color: '#666'
    }}>Step 1 of 3</span>
                    <Button>Continue</Button>
                </div>} style={{
    maxWidth: 500
  }}>
            <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: '8px 0'
    }}>
                <p style={{
        margin: 0
      }}>Main form content goes here — inputs, selects, checkboxes, etc.</p>
            </div>
        </Container>,
  parameters: {
    docs: {
      description: {
        story: 'A fully-composed example using all slots: \`title\`, \`action\`, \`header\` (with progress bar), body content, and \`footer\` (with step navigation).'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const x=["Default","WithAction","WithCustomHeader","WithFooter","FullExample"];export{o as Default,s as FullExample,r as WithAction,a as WithCustomHeader,i as WithFooter,x as __namedExportsOrder,g as default};
