import{j as e}from"./index-Bbd3PiGO.js";import"./iframe-CMmsCrn5.js";import"./Table-DWFI1cym.js";import{M as t}from"./Message-DjCSsv6k.js";import"./index-ThbIq_AC.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Components/Message",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"An inline alert/notification banner that communicates feedback to the user. Four semantic types are supported: `error`, `warning`, `success`, and `info`. An optional `title` renders as a bold heading above the content. The `children` prop accepts any React content."}}},argTypes:{type:{control:"select",options:["error","warning","success","info"],description:"Semantic type that drives the colour scheme and icon",table:{type:{summary:'"error" | "warning" | "success" | "info"'}}},title:{control:"text",description:"Optional bold heading rendered above the message body"},children:{control:"text",description:"Message body content — accepts strings or any React node"},className:{control:"text",description:"Additional CSS class names for custom styling"}}},s={args:{type:"info",title:"Information",children:"Use the Controls panel to change the type, title, and content of this message."},parameters:{docs:{description:{story:"Default message with `info` type. Switch `type` in the Controls panel to preview all variants."}}}},n={name:"All Types",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(t,{type:"info",title:"Info",children:"This is an informational message to guide the user."}),e.jsx(t,{type:"success",title:"Success!",children:"Your changes have been saved successfully."}),e.jsx(t,{type:"warning",title:"Warning",children:"Please review the information before continuing."}),e.jsx(t,{type:"error",title:"Error",children:"Something went wrong. Please try again or contact support."})]}),parameters:{docs:{description:{story:"All four message types stacked for a side-by-side visual comparison."}}}},r={name:"With Title",args:{type:"success",title:"Account Created",children:"Welcome aboard! Your account is ready to use."},parameters:{docs:{description:{story:"Message with a title heading above the body text."}}}},a={name:"Without Title",args:{type:"warning",children:"Your session will expire in 5 minutes. Save your work."},parameters:{docs:{description:{story:"Message without a title — renders only the body content."}}}},o={name:"With Custom Content (List)",render:()=>e.jsx(t,{type:"error",title:"Form validation failed",children:e.jsxs("ul",{style:{margin:"4px 0 0",paddingLeft:20},children:[e.jsx("li",{children:"Email address is required"}),e.jsx("li",{children:"Password must be at least 8 characters"}),e.jsx("li",{children:"Please accept the terms of service"})]})}),parameters:{docs:{description:{story:"The `children` prop accepts any React node — here it renders a bulleted list of validation errors."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const h=["Default","AllTypes","WithTitle","WithoutTitle","WithCustomContent"];export{n as AllTypes,s as Default,o as WithCustomContent,r as WithTitle,a as WithoutTitle,h as __namedExportsOrder,u as default};
