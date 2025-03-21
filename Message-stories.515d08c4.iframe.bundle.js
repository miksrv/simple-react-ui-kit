"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[308],{"./stories/Message.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InfoMessageWithList:()=>InfoMessageWithList,NegativeMessage:()=>NegativeMessage,PositiveMessage:()=>PositiveMessage,WarningMessage:()=>WarningMessage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_src__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("../src/index.ts"));const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Message",component:_src__WEBPACK_IMPORTED_MODULE_2__.QB,argTypes:{type:{control:"select",options:["error","warning","success","info"],description:"The message type that defines the styles"},title:{control:"text",description:"Message Title"},children:{control:"text",description:"Content inside the message"}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.QB,{...args}),PositiveMessage=Template.bind({});PositiveMessage.args={type:"success",title:"Success!",children:"Your action was successful."};const NegativeMessage=Template.bind({});NegativeMessage.args={type:"error",title:"Error!",children:"There was an error processing your request."};const WarningMessage=Template.bind({});WarningMessage.args={type:"warning",title:"Warning!",children:"Please double-check the information."};const InfoMessageWithList=Template.bind({});InfoMessageWithList.args={type:"info",title:"Information",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Item 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{children:"Item 2"})]})};const __namedExportsOrder=["PositiveMessage","NegativeMessage","WarningMessage","InfoMessageWithList"];PositiveMessage.parameters={...PositiveMessage.parameters,docs:{...PositiveMessage.parameters?.docs,source:{originalSource:"(args: MessageProps) => <Message {...args} />",...PositiveMessage.parameters?.docs?.source}}},NegativeMessage.parameters={...NegativeMessage.parameters,docs:{...NegativeMessage.parameters?.docs,source:{originalSource:"(args: MessageProps) => <Message {...args} />",...NegativeMessage.parameters?.docs?.source}}},WarningMessage.parameters={...WarningMessage.parameters,docs:{...WarningMessage.parameters?.docs,source:{originalSource:"(args: MessageProps) => <Message {...args} />",...WarningMessage.parameters?.docs?.source}}},InfoMessageWithList.parameters={...InfoMessageWithList.parameters,docs:{...InfoMessageWithList.parameters?.docs,source:{originalSource:"(args: MessageProps) => <Message {...args} />",...InfoMessageWithList.parameters?.docs?.source}}}}}]);