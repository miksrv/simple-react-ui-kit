import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-BeWxJaLi.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{c as r,t as i}from"./src-ByWjnn-y.js";var a,o,s,c,l,u,d,f,p,m,h;e((()=>{t(),i(),a=n(),o={title:`Controls/Input`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"A styled text input that wraps the native `<input>` element with an optional label, error message, two visual modes (`primary` / `ghost`), and three sizes. All standard `HTMLInputElement` attributes (e.g. `type`, `placeholder`, `required`, `disabled`, `onChange`) are forwarded to the underlying element."}}},argTypes:{label:{control:`text`,description:`Label text rendered above the input field`},placeholder:{control:`text`,description:`Native placeholder attribute`},mode:{control:`inline-radio`,options:[`primary`,`ghost`],description:`Visual style of the input`,table:{defaultValue:{summary:`primary`},type:{summary:`"primary" | "ghost"`}}},size:{control:`inline-radio`,options:[`small`,`medium`,`large`],description:`Controls the height and font-size of the input`,table:{defaultValue:{summary:`medium`},type:{summary:`"small" | "medium" | "large"`}}},error:{control:`text`,description:`Error message displayed below the input. Also applies an error border style.`},required:{control:`boolean`,description:`Marks the input as required (native HTML attribute + visual indicator)`},disabled:{control:`boolean`,description:`Disables the input`},type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`,`search`],description:"Native `type` attribute of the underlying `<input>`"},className:{control:`text`,description:`Additional CSS class names for custom styling`},onChange:{control:!1,description:`Standard React change handler`}}},s={args:{label:`Full Name`,placeholder:`Enter your name`,size:`medium`,mode:`primary`},parameters:{docs:{description:{story:`Default input with a label. Use the Controls panel to explore all available props.`}}}},c={name:`With Label`,args:{label:`Email Address`,placeholder:`john@example.com`,type:`email`},parameters:{docs:{description:{story:`Input with a descriptive label above the field.`}}}},l={name:`With Error`,args:{label:`Email Address`,placeholder:`john@example.com`,type:`email`,error:`Please enter a valid email address`},parameters:{docs:{description:{story:"The `error` prop renders a validation message below the field and applies a red border style."}}}},u={args:{label:`Username`,placeholder:`Choose a username`,required:!0},parameters:{docs:{description:{story:`Required inputs display a visual indicator alongside the label.`}}}},d={args:{label:`Account ID`,value:`ACC-001-2024`,disabled:!0},parameters:{docs:{description:{story:`Disabled inputs are visually muted and cannot be interacted with.`}}}},f={name:`Sizes`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,maxWidth:400},children:[(0,a.jsx)(r,{label:`Small`,placeholder:`Small input`,size:`small`}),(0,a.jsx)(r,{label:`Medium`,placeholder:`Medium input`,size:`medium`}),(0,a.jsx)(r,{label:`Large`,placeholder:`Large input`,size:`large`})]}),parameters:{docs:{description:{story:"Three available sizes: `small`, `medium`, and `large` — stacked for comparison."}}}},p={name:`Ghost Mode`,args:{label:`Search`,placeholder:`Search anything...`,mode:`ghost`},parameters:{docs:{description:{story:"The `ghost` mode renders a minimal borderless input — useful for inline search fields or table filters."}}}},m={name:`Password Input`,args:{label:`Password`,placeholder:`••••••••`,type:`password`,required:!0},parameters:{docs:{description:{story:`A password-type input with required marking.`}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Full Name',
    placeholder: 'Enter your name',
    size: 'medium',
    mode: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default input with a label. Use the Controls panel to explore all available props.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With Label',
  args: {
    label: 'Email Address',
    placeholder: 'john@example.com',
    type: 'email'
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with a descriptive label above the field.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Error',
  args: {
    label: 'Email Address',
    placeholder: 'john@example.com',
    type: 'email',
    error: 'Please enter a valid email address'
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
    label: 'Username',
    placeholder: 'Choose a username',
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Required inputs display a visual indicator alongside the label.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Account ID',
    value: 'ACC-001-2024',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled inputs are visually muted and cannot be interacted with.'
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
            <Input label='Small' placeholder='Small input' size='small' />
            <Input label='Medium' placeholder='Medium input' size='medium' />
            <Input label='Large' placeholder='Large input' size='large' />
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
    label: 'Search',
    placeholder: 'Search anything...',
    mode: 'ghost'
  },
  parameters: {
    docs: {
      description: {
        story: 'The \`ghost\` mode renders a minimal borderless input — useful for inline search fields or table filters.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Password Input',
  args: {
    label: 'Password',
    placeholder: '••••••••',
    type: 'password',
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: 'A password-type input with required marking.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithLabel`,`WithError`,`Required`,`Disabled`,`Sizes`,`GhostMode`,`PasswordInput`]}))();export{s as Default,d as Disabled,p as GhostMode,m as PasswordInput,u as Required,f as Sizes,l as WithError,c as WithLabel,h as __namedExportsOrder,o as default};