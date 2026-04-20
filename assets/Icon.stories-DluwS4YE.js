import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-BeWxJaLi.js";import{t as r}from"./jsx-runtime-BRDTPpDF.js";import{b as i,t as a,y as o}from"./src-BA6FstiM.js";var s,c,l,u,d,f,p,m,h;t((()=>{s=e(n(),1),a(),c=r(),l=()=>{let[e,t]=(0,s.useState)(``),[n,r]=(0,s.useState)(null),a=Object.keys(o).filter(t=>t.toLowerCase().includes(e.toLowerCase())),l=async e=>{await navigator.clipboard.writeText(e),r(e),setTimeout(()=>r(null),1500)};return(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`input`,{type:`text`,placeholder:`Search icons...`,value:e,onChange:e=>t(e.target.value),style:{padding:`8px 12px`,fontSize:14,border:`1px solid #d1d5db`,borderRadius:6,width:`100%`,maxWidth:300,marginBottom:20,outline:`none`}}),a.length===0&&(0,c.jsxs)(`p`,{style:{color:`#999`},children:[`No icons found for "`,e,`"`]}),(0,c.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`16px`},children:a.map(e=>(0,c.jsxs)(`div`,{title:`Click to copy: ${e}`,onClick:()=>l(e),style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6,width:80,cursor:`pointer`,padding:`8px 4px`,borderRadius:6,transition:`background 0.15s`},onMouseEnter:e=>e.currentTarget.style.background=`#f3f4f6`,onMouseLeave:e=>e.currentTarget.style.background=`transparent`,children:[(0,c.jsx)(i,{name:e,style:{width:24,height:24}}),(0,c.jsx)(`span`,{style:{fontSize:11,textAlign:`center`,color:`#555`,wordBreak:`break-word`},children:e}),n===e&&(0,c.jsx)(`span`,{style:{fontSize:10,color:`#16a34a`},children:`Copied!`})]},e))})]})},u={title:`Components/Icon`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"An inline SVG icon component. Size is controlled via CSS (`width` / `height` through `style` or `className`). The `name` prop selects from the built-in icon set — use the `AllIcons` story to browse all available icons."}}},argTypes:{name:{control:`select`,options:Object.keys(o),description:"The icon to render. Must be one of the built-in `IconTypes`.",table:{type:{summary:`IconTypes`}}},className:{control:`text`,description:`Additional CSS class names for custom styling`},style:{control:`object`,description:"Inline styles — use `width` and `height` to control icon size"},fill:{control:`color`,description:"SVG `fill` attribute — overrides the colour inherited from CSS"}}},d={args:{name:`StarFilled`,style:{width:32,height:32}},parameters:{docs:{description:{story:`Single icon. Use the Controls panel to pick any icon by name and adjust its colour or size.`}}}},f={name:`All Icons`,render:()=>(0,c.jsx)(l,{}),parameters:{docs:{description:{story:`Browse every icon in the library. Search by name to filter results. Click any icon to copy its name to the clipboard.`}}}},p={name:`Sizes`,render:()=>(0,c.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:24},children:[16,24,32,48].map(e=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:6},children:[(0,c.jsx)(i,{name:`StarFilled`,style:{width:e,height:e}}),(0,c.jsxs)(`span`,{style:{fontSize:12,color:`#555`},children:[e,`px`]})]},e))}),parameters:{docs:{description:{story:"Icon size is controlled via the `style` prop — pass `width` and `height` values in pixels."}}}},m={name:`Custom Color`,render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:16,alignItems:`center`},children:[(0,c.jsx)(i,{name:`HeartFilled`,style:{width:28,height:28},fill:`#ef4444`}),(0,c.jsx)(i,{name:`StarFilled`,style:{width:28,height:28},fill:`#f59e0b`}),(0,c.jsx)(i,{name:`CheckCircle`,style:{width:28,height:28},fill:`#22c55e`}),(0,c.jsx)(i,{name:`Cloud`,style:{width:28,height:28},fill:`#3b82f6`}),(0,c.jsx)(i,{name:`Bell`,style:{width:28,height:28},fill:`#8b5cf6`})]}),parameters:{docs:{description:{story:"Pass a `fill` colour directly to the SVG element to override the default inherited colour."}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'All Icons',
  render: () => <AllIconsDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Browse every icon in the library. Search by name to filter results. Click any icon to copy its name to the clipboard.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`,`AllIcons`,`Sizes`,`CustomColor`]}))();export{f as AllIcons,m as CustomColor,d as Default,p as Sizes,h as __namedExportsOrder,u as default};