export default (key, ...content) => {
    var iterator = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_COMMENT);
    var curNode;
    while (curNode = iterator.nextNode()) {
        if(!curNode.nodeValue.indexOf(key)){
            while(curNode.nextSibling){
                if(curNode.nextSibling.nodeType === Node.COMMENT_NODE && !curNode.nextSibling.nodeValue.indexOf(`/${key}`)){
                    const temp = document.createElement('i')    // doesn't matter what element
                    curNode.after(temp)
                    temp.outerHTML = content.join('');
                    return
                }
                curNode.nextSibling.remove()
            }
        }     
    }
}