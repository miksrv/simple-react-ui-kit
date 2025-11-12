import{j as c}from"./index-Bp6KwiIU.js";import"./iframe-Ce9mQgAO.js";import{d as t}from"./Table-L-5-2ert.js";import"./index-CtZYqbhq.js";import"./preload-helper-PPVm8Dsz.js";const d="_progress_wvyjc_1",_="_line_wvyjc_8",v="_main_wvyjc_15",y="_green_wvyjc_18",x="_red_wvyjc_21",j="_orange_wvyjc_24",n={progress:d,line:_,main:v,green:y,red:x,orange:j},h=({value:m=0,height:l=2,color:g="main",className:p,...u})=>{const i=Math.min(Math.max(m,0),100);return c.jsx("div",{className:t(n.progress,p),style:{height:`${l}px`},...u,children:c.jsx("div",{className:t(n.line,n[g]),style:{width:`${i}%`}})})},O={title:"Components/Progress",component:h,tags:["autodocs"],argTypes:{value:{control:{type:"number",min:0,max:100}},height:{control:{type:"number",min:2,max:20}},color:{control:"select",options:["main","red","orange","green"]},className:{control:"text"}}},e={args:{value:50}},r={args:{value:80,color:"red"}},s={args:{value:30,color:"orange"}},a={args:{value:100,color:"green"}},o={args:{value:60,color:"main",className:"custom-class"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 80,
    color: 'red'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 30,
    color: 'orange'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    color: 'green'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    color: 'main',
    className: 'custom-class'
  }
}`,...o.parameters?.docs?.source}}};const R=["Default","Red","Orange","Green","CustomClass"];export{o as CustomClass,e as Default,a as Green,s as Orange,r as Red,R as __namedExportsOrder,O as default};
