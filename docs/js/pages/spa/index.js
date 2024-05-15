var c=async({state:t})=>{let{default:a}=await import("../../updateZones.js"),{pageHeader:e,pageFooter:o}=await import("../../headerFooter.js"),{default:{fragment:i,h1:p,title:d,p:r,script:n,link:s}}=await import("../../ht.js"),l=i(await e(),p("Hello World! Home page!"),r(t.foo),await o());a("head",d("Home page | SPA")),a("body",l)};export{c as default};
//# sourceMappingURL=index.js.map
