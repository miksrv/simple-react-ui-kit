---
'simple-react-ui-kit': patch
---

Updated dev dependencies to their latest minor and patch versions (Rollup, Sass, PostCSS, Prettier, typescript-eslint, Storybook 10.6.7). Fixed the published Storybook failing with React error #527: it declared `react` but not `react-dom`, so npm installed `react-dom` 19.2.8 next to `react` 19.3.1
