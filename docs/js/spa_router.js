window.state={foo:"bar"};var e=async()=>{let t=window.location.pathname,a;try{a=(await import(`/js/pages${t}.js`.replace("/.js",".js"))).default,a({state:window.state})}catch{console.error(`error loading /js/pages${t}.js`)}};document.addEventListener("DOMContentLoaded",()=>e());document.addEventListener("click",t=>{t.target.matches("a")&&(t.preventDefault(),window.history.pushState({},"",t.target.href),e())});window.addEventListener("popstate",()=>e());
//# sourceMappingURL=spa_router.js.map