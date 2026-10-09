---
'simple-react-ui-kit': minor
---

Ship component styles as `simple-react-ui-kit/styles.css` instead of injecting them with JavaScript: server-rendered pages are styled from the first paint and no longer jump on hydration (CLS). Import the stylesheet after `theme.css`; see `MIGRATION.md`
