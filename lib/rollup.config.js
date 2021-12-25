import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.js',
            format: 'cjs'
        },
        plugins: [
            terser(),
            typescript(),
        ], 
    },
    {
        input: 'src/modules.ts',
        output: {
            file: 'dist/modules.js',
            format: 'cjs'
        },
        plugins: [
            terser(),
            typescript(),
        ], 
    }
];