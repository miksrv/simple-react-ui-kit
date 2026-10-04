import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";var r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{t(),r=n(),i={title:`Foundations/Design Tokens`,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:'Every component is styled only through the CSS custom properties defined in `theme.css`. Override a token at `:root` (or under `[data-theme="dark"]`) to retheme the whole kit. Use the toolbar theme switcher to compare light and dark values.'}}}},a=({title:e,children:t})=>(0,r.jsxs)(`section`,{style:{marginBottom:32},children:[(0,r.jsx)(`h3`,{style:{margin:`0 0 12px`,fontSize:`var(--font-size-large)`,fontWeight:600},children:e}),(0,r.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:12},children:t})]}),o=({children:e})=>(0,r.jsx)(`code`,{style:{fontSize:11,color:`var(--text-color-secondary)`,wordBreak:`break-all`},children:e}),s=({token:e})=>(0,r.jsxs)(`div`,{style:{width:150,display:`flex`,flexDirection:`column`,gap:6},children:[(0,r.jsx)(`div`,{style:{height:48,borderRadius:`var(--radius-md)`,background:`var(${e})`,boxShadow:`0 0 0 1px var(--border)`}}),(0,r.jsx)(o,{children:e})]}),c=({token:e,style:t})=>(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:6,alignItems:`flex-start`},children:[(0,r.jsx)(`div`,{style:{width:72,height:72,background:`var(--surface-1)`,boxShadow:`0 0 0 1px var(--border-strong)`,...t}}),(0,r.jsx)(o,{children:e})]}),l=({token:e})=>(0,r.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,width:`100%`},children:[(0,r.jsx)(`div`,{style:{height:`var(${e})`,width:160,borderRadius:`var(--radius-md)`,background:`var(--color-main-background)`,boxShadow:`inset 0 0 0 1px var(--color-main)`}}),(0,r.jsx)(o,{children:e})]}),u=({token:e})=>(0,r.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,width:`100%`},children:[(0,r.jsx)(`div`,{style:{width:`var(${e})`,height:16,background:`var(--color-main)`}}),(0,r.jsx)(o,{children:e})]}),d={Surfaces:[`--body-background`,`--surface-1`,`--surface-2`,`--surface-3`,`--border`,`--border-strong`],Text:[`--text-color-primary`,`--text-color-secondary`,`--text-color-disabled`,`--color-contrast`],Brand:[`--color-main`,`--color-main-hover`,`--color-main-active`,`--color-main-background`],Status:[`--color-green`,`--color-green-background`,`--color-orange`,`--color-orange-background`,`--color-red`,`--color-red-background`]},f={render:()=>(0,r.jsxs)(`div`,{style:{fontFamily:`var(--font-family)`,color:`var(--text-color-primary)`},children:[Object.entries(d).map(([e,t])=>(0,r.jsx)(a,{title:e,children:t.map(e=>(0,r.jsx)(s,{token:e},e))},e)),(0,r.jsx)(a,{title:`Radii`,children:[`--radius-xs`,`--radius-sm`,`--radius-md`,`--radius-lg`,`--radius-xl`,`--radius-full`].map(e=>(0,r.jsx)(c,{token:e,style:{borderRadius:`var(${e})`}},e))}),(0,r.jsx)(a,{title:`Shadows`,children:[`--shadow-sm`,`--shadow-md`,`--shadow-lg`,`--popout-shadow`,`--container-shadow`].map(e=>(0,r.jsx)(c,{token:e,style:{boxShadow:`var(${e})`,borderRadius:`var(--radius-lg)`}},e))}),(0,r.jsx)(a,{title:`Control heights`,children:[`--size-control-small`,`--size-control-medium`,`--size-control-large`].map(e=>(0,r.jsx)(l,{token:e},e))}),(0,r.jsx)(a,{title:`Spacing`,children:[`--space-1`,`--space-2`,`--space-3`,`--space-4`,`--space-5`,`--space-6`].map(e=>(0,r.jsx)(u,{token:e},e))}),(0,r.jsx)(a,{title:`Typography`,children:[`--font-size-small`,`--font-size`,`--font-size-large`].map(e=>(0,r.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:4,width:220},children:[(0,r.jsx)(`span`,{style:{fontSize:`var(${e})`,lineHeight:`var(--line-height)`},children:`The quick brown fox`}),(0,r.jsx)(o,{children:e})]},e))})]})},p=[`Overview`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: 'var(--font-family)',
    color: 'var(--text-color-primary)'
  }}>
            {Object.entries(colours).map(([title, tokens]) => <Section key={title} title={title}>
                    {tokens.map(token => <Swatch key={token} token={token} />)}
                </Section>)}

            <Section title='Radii'>
                {['--radius-xs', '--radius-sm', '--radius-md', '--radius-lg', '--radius-xl', '--radius-full'].map(token => <Box key={token} token={token} style={{
        borderRadius: \`var(\${token})\`
      }} />)}
            </Section>

            <Section title='Shadows'>
                {['--shadow-sm', '--shadow-md', '--shadow-lg', '--popout-shadow', '--container-shadow'].map(token => <Box key={token} token={token} style={{
        boxShadow: \`var(\${token})\`,
        borderRadius: 'var(--radius-lg)'
      }} />)}
            </Section>

            <Section title='Control heights'>
                {['--size-control-small', '--size-control-medium', '--size-control-large'].map(token => <Bar key={token} token={token} />)}
            </Section>

            <Section title='Spacing'>
                {['--space-1', '--space-2', '--space-3', '--space-4', '--space-5', '--space-6'].map(token => <Space key={token} token={token} />)}
            </Section>

            <Section title='Typography'>
                {['--font-size-small', '--font-size', '--font-size-large'].map(token => <div key={token} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        width: 220
      }}>
                        <span style={{
          fontSize: \`var(\${token})\`,
          lineHeight: 'var(--line-height)'
        }}>
                            The quick brown fox
                        </span>
                        <Caption>{token}</Caption>
                    </div>)}
            </Section>
        </div>
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as Overview,p as __namedExportsOrder,i as default};