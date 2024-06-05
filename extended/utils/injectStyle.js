import injectStyleBrowser from './injectStyleBrowser.js'
import injectStyleNode from './injectStyleNode.js'

export default ({
    cssString = null,
    cssUrl = null
} = {}) => {
    if(!cssString && !cssUrl) return "";
    if(typeof window == 'object'){
        injectStyleBrowser({
            cssString,
            cssUrl
        })
    }else{
        return injectStyleNode({
            cssString,
            cssUrl
        })
    }
    return ""
}