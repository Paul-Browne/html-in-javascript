import htjs from './index.js';

const { fragment, meta, link, title, p, h1, a } = htjs;

const globalHead = fragment(
    meta({ charset: "UTF-8" }),
    meta({ name: "viewport", content: "width=device-width, initial-scale=1.0" }),
    link({ rel: "stylesheet", href: "/css/style.css" })
);

const page1 = {
    head: () => fragment(
        globalHead,
        title("Spa!")
    ),
    body: async () => {
        let ipAddressQuery = {
            ip: null
        }
        try {
            ipAddressQuery = await (await fetch("https://api.ipify.org?format=json")).json();
        } catch (error) {}
        return fragment(
            h1("Hello World!"),
            p("Spa"),
            ipAddressQuery.ip ? p(ipAddressQuery.ip) : "",
            a({ href: "/page2",  }, "Page 2"),
            " | ",
            a({ href: "/batman",  }, "Batman")
        )
    }
}

const page2 = {
    head: () => fragment(
        globalHead,
        title("page 2!")
    ),
    body: async () => {
        return fragment(
            h1("Hello World!"),
            p("Page 2"),
            a({ href: "/spa",  }, "Spa"),
            " | ",
            a({ href: "/batman",  }, "Batman")
        )
    }
}

const page3 = {
    head: () => fragment(
        globalHead,
        title("BATMAN!")
    ),
    body: async () => {
        return fragment(
            h1("Hello World!"),
            p("Batman"),
            a({ href: "/spa",  }, "Spa"),
            " | ",
            a({ href: "/page2",  }, "Page 2")
        )
    }
}

// routing

const routes = {
    "/spa": page1,
    "/page2": page2,
    "/batman": page3,
}

const router = async () => {
    const path = window.location.pathname;
    const page = routes[path];
    document.head.innerHTML = await page.head();
    document.body.innerHTML = await page.body();
}


document.addEventListener("click", (e) => {
    if (!e.target.matches("a")) {
        return;
    }
    e.preventDefault();
    window.history.pushState({}, "", e.target.href);
    router();
});

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", router);