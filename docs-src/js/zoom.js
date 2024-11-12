// needs to be redone...

export default el => {
    if(el.classList.contains("active")){
        el.classList.add("deactive")
        setTimeout(() => {
            el.classList.remove("deactive")
            el.style.removeProperty("left");
            el.style.removeProperty("top");
            el.style.removeProperty("width");
        }, 500)
    }else{
        const dims = el.getBoundingClientRect()
        el.style.left = dims.x + "px";
        el.style.top = dims.y + "px";
        el.style.width = dims.width + "px";
    }
    el.classList.toggle("active")
}