var u=async({state:t})=>{let[a,e,d]=["../../../updateZones.js","../../../headerFooter.js","../../../ht.js"].map(h=>import(h)),{default:o}=await a,{pageHeader:s,pageFooter:p}=await e,{default:{fragment:r,h1:n,title:i,p:l}}=await d,c=r(await s(),n("Hello World! Foo page!"),l(t.foo),await p());o("head",i("Foo | SPA")),o("body",c)};export{u as default};
//# sourceMappingURL=index.js.map
