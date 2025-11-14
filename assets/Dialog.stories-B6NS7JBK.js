import{j as e,R as G}from"./index-B60tJtCt.js";import{r as l}from"./iframe-qEuxleZ1.js";import{i as j}from"./types-DHzuYu1v.js";import{e as v,I as w,a as y,D as F,b as _,S as E}from"./Table-D2mKQura.js";import{I as N}from"./Input-D0w4Croe.js";import{M as H}from"./Message-DWFvTZNv.js";import{P as R}from"./Progress-Bc9I8stV.js";import"./index-Cl2GYodX.js";import"./preload-helper-PPVm8Dsz.js";const A="_overlay_1sbtf_46",z="_noInitialized_1sbtf_55",V="_hidden_1sbtf_59",W="_displayed_1sbtf_64",f={overlay:A,noInitialized:z,hidden:V,displayed:W},$=({open:t,parentRef:s,overlayId:o,onClose:u})=>{const[c,r]=l.useState(t||!1);return l.useEffect(()=>{const d=s?.current||document.body;let n=d.querySelector(`[data-overlay-id="${o}"]`);if(n||(n=document.createElement("div"),n.dataset.overlayId=o,n.setAttribute("role","button"),n.setAttribute("aria-label","Overlay"),n.tabIndex=0,n.onclick=u||null,n.className=v(f.overlay,!t&&f.noInitialized),d.appendChild(n)),c!==t)return n.className=v(f.overlay,t?f.displayed:f.hidden),r(t||!1),()=>{n&&d.contains(n)&&n.remove()}},[o,s,t,u]),null},K="_dialog_1lwi7_1",U="_header_1lwi7_20",q="_noBackLink_1lwi7_25",J="_innerButton_1lwi7_34",Q="_closeButton_1lwi7_53",X="_content_1lwi7_67",m={dialog:K,header:U,noBackLink:q,innerButton:J,closeButton:Q,content:X},x=({open:t,title:s,contentHeight:o,maxWidth:u="500px",backLinkCaption:c,showOverlay:r=!0,showBackLink:d,showCloseButton:n,parentRef:p,children:S,onBackClick:D,onCloseDialog:g,...O})=>{const a=l.useRef(null),[i,h]=l.useState({}),[M]=l.useState(()=>crypto.randomUUID()),L=()=>{const I=(p?.current||document.documentElement).clientHeight,P=a.current?.offsetHeight||0,T=(I-P)/2;h({maxWidth:u,top:`${T}px`})},B=l.useCallback(()=>{t?(L(),document.body.style.overflow="hidden"):document.body.style.overflow="auto"},[t]);return l.useEffect(()=>{B()},[t]),l.useEffect(()=>{const C=I=>{I.key==="Escape"&&t&&g?.()};return document.addEventListener("keydown",C),B(),()=>{document.removeEventListener("keydown",C)}},[t,g]),e.jsxs(e.Fragment,{children:[r&&e.jsx($,{open:t,parentRef:p,overlayId:M,onClose:g}),t&&G.createPortal(e.jsxs("dialog",{...O,open:t,ref:a,className:m.dialog,style:i,children:[(s||d||n)&&e.jsxs("div",{className:v(m.header,!d&&m.noBackLink),children:[d&&e.jsxs("button",{className:m.innerButton,onClick:D,children:[e.jsx(w,{name:"KeyboardLeft"}),e.jsx("div",{children:c})]}),s&&e.jsx("h2",{children:s}),n&&e.jsx("button",{"aria-label":"Close Dialog",className:v(m.innerButton,m.closeButton),onClick:g,children:e.jsx(w,{name:"Close"})})]}),e.jsx("div",{className:m.content,style:{height:o||"auto"},children:S})]}),p?.current||document.body)]})},ce={title:"Components/Dialog",component:x},Y=t=>{const[s,o]=l.useState(!1),[u,c]=l.useState(!1),r=l.useRef(null);return e.jsxs("div",{ref:r,id:"dialog-parent",style:{position:"relative",height:300},children:[e.jsxs("div",{style:{display:"flex",gap:10},children:[e.jsx(y,{onClick:()=>o(!0),children:"Open Global Dialog"}),e.jsx(y,{onClick:()=>c(!0),children:"Open Inline Dialog"})]}),e.jsxs(x,{...t,title:"Dialog",open:u,parentRef:r,onCloseDialog:()=>c(!1),children:[e.jsx("p",{children:"This is the inline dialog content!"}),e.jsx(y,{onClick:()=>c(!1),children:"Close Dialog"})]}),e.jsx(x,{...t,title:"Global Dialog",open:s,showBackLink:!1,onCloseDialog:()=>o(!1),children:e.jsx("p",{children:"This is the global dialog content!"})})]})},k=Y.bind({});k.args={contentHeight:"200px",maxWidth:"400px",backLinkCaption:"Back",showOverlay:!0,showBackLink:!0,showCloseButton:!0,onBackClick:()=>alert("Back clicked!")};const b=t=>{const[s,o]=l.useState(!1),[u,c]=l.useState(40),[r,d]=l.useState(),[n,p]=l.useState([]),[S,D]=l.useState(),[g,O]=l.useState(void 0);return l.useEffect(()=>{const a=setInterval(()=>{c(Math.floor(Math.random()*101))},1e3);return()=>clearInterval(a)},[]),e.jsxs(e.Fragment,{children:[e.jsx(y,{onClick:()=>o(!0),children:"Open Form Dialog"}),e.jsx(x,{...t,title:"Form Dialog",open:s,onCloseDialog:()=>o(!1),children:e.jsxs("div",{style:{display:"flex",gap:8,flexDirection:"column"},children:[e.jsx(H,{type:"info",children:"Please fill out the form below"}),e.jsx(R,{value:u,style:{margin:"10px 0"}}),e.jsx(F,{placeholder:"Select a date",buttonMode:"secondary",datePeriod:[r,r],onDateSelect:d}),e.jsx(N,{label:"First Name",placeholder:"Enter first name"}),e.jsx(N,{label:"Last Name",placeholder:"Enter last name"}),e.jsx(_,{label:"Option A",checked:n.includes("a"),onChange:a=>p(i=>a.target.checked?[...i,"a"]:i.filter(h=>h!=="a"))}),e.jsx(_,{label:"Option B",checked:n.includes("b"),onChange:a=>p(i=>a.target.checked?[...i,"b"]:i.filter(h=>h!=="b"))}),e.jsx(_,{label:"Option C",checked:n.includes("c"),onChange:a=>p(i=>a.target.checked?[...i,"c"]:i.filter(h=>h!=="c"))}),e.jsx(E,{multiple:!0,clearable:!0,closeOnSelect:!1,placeholder:"Select multiple options",value:g?.map(a=>a.key),onSelect:a=>O(a),options:[{key:"apple",value:"Heart Empty Icon",icon:j.HeartEmpty},{key:"banana",value:"Simple Camera Icon",icon:j.Camera},{key:"cherry",value:"Medal or Award Icon",icon:j.Award}]}),e.jsx(E,{multiple:!1,clearable:!0,value:S,placeholder:"Select an option",onSelect:a=>D(a?.[0]?.key),options:[{key:"1",value:"One"},{key:"2",value:"Two"},{key:"3",value:"Three"}]}),e.jsx(y,{onClick:()=>o(!1),style:{marginTop:16},size:"large",children:"Submit"})]})})]})};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => {
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
}`,...k.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(40);
  const [selectedDate, setSelectedDate] = useState<string | undefined>();
  const [checked, setChecked] = useState<string[]>([]);
  const [dropdownValue, setDropdownValue] = useState<string | undefined>();
  const [selectedOptions, setSelectedOptions] = useState<Array<SelectOptionType<string>> | undefined>(undefined);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(Math.floor(Math.random() * 101));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <>
            <Button onClick={() => setOpen(true)}>Open Form Dialog</Button>
            <Dialog {...args} title={'Form Dialog'} open={open} onCloseDialog={() => setOpen(false)}>
                <div style={{
        display: 'flex',
        gap: 8,
        flexDirection: 'column'
      }}>
                    <Message type='info'>Please fill out the form below</Message>
                    <Progress value={progress} style={{
          margin: '10px 0'
        }} />
                    <DatePicker placeholder='Select a date' buttonMode='secondary' datePeriod={[selectedDate, selectedDate]} onDateSelect={setSelectedDate} />
                    <Input label='First Name' placeholder='Enter first name' />
                    <Input label='Last Name' placeholder='Enter last name' />
                    <Checkbox label='Option A' checked={checked.includes('a')} onChange={e => setChecked(val => e.target.checked ? [...val, 'a'] : val.filter(i => i !== 'a'))} />
                    <Checkbox label='Option B' checked={checked.includes('b')} onChange={e => setChecked(val => e.target.checked ? [...val, 'b'] : val.filter(i => i !== 'b'))} />
                    <Checkbox label='Option C' checked={checked.includes('c')} onChange={e => setChecked(val => e.target.checked ? [...val, 'c'] : val.filter(i => i !== 'c'))} />
                    <Select multiple={true} clearable={true} closeOnSelect={false} placeholder={'Select multiple options'} value={selectedOptions?.map(option => option.key) as string[]} onSelect={options => setSelectedOptions(options)} options={[{
          key: 'apple',
          value: 'Heart Empty Icon',
          icon: iconNames.HeartEmpty
        }, {
          key: 'banana',
          value: 'Simple Camera Icon',
          icon: iconNames.Camera
        }, {
          key: 'cherry',
          value: 'Medal or Award Icon',
          icon: iconNames.Award
        }]} />
                    <Select multiple={false} clearable={true} value={dropdownValue} placeholder={'Select an option'} onSelect={option => setDropdownValue(option?.[0]?.key)} options={[{
          key: '1',
          value: 'One'
        }, {
          key: '2',
          value: 'Two'
        }, {
          key: '3',
          value: 'Three'
        }]} />
                    <Button onClick={() => setOpen(false)} style={{
          marginTop: 16
        }} size={'large'}>
                        Submit
                    </Button>
                </div>
            </Dialog>
        </>;
}`,...b.parameters?.docs?.source}}};const re=["Default","WithForm"];export{k as Default,b as WithForm,re as __namedExportsOrder,ce as default};
