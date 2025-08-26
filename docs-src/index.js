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

        h3(ins("Example")),

        prism.js(
`import { div, h1, p } from "javascript-to-html";

div({ class: "home-page" },
    h1("Hello World!"),
    p("This is a simple example of using HT.JS")
);`     ),
        p("compiles to"),
        prism.html(
`&lt;div class="home-page"&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
    &lt;p&gt;This is a simple example of using HT.JS&lt;/p&gt;
&lt;/div&gt;`
        ),

        p("That's it... Congratulations! you are now an expert in ht.js. Add it to your CV."),

        h3(ins("Another example")),

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
        ),

        br(),

        button({ 
            id: "awesome-button",
            class: "btn btn-primary",
            onclick: "alert('Button clicked!')",
            "data-attribute": "value",
            "aria-label": "Awesome Button",
            "role": "button"
        }, "Click Me" ),

        p("All html5 elements can be used, with the exception of &lt;var&gt; (You can probably figure out why)"),

        h3(ins("Using fragment()")),

        p("you can also use fragment() to 'wrap' elements, without the need for a &lt;div&gt; like so:"),

        prism.js(
`import { fragment, head, title, meta, link } from "javascript-to-html";

const globalHeadElements = fragment(
    meta({ charset:"UTF-8" }),
    meta({ name:"viewport", content:"width=device-width, initial-scale=1.0" }),
    link({ rel:"stylesheet", href:"/css/style.css" })
)

head(
    globalHeadElements,
    title("HT.JS"),
)`
        ),   
        
        p("compiles to"),
        prism.html(
`&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;link rel="stylesheet" href="/css/style.css"&gt;
    &lt;title&gt;HT.JS&lt;/title&gt;
&lt;/head&gt;`
        ),

        h3(ins("Extensibility")),

        p("HT.JS is designed to be extensible. You can easily create your own functions that will render anything from small components to entire pages."),

        prism.js(`// hero.js
import { div, h1 } from "javascript-to-html";

export default (title, image) => div({ 
        class: "hero",
        style: \`background-image: url('\${image}')\`
    },
    h1(title),
)`      ),

        p("You can then import and use this component in your application like so:"),

        prism.js(
`import { section } from "javascript-to-html";
import hero from "./hero.js";

section({ class: "hero-section" },
    hero("Welcome to HT.JS", "/images/hero.jpg")
);`
        ),

        p("compiles to"),

        prism.html(
`&lt;section class="hero-section"&gt;
    &lt;div class="hero" style="background-image: url('/images/hero.jpg')"&gt;
        &lt;h1&gt;Welcome to HT.JS&lt;/h1&gt;
    &lt;/div&gt;
&lt;/section&gt;`
        ),

        h3(ins("Motivation")),

        p(
            "The motivation behind HT.JS is to provide a simple and intuitive way to generate HTML in JavaScript, without the need for complex templating engines or frameworks.", br(), 
            "Given the ubiquity of full feature frameworks, like React, finding just a simple templating solution that didn't include the 'kitchen sink' of features was surprisingly challenging.", br(),
            "By just focusing on only transforming JavaScript to HTML (basically functions that return strings) HT.JS is an incredibly lightweight, easy-to-use, flexible and extensible solution, that can be used in many scenarios.", br(),
            "It can be used directly in the frontend (SPA style) in a build process to create static-sites, or even for server-side rendering (SSR)."
        ),

        script({src:"/js/prism.js"}),
    )
))