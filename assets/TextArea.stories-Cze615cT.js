import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-BeWxJaLi.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{n as r,t as i}from"./src-ByWjnn-y.js";var a,o,s,c,l,u,d,f,p,m,h;e((()=>{t(),i(),a=n(),o={title:`Controls/TextArea`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"A multi-line text area that wraps the native `<textarea>` element with an optional label, error message, two visual modes (`primary` / `ghost`), three sizes, and configurable resize behavior. All standard `HTMLTextAreaElement` attributes (e.g. `rows`, `placeholder`, `required`, `disabled`, `onChange`) are forwarded to the underlying element."}}},argTypes:{label:{control:`text`,description:`Label text rendered above the textarea field`},placeholder:{control:`text`,description:`Native placeholder attribute`},mode:{control:`inline-radio`,options:[`primary`,`ghost`],description:`Visual style of the textarea`,table:{defaultValue:{summary:`primary`},type:{summary:`"primary" | "ghost"`}}},size:{control:`inline-radio`,options:[`small`,`medium`,`large`],description:`Controls the minimum height and font-size of the textarea`,table:{defaultValue:{summary:`medium`},type:{summary:`"small" | "medium" | "large"`}}},error:{control:`text`,description:`Error message displayed below the textarea. Also applies an error border style.`},resize:{control:`inline-radio`,options:[`none`,`vertical`,`horizontal`,`both`],description:`Controls resize behavior of the textarea`,table:{defaultValue:{summary:`vertical`},type:{summary:`"none" | "vertical" | "horizontal" | "both"`}}},autoResize:{control:`boolean`,description:`When true, the textarea height grows automatically to fit its content. Disables the resize handle.`,table:{defaultValue:{summary:`false`}}},rows:{control:`number`,description:`Number of visible text rows`},required:{control:`boolean`,description:`Marks the textarea as required (native HTML attribute + visual indicator)`},disabled:{control:`boolean`,description:`Disables the textarea`},className:{control:`text`,description:`Additional CSS class names for custom styling`},onChange:{control:!1,description:`Standard React change handler`}}},s={args:{label:`Message`,placeholder:`Enter your message`,size:`medium`,mode:`primary`,rows:4},parameters:{docs:{description:{story:`Default textarea with a label. Use the Controls panel to explore all available props.`}}}},c={name:`With Label`,args:{label:`Bio`,placeholder:`Tell us about yourself...`,rows:3},parameters:{docs:{description:{story:`Textarea with a descriptive label above the field.`}}}},l={name:`With Error`,args:{label:`Comment`,placeholder:`Write your comment...`,error:`Comment must be at least 10 characters long`},parameters:{docs:{description:{story:"The `error` prop renders a validation message below the field and applies a red border style."}}}},u={args:{label:`Feedback`,placeholder:`Your feedback is required`,required:!0,rows:4},parameters:{docs:{description:{story:`Required textareas display a visual indicator alongside the label.`}}}},d={args:{label:`Notes`,value:`This textarea is read-only.`,disabled:!0,rows:3},parameters:{docs:{description:{story:`Disabled textareas are visually muted and cannot be interacted with.`}}}},f={name:`Sizes`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,maxWidth:400},children:[(0,a.jsx)(r,{label:`Small`,placeholder:`Small textarea`,size:`small`,rows:2}),(0,a.jsx)(r,{label:`Medium`,placeholder:`Medium textarea`,size:`medium`,rows:3}),(0,a.jsx)(r,{label:`Large`,placeholder:`Large textarea`,size:`large`,rows:4})]}),parameters:{docs:{description:{story:"Three available sizes: `small`, `medium`, and `large` — stacked for comparison."}}}},p={name:`Ghost Mode`,args:{label:`Notes`,placeholder:`Type something...`,mode:`ghost`,rows:3},parameters:{docs:{description:{story:"The `ghost` mode renders a minimal borderless textarea — useful for inline editing or comment fields."}}}},m={name:`Auto Resize`,args:{label:`Auto-growing textarea`,placeholder:`Type to see the textarea grow...`,autoResize:!0,rows:2},parameters:{docs:{description:{story:"When `autoResize` is enabled, the textarea expands vertically as the user types. The resize handle is hidden automatically."}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Message',
    placeholder: 'Enter your message',
    size: 'medium',
    mode: 'primary',
    rows: 4
  },
  parameters: {
    docs: {
      description: {
        story: 'Default textarea with a label. Use the Controls panel to explore all available props.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With Label',
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    rows: 3
  },
  parameters: {
    docs: {
      description: {
        story: 'Textarea with a descriptive label above the field.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Error',
  args: {
    label: 'Comment',
    placeholder: 'Write your comment...',
    error: 'Comment must be at least 10 characters long'
  },
  parameters: {
    docs: {
      description: {
        story: 'The \`error\` prop renders a validation message below the field and applies a red border style.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Feedback',
    placeholder: 'Your feedback is required',
    required: true,
    rows: 4
  },
  parameters: {
    docs: {
      description: {
        story: 'Required textareas display a visual indicator alongside the label.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notes',
    value: 'This textarea is read-only.',
    disabled: true,
    rows: 3
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled textareas are visually muted and cannot be interacted with.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 400
  }}>
            <TextArea label='Small' placeholder='Small textarea' size='small' rows={2} />
            <TextArea label='Medium' placeholder='Medium textarea' size='medium' rows={3} />
            <TextArea label='Large' placeholder='Large textarea' size='large' rows={4} />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Three available sizes: \`small\`, \`medium\`, and \`large\` — stacked for comparison.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Ghost Mode',
  args: {
    label: 'Notes',
    placeholder: 'Type something...',
    mode: 'ghost',
    rows: 3
  },
  parameters: {
    docs: {
      description: {
        story: 'The \`ghost\` mode renders a minimal borderless textarea — useful for inline editing or comment fields.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Auto Resize',
  args: {
    label: 'Auto-growing textarea',
    placeholder: 'Type to see the textarea grow...',
    autoResize: true,
    rows: 2
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`autoResize\` is enabled, the textarea expands vertically as the user types. The resize handle is hidden automatically.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithLabel`,`WithError`,`Required`,`Disabled`,`Sizes`,`GhostMode`,`AutoResize`]}))();export{m as AutoResize,s as Default,d as Disabled,p as GhostMode,u as Required,f as Sizes,l as WithError,c as WithLabel,h as __namedExportsOrder,o as default};