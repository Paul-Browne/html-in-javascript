const Z=(...t)=>{let e=[],r={};for(let o=0;o<t.length;o++)"object"==typeof t[o]?r={...r,...t[o]}:e.push(t[o]);return{Y:e.join(""),X:Object.keys(r).map((t=>{const e=/"/g.test(r[t])?"'":'"';return` ${t}=${e}${r[t]}${e}`})).join("")}};export const[img,area,base,br,col,embed,hr,input,link,meta,param,source,track,wbr,a,abbr,address,article,aside,audio,b,bdi,bdo,blockquote,body,button,canvas,caption,cite,code,colgroup,data,datalist,dd,del,details,dfn,dialog,div,dl,dt,em,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,html,i,iframe,ins,kbd,label,legend,li,main,map,mark,menu,meter,nav,noscript,object,ol,optgroup,option,output,p,picture,pre,progress,q,rp,rt,ruby,s,samp,script,section,select,slot,small,span,strong,style,sub,summary,sup,table,tbody,td,template,textarea,tfoot,th,thead,time,title,tr,u,ul,video,fragment]=["img","area","base","br","col","embed","hr","input","link","meta","param","source","track","wbr","a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","html","i","iframe","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","slot","small","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","u","ul","video","fragment"].map(((t,e)=>{const r=e>13?`</${t}>`:"";return(...e)=>{const{Y:o,X:d}=Z(...e);return"fragment"==t?o:`<${t}${d}>${o}${r}`}}));