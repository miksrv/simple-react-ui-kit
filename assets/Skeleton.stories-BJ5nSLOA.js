import{j as e}from"./index-Bbd3PiGO.js";import"./iframe-CMmsCrn5.js";import{e as n}from"./Table-DWFI1cym.js";import"./index-ThbIq_AC.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Components/Skeleton",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A pulsing placeholder element used to indicate loading content. Size it via `style` (width / height) or `className`. Combine multiple Skeleton instances to replicate the shape of the content being loaded."}}},argTypes:{className:{control:"text",description:"Additional CSS class names for custom styling"},style:{control:"object",description:"Inline styles — use `width`, `height`, `borderRadius`, etc. to shape the placeholder"}}},t={args:{style:{width:200,height:20,borderRadius:4}},parameters:{docs:{description:{story:"A single skeleton block. Adjust `width` and `height` in the Controls panel."}}}},r={name:"Text Placeholder",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:400},children:[e.jsx(n,{style:{width:"60%",height:20,borderRadius:4}}),e.jsx(n,{style:{width:"100%",height:14,borderRadius:4}}),e.jsx(n,{style:{width:"100%",height:14,borderRadius:4}}),e.jsx(n,{style:{width:"80%",height:14,borderRadius:4}}),e.jsx(n,{style:{width:"70%",height:14,borderRadius:4}})]}),parameters:{docs:{description:{story:"Simulates a heading followed by a paragraph of body text — a common loading pattern for article or description sections."}}}},s={name:"Card Placeholder",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,maxWidth:500,padding:16,border:"1px solid #e5e7eb",borderRadius:8},children:[e.jsx(n,{style:{width:64,height:64,borderRadius:"50%",flexShrink:0}}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:8,justifyContent:"center"},children:[e.jsx(n,{style:{width:"50%",height:18,borderRadius:4}}),e.jsx(n,{style:{width:"100%",height:13,borderRadius:4}}),e.jsx(n,{style:{width:"80%",height:13,borderRadius:4}})]})]}),parameters:{docs:{description:{story:"A card skeleton with a circular avatar and text lines — typical for user profile or list item loading states."}}}},i={name:"Table Placeholder",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,maxWidth:600},children:Array.from({length:5}).map((o,d)=>e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(n,{style:{width:40,height:16,borderRadius:4}}),e.jsx(n,{style:{flex:2,height:16,borderRadius:4}}),e.jsx(n,{style:{flex:1,height:16,borderRadius:4}}),e.jsx(n,{style:{flex:1,height:16,borderRadius:4}})]},d))}),parameters:{docs:{description:{story:"Simulates a loading table with five rows and four columns — mirrors the shape of the `Table` component loading state."}}}},a={name:"Custom (Button / Badge Shape)",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(n,{style:{width:120,height:36,borderRadius:6}}),e.jsx(n,{style:{width:80,height:36,borderRadius:6}}),e.jsx(n,{style:{width:60,height:22,borderRadius:20}}),e.jsx(n,{style:{width:80,height:22,borderRadius:20}})]}),parameters:{docs:{description:{story:"Skeleton shapes can mimic buttons (rounded-rectangle) or badges (pill) by adjusting `width`, `height`, and `borderRadius`."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      width: 200,
      height: 20,
      borderRadius: 4
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'A single skeleton block. Adjust \`width\` and \`height\` in the Controls panel.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Text Placeholder',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    maxWidth: 400
  }}>
            <Skeleton style={{
      width: '60%',
      height: 20,
      borderRadius: 4
    }} />
            <Skeleton style={{
      width: '100%',
      height: 14,
      borderRadius: 4
    }} />
            <Skeleton style={{
      width: '100%',
      height: 14,
      borderRadius: 4
    }} />
            <Skeleton style={{
      width: '80%',
      height: 14,
      borderRadius: 4
    }} />
            <Skeleton style={{
      width: '70%',
      height: 14,
      borderRadius: 4
    }} />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Simulates a heading followed by a paragraph of body text — a common loading pattern for article or description sections.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Card Placeholder',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    maxWidth: 500,
    padding: 16,
    border: '1px solid #e5e7eb',
    borderRadius: 8
  }}>
            {/* Avatar / image block */}
            <Skeleton style={{
      width: 64,
      height: 64,
      borderRadius: '50%',
      flexShrink: 0
    }} />

            {/* Text lines */}
            <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      justifyContent: 'center'
    }}>
                <Skeleton style={{
        width: '50%',
        height: 18,
        borderRadius: 4
      }} />
                <Skeleton style={{
        width: '100%',
        height: 13,
        borderRadius: 4
      }} />
                <Skeleton style={{
        width: '80%',
        height: 13,
        borderRadius: 4
      }} />
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'A card skeleton with a circular avatar and text lines — typical for user profile or list item loading states.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Table Placeholder',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    maxWidth: 600
  }}>
            {Array.from({
      length: 5
    }).map((_, i) => <div key={i} style={{
      display: 'flex',
      gap: 12
    }}>
                    <Skeleton style={{
        width: 40,
        height: 16,
        borderRadius: 4
      }} />
                    <Skeleton style={{
        flex: 2,
        height: 16,
        borderRadius: 4
      }} />
                    <Skeleton style={{
        flex: 1,
        height: 16,
        borderRadius: 4
      }} />
                    <Skeleton style={{
        flex: 1,
        height: 16,
        borderRadius: 4
      }} />
                </div>)}
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Simulates a loading table with five rows and four columns — mirrors the shape of the \`Table\` component loading state.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Custom (Button / Badge Shape)',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
            <Skeleton style={{
      width: 120,
      height: 36,
      borderRadius: 6
    }} />
            <Skeleton style={{
      width: 80,
      height: 36,
      borderRadius: 6
    }} />
            <Skeleton style={{
      width: 60,
      height: 22,
      borderRadius: 20
    }} />
            <Skeleton style={{
      width: 80,
      height: 22,
      borderRadius: 20
    }} />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Skeleton shapes can mimic buttons (rounded-rectangle) or badges (pill) by adjusting \`width\`, \`height\`, and \`borderRadius\`.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const g=["Default","TextPlaceholder","CardPlaceholder","TablePlaceholder","Custom"];export{s as CardPlaceholder,a as Custom,t as Default,i as TablePlaceholder,r as TextPlaceholder,g as __namedExportsOrder,u as default};
