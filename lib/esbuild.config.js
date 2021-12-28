import esbuild from 'esbuild';
import { minifyTemplates, writeFiles } from 'esbuild-minify-templates';

await esbuild.build({
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.js',
    plugins: [minifyTemplates(), writeFiles()],
    bundle: true,
    minify: true,
    write: false,
});