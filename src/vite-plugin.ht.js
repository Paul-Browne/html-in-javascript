import { a, html, head, meta, link, script, div, b, h5, em, title, body, h1, h2, h3, h4, p, button, pre, code, br, fragment, strong, ins, ul, li } from "javascript-to-html"

const prism = {
    js: content => pre({class:"language-javascript"}, code(content)),
    html: content => pre({class:"language-html"}, code(content))
}

export default () => fragment(
'<!DOCTYPE html>',
html({lang: "en"},
    head(
        meta({charset:"UTF-8"}),
        meta({name:"viewport", content:"width=device-width, initial-scale=1.0"}),
        title("HT.JS - Vite plugin"),
        meta({name:"description", content:"HT.JS Vite plugin vite-plugin-html-pages"}),
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
        div({class: "container"},
            h1({class:'big-text'}, a({href: "/"}, "HT.JS")),
            a({href: "/vite-plugin"}, "Vite plugin"),
        ),
        h2("HT.JS has its very own fully-featured Vite plugin"),
        p(a({href: "https://www.npmjs.com/package/vite-plugin-html-pages"}, "vite-plugin-html-pages"), " Generate static HTML pages from JavaScript using Vite."),
        p("Write pages as `.ht.js` or `.ht.ts` files and build fast, predictable websites with zero runtime and no framework."),
        p("> All the benefits of modern tooling, none of the framework overhead."),

        h3("Installation & Quick Start"),
        prism.html("npm install vite vite-plugin-html-pages javascript-to-html"),

        h4("vite.config.mjs"),
        prism.js(`import { defineConfig } from 'vite';
import htmlPages from 'vite-plugin-html-pages';

export default defineConfig({
    plugins: [
        htmlPages({
            pagesDir: 'src',
            cleanUrls: true
        }),
    ]
});`
        ),

        // h3("Highlights"),

        // ul(
        //     li("Write pages in JavaScript -> generate static HTML"),
        //     li("Zero runtime, no framework required"),
        //     li("File-based routing with dynamic routes"),
        //     li("Built-in asset pipeline with predictable output"),
        //     li("Scales to thousands of pages from data")
        // ),

        h3("Features"),
        ul(
            li(strong("Core")),
            li("Generate static HTML from JavaScript (.ht.js / .ht.ts)"),
            li("Zero runtime by default (no hydration or framework required)"),
            li("File-based routing"),
            li("Deterministic builds (what you build is what you deploy)"),
        ),
        ul(
            li(strong("Routing")),
            li("Dynamic routes [slug]"),
            li("Multiple parameters [year]/[slug]"),
            li("Catch-all routes [...slug]"),
            li("Optional catch-all routes [...slug]?"),
            li("Route groups (admin)/users.ht.js"),
            li("Index routes blog/[slug]/index.ht.js")
        ),   
        ul(
            li(strong("Data & Scalability")),
            li("Build thousands of pages from data (APIs, JSON, files)"),
            li("Static params generation"),
            li("Fetch caching for data loading"),
            li("Parallel static generation"),
        ),
        ul(
            li(strong("Assets")),
            li("Built-in asset pipeline (JS, TS, CSS via esbuild)"),
            li("Preserves src/ directory structure in output"),
            li("public/ directory passthrough for static assets"),
            li("Root-relative URLs (/js/..., /css/..., /fonts/...) just work"),
            li("CSS url(...) resolution (with graceful fallbacks)"),
            li("Configurable missing asset handling (error or warning)")
        ),
        ul(
            li(strong("Dev Experience")),
            li("Dev server with SSR rendering"),
            li("Automatic browser reload on file changes"),
            li("Debug logging")
        ),
        ul(
            li(strong("Output")),
            li("Automatic 404.html"),
            li("Automatic sitemap.xml"),
            li("Optional RSS feed generation")
        ),

        script({src:"/js/prism.js"})
    )
))