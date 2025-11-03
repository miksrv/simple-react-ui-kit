import{j as t}from"./index-YS-ik7lH.js";import{r as s}from"./iframe-CLkCKeAB.js";import{P as e,a as i}from"./Table-Cpn6-IjM.js";import"./index-DvdsEXJc.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Components/Popout",component:e},p=n=>{const r=s.useRef(null);return t.jsx("div",{style:{position:"relative",height:130},children:t.jsx(e,{ref:r,...n,children:t.jsxs("div",{style:{padding:"10px"},children:[t.jsx("p",{children:"This is the popout content!"}),t.jsx(i,{onClick:()=>alert("Action clicked!"),children:"Perform Action"})]})})})},o=p.bind({});o.args={trigger:"Open Popout",position:"left",className:"custom-popout"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const popoutRef = useRef<PopoutHandleProps>(null);
  return <div style={{
    position: 'relative',
    height: 130
  }}>
            <Popout ref={popoutRef} {...args}>
                <div style={{
        padding: '10px'
      }}>
                    <p>This is the popout content!</p>
                    <Button onClick={() => alert('Action clicked!')}>{'Perform Action'}</Button>
                </div>
            </Popout>
        </div>;
}`,...o.parameters?.docs?.source}}};const f=["Default"];export{o as Default,f as __namedExportsOrder,m as default};
