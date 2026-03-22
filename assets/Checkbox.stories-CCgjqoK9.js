import{j as e}from"./index-Bbd3PiGO.js";import{r as u}from"./iframe-CMmsCrn5.js";import{b as a}from"./Table-DWFI1cym.js";import"./index-ThbIq_AC.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"Controls/Checkbox",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"A styled checkbox input that extends the native HTML checkbox with an optional label (string or React node) and an `indeterminate` state for partial selection. Built on top of `React.InputHTMLAttributes<HTMLInputElement>`."}}},argTypes:{label:{control:"text",description:"Label displayed next to the checkbox — accepts a plain string or any React node",table:{type:{summary:"string | React.ReactNode"}}},checked:{control:"boolean",description:"Controlled checked state",table:{defaultValue:{summary:"false"}}},indeterminate:{control:"boolean",description:"Renders the checkbox in an indeterminate (partially-checked) state",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disables the checkbox",table:{defaultValue:{summary:"false"}}},className:{control:"text",description:"Additional CSS class names for custom styling"},onChange:{control:!1,description:"Standard change handler — `(e: React.ChangeEvent<HTMLInputElement>) => void`"}}},n={args:{label:"Accept terms and conditions",checked:!1},parameters:{docs:{description:{story:"Default unchecked state. Use the Controls panel to toggle `checked`, `indeterminate`, and `disabled`."}}}},r={args:{label:"Remember me",checked:!0},parameters:{docs:{description:{story:"Checkbox in the checked state."}}}},s={args:{label:"Select all",indeterminate:!0},parameters:{docs:{description:{story:'The `indeterminate` state is used in "select all" patterns when only some items in a list are selected.'}}}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(a,{label:"Disabled unchecked",disabled:!0}),e.jsx(a,{label:"Disabled checked",disabled:!0,checked:!0,readOnly:!0}),e.jsx(a,{label:"Disabled indeterminate",disabled:!0,indeterminate:!0})]}),parameters:{docs:{description:{story:"All three visual states (unchecked, checked, indeterminate) in their disabled form."}}}},c={name:"With React Node Label",args:{label:e.jsxs("span",{children:["I agree to the"," ",e.jsx("a",{href:"#",style:{color:"#3b82f6"},children:"Terms of Service"})," ","and"," ",e.jsx("a",{href:"#",style:{color:"#3b82f6"},children:"Privacy Policy"})]})},parameters:{docs:{description:{story:"The `label` prop accepts any React node, so you can embed links, icons, or formatted text directly."}}}},y=()=>{const m=["TypeScript","React","Node.js","GraphQL","Docker"],[i,p]=u.useState(["React"]),h=t=>p(d=>d.includes(t)?d.filter(b=>b!==t):[...d,t]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[m.map(t=>e.jsx(a,{label:t,checked:i.includes(t),onChange:()=>h(t)},t)),e.jsxs("p",{style:{marginTop:8,fontSize:13,color:"#555"},children:["Selected: ",i.join(", ")||"none"]})]})},l={name:"Checkbox Group",render:()=>e.jsx(y,{}),parameters:{docs:{description:{story:"A real-world checkbox group with controlled state. Selected values are shown below the list."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    checked: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Default unchecked state. Use the Controls panel to toggle \`checked\`, \`indeterminate\`, and \`disabled\`.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Remember me',
    checked: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox in the checked state.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select all',
    indeterminate: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The \`indeterminate\` state is used in "select all" patterns when only some items in a list are selected.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
            <Checkbox label='Disabled unchecked' disabled />
            <Checkbox label='Disabled checked' disabled checked readOnly />
            <Checkbox label='Disabled indeterminate' disabled indeterminate />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'All three visual states (unchecked, checked, indeterminate) in their disabled form.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'With React Node Label',
  args: {
    label: <span>
                I agree to the{' '}
                <a href='#' style={{
        color: '#3b82f6'
      }}>
                    Terms of Service
                </a>{' '}
                and{' '}
                <a href='#' style={{
        color: '#3b82f6'
      }}>
                    Privacy Policy
                </a>
            </span>
  },
  parameters: {
    docs: {
      description: {
        story: 'The \`label\` prop accepts any React node, so you can embed links, icons, or formatted text directly.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Checkbox Group',
  render: () => <CheckboxGroupDemo />,
  parameters: {
    docs: {
      description: {
        story: 'A real-world checkbox group with controlled state. Selected values are shown below the list.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const D=["Default","Checked","Indeterminate","Disabled","WithReactNodeLabel","Group"];export{r as Checked,n as Default,o as Disabled,l as Group,s as Indeterminate,c as WithReactNodeLabel,D as __namedExportsOrder,S as default};
