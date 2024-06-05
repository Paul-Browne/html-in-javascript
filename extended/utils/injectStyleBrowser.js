export default ({ cssString = null, cssUrl = null }) => {
    if(cssString){
        // if cssString already exists in the head, don't add it again
        const existingStyle = document.head.querySelectorAll('style');
        for(let style of existingStyle){
            if(style.textContent === cssString) return "";
        }
        const style = document.createElement('style');
        style.textContent = cssString;
        document.head.appendChild(style);
    }
    if(cssUrl){
        // if cssUrl already exists in the head, don't add it again
        const existingLink = document.head.querySelectorAll('link');
        for(let link of existingLink){
            if(link.getAttribute('href') === cssUrl) return "";
        }
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.setAttribute('href', cssUrl);
        document.head.appendChild(link);
    }
}