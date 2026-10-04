import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./types-B1w1ms3C.js";import{n as a,t as o}from"./Badge-CZFDbGTW.js";var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{t(),a(),r(),s=n(),c={title:`Components/Badge`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`A compact label used to highlight status, categories, or metadata. Supports icons (named or custom React elements), three sizes, and an optional remove button for interactive tag-like use cases.`}}},argTypes:{label:{control:`text`,description:`Text label displayed inside the badge`,table:{type:{summary:`string | number`}}},icon:{control:`select`,options:Object.keys(i),description:`Named icon or a custom React element displayed alongside the label`,table:{type:{summary:`IconTypes | React.ReactElement`}}},size:{control:`inline-radio`,options:[`small`,`medium`,`large`],description:`Controls the visual size of the badge`,table:{defaultValue:{summary:`medium`},type:{summary:`"small" | "medium" | "large"`}}},onClickRemove:{control:!1,description:`Callback fired when the remove (×) button is clicked. Receives the label value as the argument. Renders a remove button when provided.`,table:{type:{summary:`(key?: string | number) => void`}}},tooltip:{control:`text`,description:"Tooltip shown on hover. Pass `tabIndex={0}` to also show it on keyboard focus.",table:{type:{summary:`string | { content: string; placement?: "top" | "bottom" | "left" | "right"; delay?: number; disabled?: boolean; className?: string }`}}},className:{control:`text`,description:`Additional CSS class names for custom styling`},style:{control:`object`,description:`Inline style object applied to the badge wrapper`}}},l={name:`Default`,args:{label:`Badge`,size:`medium`},parameters:{docs:{description:{story:`A basic badge with just a text label. Use the Controls panel to explore all props.`}}}},u={name:`With Icon`,args:{label:`Wind Speed`,icon:`Wind`,size:`medium`},parameters:{docs:{description:{story:`Badge with a named icon rendered to the left of the label.`}}}},d={name:`With Remove Button`,args:{label:`Removable`,icon:`Tag`,size:`medium`,onClickRemove:e=>alert(`Removed: ${String(e)}`)},parameters:{docs:{description:{story:"When `onClickRemove` is provided a close (×) button appears. Clicking it fires the callback with the badge label as the argument — useful for tag-style inputs."}}}},f={name:`Sizes`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,flexWrap:`wrap`},children:[(0,s.jsx)(o,{label:`Small`,icon:`Point`,size:`small`}),(0,s.jsx)(o,{label:`Medium`,icon:`Point`,size:`medium`}),(0,s.jsx)(o,{label:`Large`,icon:`Point`,size:`large`})]}),parameters:{docs:{description:{story:"The three available sizes — `small`, `medium`, and `large` — displayed side by side."}}}},p={name:`All Variants`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`10px`,alignItems:`center`},children:[(0,s.jsx)(o,{label:`Icon Badge`,icon:`StarFilled`,size:`medium`}),(0,s.jsx)(o,{label:`Removable`,icon:`Tag`,size:`medium`,onClickRemove:()=>{}}),(0,s.jsx)(o,{label:`Emoji`,icon:(0,s.jsx)(`span`,{role:`img`,"aria-label":`fire`,children:`🔥`}),size:`medium`}),(0,s.jsx)(o,{label:`Custom Color`,size:`medium`,style:{backgroundColor:`#3b82f6`,color:`#fff`}}),(0,s.jsx)(o,{label:`No Icon`,size:`medium`}),(0,s.jsx)(o,{label:`Small + Icon`,icon:`Bell`,size:`small`}),(0,s.jsx)(o,{label:`Large + Remove`,icon:`Close`,size:`large`,onClickRemove:()=>{}})]}),parameters:{docs:{description:{story:`An overview of the most common badge configurations: icon-only, removable, emoji icon, custom colour, no icon, and mixed sizes.`}}}},m={name:`With Emoji Icon`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,s.jsx)(o,{label:`Happy`,icon:(0,s.jsx)(`span`,{role:`img`,"aria-label":`happy`,children:`😊`}),size:`medium`}),(0,s.jsx)(o,{label:`Cool`,icon:(0,s.jsx)(`span`,{role:`img`,"aria-label":`cool`,children:`😎`}),size:`medium`}),(0,s.jsx)(o,{label:`Surprised`,icon:(0,s.jsx)(`span`,{role:`img`,"aria-label":`surprised`,children:`😲`}),size:`medium`}),(0,s.jsx)(o,{label:`Love`,icon:(0,s.jsx)(`span`,{role:`img`,"aria-label":`love`,children:`😍`}),size:`medium`})]}),parameters:{docs:{description:{story:"The `icon` prop accepts any `React.ReactElement`, making it easy to embed emoji spans or custom SVGs alongside the label."}}}},h={name:`With Tooltip`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,padding:`40px 0`},children:[(0,s.jsx)(o,{label:`Beta`,tooltip:`This feature is still in beta and may change`}),(0,s.jsx)(o,{label:`3`,icon:`Bell`,tabIndex:0,tooltip:{content:`3 unread notifications`,placement:`bottom`}})]}),parameters:{docs:{description:{story:`Explain short or abbreviated badges with a tooltip. The second badge is focusable, so the tooltip also appears on keyboard focus.`}}}},g=[`Default`,`WithIcon`,`WithRemove`,`Sizes`,`AllVariants`,`WithEmojiIcon`,`WithTooltip`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Tooltip',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '40px 0'
  }}>
            <Badge label='Beta' tooltip='This feature is still in beta and may change' />
            <Badge label='3' icon='Bell' tabIndex={0} tooltip={{
      content: '3 unread notifications',
      placement: 'bottom'
    }} />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Explain short or abbreviated badges with a tooltip. The second badge is focusable, so the tooltip also appears on keyboard focus.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{p as AllVariants,l as Default,f as Sizes,m as WithEmojiIcon,u as WithIcon,d as WithRemove,h as WithTooltip,g as __namedExportsOrder,c as default};