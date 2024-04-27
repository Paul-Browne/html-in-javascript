import * as esbuild from 'esbuild'

await esbuild.build({
    entryPoints: ['src/js/foo.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    splitting: true,
    format: "esm",
    target: "esnext",
    outdir: 'dist/js'
})