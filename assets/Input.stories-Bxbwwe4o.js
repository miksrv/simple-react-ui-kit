import{j as e}from"./index-BNGFX5oi.js";import"./iframe-NGxwQjTZ.js";import"./Table-DadTRiB0.js";import{I as d}from"./Input-Dvemf3n9.js";import"./index-B53Eu0ub.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Controls/Input",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"A styled text input that wraps the native `<input>` element with an optional label, error message, two visual modes (`primary` / `ghost`), and three sizes. All standard `HTMLInputElement` attributes (e.g. `type`, `placeholder`, `required`, `disabled`, `onChange`) are forwarded to the underlying element."}}},argTypes:{label:{control:"text",description:"Label text rendered above the input field"},placeholder:{control:"text",description:"Native placeholder attribute"},mode:{control:"inline-radio",options:["primary","ghost"],description:"Visual style of the input",table:{defaultValue:{summary:"primary"},type:{summary:'"primary" | "ghost"'}}},size:{control:"inline-radio",options:["small","medium","large"],description:"Controls the height and font-size of the input",table:{defaultValue:{summary:"medium"},type:{summary:'"small" | "medium" | "large"'}}},error:{control:"text",description:"Error message displayed below the input. Also applies an error border style."},required:{control:"boolean",description:"Marks the input as required (native HTML attribute + visual indicator)"},disabled:{control:"boolean",description:"Disables the input"},type:{control:"select",options:["text","email","password","number","tel","url","search"],description:"Native `type` attribute of the underlying `<input>`"},className:{control:"text",description:"Additional CSS class names for custom styling"},onChange:{control:!1,description:"Standard React change handler"}}},r={args:{label:"Full Name",placeholder:"Enter your name",size:"medium",mode:"primary"},parameters:{docs:{description:{story:"Default input with a label. Use the Controls panel to explore all available props."}}}},a={name:"With Label",args:{label:"Email Address",placeholder:"john@example.com",type:"email"},parameters:{docs:{description:{story:"Input with a descriptive label above the field."}}}},s={name:"With Error",args:{label:"Email Address",placeholder:"john@example.com",type:"email",error:"Please enter a valid email address"},parameters:{docs:{description:{story:"The `error` prop renders a validation message below the field and applies a red border style."}}}},t={args:{label:"Username",placeholder:"Choose a username",required:!0},parameters:{docs:{description:{story:"Required inputs display a visual indicator alongside the label."}}}},n={args:{label:"Account ID",value:"ACC-001-2024",disabled:!0},parameters:{docs:{description:{story:"Disabled inputs are visually muted and cannot be interacted with."}}}},o={name:"Sizes",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:[e.jsx(d,{label:"Small",placeholder:"Small input",size:"small"}),e.jsx(d,{label:"Medium",placeholder:"Medium input",size:"medium"}),e.jsx(d,{label:"Large",placeholder:"Large input",size:"large"})]}),parameters:{docs:{description:{story:"Three available sizes: `small`, `medium`, and `large` — stacked for comparison."}}}},l={name:"Ghost Mode",args:{label:"Search",placeholder:"Search anything...",mode:"ghost"},parameters:{docs:{description:{story:"The `ghost` mode renders a minimal borderless input — useful for inline search fields or table filters."}}}},i={name:"Password Input",args:{label:"Password",placeholder:"••••••••",type:"password",required:!0},parameters:{docs:{description:{story:"A password-type input with required marking."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const y=["Default","WithLabel","WithError","Required","Disabled","Sizes","GhostMode","PasswordInput"];export{r as Default,n as Disabled,l as GhostMode,i as PasswordInput,t as Required,o as Sizes,s as WithError,a as WithLabel,y as __namedExportsOrder,g as default};
