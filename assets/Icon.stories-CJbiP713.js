import{j as e}from"./index-Bbd3PiGO.js";import{r as p}from"./iframe-CMmsCrn5.js";import{I as s}from"./Table-DWFI1cym.js";import{i as h}from"./types-DHzuYu1v.js";import"./index-ThbIq_AC.js";import"./preload-helper-PPVm8Dsz.js";const f=()=>{const[n,m]=p.useState(""),[y,c]=p.useState(null),d=Object.keys(h).filter(t=>t.toLowerCase().includes(n.toLowerCase())),u=async t=>{await navigator.clipboard.writeText(t),c(t),setTimeout(()=>c(null),1500)};return e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"Search icons...",value:n,onChange:t=>m(t.target.value),style:{padding:"8px 12px",fontSize:14,border:"1px solid #d1d5db",borderRadius:6,width:"100%",maxWidth:300,marginBottom:20,outline:"none"}}),d.length===0&&e.jsxs("p",{style:{color:"#999"},children:['No icons found for "',n,'"']}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:d.map(t=>e.jsxs("div",{title:`Click to copy: ${t}`,onClick:()=>u(t),style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6,width:80,cursor:"pointer",padding:"8px 4px",borderRadius:6,transition:"background 0.15s"},onMouseEnter:a=>a.currentTarget.style.background="#f3f4f6",onMouseLeave:a=>a.currentTarget.style.background="transparent",children:[e.jsx(s,{name:t,style:{width:24,height:24}}),e.jsx("span",{style:{fontSize:11,textAlign:"center",color:"#555",wordBreak:"break-word"},children:t}),y===t&&e.jsx("span",{style:{fontSize:10,color:"#16a34a"},children:"Copied!"})]},t))})]})},I={title:"Components/Icon",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"An inline SVG icon component. Size is controlled via CSS (`width` / `height` through `style` or `className`). The `name` prop selects from the built-in icon set — use the `AllIcons` story to browse all available icons."}}},argTypes:{name:{control:"select",options:Object.keys(h),description:"The icon to render. Must be one of the built-in `IconTypes`.",table:{type:{summary:"IconTypes"}}},className:{control:"text",description:"Additional CSS class names for custom styling"},style:{control:"object",description:"Inline styles — use `width` and `height` to control icon size"},fill:{control:"color",description:"SVG `fill` attribute — overrides the colour inherited from CSS"}}},o={args:{name:"StarFilled",style:{width:32,height:32}},parameters:{docs:{description:{story:"Single icon. Use the Controls panel to pick any icon by name and adjust its colour or size."}}}},r={name:"All Icons",render:()=>e.jsx(f,{}),parameters:{docs:{description:{story:"Browse every icon in the library. Search by name to filter results. Click any icon to copy its name to the clipboard."}}}},i={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:24},children:[16,24,32,48].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(s,{name:"StarFilled",style:{width:n,height:n}}),e.jsxs("span",{style:{fontSize:12,color:"#555"},children:[n,"px"]})]},n))}),parameters:{docs:{description:{story:"Icon size is controlled via the `style` prop — pass `width` and `height` values in pixels."}}}},l={name:"Custom Color",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(s,{name:"HeartFilled",style:{width:28,height:28},fill:"#ef4444"}),e.jsx(s,{name:"StarFilled",style:{width:28,height:28},fill:"#f59e0b"}),e.jsx(s,{name:"CheckCircle",style:{width:28,height:28},fill:"#22c55e"}),e.jsx(s,{name:"Cloud",style:{width:28,height:28},fill:"#3b82f6"}),e.jsx(s,{name:"Bell",style:{width:28,height:28},fill:"#8b5cf6"})]}),parameters:{docs:{description:{story:"Pass a `fill` colour directly to the SVG element to override the default inherited colour."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'All Icons',
  render: () => <AllIconsDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Browse every icon in the library. Search by name to filter results. Click any icon to copy its name to the clipboard.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const v=["Default","AllIcons","Sizes","CustomColor"];export{r as AllIcons,l as CustomColor,o as Default,i as Sizes,v as __namedExportsOrder,I as default};
