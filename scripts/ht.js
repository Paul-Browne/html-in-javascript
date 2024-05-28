const allElements = ["img","area","base","br","col","embed","hr","input","link","meta","param","source","track","wbr","a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","html","i","iframe","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","slot","small","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","u","ul","video","fragment"]

const argumentative = (...args) => {
    let content = [];
    let attributes = {};
    for (let i = 0; i < args.length; i++) {
        if(typeof args[i] === 'object'){
            attributes = {
                ...attributes,
                ...args[i]
            }
        }else if(typeof args[i] === 'string'){
            content.push(args[i])
        }else if(typeof args[i] === 'function'){
            /* 
                only works for function declarations
                eg. function myFunction(){} 
            */
            content.push(`${args[i]}`)
        }            
    }
    return {
        content: content.join(''),
        attributes: Object.keys(attributes).map(key => {
            if(typeof attributes[key] === 'function'){
                return ` ${key}="(${attributes[key]})()"`;
            }
            return ` ${key}="${attributes[key]}"`;
        }).join('')
    }
}

const htjs = allElements.reduce((acc, element) => {
    const closingTag = allElements.indexOf(element) > 13 ? `</${element}>` : "";
    acc[element] = (...args) => {
        const { content, attributes } = argumentative(...args);
        if(element == "fragment") return content
        return `<${element}${attributes}>${content}${closingTag}`;
    }
    return acc;
}, {})

export default htjs
