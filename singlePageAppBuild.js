import { mkdir, writeFile, readdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import * as esbuild from 'esbuild'
import { html, head, meta, link, script, body, fragment } from "html-in-javascript"

// import builder from "./extended/utils/builder.js"
// await builder({
//     entryPoints: 'extended/modalContent/modal.js',
//     outdir: 'docs/js'
// })

await esbuild.build({
    // entryPoints: ['src/js/**/*.js', 'extended/**/*.js'],
    entryPoints: ['src/js/**/*.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    splitting: true,
    treeShaking: true,
    format: "esm",
    target: "esnext",
    outdir: 'docs/js',
    // outbase: 'src/js'
})

// await esbuild.build({
//     // entryPoints: ['src/js/**/*.js', 'extended/**/*.js'],
//     entryPoints: ['src/js/pages/**/index.js'],
//     // entryNames: '/[name].[hash]',
//     bundle: true,
//     minify: true,
//     sourcemap: true,
//     splitting: true,
//     treeShaking: true,
//     format: "esm",
//     target: "esnext",
//     outdir: 'docs/js/pages',
//     // outbase: 'src/js'
// })

const zone = (name, ...rest) => fragment(
    `<!--${name}-->`,
    ...rest,
    `<!--/${name}-->`
)
 
const { outputFiles: [ {text: inlinedRouter}, {text: aggresivePreload} ] } = await esbuild.build({
    entryPoints: [
        'src/js/router.js',
        'src/js/aggresivePreload.js'
    ],
    format: 'iife',
    minify: true,
    bundle: true,
    write: false,
    treeShaking: true,
    outdir: 'false',
    splitting: false,
})

const pageShell = async preload => {
    return fragment(        
        '<!DOCTYPE html>',
        html(
            head(
                meta({ charset: "UTF-8" }),
                meta({ name: "viewport", content: "width=device-width, initial-scale=1.0" }),
                link({ rel: "stylesheet", href:"/css/style.css" }),
                link({ rel: 'modulepreload', href:preload, crossOrigin:true }),
                script(inlinedRouter),
                zone('head'),
            ),
            body({ 
                    class: "page" 
                },
                zone('body', 'loading...'),
                //script(aggresivePreload)
            )
        )
    )
}

export default root => readdir(root, { 
    recursive: true,
    withFileTypes: true,
}).then(async items => {
    for (const item of items){
        const {name, path} = item
        if(item.isFile() && name === 'index.js'){
            const fullPath = join(path, name)                                       // eg. src/js/pages/foo/index.js
            const jsPreloadPath = fullPath.replace('src', '')                       // eg. src/js/pages/foo/index.js -> /js/pages/foo/index.js
            let writePathHTML = fullPath.replace(root, 'docs')                      // eg. src/js/pages/foo/index.js -> public/foo/index.js
            if(path === root){
                writePathHTML = writePathHTML.replace('index.js', 'index.html')     // eg. public/index.js -> public/index.html
            }else{
                const lastDirectory = path.split('/').slice(-1)[0]
                                                                                    // eg. public/foo/index.js -> public/foo.html
                writePathHTML = writePathHTML.replace(`${lastDirectory}/index.js`, `${lastDirectory}.html`)
            }
            await mkdir(dirname(writePathHTML), { recursive: true });
            await writeFile(writePathHTML, await pageShell(jsPreloadPath));
        }
    }
})