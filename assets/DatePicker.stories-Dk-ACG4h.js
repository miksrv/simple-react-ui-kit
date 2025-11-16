import{j as e}from"./index-Da4alzwd.js";import{r as m,R as u}from"./iframe-6Tuep674.js";import{D as g}from"./Table-DM2sN4Xc.js";import"./index-CbSRJHr_.js";import"./preload-helper-PPVm8Dsz.js";const y={title:"Controls/DatePicker",component:g,argTypes:{locale:{control:{type:"select"},options:["en","ru"],table:{type:{summary:'"en", "ru"'}}},datePeriod:{control:"object",description:"Tuple of start and end dates (YYYY-MM-DD)"},minDate:{control:"text"},maxDate:{control:"text"},buttonMode:{control:{type:"select"},options:["primary","secondary","outline","link"],table:{type:{summary:'"primary", "secondary", "outline", "link"'}}},onDateSelect:{action:"date selected",table:{disable:!1}},onPeriodSelect:{action:"period selected",table:{disable:!1}},hidePresets:{control:"object",description:"List of preset options to hide"},periodDatesFormat:{control:"text",description:"Format for period range (default: DD.MM.YYYY)"},singleDateFormat:{control:"text",description:"Format for single date (default: DD MMMM YYYY)"},placeholder:{control:"text",description:"Caption when no date is selected"},disabled:{control:"boolean"}}},o=d=>{const[i,c]=m.useState({});return e.jsxs("div",{style:{position:"relative",height:290},children:[e.jsx(g,{...d,onPeriodSelect:(l,p)=>c({start:l,end:p})}),e.jsxs("div",{style:{marginTop:16},children:[e.jsx("strong",{children:"Selected range:"})," ",i.start||"-"," — ",i.end||"-"]})]})},n=o.bind({});n.args={locale:"en",datePeriod:[new Date(Date.now()-8640*60*1e3).toISOString().slice(0,10),new Date().toISOString().slice(0,10)]};const t=o.bind({});t.args={locale:"en"};t.decorators=[()=>{const[d,i]=u.useState(void 0),c=l=>i(l);return e.jsxs("div",{style:{position:"relative",height:290},children:[e.jsx(g,{locale:"en",onDateSelect:c}),e.jsxs("div",{style:{marginTop:16},children:[e.jsx("strong",{children:"Selected date:"})," ",d||"-"]})]})}];const r=o.bind({});r.args={locale:"ru"};const a=o.bind({});a.args={minDate:"2024-06-01",maxDate:"2024-06-30"};const s=o.bind({});s.args={disabled:!0};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: DatePickerProps) => {
  const [range, setRange] = useState<{
    start?: string;
    end?: string;
  }>({});
  return <div style={{
    position: 'relative',
    height: 290
  }}>
            <DatePicker {...args} onPeriodSelect={(start, end) => setRange({
      start,
      end
    })} />
            <div style={{
      marginTop: 16
    }}>
                <strong>Selected range:</strong> {range.start || '-'} &mdash; {range.end || '-'}
            </div>
        </div>;
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: DatePickerProps) => {
  const [range, setRange] = useState<{
    start?: string;
    end?: string;
  }>({});
  return <div style={{
    position: 'relative',
    height: 290
  }}>
            <DatePicker {...args} onPeriodSelect={(start, end) => setRange({
      start,
      end
    })} />
            <div style={{
      marginTop: 16
    }}>
                <strong>Selected range:</strong> {range.start || '-'} &mdash; {range.end || '-'}
            </div>
        </div>;
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: DatePickerProps) => {
  const [range, setRange] = useState<{
    start?: string;
    end?: string;
  }>({});
  return <div style={{
    position: 'relative',
    height: 290
  }}>
            <DatePicker {...args} onPeriodSelect={(start, end) => setRange({
      start,
      end
    })} />
            <div style={{
      marginTop: 16
    }}>
                <strong>Selected range:</strong> {range.start || '-'} &mdash; {range.end || '-'}
            </div>
        </div>;
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: DatePickerProps) => {
  const [range, setRange] = useState<{
    start?: string;
    end?: string;
  }>({});
  return <div style={{
    position: 'relative',
    height: 290
  }}>
            <DatePicker {...args} onPeriodSelect={(start, end) => setRange({
      start,
      end
    })} />
            <div style={{
      marginTop: 16
    }}>
                <strong>Selected range:</strong> {range.start || '-'} &mdash; {range.end || '-'}
            </div>
        </div>;
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: DatePickerProps) => {
  const [range, setRange] = useState<{
    start?: string;
    end?: string;
  }>({});
  return <div style={{
    position: 'relative',
    height: 290
  }}>
            <DatePicker {...args} onPeriodSelect={(start, end) => setRange({
      start,
      end
    })} />
            <div style={{
      marginTop: 16
    }}>
                <strong>Selected range:</strong> {range.start || '-'} &mdash; {range.end || '-'}
            </div>
        </div>;
}`,...s.parameters?.docs?.source}}};const x=["Default","DateSelect","RussianLocale","WithMinMax","Disabled"];export{t as DateSelect,n as Default,s as Disabled,r as RussianLocale,a as WithMinMax,x as __namedExportsOrder,y as default};
