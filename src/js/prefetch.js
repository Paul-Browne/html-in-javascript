window.requestIdleCallback(() => {
    if(window.top === window.self){
        ['/spa', '/spa/foo', '/spa/bar', '/spa/baz'].forEach(async path => {
            const iframe = document.createElement("IFRAME")
            iframe.src = path
            iframe.style.display = "none"
            document.body.appendChild(iframe)
        })
    }
})