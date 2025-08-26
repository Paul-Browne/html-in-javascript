import { a, html, head, meta, link, script, div, b, h5, em, title, body, h1, h2, h3, h4, p, button, pre, code, br, fragment, strong, ins } from "html-in-javascript"

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
        meta({name:"description", content:"HT.JS is a library for easily creating HTML in JavaScript, for both the backend and the frontend."}),
        meta({name:"msapplication-TileColor", content:"#2d89ef"}),
        meta({name:"theme-color", content:"#ffff00"}),
        link({rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"}),
        link({rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"}),
        link({rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"}),
        link({rel:"manifest", href:"/site.webmanifest"}),
        link({rel:"mask-icon", href:"/safari-pinned-tab.svg", color:"#5bbad5"}),
        link({rel:"stylesheet", href:"/css/style.css"}),
        // script({src:"/js/global.js"}),
        title("HT.JS - HTML in JavaScript"),
    ),
    body(
        h1({class:'big-text'}, "HT.JS: Static-site"),

        p("Using just node.js and the built-in modules, we can create a static site generator."),

        prism.js(
`// src/pages/index.js
import { fragment, html, head, body, meta, title, h1 } from "javascript-to-html";

export default fragment(
'&lt;!DOCTYPE html&gt;',
html({lang: "en"},
    head(
        meta({charset:"UTF-8"}),
        meta({name:"viewport", content:"width=device-width, initial-scale=1.0"}),
        title("example.com - Home page")
    ),
    body(
        h1("Hello World!")
    )
)`      ),
        br(),

        prism.js(
`// scripts/build.js
import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import homepage from "../src/pages/index.js";

const writeFileRecursively = async (path, content) => {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, content);
}

writeFileRecursively("dist/index.html", homepage);`        
        ),

        p("compiles to"),
        prism.html(
`&lt;!-- /dist/index.html --&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
        &lt;title&gt;example.com - Home page&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;Hello World!&lt;/h1&gt;
    &lt;/body&gt;
&lt;/html&gt;
`
        ),

        script({src:"/js/prism.js"}),
    )
))