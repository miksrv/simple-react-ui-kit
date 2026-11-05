import{a as e,n as t,t as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-DCluhXK3.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./Button-CzclXryx.js";import{n as s,r as c,t as l}from"./Calendar-uEUf_XC6.js";import{n as u,t as d}from"./Popout-5Sf9iEBG.js";var f=n(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r(c()):typeof define==`function`&&define.amd?define([`dayjs`],r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_locale_ru=r(n.dayjs)})(e,(function(e){function t(e){return e&&typeof e==`object`&&`default`in e?e:{default:e}}var n=t(e),r=`января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря`.split(`_`),i=`январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь`.split(`_`),a=`янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.`.split(`_`),o=`янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.`.split(`_`),s=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function c(e,t,n){var r,i;return n===`m`?t?`минута`:`минуту`:e+` `+(r=+e,i={mm:t?`минута_минуты_минут`:`минуту_минуты_минут`,hh:`час_часа_часов`,dd:`день_дня_дней`,MM:`месяц_месяца_месяцев`,yy:`год_года_лет`}[n].split(`_`),r%10==1&&r%100!=11?i[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?i[1]:i[2])}var l=function(e,t){return s.test(t)?r[e.month()]:i[e.month()]};l.s=i,l.f=r;var u=function(e,t){return s.test(t)?a[e.month()]:o[e.month()]};u.s=o,u.f=a;var d={name:`ru`,weekdays:`воскресенье_понедельник_вторник_среда_четверг_пятница_суббота`.split(`_`),weekdaysShort:`вск_пнд_втр_срд_чтв_птн_сбт`.split(`_`),weekdaysMin:`вс_пн_вт_ср_чт_пт_сб`.split(`_`),months:l,monthsShort:u,weekStart:1,yearStart:4,formats:{LT:`H:mm`,LTS:`H:mm:ss`,L:`DD.MM.YYYY`,LL:`D MMMM YYYY г.`,LLL:`D MMMM YYYY г., H:mm`,LLLL:`dddd, D MMMM YYYY г., H:mm`},relativeTime:{future:`через %s`,past:`%s назад`,s:`несколько секунд`,m:c,mm:c,h:`час`,hh:c,d:`день`,dd:c,M:`месяц`,MM:c,y:`год`,yy:c},ordinal:function(e){return e},meridiem:function(e){return e<4?`ночи`:e<12?`утра`:e<17?`дня`:`вечера`}};return n.default.locale(d,null,!0),d}))})),p;function m(){return(m=t((()=>{p=function(e){return e.TODAY=`today`,e.DAY=`day`,e.WEEK=`week`,e.MONTH=`month`,e.QUARTER=`quarter`,e.HALF_YEAR=`half_year`,e.YEAR=`year`,e}({})})))()}var h,g,_,v,y,b,x;function S(){return(S=t((()=>{h=e(c(),1),g=e(f(),1),m(),_=e=>[{key:p.TODAY,endDate:e.toDate()},{key:p.DAY,endDate:e.subtract(1,`day`).toDate()},{key:p.WEEK,endDate:e.subtract(1,`week`).toDate()},{key:p.MONTH,endDate:e.subtract(1,`month`).toDate()},{key:p.QUARTER,endDate:e.subtract(3,`month`).toDate()},{key:p.HALF_YEAR,endDate:e.subtract(6,`month`).toDate()},{key:p.YEAR,endDate:e.subtract(1,`year`).toDate()}],v={[p.TODAY]:`Today`,[p.DAY]:`24 Hours`,[p.WEEK]:`Last Week`,[p.MONTH]:`Last Month`,[p.QUARTER]:`Last Quarter`,[p.HALF_YEAR]:`Last 6 Months`,[p.YEAR]:`Last Year`},y={[p.TODAY]:`Сегодня`,[p.DAY]:`Последние сутки`,[p.WEEK]:`Последняя неделя`,[p.MONTH]:`Последний месяц`,[p.QUARTER]:`Последний квартал`,[p.HALF_YEAR]:`Последние полгода`,[p.YEAR]:`Последний год`},b=(e,t=`YYYY-MM-DD`,n)=>(0,h.default)(e).locale(n===`ru`?h.default.Ls.ru?`ru`:g.default:`en`).format(t),x=(e,t,n,r)=>{if(!t||!n)return;let i=(0,h.default)(t);if((0,h.default)(n).isSame(e,`day`))for(let t of _(e)){let e=(0,h.default)(t.endDate);if(i.isSame(e,`day`))return r===`ru`?y[t.key]:v[t.key]}}})))()}var C,w,T,E;function D(){return(D=t((()=>{C=`_datePickerContainer_1q027_1`,w=`_presetList_1q027_10`,T=`_calendarWithPresets_1q027_28`,E={datePickerContainer:C,presetList:w,calendarWithPresets:T}})))()}var O,k,A,j;function M(){return(M=t((()=>{O=e(r(),1),k=e(c(),1),a(),s(),u(),S(),D(),A=i(),j=({periodDatesFormat:e=`DD.MM.YYYY`,singleDateFormat:t=`DD MMMM YYYY`,placeholder:n=`Select date`,buttonMode:r=`primary`,disabled:i=!1,...a})=>{let s=(0,O.useRef)(null),[c,u]=(0,O.useState)([a.datePeriod?.[0],a.datePeriod?.[1]]),f=a.today??(0,k.default)().format(`YYYY-MM-DD`),p=(0,O.useMemo)(()=>(0,k.default)(f),[f]),m=(0,O.useMemo)(()=>_(p),[p]),h=(0,O.useMemo)(()=>x(p,c?.[0],c?.[1],a?.locale)||(c?.[0]&&c?.[1]?c?.[0]===c?.[1]?b(c?.[0],t,a?.locale):`${b(c?.[0],e,a?.locale)} - ${b(c?.[1],e,a?.locale)}`:``),[p,c,e,t,a?.locale]),g=(0,O.useCallback)(e=>{let t=m?.find(t=>t.key===e);if(p.isSame(c?.[1],`day`)&&(0,k.default)(c?.[0]).isSame(t?.endDate,`day`))return t},[p,c,m]),S=e=>{let t=m?.find(({key:t})=>t===e)?.endDate,n=(0,k.default)(t).format(`YYYY-MM-DD`),r=p.format(`YYYY-MM-DD`);u([n,r]),a?.onPeriodSelect?.(n,r),s.current&&s.current.close()},C=(e,t)=>{u([e,t]),a?.onPeriodSelect?.(e,t),s.current&&s.current.close()},w=e=>{u([e,e]),a?.onDateSelect?.(e),s.current&&s.current.close()};return(0,O.useEffect)(()=>{(a.datePeriod?.[0]!==c?.[0]||a.datePeriod?.[1]!==c?.[1])&&u([a.datePeriod?.[0],a.datePeriod?.[1]])},[a.datePeriod]),(0,A.jsx)(d,{ref:s,position:`left`,disabled:i,trigger:(0,A.jsx)(o,{mode:r,disabled:i,children:h||n}),children:(0,A.jsxs)(`div`,{className:E.datePickerContainer,children:[a?.onPeriodSelect&&(0,A.jsx)(`div`,{className:E.presetList,children:m?.filter(({key:e})=>!a.hidePresets||!a.hidePresets.includes(e))?.map(({key:e})=>(0,A.jsx)(o,{mode:g(e)?.key?`secondary`:`outline`,onClick:()=>S(e),children:a?.locale===`ru`?y[e]:v[e]},e))}),(0,A.jsx)(l,{...a,today:f,containerClassName:a?.onPeriodSelect&&E.calendarWithPresets,datePeriod:[c?.[0],c?.[1]],onDateSelect:a?.onDateSelect?w:void 0,onPeriodSelect:a?.onPeriodSelect?C:void 0})]})})}})))()}var N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=t((()=>{N=e(r(),1),M(),m(),P=i(),F=e=>{let[t,n]=(0,N.useState)({});return(0,P.jsxs)(`div`,{style:{minHeight:300},children:[(0,P.jsx)(j,{...e,onPeriodSelect:(e,t)=>n({start:e,end:t})}),t.start&&(0,P.jsxs)(`p`,{style:{marginTop:12,fontSize:13,color:`#555`},children:[`Selected: `,(0,P.jsx)(`strong`,{children:t.start}),` – `,(0,P.jsx)(`strong`,{children:t.end})]})]})},I=()=>{let[e,t]=(0,N.useState)(``);return(0,P.jsxs)(`div`,{style:{minHeight:300},children:[(0,P.jsx)(j,{placeholder:`Pick a date`,onDateSelect:e=>t(e)}),e&&(0,P.jsxs)(`p`,{style:{marginTop:12,fontSize:13,color:`#555`},children:[`Selected: `,(0,P.jsx)(`strong`,{children:e})]})]})},L={title:`Date/DatePicker`,component:j,tags:[`autodocs`],parameters:{docs:{description:{component:"A button-triggered date/range picker built on top of `Popout` and `Calendar`. It combines a set of quick-select presets (Today, Last Day, Last Week, etc.) with an inline calendar for custom range or single-date selection. Presets are shown only when `onPeriodSelect` is provided."}}},argTypes:{locale:{control:`inline-radio`,options:[`en`,`ru`],description:"Language for month/day labels, preset captions, and the formatted date text on the trigger button (`periodDatesFormat` / `singleDateFormat`). Applied per-call via `dayjs(date).locale(locale)` — it does not read or mutate the host app global `dayjs.locale()`.",table:{defaultValue:{summary:`en`},type:{summary:`"en" | "ru"`}}},placeholder:{control:`text`,description:`Text shown on the trigger button when no date is selected`,table:{defaultValue:{summary:`Select date`}}},buttonMode:{control:`select`,options:[`primary`,`secondary`,`outline`,`link`],description:"Visual mode passed to the underlying `Button` trigger",table:{defaultValue:{summary:`primary`},type:{summary:`"primary" | "secondary" | "outline" | "link"`}}},disabled:{control:`boolean`,description:`Disables the picker; the trigger button becomes non-interactive`,table:{defaultValue:{summary:`false`}}},periodDatesFormat:{control:`text`,description:`Day.js format string used to display a date range on the trigger button`,table:{defaultValue:{summary:`DD.MM.YYYY`}}},singleDateFormat:{control:`text`,description:`Day.js format string used to display a single selected date`,table:{defaultValue:{summary:`DD MMMM YYYY`}}},hidePresets:{control:!1,description:"Array of `PresetOption` enum values to hide from the preset list. Use to remove presets that are not relevant to your use case.",table:{type:{summary:`PresetOption[]`}}},datePeriod:{control:!1,description:"Controlled value — `[startDate, endDate]` in `YYYY-MM-DD` format",table:{type:{summary:`[string?, string?]`}}},minDate:{control:`text`,description:"Earliest selectable date in `YYYY-MM-DD` format"},maxDate:{control:`text`,description:"Latest selectable date in `YYYY-MM-DD` format"},hideDaysOfWeek:{control:`boolean`,description:`Hides the day-of-week row in the embedded calendar`},highlightToday:{control:`boolean`,description:`Highlights the current day in the embedded calendar`,table:{defaultValue:{summary:`true`}}},showTodayButton:{control:`boolean`,description:`Shows a button in the calendar header to navigate back to the current month`,table:{defaultValue:{summary:`false`}}},today:{control:`text`,description:"The day that counts as today (`YYYY-MM-DD`). The presets count back from it and a period ending on it shows as its preset. Pass the date of the time zone of your data when it differs from the browser.",table:{defaultValue:{summary:`the date on the device`}}},onDateSelect:{control:!1,description:"Callback for single-date mode. Receives the selected date in `YYYY-MM-DD`."},onPeriodSelect:{control:!1,description:"Callback for range mode. Receives `(startDate, endDate)`. Also enables the preset buttons."}}},R={render:e=>(0,P.jsx)(F,{...e}),args:{locale:`en`,placeholder:`Select date range`,buttonMode:`primary`},parameters:{docs:{description:{story:`Default date-range picker with all presets visible. Click the button to open the popout, choose a preset or pick start/end dates on the calendar.`}}}},z={name:`Single Date Mode`,render:()=>(0,P.jsx)(I,{}),parameters:{docs:{description:{story:"Use `onDateSelect` instead of `onPeriodSelect` to enable single-date mode. No presets are shown."}}}},B={name:`With Hidden Presets`,render:()=>(0,P.jsx)(`div`,{style:{minHeight:300},children:(0,P.jsx)(j,{placeholder:`Select range`,hidePresets:[p.TODAY,p.DAY,p.YEAR],onPeriodSelect:()=>{}})}),parameters:{docs:{description:{story:"Pass a `hidePresets` array of `PresetOption` values to remove specific quick-select options from the list."}}}},V={args:{disabled:!0,placeholder:`Date picker disabled`},parameters:{docs:{description:{story:"When `disabled` is `true` the trigger button is non-interactive and visually muted."}}}},H={name:`Russian Locale`,render:()=>(0,P.jsx)(`div`,{style:{minHeight:300},children:(0,P.jsx)(j,{locale:`ru`,placeholder:`Выберите период`,buttonMode:`secondary`,datePeriod:[`2024-06-15`,`2024-06-15`],onPeriodSelect:()=>{}})}),parameters:{docs:{description:{story:'With `locale="ru"` month names, day-of-week labels, preset captions, and the formatted date shown on the trigger button (here, a fixed `datePeriod` that does not match any preset) all switch to Russian — e.g. "15 июня 2024" instead of "15 June 2024".'}}}},U={name:`Outline Button Mode`,render:()=>(0,P.jsx)(`div`,{style:{minHeight:300},children:(0,P.jsx)(j,{buttonMode:`outline`,placeholder:`Select date`,onPeriodSelect:()=>{}})}),parameters:{docs:{description:{story:"The `buttonMode` prop controls the visual style of the trigger button. Here it uses the `outline` mode."}}}},W=[`Default`,`SingleDateMode`,`WithHiddenPresets`,`Disabled`,`RussianLocale`,`OutlineButton`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Single Date Mode',
  render: () => <SingleDateModeDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Use \`onDateSelect\` instead of \`onPeriodSelect\` to enable single-date mode. No presets are shown.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}}})))()}G();export{R as Default,V as Disabled,U as OutlineButton,H as RussianLocale,z as SingleDateMode,B as WithHiddenPresets,W as __namedExportsOrder,L as default};