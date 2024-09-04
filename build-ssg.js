import { cp, mkdir, writeFile, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { minify } from 'html-minifier'
import * as esbuild from 'esbuild'

// import page from "./homePage.js"
// import single_page_app from "./spaPage.js"
// import spaBuild from "./singlePageAppBuild.js"
// import tester from "./tester.js"

const SRC = 'src'
const DEST = 'ssg'
const PAGES = 'pages-ssg'
const SRC_PAGES = `${SRC}/js/${PAGES}`

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

// CSS
let exampleOnResolvePlugin = {
    name: 'example',
    setup(build) {  
      // Mark all paths starting with "/fonts" as external
      build.onResolve({ filter: /fonts\// }, args => {
        return { path: args.path, external: true }
      })
    },
  }

await esbuild.build({
    entryPoints: [`${SRC}/css/**/*.css`],
    // entryNames: '/[name].[hash]',
    bundle: true,
    minify: true,
    sourcemap: true,
    plugins: [exampleOnResolvePlugin],
    outdir: `${DEST}/css`,
    // outbase: 'src/js'
})

await esbuild.build({
    entryPoints: ['src/js/*.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    splitting: true,
    treeShaking: true,
    format: "esm",
    target: "esnext",
    outdir: `${DEST}/js`,
})

cp("src/fonts", `${DEST}/fonts`, { recursive: true })
cp("src/favicons", `${DEST}`, { recursive: true })

const looper = (root = 'src/js/pages', dest = 'public') => readdir(root, { 
    recursive: true,
    withFileTypes: true,
}).then(async items => {
    for (const item of items){
        const {name, path} = item
        if(item.isFile() && name === 'index.js'){
            const fullPath = join(path, name)                                       // eg. src/js/pages/foo/index.js
            let writePathHTML = fullPath.replace(root, dest)                        // eg. src/js/pages/foo/index.js -> public/foo/index.js
            if(path === root){
                writePathHTML = writePathHTML.replace('index.js', 'index.html')     // eg. public/index.js -> public/index.html
            }else{
                const lastDirectory = path.split('/').slice(-1)[0]
                                                                                    // eg. public/foo/index.js -> public/foo.html
                writePathHTML = writePathHTML.replace(`${lastDirectory}/index.js`, `${lastDirectory}.html`)
            }

            const { default: page } = await import(`./${fullPath}`)

            const content = await page({
                path: fullPath,
                lang: "en",
            })

            await mkdir(dirname(writePathHTML), { recursive: true });
            writeFile(writePathHTML, minifyHTML(content));
        }
    }
})

looper(SRC_PAGES, DEST)