import { cp, mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { minify } from 'html-minifier'
import * as esbuild from 'esbuild'

import page from "./homePage.js"
import single_page_app from "./spaPage.js"
import spaBuild from "./singlePageAppBuild.js"

const minifyHTML = html => minify(html, {
    removeAttributeQuotes: false,
    minifyJS: false,
    collapseWhitespace: true,
    minifyCSS: true,
    removeComments: false,
    decodeEntities: true
})

export const writeFileTo = async (content, path) => {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, content);
}

await esbuild.build({
    entryPoints: ['scripts/ht.js'],
    bundle: false,
    minify: true,
    sourcemap: false,
    splitting: false,
    treeShaking: false,
    format: "esm",
    target: "esnext",
    outfile: 'esm.js'
})

await esbuild.build({
    stdin: {
        contents: 'import a from "./scripts/ht.js";module.exports = a;',
        resolveDir: '.'
    },
    bundle: true,
    minify: true,
    sourcemap: false,
    format: "iife",
    target: "esnext",
    globalName: "htjs",
    outfile: 'iife.js'
})

await esbuild.build({
    entryPoints: ['src/js/pages/**/*.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    splitting: true,
    treeShaking: true,
    format: "esm",
    target: "esnext",
    outdir: 'docs/js/pages'
})

cp("src/CNAME", "docs/CNAME", { recursive: true })
cp("src/fonts", "docs/fonts", { recursive: true })
cp("src/favicons", "docs/", { recursive: true })
cp("src/vendor/prism.js", "docs/js/prism.js", { recursive: true })
cp("src/css/style.css", "docs/css/style.css", { recursive: true })

writeFileTo(minifyHTML(single_page_app), "docs/single-page-app.html")
writeFileTo(minifyHTML(page), "docs/index.html")
spaBuild("src/js/pages")