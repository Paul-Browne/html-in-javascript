var m=async({state:a,pageView:h})=>{let[t,o,d]=["../../updateZones.js","../../headerFooter.js","../../ht.js"].map(g=>import(g)),{default:e}=await t,{pageHeader:p,pageFooter:s}=await o,{default:{fragment:r,h1:n,title:i,p:l}}=await d,c=r(await p(),n("Hello World! Home page!"),l(a.foo),await s());e("head",i("Home page | SPA")),e("body",c)};export{m as default};
//# sourceMappingURL=index.js.map
