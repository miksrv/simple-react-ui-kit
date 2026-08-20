import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{b as i,t as a,v as o}from"./src-DMUTri94.js";var s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=t((()=>{s=e(n(),1),a(),c=r(),l=e=>{let[t,n]=(0,s.useState)({});return(0,c.jsxs)(`div`,{style:{minHeight:300},children:[(0,c.jsx)(o,{...e,onPeriodSelect:(e,t)=>n({start:e,end:t})}),t.start&&(0,c.jsxs)(`p`,{style:{marginTop:12,fontSize:13,color:`#555`},children:[`Selected: `,(0,c.jsx)(`strong`,{children:t.start}),` – `,(0,c.jsx)(`strong`,{children:t.end})]})]})},u=()=>{let[e,t]=(0,s.useState)(``);return(0,c.jsxs)(`div`,{style:{minHeight:300},children:[(0,c.jsx)(o,{placeholder:`Pick a date`,onDateSelect:e=>t(e)}),e&&(0,c.jsxs)(`p`,{style:{marginTop:12,fontSize:13,color:`#555`},children:[`Selected: `,(0,c.jsx)(`strong`,{children:e})]})]})},d={title:`Date/DatePicker`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:"A button-triggered date/range picker built on top of `Popout` and `Calendar`. It combines a set of quick-select presets (Today, Last Day, Last Week, etc.) with an inline calendar for custom range or single-date selection. Presets are shown only when `onPeriodSelect` is provided."}}},argTypes:{locale:{control:`inline-radio`,options:[`en`,`ru`],description:"Language for month/day labels, preset captions, and the formatted date text on the trigger button (`periodDatesFormat` / `singleDateFormat`). Applied per-call via `dayjs(date).locale(locale)` — it does not read or mutate the host app global `dayjs.locale()`.",table:{defaultValue:{summary:`en`},type:{summary:`"en" | "ru"`}}},placeholder:{control:`text`,description:`Text shown on the trigger button when no date is selected`,table:{defaultValue:{summary:`Select date`}}},buttonMode:{control:`select`,options:[`primary`,`secondary`,`outline`,`link`],description:"Visual mode passed to the underlying `Button` trigger",table:{defaultValue:{summary:`primary`},type:{summary:`"primary" | "secondary" | "outline" | "link"`}}},disabled:{control:`boolean`,description:`Disables the picker; the trigger button becomes non-interactive`,table:{defaultValue:{summary:`false`}}},periodDatesFormat:{control:`text`,description:`Day.js format string used to display a date range on the trigger button`,table:{defaultValue:{summary:`DD.MM.YYYY`}}},singleDateFormat:{control:`text`,description:`Day.js format string used to display a single selected date`,table:{defaultValue:{summary:`DD MMMM YYYY`}}},hidePresets:{control:!1,description:"Array of `PresetOption` enum values to hide from the preset list. Use to remove presets that are not relevant to your use case.",table:{type:{summary:`PresetOption[]`}}},datePeriod:{control:!1,description:"Controlled value — `[startDate, endDate]` in `YYYY-MM-DD` format",table:{type:{summary:`[string?, string?]`}}},minDate:{control:`text`,description:"Earliest selectable date in `YYYY-MM-DD` format"},maxDate:{control:`text`,description:"Latest selectable date in `YYYY-MM-DD` format"},hideDaysOfWeek:{control:`boolean`,description:`Hides the day-of-week row in the embedded calendar`},highlightToday:{control:`boolean`,description:`Highlights the current day in the embedded calendar`,table:{defaultValue:{summary:`true`}}},showTodayButton:{control:`boolean`,description:`Shows a button in the calendar header to navigate back to the current month`,table:{defaultValue:{summary:`false`}}},onDateSelect:{control:!1,description:"Callback for single-date mode. Receives the selected date in `YYYY-MM-DD`."},onPeriodSelect:{control:!1,description:"Callback for range mode. Receives `(startDate, endDate)`. Also enables the preset buttons."}}},f={render:e=>(0,c.jsx)(l,{...e}),args:{locale:`en`,placeholder:`Select date range`,buttonMode:`primary`},parameters:{docs:{description:{story:`Default date-range picker with all presets visible. Click the button to open the popout, choose a preset or pick start/end dates on the calendar.`}}}},p={name:`Single Date Mode`,render:()=>(0,c.jsx)(u,{}),parameters:{docs:{description:{story:"Use `onDateSelect` instead of `onPeriodSelect` to enable single-date mode. No presets are shown."}}}},m={name:`With Hidden Presets`,render:()=>(0,c.jsx)(`div`,{style:{minHeight:300},children:(0,c.jsx)(o,{placeholder:`Select range`,hidePresets:[i.TODAY,i.DAY,i.YEAR],onPeriodSelect:()=>{}})}),parameters:{docs:{description:{story:"Pass a `hidePresets` array of `PresetOption` values to remove specific quick-select options from the list."}}}},h={args:{disabled:!0,placeholder:`Date picker disabled`},parameters:{docs:{description:{story:"When `disabled` is `true` the trigger button is non-interactive and visually muted."}}}},g={name:`Russian Locale`,render:()=>(0,c.jsx)(`div`,{style:{minHeight:300},children:(0,c.jsx)(o,{locale:`ru`,placeholder:`Выберите период`,buttonMode:`secondary`,datePeriod:[`2024-06-15`,`2024-06-15`],onPeriodSelect:()=>{}})}),parameters:{docs:{description:{story:'With `locale="ru"` month names, day-of-week labels, preset captions, and the formatted date shown on the trigger button (here, a fixed `datePeriod` that does not match any preset) all switch to Russian — e.g. "15 июня 2024" instead of "15 June 2024".'}}}},_={name:`Outline Button Mode`,render:()=>(0,c.jsx)(`div`,{style:{minHeight:300},children:(0,c.jsx)(o,{buttonMode:`outline`,placeholder:`Select date`,onPeriodSelect:()=>{}})}),parameters:{docs:{description:{story:"The `buttonMode` prop controls the visual style of the trigger button. Here it uses the `outline` mode."}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Single Date Mode',
  render: () => <SingleDateModeDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Use \`onDateSelect\` instead of \`onPeriodSelect\` to enable single-date mode. No presets are shown.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Russian Locale',
  render: () => <div style={{
    minHeight: 300
  }}>
            <DatePicker locale='ru' placeholder='Выберите период' buttonMode='secondary' datePeriod={['2024-06-15', '2024-06-15']} onPeriodSelect={() => {}} />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'With \`locale="ru"\` month names, day-of-week labels, preset captions, and the formatted date shown on the trigger button (here, a fixed \`datePeriod\` that does not match any preset) all switch to Russian — e.g. "15 июня 2024" instead of "15 June 2024".'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`,`SingleDateMode`,`WithHiddenPresets`,`Disabled`,`RussianLocale`,`OutlineButton`]})))()}y();export{f as Default,h as Disabled,_ as OutlineButton,g as RussianLocale,p as SingleDateMode,m as WithHiddenPresets,v as __namedExportsOrder,d as default};