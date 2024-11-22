// frontend

// body({
//     onscroll: "import('/extended/scroll-hide/index.js').then(M => M.default())"
// })


const rootClassList = document.documentElement.classList;
const scrollHide = ({
    offset = 200,
    classTop = "top",
    classScroll = "scroll-hide"
} = {}) => {
    const currentY = window.scrollY;
    if(currentY > scrollHide.previousY){
        // scrolling down, hide the navigation
        if(currentY > offset){
            rootClassList.add(classScroll)
        }
    }else{
        // scrolling up, show the navigation
        rootClassList.remove(classScroll)            
    }
    if(currentY > 0){
        rootClassList.remove(classTop)
    }else{
        rootClassList.add(classTop)
    }        
    // previousY = currentY;
    scrollHide.previousY = currentY;
}

export default scrollHide;