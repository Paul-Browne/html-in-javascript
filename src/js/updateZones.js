export default (key, ...content) => {
    var iterator = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_COMMENT);
    var currentNode;
    while (currentNode = iterator.nextNode()) {
        if(!currentNode.nodeValue.indexOf(key)){
            while(currentNode.nextSibling){
                if(currentNode.nextSibling.nodeType === Node.COMMENT_NODE && !currentNode.nextSibling.nodeValue.indexOf(`/${key}`)){
                    const tempNode = document.createElement('i')    // doesn't matter what element
                    currentNode.after(tempNode)
                    tempNode.outerHTML = content.join('');
                    window.preloader?.refreshLinkObserver()
                    return
                }
                currentNode.nextSibling.remove()
            }
        }     
    }
}