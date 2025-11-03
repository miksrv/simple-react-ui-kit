import{j as e}from"./index-YS-ik7lH.js";import{r}from"./iframe-CLkCKeAB.js";import{i as n}from"./types-DHzuYu1v.js";import{M as s}from"./Table-Cpn6-IjM.js";import"./index-DvdsEXJc.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Controls/MultiSelect",component:s,argTypes:{disabled:{control:"boolean"},required:{control:"boolean"},loading:{control:"boolean"},closeOnSelect:{control:"boolean"},placeholder:{control:"text"},label:{control:"text"},error:{control:"text"},notFoundCaption:{control:"text"}}},u=[{key:"apple",value:"Heart Empty Icon",icon:n.HeartEmpty},{key:"banana",value:"Simple Camera Icon",icon:n.Camera},{key:"cherry",value:"Medal or Award Icon",icon:n.Award},{key:"grape",value:"Disabled Moon Icon",icon:n.Moon,disabled:!0},{key:"orange",value:"Disabled without any icon",disabled:!0}],t=i=>{const[l,c]=r.useState(),[a,d]=r.useState(void 0),p=o=>{d(o)};return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:15},children:[e.jsx("div",{children:`Search: ${l||"-"}`}),e.jsx("div",{children:`Selected: ${a?.map(o=>o.value).join(", ")||"-"}`})]}),e.jsx("div",{style:{height:200},children:e.jsx(s,{...i,options:u,value:a?.map(o=>o.key),onSelect:p,onSearch:c})})]})};t.args={placeholder:"Search options",disabled:!1,required:!1,loading:!1,closeOnSelect:!1,label:"MultiSelect Label",notFoundCaption:"No options found"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const [search, setSearch] = useState<string | undefined>();
  const [selectedOptions, setSelectedOptions] = useState<Array<DropdownOption<string>> | undefined>(undefined);
  const handleSelect = (options: Array<DropdownOption<string>> | undefined) => {
    setSelectedOptions(options);
  };
  return <div>
            <div style={{
      marginBottom: 15
    }}>
                <div>{\`Search: \${search || '-'}\`}</div>
                <div>{\`Selected: \${selectedOptions?.map(option => option.value).join(', ') || '-'}\`}</div>
            </div>
            <div style={{
      height: 200
    }}>
                <MultiSelect {...args} options={options} value={selectedOptions?.map(option => option.key) as string[]} onSelect={handleSelect} onSearch={setSearch} />
            </div>
        </div>;
}`,...t.parameters?.docs?.source}}};const b=["Basic"];export{t as Basic,b as __namedExportsOrder,x as default};
