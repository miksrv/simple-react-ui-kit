import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-BeWxJaLi.js";import{t as r}from"./jsx-runtime-BRDTPpDF.js";import{f as i,g as a,t as o}from"./src-ByWjnn-y.js";var s,c,l,u,d,f,p,m,h,g;t((()=>{s=e(n(),1),o(),c=r(),l=()=>{let e=(0,s.useRef)(null);return(0,c.jsx)(`div`,{style:{minHeight:160,display:`flex`,justifyContent:`flex-end`},children:(0,c.jsx)(i,{ref:e,trigger:`Open Popout`,position:`right`,children:(0,c.jsxs)(`div`,{style:{padding:12,minWidth:200},children:[(0,c.jsx)(`p`,{style:{margin:`0 0 12px`},children:`Click the button below to close programmatically.`}),(0,c.jsx)(a,{onClick:()=>e.current?.close(),children:`Close via ref`})]})})})},u={title:`Components/Popout`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"A dropdown popout that renders its content in a portal anchored to a trigger element. Supports left/right positioning, auto-close on child click, and imperative close via a forwarded `ref`. The trigger can be any React node or a plain string."}}},argTypes:{trigger:{control:`text`,description:`Content rendered as the clickable trigger — can be a string, button, or any React node`},position:{control:`inline-radio`,options:[`left`,`right`],description:`Anchors the popout to the left or right edge of the trigger element`,table:{defaultValue:{summary:`right`},type:{summary:`"left" | "right"`}}},disabled:{control:`boolean`,description:`Prevents the popout from opening when the trigger is clicked`,table:{defaultValue:{summary:`false`}}},closeOnChildrenClick:{control:`boolean`,description:`Automatically closes the popout when any child element inside it is clicked`,table:{defaultValue:{summary:`false`}}},children:{control:!1,description:`Content rendered inside the popout panel`},className:{control:`text`,description:`Additional CSS class names applied to the wrapper element`},onOpenChange:{control:!1,description:"Callback fired whenever the open state changes — receives `isOpen: boolean`"}}},d={render:e=>(0,c.jsx)(`div`,{style:{minHeight:160,display:`flex`,justifyContent:`flex-end`},children:(0,c.jsx)(i,{...e,children:(0,c.jsxs)(`div`,{style:{padding:12,minWidth:200},children:[(0,c.jsx)(`p`,{style:{margin:`0 0 8px`,fontWeight:600},children:`Popout Menu`}),(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4},children:[(0,c.jsx)(a,{mode:`link`,children:`Profile`}),(0,c.jsx)(a,{mode:`link`,children:`Settings`}),(0,c.jsx)(a,{mode:`link`,variant:`negative`,children:`Sign out`})]})]})})}),args:{trigger:`Open Menu`,position:`right`},parameters:{docs:{description:{story:`Default right-anchored popout with a text trigger. Click the trigger to open/close the panel. Click outside to dismiss.`}}}},f={name:`Left Position`,render:()=>(0,c.jsx)(`div`,{style:{minHeight:160},children:(0,c.jsx)(i,{trigger:`Open (left)`,position:`left`,children:(0,c.jsxs)(`div`,{style:{padding:12,minWidth:180},children:[(0,c.jsx)(`p`,{style:{margin:`0 0 8px`,fontWeight:600},children:`Left-anchored`}),(0,c.jsx)(`p`,{style:{margin:0,fontSize:13,color:`#555`},children:`The panel aligns to the left edge of the trigger.`})]})})}),parameters:{docs:{description:{story:'With `position="left"` the popout panel aligns its left edge with the trigger element.'}}}},p={name:`Close on Child Click`,render:()=>(0,c.jsx)(`div`,{style:{minHeight:160,display:`flex`,justifyContent:`flex-end`},children:(0,c.jsx)(i,{trigger:(0,c.jsx)(a,{mode:`outline`,children:`Actions`}),position:`right`,closeOnChildrenClick:!0,children:(0,c.jsxs)(`div`,{style:{padding:8,minWidth:160},children:[(0,c.jsx)(a,{mode:`link`,onClick:()=>alert(`Edit clicked`),children:`Edit`}),(0,c.jsx)(a,{mode:`link`,onClick:()=>alert(`Duplicate clicked`),children:`Duplicate`}),(0,c.jsx)(a,{mode:`link`,variant:`negative`,onClick:()=>alert(`Delete clicked`),children:`Delete`})]})})}),parameters:{docs:{description:{story:"When `closeOnChildrenClick` is `true` the popout automatically closes whenever the user clicks any item inside it — ideal for action menus."}}}},m={name:`Imperative Close (via ref)`,render:()=>(0,c.jsx)(l,{}),parameters:{docs:{description:{story:"Use a forwarded `ref` (typed as `PopoutHandleProps`) to call `ref.current.close()` and dismiss the popout from within child content — useful when you need to close after an async action."}}}},h={name:`Button as Trigger`,render:()=>(0,c.jsx)(`div`,{style:{minHeight:160,display:`flex`,justifyContent:`flex-end`},children:(0,c.jsx)(i,{trigger:(0,c.jsx)(a,{icon:`VerticalDots`,"aria-label":`More options`}),position:`right`,children:(0,c.jsxs)(`div`,{style:{padding:8,minWidth:160},children:[(0,c.jsx)(a,{mode:`link`,children:`View details`}),(0,c.jsx)(a,{mode:`link`,children:`Edit`}),(0,c.jsx)(a,{mode:`link`,variant:`negative`,children:`Remove`})]})})}),parameters:{docs:{description:{story:"The `trigger` prop accepts any React node — here a three-dot icon button acts as the trigger for a context menu."}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Imperative Close (via ref)',
  render: () => <ImperativeCloseDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Use a forwarded \`ref\` (typed as \`PopoutHandleProps\`) to call \`ref.current.close()\` and dismiss the popout from within child content — useful when you need to close after an async action.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Default`,`LeftPosition`,`WithCloseOnChildClick`,`ImperativeClose`,`WithButtonTrigger`]}))();export{d as Default,m as ImperativeClose,f as LeftPosition,h as WithButtonTrigger,p as WithCloseOnChildClick,g as __namedExportsOrder,u as default};