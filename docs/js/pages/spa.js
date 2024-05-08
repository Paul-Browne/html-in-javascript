var n=async({state:t})=>{let{default:a}=await import("../updateZones.js"),{pageHeader:o,pageFooter:e}=await import("../headerFooter.js"),{default:{fragment:d,h1:i,title:p,p:r}}=await import("../index.js"),l=d(await o(),i("Hello World! Home page!"),r(t.foo),await e());a("head",p("Home | SPA")),a("body",l)};export{n as default};
//# sourceMappingURL=spa.js.map
