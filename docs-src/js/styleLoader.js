export default (dataId, pathToCSS) => {
    if(document.getElementById(`style${dataId}`)) return;
    const link = document.createElement('link');
    link.id = `style${dataId}`;
    link.rel = 'stylesheet';
    link.href = pathToCSS;
    document.head.appendChild(link);
}
