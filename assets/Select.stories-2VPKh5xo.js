import{j as r}from"./index-B60tJtCt.js";import{r as y}from"./iframe-qEuxleZ1.js";import{S as h}from"./Table-D2mKQura.js";import"./index-Cl2GYodX.js";import"./preload-helper-PPVm8Dsz.js";const C={title:"Controls/Select",component:h,parameters:{layout:"padded",docs:{description:{component:"Universal select component: `Dropdown` and `MultiSelect` in one. Supports search, portals, icons, emojis, images, validation, and accessibility."}}},argTypes:{className:{control:"text",description:"Additional class names for custom styling"},required:{control:"boolean",description:"Mark the select as required"},disabled:{control:"boolean",description:"Disable the select"},multiple:{control:"boolean",description:"Enable multiple selection"},searchable:{control:"boolean",description:"Enable search input"},clearable:{control:"boolean",description:"Show clear button to remove selection"},loading:{control:"boolean",description:"Show loading spinner"},closeOnSelect:{control:"boolean",description:"Whether the dropdown should close after selecting an option"},options:{control:!1,description:"Array of options to display in the select"},placeholder:{control:"text",description:"Placeholder text to display when no option is selected"},notFoundCaption:{control:"text",description:"Text to display if no options are found"},label:{control:"text",description:"Label text for the select"},error:{control:"text",description:"Error message to display when validation fails"},value:{control:!1,description:"Currently selected value(s)"},onSelect:{action:"onSelect",description:"Callback triggered when options are selected"},onSearch:{action:"onSearch",description:"Callback triggered when a search is made"},onOpen:{action:"onOpen",description:"Callback triggered when the dropdown is opened"}}},o=[{key:"us",value:"United States",emoji:"🇺🇸"},{key:"ru",value:"Russia",emoji:"🇷🇺"},{key:"de",value:"Germany",emoji:"🇩🇪"},{key:"jp",value:"Japan",emoji:"🇯🇵"},{key:"fr",value:"France",emoji:"🇫🇷"},{key:"cn",value:"China",emoji:"🇨🇳"},{key:"br",value:"Brazil",emoji:"🇧🇷"}],m=[{key:"react",value:"React",icon:"StarFilled"},{key:"vue",value:"Vue.js",icon:"Award"},{key:"angular",value:"Angular",icon:"Chart"},{key:"svelte",value:"Svelte",icon:"Lightning"},{key:"node",value:"Node.js",icon:"Cloud"},{key:"python",value:"Python",icon:"Moon"},{key:"disabled",value:"Disabled Option",disabled:!0}],g=[{key:"temperature",value:"Temperature Inside",icon:"Thermometer"},{key:"pressure",value:"Press.",icon:"Pressure"},{key:"humidity",value:"Humidity",icon:"Water"},{key:"precipitation",value:"Precipitation",icon:"WaterDrop"},{key:"clouds",value:"Clouds",icon:"Cloud"}],e=p=>{const[S,d]=y.useState(p.value);return r.jsx(h,{...p,value:S,onSelect:u=>{p.multiple?d(u?.map(b=>b.key)||[]):d(u?.[0]?.key)}})},l={render:e,args:{options:o,multiple:!0,clearable:!1,searchable:!0,placeholder:"Select a country",label:"Country"}},t={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:400},children:[r.jsx(e,{multiple:!1,placeholder:"Single Select",label:"Single Select, No Search",options:o}),r.jsx(e,{multiple:!1,searchable:!0,closeOnSelect:!1,placeholder:"Search...",label:"Single Select, Search",options:o}),r.jsx(e,{multiple:!0,closeOnSelect:!1,placeholder:"Multiple Select",label:"Multiple Select, No Search",options:o}),r.jsx(e,{multiple:!0,searchable:!0,closeOnSelect:!1,placeholder:"Search...",label:"Multiple Select, Search",options:o}),r.jsx(e,{placeholder:"Select",label:"Single Select, Icons",options:g}),r.jsx(e,{options:o,loading:!0,placeholder:"Loading",label:"Loading"}),r.jsx(e,{options:o,error:"Error example",placeholder:"With Error",label:"With Error"})]}),parameters:{docs:{description:{story:"Several variants of the Select component with different props in one story."}}}},a={render:e,args:{multiple:!0,closeOnSelect:!1,options:m,placeholder:"Choose technologies",label:"Tech Stack"}},n={render:e,args:{searchable:!0,options:[...o,...m],placeholder:"Search options...",label:"Searchable Select"}},s={render:e,args:{options:o,placeholder:"Choose country",label:"Country with Flag"}},c={render:e,args:{options:o,required:!0,placeholder:"Required field",label:"Required Field"}},i={render:e,args:{options:[],notFoundCaption:"No countries available",placeholder:"Search...",label:"Empty List"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: countries,
    multiple: true,
    clearable: false,
    searchable: true,
    placeholder: 'Select a country',
    label: 'Country'
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    multiple: true,
    closeOnSelect: false,
    options: techStack,
    placeholder: 'Choose technologies',
    label: 'Tech Stack'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    searchable: true,
    options: [...countries, ...techStack],
    placeholder: 'Search options...',
    label: 'Searchable Select'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: countries,
    placeholder: 'Choose country',
    label: 'Country with Flag'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: countries,
    required: true,
    placeholder: 'Required field',
    label: 'Required Field'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: [],
    notFoundCaption: 'No countries available',
    placeholder: 'Search...',
    label: 'Empty List'
  }
}`,...i.parameters?.docs?.source}}};const T=["Default","VariantsInOneStory","MultiSelect","WithSearch","WithEmojis","Required","NotFoundCaption"];export{l as Default,a as MultiSelect,i as NotFoundCaption,c as Required,t as VariantsInOneStory,s as WithEmojis,n as WithSearch,T as __namedExportsOrder,C as default};
