import htjs from './ht.js';

const { fragment, head, body, meta, title, link, p, h1 } = htjs;

const ipAddressQuery = await (await fetch("https://api.ipify.org?format=json")).json();

const App = ip => fragment(
    head(
        meta({ charset: "UTF-8" }),
        meta({ name: "viewport", content: "width=device-width, initial-scale=1.0" }),
        title("Welcome!"),
        link({ rel: "stylesheet", href: "/css/style.css" })
    ),
    body({ class: "home-page" },
        h1("Hello World!"),
        p(ip)
    )
)

document.documentElement.innerHTML = App(ipAddressQuery.ip);