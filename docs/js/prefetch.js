window.preloader={loadedPages:[window.location.origin+window.location.pathname]};window.preloader.linkObserver=new IntersectionObserver(n=>{for(let o of n){let{href:e}=o.target;if(window.preloader.loadedPages.includes(e))window.preloader.linkObserver.unobserve(o.target);else if(o.isIntersecting){window.preloader.loadedPages.push(e),window.preloader.linkObserver.unobserve(o.target);let r=document.createElement("IFRAME");r.src=e,r.style.display="none",document.body.appendChild(r)}}});window.preloader.refreshLinkObserver=()=>{if(window.top===window.self){let n=document.querySelectorAll("a");for(let o of n){let{href:e}=o;e&&new URL(e).origin===window.location.origin&&new URL(e).pathname!==window.location.pathname&&!window.preloader.loadedPages.includes(e)&&window.preloader.linkObserver.observe(o)}}};
//# sourceMappingURL=prefetch.js.map
