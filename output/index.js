!function(e,r,t,o,n){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l="function"==typeof a[o]&&a[o],s=l.cache||{},i="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(r,t){if(!s[r]){if(!e[r]){var n="function"==typeof a[o]&&a[o];if(!t&&n)return n(r,!0);if(l)return l(r,!0);if(i&&"string"==typeof r)return i(r);var u=Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}c.resolve=function(t){var o=e[r][1][t];return null!=o?o:t},c.cache={};var f=s[r]=new d.Module(r);e[r][0].call(f.exports,c,f,f.exports,this)}return s[r].exports;function c(e){var r=c.resolve(e);return!1===r?{}:d(r)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=s,d.parent=l,d.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]},Object.defineProperty(d,"root",{get:function(){return a[o]}}),a[o]=d;for(var u=0;u<r.length;u++)d(r[u]);if(t){var f=d(t);"object"==typeof exports&&"undefined"!=typeof module?module.exports=f:"function"==typeof define&&define.amd&&define(function(){return f})}}({eqaat:[function(e,r,t){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(t);var n=e("html-in-javascript"),a=o.interopDefault(n),l=e("../../../updateZones.js"),s=o.interopDefault(l),i=e("../../../headerFooter.js"),d=e("../../../../../extended/modalTrigger/index.js"),u=o.interopDefault(d),f=e("../../../../../extended/fullScreenHero/browser.js"),c=o.interopDefault(f);t.default=async({state:e,pageView:r})=>{let{fragment:t,p:o,h1:n,title:l,a:d}=a.default,f=t(await (0,i.pageHeader)(),n("Hello World! Buf page!"),d({href:"/spa"},"home"),o(e.foo),(0,c.default)({},"hello full screen!"),(0,c.default)({},"hello full again!"),(0,u.default)({url:"/js/myModal.js"},"Click me!!"),await (0,i.pageFooter)());(0,s.default)("head",l("hi")),(0,s.default)("body",f)}},{"html-in-javascript":"edwem","../../../updateZones.js":"5b5AI","../../../headerFooter.js":"aBxmv","../../../../../extended/modalTrigger/index.js":"dgcDk","../../../../../extended/fullScreenHero/browser.js":"8xBEy","@parcel/transformer-js/src/esmodule-helpers.js":"qayoQ"}],edwem:[function(e,r,t){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(t),o.export(t,"default",()=>l);let n=["img","area","base","br","col","embed","hr","input","link","meta","param","source","track","wbr","a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","html","i","iframe","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","slot","small","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","u","ul","video","fragment"],a=(...e)=>{let r=[],t={};for(let o=0;o<e.length;o++)"object"==typeof e[o]?t={...t,...e[o]}:"string"==typeof e[o]?r.push(e[o]):e[o].name&&r.push(`${e[o]}`);return{content:r.join(""),attributes:Object.keys(t).map(e=>"function"==typeof t[e]?` ${e}="(${t[e]})()"`:` ${e}="${t[e]}"`).join("")}};var l=n.reduce((e,r)=>{let t=n.indexOf(r)>13?`</${r}>`:"";return e[r]=(...e)=>{let{content:o,attributes:n}=a(...e);return"fragment"==r?o:`<${r}${n}>${o}${t}`},e},{})},{"@parcel/transformer-js/src/esmodule-helpers.js":"qayoQ"}],qayoQ:[function(e,r,t){t.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},t.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.exportAll=function(e,r){return Object.keys(e).forEach(function(t){"default"===t||"__esModule"===t||Object.prototype.hasOwnProperty.call(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:function(){return e[t]}})}),r},t.export=function(e,r,t){Object.defineProperty(e,r,{enumerable:!0,get:t})}},{}],"5b5AI":[function(e,r,t){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(t),t.default=(e,...r)=>{for(var t,o=document.createNodeIterator(document.documentElement,NodeFilter.SHOW_COMMENT);t=o.nextNode();)if(!t.nodeValue.indexOf(e))for(;t.nextSibling;){if(t.nextSibling.nodeType===Node.COMMENT_NODE&&!t.nextSibling.nodeValue.indexOf(`/${e}`)){let e=document.createElement("i");t.after(e),e.outerHTML=r.join(""),window.preloader?.refreshLinkObserver();return}t.nextSibling.remove()}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"qayoQ"}],aBxmv:[function(e,r,t){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(t),o.export(t,"pageHeader",()=>l),o.export(t,"pageFooter",()=>s);var n=e("html-in-javascript"),a=o.interopDefault(n);let l=async()=>{let{header:e,nav:r,a:t}=a.default;return e({class:"main-header"},r(t({href:"/spa"},"Home")," | ",t({href:"/spa/foo"},"Foo")," | ",t({href:"/spa/bar"},"Bar")," | ",t({href:"/spa/baz"},"Baz")," | ",t({href:"/spa/buf"},"Buf")," | ",t({class:"hidden",href:"/spa/xyz"},"404")," | ",t({href:"https://google.com"},"google.com")," | ",t("no href")))},s=async()=>{let{footer:e,p:r}=a.default;return e({class:"main-footer"},r("This is the footer"))}},{"html-in-javascript":"edwem","@parcel/transformer-js/src/esmodule-helpers.js":"qayoQ"}],dgcDk:[function(e,r,t){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(t);var n=e("html-in-javascript"),a=o.interopDefault(n),l=e("../utils/uniqueId.js"),s=o.interopDefault(l);t.default=({url:e="/js/missing-content.js",id:r=(0,s.default)()}={},...t)=>{let{fragment:o,button:n,div:l,span:i}=a.default;return o(n({"data-formodal":r,onclick:`import('${e}').then(_ => _.default(this))`},i(...t)),l({class:"modal-outer",id:r}))}},{"html-in-javascript":"edwem","../utils/uniqueId.js":"7LD6G","@parcel/transformer-js/src/esmodule-helpers.js":"qayoQ"}],"7LD6G":[function(e,r,t){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(t);let o=({prefix:e="i",length:r=7}={})=>(e+=Math.random().toString(36).substring(2)).length<r?o({prefix:e,length:r}):e.slice(0,7);t.default=o},{"@parcel/transformer-js/src/esmodule-helpers.js":"qayoQ"}],"8xBEy":[function(e,r,t){var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(t);var n=e("html-in-javascript");let{fragment:a,section:l}=o.interopDefault(n).default;t.default=({classes:e="fullscreen-hero"}={},...r)=>a(l({class:e},...r))},{"html-in-javascript":"edwem","@parcel/transformer-js/src/esmodule-helpers.js":"qayoQ"}]},["eqaat"],"eqaat","parcelRequire45f0");
//# sourceMappingURL=index.js.map
