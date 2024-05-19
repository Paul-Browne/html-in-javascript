import { mkdir, writeFile, readdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import * as esbuild from 'esbuild'
import htjs from "./src/js/ht.js"
// import quicklink from "quicklink"

const { html, head, meta, link, script, body, fragment, iframe } = htjs;

const zone = (name, ...rest) => fragment(
    `<!--${name}-->`,
    ...rest,
    `<!--/${name}-->`
)

const routerJSinline = await readFile('docs/js/router.inline.js', 'utf-8')
const routerJS = await readFile('docs/js/router.js', 'utf-8')
const prefetch = await readFile('docs/js/prefetch.js', 'utf-8')

const pageShell = async preload => {
    
    const inlined = await esbuild.build({
        entryPoints: [`src${preload}`],
        format: 'iife',
        globalName: 'inlined',
        minify: true,
        bundle: true,
        write: false,
        splitting: false,
    })

    return fragment(        
        '<!DOCTYPE html>',
        html(
            head(
                meta({ charset: "UTF-8" }),
                meta({ name: "viewport", content: "width=device-width, initial-scale=1.0" }),
                link({ rel:"stylesheet", href:"/css/style.css" }),
                // link({ as:"script", rel:"preload", href:preload, crossOrigin:true }),
                // script({ src: '/js/router.js', type: 'module' }),
                link({ rel: 'modulepreload', href:preload, crossOrigin:true }),
                script(routerJS),
                // script(inlined.outputFiles[0].text),
                zone('head'),
            ),
            body({ 
                    class: "page" 
                },
                zone('body', 'loading...'),
                // script('inlined.default({state:window.state})'),
                script(prefetch)
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