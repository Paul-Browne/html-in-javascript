import lazyloadContent from "./js/lazyloadContent.js"

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
        title("HT.JS:Extended - HTML in JavaScript"),
        meta({name:"description", content:"HT.JS is a library for easily creating HTML in JavaScript, for both the backend and the frontend."}),
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
        h1({class:'big-text'}, "HT.JS: Extended"),

        h3(ins("LazyloadContent")),

        prism.js(
`// lazy.js
import { fragment, p } from "javascript-to-html"

export default ({color}) => fragment(
    p({
        style: \`color: \${color};\`
    }, "This content is lazyloaded")
)`     ),

        br(),

        prism.js(
`import { div, h1 } from "javascript-to-html"
import lazyloadContent from "./js/lazyloadContent.js";

div({ class: "home-page" },
    h1("Hello World!"),
    lazyloadContent("/js/lazy.js", { color: 'green' }),
);`     ),
        p("compiles to"),
        prism.html(
`&lt;div class="home-page"&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
    &lt;img loading="lazy" style="opacity:0" src="data:,jh1h5c" onerror='import("/js/lazy.js").then(_=>{this.outerHTML=_.default({"color":"green"})})'&gt;
&lt;/div&gt;`
        ),

        p("Then when the user scrolls to the content, the &lt;img&gt; is replaced"),

        prism.html(
`&lt;div class="home-page"&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
    &lt;p style="color: green;"&gt;This content is lazyloaded&lt;/p&gt;
&lt;/div&gt;`
        ),

        p('WTF is that src="data:,jh1h5c" onerror=...??'),

        p("The only elements that can currently be lazyloaded are &lt;img&gt; and &lt;iframe&gt;. Which is great for images and iframes, but not great for anything else."),
        p("However, one feature of the image element is that it has an onerror attribute that can be used to run JavaScript when the image fails to load."),
        p("By purposefully setting the src attribute to a data URL that will error (A hash of the url), we can use the onerror attribute to dynamically import the compontent, then replace the &lt;img&gt; with the rendered content."),

        script({src:"/js/prism.js"}),
    )
))