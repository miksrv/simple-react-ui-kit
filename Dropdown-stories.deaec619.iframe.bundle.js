"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[248],{"./stories/Dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,SearchableDropdown:()=>SearchableDropdown,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Dropdown",component:_src__WEBPACK_IMPORTED_MODULE_1__.ms,argTypes:{disabled:{control:"boolean"},required:{control:"boolean"},clearable:{control:"boolean"},placeholder:{control:"text"},searchable:{control:"boolean"}}},options=[{key:"apple",value:"Heart Empty Icon",icon:_src__WEBPACK_IMPORTED_MODULE_1__.kj.HeartEmpty},{key:"banana",value:"Simple Camera Icon",icon:_src__WEBPACK_IMPORTED_MODULE_1__.kj.Camera},{key:"cherry",value:"Medal or Award Icon",icon:_src__WEBPACK_IMPORTED_MODULE_1__.kj.Award},{key:"grape",value:"Disabled Moon Icon",icon:_src__WEBPACK_IMPORTED_MODULE_1__.kj.Moon,disabled:!0},{key:"orange",value:"Disabled without any icon",disabled:!0}],Basic=args=>{const[selectedOption,setSelectedOption]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{height:300,width:200}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.ms,{...args,options,value:selectedOption,onSelect:option=>{setSelectedOption(option?.key)}}))};Basic.args={placeholder:"Please select option",disabled:!1,required:!1,clearable:!0,searchable:!1,label:"Label for dropdown"};const SearchableDropdown=args=>{const[search,setSearch]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),[selectedOption,setSelectedOption]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",alignItems:"flex-start"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{height:300,width:300}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.ms,{...args,options,value:selectedOption,onSelect:option=>{setSelectedOption(option?.key)},onSearch:setSearch})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginLeft:"50px",marginTop:"20px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Search value:"," ",search||"-"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Selected value:"," ",options?.find((({key})=>key===selectedOption))?.value||"-")))};SearchableDropdown.args={placeholder:"Search and select an option",disabled:!1,required:!1,clearable:!0,searchable:!0,label:"Label for searchable dropdown"};const __namedExportsOrder=["Basic","SearchableDropdown"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => {\n  const [selectedOption, setSelectedOption] = useState<string | undefined>();\n\n  // Handle selection of dropdown option\n  const handleSelect = (option: DropdownOption<string> | undefined) => {\n    setSelectedOption(option?.key);\n  };\n  return <div style={{\n    height: 300,\n    width: 200\n  }}>\n            <Dropdown {...args} // Spread the args from the controls\n    options={options} // Pass the options to the dropdown\n    value={selectedOption} // Bind selected option\n    onSelect={handleSelect} // Handle option selection\n    />\n        </div>;\n}",...Basic.parameters?.docs?.source}}},SearchableDropdown.parameters={...SearchableDropdown.parameters,docs:{...SearchableDropdown.parameters?.docs,source:{originalSource:"args => {\n  const [search, setSearch] = useState<string | undefined>('');\n  const [selectedOption, setSelectedOption] = useState<string | undefined>();\n\n  // Handle selection of dropdown option\n  const handleSelect = (option: DropdownOption<string> | undefined) => {\n    setSelectedOption(option?.key);\n  };\n  return <div style={{\n    display: 'flex',\n    alignItems: 'flex-start'\n  }}>\n            <div style={{\n      height: 300,\n      width: 300\n    }}>\n                <Dropdown {...args} // Spread the args from the controls\n      options={options} // Pass the options to the dropdown\n      value={selectedOption} // Bind selected option\n      onSelect={handleSelect} // Handle option selection\n      onSearch={setSearch} // Handle change search value\n      />\n            </div>\n            <div style={{\n      marginLeft: '50px',\n      marginTop: '20px'\n    }}>\n                <div>\n                    {'Search value:'} {search || '-'}\n                </div>\n                <div>\n                    {'Selected value:'} {options?.find(({\n          key\n        }) => key === selectedOption)?.value || '-'}\n                </div>\n            </div>\n        </div>;\n}",...SearchableDropdown.parameters?.docs?.source}}}}}]);