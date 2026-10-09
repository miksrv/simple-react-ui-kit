---
'simple-react-ui-kit': patch
---

Import `react/jsx-runtime` from the app's React instead of bundling a copy of it into the kit: the bundle is about 9 KB smaller and always matches the app's React version. `dayjs/locale/ru` is likewise taken from the app's dayjs instead of a bundled copy
