import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-BeWxJaLi.js";import{t as r}from"./jsx-runtime-BRDTPpDF.js";import{a as i,t as a}from"./src-BA6FstiM.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;t((()=>{o=e(n(),1),a(),s=r(),c={title:`Controls/Select`,component:i,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:"Universal select component: `Dropdown` and `MultiSelect` in one. Supports search, portals, icons, emojis, images, validation, and full keyboard accessibility.\n\n**Keyboard navigation:**\n- `↓` / `↑` — open dropdown and navigate through options (disabled options are skipped)\n- `Enter` — select the highlighted option (or first non-disabled option if none highlighted)\n- `Escape` — close dropdown\n- `Backspace` / `Delete` — remove last badge (multiple) or clear selection (single)\n- `Space` — toggle dropdown (non-searchable)"}}},argTypes:{className:{control:`text`,description:`Additional class names for custom styling`},required:{control:`boolean`,description:`Mark the select as required`},disabled:{control:`boolean`,description:`Disable the select`},multiple:{control:`boolean`,description:`Enable multiple selection`},searchable:{control:`boolean`,description:`Enable search input`},clearable:{control:`boolean`,description:`Show clear button to remove selection`},loading:{control:`boolean`,description:`Show loading spinner`},size:{control:{type:`inline-radio`},options:[`small`,`medium`,`large`],table:{type:{summary:`"small", "medium", "large"`}}},closeOnSelect:{control:`boolean`,description:`Whether the dropdown should close after selecting an option`},options:{control:!1,description:`Array of options to display in the select`},placeholder:{control:`text`,description:`Placeholder text to display when no option is selected`},notFoundCaption:{control:`text`,description:`Text to display if no options are found`},label:{control:`text`,description:`Label text for the select`},error:{control:`text`,description:`Error message to display when validation fails`},value:{control:!1,description:`Currently selected value(s)`},onSelect:{action:`onSelect`,description:`Callback triggered when options are selected`},onSearch:{action:`onSearch`,description:`Callback triggered when a search is made`},onOpen:{action:`onOpen`,description:`Callback triggered when the dropdown is opened`}}},l=[{key:`us`,value:`United States`,emoji:`🇺🇸`},{key:`ru`,value:`Russia`,emoji:`🇷🇺`},{key:`de`,value:`Germany`,emoji:`🇩🇪`},{key:`jp`,value:`Japan`,emoji:`🇯🇵`},{key:`fr`,value:`France`,emoji:`🇫🇷`},{key:`cn`,value:`China`,emoji:`🇨🇳`},{key:`br`,value:`Brazil`,emoji:`🇧🇷`}],u=[{key:`react`,value:`React`,icon:`StarFilled`},{key:`vue`,value:`Vue.js`,icon:`Award`},{key:`angular`,value:`Angular`,icon:`Chart`},{key:`svelte`,value:`Svelte`,icon:`Lightning`},{key:`node`,value:`Node.js`,icon:`Cloud`},{key:`python`,value:`Python`,icon:`Moon`},{key:`disabled`,value:`Disabled Option`,disabled:!0}],d=[{key:`temperature`,value:`Temperature Inside`,icon:`Thermometer`},{key:`pressure`,value:`Press.`,icon:`Pressure`},{key:`humidity`,value:`Humidity`,icon:`Water`},{key:`precipitation`,value:`Precipitation`,icon:`WaterDrop`},{key:`clouds`,value:`Clouds`,icon:`Cloud`}],f=e=>{let[t,n]=(0,o.useState)(e.value);return(0,s.jsx)(i,{...e,value:t,onSelect:t=>{e.multiple?n(t?.map(e=>e.key)||[]):n(t?.[0]?.key)}})},p={render:f,args:{options:l,multiple:!0,clearable:!1,searchable:!0,placeholder:`Select a country`,label:`Country`}},m={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,maxWidth:400},children:[(0,s.jsx)(f,{multiple:!1,placeholder:`Single Select`,label:`Single Select, No Search`,options:l}),(0,s.jsx)(f,{multiple:!1,searchable:!0,closeOnSelect:!1,placeholder:`Search...`,label:`Single Select, Search`,options:l}),(0,s.jsx)(f,{multiple:!0,closeOnSelect:!1,placeholder:`Multiple Select`,label:`Multiple Select, No Search`,options:l}),(0,s.jsx)(f,{multiple:!0,searchable:!0,closeOnSelect:!1,placeholder:`Search...`,label:`Multiple Select, Search`,options:l}),(0,s.jsx)(f,{placeholder:`Select`,label:`Single Select, Icons`,options:d}),(0,s.jsx)(f,{options:l,loading:!0,placeholder:`Loading`,label:`Loading`}),(0,s.jsx)(f,{options:l,error:`Error example`,placeholder:`With Error`,label:`With Error`})]}),parameters:{docs:{description:{story:`Several variants of the Select component with different props in one story.`}}}},h={render:f,args:{multiple:!0,closeOnSelect:!1,options:u,placeholder:`Choose technologies`,label:`Tech Stack`}},g={render:f,args:{searchable:!0,options:[...l,...u],placeholder:`Search options...`,label:`Searchable Select`}},_={render:f,args:{options:l,placeholder:`Choose country`,label:`Country with Flag`}},v={render:f,args:{options:l,required:!0,placeholder:`Required field`,label:`Required Field`}},y={render:f,args:{options:[],notFoundCaption:`No countries available`,placeholder:`Search...`,label:`Empty List`}},b={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,maxWidth:400},children:[(0,s.jsx)(f,{searchable:!0,options:u,placeholder:`Press ↓ to open and navigate`,label:`Searchable — use ↓ ↑ Enter Escape`}),(0,s.jsx)(f,{options:u,placeholder:`Press ↓ to open and navigate`,label:`Non-searchable — use ↓ ↑ Enter Space Escape`}),(0,s.jsx)(f,{multiple:!0,searchable:!0,closeOnSelect:!1,options:u,placeholder:`Navigate and pick multiple`,label:`Multiple + Searchable — Backspace removes last badge`})]}),parameters:{docs:{description:{story:`Demonstrates full keyboard accessibility. Click any select to focus it, then use arrow keys to navigate, Enter to select, and Escape to close. Disabled options are automatically skipped during navigation.`}}}},x={render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,maxWidth:400},children:[(0,s.jsx)(f,{options:l,size:`small`,placeholder:`Small`,label:`Small`}),(0,s.jsx)(f,{options:l,size:`medium`,placeholder:`Medium (default)`,label:`Medium`}),(0,s.jsx)(f,{options:l,size:`large`,placeholder:`Large`,label:`Large`})]}),parameters:{docs:{description:{story:"Three available sizes: `small`, `medium` (default), and `large`."}}}},S={render:f,args:{options:l,disabled:!0,value:`us`,placeholder:`Disabled select`,label:`Disabled`}},C={render:f,args:{options:l,clearable:!0,value:`ru`,placeholder:`Select a country`,label:`Clearable (with pre-selected value)`}},w=e=>{let[t,n]=(0,o.useState)(``),[r,a]=(0,o.useState)(!1),[c,l]=(0,o.useState)(void 0),u=t?[{key:1,value:`Apple`},{key:2,value:`Banana`},{key:3,value:`Cherry`},{key:4,value:`Date`},{key:5,value:`Elderberry`}].filter(e=>e.value.toLowerCase().includes(t.toLowerCase())):[],d=e=>{e?.length&&n(e),a(!0),setTimeout(()=>{a(!1)},500)},f=e=>{let t=e?.[0]?.key;l(t),t||n(``)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i,{...e,options:u,loading:r,value:c,onSearch:d,onSelect:f})})},w.args={placeholder:`Start typing to search...`,searchable:!0,notFoundCaption:`No results found`},w.parameters={docs:{description:{story:"Demonstrates autocomplete mode: `options` starts empty and is populated asynchronously via `onSearch`. The toggle arrow and dropdown are hidden until the user types. Once text is entered, `onSearch` fires, options load after 500ms, and the dropdown opens automatically."}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: countries,
    multiple: true,
    clearable: false,
    searchable: true,
    placeholder: 'Select a country',
    label: 'Country'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 400
  }}>
            <Template multiple={false} placeholder='Single Select' label='Single Select, No Search' options={countries} />
            <Template multiple={false} searchable={true} closeOnSelect={false} placeholder='Search...' label='Single Select, Search' options={countries} />
            <Template multiple={true} closeOnSelect={false} placeholder='Multiple Select' label='Multiple Select, No Search' options={countries} />
            <Template multiple={true} searchable={true} closeOnSelect={false} placeholder='Search...' label='Multiple Select, Search' options={countries} />
            <Template placeholder='Select' label='Single Select, Icons' options={weatherIcons} />
            <Template options={countries} loading placeholder='Loading' label='Loading' />
            <Template options={countries} error='Error example' placeholder='With Error' label='With Error' />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Several variants of the Select component with different props in one story.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    multiple: true,
    closeOnSelect: false,
    options: techStack,
    placeholder: 'Choose technologies',
    label: 'Tech Stack'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    searchable: true,
    options: [...countries, ...techStack],
    placeholder: 'Search options...',
    label: 'Searchable Select'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: countries,
    placeholder: 'Choose country',
    label: 'Country with Flag'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: countries,
    required: true,
    placeholder: 'Required field',
    label: 'Required Field'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: [],
    notFoundCaption: 'No countries available',
    placeholder: 'Search...',
    label: 'Empty List'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 400
  }}>
            <Template searchable options={techStack} placeholder='Press ↓ to open and navigate' label='Searchable — use ↓ ↑ Enter Escape' />
            <Template options={techStack} placeholder='Press ↓ to open and navigate' label='Non-searchable — use ↓ ↑ Enter Space Escape' />
            <Template multiple searchable closeOnSelect={false} options={techStack} placeholder='Navigate and pick multiple' label='Multiple + Searchable — Backspace removes last badge' />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates full keyboard accessibility. ' + 'Click any select to focus it, then use arrow keys to navigate, Enter to select, and Escape to close. ' + 'Disabled options are automatically skipped during navigation.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 400
  }}>
            <Template options={countries} size='small' placeholder='Small' label='Small' />
            <Template options={countries} size='medium' placeholder='Medium (default)' label='Medium' />
            <Template options={countries} size='large' placeholder='Large' label='Large' />
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Three available sizes: \`small\`, \`medium\` (default), and \`large\`.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: countries,
    disabled: true,
    value: 'us',
    placeholder: 'Disabled select',
    label: 'Disabled'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: Template,
  args: {
    options: countries,
    clearable: true,
    value: 'ru',
    placeholder: 'Select a country',
    label: 'Clearable (with pre-selected value)'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => {
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<number | undefined>(undefined);
  const allOptions: Array<SelectOptionType<number>> = [{
    key: 1,
    value: 'Apple'
  }, {
    key: 2,
    value: 'Banana'
  }, {
    key: 3,
    value: 'Cherry'
  }, {
    key: 4,
    value: 'Date'
  }, {
    key: 5,
    value: 'Elderberry'
  }];
  const filteredOptions = search ? allOptions.filter(o => o.value.toLowerCase().includes(search.toLowerCase())) : [];
  const handleSearch = (text?: string) => {
    if (!!text?.length) {
      setSearch(text);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  const handleSelect = (selection: Array<SelectOptionType<number>> | undefined) => {
    const key = selection?.[0]?.key;
    setSelected(key);
    if (!key) {
      setSearch('');
    }
  };
  return <>
            <Select {...args} options={filteredOptions} loading={loading} value={selected} onSearch={handleSearch} onSelect={handleSelect} />
        </>;
}`,...w.parameters?.docs?.source}}},T=[`Default`,`VariantsInOneStory`,`MultiSelect`,`WithSearch`,`WithEmojis`,`Required`,`NotFoundCaption`,`KeyboardNavigation`,`Sizes`,`Disabled`,`Clearable`,`Autocomplete`]}))();export{w as Autocomplete,C as Clearable,p as Default,S as Disabled,b as KeyboardNavigation,h as MultiSelect,y as NotFoundCaption,v as Required,x as Sizes,m as VariantsInOneStory,_ as WithEmojis,g as WithSearch,T as __namedExportsOrder,c as default};