import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./react-BeWxJaLi.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{r,t as i}from"./src-ByWjnn-y.js";var a,o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{t(),i(),a=n(),o=[{id:1,name:`Alice Johnson`,status:`active`,role:`Admin`,score:92},{id:2,name:`Bob Smith`,status:`inactive`,role:`Editor`,score:54},{id:3,name:`Carol White`,status:`pending`,role:`Viewer`,score:71},{id:4,name:`David Lee`,status:`active`,role:`Editor`,score:88},{id:5,name:`Eva Brown`,status:`active`,role:`Admin`,score:95},{id:6,name:`Frank Miller`,status:`inactive`,role:`Viewer`,score:33}],s=[{header:`ID`,accessor:`id`,isSortable:!0},{header:`Name`,accessor:`name`,isSortable:!0},{header:`Role`,accessor:`role`},{header:`Status`,accessor:`status`},{header:`Score`,accessor:`score`,isSortable:!0}],c={title:`Components/Table`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"A generic typed data table (`Table<T>`) that supports client-side sorting, loading skeletons, sticky header, vertical borders, custom cell formatters, and background colour functions. Define columns with the `ColumnProps<T>` interface and pass `data` as an array of `T`."}}},argTypes:{data:{control:!1,description:`Array of row data objects`},columns:{control:!1,description:"Column configuration array (`ColumnProps<T>[]`)"},size:{control:`inline-radio`,options:[`small`,`medium`,`large`],description:`Row height / font size`,table:{defaultValue:{summary:`medium`}}},loading:{control:`boolean`,description:`Shows animated skeleton rows instead of actual data`,table:{defaultValue:{summary:`false`}}},stickyHeader:{control:`boolean`,description:"Keeps the `<thead>` fixed while the body scrolls (requires `height` or `maxHeight`)",table:{defaultValue:{summary:`false`}}},verticalBorder:{control:`boolean`,description:`Draws vertical dividers between columns`,table:{defaultValue:{summary:`false`}}},noDataCaption:{control:`text`,description:"Message shown when `data` is empty",table:{defaultValue:{summary:`No data`}}},height:{control:`number`,description:`Fixed pixel height for the table container`},maxHeight:{control:`number`,description:`Maximum pixel height — container shrinks if data is short`},defaultSort:{control:!1,description:'Initial sort configuration `{ key: keyof T, direction: "asc" | "desc" }`'},className:{control:`text`,description:`Additional CSS class names for custom styling`}}},l={args:{data:o,columns:s,size:`medium`},parameters:{docs:{description:{story:`Basic table with sortable columns. Click any sortable header to toggle ascending/descending order.`}}}},u={name:`With Default Sort`,args:{data:o,columns:s,defaultSort:{key:`score`,direction:`desc`}},parameters:{docs:{description:{story:"Pre-sorted by `score` descending via `defaultSort`. Click sortable headers to change the sort."}}}},d={name:`Loading State`,args:{data:o,columns:s,loading:!0},parameters:{docs:{description:{story:"When `loading` is `true` the table body displays animated skeleton rows — useful while fetching data from an API."}}}},f={name:`Empty State`,args:{data:[],columns:s,noDataCaption:`No users found. Try adjusting your filters.`},parameters:{docs:{description:{story:"When `data` is an empty array a single full-width row displays the `noDataCaption` message."}}}},p={name:`Sticky Header`,args:{data:o,columns:s,stickyHeader:!0,height:200},parameters:{docs:{description:{story:"With `stickyHeader` and a fixed `height` the table header remains visible while the body scrolls."}}}},m={name:`With Vertical Border`,args:{data:o,columns:s,verticalBorder:!0},parameters:{docs:{description:{story:"`verticalBorder` draws dividers between every column for a more grid-like appearance."}}}},h={name:`With Cell Formatter`,args:{data:o,columns:[{header:`ID`,accessor:`id`,isSortable:!0},{header:`Name`,accessor:`name`,isSortable:!0},{header:`Role`,accessor:`role`},{header:`Status`,accessor:`status`,formatter:e=>{let t={active:`#22c55e`,inactive:`#6b7280`,pending:`#f59e0b`};return(0,a.jsx)(`span`,{style:{display:`inline-block`,padding:`2px 8px`,borderRadius:12,fontSize:12,fontWeight:600,background:t[e]+`22`,color:t[e]},children:String(e)})}},{header:`Score`,accessor:`score`,isSortable:!0,formatter:e=>(0,a.jsx)(`strong`,{children:String(e)})}]},parameters:{docs:{description:{story:"Column `formatter` functions receive the cell value, the full sorted dataset, and the row index. Here `status` renders a coloured badge and `score` renders bold text."}}}},g={name:`With Cell Background`,args:{data:o,columns:[{header:`ID`,accessor:`id`},{header:`Name`,accessor:`name`},{header:`Role`,accessor:`role`},{header:`Status`,accessor:`status`},{header:`Score`,accessor:`score`,isSortable:!0,background:e=>{let t=e;return t>=90?`#dcfce7`:t>=70?`#fef9c3`:`#fee2e2`}}]},parameters:{docs:{description:{story:"The column `background` function returns a CSS colour string based on the cell value. Here the `score` column is colour-coded: green ≥ 90, yellow ≥ 70, red otherwise."}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: baseColumns,
    size: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic table with sortable columns. Click any sortable header to toggle ascending/descending order.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'With Default Sort',
  args: {
    data: sampleData,
    columns: baseColumns,
    defaultSort: {
      key: 'score',
      direction: 'desc'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Pre-sorted by \`score\` descending via \`defaultSort\`. Click sortable headers to change the sort.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Loading State',
  args: {
    data: sampleData,
    columns: baseColumns,
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`loading\` is \`true\` the table body displays animated skeleton rows — useful while fetching data from an API.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Empty State',
  args: {
    data: [],
    columns: baseColumns,
    noDataCaption: 'No users found. Try adjusting your filters.'
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`data\` is an empty array a single full-width row displays the \`noDataCaption\` message.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Sticky Header',
  args: {
    data: sampleData,
    columns: baseColumns,
    stickyHeader: true,
    height: 200
  },
  parameters: {
    docs: {
      description: {
        story: 'With \`stickyHeader\` and a fixed \`height\` the table header remains visible while the body scrolls.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With Vertical Border',
  args: {
    data: sampleData,
    columns: baseColumns,
    verticalBorder: true
  },
  parameters: {
    docs: {
      description: {
        story: '\`verticalBorder\` draws dividers between every column for a more grid-like appearance.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With Cell Formatter',
  args: {
    data: sampleData,
    columns: [{
      header: 'ID',
      accessor: 'id',
      isSortable: true
    }, {
      header: 'Name',
      accessor: 'name',
      isSortable: true
    }, {
      header: 'Role',
      accessor: 'role'
    }, {
      header: 'Status',
      accessor: 'status',
      formatter: value => {
        const colorMap: Record<string, string> = {
          active: '#22c55e',
          inactive: '#6b7280',
          pending: '#f59e0b'
        };
        return <span style={{
          display: 'inline-block',
          padding: '2px 8px',
          borderRadius: 12,
          fontSize: 12,
          fontWeight: 600,
          background: colorMap[value as string] + '22',
          color: colorMap[value as string]
        }}>
                            {String(value)}
                        </span>;
      }
    }, {
      header: 'Score',
      accessor: 'score',
      isSortable: true,
      formatter: value => <strong>{String(value)}</strong>
    }] as Array<ColumnProps<Row>>
  },
  parameters: {
    docs: {
      description: {
        story: 'Column \`formatter\` functions receive the cell value, the full sorted dataset, and the row index. Here \`status\` renders a coloured badge and \`score\` renders bold text.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With Cell Background',
  args: {
    data: sampleData,
    columns: [{
      header: 'ID',
      accessor: 'id'
    }, {
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Role',
      accessor: 'role'
    }, {
      header: 'Status',
      accessor: 'status'
    }, {
      header: 'Score',
      accessor: 'score',
      isSortable: true,
      background: value => {
        const v = value as number;
        if (v >= 90) {
          return '#dcfce7';
        }
        if (v >= 70) {
          return '#fef9c3';
        }
        return '#fee2e2';
      }
    }] as Array<ColumnProps<Row>>
  },
  parameters: {
    docs: {
      description: {
        story: 'The column \`background\` function returns a CSS colour string based on the cell value. Here the \`score\` column is colour-coded: green ≥ 90, yellow ≥ 70, red otherwise.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithSorting`,`LoadingState`,`EmptyState`,`StickyHeader`,`WithVerticalBorder`,`WithFormatter`,`WithBackground`]}))();export{l as Default,f as EmptyState,d as LoadingState,p as StickyHeader,g as WithBackground,h as WithFormatter,u as WithSorting,m as WithVerticalBorder,_ as __namedExportsOrder,c as default};