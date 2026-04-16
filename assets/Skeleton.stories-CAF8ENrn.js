import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-BeWxJaLi.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{i as r,t as i}from"./src-CA9VU0UJ.js";var a,o,s,c,l,u,d,f;e((()=>{t(),i(),a=n(),o={title:`Components/Skeleton`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"A pulsing placeholder element used to indicate loading content. Size it via `style` (width / height) or `className`. Combine multiple Skeleton instances to replicate the shape of the content being loaded."}}},argTypes:{className:{control:`text`,description:`Additional CSS class names for custom styling`},style:{control:`object`,description:"Inline styles — use `width`, `height`, `borderRadius`, etc. to shape the placeholder"}}},s={args:{style:{width:200,height:20,borderRadius:4}},parameters:{docs:{description:{story:"A single skeleton block. Adjust `width` and `height` in the Controls panel."}}}},c={name:`Text Placeholder`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,maxWidth:400},children:[(0,a.jsx)(r,{style:{width:`60%`,height:20,borderRadius:4}}),(0,a.jsx)(r,{style:{width:`100%`,height:14,borderRadius:4}}),(0,a.jsx)(r,{style:{width:`100%`,height:14,borderRadius:4}}),(0,a.jsx)(r,{style:{width:`80%`,height:14,borderRadius:4}}),(0,a.jsx)(r,{style:{width:`70%`,height:14,borderRadius:4}})]}),parameters:{docs:{description:{story:`Simulates a heading followed by a paragraph of body text — a common loading pattern for article or description sections.`}}}},l={name:`Card Placeholder`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:16,maxWidth:500,padding:16,border:`1px solid #e5e7eb`,borderRadius:8},children:[(0,a.jsx)(r,{style:{width:64,height:64,borderRadius:`50%`,flexShrink:0}}),(0,a.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,gap:8,justifyContent:`center`},children:[(0,a.jsx)(r,{style:{width:`50%`,height:18,borderRadius:4}}),(0,a.jsx)(r,{style:{width:`100%`,height:13,borderRadius:4}}),(0,a.jsx)(r,{style:{width:`80%`,height:13,borderRadius:4}})]})]}),parameters:{docs:{description:{story:`A card skeleton with a circular avatar and text lines — typical for user profile or list item loading states.`}}}},u={name:`Table Placeholder`,render:()=>(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:10,maxWidth:600},children:Array.from({length:5}).map((e,t)=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,a.jsx)(r,{style:{width:40,height:16,borderRadius:4}}),(0,a.jsx)(r,{style:{flex:2,height:16,borderRadius:4}}),(0,a.jsx)(r,{style:{flex:1,height:16,borderRadius:4}}),(0,a.jsx)(r,{style:{flex:1,height:16,borderRadius:4}})]},t))}),parameters:{docs:{description:{story:"Simulates a loading table with five rows and four columns — mirrors the shape of the `Table` component loading state."}}}},d={name:`Custom (Button / Badge Shape)`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`,flexWrap:`wrap`},children:[(0,a.jsx)(r,{style:{width:120,height:36,borderRadius:6}}),(0,a.jsx)(r,{style:{width:80,height:36,borderRadius:6}}),(0,a.jsx)(r,{style:{width:60,height:22,borderRadius:20}}),(0,a.jsx)(r,{style:{width:80,height:22,borderRadius:20}})]}),parameters:{docs:{description:{story:"Skeleton shapes can mimic buttons (rounded-rectangle) or badges (pill) by adjusting `width`, `height`, and `borderRadius`."}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Default`,`TextPlaceholder`,`CardPlaceholder`,`TablePlaceholder`,`Custom`]}))();export{l as CardPlaceholder,d as Custom,s as Default,u as TablePlaceholder,c as TextPlaceholder,f as __namedExportsOrder,o as default};