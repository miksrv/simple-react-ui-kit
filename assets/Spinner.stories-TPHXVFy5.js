import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-BeWxJaLi.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{_ as r,t as i}from"./src-BA6FstiM.js";var a,o,s,c,l,u,d;e((()=>{t(),i(),a=n(),o={title:`Components/Spinner`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"An animated SVG loading spinner. Size is controlled via `style` (`width` / `height`) or `className`. The spinner inherits its colour from the surrounding CSS — override it with the `fill` prop or CSS variables."}}},argTypes:{className:{control:`text`,description:`Additional CSS class names for custom styling`},style:{control:`object`,description:"Inline styles — use `width` and `height` to control the spinner size"},fill:{control:`color`,description:`SVG fill colour — overrides the colour inherited from CSS context`}}},s={args:{style:{width:32,height:32}},parameters:{docs:{description:{story:"Default spinner at 32px. Use the Controls panel to change `width`, `height`, or `fill` colour."}}}},c={name:`Sizes`,render:()=>(0,a.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:24},children:[16,24,32,48,64].map(e=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,a.jsx)(r,{style:{width:e,height:e}}),(0,a.jsxs)(`span`,{style:{fontSize:12,color:`#666`},children:[e,`px`]})]},e))}),parameters:{docs:{description:{story:`The spinner at five common sizes: 16px, 24px, 32px, 48px, and 64px.`}}}},l={name:`Custom Color`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:24,alignItems:`center`,flexWrap:`wrap`},children:[(0,a.jsx)(r,{style:{width:32,height:32},fill:`#3b82f6`}),(0,a.jsx)(r,{style:{width:32,height:32},fill:`#ef4444`}),(0,a.jsx)(r,{style:{width:32,height:32},fill:`#22c55e`}),(0,a.jsx)(r,{style:{width:32,height:32},fill:`#f59e0b`}),(0,a.jsx)(r,{style:{width:32,height:32},fill:`#8b5cf6`})]}),parameters:{docs:{description:{story:"Spinners with different `fill` colours applied directly to the SVG element."}}}},u={name:`Inline with Text`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,a.jsx)(r,{style:{width:16,height:16}}),(0,a.jsx)(`span`,{style:{fontSize:14},children:`Saving changes...`})]}),(0,a.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,padding:`12px 16px`,background:`#1e293b`,borderRadius:8,color:`#fff`},children:[(0,a.jsx)(r,{style:{width:20,height:20},fill:`#fff`}),(0,a.jsx)(`span`,{children:`Loading data, please wait...`})]})]}),parameters:{docs:{description:{story:`The spinner paired with text in different contexts — light background and dark banner — showing how it adapts to surrounding styles.`}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      width: 32,
      height: 32
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Default spinner at 32px. Use the Controls panel to change \`width\`, \`height\`, or \`fill\` colour.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 24
  }}>
            {[16, 24, 32, 48, 64].map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
                    <Spinner style={{
        width: size,
        height: size
      }} />
                    <span style={{
        fontSize: 12,
        color: '#666'
      }}>{size}px</span>
                </div>)}
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'The spinner at five common sizes: 16px, 24px, 32px, 48px, and 64px.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Custom Color',
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
            <Spinner style={{
      width: 32,
      height: 32
    }} fill='#3b82f6' />
            <Spinner style={{
      width: 32,
      height: 32
    }} fill='#ef4444' />
            <Spinner style={{
      width: 32,
      height: 32
    }} fill='#22c55e' />
            <Spinner style={{
      width: 32,
      height: 32
    }} fill='#f59e0b' />
            <Spinner style={{
      width: 32,
      height: 32
    }} fill='#8b5cf6' />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Spinners with different \`fill\` colours applied directly to the SVG element.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Inline with Text',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
            <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
                <Spinner style={{
        width: 16,
        height: 16
      }} />
                <span style={{
        fontSize: 14
      }}>Saving changes...</span>
            </div>
            <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 16px',
      background: '#1e293b',
      borderRadius: 8,
      color: '#fff'
    }}>
                <Spinner style={{
        width: 20,
        height: 20
      }} fill='#fff' />
                <span>Loading data, please wait...</span>
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'The spinner paired with text in different contexts — light background and dark banner — showing how it adapts to surrounding styles.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Sizes`,`CustomColor`,`InlineWithText`]}))();export{l as CustomColor,s as Default,u as InlineWithText,c as Sizes,d as __namedExportsOrder,o as default};