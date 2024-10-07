"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[944],{"./stories/Container.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomHeader:()=>CustomHeader,Default:()=>Default,WithAction:()=>WithAction,WithFooter:()=>WithFooter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Container",component:_src__WEBPACK_IMPORTED_MODULE_1__.mc,argTypes:{title:{control:"text"},className:{control:"text"},action:{control:"text"},header:{control:"text"},children:{control:"text"},footer:{control:"text"}}},Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_1__.mc,args),Default=Template.bind({});Default.args={title:"Container Title",children:"This is the main content of the container.",footer:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Footer content goes here")};const WithAction=Template.bind({});WithAction.args={title:"Container with Action",children:"This container includes a custom action button.",action:react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",null,"Click Me")};const CustomHeader=Template.bind({});CustomHeader.args={header:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Custom Header Content"),children:"This container has a custom header.",footer:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Footer content goes here")};const WithFooter=Template.bind({});WithFooter.args={title:"Container with Footer",children:"This container includes a footer.",footer:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Custom Footer Content")};const __namedExportsOrder=["Default","WithAction","CustomHeader","WithFooter"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: ContainerProps) => <Container {...args} />",...Default.parameters?.docs?.source}}},WithAction.parameters={...WithAction.parameters,docs:{...WithAction.parameters?.docs,source:{originalSource:"(args: ContainerProps) => <Container {...args} />",...WithAction.parameters?.docs?.source}}},CustomHeader.parameters={...CustomHeader.parameters,docs:{...CustomHeader.parameters?.docs,source:{originalSource:"(args: ContainerProps) => <Container {...args} />",...CustomHeader.parameters?.docs?.source}}},WithFooter.parameters={...WithFooter.parameters,docs:{...WithFooter.parameters?.docs,source:{originalSource:"(args: ContainerProps) => <Container {...args} />",...WithFooter.parameters?.docs?.source}}}}}]);