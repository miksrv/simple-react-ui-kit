import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-BeWxJaLi.js";import{t as r}from"./jsx-runtime-BRDTPpDF.js";import{c as i,t as a}from"./src-ChBdo3qK.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y;t((()=>{o=e(n(),1),a(),s=r(),c={title:`Controls/Input`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"A styled text input that wraps the native `<input>` element with an optional label, error message, two visual modes (`primary` / `ghost`), and three sizes. All standard `HTMLInputElement` attributes (e.g. `type`, `placeholder`, `required`, `disabled`, `onChange`) are forwarded to the underlying element."}}},argTypes:{label:{control:`text`,description:`Label text rendered above the input field`},placeholder:{control:`text`,description:`Native placeholder attribute`},mode:{control:`inline-radio`,options:[`primary`,`ghost`],description:`Visual style of the input`,table:{defaultValue:{summary:`primary`},type:{summary:`"primary" | "ghost"`}}},size:{control:`inline-radio`,options:[`small`,`medium`,`large`],description:`Controls the height and font-size of the input`,table:{defaultValue:{summary:`medium`},type:{summary:`"small" | "medium" | "large"`}}},error:{control:`text`,description:`Error message displayed below the input. Also applies an error border style.`},required:{control:`boolean`,description:`Marks the input as required (native HTML attribute + visual indicator)`},disabled:{control:`boolean`,description:`Disables the input`},clearable:{control:`boolean`,description:`Shows a clear button when the input has a value`},type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`,`search`],description:"Native `type` attribute of the underlying `<input>`"},className:{control:`text`,description:`Additional CSS class names for custom styling`},onChange:{control:!1,description:`Standard React change handler`}}},l={args:{label:`Full Name`,placeholder:`Enter your name`,size:`medium`,mode:`primary`},parameters:{docs:{description:{story:`Default input with a label. Use the Controls panel to explore all available props.`}}}},u={name:`With Label`,args:{label:`Email Address`,placeholder:`john@example.com`,type:`email`},parameters:{docs:{description:{story:`Input with a descriptive label above the field.`}}}},d={name:`With Error`,args:{label:`Email Address`,placeholder:`john@example.com`,type:`email`,error:`Please enter a valid email address`},parameters:{docs:{description:{story:"The `error` prop renders a validation message below the field and applies a red border style."}}}},f={args:{label:`Username`,placeholder:`Choose a username`,required:!0},parameters:{docs:{description:{story:`Required inputs display a visual indicator alongside the label.`}}}},p={args:{label:`Account ID`,value:`ACC-001-2024`,disabled:!0},parameters:{docs:{description:{story:`Disabled inputs are visually muted and cannot be interacted with.`}}}},m={name:`Sizes`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,maxWidth:400},children:[(0,s.jsx)(i,{label:`Small`,placeholder:`Small input`,size:`small`}),(0,s.jsx)(i,{label:`Medium`,placeholder:`Medium input`,size:`medium`}),(0,s.jsx)(i,{label:`Large`,placeholder:`Large input`,size:`large`})]}),parameters:{docs:{description:{story:"Three available sizes: `small`, `medium`, and `large` — stacked for comparison."}}}},h={name:`Ghost Mode`,args:{label:`Search`,placeholder:`Search anything...`,mode:`ghost`},parameters:{docs:{description:{story:"The `ghost` mode renders a minimal borderless input — useful for inline search fields or table filters."}}}},g={name:`Password Input`,args:{label:`Password`,placeholder:`••••••••`,type:`password`,required:!0},parameters:{docs:{description:{story:`A password-type input with required marking.`}}}},_=()=>{let[e,t]=(0,o.useState)(`Type something here`);return(0,s.jsx)(i,{label:`Search`,placeholder:`Type to search...`,value:e,onChange:e=>t(e.target.value),clearable:!0})},v={name:`Clearable`,render:()=>(0,s.jsx)(_,{}),parameters:{docs:{description:{story:"When `clearable` is set to `true`, a clear button (×) appears on the right side of the input when it has a value. Clicking the button clears the input and triggers the `onChange` callback with an empty value. The button is hidden when the input is empty or disabled."}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Clearable',
  render: () => <ClearableTemplate />,
  parameters: {
    docs: {
      description: {
        story: 'When \`clearable\` is set to \`true\`, a clear button (×) appears on the right side of the input when it has a value. Clicking the button clears the input and triggers the \`onChange\` callback with an empty value. The button is hidden when the input is empty or disabled.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithLabel`,`WithError`,`Required`,`Disabled`,`Sizes`,`GhostMode`,`PasswordInput`,`Clearable`]}))();export{v as Clearable,l as Default,p as Disabled,h as GhostMode,g as PasswordInput,f as Required,m as Sizes,d as WithError,u as WithLabel,y as __namedExportsOrder,c as default};