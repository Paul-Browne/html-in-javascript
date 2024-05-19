window.state = {
    foo: "bar"
};

const router = async () => {
    // example.com/foo/bar(/)  ->  example.com/pages/foo/bar/index.js
    const path = window.location.pathname;
    const props = { 
        state: window.state,
        pageView: window.top === window.self
    }
    const resourcePath = `/js/pages${path.replace(/\/$/, '')}/index.js`;
    try {
        (await import(resourcePath)).default(props);
    } catch {
        try {
            (await import('/js/pages/404/index.js')).default(props)
        } catch {}            
    }
}

// fire on click
document.addEventListener("click", e => {
    const { href } = e.target;
    // ignore clicks on anything that doesn't have a href
    // or if the href is an external link
    if (href && new URL(href).origin === window.location.origin ){
        e.preventDefault();
        if(href !== window.location.href){
            window.history.pushState({}, "", href);
            router()
        }
    }
});

// fire on back/forward
window.addEventListener("popstate", router);

// fire once on initial load
document.addEventListener("DOMContentLoaded", router );