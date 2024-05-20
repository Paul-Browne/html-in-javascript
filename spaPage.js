import htjs from "html-in-javascript"

const { html, head, meta, link, script, title, body, h1, pre, code, fragment, br } = htjs;

const prism = {
    js: content => pre({class:"language-javascript"}, code(content)),
    html: content => pre({class:"language-html"}, code(content))
}

export default fragment(
'<!DOCTYPE html>',
html({lang: "en"},
    head(
        meta({charset:"UTF-8"}),
        meta({name:"viewport", content:"width=device-width, initial-scale=1.0"}),
        title("Single Page App | HT.JS"),
        meta({name:"description", content:"Using HT.JS to create a Single Page Application with Routing"}),
        link({rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"}),
        link({rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"}),
        link({rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"}),
        link({rel:"manifest", href:"/site.webmanifest"}),
        link({rel:"mask-icon", href:"/safari-pinned-tab.svg", color:"#5bbad5"}),
        meta({name:"msapplication-TileColor", content:"#2d89ef"}),
        meta({name:"theme-color", content:"#ffff00"}),
        link({rel:"stylesheet", href:"/css/style.css"}),
    ),
    body(
        h1({class:'big-text'}, "Single Page App | HT.JS"),

        prism.html(
`js
├── router.js
├── update.js
├── preload.js
├── pages
│   ├── index.js
│   ├── 404
│   │   └── index.js
│   ├── about
│   │   └── index.js
│   ├── contact
│   │   └── index.js
│   └── services 
│       └── index.js
└── components  
    ├── header.js
    └── footer.js
`
        ),

        br(),

        prism.js(
`/* router.js */

// state, entirely optional
window.state = {
    foo: "bar"
};

const router = async () => {
    const routeJsResource = async path => {
        (await import(\`/js/pages\${path.replace(/\\/$/, '')}/index.js\`)).default({ 
            state: window.state,
            pageView: window.top === window.self
        })
    }
    try {
        await routeJsResource(window.location.pathname);
    } catch {
        await routeJsResource('/404')
    }
}

// fire on click
document.addEventListener("click", e => {
    const { href } = e.target;

    // ignore clicks on anything that doesn't have a href
    // or if the href is an external link
    if (href && new URL(href).origin === window.location.origin ){
        e.preventDefault();

        // ignore links to current page
        if(href !== window.location.href){
            window.history.pushState({}, "", href);
            router()
        }
    }
});

// fire on back/forward
window.addEventListener("popstate", router );

// fire once on initial load
document.addEventListener("DOMContentLoaded", router );
`
        ),

        br(),

        prism.js(
`/* update.js */

export default (key, ...content) => {
    var iterator = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_COMMENT);
    var currentNode;
    while (currentNode = iterator.nextNode()) {
        if(!currentNode.nodeValue.indexOf(key)){
            while(currentNode.nextSibling){
                if(currentNode.nextSibling.nodeType === Node.COMMENT_NODE && !currentNode.nextSibling.nodeValue.indexOf(\`/\${key}\`)){
                    const tempNode = document.createElement('i')    // doesn't matter what element
                    currentNode.after(tempNode)
                    tempNode.outerHTML = content.join('');
                    window.preloader?.refreshLinkObserver()
                    return
                }
                currentNode.nextSibling.remove()
            }
        }     
    }
}
`
        ),

        br(),

        prism.js(
`/* preload.js */

window.preloader = {
    loadedPages: [
        window.location.origin + window.location.pathname
    ],
}

window.preloader.linkObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
        const { href } = entry.target;
        if(window.preloader.loadedPages.includes(href)){
            window.preloader.linkObserver.unobserve(entry.target);
        }else if(entry.isIntersecting){
            window.preloader.loadedPages.push(href)
            window.preloader.linkObserver.unobserve(entry.target);
            const iframe = document.createElement("IFRAME")
            iframe.src = href;
            iframe.style.display = "none"
            document.body.appendChild(iframe)
        }
    }
});

window.preloader.refreshLinkObserver = () => {
    if(window.top === window.self){
        const anchors = document.querySelectorAll('a')
        for (const anchor of anchors) {
            const { href } = anchor
            if(
                href &&
                new URL(href).origin === window.location.origin &&          // not external
                new URL(href).pathname !== window.location.pathname &&      // not same as current page
                !window.preloader.loadedPages.includes(href)                // hasn't been loaded
            ){
                window.preloader.linkObserver.observe(anchor);
            }
        }
    }
}
`
        ),


        br(),

        prism.js(
`/* pages/index.js */

export default async ({ state, pageView }) => {
    const [ updateImport, headerImport, footerImport, htjsImport ] = [
        '../update.js', 
        '../components/header.js', 
        '../components/footer.js', 
        '../ht.js'
    ].map(importPath => import(importPath))

    const { default: update } = await updateImport;
    const { default: header } = await headerImport;
    const { default: footer } = await footerImport;
    const { default: { fragment, h1, title, p } } = await htjsImport;

    const body = fragment(
        await header(),
        h1("Hello World! Home page!"),
        p(state.foo),
        await footer()
    )
    update('head', title("Home page | example.com"));
    update('body', body);
}
`
        ),


        br(),

        prism.js(
`/* build.js */

import { mkdir, writeFile, readdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import * as esbuild from 'esbuild'
import htjs from "./src/js/ht.js"

const { html, head, meta, link, script, body, fragment } = htjs;

const zone = (name, ...rest) => fragment(
    \`&lt;!--\${name}--&gt;\`,
    ...rest,
    \`&lt;!--/\${name}--&gt;\`
)
 
const { outputFiles: [ {text: router}, {text: preload} ] } = await esbuild.build({
    entryPoints: [
        'src/js/router.js',
        'src/js/preload.js'
    ],
    format: 'iife',
    minify: true,
    bundle: true,
    write: false,
    outdir: 'false',
    splitting: false,
})

const pageShell = async jsPreloadPath => {
    return fragment(        
        '&lt;!DOCTYPE html&gt;',
        html(
            head(
                meta({ charset: "UTF-8" }),
                meta({ name: "viewport", content: "width=device-width, initial-scale=1.0" }),
                link({ rel: "stylesheet", href:"/css/style.css" }),
                link({ rel: 'modulepreload', href:jsPreloadPath, crossOrigin:true }),
                script(router),
                zone('head'),
            ),
            body({ class: "page" },
                zone('body', 'loading...'),
                script(preload)
            )
        )
    )
}

const build = (src, pub) => readdir(src, { 
    recursive: true,
    withFileTypes: true,
}).then(async items => {
    for (const item of items){
        const {name, path} = item
        if(item.isFile() && name === 'index.js'){
            const fullPath = join(path, name)
            const jsPreloadPath = fullPath.replace('src', '')
            let writePathHTML = fullPath.replace(src, pub)
            if(path === src){
                writePathHTML = writePathHTML.replace('index.js', 'index.html')
            }else{
                const lastDirectory = path.split('/').slice(-1)[0]
                writePathHTML = writePathHTML.replace(\`\${lastDirectory}/index.js\`, \`\${lastDirectory}.html\`)
            }
            await mkdir(dirname(writePathHTML), { recursive: true });
            await writeFile(writePathHTML, await pageShell(jsPreloadPath));
        }
    }
})

build("src/js/pages", "public")
`
        ),

        script({src:"/js/prism.js"}),
    )
)
)