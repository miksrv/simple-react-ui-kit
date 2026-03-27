import{j as e}from"./index-BNGFX5oi.js";import{r as m}from"./iframe-NGxwQjTZ.js";import{C as a}from"./Table-DadTRiB0.js";import"./index-B53Eu0ub.js";import"./preload-helper-PPVm8Dsz.js";const g=t=>{const[n,o]=m.useState("");return e.jsxs("div",{children:[e.jsx(a,{...t,onDateSelect:r=>o(r)}),n&&e.jsxs("p",{style:{marginTop:8,fontSize:13,color:"#555"},children:["Selected: ",e.jsx("strong",{children:n})]})]})},D=()=>{const[t,n]=m.useState([]);return e.jsxs("div",{children:[e.jsx(a,{onPeriodSelect:(o,r)=>n([o,r]),datePeriod:t}),t[0]&&t[1]&&e.jsxs("p",{style:{marginTop:8,fontSize:13,color:"#555"},children:["Range: ",e.jsx("strong",{children:t[0]})," – ",e.jsx("strong",{children:t[1]})]})]})},S={title:"Date/Calendar",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"An inline calendar that supports single-date selection (`onDateSelect`) and date-range selection (`onPeriodSelect`). Accepts `minDate` / `maxDate` constraints, an optional pre-selected period via `datePeriod`, and English or Russian locale."}}},argTypes:{locale:{control:"inline-radio",options:["en","ru"],description:"Language used for month and day-of-week labels",table:{defaultValue:{summary:"en"},type:{summary:'"en" | "ru"'}}},hideDaysOfWeek:{control:"boolean",description:"Hides the row of day-of-week abbreviations above the day grid",table:{defaultValue:{summary:"false"}}},datePeriod:{control:!1,description:"Pre-selected period as a `[startDate, endDate]` tuple in `YYYY-MM-DD` format",table:{type:{summary:"[string?, string?]"}}},minDate:{control:"text",description:"Earliest selectable date in `YYYY-MM-DD` format"},maxDate:{control:"text",description:"Latest selectable date in `YYYY-MM-DD` format"},containerClassName:{control:"text",description:"Additional CSS class applied to the calendar container element"},onDateSelect:{control:!1,description:"Callback fired on single-date click. Receives the date string in `YYYY-MM-DD` format."},onPeriodSelect:{control:!1,description:"Callback fired once both range endpoints are selected. Receives `(startDate, endDate)` in `YYYY-MM-DD` format. Enables range-selection mode."}}},s={render:t=>e.jsx(g,{...t}),args:{locale:"en"},parameters:{docs:{description:{story:"Single-date selection mode. Click any day to select it; the chosen date is displayed below the calendar. Use the Controls panel to switch locale or hide the days-of-week row."}}}},i={name:"Period Selection",render:()=>e.jsx(D,{}),parameters:{docs:{description:{story:"Range-selection mode is activated by providing the `onPeriodSelect` callback. Click once to set the start date, then again to set the end date."}}}},d={name:"With Min / Max Dates",render:()=>{const t=new Date,n=p=>p.toISOString().slice(0,10),o=n(new Date(t.getFullYear(),t.getMonth(),t.getDate()-5)),r=n(new Date(t.getFullYear(),t.getMonth(),t.getDate()+10));return e.jsxs("div",{children:[e.jsxs("p",{style:{fontSize:13,marginBottom:8,color:"#555"},children:["Selectable range: ",e.jsx("strong",{children:o})," to ",e.jsx("strong",{children:r})]}),e.jsx(a,{minDate:o,maxDate:r,onDateSelect:()=>{}})]})},parameters:{docs:{description:{story:"Days outside the `minDate` – `maxDate` window are greyed out and cannot be selected."}}}},l={name:"Locales (en vs ru)",render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontWeight:600,marginBottom:8},children:"English"}),e.jsx(a,{locale:"en",onDateSelect:()=>{}})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontWeight:600,marginBottom:8},children:"Russian"}),e.jsx(a,{locale:"ru",onDateSelect:()=>{}})]})]}),parameters:{docs:{description:{story:"The same calendar rendered with English (default) and Russian locales side by side."}}}},c={name:"Hidden Days-of-Week Row",render:t=>e.jsx(a,{...t,onDateSelect:()=>{}}),args:{hideDaysOfWeek:!0,locale:"en"},parameters:{docs:{description:{story:"Setting `hideDaysOfWeek` removes the Mon–Sun header row for a more compact layout."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Period Selection',
  render: () => <PeriodSelectionDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Range-selection mode is activated by providing the \`onPeriodSelect\` callback. Click once to set the start date, then again to set the end date.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const w=["Default","PeriodSelection","WithMinMaxDates","Locales","HiddenDaysOfWeek"];export{s as Default,c as HiddenDaysOfWeek,l as Locales,i as PeriodSelection,d as WithMinMaxDates,w as __namedExportsOrder,S as default};
