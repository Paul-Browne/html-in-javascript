import { img } from 'javascript-to-html';

const hashCode = str => {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString(32);
}

export default (pathToCSS, {
    dataId = hashCode(pathToCSS),
} = {}) => {
    return img({
        loading: 'lazy',
        style: "opacity:0",
        src: `data:,${dataId}`,
        // onerror: `import('/js/styleLoader.js').then(_ => _.default('${dataId}', '${pathToCSS}'))`
        onerror: `this.outerHTML=&quot;<style>@import \'${pathToCSS}\';</style>&quot;`
    })
}