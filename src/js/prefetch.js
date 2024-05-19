window.preloader = {
    loadedPages: [
        window.location.href
    ],
}

window.preloader.linkObserver = new IntersectionObserver(entries => {
    let loading = 0;
    for (const entry of entries) {
        const { href } = entry.target;
        if(window.preloader.loadedPages.includes(href)){
            window.preloader.linkObserver.unobserve(entry.target);
        }else if(entry.isIntersecting){
            window.preloader.loadedPages.push(href)
            window.preloader.linkObserver.unobserve(entry.target);
            setTimeout(() => {
                const iframe = document.createElement("IFRAME")
                // const requestURL = new URL(href)
                // requestURL.searchParams.append('preloaded', true)
                // iframe.src = requestURL;
                iframe.src = href;
                iframe.style.display = "none"
                document.body.appendChild(iframe)
            }, loading * 3 * 1000)
            loading += 1;
        }
    }
});

window.preloader.refreshLinkObserver = () => {
    if(window.top === window.self){
        const anchors = document.querySelectorAll('a')
        for (const anchor of anchors) {
            const { href } = anchor
            if(
                href &&
                new URL(href).origin === window.location.origin &&          // not external
                new URL(href).pathname !== window.location.pathname &&      // not same as current page
                !window.preloader.loadedPages.includes(href)                // hasn't been loaded
            ){
                window.preloader.linkObserver.observe(anchor);
            }
        }
    }
}