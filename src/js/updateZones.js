export default (key, content) => {
    var iterator = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_COMMENT);
    var curNode;
    while (curNode = iterator.nextNode()) {
        if(curNode.nodeValue.indexOf(`zone:${key}`) > -1){
            while(curNode.nextSibling){
                if(curNode.nextSibling.nodeType === Node.COMMENT_NODE && curNode.nextSibling.nodeValue.indexOf(`zone:${key}`) > -1){
                    const temp = document.createElement('i')    // doesn't matter what element
                    curNode.after(temp)
                    temp.outerHTML = content;
                    return
                }
                curNode.nextSibling.remove()
            }
        }     
    }
}