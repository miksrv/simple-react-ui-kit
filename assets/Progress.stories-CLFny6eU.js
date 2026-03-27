import{j as e}from"./index-BNGFX5oi.js";import"./iframe-NGxwQjTZ.js";import"./Table-DadTRiB0.js";import{P as r}from"./Progress-WcxM7vEd.js";import"./index-B53Eu0ub.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Components/Progress",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"A horizontal progress bar that visualises a completion percentage. Supports four semantic colour themes, a configurable bar height, and accepts standard `HTMLDivElement` attributes for layout control."}}},argTypes:{value:{control:{type:"number",min:0,max:100},description:"Current progress value as a percentage (0–100)",table:{type:{summary:"number"}}},color:{control:"select",options:["main","red","orange","green"],description:"Colour theme applied to the filled portion of the bar",table:{defaultValue:{summary:"main"},type:{summary:'"main" | "red" | "orange" | "green"'}}},height:{control:{type:"number",min:1,max:24},description:"Height of the progress bar in pixels",table:{type:{summary:"number"}}},className:{control:"text",description:"Additional CSS class names for custom styling"}}},a={args:{value:50,color:"main"},parameters:{docs:{description:{story:"Default progress bar at 50%. Use the Controls panel to adjust the value, colour, and height."}}}},s={name:"Color Themes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:[{color:"main",value:65,label:"Main"},{color:"green",value:80,label:"Green"},{color:"orange",value:45,label:"Orange"},{color:"red",value:25,label:"Red"}].map(({color:n,value:l,label:i})=>e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:4},children:[e.jsx("span",{children:i}),e.jsxs("span",{children:[l,"%"]})]}),e.jsx(r,{value:l,color:n})]},n))}),parameters:{docs:{description:{story:"All four colour themes stacked with labelled values."}}}},t={name:"Custom Height",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:[e.jsx(r,{value:60,height:3}),e.jsx(r,{value:60,height:6}),e.jsx(r,{value:60,height:10}),e.jsx(r,{value:60,height:16})]}),parameters:{docs:{description:{story:"The same value rendered at different `height` settings (3px, 6px, 10px, 16px)."}}}},o={name:"All States (0% to 100%)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:[0,25,50,75,100].map(n=>e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:4},children:[e.jsx("span",{style:{color:n===0?"#999":n===100?"#16a34a":void 0},children:n===0?"Not started":n===100?"Complete":"In progress"}),e.jsxs("span",{children:[n,"%"]})]}),e.jsx(r,{value:n,color:n===100?"green":"main"})]},n))}),parameters:{docs:{description:{story:"Progress bar at five milestone values: 0%, 25%, 50%, 75%, and 100%."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const v=["Default","Colors","CustomHeight","AllStates"];export{o as AllStates,s as Colors,t as CustomHeight,a as Default,v as __namedExportsOrder,h as default};
