import{j as e}from"./index-BNGFX5oi.js";import{r as d}from"./iframe-NGxwQjTZ.js";import{d as n,a as t}from"./Table-DadTRiB0.js";import"./index-B53Eu0ub.js";import"./preload-helper-PPVm8Dsz.js";const c=()=>{const i=d.useRef(null);return e.jsx("div",{style:{minHeight:160,display:"flex",justifyContent:"flex-end"},children:e.jsx(n,{ref:i,trigger:"Open Popout",position:"right",children:e.jsxs("div",{style:{padding:12,minWidth:200},children:[e.jsx("p",{style:{margin:"0 0 12px"},children:"Click the button below to close programmatically."}),e.jsx(t,{onClick:()=>i.current?.close(),children:"Close via ref"})]})})})},f={title:"Components/Popout",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"A dropdown popout that renders its content in a portal anchored to a trigger element. Supports left/right positioning, auto-close on child click, and imperative close via a forwarded `ref`. The trigger can be any React node or a plain string."}}},argTypes:{trigger:{control:"text",description:"Content rendered as the clickable trigger — can be a string, button, or any React node"},position:{control:"inline-radio",options:["left","right"],description:"Anchors the popout to the left or right edge of the trigger element",table:{defaultValue:{summary:"right"},type:{summary:'"left" | "right"'}}},disabled:{control:"boolean",description:"Prevents the popout from opening when the trigger is clicked",table:{defaultValue:{summary:"false"}}},closeOnChildrenClick:{control:"boolean",description:"Automatically closes the popout when any child element inside it is clicked",table:{defaultValue:{summary:"false"}}},children:{control:!1,description:"Content rendered inside the popout panel"},className:{control:"text",description:"Additional CSS class names applied to the wrapper element"},onOpenChange:{control:!1,description:"Callback fired whenever the open state changes — receives `isOpen: boolean`"}}},o={render:i=>e.jsx("div",{style:{minHeight:160,display:"flex",justifyContent:"flex-end"},children:e.jsx(n,{...i,children:e.jsxs("div",{style:{padding:12,minWidth:200},children:[e.jsx("p",{style:{margin:"0 0 8px",fontWeight:600},children:"Popout Menu"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx(t,{mode:"link",children:"Profile"}),e.jsx(t,{mode:"link",children:"Settings"}),e.jsx(t,{mode:"link",variant:"negative",children:"Sign out"})]})]})})}),args:{trigger:"Open Menu",position:"right"},parameters:{docs:{description:{story:"Default right-anchored popout with a text trigger. Click the trigger to open/close the panel. Click outside to dismiss."}}}},r={name:"Left Position",render:()=>e.jsx("div",{style:{minHeight:160},children:e.jsx(n,{trigger:"Open (left)",position:"left",children:e.jsxs("div",{style:{padding:12,minWidth:180},children:[e.jsx("p",{style:{margin:"0 0 8px",fontWeight:600},children:"Left-anchored"}),e.jsx("p",{style:{margin:0,fontSize:13,color:"#555"},children:"The panel aligns to the left edge of the trigger."})]})})}),parameters:{docs:{description:{story:'With `position="left"` the popout panel aligns its left edge with the trigger element.'}}}},s={name:"Close on Child Click",render:()=>e.jsx("div",{style:{minHeight:160,display:"flex",justifyContent:"flex-end"},children:e.jsx(n,{trigger:e.jsx(t,{mode:"outline",children:"Actions"}),position:"right",closeOnChildrenClick:!0,children:e.jsxs("div",{style:{padding:8,minWidth:160},children:[e.jsx(t,{mode:"link",onClick:()=>alert("Edit clicked"),children:"Edit"}),e.jsx(t,{mode:"link",onClick:()=>alert("Duplicate clicked"),children:"Duplicate"}),e.jsx(t,{mode:"link",variant:"negative",onClick:()=>alert("Delete clicked"),children:"Delete"})]})})}),parameters:{docs:{description:{story:"When `closeOnChildrenClick` is `true` the popout automatically closes whenever the user clicks any item inside it — ideal for action menus."}}}},l={name:"Imperative Close (via ref)",render:()=>e.jsx(c,{}),parameters:{docs:{description:{story:"Use a forwarded `ref` (typed as `PopoutHandleProps`) to call `ref.current.close()` and dismiss the popout from within child content — useful when you need to close after an async action."}}}},a={name:"Button as Trigger",render:()=>e.jsx("div",{style:{minHeight:160,display:"flex",justifyContent:"flex-end"},children:e.jsx(n,{trigger:e.jsx(t,{icon:"VerticalDots","aria-label":"More options"}),position:"right",children:e.jsxs("div",{style:{padding:8,minWidth:160},children:[e.jsx(t,{mode:"link",children:"View details"}),e.jsx(t,{mode:"link",children:"Edit"}),e.jsx(t,{mode:"link",variant:"negative",children:"Remove"})]})})}),parameters:{docs:{description:{story:"The `trigger` prop accepts any React node — here a three-dot icon button acts as the trigger for a context menu."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    minHeight: 160,
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
            <Popout {...args}>
                <div style={{
        padding: 12,
        minWidth: 200
      }}>
                    <p style={{
          margin: '0 0 8px',
          fontWeight: 600
        }}>Popout Menu</p>
                    <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
                        <Button mode='link'>Profile</Button>
                        <Button mode='link'>Settings</Button>
                        <Button mode='link' variant='negative'>
                            Sign out
                        </Button>
                    </div>
                </div>
            </Popout>
        </div>,
  args: {
    trigger: 'Open Menu',
    position: 'right'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default right-anchored popout with a text trigger. Click the trigger to open/close the panel. Click outside to dismiss.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Left Position',
  render: () => <div style={{
    minHeight: 160
  }}>
            <Popout trigger='Open (left)' position='left'>
                <div style={{
        padding: 12,
        minWidth: 180
      }}>
                    <p style={{
          margin: '0 0 8px',
          fontWeight: 600
        }}>Left-anchored</p>
                    <p style={{
          margin: 0,
          fontSize: 13,
          color: '#555'
        }}>
                        The panel aligns to the left edge of the trigger.
                    </p>
                </div>
            </Popout>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'With \`position="left"\` the popout panel aligns its left edge with the trigger element.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Close on Child Click',
  render: () => <div style={{
    minHeight: 160,
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
            <Popout trigger={<Button mode='outline'>Actions</Button>} position='right' closeOnChildrenClick>
                <div style={{
        padding: 8,
        minWidth: 160
      }}>
                    <Button mode='link' onClick={() => alert('Edit clicked')}>
                        Edit
                    </Button>
                    <Button mode='link' onClick={() => alert('Duplicate clicked')}>
                        Duplicate
                    </Button>
                    <Button mode='link' variant='negative' onClick={() => alert('Delete clicked')}>
                        Delete
                    </Button>
                </div>
            </Popout>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'When \`closeOnChildrenClick\` is \`true\` the popout automatically closes whenever the user clicks any item inside it — ideal for action menus.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Imperative Close (via ref)',
  render: () => <ImperativeCloseDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Use a forwarded \`ref\` (typed as \`PopoutHandleProps\`) to call \`ref.current.close()\` and dismiss the popout from within child content — useful when you need to close after an async action.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Button as Trigger',
  render: () => <div style={{
    minHeight: 160,
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
            <Popout trigger={<Button icon='VerticalDots' aria-label='More options' />} position='right'>
                <div style={{
        padding: 8,
        minWidth: 160
      }}>
                    <Button mode='link'>View details</Button>
                    <Button mode='link'>Edit</Button>
                    <Button mode='link' variant='negative'>
                        Remove
                    </Button>
                </div>
            </Popout>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'The \`trigger\` prop accepts any React node — here a three-dot icon button acts as the trigger for a context menu.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const y=["Default","LeftPosition","WithCloseOnChildClick","ImperativeClose","WithButtonTrigger"];export{o as Default,l as ImperativeClose,r as LeftPosition,a as WithButtonTrigger,s as WithCloseOnChildClick,y as __namedExportsOrder,f as default};
