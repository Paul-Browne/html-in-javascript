import { a, html, head, meta, link, script, div, b, h5, em, title, body, h1, h2, h3, h4, p, button, pre, code, br, fragment } from "html-in-javascript"

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
        h2("javascript-to-html, made simple, done right."),
        h3(a({href: "https://cdn.jsdelivr.net/npm/javascript-to-html/esm.js"}, "less than 2Kb"), ", with zero dependencies."),
        div(
            prism.js(
`import { div, h1, p } from "javascript-to-html";

div({ class: "home-page" },
    h1("Hello World!"),
    p("This is a simple example of using HT.JS")
);`         ),
            p("compiles to"),
            prism.html(
`&lt;div class="home-page"&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
    &lt;p&gt;This is a simple example of using HT.JS&lt;/p&gt;
&lt;/div&gt;`
            )
        ),

        p("That's it... Congratulations! you are now an expert in ht.js. Add it to your CV."),


        div(
            prism.js(
`import { button } from "javascript-to-html";

button({ 
    id: "awesome-button",
    class: "btn btn-primary",
    onclick: "alert('Button clicked!')",
    "data-attribute": "value",
    "aria-label": "Awesome Button",
    "role": "button"
}, "Click Me" );`
            ),
            p("compiles to"),
            prism.html(
`&lt;button id="awesome-button" class="btn btn-primary" onclick="alert('Button clicked!')" data-attribute="value" aria-label="Awesome Button" role="button"&gt;Click Me&lt;/button&gt;`
            )
        ),

        button({ 
                id: "awesome-button",
                class: "btn btn-primary",
                onclick: "alert('Button clicked!')",
                "data-attribute": "value",
                "aria-label": "Awesome Button",
                "role": "button"
            }, "Click Me" ),

        script({src:"/js/prism.js"}),
    )
))