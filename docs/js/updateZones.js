var r=(t,o)=>{for(var i=document.createNodeIterator(document.documentElement,NodeFilter.SHOW_COMMENT),e;e=i.nextNode();)if(e.nodeValue.indexOf(`zone:${t}`)>-1)for(;e.nextSibling;){if(e.nextSibling.nodeType===Node.COMMENT_NODE&&e.nextSibling.nodeValue.indexOf(`zone:${t}`)>-1){let n=document.createElement("i");e.after(n),n.outerHTML=o;return}e.nextSibling.remove()}};export{r as default};
//# sourceMappingURL=updateZones.js.map