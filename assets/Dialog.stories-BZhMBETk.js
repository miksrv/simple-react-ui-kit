import{j as e,R as G}from"./index-YS-ik7lH.js";import{r as l}from"./iframe-CLkCKeAB.js";import{c as f,I as v,a as b}from"./Table-Cpn6-IjM.js";import"./index-DvdsEXJc.js";import"./preload-helper-PPVm8Dsz.js";const L="_overlay_1sbtf_46",R="_noInitialized_1sbtf_55",N="_hidden_1sbtf_59",T="_displayed_1sbtf_64",u={overlay:L,noInitialized:R,hidden:N,displayed:T},z=({open:n,parentRef:o,overlayId:s,onClose:c})=>{const[i,d]=l.useState(n||!1);return l.useEffect(()=>{const a=o?.current||document.body;let t=a.querySelector(`[data-overlay-id="${s}"]`);if(t||(t=document.createElement("div"),t.setAttribute("data-overlay-id",s),t.setAttribute("role","button"),t.setAttribute("aria-label","Overlay"),t.tabIndex=0,t.onclick=c||null,t.className=f(u.overlay,!n&&u.noInitialized),a.appendChild(t)),i!==n)return t.className=f(u.overlay,n?u.displayed:u.hidden),d(n||!1),()=>{t&&a.contains(t)&&a.removeChild(t)}},[s,o,n,c]),null},H="_dialog_1lwi7_1",A="_header_1lwi7_20",$="_noBackLink_1lwi7_25",K="_innerButton_1lwi7_34",M="_closeButton_1lwi7_53",U="_content_1lwi7_67",r={dialog:H,header:A,noBackLink:$,innerButton:K,closeButton:M,content:U},x=({open:n,title:o,contentHeight:s,maxWidth:c="500px",backLinkCaption:i,showOverlay:d=!0,showBackLink:a,showCloseButton:t,parentRef:g,children:I,onBackClick:O,onCloseDialog:h,...D})=>{const _=l.useRef(null),[B,j]=l.useState({}),[C]=l.useState(()=>crypto.randomUUID()),E=()=>{const y=(g?.current||document.documentElement).clientHeight,w=_.current?.offsetHeight||0,S=(y-w)/2;j({maxWidth:c,top:`${S}px`})},k=l.useCallback(()=>{n?(E(),document.body.style.overflow="hidden"):document.body.style.overflow="auto"},[n]);return l.useEffect(()=>{k()},[n]),l.useEffect(()=>{const m=y=>{y.key==="Escape"&&n&&h?.()};return document.addEventListener("keydown",m),k(),()=>{document.removeEventListener("keydown",m)}},[n,h]),e.jsxs(e.Fragment,{children:[d&&e.jsx(z,{open:n,parentRef:g,overlayId:C,onClose:h}),n&&G.createPortal(e.jsxs("dialog",{...D,open:n,ref:_,className:r.dialog,style:B,children:[(o||a||t)&&e.jsxs("div",{className:f(r.header,!a&&r.noBackLink),children:[a&&e.jsxs("button",{className:r.innerButton,onClick:O,children:[e.jsx(v,{name:"KeyboardLeft"}),e.jsx("div",{children:i})]}),o&&e.jsx("h2",{children:o}),t&&e.jsx("button",{"aria-label":"Close Dialog",className:f(r.innerButton,r.closeButton),onClick:h,children:e.jsx(v,{name:"Close"})})]}),e.jsx("div",{className:r.content,style:{height:s||"auto"},children:I})]}),g?.current||document.body)]})},V={title:"Components/Dialog",component:x},q=n=>{const[o,s]=l.useState(!1),[c,i]=l.useState(!1),d=l.useRef(null);return e.jsxs("div",{ref:d,id:"dialog-parent",style:{position:"relative",height:300},children:[e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(b,{onClick:()=>s(!0),children:"Open Global Dialog"}),e.jsx(b,{onClick:()=>i(!0),children:"Open Inline Dialog"})]}),e.jsxs(x,{...n,title:"Dialog",open:c,parentRef:d,onCloseDialog:()=>i(!1),children:[e.jsx("p",{children:"This is the inline dialog content!"}),e.jsx(b,{onClick:()=>i(!1),children:"Close Dialog"})]}),e.jsx(x,{...n,title:"Global Dialog",open:o,showBackLink:!1,onCloseDialog:()=>s(!1),children:e.jsx("p",{children:"This is the global dialog content!"})})]})},p=q.bind({});p.args={contentHeight:"200px",maxWidth:"400px",backLinkCaption:"Back",showOverlay:!0,showBackLink:!0,showCloseButton:!0,onBackClick:()=>alert("Back clicked!")};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => {
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
