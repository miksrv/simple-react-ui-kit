import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Icon-6CTGNrVS.js";import{n as o,t as s}from"./types-B1w1ms3C.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=t((()=>{c=e(n(),1),i(),o(),l=r(),u=()=>{let[e,t]=(0,c.useState)(``),[n,r]=(0,c.useState)(null),i=Object.keys(s).filter(t=>t.toLowerCase().includes(e.toLowerCase())),o=async e=>{await navigator.clipboard.writeText(e),r(e),setTimeout(()=>r(null),1500)};return(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`input`,{type:`text`,placeholder:`Search icons...`,value:e,onChange:e=>t(e.target.value),style:{padding:`8px 12px`,fontSize:14,border:`1px solid #d1d5db`,borderRadius:6,width:`100%`,maxWidth:300,marginBottom:20,outline:`none`}}),i.length===0&&(0,l.jsxs)(`p`,{style:{color:`#999`},children:[`No icons found for "`,e,`"`]}),(0,l.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`16px`},children:i.map(e=>(0,l.jsxs)(`div`,{title:`Click to copy: ${e}`,onClick:()=>o(e),style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6,width:80,cursor:`pointer`,padding:`8px 4px`,borderRadius:6,transition:`background 0.15s`},onMouseEnter:e=>e.currentTarget.style.background=`#f3f4f6`,onMouseLeave:e=>e.currentTarget.style.background=`transparent`,children:[(0,l.jsx)(a,{name:e,style:{width:24,height:24}}),(0,l.jsx)(`span`,{style:{fontSize:11,textAlign:`center`,color:`#555`,wordBreak:`break-word`},children:e}),n===e&&(0,l.jsx)(`span`,{style:{fontSize:10,color:`#16a34a`},children:`Copied!`})]},e))})]})},d={title:`Components/Icon`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:"An inline SVG icon component. Size is controlled via CSS (`width` / `height` through `style` or `className`). The `name` prop selects from the built-in icon set — use the `AllIcons` story to browse all available icons."}}},argTypes:{name:{control:`select`,options:Object.keys(s),description:"The icon to render. Must be one of the built-in `IconTypes`.",table:{type:{summary:`IconTypes`}}},className:{control:`text`,description:`Additional CSS class names for custom styling`},style:{control:`object`,description:"Inline styles — use `width` and `height` to control icon size"},fill:{control:`color`,description:"SVG `fill` attribute — overrides the colour inherited from CSS"},tooltip:{control:`text`,description:`Tooltip shown on hover and keyboard focus. An icon with a tooltip becomes focusable and is announced as an image labelled with the tooltip text.`,table:{type:{summary:`string | { content: string; placement?: "top" | "bottom" | "left" | "right"; delay?: number; disabled?: boolean; className?: string }`}}}}},f={args:{name:`StarFilled`,style:{width:32,height:32}},parameters:{docs:{description:{story:`Single icon. Use the Controls panel to pick any icon by name and adjust its colour or size.`}}}},p={name:`All Icons`,render:()=>(0,l.jsx)(u,{}),parameters:{docs:{description:{story:`Browse every icon in the library. Search by name to filter results. Click any icon to copy its name to the clipboard.`}}}},m={name:`Sizes`,render:()=>(0,l.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:24},children:[16,24,32,48].map(e=>(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,l.jsx)(a,{name:`StarFilled`,style:{width:e,height:e}}),(0,l.jsxs)(`span`,{style:{fontSize:12,color:`#555`},children:[e,`px`]})]},e))}),parameters:{docs:{description:{story:"Icon size is controlled via the `style` prop — pass `width` and `height` values in pixels."}}}},h={name:`Custom Color`,render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,l.jsx)(a,{name:`HeartFilled`,style:{width:28,height:28},fill:`#ef4444`}),(0,l.jsx)(a,{name:`StarFilled`,style:{width:28,height:28},fill:`#f59e0b`}),(0,l.jsx)(a,{name:`CheckCircle`,style:{width:28,height:28},fill:`#22c55e`}),(0,l.jsx)(a,{name:`Cloud`,style:{width:28,height:28},fill:`#3b82f6`}),(0,l.jsx)(a,{name:`Bell`,style:{width:28,height:28},fill:`#8b5cf6`})]}),parameters:{docs:{description:{story:"Pass a `fill` colour directly to the SVG element to override the default inherited colour."}}}},g={name:`With Tooltip`,render:()=>(0,l.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`,padding:`40px 0`},children:[(0,l.jsx)(`span`,{children:`Wind chill`}),(0,l.jsx)(a,{name:`QuestionCircle`,style:{width:18,height:18,fill:`var(--text-color-secondary)`},tooltip:`How cold it feels on exposed skin,
based on air temperature and wind speed`})]}),parameters:{docs:{description:{story:'A typical help icon. With a `tooltip` the icon is no longer decorative: it gets `role="img"`, an `aria-label` and `tabIndex={0}` (all can be overridden via props).'}}}},_=[`Default`,`AllIcons`,`Sizes`,`CustomColor`,`WithTooltip`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'StarFilled',
    style: {
      width: 32,
      height: 32
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Single icon. Use the Controls panel to pick any icon by name and adjust its colour or size.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'All Icons',
  render: () => <AllIconsDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Browse every icon in the library. Search by name to filter results. Click any icon to copy its name to the clipboard.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 24
  }}>
            {([16, 24, 32, 48] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }}>
                    <Icon name='StarFilled' style={{
        width: size,
        height: size
      }} />
                    <span style={{
        fontSize: 12,
        color: '#555'
      }}>{size}px</span>
                </div>)}
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Icon size is controlled via the \`style\` prop — pass \`width\` and \`height\` values in pixels.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Custom Color',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
            <Icon name='HeartFilled' style={{
      width: 28,
      height: 28
    }} fill='#ef4444' />
            <Icon name='StarFilled' style={{
      width: 28,
      height: 28
    }} fill='#f59e0b' />
            <Icon name='CheckCircle' style={{
      width: 28,
      height: 28
    }} fill='#22c55e' />
            <Icon name='Cloud' style={{
      width: 28,
      height: 28
    }} fill='#3b82f6' />
            <Icon name='Bell' style={{
      width: 28,
      height: 28
    }} fill='#8b5cf6' />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Pass a \`fill\` colour directly to the SVG element to override the default inherited colour.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Tooltip',
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    padding: '40px 0'
  }}>
            <span>Wind chill</span>
            <Icon name='QuestionCircle' style={{
      width: 18,
      height: 18,
      fill: 'var(--text-color-secondary)'
    }} tooltip={'How cold it feels on exposed skin,\\nbased on air temperature and wind speed'} />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'A typical help icon. With a \`tooltip\` the icon is no longer decorative: it gets \`role="img"\`, an \`aria-label\` and \`tabIndex={0}\` (all can be overridden via props).'
      }
    }
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{p as AllIcons,h as CustomColor,f as Default,m as Sizes,g as WithTooltip,_ as __namedExportsOrder,d as default};