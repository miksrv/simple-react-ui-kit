import{j as e}from"./index-n4Hpgybw.js";import{r as S}from"./iframe-DZqAIbXp.js";import{C as m}from"./Table-Cj5XwRKm.js";import"./index-BTYdBKT_.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Components/Calendar",component:m,argTypes:{hideDaysOfWeek:{control:"boolean"},datePeriod:{control:"object"},minDate:{control:"text"},maxDate:{control:"text"},locale:{control:{type:"select"},options:["en","ru"],table:{defaultValue:{summary:"en"},type:{summary:'"en" | "ru"'}}}}},h=a=>{const[i,g]=S.useState({}),p=(u,D)=>{g({start:u,end:D})};return e.jsxs(e.Fragment,{children:[e.jsx(m,{...a,onPeriodSelect:p}),e.jsxs("div",{style:{marginTop:16},children:[e.jsx("strong",{children:"Selected range:"})," ",i.start||"-"," — ",i.end||"-"]})]})},t=h.bind({});t.args={locale:"en"};const x=a=>{const[i,g]=S.useState(),p=u=>{g(u)};return e.jsxs(e.Fragment,{children:[e.jsx(m,{...a,onDateSelect:p}),e.jsxs("div",{style:{marginTop:16},children:[e.jsx("strong",{children:"Selected date:"})," ",i||"-"]})]})},r=x.bind({});r.args={locale:"en"};const l=a=>e.jsx(m,{...a}),s=l.bind({});s.args={locale:"en"};const n=l.bind({});n.args={locale:"ru"};const o=l.bind({});o.args={datePeriod:["2024-06-01","2024-06-10"]};const c=l.bind({});c.args={hideDaysOfWeek:!0};const d=l.bind({});d.args={minDate:"2024-06-05",maxDate:"2024-06-20"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const [range, setRange] = useState<{
    start?: string;
    end?: string;
  }>({});
  const handlePeriodSelect = (startDate?: string, endDate?: string) => {
    setRange({
      start: startDate,
      end: endDate
    });
  };
  return <>
            <Calendar {...args} onPeriodSelect={handlePeriodSelect} />
            <div style={{
      marginTop: 16
    }}>
                <strong>Selected range:</strong> {range.start || '-'} &mdash; {range.end || '-'}
            </div>
        </>;
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const [selectedDate, setSelectedDate] = useState<string | undefined>();
  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };
  return <>
            <Calendar {...args} onDateSelect={handleDateSelect} />
            <div style={{
      marginTop: 16
    }}>
                <strong>Selected date:</strong> {selectedDate || '-'}
            </div>
        </>;
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"args => <Calendar {...args} />",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"args => <Calendar {...args} />",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"args => <Calendar {...args} />",...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <Calendar {...args} />",...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"args => <Calendar {...args} />",...d.parameters?.docs?.source}}};const P=["WithPeriodSelect","WithDateSelect","Default","RussianLocale","WithRange","HideDaysOfWeek","WithMinMax"];export{s as Default,c as HideDaysOfWeek,n as RussianLocale,r as WithDateSelect,d as WithMinMax,t as WithPeriodSelect,o as WithRange,P as __namedExportsOrder,b as default};
