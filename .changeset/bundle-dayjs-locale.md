---
'simple-react-ui-kit': patch
---

Bundle `dayjs/locale/ru` into the kit again: as an external import it failed to resolve under Node's ESM loader (`ERR_MODULE_NOT_FOUND` on the Next.js server in 2.1.0)
