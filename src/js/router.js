window.state = {
    foo: "bar"
};

const router = async () => {
    const routeJsResource = async path => {
        (await import(`/js/pages${path.replace(/\/$/, '')}/index.js`)).default({ 
            state: window.state,
            pageView: window.top === window.self
        })
    }
    try {
        await routeJsResource(window.location.pathname);
    } catch {
        // await routeJsResource('/404')
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
window.addEventListener("popstate", router );

// fire once on initial load
document.addEventListener("DOMContentLoaded", router );