import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-BeWxJaLi.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{t as r,v as i,y as a}from"./src-CA9VU0UJ.js";var o,s,c,l,u,d,f,p,m;e((()=>{t(),r(),o=n(),s={title:`Components/Badge`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`A compact label used to highlight status, categories, or metadata. Supports icons (named or custom React elements), three sizes, and an optional remove button for interactive tag-like use cases.`}}},argTypes:{label:{control:`text`,description:`Text label displayed inside the badge`,table:{type:{summary:`string | number`}}},icon:{control:`select`,options:Object.keys(a),description:`Named icon or a custom React element displayed alongside the label`,table:{type:{summary:`IconTypes | React.ReactElement`}}},size:{control:`inline-radio`,options:[`small`,`medium`,`large`],description:`Controls the visual size of the badge`,table:{defaultValue:{summary:`medium`},type:{summary:`"small" | "medium" | "large"`}}},onClickRemove:{control:!1,description:`Callback fired when the remove (×) button is clicked. Receives the label value as the argument. Renders a remove button when provided.`,table:{type:{summary:`(key?: string | number) => void`}}},className:{control:`text`,description:`Additional CSS class names for custom styling`},style:{control:`object`,description:`Inline style object applied to the badge wrapper`}}},c={name:`Default`,args:{label:`Badge`,size:`medium`},parameters:{docs:{description:{story:`A basic badge with just a text label. Use the Controls panel to explore all props.`}}}},l={name:`With Icon`,args:{label:`Wind Speed`,icon:`Wind`,size:`medium`},parameters:{docs:{description:{story:`Badge with a named icon rendered to the left of the label.`}}}},u={name:`With Remove Button`,args:{label:`Removable`,icon:`Tag`,size:`medium`,onClickRemove:e=>alert(`Removed: ${String(e)}`)},parameters:{docs:{description:{story:"When `onClickRemove` is provided a close (×) button appears. Clicking it fires the callback with the badge label as the argument — useful for tag-style inputs."}}}},d={name:`Sizes`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,flexWrap:`wrap`},children:[(0,o.jsx)(i,{label:`Small`,icon:`Point`,size:`small`}),(0,o.jsx)(i,{label:`Medium`,icon:`Point`,size:`medium`}),(0,o.jsx)(i,{label:`Large`,icon:`Point`,size:`large`})]}),parameters:{docs:{description:{story:"The three available sizes — `small`, `medium`, and `large` — displayed side by side."}}}},f={name:`All Variants`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`10px`,alignItems:`center`},children:[(0,o.jsx)(i,{label:`Icon Badge`,icon:`StarFilled`,size:`medium`}),(0,o.jsx)(i,{label:`Removable`,icon:`Tag`,size:`medium`,onClickRemove:()=>{}}),(0,o.jsx)(i,{label:`Emoji`,icon:(0,o.jsx)(`span`,{role:`img`,"aria-label":`fire`,children:`🔥`}),size:`medium`}),(0,o.jsx)(i,{label:`Custom Color`,size:`medium`,style:{backgroundColor:`#3b82f6`,color:`#fff`}}),(0,o.jsx)(i,{label:`No Icon`,size:`medium`}),(0,o.jsx)(i,{label:`Small + Icon`,icon:`Bell`,size:`small`}),(0,o.jsx)(i,{label:`Large + Remove`,icon:`Close`,size:`large`,onClickRemove:()=>{}})]}),parameters:{docs:{description:{story:`An overview of the most common badge configurations: icon-only, removable, emoji icon, custom colour, no icon, and mixed sizes.`}}}},p={name:`With Emoji Icon`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,flexWrap:`wrap`},children:[(0,o.jsx)(i,{label:`Happy`,icon:(0,o.jsx)(`span`,{role:`img`,"aria-label":`happy`,children:`😊`}),size:`medium`}),(0,o.jsx)(i,{label:`Cool`,icon:(0,o.jsx)(`span`,{role:`img`,"aria-label":`cool`,children:`😎`}),size:`medium`}),(0,o.jsx)(i,{label:`Surprised`,icon:(0,o.jsx)(`span`,{role:`img`,"aria-label":`surprised`,children:`😲`}),size:`medium`}),(0,o.jsx)(i,{label:`Love`,icon:(0,o.jsx)(`span`,{role:`img`,"aria-label":`love`,children:`😍`}),size:`medium`})]}),parameters:{docs:{description:{story:"The `icon` prop accepts any `React.ReactElement`, making it easy to embed emoji spans or custom SVGs alongside the label."}}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithIcon`,`WithRemove`,`Sizes`,`AllVariants`,`WithEmojiIcon`]}))();export{f as AllVariants,c as Default,d as Sizes,p as WithEmojiIcon,l as WithIcon,u as WithRemove,m as __namedExportsOrder,s as default};