import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-BeWxJaLi.js";import{t as r}from"./jsx-runtime-BRDTPpDF.js";import{r as i,t as a}from"./src-ChBdo3qK.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;t((()=>{o=e(n(),1),a(),s=r(),c=[{id:1,name:`Alice Johnson`,status:`active`,role:`Admin`,score:92},{id:2,name:`Bob Smith`,status:`inactive`,role:`Editor`,score:54},{id:3,name:`Carol White`,status:`pending`,role:`Viewer`,score:71},{id:4,name:`David Lee`,status:`active`,role:`Editor`,score:88},{id:5,name:`Eva Brown`,status:`active`,role:`Admin`,score:95},{id:6,name:`Frank Miller`,status:`inactive`,role:`Viewer`,score:33}],l=[{header:`ID`,accessor:`id`,isSortable:!0},{header:`Name`,accessor:`name`,isSortable:!0},{header:`Role`,accessor:`role`},{header:`Status`,accessor:`status`},{header:`Score`,accessor:`score`,isSortable:!0}],u={title:`Components/Table`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"A generic typed data table (`Table<T>`) that supports client-side sorting, loading skeletons, sticky header, vertical borders, custom cell formatters, and background colour functions. Define columns with the `TableColumnProps<T>` interface and pass `data` as an array of `T`."}}},argTypes:{data:{control:!1,description:`Array of row data objects`},columns:{control:!1,description:"Column configuration array (`TableColumnProps<T>[]`)"},size:{control:`inline-radio`,options:[`small`,`medium`,`large`],description:`Row height / font size`,table:{defaultValue:{summary:`medium`}}},loading:{control:`boolean`,description:`Shows animated skeleton rows instead of actual data`,table:{defaultValue:{summary:`false`}}},stickyHeader:{control:`boolean`,description:"Keeps the `<thead>` fixed while the body scrolls (requires `height` or `maxHeight`)",table:{defaultValue:{summary:`false`}}},verticalBorder:{control:`boolean`,description:`Draws vertical dividers between columns`,table:{defaultValue:{summary:`false`}}},noDataCaption:{control:`text`,description:"Message shown when `data` is empty",table:{defaultValue:{summary:`No data`}}},height:{control:`number`,description:`Fixed pixel height for the table container`},maxHeight:{control:`number`,description:`Maximum pixel height — container shrinks if data is short`},defaultSort:{control:!1,description:'Initial sort configuration `{ key: keyof T, direction: "asc" | "desc" }`'},sort:{control:!1,description:"Controlled sort state for external (server-side) sorting. Pass together with `column.onChangeSort` to display the active sort indicator."},className:{control:`text`,description:`Additional CSS class names for custom styling`}}},d={args:{data:c,columns:l,size:`medium`},parameters:{docs:{description:{story:`Basic table with sortable columns. Click any sortable header to toggle ascending/descending order.`}}}},f={name:`With Default Sort`,args:{data:c,columns:l,defaultSort:{key:`score`,direction:`desc`}},parameters:{docs:{description:{story:"Pre-sorted by `score` descending via `defaultSort`. Click sortable headers to change the sort."}}}},p={name:`Loading State`,args:{data:c,columns:l,loading:!0},parameters:{docs:{description:{story:"When `loading` is `true` the table body displays animated skeleton rows — useful while fetching data from an API."}}}},m={name:`Empty State`,args:{data:[],columns:l,noDataCaption:`No users found. Try adjusting your filters.`},parameters:{docs:{description:{story:"When `data` is an empty array a single full-width row displays the `noDataCaption` message."}}}},h={name:`Empty State — Default Caption`,args:{data:[],columns:l},parameters:{docs:{description:{story:'When `data` is an empty array and `noDataCaption` is not provided the table falls back to the built-in `"No data"` caption.'}}}},g={name:`Sticky Header`,args:{data:c,columns:l,stickyHeader:!0,height:200},parameters:{docs:{description:{story:"With `stickyHeader` and a fixed `height` the table header remains visible while the body scrolls."}}}},_={name:`With Vertical Border`,args:{data:c,columns:l,verticalBorder:!0},parameters:{docs:{description:{story:"`verticalBorder` draws dividers between every column for a more grid-like appearance."}}}},v={name:`With Cell Formatter`,args:{data:c,columns:[{header:`ID`,accessor:`id`,isSortable:!0},{header:`Name`,accessor:`name`,isSortable:!0},{header:`Role`,accessor:`role`},{header:`Status`,accessor:`status`,formatter:e=>{let t={active:`#22c55e`,inactive:`#6b7280`,pending:`#f59e0b`};return(0,s.jsx)(`span`,{style:{display:`inline-block`,padding:`2px 8px`,borderRadius:12,fontSize:12,fontWeight:600,background:t[e]+`22`,color:t[e]},children:String(e)})}},{header:`Score`,accessor:`score`,isSortable:!0,formatter:e=>(0,s.jsx)(`strong`,{children:String(e)})}]},parameters:{docs:{description:{story:"Column `formatter` functions receive the cell value, the full sorted dataset, and the row index. Here `status` renders a coloured badge and `score` renders bold text."}}}},y={name:`With Cell Background`,args:{data:c,columns:[{header:`ID`,accessor:`id`},{header:`Name`,accessor:`name`},{header:`Role`,accessor:`role`},{header:`Status`,accessor:`status`},{header:`Score`,accessor:`score`,isSortable:!0,background:e=>{let t=e;return t>=90?`#dcfce7`:t>=70?`#fef9c3`:`#fee2e2`}}]},parameters:{docs:{description:{story:"The column `background` function returns a CSS colour string based on the cell value. Here the `score` column is colour-coded: green ≥ 90, yellow ≥ 70, red otherwise."}}}},b=()=>{let[e,t]=(0,o.useState)(void 0);return(0,s.jsx)(i,{data:c,columns:[{header:`Name`,accessor:`name`,onChangeSort:e=>t(e)},{header:`Score`,accessor:`score`,onChangeSort:e=>t(e)},{header:`Role`,accessor:`role`}],sort:e})},x=b.bind({}),x.storyName=`With External Sort (API-side)`,x.parameters={docs:{description:{story:"When a column has `onChangeSort`, clicks fire the callback instead of sorting locally — ideal for server-side / paginated datasets. Pass the `sort` prop to keep the active sort indicator in sync."}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Empty State — Default Caption',
  args: {
    data: [],
    columns: baseColumns
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`data\` is an empty array and \`noDataCaption\` is not provided the table falls back to the built-in \`"No data"\` caption.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    }] as Array<TableColumnProps<Row>>
  },
  parameters: {
    docs: {
      description: {
        story: 'Column \`formatter\` functions receive the cell value, the full sorted dataset, and the row index. Here \`status\` renders a coloured badge and \`score\` renders bold text.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    }] as Array<TableColumnProps<Row>>
  },
  parameters: {
    docs: {
      description: {
        story: 'The column \`background\` function returns a CSS colour string based on the cell value. Here the \`score\` column is colour-coded: green ≥ 90, yellow ≥ 70, red otherwise.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [sort, setSort] = useState<TableSortConfig<Row> | undefined>(undefined);
  const columns: Array<TableColumnProps<Row>> = [{
    header: 'Name',
    accessor: 'name',
    onChangeSort: newSort => setSort(newSort as TableSortConfig<Row>)
  }, {
    header: 'Score',
    accessor: 'score',
    onChangeSort: newSort => setSort(newSort as TableSortConfig<Row>)
  }, {
    header: 'Role',
    accessor: 'role'
  }];
  return <Table data={sampleData} columns={columns} sort={sort} />;
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithSorting`,`LoadingState`,`EmptyState`,`EmptyStateDefaultCaption`,`StickyHeader`,`WithVerticalBorder`,`WithFormatter`,`WithBackground`,`WithExternalSort`]}))();export{d as Default,m as EmptyState,h as EmptyStateDefaultCaption,p as LoadingState,g as StickyHeader,y as WithBackground,x as WithExternalSort,v as WithFormatter,f as WithSorting,_ as WithVerticalBorder,S as __namedExportsOrder,u as default};