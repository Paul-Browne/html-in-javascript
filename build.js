import { cp, readFile, stat, mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

export const writeFileTo = async (content, path) => {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, content);
}

import htjs from "./htjs.js"

const { html, head, meta, link, style, script, div, b, hr, em, ins, title, body, header, h1, h2, h3, p, img, button, input, nav, a, pre, code, fragment, br} = htjs;

// const frontEndScript = function plus(a, b) {
//     console.log(a + b)
// }

const prism = {
    js: content => pre({class:"language-javascript"}, code(content)),
    html: content => pre({class:"language-html"}, code(content))
}

const frontEndScript = function plus(a, b, c, d){
    console.log(a + b + c + d)
}

function changeToBlue(htmlElement){
    htmlElement.style.color = "blue"
}

function plus(a, b) {
    console.log(a + b)
}

function increaseTextSize(el){
    const computedFontSize = parseFloat(window.getComputedStyle(el).fontSize);
    el.style.fontSize = (computedFontSize * 1.1) + "px"
}

function log(a) {
    console.log(a)
}

const links = [
    {href: '/about', text: 'About'},
    {href: '/contact', text: 'Contact'},
    {href: '/services', text: 'Services'},
    {href: '/blog', text: 'Blog'}
]

const pageHeader = header({class: 'main-header'},
    nav(
        a({href: '/'},
            img({
                src: '/images/logo.png',
                alt: 'Logo'
            }),
        ),
        div(
            ...links.map(link => a({href: link.href}, link.text))
        )
    )
)

const page = 
html({lang: "en"},
    head(
        meta({charset:"UTF-8"}),
        meta({name:"viewport", content:"width=device-width, initial-scale=1.0"}),
        title("HTJS"),
        link({rel:"stylesheet", href:"css/style.css"}),
    ),
    body(
        h1({class:'big-text'}, "HTJS"),
        p("html in js made simple, done right."),
        h1(code("Build / Server")),
        prism.js( 
`import { writeFile } from "node:fs/promises";
import htjs from "html-in-javascript";

const { html, head, body, meta, link, title, h1, p } = htjs

const page = 
html({lang: "en"},
    head(
        meta({charset:"UTF-8"}),
        meta({name:"viewport", content:"width=device-width, initial-scale=1.0"}),
        title("HTJS"),
        link({rel:"stylesheet", href:"/css/style.css"}),
    ),
    body({class:"home-page"},
        h1("HTJS"),
        p("html in js made simple, done right."),
    )
)

await writeFile("index.html", page);
`
        ),
        h1(code("Browser")),
        prism.html( 
`&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;script src="https://cdn.jsdelivr.net/npm/html-in-javascript/htjs.min.js"&gt;&lt;/script&gt;
    &lt;script&gt;
        const { fragment, meta, title, link } = htjs
        document.currentScript.outerHTML = 
        fragment(
            meta({charset:"UTF-8"}),
            meta({name:"viewport", content:"width=device-width, initial-scale=1.0"}),
            title("HTJS"),
            link({rel:"stylesheet", href:"/css/style.css"})
        )
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;script&gt;
        const { body, h1, p } = htjs
        document.body.outerHTML = 
        body({class:"home-page"}
            h1("HTJS"),
            p("html in js made simple, done right.")
        )
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;`
        ),
        p(
            "HTJS is really best used in the build process or on the server, but if you really want to use it in the browser, go ahead :)", 
            br(), 
            "The browser version is just 1kb"
        ),        
        h1(code("Docs")),


        code(b("Code")),
        prism.js( 
`div(
    {
        // Objects are the element's attributes
        // in a key:value relationship eg.
        class: "class names",
        // becomes: class="class names" 
        id: "some-id",
        "data-test-id": 123,
        onclick: () => this.style.color = 'blue',
        style: "color:red;padding:10px;border:1px solid black"
    },
    h2("hello world!"),
    p(
        "Any strings are treated as content, ",
        ins("All 'element functions' return strings of HTML"),
        " ",
        em("and can be nested exactly like html")
    ),
    p("you can have as many, or as few as you wish"),
    {
        // you can have more than one object for the attributes
        "data-foo": "bar"
        // and they will be combined, but probably better to
        // just have one attribute object, and to put it first
    }
)`
        ),
        code(b("HTML")),
        prism.html( 
`&lt;div 
  class="class names" 
  id="some-id" 
  data-test-id="123" 
  onclick="(() => this.style.color = 'blue'" 
  style="color:red;padding:10px;border:1px solid black"
  data-foo="bar"&gt;
    &lt;h2&gt;hello world!&lt;/h2&gt;
    &lt;p&gt;Any strings are treated as content, &lt;ins&gt;All 'element functions' return strings of HTML&lt;/ins&gt; &lt;em&gt;and can be nested exactly like html&lt;/em&gt;&lt;/p&gt;
    &lt;p&gt;you can have as many, or as few as you wish&lt;/p&gt;
&lt;/div&gt;`
        ),        
        code(b("Example")),
        div({
            // objects are the elements attributes 
            // in a key:value relationship eg.
            class: "class names",
            // becomes: class="class names" 
            id: "some-id",
            "data-test-id": 123,
            // onclick: () => console.log(this),
            onclick: () => this.style.color = 'blue',
            style: "color:red;padding:0 10px;border:1px solid black"
        },
            h2("hello world!"),
            p(
                "Any strings are treated as content, ",
                ins("All 'element functions' return strings of HTML"),
                " ",
                em("and can be nested exactly like html")
            ),
            p("you can have as many, or as few as you wish"),
            {
                // you can have more than one object for the attributes
                "data-foo": "bar"
                // and they will be combined, but probably better to
                // just have one attribute object, and to put it first
            }                    
        ),
        h2(code("fragment")),
        p("similar to React's ", code("&lt;&gt;{content}&lt;/&gt;")),
        p("Used when you can't, or don't want a container &lt;div&gt;"),
        code(b("Code")),
        prism.js(
`head(
    meta({charset:"UTF-8"}),
    meta({name:"viewport", content:"width=device-width, initial-scale=1.0"}),    
    fragment(
        title("HTJS"),
        link({rel:"stylesheet", href:"/css/style.css"})
    )
)`
        ),
        code(b("HTML")),
        prism.html(
`&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;HTJS&lt;/title&gt;
    &lt;link rel="stylesheet" href="/css/style.css" &gt;
&lt;/head&gt;`
        ),                    


        h2(code("Scripts")),
        p("It's possible to include scripts in your html.", br(), "Of course, it's better to keep your scripts separate, but sometimes it's just easier to include them in the html."),
        p("Function declerations are treated as content and will be converted to strings"),
        prism.js(
`function increaseTextSize(el){
    const computedFontSize = parseFloat(window.getComputedStyle(el).fontSize);
    el.style.fontSize = (computedFontSize * 1.1) + "px"
}

script(increaseTextSize),
button({
    onclick: () => increaseTextSize(this),
}, "Increase Text Size")
`
        ),
        script(increaseTextSize),
        button({
            onclick: () => increaseTextSize(this),
        }, "Increase Text Size"),
        h1(code("Extensible")),
        p("At it's core, HTJS is just a collection of functions, so you can easily add your own, to create reusable components."),
        prism.js(
`// pageHead.js
import htjs from "html-in-javascript";
const { head, meta, link, title, fragment } = htjs;

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
import htjs from "html-in-javascript";
import pageHead from "./pageHead.js";
const { html, body, h1, p, script } = htjs

const page =
html({lang: "en"},
    pageHead({
            title: "example.com | My Page", 
            description: "My page description"
        },
        script({src:"/js/someScript.js"})
    ),
    body(
        h1("My Page"),
        p("This is my page")
    )
)`
        ),
        code(b("HTML")),
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

        script({src:"js/prism.js"})
    )
)

writeFileTo(page, "docs/index.html")