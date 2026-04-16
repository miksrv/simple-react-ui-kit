import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-BeWxJaLi.js";import{t as r}from"./jsx-runtime-BRDTPpDF.js";import{m as i,t as a}from"./src-CA9VU0UJ.js";var o,s,c,l,u,d,f,p,m,h,g;t((()=>{o=e(n(),1),a(),s=r(),c={title:`Controls/Checkbox`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"A styled checkbox input that extends the native HTML checkbox with an optional label (string or React node) and an `indeterminate` state for partial selection. Built on top of `React.InputHTMLAttributes<HTMLInputElement>`."}}},argTypes:{label:{control:`text`,description:`Label displayed next to the checkbox — accepts a plain string or any React node`,table:{type:{summary:`string | React.ReactNode`}}},checked:{control:`boolean`,description:`Controlled checked state`,table:{defaultValue:{summary:`false`}}},indeterminate:{control:`boolean`,description:`Renders the checkbox in an indeterminate (partially-checked) state`,table:{defaultValue:{summary:`false`}}},disabled:{control:`boolean`,description:`Disables the checkbox`,table:{defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional CSS class names for custom styling`},onChange:{control:!1,description:"Standard change handler — `(e: React.ChangeEvent<HTMLInputElement>) => void`"}}},l={args:{label:`Accept terms and conditions`,checked:!1},parameters:{docs:{description:{story:"Default unchecked state. Use the Controls panel to toggle `checked`, `indeterminate`, and `disabled`."}}}},u={args:{label:`Remember me`,checked:!0},parameters:{docs:{description:{story:`Checkbox in the checked state.`}}}},d={args:{label:`Select all`,indeterminate:!0},parameters:{docs:{description:{story:'The `indeterminate` state is used in "select all" patterns when only some items in a list are selected.'}}}},f={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[(0,s.jsx)(i,{label:`Disabled unchecked`,disabled:!0}),(0,s.jsx)(i,{label:`Disabled checked`,disabled:!0,checked:!0,readOnly:!0}),(0,s.jsx)(i,{label:`Disabled indeterminate`,disabled:!0,indeterminate:!0})]}),parameters:{docs:{description:{story:`All three visual states (unchecked, checked, indeterminate) in their disabled form.`}}}},p={name:`With React Node Label`,args:{label:(0,s.jsxs)(`span`,{children:[`I agree to the`,` `,(0,s.jsx)(`a`,{href:`#`,style:{color:`#3b82f6`},children:`Terms of Service`}),` `,`and`,` `,(0,s.jsx)(`a`,{href:`#`,style:{color:`#3b82f6`},children:`Privacy Policy`})]})},parameters:{docs:{description:{story:"The `label` prop accepts any React node, so you can embed links, icons, or formatted text directly."}}}},m=()=>{let e=[`TypeScript`,`React`,`Node.js`,`GraphQL`,`Docker`],[t,n]=(0,o.useState)([`React`]),r=e=>n(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8},children:[e.map(e=>(0,s.jsx)(i,{label:e,checked:t.includes(e),onChange:()=>r(e)},e)),(0,s.jsxs)(`p`,{style:{marginTop:8,fontSize:13,color:`#555`},children:[`Selected: `,t.join(`, `)||`none`]})]})},h={name:`Checkbox Group`,render:()=>(0,s.jsx)(m,{}),parameters:{docs:{description:{story:`A real-world checkbox group with controlled state. Selected values are shown below the list.`}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Checkbox Group',
  render: () => <CheckboxGroupDemo />,
  parameters: {
    docs: {
      description: {
        story: 'A real-world checkbox group with controlled state. Selected values are shown below the list.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Checked`,`Indeterminate`,`Disabled`,`WithReactNodeLabel`,`Group`]}))();export{u as Checked,l as Default,f as Disabled,h as Group,d as Indeterminate,p as WithReactNodeLabel,g as __namedExportsOrder,c as default};