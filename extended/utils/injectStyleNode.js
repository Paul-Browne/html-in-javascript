import htjs from 'html-in-javascript';

const { style, link } = htjs;

const qwe = ({ cssString = null, cssUrl = null }) => {
    if(qwe[cssString || cssUrl]) return "";
    if(cssString){
        qwe[cssString] = true
        return style(cssString)
    }
    if(cssUrl){
        qwe[cssUrl] = true
        return link({
            rel: 'stylesheet',
            href: cssUrl
        })
    }
}

export default qwe