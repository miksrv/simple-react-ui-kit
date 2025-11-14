import{j as t}from"./index-B60tJtCt.js";import{r as a}from"./iframe-qEuxleZ1.js";import{I as r}from"./Table-D2mKQura.js";import{i as h}from"./types-DHzuYu1v.js";import"./index-Cl2GYodX.js";import"./preload-helper-PPVm8Dsz.js";const v={title:"Icon",component:r,argTypes:{fill:{control:"color"}}},o=({fill:c})=>{const[i,l]=a.useState(""),[p,n]=a.useState(null),d=async e=>{await navigator.clipboard.writeText(e),n(e),setTimeout(()=>n(null),2e3)},s=Object.keys(h).filter(e=>e.toLowerCase().includes(i.toLowerCase()));return t.jsxs("div",{children:[t.jsx("div",{style:{marginBottom:"16px"},children:t.jsx("input",{type:"text",placeholder:"Search icons...",value:i,onChange:e=>l(e.target.value),style:{padding:"8px",fontSize:"14px",border:"1px solid #ccc",borderRadius:"4px",width:"100%",maxWidth:"300px",marginBottom:"20px"}})}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:s.length>0?s.map(e=>t.jsxs("div",{style:{width:"12%",textAlign:"center",cursor:"pointer"},onClick:()=>d(e),children:[t.jsx(r,{name:e,style:{width:24,height:24},fill:c}),t.jsx("div",{style:{marginTop:"8px",fontSize:"11px",color:"#555"},children:e}),p===e&&t.jsx("div",{style:{fontSize:"10px",color:"green"},children:"Copied!"})]},e)):t.jsx("p",{children:"No icons found"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  fill
}) => {
  const [search, setSearch] = useState(''); // State for handling search input
  const [copied, setCopied] = useState<string | null>(null); // State to track the last copied icon name

  // Function to copy icon name to clipboard
  const copyToClipboard = async (name: string) => {
    await navigator.clipboard.writeText(name); // Copy the icon name
    setCopied(name); // Update the state with the copied icon name
    setTimeout(() => setCopied(null), 2000); // Clear the copied state after 2 seconds
  };

  // Filter the icons based on the search input
  const filteredIcons = Object.keys(iconNames).filter(name => name.toLowerCase().includes(search.toLowerCase()));
  return <div>
            {/* Search input */}
            <div style={{
      marginBottom: '16px'
    }}>
                <input type='text' placeholder='Search icons...' value={search} onChange={e => setSearch(e.target.value)} style={{
        padding: '8px',
        fontSize: '14px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%',
        maxWidth: '300px',
        marginBottom: '20px'
      }} />
            </div>

            {/* Display all filtered icons */}
            <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px'
    }}>
                {filteredIcons.length > 0 ? filteredIcons.map(name => <div key={name} style={{
        width: '12%',
        textAlign: 'center',
        cursor: 'pointer' // Make icons clickable
      }} onClick={() => copyToClipboard(name)} // Copy the icon name when clicked
      >
                            {/* Icon component */}
                            <Icon name={name as IconTypes} style={{
          width: 24,
          height: 24
        }} fill={fill} />
                            {/* Display the name of the icon */}
                            <div style={{
          marginTop: '8px',
          fontSize: '11px',
          color: '#555'
        }}>{name}</div>
                            {/* Show "Copied!" message when an icon is clicked */}
                            {copied === name && <div style={{
          fontSize: '10px',
          color: 'green'
        }}>Copied!</div>}
                        </div>) : <p>No icons found</p>}
            </div>
        </div>;
}`,...o.parameters?.docs?.source}}};const C=["AllIcons"];export{o as AllIcons,C as __namedExportsOrder,v as default};
