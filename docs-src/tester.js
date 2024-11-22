import { html, head, meta, link, script, div, b, h5, em, title, body, h1, h2, h3, h4, p, button, pre, code, br, fragment } from "html-in-javascript"

export default fragment(
'<!DOCTYPE html>',
html({
    lang: "en",
    class: "top"
},
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
    body({
            onscroll: "import('/js/scroll-hide.js').then(M => M.default())"
        },
        h1("lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        h1("lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        h1("lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        h1("lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        h1("lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        h1("lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        h1("lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        h1("lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        h1("lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        h1("lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    )
))