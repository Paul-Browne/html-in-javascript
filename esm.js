import $aOo5T$htmlinjavascript from "html-in-javascript";



const $e7a6d324cd1bd89c$var$uid = ({ prefix: prefix = "i", length: length = 7 } = {})=>{
    prefix += Math.random().toString(36).substring(2);
    if (prefix.length < length) return $e7a6d324cd1bd89c$var$uid({
        prefix: prefix,
        length: length
    });
    return prefix.slice(0, 7);
};
var $e7a6d324cd1bd89c$export$2e2bcd8739ae039 = $e7a6d324cd1bd89c$var$uid;


var $5fb134bd84fd53e3$export$2e2bcd8739ae039 = ({ url: url = "/js/missing-content.js", id: id = (0, $e7a6d324cd1bd89c$export$2e2bcd8739ae039)() } = {}, ...content)=>{
    const { fragment: fragment, button: button, div: div, span: span } = (0, $aOo5T$htmlinjavascript);
    return fragment(button({
        "data-formodal": id,
        onclick: `import('${url}').then(_ => _.default(this))`
    }, span(...content)), div({
        class: "modal-outer",
        id: id
    }));
};




var $b2a0b448e52c1681$export$2e2bcd8739ae039 = ({ cssString: cssString = null, cssUrl: cssUrl = null })=>{
    if (cssString) {
        // if cssString already exists in the head, don't add it again
        const existingStyle = document.head.querySelectorAll("style");
        for (let style of existingStyle){
            if (style.textContent === cssString) return "";
        }
        const style = document.createElement("style");
        style.textContent = cssString;
        document.head.appendChild(style);
    }
    if (cssUrl) {
        // if cssUrl already exists in the head, don't add it again
        const existingLink = document.head.querySelectorAll("link");
        for (let link of existingLink){
            if (link.getAttribute("href") === cssUrl) return "";
        }
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.setAttribute("href", cssUrl);
        document.head.appendChild(link);
    }
};



const { style: $4bb8da1301205064$var$style, link: $4bb8da1301205064$var$link } = (0, $aOo5T$htmlinjavascript);
const $4bb8da1301205064$var$qwe = ({ cssString: cssString = null, cssUrl: cssUrl = null })=>{
    if ($4bb8da1301205064$var$qwe[cssString || cssUrl]) return "";
    if (cssString) {
        $4bb8da1301205064$var$qwe[cssString] = true;
        return $4bb8da1301205064$var$style(cssString);
    }
    if (cssUrl) {
        $4bb8da1301205064$var$qwe[cssUrl] = true;
        return $4bb8da1301205064$var$link({
            rel: "stylesheet",
            href: cssUrl
        });
    }
};
var $4bb8da1301205064$export$2e2bcd8739ae039 = $4bb8da1301205064$var$qwe;


var $2deccb166713a0a7$export$2e2bcd8739ae039 = ({ cssString: cssString = null, cssUrl: cssUrl = null } = {})=>{
    if (!cssString && !cssUrl) return "";
    if (typeof window == "object") (0, $b2a0b448e52c1681$export$2e2bcd8739ae039)({
        cssString: cssString,
        cssUrl: cssUrl
    });
    else return (0, $4bb8da1301205064$export$2e2bcd8739ae039)({
        cssString: cssString,
        cssUrl: cssUrl
    });
    return "";
};


const { fragment: $2a2f17f2960bb255$var$fragment, section: $2a2f17f2960bb255$var$section, link: $2a2f17f2960bb255$var$link, style: $2a2f17f2960bb255$var$style, script: $2a2f17f2960bb255$var$script } = (0, $aOo5T$htmlinjavascript);
var $2a2f17f2960bb255$export$2e2bcd8739ae039 = ({ classes: classes = "fullscreen-hero" } = {}, ...content)=>{
    const e = (0, $2deccb166713a0a7$export$2e2bcd8739ae039)({
        cssString: `.fullscreen-hero {
            width: 100%;
            height: 100vh;
        }`
    });
    return $2a2f17f2960bb255$var$fragment(e, $2a2f17f2960bb255$var$section({
        class: classes
    }, ...content));
};


const { fragment: $02a1f9fc93df610d$var$fragment } = (0, $aOo5T$htmlinjavascript);
var $02a1f9fc93df610d$export$2e2bcd8739ae039 = ()=>$02a1f9fc93df610d$var$fragment((0, $2a2f17f2960bb255$export$2e2bcd8739ae039)({}, "hello Test NEST!!! screen!!"), (0, $2a2f17f2960bb255$export$2e2bcd8739ae039)({}, "hello Test NEST!!! 2!!"), (0, $2a2f17f2960bb255$export$2e2bcd8739ae039)({}, "hello Test NEST!!! 3!!"));


const { html: $2d8963abcf9c8766$var$html, head: $2d8963abcf9c8766$var$head, meta: $2d8963abcf9c8766$var$meta, link: $2d8963abcf9c8766$var$link, script: $2d8963abcf9c8766$var$script, title: $2d8963abcf9c8766$var$title, body: $2d8963abcf9c8766$var$body, h1: $2d8963abcf9c8766$var$h1, pre: $2d8963abcf9c8766$var$pre, code: $2d8963abcf9c8766$var$code, fragment: $2d8963abcf9c8766$var$fragment, br: $2d8963abcf9c8766$var$br, p: $2d8963abcf9c8766$var$p, style: $2d8963abcf9c8766$var$style } = (0, $aOo5T$htmlinjavascript);
var $2d8963abcf9c8766$export$2e2bcd8739ae039 = $2d8963abcf9c8766$var$fragment("<!DOCTYPE html>", $2d8963abcf9c8766$var$html({
    lang: "en"
}, $2d8963abcf9c8766$var$head($2d8963abcf9c8766$var$meta({
    charset: "UTF-8"
}), $2d8963abcf9c8766$var$meta({
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
}), $2d8963abcf9c8766$var$title("Single Page App | HT.JS"), $2d8963abcf9c8766$var$meta({
    name: "description",
    content: "Using HT.JS to create a Single Page Application with Routing"
}), $2d8963abcf9c8766$var$link({
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png"
}), $2d8963abcf9c8766$var$link({
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
}), $2d8963abcf9c8766$var$link({
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
}), $2d8963abcf9c8766$var$link({
    rel: "manifest",
    href: "/site.webmanifest"
}), $2d8963abcf9c8766$var$link({
    rel: "mask-icon",
    href: "/safari-pinned-tab.svg",
    color: "#5bbad5"
}), $2d8963abcf9c8766$var$meta({
    name: "msapplication-TileColor",
    content: "#2d89ef"
}), $2d8963abcf9c8766$var$style(".body{margin:0;}"), $2d8963abcf9c8766$var$style(".body{margin:0;}"), $2d8963abcf9c8766$var$style(".body{margin:0;}"), $2d8963abcf9c8766$var$style(".body{margin:0;}"), $2d8963abcf9c8766$var$meta({
    name: "theme-color",
    content: "#ffff00"
}), $2d8963abcf9c8766$var$link({
    rel: "stylesheet",
    href: "/css/style.css"
})), $2d8963abcf9c8766$var$body($2d8963abcf9c8766$var$h1({
    class: "big-text"
}, "Single Page App | HT.JS"), // modal({}, code('watt tup 1!')),
// modal({}, code('watt tup 2!')),
// modal({}, code('watt tup 3!'))
(0, $5fb134bd84fd53e3$export$2e2bcd8739ae039)({
    url: "/js/myModal.js"
}, "Click me!!"))));


export {$2d8963abcf9c8766$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=esm.js.map
