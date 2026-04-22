import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-BeWxJaLi.js";import{t as r}from"./jsx-runtime-BRDTPpDF.js";import{g as i,l as a,t as o}from"./src-F_ng3KuD.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b;t((()=>{s=e(n(),1),o(),c=r(),l=e=>{let[t,n]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{onClick:()=>n(!0),children:`Open Dialog`}),(0,c.jsxs)(a,{...e,open:t,title:`Confirmation`,showCloseButton:!0,onCloseDialog:()=>n(!1),children:[(0,c.jsx)(`p`,{children:`Are you sure you want to proceed with this action?`}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:16},children:[(0,c.jsx)(i,{onClick:()=>n(!1),variant:`positive`,children:`Confirm`}),(0,c.jsx)(i,{mode:`outline`,onClick:()=>n(!1),children:`Cancel`})]})]})]})},u=()=>{let[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)(1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{onClick:()=>{r(1),t(!0)},children:`Open Multi-step Dialog`}),(0,c.jsxs)(a,{open:e,title:`Step ${n} of 3`,showBackLink:n>1,backLinkCaption:`Back`,showCloseButton:!0,onBackClick:()=>r(e=>Math.max(1,e-1)),onCloseDialog:()=>t(!1),children:[(0,c.jsxs)(`p`,{children:[`Content for step `,n,`. Use Back / Next to navigate between steps.`]}),(0,c.jsx)(`div`,{style:{display:`flex`,gap:8,marginTop:16},children:n<3?(0,c.jsx)(i,{onClick:()=>r(e=>e+1),children:`Next`}):(0,c.jsx)(i,{onClick:()=>t(!1),variant:`positive`,children:`Finish`})})]})]})},d=()=>{let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{onClick:()=>t(!0),children:`Open Wide Dialog`}),(0,c.jsxs)(a,{open:e,title:`Wide Dialog`,maxWidth:`800px`,contentHeight:`300px`,showCloseButton:!0,onCloseDialog:()=>t(!1),children:[(0,c.jsxs)(`p`,{children:[`This dialog uses `,(0,c.jsx)(`code`,{children:`maxWidth="800px"`}),` and a fixed `,(0,c.jsx)(`code`,{children:`contentHeight="300px"`}),`. The content area becomes scrollable when its content exceeds the specified height.`]}),Array.from({length:10}).map((e,t)=>(0,c.jsxs)(`p`,{style:{margin:`8px 0`,color:`#555`},children:[`Content line `,t+1]},t))]})]})},f=()=>{let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{onClick:()=>t(!0),children:`Open Dialog`}),(0,c.jsxs)(a,{open:e,onCloseDialog:()=>t(!1),children:[(0,c.jsx)(`p`,{children:`This dialog has no header — no title, no close button, no back link.`}),(0,c.jsxs)(`div`,{style:{display:`flex`,gap:8,marginTop:16},children:[(0,c.jsx)(i,{onClick:()=>t(!1),variant:`positive`,children:`OK`}),(0,c.jsx)(i,{mode:`outline`,onClick:()=>t(!1),children:`Cancel`})]})]})]})},p=()=>{let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{onClick:()=>t(!0),children:`Open Dialog`}),(0,c.jsxs)(a,{open:e,title:`Non-dismissible Dialog`,showOverlay:!1,onCloseDialog:()=>t(!1),children:[(0,c.jsx)(`p`,{children:`This dialog has no close button and no overlay — the user must use the button below to dismiss it.`}),(0,c.jsx)(i,{style:{marginTop:16},onClick:()=>t(!1),children:`Dismiss`})]})]})},m={title:`Components/Dialog`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:"A portal-based modal dialog. Visibility is controlled externally via the `open` prop. The dialog renders into `document.body` (or a custom `parentRef` element) and optionally shows a backdrop overlay. Press `Escape` or click the overlay to close."}}},argTypes:{open:{control:`boolean`,description:`Controls whether the dialog is open`,table:{defaultValue:{summary:`false`}}},title:{control:`text`,description:"Header text rendered as an `<h2>` inside the dialog"},maxWidth:{control:`text`,description:`CSS max-width of the dialog panel`,table:{defaultValue:{summary:`500px`}}},contentHeight:{control:`text`,description:'Fixed height of the scrollable content area (e.g. `"300px"`)'},showOverlay:{control:`boolean`,description:`Whether to render a backdrop overlay behind the dialog`,table:{defaultValue:{summary:`true`}}},showCloseButton:{control:`boolean`,description:`Renders an ✕ close button in the header`,table:{defaultValue:{summary:`false`}}},showBackLink:{control:`boolean`,description:`Renders a ← back link in the header`,table:{defaultValue:{summary:`false`}}},backLinkCaption:{control:`text`,description:`Text label for the back link button`},children:{control:!1,description:`Content rendered inside the dialog body`},parentRef:{control:!1,description:"Optional React ref to a parent element — the dialog portal mounts inside it instead of `document.body`"},onCloseDialog:{control:!1,description:`Callback fired when the dialog should close (overlay click, Escape key, or close button)`},onBackClick:{control:!1,description:`Callback fired when the back link button is clicked`}}},h={render:e=>(0,c.jsx)(l,{...e}),parameters:{docs:{description:{story:'A simple confirmation dialog with a close button. Click "Open Dialog" to see it. The `open` state is managed by the parent component — the dialog itself only fires `onCloseDialog`.'}}}},g={name:`With Back Link`,render:()=>(0,c.jsx)(u,{}),parameters:{docs:{description:{story:"The `showBackLink` and `onBackClick` props enable multi-step wizard dialogs with a ← back navigation button in the header."}}}},_={name:`Custom Dimensions`,render:()=>(0,c.jsx)(d,{}),parameters:{docs:{description:{story:"`maxWidth` controls the dialog panel width and `contentHeight` sets a fixed height on the scrollable body area."}}}},v={name:`Without Close Button`,render:()=>(0,c.jsx)(p,{}),parameters:{docs:{description:{story:"When `showCloseButton` and `showOverlay` are both false the dialog can only be dismissed programmatically — useful for mandatory confirmation flows."}}}},y={name:`Without Title`,render:()=>(0,c.jsx)(f,{}),parameters:{docs:{description:{story:"When `title`, `showCloseButton`, and `showBackLink` are all omitted, the header is not rendered at all — the dialog shows only its content area."}}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <DefaultDialogDemo {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'A simple confirmation dialog with a close button. Click "Open Dialog" to see it. The \`open\` state is managed by the parent component — the dialog itself only fires \`onCloseDialog\`.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Back Link',
  render: () => <WithBackLinkDemo />,
  parameters: {
    docs: {
      description: {
        story: 'The \`showBackLink\` and \`onBackClick\` props enable multi-step wizard dialogs with a ← back navigation button in the header.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Custom Dimensions',
  render: () => <CustomDimensionsDemo />,
  parameters: {
    docs: {
      description: {
        story: '\`maxWidth\` controls the dialog panel width and \`contentHeight\` sets a fixed height on the scrollable body area.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Without Close Button',
  render: () => <WithoutCloseButtonDemo />,
  parameters: {
    docs: {
      description: {
        story: 'When \`showCloseButton\` and \`showOverlay\` are both false the dialog can only be dismissed programmatically — useful for mandatory confirmation flows.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Without Title',
  render: () => <WithoutTitleDemo />,
  parameters: {
    docs: {
      description: {
        story: 'When \`title\`, \`showCloseButton\`, and \`showBackLink\` are all omitted, the header is not rendered at all — the dialog shows only its content area.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithBackLink`,`CustomDimensions`,`WithoutCloseButton`,`WithoutTitle`]}))();export{_ as CustomDimensions,h as Default,g as WithBackLink,v as WithoutCloseButton,y as WithoutTitle,b as __namedExportsOrder,m as default};