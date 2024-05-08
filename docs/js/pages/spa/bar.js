var n=async({state:t})=>{let{default:a}=await import("../../updateZones.js"),{pageHeader:o,pageFooter:e}=await import("../../headerFooter.js"),{default:{fragment:r,h1:d,title:i,p}}=await import("../../index.js"),l=r(await o(),d("Hello World! Bar page!"),p(t.foo),await e());a("head",i("Bar | SPA")),a("body",l)};export{n as default};
//# sourceMappingURL=bar.js.map
