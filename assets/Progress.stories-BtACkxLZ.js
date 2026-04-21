import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-BeWxJaLi.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{o as r,t as i}from"./src-ChBdo3qK.js";var a,o,s,c,l,u,d;e((()=>{t(),i(),a=n(),o={title:`Components/Progress`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"A horizontal progress bar that visualises a completion percentage. Supports four semantic colour themes, a configurable bar height, and accepts standard `HTMLDivElement` attributes for layout control."}}},argTypes:{value:{control:{type:`number`,min:0,max:100},description:`Current progress value as a percentage (0–100)`,table:{type:{summary:`number`}}},color:{control:`select`,options:[`main`,`red`,`orange`,`green`],description:`Colour theme applied to the filled portion of the bar`,table:{defaultValue:{summary:`main`},type:{summary:`"main" | "red" | "orange" | "green"`}}},height:{control:{type:`number`,min:1,max:24},description:`Height of the progress bar in pixels`,table:{type:{summary:`number`}}},className:{control:`text`,description:`Additional CSS class names for custom styling`}}},s={args:{value:50,color:`main`},parameters:{docs:{description:{story:`Default progress bar at 50%. Use the Controls panel to adjust the value, colour, and height.`}}}},c={name:`Color Themes`,render:()=>(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,maxWidth:400},children:[{color:`main`,value:65,label:`Main`},{color:`green`,value:80,label:`Green`},{color:`orange`,value:45,label:`Orange`},{color:`red`,value:25,label:`Red`}].map(({color:e,value:t,label:n})=>(0,a.jsxs)(`div`,{children:[(0,a.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:13,marginBottom:4},children:[(0,a.jsx)(`span`,{children:n}),(0,a.jsxs)(`span`,{children:[t,`%`]})]}),(0,a.jsx)(r,{value:t,color:e})]},e))}),parameters:{docs:{description:{story:`All four colour themes stacked with labelled values.`}}}},l={name:`Custom Height`,render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,maxWidth:400},children:[(0,a.jsx)(r,{value:60,height:3}),(0,a.jsx)(r,{value:60,height:6}),(0,a.jsx)(r,{value:60,height:10}),(0,a.jsx)(r,{value:60,height:16})]}),parameters:{docs:{description:{story:"The same value rendered at different `height` settings (3px, 6px, 10px, 16px)."}}}},u={name:`All States (0% to 100%)`,render:()=>(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,maxWidth:400},children:[0,25,50,75,100].map(e=>(0,a.jsxs)(`div`,{children:[(0,a.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:13,marginBottom:4},children:[(0,a.jsx)(`span`,{style:{color:e===0?`#999`:e===100?`#16a34a`:void 0},children:e===0?`Not started`:e===100?`Complete`:`In progress`}),(0,a.jsxs)(`span`,{children:[e,`%`]})]}),(0,a.jsx)(r,{value:e,color:e===100?`green`:`main`})]},e))}),parameters:{docs:{description:{story:`Progress bar at five milestone values: 0%, 25%, 50%, 75%, and 100%.`}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    color: 'main'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default progress bar at 50%. Use the Controls panel to adjust the value, colour, and height.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Color Themes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 400
  }}>
            {([{
      color: 'main',
      value: 65,
      label: 'Main'
    }, {
      color: 'green',
      value: 80,
      label: 'Green'
    }, {
      color: 'orange',
      value: 45,
      label: 'Orange'
    }, {
      color: 'red',
      value: 25,
      label: 'Red'
    }] as const).map(({
      color,
      value,
      label
    }) => <div key={color}>
                    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 13,
        marginBottom: 4
      }}>
                        <span>{label}</span>
                        <span>{value}%</span>
                    </div>
                    <Progress value={value} color={color} />
                </div>)}
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'All four colour themes stacked with labelled values.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Custom Height',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 400
  }}>
            <Progress value={60} height={3} />
            <Progress value={60} height={6} />
            <Progress value={60} height={10} />
            <Progress value={60} height={16} />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'The same value rendered at different \`height\` settings (3px, 6px, 10px, 16px).'
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'All States (0% to 100%)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 400
  }}>
            {[0, 25, 50, 75, 100].map(value => <div key={value}>
                    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 13,
        marginBottom: 4
      }}>
                        <span style={{
          color: value === 0 ? '#999' : value === 100 ? '#16a34a' : undefined
        }}>
                            {value === 0 ? 'Not started' : value === 100 ? 'Complete' : 'In progress'}
                        </span>
                        <span>{value}%</span>
                    </div>
                    <Progress value={value} color={value === 100 ? 'green' : value === 0 ? 'main' : 'main'} />
                </div>)}
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Progress bar at five milestone values: 0%, 25%, 50%, 75%, and 100%.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Colors`,`CustomHeight`,`AllStates`]}))();export{u as AllStates,c as Colors,l as CustomHeight,s as Default,d as __namedExportsOrder,o as default};