import htjs from "./src/js/ht.js"

const { html, head, meta, link, script, title, body, h1, pre, code, fragment, br} = htjs;

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
        title("Single Page App | HT.JS"),
        meta({name:"description", content:"Using HT.JS to create a Single Page Application with Routing"}),
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
        h1({class:'big-text'}, "Single Page App | HT.JS"),

        prism.html(
`js
├── router.js
├── update.js
├── pages
│   ├── 404.js
│   ├── home.js
│   ├── about.js
│   ├── contact.js
│   └── services.js 
└── components  
    ├── header.js
    └── footer.js
`
        ),

        br(),

        prism.js(
`// state, entirely optional
window.state = {
    foo: "bar"
};

const router = async () => {
    const path = window.location.pathname;
    let pageFunction;
    try {
        const parsePath = \`/js/pages\${path}.js\`.replace("/.js", ".js");
        pageFunction = (await import(parsePath)).default;
    } catch {
        try {
            pageFunction = (await import('/js/pages/404.js')).default;            
        } catch {}
    }
    pageFunction({ state: window.state })
}

// fire once on initial load
document.addEventListener("DOMContentLoaded", () => router() );

// fire on click
document.addEventListener("click", (e) => {
    if (!e.target.matches("a")) return;
    e.preventDefault();
    window.history.pushState({}, "", e.target.href);
    router();
});

// fire on back/forward
window.addEventListener("popstate", () => router());
`
        ),
        script({src:"/js/prism.js"}),
    )
)
)