import { html, head, meta, title, body, h1, p } from "../esm.js";
import html5 from "../extended/html5/index.js";

const test = html5({
    head: [
        meta({
            name: "description",
            content: "HT.JS is a library for easily creating HTML in JavaScript, for both the backend and the frontend."
        }),
        title("HT.JS - HTML in JavaScript")
    ],
    body: [
        {
            class: "home-page",
            onscroll: "import('js/scroll-hide.js').then(M => M.default())"
        },
        h1("Hello World!"),
        p("foo bar buff quux.")
    ]
})

console.log(test)
