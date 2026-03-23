import { a, html, head, meta, link, script, div, b, h5, em, title, body, h1, h2, h3, h4, p, button, pre, code, br, fragment, strong, ins } from "javascript-to-html"

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
        p(a({href: "https://www.npmjs.com/package/vite-plugin-html-pages"}, "vite-plugin-html-pages"), " is a Vite plugin that allows you to easily create HTML pages from JavaScript files."),
        h3("Installation"),
        prism.html("npm install vite vite-plugin-html-pages javascript-to-html"),

        h3("vite.config.mjs"),
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

        script({src:"/js/prism.js"})
    )
))