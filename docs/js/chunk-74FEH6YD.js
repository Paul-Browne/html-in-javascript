var n=["img","area","base","br","col","embed","hr","input","link","meta","param","source","track","wbr","a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","html","i","iframe","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","slot","small","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","u","ul","var","video","fragment"],s=(...e)=>{let o=[],i={};for(let t=0;t<e.length;t++)typeof e[t]=="object"?i={...i,...e[t]}:typeof e[t]=="string"?o.push(e[t]):typeof e[t]=="function"&&(console.log(e[t]),e[t].name&&o.push(`${e[t]}`));return{content:o.join(""),attributes:Object.keys(i).map(t=>typeof i[t]=="function"?` ${t}="(${i[t]})()"`:` ${t}="${i[t]}"`).join("")}},l=n.reduce((e,o)=>{let i=n.indexOf(o)>13?`</${o}>`:"";return e[o]=(...t)=>{let{content:r,attributes:a}=s(...t);return o=="fragment"?r:`<${o}${a}>${r}${i}`},e},{}),u=l;export{u as a};
//# sourceMappingURL=chunk-74FEH6YD.js.map
