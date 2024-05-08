window.state = {
    foo: "bar"
};

const router = async () => {
    const path = window.location.pathname;
    // eg await import('./js/spa.js');
    let pageFunction;
    try {
        const parsePath = `/js/pages${path}.js`.replace("/.js", ".js");
        pageFunction = (await import(parsePath)).default;
        pageFunction({ state: window.state })
    } catch (error) {
        // if error, try to load the 404 page
        console.error(`error loading /js/pages${path}.js`);
    }
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