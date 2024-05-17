var m=async({state:a})=>{let[t,o,d]=["../../updateZones.js","../../headerFooter.js","../../ht.js"].map(h=>import(h)),{default:e}=await t,{pageHeader:s,pageFooter:p}=await o,{default:{fragment:r,h1:n,title:i,p:l}}=await d,c=r(await s(),n("Hello World! Home page!"),l(a.foo),await p());e("head",i("Home page | SPA")),e("body",c)};export{m as default};
//# sourceMappingURL=index.js.map
