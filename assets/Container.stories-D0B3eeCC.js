import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-BeWxJaLi.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{g as r,o as i,p as a,t as o}from"./src-ChBdo3qK.js";var s,c,l,u,d,f,p,m;e((()=>{t(),o(),s=n(),c={title:`Components/Container`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:"A card-style layout wrapper rendered as a `<section>` element. It composes a header area (title, custom header, action slot), a main content area (`children`), and an optional footer. All slots are optional — include only what you need."}}},argTypes:{title:{control:`text`,description:"Heading text rendered in the header as an `<h2>` element"},children:{control:!1,description:`Main body content of the container`},action:{control:!1,description:`React node placed in the header action slot (right-aligned). Typically a button or link.`},header:{control:!1,description:`Custom header node that replaces or supplements the default title. Rendered between the title and the action slot.`},footer:{control:!1,description:`Footer content rendered below the main body, separated by a border`},className:{control:`text`,description:`Additional CSS class names for custom styling`}}},l={args:{title:`Container Title`},render:e=>(0,s.jsx)(a,{...e,children:(0,s.jsx)(`p`,{children:`This is the main content area of the container. Add any React content here.`})}),parameters:{docs:{description:{story:`A container with a title and simple text content. Use the Controls panel to change the title and explore other props.`}}}},u={name:`With Action`,render:()=>(0,s.jsx)(a,{title:`Latest Updates`,action:(0,s.jsx)(r,{size:`small`,mode:`outline`,children:`See all`}),children:(0,s.jsx)(`p`,{children:`Content with an action button in the header.`})}),parameters:{docs:{description:{story:'The `action` slot places a React node at the right edge of the header — ideal for "See all", "Edit", or settings buttons.'}}}},d={name:`With Custom Header`,render:()=>(0,s.jsx)(a,{title:`Profile Completion`,header:(0,s.jsxs)(`div`,{style:{fontSize:12,color:`#666`,marginBottom:4},children:[`Complete your profile to unlock all features`,(0,s.jsx)(i,{value:60,height:4,color:`main`})]}),children:(0,s.jsx)(`p`,{children:`The custom header is rendered between the title and the action slot.`})}),parameters:{docs:{description:{story:"Use the `header` prop to inject arbitrary content (e.g. a progress bar, subtitle, or status badge) into the header area alongside the title."}}}},f={name:`With Footer`,render:()=>(0,s.jsx)(a,{title:`Invoice #1042`,footer:(0,s.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:8},children:[(0,s.jsx)(r,{mode:`outline`,size:`small`,children:`Cancel`}),(0,s.jsx)(r,{size:`small`,children:`Pay now`})]}),children:(0,s.jsx)(`p`,{children:`Invoice details and line items would go here.`})}),parameters:{docs:{description:{story:"The `footer` slot renders below the body, separated by a line — great for action bars with confirm/cancel buttons."}}}},p={name:`Full Example`,render:()=>(0,s.jsx)(a,{title:`User Registration`,action:(0,s.jsx)(r,{size:`small`,mode:`link`,children:`Need help?`}),header:(0,s.jsxs)(`div`,{style:{fontSize:12,color:`#666`},children:[`Fill in all required fields to create your account`,(0,s.jsx)(i,{value:40,height:3,color:`main`})]}),footer:(0,s.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,s.jsx)(`span`,{style:{fontSize:13,color:`#666`},children:`Step 1 of 3`}),(0,s.jsx)(r,{children:`Continue`})]}),style:{maxWidth:500},children:(0,s.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,padding:`8px 0`},children:(0,s.jsx)(`p`,{style:{margin:0},children:`Main form content goes here — inputs, selects, checkboxes, etc.`})})}),parameters:{docs:{description:{story:"A fully-composed example using all slots: `title`, `action`, `header` (with progress bar), body content, and `footer` (with step navigation)."}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithAction`,`WithCustomHeader`,`WithFooter`,`FullExample`]}))();export{l as Default,p as FullExample,u as WithAction,d as WithCustomHeader,f as WithFooter,m as __namedExportsOrder,c as default};