var u=["img","area","base","br","col","embed","hr","input","link","meta","param","source","track","wbr","a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","html","i","iframe","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","slot","small","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","u","ul","var","video","fragment"],b=(...t)=>{let a=[],n={};for(let e=0;e<t.length;e++)typeof t[e]=="object"?n={...n,...t[e]}:typeof t[e]=="string"?a.push(t[e]):t[e].name&&a.push(`${t[e]}`);return{content:a.join(""),attributes:Object.keys(n).map(e=>typeof n[e]=="function"?` ${e}="(${n[e]})()"`:` ${e}="${n[e]}"`).join("")}},g=u.reduce((t,a)=>{let n=u.indexOf(a)>13?`</${a}>`:"";return t[a]=(...e)=>{let{content:l,attributes:f}=b(...e);return a=="fragment"?l:`<${a}${f}>${l}${n}`},t},{}),h=g;var{fragment:o,meta:m,link:y,title:s,p:i,h1:d,a:r}=h,p=o(m({charset:"UTF-8"}),m({name:"viewport",content:"width=device-width, initial-scale=1.0"}),y({rel:"stylesheet",href:"/css/style.css"})),w={head:()=>o(p,s("Spa!")),body:async()=>{let t={ip:null};try{t=await(await fetch("https://api.ipify.org?format=json")).json()}catch{}return o(d("Hello World!"),i("Spa"),t.ip?i(t.ip):"",r({href:"/page2"},"Page 2")," | ",r({href:"/batman"},"Batman"))}},v={head:()=>o(p,s("page 2!")),body:async()=>o(d("Hello World!"),i("Page 2"),r({href:"/spa"},"Spa")," | ",r({href:"/batman"},"Batman"))},$={head:()=>o(p,s("BATMAN!")),body:async()=>o(d("Hello World!"),i("Batman"),r({href:"/spa"},"Spa")," | ",r({href:"/page2"},"Page 2"))},j={"/spa":w,"/page2":v,"/batman":$},c=async()=>{let t=window.location.pathname,a=j[t];document.head.innerHTML=await a.head(),document.body.innerHTML=await a.body()};document.addEventListener("click",t=>{t.target.matches("a")&&(t.preventDefault(),window.history.pushState({},"",t.target.href),c())});window.addEventListener("popstate",c);document.addEventListener("DOMContentLoaded",c);
//# sourceMappingURL=spa.js.map
