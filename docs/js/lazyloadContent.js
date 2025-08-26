import{a as o}from"./chunk-33X2KS2X.js";var n=e=>{let t=0;for(let r=0,a=e.length;r<a;r++){let i=e.charCodeAt(r);t=(t<<5)-t+i,t|=0}return t.toString(32)},l=(e,{dataId:t=n(e),...r}={})=>o({loading:"lazy",style:"opacity:0",src:`data:,${t}`,onerror:`import("${e}").then(_=>{this.outerHTML=_.default(${JSON.stringify(r)})})`});export{l as default};
//# sourceMappingURL=lazyloadContent.js.map
