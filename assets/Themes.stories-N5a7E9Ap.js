import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./Badge-CZFDbGTW.js";import{n as o,t as s}from"./Button-B_2uaDfv.js";import{n as c,t as l}from"./Checkbox-BarREgwI.js";import{n as u,t as d}from"./Container-zbbpx6Z-.js";import{n as f,t as p}from"./Input-DAuc9ZK-.js";import{n as m,t as h}from"./Message-Q3tVtlno.js";import{n as g,t as _}from"./Progress-DkjzaG0a.js";import{n as v,t as y}from"./Select-BlfX_5Ns.js";import{n as b,t as x}from"./Table-DszQE8iN.js";import{n as S,t as C}from"./TextArea-Coz_4K2G.js";var w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=t((()=>{w=e(n(),1),i(),o(),c(),u(),f(),m(),g(),v(),b(),S(),T=r(),E={title:`Foundations/Themes`,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:'The kit ships a light and a dark colour set in `theme.css`. Switch the whole page with `<html data-theme="dark">`, or put `data-theme="dark"` on any element to make only that subtree dark. Only colours change between themes; sizes, radii and motion are shared. The toolbar switcher sets the attribute on `<html>`; the stories below force a theme on a wrapper.'}}}},D=[{key:`design`,value:`Design`},{key:`dev`,value:`Development`},{key:`qa`,value:`QA`}],O=[{id:1,name:`Monument of Glory`,category:`Monument`,status:`Published`},{id:2,name:`Zhiguli Brewery`,category:`Architecture`,status:`Draft`}],k=()=>{let[e,t]=(0,w.useState)([`design`]),[n,r]=(0,w.useState)(!0);return(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-4)`},children:[(0,T.jsx)(d,{title:`Edit place`,action:(0,T.jsx)(s,{size:`small`,mode:`link`,icon:`Close`}),children:(0,T.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-4)`},children:[(0,T.jsx)(p,{label:`Title`,required:!0,placeholder:`Place name`,defaultValue:`Monument of Glory`}),(0,T.jsx)(y,{label:`Tags`,multiple:!0,searchable:!0,placeholder:`Pick tags`,options:D,value:e,onSelect:e=>t(e?.map(e=>e.key)??[])}),(0,T.jsx)(C,{label:`Description`,placeholder:`A few words about the place`,rows:3}),(0,T.jsx)(p,{label:`Email`,error:`Please enter a valid email address`,defaultValue:`not-an-email`}),(0,T.jsx)(l,{label:`Publish immediately`,checked:n,onChange:e=>r(e.target.checked)}),(0,T.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`,justifyContent:`flex-end`},children:[(0,T.jsx)(s,{mode:`outline`,label:`Cancel`}),(0,T.jsx)(s,{mode:`secondary`,label:`Preview`}),(0,T.jsx)(s,{mode:`primary`,label:`Save`})]})]})}),(0,T.jsx)(h,{type:`success`,title:`Saved`,children:`All changes were saved.`}),(0,T.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`,flexWrap:`wrap`},children:[(0,T.jsx)(a,{label:`Monument`}),(0,T.jsx)(a,{label:`Removable`,onClickRemove:()=>void 0}),(0,T.jsx)(a,{label:`Small`,size:`small`})]}),(0,T.jsx)(_,{value:64,color:`main`}),(0,T.jsx)(d,{children:(0,T.jsx)(x,{size:`small`,columns:[{header:`Name`,accessor:`name`,isSortable:!0},{header:`Category`,accessor:`category`},{header:`Status`,accessor:`status`}],data:O})})]})},A=({theme:e})=>(0,T.jsxs)(`div`,{"data-theme":e,style:{flex:1,minWidth:320,padding:`var(--space-6)`,background:`var(--body-background)`,color:`var(--text-color-primary)`,fontFamily:`var(--font-family)`,fontSize:`var(--font-size)`,lineHeight:`var(--line-height)`},children:[(0,T.jsxs)(`div`,{style:{marginBottom:`var(--space-4)`,fontSize:`var(--font-size-small)`,fontWeight:500,letterSpacing:`.08em`,textTransform:`uppercase`,color:`var(--text-color-secondary)`},children:[`data-theme="`,e,`"`]}),(0,T.jsx)(k,{})]}),j={name:`Light and dark side by side`,render:()=>(0,T.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,minHeight:`100vh`},children:[(0,T.jsx)(A,{theme:`light`}),(0,T.jsx)(A,{theme:`dark`})]})},M={name:`Dark theme`,parameters:{themes:{themeOverride:`dark`}},render:()=>(0,T.jsx)(`div`,{style:{maxWidth:640,margin:`0 auto`,padding:`var(--space-6)`},children:(0,T.jsx)(k,{})})},N={name:`Light theme`,parameters:{themes:{themeOverride:`light`}},render:()=>(0,T.jsx)(`div`,{style:{maxWidth:640,margin:`0 auto`,padding:`var(--space-6)`},children:(0,T.jsx)(k,{})})},P=[`SideBySide`,`Dark`,`Light`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Light and dark side by side',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    minHeight: '100vh'
  }}>
            <Panel theme='light' />
            <Panel theme='dark' />
        </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Dark theme',
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  render: () => <div style={{
    maxWidth: 640,
    margin: '0 auto',
    padding: 'var(--space-6)'
  }}>
            <Sample />
        </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Light theme',
  parameters: {
    themes: {
      themeOverride: 'light'
    }
  },
  render: () => <div style={{
    maxWidth: 640,
    margin: '0 auto',
    padding: 'var(--space-6)'
  }}>
            <Sample />
        </div>
}`,...N.parameters?.docs?.source}}}})))()}F();export{M as Dark,N as Light,j as SideBySide,P as __namedExportsOrder,E as default};