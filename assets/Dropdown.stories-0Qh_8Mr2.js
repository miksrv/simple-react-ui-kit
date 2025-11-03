import{j as e}from"./index-YS-ik7lH.js";import{r as c}from"./iframe-CLkCKeAB.js";import{i as a}from"./types-DHzuYu1v.js";import{D as h}from"./Table-Cpn6-IjM.js";import"./index-DvdsEXJc.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Controls/Dropdown",component:h,argTypes:{disabled:{control:"boolean"},required:{control:"boolean"},clearable:{control:"boolean"},placeholder:{control:"text"},searchable:{control:"boolean"}}},p=[{key:"apple",value:"Heart Empty Icon",icon:a.HeartEmpty},{key:"banana",value:"Simple Camera Icon",icon:a.Camera},{key:"cherry",value:"Medal or Award Icon",icon:a.Award},{key:"grape",value:"Disabled Moon Icon",icon:a.Moon,disabled:!0},{key:"orange",value:"Disabled without any icon",disabled:!0}],n=s=>{const[r,l]=c.useState(),o=i=>{l(i?.key)};return e.jsx("div",{style:{height:300,width:200},children:e.jsx(h,{...s,options:p,value:r,onSelect:o})})};n.args={label:"Label for dropdown",placeholder:"Please select option",size:"medium",disabled:!1,required:!1,clearable:!0,searchable:!1};const t=s=>{const[r,l]=c.useState(""),[o,i]=c.useState(),u=d=>{i(d?.key)};return e.jsxs("div",{style:{display:"flex",alignItems:"flex-start"},children:[e.jsx("div",{style:{height:300,width:300},children:e.jsx(h,{...s,options:p,value:o,onSelect:u,onSearch:l})}),e.jsxs("div",{style:{marginLeft:"50px",marginTop:"20px"},children:[e.jsxs("div",{children:["Search value:"," ",r||"-"]}),e.jsxs("div",{children:["Selected value:"," ",p?.find(({key:d})=>d===o)?.value||"-"]})]})]})};t.args={placeholder:"Search and select an option",disabled:!1,required:!1,clearable:!0,searchable:!0,label:"Label for searchable dropdown"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
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
}`,...t.parameters?.docs?.source}}};const x=["Basic","SearchableDropdown"];export{n as Basic,t as SearchableDropdown,x as __namedExportsOrder,b as default};
