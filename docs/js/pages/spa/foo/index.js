var w=async({state:a,pageView:u})=>{let[o,t,d]=["../../../updateZones.js","../../../headerFooter.js","../../../ht.js"].map(h=>import(h)),{default:e}=await o,{pageHeader:s,pageFooter:p}=await t,{default:{fragment:r,h1:n,title:i,p:l}}=await d,c=r(await s(),n("Hello World! Foo page!"),l(a.foo),await p());e("head",i("Foo | SPA")),e("body",c)};export{w as default};
//# sourceMappingURL=index.js.map
