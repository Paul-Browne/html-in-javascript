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
        h1({class:'big-text'}, "HT.JS/extended"),
        h3("ready-made components."),
        
        h2("html5"),

        h5("Description"),
        p("Create a full HTML5 document with optional attributes, head and body content."),

        h5("Code"),
        prism.js( 
`import html5 from "html-in-javascript/extended/html5"
import { h1, p, meta, title } from "html-in-javascript"

html5({
    htmlAttributes: {   // optional, object of attributes
        lang: "en"      // default
    },
    head: [             // optional, array or string
        meta({
            name: "description",
            content: "HT.JS is a library for easily creating HTML in JavaScript, for both the backend and the frontend."
        }),
        title("HT.JS - HTML in JavaScript")
    ],
    body: [             // optional, array or string
        {
            class: "home-page"
        },
        h1("Hello World!"),
        p("foo bar buff quux.")
    ]
})`
        ),

        h5("HTML"),
        prism.html( 
`&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
        &lt;meta name="description" content="HT.JS is a library for easily creating HTML in JavaScript, for both the backend and the frontend."&gt;
        &lt;title&gt;HT.JS - HTML in JavaScript&lt;/title&gt;
    &lt;/head&gt;
    &lt;body class="home-page"&gt;
        &lt;h1&gt;Hello World!&lt;/h1&gt;
        &lt;p&gt;foo bar buff quux.&lt;/p&gt;
    &lt;/body&gt;
&lt;/html&gt;`
        ),   
        
        

        h2("modal"),
        h2("tabs"),
        h2("accordion"),
        h2("carousel"),
        h2("dropdown"),
        h2("tooltip"),
        h2("popover"),
        h2("toast"),
        h2("spinner"),
        h2("progress"),
        h2("pagination"),
        h2("rating"),
        h2("alert"),
        h2("badge"),
        h2("breadcrumb"),
        h2("navbar"),



        script({src:"/js/prism.js"}),
    )
))