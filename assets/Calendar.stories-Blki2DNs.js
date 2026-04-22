import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-BeWxJaLi.js";import{t as r}from"./jsx-runtime-BRDTPpDF.js";import{h as i,t as a}from"./src-F_ng3KuD.js";var o,s,c,l,u,d,f,p,m,h,g;t((()=>{o=e(n(),1),a(),s=r(),c=e=>{let[t,n]=(0,o.useState)(``);return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(i,{...e,onDateSelect:e=>n(e)}),t&&(0,s.jsxs)(`p`,{style:{marginTop:8,fontSize:13,color:`#555`},children:[`Selected: `,(0,s.jsx)(`strong`,{children:t})]})]})},l=()=>{let[e,t]=(0,o.useState)([]);return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(i,{onPeriodSelect:(e,n)=>t([e,n]),datePeriod:e}),e[0]&&e[1]&&(0,s.jsxs)(`p`,{style:{marginTop:8,fontSize:13,color:`#555`},children:[`Range: `,(0,s.jsx)(`strong`,{children:e[0]}),` – `,(0,s.jsx)(`strong`,{children:e[1]})]})]})},u={title:`Date/Calendar`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"An inline calendar that supports single-date selection (`onDateSelect`) and date-range selection (`onPeriodSelect`). Accepts `minDate` / `maxDate` constraints, an optional pre-selected period via `datePeriod`, and English or Russian locale."}}},argTypes:{locale:{control:`inline-radio`,options:[`en`,`ru`],description:`Language used for month and day-of-week labels`,table:{defaultValue:{summary:`en`},type:{summary:`"en" | "ru"`}}},hideDaysOfWeek:{control:`boolean`,description:`Hides the row of day-of-week abbreviations above the day grid`,table:{defaultValue:{summary:`false`}}},datePeriod:{control:!1,description:"Pre-selected period as a `[startDate, endDate]` tuple in `YYYY-MM-DD` format",table:{type:{summary:`[string?, string?]`}}},minDate:{control:`text`,description:"Earliest selectable date in `YYYY-MM-DD` format"},maxDate:{control:`text`,description:"Latest selectable date in `YYYY-MM-DD` format"},containerClassName:{control:`text`,description:`Additional CSS class applied to the calendar container element`},onDateSelect:{control:!1,description:"Callback fired on single-date click. Receives the date string in `YYYY-MM-DD` format."},onPeriodSelect:{control:!1,description:"Callback fired once both range endpoints are selected. Receives `(startDate, endDate)` in `YYYY-MM-DD` format. Enables range-selection mode."}}},d={render:e=>(0,s.jsx)(c,{...e}),args:{locale:`en`},parameters:{docs:{description:{story:`Single-date selection mode. Click any day to select it; the chosen date is displayed below the calendar. Use the Controls panel to switch locale or hide the days-of-week row.`}}}},f={name:`Period Selection`,render:()=>(0,s.jsx)(l,{}),parameters:{docs:{description:{story:"Range-selection mode is activated by providing the `onPeriodSelect` callback. Click once to set the start date, then again to set the end date."}}}},p={name:`With Min / Max Dates`,render:()=>{let e=new Date,t=e=>e.toISOString().slice(0,10),n=t(new Date(e.getFullYear(),e.getMonth(),e.getDate()-5)),r=t(new Date(e.getFullYear(),e.getMonth(),e.getDate()+10));return(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`p`,{style:{fontSize:13,marginBottom:8,color:`#555`},children:[`Selectable range: `,(0,s.jsx)(`strong`,{children:n}),` to `,(0,s.jsx)(`strong`,{children:r})]}),(0,s.jsx)(i,{minDate:n,maxDate:r,onDateSelect:()=>{}})]})},parameters:{docs:{description:{story:"Days outside the `minDate` – `maxDate` window are greyed out and cannot be selected."}}}},m={name:`Locales (en vs ru)`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`32px`,flexWrap:`wrap`},children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{fontWeight:600,marginBottom:8},children:`English`}),(0,s.jsx)(i,{locale:`en`,onDateSelect:()=>{}})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{style:{fontWeight:600,marginBottom:8},children:`Russian`}),(0,s.jsx)(i,{locale:`ru`,onDateSelect:()=>{}})]})]}),parameters:{docs:{description:{story:`The same calendar rendered with English (default) and Russian locales side by side.`}}}},h={name:`Hidden Days-of-Week Row`,render:e=>(0,s.jsx)(i,{...e,onDateSelect:()=>{}}),args:{hideDaysOfWeek:!0,locale:`en`},parameters:{docs:{description:{story:"Setting `hideDaysOfWeek` removes the Mon–Sun header row for a more compact layout."}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <DefaultCalendarDemo {...args} />,
  args: {
    locale: 'en'
  },
  parameters: {
    docs: {
      description: {
        story: 'Single-date selection mode. Click any day to select it; the chosen date is displayed below the calendar. Use the Controls panel to switch locale or hide the days-of-week row.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Period Selection',
  render: () => <PeriodSelectionDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Range-selection mode is activated by providing the \`onPeriodSelect\` callback. Click once to set the start date, then again to set the end date.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'With Min / Max Dates',
  render: () => {
    const today = new Date();
    const fmt = (d: Date) => d.toISOString().slice(0, 10);
    const minDate = fmt(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5));
    const maxDate = fmt(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10));
    return <div>
                <p style={{
        fontSize: 13,
        marginBottom: 8,
        color: '#555'
      }}>
                    Selectable range: <strong>{minDate}</strong> to <strong>{maxDate}</strong>
                </p>
                <Calendar minDate={minDate} maxDate={maxDate} onDateSelect={() => {}} />
            </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Days outside the \`minDate\` – \`maxDate\` window are greyed out and cannot be selected.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Locales (en vs ru)',
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    flexWrap: 'wrap'
  }}>
            <div>
                <p style={{
        fontWeight: 600,
        marginBottom: 8
      }}>English</p>
                <Calendar locale='en' onDateSelect={() => {}} />
            </div>
            <div>
                <p style={{
        fontWeight: 600,
        marginBottom: 8
      }}>Russian</p>
                <Calendar locale='ru' onDateSelect={() => {}} />
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'The same calendar rendered with English (default) and Russian locales side by side.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Hidden Days-of-Week Row',
  render: args => <Calendar {...args} onDateSelect={() => {}} />,
  args: {
    hideDaysOfWeek: true,
    locale: 'en'
  },
  parameters: {
    docs: {
      description: {
        story: 'Setting \`hideDaysOfWeek\` removes the Mon–Sun header row for a more compact layout.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`PeriodSelection`,`WithMinMaxDates`,`Locales`,`HiddenDaysOfWeek`]}))();export{d as Default,h as HiddenDaysOfWeek,m as Locales,f as PeriodSelection,p as WithMinMaxDates,g as __namedExportsOrder,u as default};