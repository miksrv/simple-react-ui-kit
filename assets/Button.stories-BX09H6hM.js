import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./types-B1w1ms3C.js";import{n as a,t as o}from"./Button-B_2uaDfv.js";var s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{t(),a(),r(),s=n(),c={title:`Components/Button`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:"A versatile button component that supports four visual modes, three sizes, positive/negative variants, icons, a loading spinner, and an optional link wrapper. Use the `link` prop to render the button inside an `<a>` tag without changing its appearance."}}},argTypes:{children:{control:`text`,description:"Button label content (takes precedence over `label` when both are provided)"},label:{control:`text`,description:`Alternative text label (use when children is not a plain string)`},mode:{control:`select`,options:[`primary`,`secondary`,`outline`,`link`],description:`Visual style of the button`,table:{defaultValue:{summary:`primary`},type:{summary:`"primary" | "secondary" | "outline" | "link"`}}},size:{control:`inline-radio`,options:[`small`,`medium`,`large`],description:`Size of the button`,table:{defaultValue:{summary:`medium`},type:{summary:`"small" | "medium" | "large"`}}},variant:{control:`select`,options:[void 0,`positive`,`negative`],description:`Applies a semantic colour overlay — green for positive, red for negative`,table:{type:{summary:`"positive" | "negative"`}}},icon:{control:`select`,options:Object.keys(i),description:"Named icon rendered inside the button (replaces spinner when `loading` is false)",table:{type:{summary:`IconTypes`}}},loading:{control:`boolean`,description:`Replaces the button content with a spinner and prevents interaction`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disables the button`,table:{defaultValue:{summary:`false`}}},stretched:{control:`boolean`,description:`Expands the button to fill 100% of its container width`,table:{defaultValue:{summary:`false`}}},link:{control:`text`,description:"When provided, wraps the button in an `<a>` tag pointing to this URL"},noIndex:{control:`boolean`,description:'Adds `rel="noindex nofollow"` to the link wrapper (effective only with `link`)'},tooltip:{control:`text`,description:"Tooltip shown on hover and keyboard focus. Nothing is added to the DOM until it is shown. For an icon-only button without `aria-label` the tooltip text also becomes the accessible name.",table:{type:{summary:`string | { content: string; placement?: "top" | "bottom" | "left" | "right"; delay?: number; disabled?: boolean; className?: string }`}}},onClick:{control:!1,description:`Standard button click handler`}}},l={args:{children:`Click me`,mode:`primary`,size:`medium`},parameters:{docs:{description:{story:`Default interactive button. Use the Controls panel to explore all available props.`}}}},u={name:`Modes`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,alignItems:`center`},children:[(0,s.jsx)(o,{mode:`primary`,children:`Primary`}),(0,s.jsx)(o,{mode:`secondary`,children:`Secondary`}),(0,s.jsx)(o,{mode:`outline`,children:`Outline`}),(0,s.jsx)(o,{mode:`link`,children:`Link`})]}),parameters:{docs:{description:{story:"All four `mode` options shown side by side."}}}},d={name:`Sizes`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,alignItems:`center`,flexWrap:`wrap`},children:[(0,s.jsx)(o,{size:`small`,children:`Small`}),(0,s.jsx)(o,{size:`medium`,children:`Medium`}),(0,s.jsx)(o,{size:`large`,children:`Large`})]}),parameters:{docs:{description:{story:"The three available sizes: `small`, `medium`, and `large`."}}}},f={name:`With Icon`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,alignItems:`center`},children:[(0,s.jsx)(o,{icon:`Map`,children:`With Map Icon`}),(0,s.jsx)(o,{icon:`Settings`,children:`Settings`}),(0,s.jsx)(o,{icon:`Bell`,mode:`secondary`,children:`Notifications`}),(0,s.jsx)(o,{icon:`Download`,mode:`outline`,children:`Download`}),(0,s.jsx)(o,{icon:`Settings`,"aria-label":`Settings`})]}),parameters:{docs:{description:{story:`Buttons with icons. When no text is provided the button renders as a compact icon-only square.`}}}},p={name:`Loading State`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,alignItems:`center`},children:[(0,s.jsx)(o,{loading:!0,children:`Primary Loading`}),(0,s.jsx)(o,{loading:!0,mode:`secondary`,children:`Secondary Loading`}),(0,s.jsx)(o,{loading:!0,mode:`outline`,children:`Outline Loading`})]}),parameters:{docs:{description:{story:"When `loading` is `true` the button content is replaced with a spinner and the button becomes non-interactive."}}}},m={name:`Positive / Negative Variants`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,alignItems:`center`},children:[(0,s.jsx)(o,{variant:`positive`,children:`Confirm`}),(0,s.jsx)(o,{variant:`negative`,children:`Delete`}),(0,s.jsx)(o,{mode:`outline`,variant:`positive`,children:`Outline Positive`}),(0,s.jsx)(o,{mode:`outline`,variant:`negative`,children:`Outline Negative`})]}),parameters:{docs:{description:{story:"The `variant` prop overlays a semantic colour — green (`positive`) for confirmatory actions and red (`negative`) for destructive ones."}}}},h={name:`As Link`,args:{children:`Open GitHub`,link:`https://github.com/miksrv/simple-react-ui-kit`,mode:`primary`,icon:`External`},parameters:{docs:{description:{story:"When the `link` prop is set the button is wrapped in an `<a>` tag. The visual appearance is identical to a regular button."}}}},g={name:`Stretched (Full Width)`,render:()=>(0,s.jsx)(`div`,{style:{maxWidth:`400px`,width:`100%`},children:(0,s.jsx)(o,{stretched:!0,children:`Full Width Button`})}),parameters:{docs:{description:{story:"With `stretched` the button expands to 100% of its parent container width."}}}},_={name:`Disabled`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,alignItems:`center`},children:[(0,s.jsx)(o,{disabled:!0,children:`Disabled Primary`}),(0,s.jsx)(o,{disabled:!0,mode:`secondary`,children:`Disabled Secondary`}),(0,s.jsx)(o,{disabled:!0,mode:`outline`,children:`Disabled Outline`})]}),parameters:{docs:{description:{story:`Disabled buttons are visually muted and do not respond to clicks.`}}}},v={name:`With Tooltip`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,flexWrap:`wrap`,alignItems:`center`,padding:`40px 0`},children:[(0,s.jsx)(o,{icon:`Pencil`,mode:`secondary`,tooltip:`Edit`}),(0,s.jsx)(o,{icon:`Download`,mode:`secondary`,tooltip:`Download`}),(0,s.jsx)(o,{icon:`Settings`,mode:`outline`,tooltip:{content:`Settings`,placement:`bottom`}}),(0,s.jsx)(o,{icon:`Close`,variant:`negative`,tooltip:{content:`Delete permanently`,placement:`right`}}),(0,s.jsx)(o,{disabled:!0,tooltip:`You do not have permission to publish`,children:`Publish`})]}),parameters:{docs:{description:{story:"Use the `tooltip` prop to label icon-only buttons. Pass a string, or an object to set `placement`, `delay`, etc. See the Tooltip component for details."}}}},y=[`Default`,`Modes`,`Sizes`,`WithIcon`,`LoadingState`,`Variants`,`AsLink`,`Stretched`,`Disabled`,`WithTooltip`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'With Tooltip',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '40px 0'
  }}>
            <Button icon='Pencil' mode='secondary' tooltip='Edit' />
            <Button icon='Download' mode='secondary' tooltip='Download' />
            <Button icon='Settings' mode='outline' tooltip={{
      content: 'Settings',
      placement: 'bottom'
    }} />
            <Button icon='Close' variant='negative' tooltip={{
      content: 'Delete permanently',
      placement: 'right'
    }} />
            <Button disabled tooltip='You do not have permission to publish'>
                Publish
            </Button>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use the \`tooltip\` prop to label icon-only buttons. Pass a string, or an object to set \`placement\`, \`delay\`, etc. See the Tooltip component for details.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{h as AsLink,l as Default,_ as Disabled,p as LoadingState,u as Modes,d as Sizes,g as Stretched,m as Variants,f as WithIcon,v as WithTooltip,y as __namedExportsOrder,c as default};