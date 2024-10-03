import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

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
        terser(), // Минификация
        typescript({
            tsconfig: './tsconfig.json',
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
        })
    ],
    external: ['react', 'react-dom']
};
