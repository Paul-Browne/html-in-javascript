window.requestIdleCallback(()=>{window.top===window.self&&["/spa","/spa/foo","/spa/bar","/spa/baz"].forEach(async e=>{let a=document.createElement("IFRAME");a.src=e,a.style.display="none",document.body.appendChild(a)})});
//# sourceMappingURL=prefetch.js.map
