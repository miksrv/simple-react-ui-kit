import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{A as i,I as a,P as o,R as s,t as c}from"./src-CwCxhuRq.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{l=e(n(),1),c(),u=r(),d={title:`Components/Tooltip`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:'A lightweight tooltip that appears on hover (after a short delay) and immediately on keyboard focus. It is rendered into `document.body` with fixed positioning only while visible, so it adds nothing to the DOM when hidden, never adds scrollbars and is never clipped by `overflow: hidden` parents. When there is not enough room it flips to the opposite side and shifts along the edge to stay inside the viewport, keeping the arrow pointed at the trigger.\n\n`Button`, `Icon`, `Badge` and Table columns (`headerTooltip`) accept a `tooltip` prop directly: `<Button icon="Close" tooltip="Close" />`. Use the `Tooltip` component for any other element — it does not wrap the child, so the child must forward pointer and focus handlers to a DOM node.\n\nString content is limited to 150 characters and 6 lines; longer text is truncated with an ellipsis.\n\nOnly one tooltip is visible at a time. Escape dismisses the tooltip without closing a parent Dialog or Popout. Focus opens it only after keyboard interaction, not after a click or programmatic focus. Touch devices have no hover, so the tooltip is not shown there — never put essential information only into a tooltip.'}}},argTypes:{content:{control:`text`,description:`Tooltip content. Strings are truncated to 150 characters; React nodes are rendered as is`,table:{type:{summary:`React.ReactNode`}}},placement:{control:`inline-radio`,options:[`top`,`bottom`,`left`,`right`],description:`Preferred side. Flips to the opposite side when there is not enough room`,table:{defaultValue:{summary:`top`},type:{summary:`"top" | "bottom" | "left" | "right"`}}},delay:{control:`number`,description:`Delay in milliseconds before showing on hover. Keyboard focus shows the tooltip immediately`,table:{defaultValue:{summary:`400`}}},disabled:{control:`boolean`,description:`Temporarily disables the tooltip`,table:{defaultValue:{summary:`false`}}},className:{control:`text`,description:`Additional class names for the tooltip bubble`},children:{control:!1,description:`A single element that forwards pointer/focus handlers to a DOM node`}},decorators:[e=>(0,u.jsx)(`div`,{style:{padding:`60px 0`,display:`flex`,justifyContent:`center`},children:(0,u.jsx)(e,{})})]},f={args:{content:`Tooltip text`,placement:`top`,children:(0,u.jsx)(i,{mode:`secondary`,children:`Hover or focus me`})},parameters:{docs:{description:{story:`Use the Controls panel to explore all available props.`}}}},p={name:`Via tooltip Prop`,render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[(0,u.jsx)(i,{icon:`Pencil`,mode:`secondary`,tooltip:`Edit`}),(0,u.jsx)(i,{icon:`Download`,mode:`secondary`,tooltip:`Download report`}),(0,u.jsx)(i,{icon:`Close`,mode:`secondary`,tooltip:{content:`Delete`,placement:`bottom`}}),(0,u.jsx)(a,{name:`QuestionCircle`,style:{width:20,height:20},tooltip:`Icons with a tooltip become focusable and are announced with the tooltip text`}),(0,u.jsx)(o,{label:`Beta`,tooltip:`This feature is still in beta`})]}),parameters:{docs:{description:{story:`The most common case: icon-only buttons. The tooltip text also becomes the accessible name of an icon-only button. Move the pointer along the toolbar — after the first tooltip the next ones open instantly.`}}}},m={render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,gap:12},children:[`top`,`bottom`,`left`,`right`].map(e=>(0,u.jsx)(s,{content:`Placement: ${e}`,placement:e,children:(0,u.jsx)(i,{mode:`outline`,children:e})},e))}),parameters:{docs:{description:{story:`The four preferred placements.`}}}},h={name:`Viewport Edges (Flip & Shift)`,render:()=>{let e=(e,t)=>(0,u.jsx)(`div`,{style:{position:`fixed`,...e},children:(0,u.jsx)(i,{icon:`Settings`,mode:`secondary`,tooltip:{content:`Preferred placement is "${t}", but this tooltip stays inside the viewport`,placement:t}})});return(0,u.jsxs)(u.Fragment,{children:[e({top:4,left:4},`top`),e({top:4,right:4},`right`),e({bottom:4,left:4},`left`),e({bottom:4,right:4},`bottom`),(0,u.jsx)(`p`,{style:{textAlign:`center`,paddingTop:110,margin:0},children:`Hover the buttons in the corners of the viewport`})]})},parameters:{layout:`fullscreen`,docs:{story:{inline:!1,iframeHeight:280},description:{story:`Buttons pinned to the viewport corners. Each tooltip prefers a side without enough room, so it flips to the opposite side and shifts along the edge; the arrow keeps pointing at the button.`}}}},g={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,u.jsx)(s,{content:`A longer description wraps onto several lines instead of stretching across the whole screen.`,children:(0,u.jsx)(i,{mode:`outline`,children:`Wrapped text`})}),(0,u.jsx)(s,{content:`Line breaks
are preserved
in string content`,children:(0,u.jsx)(i,{mode:`outline`,children:`Line breaks`})}),(0,u.jsx)(s,{content:`https://example.com/a/very/long/url/without/any/spaces/that/still/wraps/correctly`,children:(0,u.jsx)(i,{mode:`outline`,children:`Long word`})})]}),parameters:{docs:{description:{story:"Text wraps at a maximum width of 240px (or the viewport width minus padding), `\\n` line breaks are kept, and long words or URLs break instead of overflowing."}}}},_={name:`Length Limit`,render:()=>(0,u.jsx)(s,{content:`This tooltip text is far too long for a tooltip. `.repeat(8),children:(0,u.jsx)(i,{mode:`outline`,children:`Truncated text`})}),parameters:{docs:{description:{story:`String content longer than 150 characters is truncated with an ellipsis (with a console warning in development) and clamped to 6 lines. For rich or long content, use a Popout or a Dialog instead.`}}}},v={name:`Custom Content`,render:()=>(0,u.jsx)(s,{content:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`strong`,{children:`Keyboard shortcut`}),(0,u.jsx)(`br`,{}),`Press `,(0,u.jsx)(`kbd`,{children:`Ctrl`}),` + `,(0,u.jsx)(`kbd`,{children:`S`}),` to save`]}),children:(0,u.jsx)(i,{icon:`Download`,children:`Save`})}),parameters:{docs:{description:{story:`The standalone component accepts React nodes. They are not truncated, so keep them short.`}}}},y={name:`Disabled Trigger`,render:()=>(0,u.jsx)(i,{disabled:!0,tooltip:`You do not have permission to publish`,children:`Publish`}),parameters:{docs:{description:{story:`Tooltips work on disabled buttons in browsers that dispatch pointer events to disabled controls, which is handy to explain why an action is unavailable. A disabled button cannot receive focus, so keyboard users will not see it — do not put essential information only there.`}}}},b=()=>{let[e,t]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let t=document.documentElement;return e&&(t.style.setProperty(`--text-color-primary`,`rgba(255, 255, 255, 0.9)`),t.style.setProperty(`--container-background-color`,`#2c2d2e`)),()=>{t.style.removeProperty(`--text-color-primary`),t.style.removeProperty(`--container-background-color`)}},[e]),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`,padding:24,borderRadius:8,background:e?`#19191a`:`transparent`},children:[(0,u.jsx)(i,{mode:`secondary`,onClick:()=>t(e=>!e),children:e?`Switch to light theme`:`Switch to dark theme`}),(0,u.jsx)(i,{icon:`Moon`,mode:`secondary`,tooltip:`Tooltip colors follow the theme`})]})},x={render:()=>(0,u.jsx)(b,{}),parameters:{docs:{story:{inline:!1,iframeHeight:200},description:{story:"The tooltip has no dedicated variables: it is an inverted bubble built from `--text-color-primary` (background) and `--container-background-color` (text), so a dark theme that swaps these colors gets a light tooltip automatically. Define theme variables on `:root` — the tooltip is rendered into `document.body`."}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip text',
    placement: 'top',
    children: <Button mode='secondary'>Hover or focus me</Button>
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the Controls panel to explore all available props.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Via tooltip Prop',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
            <Button icon='Pencil' mode='secondary' tooltip='Edit' />
            <Button icon='Download' mode='secondary' tooltip='Download report' />
            <Button icon='Close' mode='secondary' tooltip={{
      content: 'Delete',
      placement: 'bottom'
    }} />
            <Icon name='QuestionCircle' style={{
      width: 20,
      height: 20
    }} tooltip='Icons with a tooltip become focusable and are announced with the tooltip text' />
            <Badge label='Beta' tooltip='This feature is still in beta' />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'The most common case: icon-only buttons. The tooltip text also becomes the accessible name of an icon-only button. Move the pointer along the toolbar — after the first tooltip the next ones open instantly.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12
  }}>
            {(['top', 'bottom', 'left', 'right'] as const).map(placement => <Tooltip key={placement} content={\`Placement: \${placement}\`} placement={placement}>
                    <Button mode='outline'>{placement}</Button>
                </Tooltip>)}
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'The four preferred placements.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Viewport Edges (Flip & Shift)',
  render: () => {
    const corner = (style: React.CSSProperties, placement: TooltipProps['placement']) => <div style={{
      position: 'fixed',
      ...style
    }}>
                <Button icon='Settings' mode='secondary' tooltip={{
        content: \`Preferred placement is "\${placement}", but this tooltip stays inside the viewport\`,
        placement
      }} />
            </div>;
    return <>
                {corner({
        top: 4,
        left: 4
      }, 'top')}
                {corner({
        top: 4,
        right: 4
      }, 'right')}
                {corner({
        bottom: 4,
        left: 4
      }, 'left')}
                {corner({
        bottom: 4,
        right: 4
      }, 'bottom')}
                <p style={{
        textAlign: 'center',
        paddingTop: 110,
        margin: 0
      }}>
                    Hover the buttons in the corners of the viewport
                </p>
            </>;
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      // Rendered in its own iframe, so the fixed buttons sit in the corners of the story, not of the docs page
      story: {
        inline: false,
        iframeHeight: 280
      },
      description: {
        story: 'Buttons pinned to the viewport corners. Each tooltip prefers a side without enough room, so it flips to the opposite side and shifts along the edge; the arrow keeps pointing at the button.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12
  }}>
            <Tooltip content='A longer description wraps onto several lines instead of stretching across the whole screen.'>
                <Button mode='outline'>Wrapped text</Button>
            </Tooltip>
            <Tooltip content={'Line breaks\\nare preserved\\nin string content'}>
                <Button mode='outline'>Line breaks</Button>
            </Tooltip>
            <Tooltip content='https://example.com/a/very/long/url/without/any/spaces/that/still/wraps/correctly'>
                <Button mode='outline'>Long word</Button>
            </Tooltip>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Text wraps at a maximum width of 240px (or the viewport width minus padding), \`\\\\n\` line breaks are kept, and long words or URLs break instead of overflowing.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Length Limit',
  render: () => <Tooltip content={'This tooltip text is far too long for a tooltip. '.repeat(8)}>
            <Button mode='outline'>Truncated text</Button>
        </Tooltip>,
  parameters: {
    docs: {
      description: {
        story: \`String content longer than \${TOOLTIP_MAX_LENGTH} characters is truncated with an ellipsis (with a console warning in development) and clamped to 6 lines. For rich or long content, use a Popout or a Dialog instead.\`
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Custom Content',
  render: () => <Tooltip content={<>
                    <strong>Keyboard shortcut</strong>
                    <br />
                    Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save
                </>}>
            <Button icon='Download'>Save</Button>
        </Tooltip>,
  parameters: {
    docs: {
      description: {
        story: 'The standalone component accepts React nodes. They are not truncated, so keep them short.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Disabled Trigger',
  render: () => <Button disabled tooltip='You do not have permission to publish'>
            Publish
        </Button>,
  parameters: {
    docs: {
      description: {
        story: 'Tooltips work on disabled buttons in browsers that dispatch pointer events to disabled controls, which is handy to explain why an action is unavailable. A disabled button cannot receive focus, so keyboard users will not see it — do not put essential information only there.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ThemeDemo />,
  parameters: {
    docs: {
      // Theme variables are changed on :root, so keep them away from the docs page itself
      story: {
        inline: false,
        iframeHeight: 200
      },
      description: {
        story: 'The tooltip has no dedicated variables: it is an inverted bubble built from \`--text-color-primary\` (background) and \`--container-background-color\` (text), so a dark theme that swaps these colors gets a light tooltip automatically. Define theme variables on \`:root\` — the tooltip is rendered into \`document.body\`.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`TooltipProp`,`Placements`,`ViewportEdges`,`Multiline`,`LengthLimit`,`CustomContent`,`Disabled`,`Theming`]})))()}C();export{v as CustomContent,f as Default,y as Disabled,_ as LengthLimit,g as Multiline,m as Placements,x as Theming,p as TooltipProp,h as ViewportEdges,S as __namedExportsOrder,d as default};