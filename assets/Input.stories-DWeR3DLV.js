import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{m as i,t as a}from"./src-DMUTri94.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{o=e(n(),1),a(),s=r(),c={title:`Controls/Input`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"A styled text input that wraps the native `<input>` element with an optional label, error message, two visual modes (`primary` / `ghost`), and three sizes. All standard `HTMLInputElement` attributes (e.g. `type`, `placeholder`, `required`, `disabled`, `onChange`) are forwarded to the underlying element."}}},argTypes:{label:{control:`text`,description:`Label text rendered above the input field`},placeholder:{control:`text`,description:`Native placeholder attribute`},mode:{control:`inline-radio`,options:[`primary`,`ghost`],description:`Visual style of the input`,table:{defaultValue:{summary:`primary`},type:{summary:`"primary" | "ghost"`}}},size:{control:`inline-radio`,options:[`small`,`medium`,`large`],description:`Controls the height and font-size of the input`,table:{defaultValue:{summary:`medium`},type:{summary:`"small" | "medium" | "large"`}}},error:{control:`text`,description:"Error message displayed below the input, and applies an error border style. Pass `true` instead of a string to apply the border only, without rendering a message.",table:{type:{summary:`string | boolean`}}},required:{control:`boolean`,description:`Marks the input as required (native HTML attribute + visual indicator)`},disabled:{control:`boolean`,description:`Disables the input`},clearable:{control:`boolean`,description:`Shows a clear button when the input has a value`},type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`,`search`],description:"Native `type` attribute of the underlying `<input>`"},className:{control:`text`,description:`Additional CSS class names for custom styling`},icon:{control:`select`,description:`Icon displayed on the left side of the input field`},onChange:{control:!1,description:`Standard React change handler`}}},l={args:{label:`Full Name`,placeholder:`Enter your name`,size:`medium`,mode:`primary`},parameters:{docs:{description:{story:`Default input with a label. Use the Controls panel to explore all available props.`}}}},u={name:`With Label`,args:{label:`Email Address`,placeholder:`john@example.com`,type:`email`},parameters:{docs:{description:{story:`Input with a descriptive label above the field.`}}}},d={name:`With Error`,args:{label:`Email Address`,placeholder:`john@example.com`,type:`email`,error:`Please enter a valid email address`},parameters:{docs:{description:{story:"The `error` prop renders a validation message below the field and applies a red border style."}}}},f={name:`With Error (Highlight Only)`,args:{label:`Email Address`,placeholder:`john@example.com`,type:`email`,error:!0},parameters:{docs:{description:{story:"Passing `error={true}` instead of a message string applies the red border without rendering any text below the field — useful when several fields share one message shown once elsewhere (e.g. a field group validated as a whole)."}}}},p={args:{label:`Username`,placeholder:`Choose a username`,required:!0},parameters:{docs:{description:{story:`Required inputs display a visual indicator alongside the label.`}}}},m={args:{label:`Account ID`,value:`ACC-001-2024`,disabled:!0},parameters:{docs:{description:{story:`Disabled inputs are visually muted and cannot be interacted with.`}}}},h={name:`Sizes`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,maxWidth:400},children:[(0,s.jsx)(i,{label:`Small`,placeholder:`Small input`,size:`small`}),(0,s.jsx)(i,{label:`Medium`,placeholder:`Medium input`,size:`medium`}),(0,s.jsx)(i,{label:`Large`,placeholder:`Large input`,size:`large`})]}),parameters:{docs:{description:{story:"Three available sizes: `small`, `medium`, and `large` — stacked for comparison."}}}},g={name:`Ghost Mode`,args:{label:`Search`,placeholder:`Search anything...`,mode:`ghost`},parameters:{docs:{description:{story:"The `ghost` mode renders a minimal borderless input — useful for inline search fields or table filters."}}}},_={name:`Password Input`,args:{label:`Password`,placeholder:`••••••••`,type:`password`,required:!0},parameters:{docs:{description:{story:`A password-type input with required marking.`}}}},v=()=>{let[e,t]=(0,o.useState)(`Type something here`);return(0,s.jsx)(i,{label:`Search`,placeholder:`Type to search...`,value:e,onChange:e=>t(e.target.value),clearable:!0})},y={name:`With Icon`,args:{label:`Search`,placeholder:`Search anything...`,icon:`Search`},parameters:{docs:{description:{story:"The `icon` prop renders an icon on the left side of the input field. The input text is padded automatically to avoid overlapping the icon."}}}},b={name:`Clearable`,render:()=>(0,s.jsx)(v,{}),parameters:{docs:{description:{story:"When `clearable` is set to `true`, a clear button (×) appears on the right side of the input when it has a value. Clicking the button clears the input and triggers the `onChange` callback with an empty value. The button is hidden when the input is empty or disabled."}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  name: 'With Error (Highlight Only)',
  args: {
    label: 'Email Address',
    placeholder: 'john@example.com',
    type: 'email',
    error: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Passing \`error={true}\` instead of a message string applies the red border without rendering ' + 'any text below the field — useful when several fields share one message shown once elsewhere ' + '(e.g. a field group validated as a whole).'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'With Icon',
  args: {
    label: 'Search',
    placeholder: 'Search anything...',
    icon: 'Search'
  },
  parameters: {
    docs: {
      description: {
        story: 'The \`icon\` prop renders an icon on the left side of the input field. The input text is padded automatically to avoid overlapping the icon.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Clearable',
  render: () => <ClearableTemplate />,
  parameters: {
    docs: {
      description: {
        story: 'When \`clearable\` is set to \`true\`, a clear button (×) appears on the right side of the input when it has a value. Clicking the button clears the input and triggers the \`onChange\` callback with an empty value. The button is hidden when the input is empty or disabled.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithLabel`,`WithError`,`WithErrorHighlightOnly`,`Required`,`Disabled`,`Sizes`,`GhostMode`,`PasswordInput`,`WithIcon`,`Clearable`]})))()}S();export{b as Clearable,l as Default,m as Disabled,g as GhostMode,_ as PasswordInput,p as Required,h as Sizes,d as WithError,f as WithErrorHighlightOnly,y as WithIcon,u as WithLabel,x as __namedExportsOrder,c as default};