import{j as e,R as G}from"./index-Bp6KwiIU.js";import{r as l}from"./iframe-Ce9mQgAO.js";import{d as f,I as v,a as b}from"./Table-L-5-2ert.js";import"./index-CtZYqbhq.js";import"./preload-helper-PPVm8Dsz.js";const L="_overlay_1sbtf_46",R="_noInitialized_1sbtf_55",N="_hidden_1sbtf_59",H="_displayed_1sbtf_64",u={overlay:L,noInitialized:R,hidden:N,displayed:H},T=({open:n,parentRef:s,overlayId:o,onClose:r})=>{const[a,d]=l.useState(n||!1);return l.useEffect(()=>{const i=s?.current||document.body;let t=i.querySelector(`[data-overlay-id="${o}"]`);if(t||(t=document.createElement("div"),t.dataset.overlayId=o,t.setAttribute("role","button"),t.setAttribute("aria-label","Overlay"),t.tabIndex=0,t.onclick=r||null,t.className=f(u.overlay,!n&&u.noInitialized),i.appendChild(t)),a!==n)return t.className=f(u.overlay,n?u.displayed:u.hidden),d(n||!1),()=>{t&&i.contains(t)&&t.remove()}},[o,s,n,r]),null},z="_dialog_1lwi7_1",$="_header_1lwi7_20",A="_noBackLink_1lwi7_25",K="_innerButton_1lwi7_34",M="_closeButton_1lwi7_53",U="_content_1lwi7_67",c={dialog:z,header:$,noBackLink:A,innerButton:K,closeButton:M,content:U},x=({open:n,title:s,contentHeight:o,maxWidth:r="500px",backLinkCaption:a,showOverlay:d=!0,showBackLink:i,showCloseButton:t,parentRef:g,children:I,onBackClick:O,onCloseDialog:h,...D})=>{const _=l.useRef(null),[B,j]=l.useState({}),[C]=l.useState(()=>crypto.randomUUID()),E=()=>{const y=(g?.current||document.documentElement).clientHeight,w=_.current?.offsetHeight||0,S=(y-w)/2;j({maxWidth:r,top:`${S}px`})},k=l.useCallback(()=>{n?(E(),document.body.style.overflow="hidden"):document.body.style.overflow="auto"},[n]);return l.useEffect(()=>{k()},[n]),l.useEffect(()=>{const m=y=>{y.key==="Escape"&&n&&h?.()};return document.addEventListener("keydown",m),k(),()=>{document.removeEventListener("keydown",m)}},[n,h]),e.jsxs(e.Fragment,{children:[d&&e.jsx(T,{open:n,parentRef:g,overlayId:C,onClose:h}),n&&G.createPortal(e.jsxs("dialog",{...D,open:n,ref:_,className:c.dialog,style:B,children:[(s||i||t)&&e.jsxs("div",{className:f(c.header,!i&&c.noBackLink),children:[i&&e.jsxs("button",{className:c.innerButton,onClick:O,children:[e.jsx(v,{name:"KeyboardLeft"}),e.jsx("div",{children:a})]}),s&&e.jsx("h2",{children:s}),t&&e.jsx("button",{"aria-label":"Close Dialog",className:f(c.innerButton,c.closeButton),onClick:h,children:e.jsx(v,{name:"Close"})})]}),e.jsx("div",{className:c.content,style:{height:o||"auto"},children:I})]}),g?.current||document.body)]})},V={title:"Components/Dialog",component:x},q=n=>{const[s,o]=l.useState(!1),[r,a]=l.useState(!1),d=l.useRef(null);return e.jsxs("div",{ref:d,id:"dialog-parent",style:{position:"relative",height:300},children:[e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(b,{onClick:()=>o(!0),children:"Open Global Dialog"}),e.jsx(b,{onClick:()=>a(!0),children:"Open Inline Dialog"})]}),e.jsxs(x,{...n,title:"Dialog",open:r,parentRef:d,onCloseDialog:()=>a(!1),children:[e.jsx("p",{children:"This is the inline dialog content!"}),e.jsx(b,{onClick:()=>a(!1),children:"Close Dialog"})]}),e.jsx(x,{...n,title:"Global Dialog",open:s,showBackLink:!1,onCloseDialog:()=>o(!1),children:e.jsx("p",{children:"This is the global dialog content!"})})]})},p=q.bind({});p.args={contentHeight:"200px",maxWidth:"400px",backLinkCaption:"Back",showOverlay:!0,showBackLink:!0,showCloseButton:!0,onBackClick:()=>alert("Back clicked!")};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
  const [isGlobalOpen, setIsGlobalOpen] = useState(false);
  const [isInlineOpen, setIsInlineOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement | null>(null);
  return <div ref={parentRef} id={'dialog-parent'} style={{
    position: 'relative',
    height: 300
  }}>
            <div style={{
      display: 'flex',
      gap: 10
    }}>
                <Button onClick={() => setIsGlobalOpen(true)}>Open Global Dialog</Button>
                <Button onClick={() => setIsInlineOpen(true)}>Open Inline Dialog</Button>
            </div>

            <Dialog {...args} title={'Dialog'} open={isInlineOpen} parentRef={parentRef} onCloseDialog={() => setIsInlineOpen(false)}>
                <p>This is the inline dialog content!</p>
                <Button onClick={() => setIsInlineOpen(false)}>Close Dialog</Button>
            </Dialog>

            <Dialog {...args} title={'Global Dialog'} open={isGlobalOpen} showBackLink={false} onCloseDialog={() => setIsGlobalOpen(false)}>
                <p>This is the global dialog content!</p>
            </Dialog>
        </div>;
}`,...p.parameters?.docs?.source}}};const X=["Default"];export{p as Default,X as __namedExportsOrder,V as default};
