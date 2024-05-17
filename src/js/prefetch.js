window.universal = {
    loadedPages: []
}

window.universal.linkObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
        const { href } = entry.target;
        if(entry.isIntersecting && !window.universal.loadedPages.includes(href)){
            window.universal.loadedPages.push(href)
            window.universal.linkObserver.unobserve(entry.target);
            const iframe = document.createElement("IFRAME")
            iframe.src = href
            iframe.style.display = "none"
            document.body.appendChild(iframe)
        }
    }
}, {
    threshold: 0
});

window.universal.refreshLinkObserver = () => {
    if(window.top === window.self){
        const anchors = document.querySelectorAll('a')
        for (const anchor of anchors) {
            const { href } = anchor
            if(href && new URL(href).origin === window.location.origin && !window.universal.loadedPages.includes(href)){
                window.universal.linkObserver.observe(anchor);
            }
        }
    }
}