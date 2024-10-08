import { html, head, meta, link, script, div, b, h5, em, title, body, h1, h2, h3, h4, p, button, pre, code, br, fragment } from "html-in-javascript"

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
        title("HT.JS - HTML in JavaScript"),
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
        h1({class:'big-text'}, "HT.JS"),
        h3("html-in-javascript, made simple, done right."),

        div({class:"container"},
            div({class: "cell"}, 
                div({
                        class:"cell-inner",
                        onclick: "import('/js/zoom.js').then(M => M.default(this))",
                    },
                    h2("Static Site Generator"),
                    prism.js( 
`import { writeFile } from "node:fs/promises";
import { html, head, body, meta, title, link, h1 } from "html-in-javascript";

const page = 
html({ lang: "en" },
    head(
        meta({ charset: "UTF-8" }),
        meta({ name: "viewport", content: "width=device-width, initial-scale=1.0" }),
        title("Welcome!"),
        link({ rel: "stylesheet", href: "/css/style.css" }),
    ),
    body({ class: "home-page" },
        h1("Hello World!"),
    )
)

await writeFile("public/index.html", page);
`
                    ),
                ),
            ),
            div({class: "cell"}, 
                div({
                        class:"cell-inner",
                        onclick: "import('/js/zoom.js').then(M => M.default(this))",
                    },
                    h2("Server Side Rendered"),
                    prism.js( 
`import express from 'express';
import { html, head, body, meta, title, link, h1 } from "html-in-javascript";

const page = 
html({ lang: "en" },
    head(
        meta({ charset: "UTF-8" }),
        meta({ name: "viewport", content: "width=device-width, initial-scale=1.0" }),
        title("Welcome!"),
        link({ rel: "stylesheet", href: "/css/style.css" }),
    ),
    body({ class: "home-page" },
        h1("Hello World!"),
    )
)

const app = express();

app.get('/', (req, res) => {
    res.send(page);
})

app.listen(3000, () => console.log("http://localhost:3000"));
`
                    ),                    
                ),
            ),
            div({class: "cell"}, 
                div({
                        class:"cell-inner",
                        onclick: "import('/js/zoom.js').then(M => M.default(this))",
                    },
                    h2("Bundled for Browser"),
                    prism.js( 
`// bundle.js
import * as esbuild from 'esbuild'

await esbuild.build({
    entryPoints: ['src/js/foo.js', 'src/js/bar.js', 'src/js/buff.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    splitting: true,
    format: "esm",
    target: "esnext",
    outdir: 'dist/js'
})
    `               ),
                    br(),
                    prism.js( 
`// foo.js
import { fragment, head, body, meta, title, link, h1 } from "html-in-javascript";

const page = 
fragment(
    head(
        meta({ charset: "UTF-8" }),
        meta({ name: "viewport", content: "width=device-width, initial-scale=1.0" }),
        title("Welcome!"),
        link({ rel: "stylesheet", href: "/css/style.css" }),
    ),
    body({ class: "home-page" },
        h1("Hello World!"),
    )
)

document.documentElement.innerHTML = page;
`                   ),
                    br(),
                    prism.html( 
`&lt;!-- index.html --&gt;
&lt;html lang="en"&gt;
    &lt;script src="/js/bundle.js" type="module"&gt;&lt;/script&gt;
&lt;/html&gt;
`                   ),  
                ),
            ),
            
            div({class: "cell"}, 
                div({
                        class:"cell-inner",
                        onclick: "import('/js/zoom.js').then(M => M.default(this))",
                    },
                    h2("Directly in Browser"),
                    prism.js( 
`// foo.js
import { fragment, head, body, meta, title, link, h1 } from "https://cdn.jsdelivr.net/npm/html-in-javascript/esm.js";

const page = 
fragment(
    head(
        meta({ charset: "UTF-8" }),
        meta({ name: "viewport", content: "width=device-width, initial-scale=1.0" }),
        title("Welcome!"),
        link({ rel: "stylesheet", href: "/css/style.css" }),
    ),
    body({ class: "home-page" },
        h1("Hello World!"),
    )
)

document.documentElement.innerHTML = page;
`                   ),
                    br(),
                    prism.html( 
`&lt;!-- index.html --&gt;
&lt;html lang="en"&gt;
    &lt;script src="/js/foo.js" type="module"&gt;&lt;/script&gt;
&lt;/html&gt;
`                  ),                    
                )            
            )
        ),
        
        h2("Docs"),

        h5("Code"),
        prism.js( 
`div({
        // Objects are the element's attributes
        // in a key:value relationship eg.
        class: "class names",
        // becomes: class="class names" 
        id: "some-id",
        "data-test-id": 123,
        onclick: "this.style.color = 'blue'",
        style: "color:red; padding:10px; border:1px solid black"
    },
    h2("hello world!"),
    p(
        "All of these 'element functions' eg. h2(), p(), strong() etc. return strings of HTML",
        br(),
        em("and can be nested exactly like html")
    ),
    {
        // you can have more than one object for the attributes
        "data-foo": "bar"
        // and they will be combined, but probably better to
        // just have one attribute object, and to put it first
    }
)`
        ),
        h5("HTML"),
        prism.html( 
`&lt;div 
  class="class names"
  id="some-id" 
  data-test-id="123" 
  onclick="this.style.color = 'blue'" 
  style="color:red; padding:10px; border:1px solid black"
  data-foo="bar"&gt;
    &lt;h2&gt;hello world!&lt;/h2&gt;
    &lt;p&gt;All of these 'element functions' eg. h2(), p(), strong() etc. return strings of HTML&lt;br&gt;&lt;em&gt;and can be nested exactly like html&lt;/em&gt;&lt;/p&gt;
&lt;/div&gt;`
        ),        
        h5("Example"),
        div({
            // objects are the elements attributes 
            // in a key:value relationship eg.
            class: "class names",
            // becomes: class="class names" 
            id: "some-id",
            "data-test-id": 123,
            // onclick: () => console.log(this),
            onclick: "this.style.color = 'blue'",
            style: "color:red; padding:0 10px; border:1px solid black"
        },
            h2("hello world!"),
            p(
                "All of these 'element functions' eg. h2(), p(), strong() etc. return strings of HTML",
                br(),
                em("and can be nested exactly like html")
            ),
            {
                // you can have more than one object for the attributes
                "data-foo": "bar"
                // and they will be combined, but probably better to
                // just have one attribute object, and to put it first
            }                    
        ),
        h3(b("fragment")),
        p("similar to React's ", b("&lt;&gt;{content}&lt;/&gt;")),
        p("Used when you can't, or don't want a container ", b("&lt;div&gt;")),
        h5("Code"),
        prism.js(
`const titleAndStyle = fragment(
    title("HT.JS"),
    link({ rel:"stylesheet", href:"/css/style.css" })
)

head(
    meta({ charset:"UTF-8" }),
    meta({ name:"viewport", content:"width=device-width, initial-scale=1.0" }),
    titleAndStyle
)`
        ),
        h5("HTML"),
        prism.html(
`&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;HT.JS&lt;/title&gt;
    &lt;link rel="stylesheet" href="/css/style.css"&gt;
&lt;/head&gt;`
        ),                    

        h3(b("Inline scripts")),
        h3(b("event, import, then default")),
        p("It's 2024! javascript modules are very well supported, and you can import them directly in the browser."),
        p("So instead of including a script in the head and exposing a function globally, you can import the script directly in the element's onclick event."),
        h5("Code"),
        prism.js(
`// increaseTextSize.js
export default (el) => {
    const computedFontSize = parseFloat(window.getComputedStyle(el).fontSize);
    el.style.fontSize = (computedFontSize * 1.1) + "px"
}
`
        ),
        br(),
        prism.js(
`// index.js
button({
    onclick: "import('/js/increaseTextSize.js').then(M => M.default(this))"
}, "Increase Text Size")
`
        ),
        h5("Example"),
        button({
            onclick: "import('/js/increaseTextSize.js').then(M => M.default(this))"
        }, "Increase Text Size"),
        h2("Extensible"),
        p("At it's core HT.JS is just a collection of functions, so you can easily add your own to create reusable components."),
        prism.js(
`// pageHead.js
import { head, meta, link, title, fragment } from "html-in-javascript";

const deviceMeta = fragment(
    meta({
        charset: "UTF-8"
    }),
    meta({
        name: "viewport", 
        content: "width=device-width, initial-scale=1.0"
    })
)

const favicons = fragment(
    link({
        rel: "apple-touch-icon", 
        sizes: "180x180", 
        href: "/apple-touch-icon.png" 
    }),
    link({
        rel: "icon", 
        type: "image/png", 
        sizes: "32x32", 
        href: "/favicon-32x32.png" 
    }),
    link({
        rel: "icon", 
        type:"image/png", 
        sizes: "16x16", 
        href:"/favicon-16x16.png"
    }),
    link({
        rel: "manifest", 
        href: "/site.webmanifest" 
    }),
    link({
        rel: "mask-icon", 
        href: "/safari-pinned-tab.svg", 
        color: "#5bbad5"
    }),
    meta({
        name: "msapplication-TileColor", 
        content: "#2d89ef" 
    }),
    meta({
        name: "theme-color", 
        content: "#ffffff" 
    })
)

export default ({
        pageTitle = "example.com", 
        description = "Placeholder description",
    } = {}, 
    ...rest
) => 
head(
    deviceMeta,
    favicons,
    title(pageTitle),
    link({
        rel: "stylesheet", 
        href: "/css/style.css"
    }),
    meta({
        name: "description", 
        content: description
    }),
    ...rest
)`
        ),
        prism.js(
`// index.js
import { html, body, h1, p, script } from "html-in-javascript";
import pageHead from "./pageHead.js";

const page =
html({ lang: "en" },
    pageHead({
            pageTitle: "example.com | My Page", 
            description: "My page description"
        },
        script({ src:"/js/someScript.js" })
    ),
    body(
        h1("My Page"),
        p("This is my page")
    )
)`
        ),
        h5("HTML"),
        prism.html(
`&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"&gt;
    &lt;link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"&gt;
    &lt;link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"&gt;
    &lt;link rel="manifest" href="/site.webmanifest"&gt;
    &lt;link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"&gt;
    &lt;meta name="msapplication-TileColor" content="#2d89ef"&gt;
    &lt;meta name="theme-color" content="#ffffff"&gt;
    &lt;title&gt;example.com | My Page&lt;/title&gt;
    &lt;link rel="stylesheet" href="/css/style.css"&gt;
    &lt;meta name="description" content="My page description"&gt;
    &lt;script src="/js/someScript.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;My Page&lt;/h1&gt;
    &lt;p&gt;This is my page&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;`
        ),
        script({src:"/js/prism.js"}),
    )
))