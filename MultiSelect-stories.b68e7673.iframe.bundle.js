"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[70],{"./stories/MultiSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/MultiSelect",component:_src__WEBPACK_IMPORTED_MODULE_1__.KF,argTypes:{disabled:{control:"boolean"},required:{control:"boolean"},loading:{control:"boolean"},placeholder:{control:"text"},label:{control:"text"},error:{control:"text"},notFoundCaption:{control:"text"}}},options=[{key:"apple",value:"Heart Empty Icon",icon:_src__WEBPACK_IMPORTED_MODULE_1__.kj.HeartEmpty},{key:"banana",value:"Simple Camera Icon",icon:_src__WEBPACK_IMPORTED_MODULE_1__.kj.Camera},{key:"cherry",value:"Medal or Award Icon",icon:_src__WEBPACK_IMPORTED_MODULE_1__.kj.Award},{key:"grape",value:"Disabled Moon Icon",icon:_src__WEBPACK_IMPORTED_MODULE_1__.kj.Moon,disabled:!0},{key:"orange",value:"Disabled without any icon",disabled:!0}],Basic=args=>{const[search,setSearch]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[selectedOptions,setSelectedOptions]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginBottom:15}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,`Search: ${search||"-"}`),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,`Selected: ${selectedOptions?.map((option=>option.value)).join(", ")||"-"}`)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{height:200}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.KF,{...args,options,value:selectedOptions?.map((option=>option.key)),onSelect:options=>{setSelectedOptions(options)},onSearch:setSearch})))};Basic.args={placeholder:"Search options",disabled:!1,required:!1,loading:!1,label:"MultiSelect Label",notFoundCaption:"No options found"};const __namedExportsOrder=["Basic"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => {\n  const [search, setSearch] = useState<string | undefined>();\n  const [selectedOptions, setSelectedOptions] = useState<DropdownOption<string>[] | undefined>(undefined);\n  const handleSelect = (options: DropdownOption<string>[] | undefined) => {\n    setSelectedOptions(options);\n  };\n  return <div>\n            <div style={{\n      marginBottom: 15\n    }}>\n                <div>{`Search: ${search || '-'}`}</div>\n                <div>{`Selected: ${selectedOptions?.map(option => option.value).join(', ') || '-'}`}</div>\n            </div>\n            <div style={{\n      height: 200\n    }}>\n                <MultiSelect {...args} options={options} value={selectedOptions?.map(option => option.key) as string[]} onSelect={handleSelect} onSearch={setSearch} />\n            </div>\n        </div>;\n}",...Basic.parameters?.docs?.source}}}}}]);