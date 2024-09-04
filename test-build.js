import { html, head, meta, link, script, title, body, h1, pre, code, fragment, br, p, style } from "./esm.js";

const test = fragment(
    '<!DOCTYPE html>',
    html({lang: "en"},
        head(
            meta({charset:"UTF-8"}),
            meta({name:"viewport", content:"width=device-width, initial-scale=1.0"}),
            title("Single Page App | HT.JS"),
            meta({name:"description", content:"Using HT.JS to create a Single Page Application with Routing"}),
            link({rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"}),
            link({rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"}),
            link({rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"}),
            link({rel:"manifest", href:"/site.webmanifest"}),
            link({rel:"mask-icon", href:"/safari-pinned-tab.svg", color:"#5bbad5"}),
            meta({name:"msapplication-TileColor", content:"#2d89ef"}),
            style(".body{margin:0;}"),
            style(".body{margin:0;}"),
            style(".body{margin:0;}"),
            style(".body{margin:0;}"),
            meta({name:"theme-color", content:"#ffff00"}),
            link({rel:"stylesheet", href:"/css/style.css"}),
            // script({src:"/js/escapeKeyclosesModals.js", type:"module"}),
        ),
        body(
            h1({class:'big-text'}, "Single Page App | HT.JS"),
        )
    )
)

console.log(test)