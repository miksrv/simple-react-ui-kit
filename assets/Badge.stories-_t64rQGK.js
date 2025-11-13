import{j as e}from"./index-n4Hpgybw.js";import{B as a}from"./Table-Cj5XwRKm.js";import"./iframe-DZqAIbXp.js";import"./index-BTYdBKT_.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Components/Badge",component:a,tags:["autodocs"],argTypes:{label:{control:"text"},icon:{control:"select",options:["Close","Check","Alert","Wind","Point"]},size:{control:{type:"inline-radio"},options:["small","medium","large"],table:{type:{summary:'"small", "medium", "large"'}}},onClickRemove:{action:"remove"},style:{control:"object"}},parameters:{docs:{description:{component:"Badge component for status and labels."}}}},o={args:{label:"Default Badge",size:"medium",icon:"Wind"}},r={args:{label:"Removable Badge",size:"medium",icon:"Point"},parameters:{docs:{description:{story:"Badge with removal action."}}}},n={args:{size:"medium",label:"Badge Without Icon"}},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Happy",icon:e.jsx("span",{role:"img","aria-label":"happy",children:"😊"}),size:"medium"}),e.jsx(a,{label:"Cool",icon:e.jsx("span",{role:"img","aria-label":"cool",children:"😎"}),size:"medium"}),e.jsx(a,{label:"Surprised",icon:e.jsx("span",{role:"img","aria-label":"surprised",children:"😲"}),size:"medium"}),e.jsx(a,{label:"Love",icon:e.jsx("span",{role:"img","aria-label":"love",children:"😍"}),size:"medium"})]}),name:"With Emoji Icons"},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Blue BG + Emoji",icon:e.jsx("span",{role:"img","aria-label":"star",children:"⭐️"}),size:"medium",style:{backgroundColor:"#2196f3",color:"#fff",marginLeft:8}}),e.jsx(a,{label:"Green BG",size:"medium",style:{backgroundColor:"#4caf50",color:"#fff",marginLeft:8}}),e.jsx(a,{label:"Yellow BG + Emoji",icon:e.jsx("span",{role:"img","aria-label":"fire",children:"🔥"}),size:"medium",style:{backgroundColor:"#ffeb3b",color:"#222",marginLeft:8}}),e.jsx(a,{label:"Gray BG",size:"medium",style:{backgroundColor:"#bdbdbd",color:"#222",marginLeft:8}})]}),name:"Badge With Custom Background"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Badge',
    size: 'medium',
    icon: 'Wind'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Removable Badge',
    size: 'medium',
    icon: 'Point'
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge with removal action.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    label: 'Badge Without Icon'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <Badge label='Happy' icon={<span role='img' aria-label='happy'>
                        😊
                    </span>} size='medium' />
            <Badge label='Cool' icon={<span role='img' aria-label='cool'>
                        😎
                    </span>} size='medium' />
            <Badge label='Surprised' icon={<span role='img' aria-label='surprised'>
                        😲
                    </span>} size='medium' />
            <Badge label='Love' icon={<span role='img' aria-label='love'>
                        😍
                    </span>} size='medium' />
        </>,
  name: 'With Emoji Icons'
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <Badge label='Blue BG + Emoji' icon={<span role='img' aria-label='star'>
                        ⭐️
                    </span>} size='medium' style={{
      backgroundColor: '#2196f3',
      color: '#fff',
      marginLeft: 8
    }} />
            <Badge label='Green BG' size='medium' style={{
      backgroundColor: '#4caf50',
      color: '#fff',
      marginLeft: 8
    }} />
            <Badge label='Yellow BG + Emoji' icon={<span role='img' aria-label='fire'>
                        🔥
                    </span>} size='medium' style={{
      backgroundColor: '#ffeb3b',
      color: '#222',
      marginLeft: 8
    }} />
            <Badge label='Gray BG' size='medium' style={{
      backgroundColor: '#bdbdbd',
      color: '#222',
      marginLeft: 8
    }} />
        </>,
  name: 'Badge With Custom Background'
}`,...i.parameters?.docs?.source}}};const p=["Default","Removable","WithoutIcon","EmojiIcons","CustomBackground"];export{i as CustomBackground,o as Default,s as EmojiIcons,r as Removable,n as WithoutIcon,p as __namedExportsOrder,u as default};
