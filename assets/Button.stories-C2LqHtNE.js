import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-BeWxJaLi.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{g as r,t as i,y as a}from"./src-ChBdo3qK.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{t(),i(),o=n(),s={title:`Components/Button`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"A versatile button component that supports four visual modes, three sizes, positive/negative variants, icons, a loading spinner, and an optional link wrapper. Use the `link` prop to render the button inside an `<a>` tag without changing its appearance."}}},argTypes:{children:{control:`text`,description:"Button label content (takes precedence over `label` when both are provided)"},label:{control:`text`,description:`Alternative text label (use when children is not a plain string)`},mode:{control:`select`,options:[`primary`,`secondary`,`outline`,`link`],description:`Visual style of the button`,table:{defaultValue:{summary:`primary`},type:{summary:`"primary" | "secondary" | "outline" | "link"`}}},size:{control:`inline-radio`,options:[`small`,`medium`,`large`],description:`Size of the button`,table:{defaultValue:{summary:`medium`},type:{summary:`"small" | "medium" | "large"`}}},variant:{control:`select`,options:[void 0,`positive`,`negative`],description:`Applies a semantic colour overlay — green for positive, red for negative`,table:{type:{summary:`"positive" | "negative"`}}},icon:{control:`select`,options:Object.keys(a),description:"Named icon rendered inside the button (replaces spinner when `loading` is false)",table:{type:{summary:`IconTypes`}}},loading:{control:`boolean`,description:`Replaces the button content with a spinner and prevents interaction`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disables the button`,table:{defaultValue:{summary:`false`}}},stretched:{control:`boolean`,description:`Expands the button to fill 100% of its container width`,table:{defaultValue:{summary:`false`}}},link:{control:`text`,description:"When provided, wraps the button in an `<a>` tag pointing to this URL"},noIndex:{control:`boolean`,description:'Adds `rel="noindex nofollow"` to the link wrapper (effective only with `link`)'},onClick:{control:!1,description:`Standard button click handler`}}},c={args:{children:`Click me`,mode:`primary`,size:`medium`},parameters:{docs:{description:{story:`Default interactive button. Use the Controls panel to explore all available props.`}}}},l={name:`Modes`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,alignItems:`center`},children:[(0,o.jsx)(r,{mode:`primary`,children:`Primary`}),(0,o.jsx)(r,{mode:`secondary`,children:`Secondary`}),(0,o.jsx)(r,{mode:`outline`,children:`Outline`}),(0,o.jsx)(r,{mode:`link`,children:`Link`})]}),parameters:{docs:{description:{story:"All four `mode` options shown side by side."}}}},u={name:`Sizes`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,alignItems:`center`,flexWrap:`wrap`},children:[(0,o.jsx)(r,{size:`small`,children:`Small`}),(0,o.jsx)(r,{size:`medium`,children:`Medium`}),(0,o.jsx)(r,{size:`large`,children:`Large`})]}),parameters:{docs:{description:{story:"The three available sizes: `small`, `medium`, and `large`."}}}},d={name:`With Icon`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,alignItems:`center`},children:[(0,o.jsx)(r,{icon:`Map`,children:`With Map Icon`}),(0,o.jsx)(r,{icon:`Settings`,children:`Settings`}),(0,o.jsx)(r,{icon:`Bell`,mode:`secondary`,children:`Notifications`}),(0,o.jsx)(r,{icon:`Download`,mode:`outline`,children:`Download`}),(0,o.jsx)(r,{icon:`Settings`,"aria-label":`Settings`})]}),parameters:{docs:{description:{story:`Buttons with icons. When no text is provided the button renders as a compact icon-only square.`}}}},f={name:`Loading State`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,alignItems:`center`},children:[(0,o.jsx)(r,{loading:!0,children:`Primary Loading`}),(0,o.jsx)(r,{loading:!0,mode:`secondary`,children:`Secondary Loading`}),(0,o.jsx)(r,{loading:!0,mode:`outline`,children:`Outline Loading`})]}),parameters:{docs:{description:{story:"When `loading` is `true` the button content is replaced with a spinner and the button becomes non-interactive."}}}},p={name:`Positive / Negative Variants`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,alignItems:`center`},children:[(0,o.jsx)(r,{variant:`positive`,children:`Confirm`}),(0,o.jsx)(r,{variant:`negative`,children:`Delete`}),(0,o.jsx)(r,{mode:`outline`,variant:`positive`,children:`Outline Positive`}),(0,o.jsx)(r,{mode:`outline`,variant:`negative`,children:`Outline Negative`})]}),parameters:{docs:{description:{story:"The `variant` prop overlays a semantic colour — green (`positive`) for confirmatory actions and red (`negative`) for destructive ones."}}}},m={name:`As Link`,args:{children:`Open GitHub`,link:`https://github.com/miksrv/simple-react-ui-kit`,mode:`primary`,icon:`External`},parameters:{docs:{description:{story:"When the `link` prop is set the button is wrapped in an `<a>` tag. The visual appearance is identical to a regular button."}}}},h={name:`Stretched (Full Width)`,render:()=>(0,o.jsx)(`div`,{style:{maxWidth:`400px`,width:`100%`},children:(0,o.jsx)(r,{stretched:!0,children:`Full Width Button`})}),parameters:{docs:{description:{story:"With `stretched` the button expands to 100% of its parent container width."}}}},g={name:`Disabled`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,alignItems:`center`},children:[(0,o.jsx)(r,{disabled:!0,children:`Disabled Primary`}),(0,o.jsx)(r,{disabled:!0,mode:`secondary`,children:`Disabled Secondary`}),(0,o.jsx)(r,{disabled:!0,mode:`outline`,children:`Disabled Outline`})]}),parameters:{docs:{description:{story:`Disabled buttons are visually muted and do not respond to clicks.`}}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Modes`,`Sizes`,`WithIcon`,`LoadingState`,`Variants`,`AsLink`,`Stretched`,`Disabled`]}))();export{m as AsLink,c as Default,g as Disabled,f as LoadingState,l as Modes,u as Sizes,h as Stretched,p as Variants,d as WithIcon,_ as __namedExportsOrder,s as default};