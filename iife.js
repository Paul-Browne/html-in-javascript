var htjs=(()=>{var u=(e,t)=>()=>(e&&(t=e(e=0)),t);var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var i,p,b,s,n=u(()=>{i=["img","area","base","br","col","embed","hr","input","link","meta","param","source","track","wbr","a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","html","i","iframe","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","slot","small","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","u","ul","video","fragment"],p=(...e)=>{let t=[],r={};for(let o=0;o<e.length;o++)typeof e[o]=="object"?r={...r,...e[o]}:t.push(e[o]);return{content:t.join(""),attributes:Object.keys(r).map(o=>` ${o}="${r[o]}"`).join("")}},b=i.reduce((e,t)=>{let r=i.indexOf(t)>13?`</${t}>`:"";return e[t]=(...o)=>{let{content:a,attributes:l}=p(...o);return t=="fragment"?a:`<${t}${l}>${a}${r}`},e},{}),s={...b}});var m=c(($,d)=>{n();d.exports=s});return m();})();
