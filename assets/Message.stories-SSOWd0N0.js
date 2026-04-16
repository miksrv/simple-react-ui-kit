import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-BeWxJaLi.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,t as i}from"./src-CA9VU0UJ.js";var a,o,s,c,l,u,d,f;e((()=>{t(),i(),a=n(),o={title:`Components/Message`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"An inline alert/notification banner that communicates feedback to the user. Four semantic types are supported: `error`, `warning`, `success`, and `info`. An optional `title` renders as a bold heading above the content. The `children` prop accepts any React content."}}},argTypes:{type:{control:`select`,options:[`error`,`warning`,`success`,`info`],description:`Semantic type that drives the colour scheme and icon`,table:{type:{summary:`"error" | "warning" | "success" | "info"`}}},title:{control:`text`,description:`Optional bold heading rendered above the message body`},children:{control:`text`,description:`Message body content — accepts strings or any React node`},className:{control:`text`,description:`Additional CSS class names for custom styling`}}},s={args:{type:`info`,title:`Information`,children:`Use the Controls panel to change the type, title, and content of this message.`},parameters:{docs:{description:{story:"Default message with `info` type. Switch `type` in the Controls panel to preview all variants."}}}},c={name:`All Types`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,a.jsx)(r,{type:`info`,title:`Info`,children:`This is an informational message to guide the user.`}),(0,a.jsx)(r,{type:`success`,title:`Success!`,children:`Your changes have been saved successfully.`}),(0,a.jsx)(r,{type:`warning`,title:`Warning`,children:`Please review the information before continuing.`}),(0,a.jsx)(r,{type:`error`,title:`Error`,children:`Something went wrong. Please try again or contact support.`})]}),parameters:{docs:{description:{story:`All four message types stacked for a side-by-side visual comparison.`}}}},l={name:`With Title`,args:{type:`success`,title:`Account Created`,children:`Welcome aboard! Your account is ready to use.`},parameters:{docs:{description:{story:`Message with a title heading above the body text.`}}}},u={name:`Without Title`,args:{type:`warning`,children:`Your session will expire in 5 minutes. Save your work.`},parameters:{docs:{description:{story:`Message without a title — renders only the body content.`}}}},d={name:`With Custom Content (List)`,render:()=>(0,a.jsx)(r,{type:`error`,title:`Form validation failed`,children:(0,a.jsxs)(`ul`,{style:{margin:`4px 0 0`,paddingLeft:20},children:[(0,a.jsx)(`li`,{children:`Email address is required`}),(0,a.jsx)(`li`,{children:`Password must be at least 8 characters`}),(0,a.jsx)(`li`,{children:`Please accept the terms of service`})]})}),parameters:{docs:{description:{story:"The `children` prop accepts any React node — here it renders a bulleted list of validation errors."}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: 'Information',
    children: 'Use the Controls panel to change the type, title, and content of this message.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default message with \`info\` type. Switch \`type\` in the Controls panel to preview all variants.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'All Types',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
            <Message type='info' title='Info'>
                This is an informational message to guide the user.
            </Message>
            <Message type='success' title='Success!'>
                Your changes have been saved successfully.
            </Message>
            <Message type='warning' title='Warning'>
                Please review the information before continuing.
            </Message>
            <Message type='error' title='Error'>
                Something went wrong. Please try again or contact support.
            </Message>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'All four message types stacked for a side-by-side visual comparison.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'With Title',
  args: {
    type: 'success',
    title: 'Account Created',
    children: 'Welcome aboard! Your account is ready to use.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Message with a title heading above the body text.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Without Title',
  args: {
    type: 'warning',
    children: 'Your session will expire in 5 minutes. Save your work.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Message without a title — renders only the body content.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'With Custom Content (List)',
  render: () => <Message type='error' title='Form validation failed'>
            <ul style={{
      margin: '4px 0 0',
      paddingLeft: 20
    }}>
                <li>Email address is required</li>
                <li>Password must be at least 8 characters</li>
                <li>Please accept the terms of service</li>
            </ul>
        </Message>,
  parameters: {
    docs: {
      description: {
        story: 'The \`children\` prop accepts any React node — here it renders a bulleted list of validation errors.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`AllTypes`,`WithTitle`,`WithoutTitle`,`WithCustomContent`]}))();export{c as AllTypes,s as Default,d as WithCustomContent,l as WithTitle,u as WithoutTitle,f as __namedExportsOrder,o as default};