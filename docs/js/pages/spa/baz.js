var n=async({state:t})=>{let{default:a}=await import("../../updateZones.js"),{pageHeader:o,pageFooter:e}=await import("../../headerFooter.js"),{default:{fragment:d,h1:i,title:p,p:r}}=await import("../../index.js"),l=d(await o(),i("Hello World! Baz page!"),r(t.foo),await e());a("head",p("Baz | SPA")),a("body",l)};export{n as default};
//# sourceMappingURL=baz.js.map
