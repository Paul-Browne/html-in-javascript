import { cp, mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { minify } from 'html-minifier'
import * as esbuild from 'esbuild'

import index from "../docs-src/index.js"

const minifyHTML = html => {    
    const minified = minify(html, {
        removeAttributeQuotes: false,
        minifyJS: false,
        collapseWhitespace: true,
        minifyCSS: false,
        removeComments: false,
        decodeEntities: true
    })

    // hopefully unnecessary...
    const removeDuplicateStylesAndLinksRegex = /(<style[\s\S]*?style>|<link[\s\S]*?>)(?=[\s\S]*\1)/g
    return minified.replace(removeDuplicateStylesAndLinksRegex, "")
}

export const writeFileTo = async (content, path) => {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, content);
}

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
    entryPoints: ['docs-src/css/**/*.css'],
    bundle: true,
    minify: true,
    sourcemap: true,
    plugins: [exampleOnResolvePlugin],
    outdir: 'docs/css',
})

cp("docs-src/CNAME", "docs/CNAME", { recursive: true })
cp("docs-src/fonts", "docs/fonts", { recursive: true })
cp("docs-src/favicons", "docs/", { recursive: true })
cp("docs-src/js", "docs/js", { recursive: true })
cp("docs-src/vendor/prism.js", "docs/js/prism.js", { recursive: true })

writeFileTo(minifyHTML(index), "docs/index.html")