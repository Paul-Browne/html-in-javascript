import { cp, mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { minify } from 'html-minifier'
import * as esbuild from 'esbuild'

import page from "./homePage.js"
import single_page_app from "./spaPage.js"
import spaBuild from "./singlePageAppBuild.js"

import tester from "./tester.js"

const minifyHTML = html => {    
    const minified = minify(html, {
        removeAttributeQuotes: false,
        minifyJS: false,
        collapseWhitespace: true,
        minifyCSS: false,
        removeComments: false,
        decodeEntities: true
    })

    const removeDuplicateStylesAndLinksRegex = /(<style[\s\S]*?style>|<link[\s\S]*?>)(?=[\s\S]*\1)/g
    return minified.replace(removeDuplicateStylesAndLinksRegex, "")
}

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

let exampleOnResolvePlugin = {
    name: 'example',
    setup(build) {  
      // Mark all paths starting with "http://" or "https://" as external
      build.onResolve({ filter: /fonts\// }, args => {
        return { path: args.path, external: true }
      })
    },
  }

await esbuild.build({
    entryPoints: ['src/css/**/*.css'],
    // entryNames: '/[name].[hash]',
    bundle: true,
    minify: true,
    sourcemap: true,
    plugins: [exampleOnResolvePlugin],
    outdir: 'docs/css',
    // outbase: 'src/js'
})

cp("src/CNAME", "docs/CNAME", { recursive: true })
cp("src/fonts", "docs/fonts", { recursive: true })
cp("src/favicons", "docs/", { recursive: true })
cp("src/vendor/prism.js", "docs/js/prism.js", { recursive: true })

// cp("src/css/style.css", "docs/css/style.css", { recursive: true })
// cp("src/css/hero.css", "docs/css/hero.css", { recursive: true })

writeFileTo(minifyHTML(single_page_app), "docs/single-page-app.html")
writeFileTo(minifyHTML(page), "docs/index.html")
spaBuild("src/js/pages")


writeFileTo(minifyHTML(tester), "docs/test.html")