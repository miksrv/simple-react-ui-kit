import{j as e}from"./index-Bp6KwiIU.js";import{r as c}from"./iframe-Ce9mQgAO.js";import{i as d}from"./types-DHzuYu1v.js";import{b as p}from"./Table-L-5-2ert.js";import"./index-CtZYqbhq.js";import"./preload-helper-PPVm8Dsz.js";const j={title:"Controls/Dropdown",component:p,argTypes:{disabled:{control:"boolean"},required:{control:"boolean"},clearable:{control:"boolean"},placeholder:{control:"text"},searchable:{control:"boolean"}}},h=[{key:"apple",value:"Heart Empty Icon",icon:d.HeartEmpty},{key:"banana",value:"Simple Camera Icon",icon:d.Camera},{key:"cherry",value:"Medal or Award Icon",icon:d.Award},{key:"grape",value:"Disabled Moon Icon",icon:d.Moon,disabled:!0},{key:"orange",value:"Disabled without any icon",disabled:!0}],r=o=>{const[t,a]=c.useState(),n=s=>{a(s?.key)};return e.jsx("div",{style:{height:300,width:200},children:e.jsx(p,{...o,options:h,value:t,onSelect:n})})};r.args={label:"Label for dropdown",placeholder:"Please select option",size:"medium",disabled:!1,required:!1,clearable:!0,searchable:!1};const i=o=>{const[t,a]=c.useState(""),[n,s]=c.useState(),m=u=>{s(u?.key)};return e.jsxs("div",{style:{display:"flex",alignItems:"flex-start"},children:[e.jsx("div",{style:{height:300,width:300},children:e.jsx(p,{...o,options:h,value:n,onSelect:m,onSearch:a})}),e.jsxs("div",{style:{marginLeft:"50px",marginTop:"20px"},children:[e.jsxs("div",{children:["Search value:"," ",t||"-"]}),e.jsxs("div",{children:["Selected value:"," ",h?.find(({key:u})=>u===n)?.value||"-"]})]})]})};i.args={placeholder:"Search and select an option",disabled:!1,required:!1,clearable:!0,searchable:!0,label:"Label for searchable dropdown"};const l=o=>{const[t,a]=c.useState(),n=[{key:"smile",value:"Smile",emoji:"😊"},{key:"rocket",value:"Rocket",emoji:"🚀"},{key:"fire",value:"Fire",emoji:"🔥"},{key:"star",value:"Star",emoji:"⭐️"},{key:"disabled",value:"Disabled",emoji:"🚫",disabled:!0}];return e.jsx("div",{style:{height:300,width:200},children:e.jsx(p,{...o,options:n,value:t,onSelect:s=>a(s?.key),label:"Emoji Dropdown",placeholder:"Select emoji"})})};l.args={clearable:!0,searchable:!0,disabled:!1,required:!1};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  // Handle selection of a dropdown option
  const handleSelect = (option: DropdownOption<string> | undefined) => {
    setSelectedOption(option?.key);
  };
  return <div style={{
    height: 300,
    width: 200
  }}>
            <Dropdown {...args} // Spread the args from the controls
    options={options} // Pass the options to the dropdown
    value={selectedOption} // Bind selected option
    onSelect={handleSelect} // Handle option selection
    />
        </div>;
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  const [search, setSearch] = useState<string | undefined>('');
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  // Handle selection of a dropdown option
  const handleSelect = (option: DropdownOption<string> | undefined) => {
    setSelectedOption(option?.key);
  };
  return <div style={{
    display: 'flex',
    alignItems: 'flex-start'
  }}>
            <div style={{
      height: 300,
      width: 300
    }}>
                <Dropdown {...args} // Spread the args from the controls
      options={options} // Pass the options to the dropdown
      value={selectedOption} // Bind selected option
      onSelect={handleSelect} // Handle option selection
      onSearch={setSearch} // Handle change search value
      />
            </div>
            <div style={{
      marginLeft: '50px',
      marginTop: '20px'
    }}>
                <div>
                    {'Search value:'} {search || '-'}
                </div>
                <div>
                    {'Selected value:'} {options?.find(({
          key
        }) => key === selectedOption)?.value || '-'}
                </div>
            </div>
        </div>;
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const emojiOptions: Array<DropdownOption<string>> = [{
    key: 'smile',
    value: 'Smile',
    emoji: '😊'
  }, {
    key: 'rocket',
    value: 'Rocket',
    emoji: '🚀'
  }, {
    key: 'fire',
    value: 'Fire',
    emoji: '🔥'
  }, {
    key: 'star',
    value: 'Star',
    emoji: '⭐️'
  }, {
    key: 'disabled',
    value: 'Disabled',
    emoji: '🚫',
    disabled: true
  }];
  return <div style={{
    height: 300,
    width: 200
  }}>
            <Dropdown {...args} options={emojiOptions} value={selectedOption} onSelect={option => setSelectedOption(option?.key)} label='Emoji Dropdown' placeholder='Select emoji' />
        </div>;
}`,...l.parameters?.docs?.source}}};const O=["Basic","SearchableDropdown","EmojiOptions"];export{r as Basic,l as EmojiOptions,i as SearchableDropdown,O as __namedExportsOrder,j as default};
