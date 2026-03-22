import{j as e}from"./index-Bbd3PiGO.js";import{r as u}from"./iframe-CMmsCrn5.js";import{D as r,P as p}from"./Table-DWFI1cym.js";import"./index-ThbIq_AC.js";import"./preload-helper-PPVm8Dsz.js";const g=t=>{const[o,c]=u.useState({});return e.jsxs("div",{style:{minHeight:300},children:[e.jsx(r,{...t,onPeriodSelect:(m,h)=>c({start:m,end:h})}),o.start&&e.jsxs("p",{style:{marginTop:12,fontSize:13,color:"#555"},children:["Selected: ",e.jsx("strong",{children:o.start})," – ",e.jsx("strong",{children:o.end})]})]})},y=()=>{const[t,o]=u.useState("");return e.jsxs("div",{style:{minHeight:300},children:[e.jsx(r,{placeholder:"Pick a date",onDateSelect:c=>o(c)}),t&&e.jsxs("p",{style:{marginTop:12,fontSize:13,color:"#555"},children:["Selected: ",e.jsx("strong",{children:t})]})]})},v={title:"Date/DatePicker",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"A button-triggered date/range picker built on top of `Popout` and `Calendar`. It combines a set of quick-select presets (Today, Last Day, Last Week, etc.) with an inline calendar for custom range or single-date selection. Presets are shown only when `onPeriodSelect` is provided."}}},argTypes:{locale:{control:"inline-radio",options:["en","ru"],description:"Language for month/day labels and preset captions",table:{defaultValue:{summary:"en"},type:{summary:'"en" | "ru"'}}},placeholder:{control:"text",description:"Text shown on the trigger button when no date is selected",table:{defaultValue:{summary:"Select date"}}},buttonMode:{control:"select",options:["primary","secondary","outline","link"],description:"Visual mode passed to the underlying `Button` trigger",table:{defaultValue:{summary:"primary"},type:{summary:'"primary" | "secondary" | "outline" | "link"'}}},disabled:{control:"boolean",description:"Disables the picker; the trigger button becomes non-interactive",table:{defaultValue:{summary:"false"}}},periodDatesFormat:{control:"text",description:"Day.js format string used to display a date range on the trigger button",table:{defaultValue:{summary:"DD.MM.YYYY"}}},singleDateFormat:{control:"text",description:"Day.js format string used to display a single selected date",table:{defaultValue:{summary:"DD MMMM YYYY"}}},hidePresets:{control:!1,description:"Array of `PresetOption` enum values to hide from the preset list. Use to remove presets that are not relevant to your use case.",table:{type:{summary:"PresetOption[]"}}},datePeriod:{control:!1,description:"Controlled value — `[startDate, endDate]` in `YYYY-MM-DD` format",table:{type:{summary:"[string?, string?]"}}},minDate:{control:"text",description:"Earliest selectable date in `YYYY-MM-DD` format"},maxDate:{control:"text",description:"Latest selectable date in `YYYY-MM-DD` format"},hideDaysOfWeek:{control:"boolean",description:"Hides the day-of-week row in the embedded calendar"},onDateSelect:{control:!1,description:"Callback for single-date mode. Receives the selected date in `YYYY-MM-DD`."},onPeriodSelect:{control:!1,description:"Callback for range mode. Receives `(startDate, endDate)`. Also enables the preset buttons."}}},s={render:t=>e.jsx(g,{...t}),args:{locale:"en",placeholder:"Select date range",buttonMode:"primary"},parameters:{docs:{description:{story:"Default date-range picker with all presets visible. Click the button to open the popout, choose a preset or pick start/end dates on the calendar."}}}},n={name:"Single Date Mode",render:()=>e.jsx(y,{}),parameters:{docs:{description:{story:"Use `onDateSelect` instead of `onPeriodSelect` to enable single-date mode. No presets are shown."}}}},a={name:"With Hidden Presets",render:()=>e.jsx("div",{style:{minHeight:300},children:e.jsx(r,{placeholder:"Select range",hidePresets:[p.TODAY,p.DAY,p.YEAR],onPeriodSelect:()=>{}})}),parameters:{docs:{description:{story:"Pass a `hidePresets` array of `PresetOption` values to remove specific quick-select options from the list."}}}},i={args:{disabled:!0,placeholder:"Date picker disabled"},parameters:{docs:{description:{story:"When `disabled` is `true` the trigger button is non-interactive and visually muted."}}}},d={name:"Russian Locale",render:()=>e.jsx("div",{style:{minHeight:300},children:e.jsx(r,{locale:"ru",placeholder:"Выберите период",buttonMode:"secondary",onPeriodSelect:()=>{}})}),parameters:{docs:{description:{story:'With `locale="ru"` month names, day-of-week labels, and preset captions switch to Russian.'}}}},l={name:"Outline Button Mode",render:()=>e.jsx("div",{style:{minHeight:300},children:e.jsx(r,{buttonMode:"outline",placeholder:"Select date",onPeriodSelect:()=>{}})}),parameters:{docs:{description:{story:"The `buttonMode` prop controls the visual style of the trigger button. Here it uses the `outline` mode."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <DefaultDatePickerDemo {...args} />,
  args: {
    locale: 'en',
    placeholder: 'Select date range',
    buttonMode: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default date-range picker with all presets visible. Click the button to open the popout, choose a preset or pick start/end dates on the calendar.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Single Date Mode',
  render: () => <SingleDateModeDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Use \`onDateSelect\` instead of \`onPeriodSelect\` to enable single-date mode. No presets are shown.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'With Hidden Presets',
  render: () => <div style={{
    minHeight: 300
  }}>
            <DatePicker placeholder='Select range' hidePresets={[PresetOption.TODAY, PresetOption.DAY, PresetOption.YEAR]} onPeriodSelect={() => {}} />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Pass a \`hidePresets\` array of \`PresetOption\` values to remove specific quick-select options from the list.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Date picker disabled'
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`disabled\` is \`true\` the trigger button is non-interactive and visually muted.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Russian Locale',
  render: () => <div style={{
    minHeight: 300
  }}>
            <DatePicker locale='ru' placeholder='Выберите период' buttonMode='secondary' onPeriodSelect={() => {}} />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'With \`locale="ru"\` month names, day-of-week labels, and preset captions switch to Russian.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Outline Button Mode',
  render: () => <div style={{
    minHeight: 300
  }}>
            <DatePicker buttonMode='outline' placeholder='Select date' onPeriodSelect={() => {}} />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'The \`buttonMode\` prop controls the visual style of the trigger button. Here it uses the \`outline\` mode.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const M=["Default","SingleDateMode","WithHiddenPresets","Disabled","RussianLocale","OutlineButton"];export{s as Default,i as Disabled,l as OutlineButton,d as RussianLocale,n as SingleDateMode,a as WithHiddenPresets,M as __namedExportsOrder,v as default};
