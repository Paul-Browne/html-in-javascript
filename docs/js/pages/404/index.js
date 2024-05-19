var m=async({state:c,pageView:g})=>{let[e,a,o,h]=["../../updateZones.js","../../headerFooter.js","../../ht.js"].map(u=>import(u)),{default:t}=await e,{pageHeader:s,pageFooter:d}=await a,{default:{fragment:n,h1:p,title:r,p:w,img:f}}=await o,i=n(await s(),p("404 page not found"),await d());t("head",r("404 | SPA")),t("body",i)};export{m as default};
//# sourceMappingURL=index.js.map
