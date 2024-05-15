var n=async({state:o})=>{let{default:a}=await import("../../../updateZones.js"),{pageHeader:t,pageFooter:e}=await import("../../../headerFooter.js"),{default:{fragment:d,h1:i,title:p,p:r}}=await import("../../../ht.js"),l=d(await t(),i("Hello World! Foo page!"),r(o.foo),await e());a("head",p("Foo | SPA")),a("body",l)};export{n as default};
//# sourceMappingURL=index.js.map
