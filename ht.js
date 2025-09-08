// manually minify from https://minify-js.com/
// then still need to minify some variable names like argumentative, content and attributes
// then paste to esm.js

const argumentative = (...args) => {
    let content = [];
    let attributes = {};
    for (let i = 0; i < args.length; i++) {
        if(typeof args[i] == 'object'){
            attributes = {
                ...attributes,
                ...args[i]
            }
        }else{
            content.push(args[i])
        }
    }
    return {
        content: content.join(''),
        attributes: Object.keys(attributes).map(key => {
            const value = attributes[key];
            if(typeof value == 'boolean') return value ? ` ${key}` : "";
            return ` ${key}="${value.replace(/"/g,'&#34;')}"`;
        }).join('')
    }
}

export const [img,area,base,br,col,embed,hr,input,link,meta,param,source,track,wbr,a,abbr,address,article,aside,audio,b,bdi,bdo,blockquote,body,button,canvas,caption,cite,code,colgroup,data,datalist,dd,del,details,dfn,dialog,div,dl,dt,em,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,html,i,iframe,ins,kbd,label,legend,li,main,map,mark,menu,meter,nav,noscript,object,ol,optgroup,option,output,p,picture,pre,progress,q,rp,rt,ruby,s,samp,script,section,select,slot,small,span,strong,style,sub,summary,sup,table,tbody,td,template,textarea,tfoot,th,thead,time,title,tr,u,ul,video,fragment] = ["img","area","base","br","col","embed","hr","input","link","meta","param","source","track","wbr","a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","html","i","iframe","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","slot","small","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","u","ul","video","fragment"].map((element, i) => {
    const closingTag = i > 13 ? `</${element}>` : "";
    return (...args) => {
        const { content, attributes } = argumentative(...args);
        if(element == "fragment") return content
        return `<${element}${attributes}>${content}${closingTag}`;
    }
})