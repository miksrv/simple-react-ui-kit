import{j as a}from"./index-BNGFX5oi.js";import{r as x}from"./iframe-NGxwQjTZ.js";import{S as y}from"./Table-DadTRiB0.js";import"./index-B53Eu0ub.js";import"./preload-helper-PPVm8Dsz.js";const D={title:"Controls/Select",component:y,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Universal select component: `Dropdown` and `MultiSelect` in one. Supports search, portals, icons, emojis, images, validation, and full keyboard accessibility.\n\n**Keyboard navigation:**\n- `↓` / `↑` — open dropdown and navigate through options (disabled options are skipped)\n- `Enter` — select the highlighted option (or first non-disabled option if none highlighted)\n- `Escape` — close dropdown\n- `Backspace` / `Delete` — remove last badge (multiple) or clear selection (single)\n- `Space` — toggle dropdown (non-searchable)"}}},argTypes:{className:{control:"text",description:"Additional class names for custom styling"},required:{control:"boolean",description:"Mark the select as required"},disabled:{control:"boolean",description:"Disable the select"},multiple:{control:"boolean",description:"Enable multiple selection"},searchable:{control:"boolean",description:"Enable search input"},clearable:{control:"boolean",description:"Show clear button to remove selection"},loading:{control:"boolean",description:"Show loading spinner"},size:{control:{type:"inline-radio"},options:["small","medium","large"],table:{type:{summary:'"small", "medium", "large"'}}},closeOnSelect:{control:"boolean",description:"Whether the dropdown should close after selecting an option"},options:{control:!1,description:"Array of options to display in the select"},placeholder:{control:"text",description:"Placeholder text to display when no option is selected"},notFoundCaption:{control:"text",description:"Text to display if no options are found"},label:{control:"text",description:"Label text for the select"},error:{control:"text",description:"Error message to display when validation fails"},value:{control:!1,description:"Currently selected value(s)"},onSelect:{action:"onSelect",description:"Callback triggered when options are selected"},onSearch:{action:"onSearch",description:"Callback triggered when a search is made"},onOpen:{action:"onOpen",description:"Callback triggered when the dropdown is opened"}}},l=[{key:"us",value:"United States",emoji:"🇺🇸"},{key:"ru",value:"Russia",emoji:"🇷🇺"},{key:"de",value:"Germany",emoji:"🇩🇪"},{key:"jp",value:"Japan",emoji:"🇯🇵"},{key:"fr",value:"France",emoji:"🇫🇷"},{key:"cn",value:"China",emoji:"🇨🇳"},{key:"br",value:"Brazil",emoji:"🇧🇷"}],o=[{key:"react",value:"React",icon:"StarFilled"},{key:"vue",value:"Vue.js",icon:"Award"},{key:"angular",value:"Angular",icon:"Chart"},{key:"svelte",value:"Svelte",icon:"Lightning"},{key:"node",value:"Node.js",icon:"Cloud"},{key:"python",value:"Python",icon:"Moon"},{key:"disabled",value:"Disabled Option",disabled:!0}],k=[{key:"temperature",value:"Temperature Inside",icon:"Thermometer"},{key:"pressure",value:"Press.",icon:"Pressure"},{key:"humidity",value:"Humidity",icon:"Water"},{key:"precipitation",value:"Precipitation",icon:"WaterDrop"},{key:"clouds",value:"Clouds",icon:"Cloud"}],e=b=>{const[v,S]=x.useState(b.value);return a.jsx(y,{...b,value:v,onSelect:g=>{b.multiple?S(g?.map(f=>f.key)||[]):S(g?.[0]?.key)}})},r={render:e,args:{options:l,multiple:!0,clearable:!1,searchable:!0,placeholder:"Select a country",label:"Country"}},t={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:400},children:[a.jsx(e,{multiple:!1,placeholder:"Single Select",label:"Single Select, No Search",options:l}),a.jsx(e,{multiple:!1,searchable:!0,closeOnSelect:!1,placeholder:"Search...",label:"Single Select, Search",options:l}),a.jsx(e,{multiple:!0,closeOnSelect:!1,placeholder:"Multiple Select",label:"Multiple Select, No Search",options:l}),a.jsx(e,{multiple:!0,searchable:!0,closeOnSelect:!1,placeholder:"Search...",label:"Multiple Select, Search",options:l}),a.jsx(e,{placeholder:"Select",label:"Single Select, Icons",options:k}),a.jsx(e,{options:l,loading:!0,placeholder:"Loading",label:"Loading"}),a.jsx(e,{options:l,error:"Error example",placeholder:"With Error",label:"With Error"})]}),parameters:{docs:{description:{story:"Several variants of the Select component with different props in one story."}}}},n={render:e,args:{multiple:!0,closeOnSelect:!1,options:o,placeholder:"Choose technologies",label:"Tech Stack"}},s={render:e,args:{searchable:!0,options:[...l,...o],placeholder:"Search options...",label:"Searchable Select"}},i={render:e,args:{options:l,placeholder:"Choose country",label:"Country with Flag"}},c={render:e,args:{options:l,required:!0,placeholder:"Required field",label:"Required Field"}},p={render:e,args:{options:[],notFoundCaption:"No countries available",placeholder:"Search...",label:"Empty List"}},d={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:400},children:[a.jsx(e,{searchable:!0,options:o,placeholder:"Press ↓ to open and navigate",label:"Searchable — use ↓ ↑ Enter Escape"}),a.jsx(e,{options:o,placeholder:"Press ↓ to open and navigate",label:"Non-searchable — use ↓ ↑ Enter Space Escape"}),a.jsx(e,{multiple:!0,searchable:!0,closeOnSelect:!1,options:o,placeholder:"Navigate and pick multiple",label:"Multiple + Searchable — Backspace removes last badge"})]}),parameters:{docs:{description:{story:"Demonstrates full keyboard accessibility. Click any select to focus it, then use arrow keys to navigate, Enter to select, and Escape to close. Disabled options are automatically skipped during navigation."}}}},u={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:400},children:[a.jsx(e,{options:l,size:"small",placeholder:"Small",label:"Small"}),a.jsx(e,{options:l,size:"medium",placeholder:"Medium (default)",label:"Medium"}),a.jsx(e,{options:l,size:"large",placeholder:"Large",label:"Large"})]}),parameters:{docs:{description:{story:"Three available sizes: `small`, `medium` (default), and `large`."}}}},m={render:e,args:{options:l,disabled:!0,value:"us",placeholder:"Disabled select",label:"Disabled"}},h={render:e,args:{options:l,clearable:!0,value:"ru",placeholder:"Select a country",label:"Clearable (with pre-selected value)"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: countries,
    multiple: true,
    clearable: false,
    searchable: true,
    placeholder: 'Select a country',
    label: 'Country'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 400
  }}>
            <Template multiple={false} placeholder='Single Select' label='Single Select, No Search' options={countries} />
            <Template multiple={false} searchable={true} closeOnSelect={false} placeholder='Search...' label='Single Select, Search' options={countries} />
            <Template multiple={true} closeOnSelect={false} placeholder='Multiple Select' label='Multiple Select, No Search' options={countries} />
            <Template multiple={true} searchable={true} closeOnSelect={false} placeholder='Search...' label='Multiple Select, Search' options={countries} />
            <Template placeholder='Select' label='Single Select, Icons' options={weatherIcons} />
            <Template options={countries} loading placeholder='Loading' label='Loading' />
            <Template options={countries} error='Error example' placeholder='With Error' label='With Error' />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Several variants of the Select component with different props in one story.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    multiple: true,
    closeOnSelect: false,
    options: techStack,
    placeholder: 'Choose technologies',
    label: 'Tech Stack'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    searchable: true,
    options: [...countries, ...techStack],
    placeholder: 'Search options...',
    label: 'Searchable Select'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: countries,
    placeholder: 'Choose country',
    label: 'Country with Flag'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: countries,
    required: true,
    placeholder: 'Required field',
    label: 'Required Field'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: [],
    notFoundCaption: 'No countries available',
    placeholder: 'Search...',
    label: 'Empty List'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 400
  }}>
            <Template searchable options={techStack} placeholder='Press ↓ to open and navigate' label='Searchable — use ↓ ↑ Enter Escape' />
            <Template options={techStack} placeholder='Press ↓ to open and navigate' label='Non-searchable — use ↓ ↑ Enter Space Escape' />
            <Template multiple searchable closeOnSelect={false} options={techStack} placeholder='Navigate and pick multiple' label='Multiple + Searchable — Backspace removes last badge' />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates full keyboard accessibility. ' + 'Click any select to focus it, then use arrow keys to navigate, Enter to select, and Escape to close. ' + 'Disabled options are automatically skipped during navigation.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 400
  }}>
            <Template options={countries} size='small' placeholder='Small' label='Small' />
            <Template options={countries} size='medium' placeholder='Medium (default)' label='Medium' />
            <Template options={countries} size='large' placeholder='Large' label='Large' />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Three available sizes: \`small\`, \`medium\` (default), and \`large\`.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: countries,
    disabled: true,
    value: 'us',
    placeholder: 'Disabled select',
    label: 'Disabled'
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: countries,
    clearable: true,
    value: 'ru',
    placeholder: 'Select a country',
    label: 'Clearable (with pre-selected value)'
  }
}`,...h.parameters?.docs?.source}}};const M=["Default","VariantsInOneStory","MultiSelect","WithSearch","WithEmojis","Required","NotFoundCaption","KeyboardNavigation","Sizes","Disabled","Clearable"];export{h as Clearable,r as Default,m as Disabled,d as KeyboardNavigation,n as MultiSelect,p as NotFoundCaption,c as Required,u as Sizes,t as VariantsInOneStory,i as WithEmojis,s as WithSearch,M as __namedExportsOrder,D as default};
