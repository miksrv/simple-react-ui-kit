import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import { readFileSync } from 'node:fs';

// Ships the design tokens as a plain stylesheet next to the bundle
// (`import 'simple-react-ui-kit/theme.css'`).
const themeCss = () => ({
    name: 'theme-css',
    buildStart() {
        this.addWatchFile('src/styles/theme.css');
    },
    generateBundle() {
        this.emitFile({ type: 'asset', fileName: 'theme.css', source: readFileSync('src/styles/theme.css', 'utf8') });
    }
});

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: false
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        terser(),
        typescript({
            tsconfig: './tsconfig.build.json',
            useTsconfigDeclarationDir: true,
            clean: true
        }),
        // Component styles go to `dist/styles.css` (`import 'simple-react-ui-kit/styles.css'`), not into
        // the JS bundle: styles injected by JavaScript appear only after hydration, so server-rendered
        // pages show unstyled components first and jump (layout shift) when the bundle runs.
        postcss({
            extensions: ['.sass', '.scss'],
            extract: 'styles.css',
            minimize: true,
            modules: true,
            use: [
                ['sass', { includePaths: ['./src/styles'] }]
            ]
        }),
        themeCss()
    ],
    // Peer dependencies together with their subpaths: TypeScript compiles JSX to `react/jsx-runtime`,
    // which a plain 'react' entry does not match, so the runtime got bundled into the kit.
    // `dayjs` stays a plain string on purpose: `dayjs/locale/ru` has to be bundled, since as an
    // extensionless import it does not resolve under Node's ESM loader (Next.js loads the kit that way
    // on the server) and dayjs has no `exports` map to fix it up
    external: [/^react($|\/)/, /^react-dom($|\/)/, 'dayjs']
};
