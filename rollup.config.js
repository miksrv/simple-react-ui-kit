import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
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
        postcss({
            extensions: ['.sass', '.scss'],
            extract: false,
            modules: true,
            use: [
                ['sass', { includePaths: ['./src/styles'] }]
            ]
        }),
        themeCss()
    ],
    external: ['react', 'react-dom', 'dayjs']
};
