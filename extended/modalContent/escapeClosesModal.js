// close modal on escape key
const attachEscapeKeyListener = () => {
    if(attachEscapeKeyListener.ran) return
    attachEscapeKeyListener.ran = true
    document.addEventListener("keydown", e => {
        if(e.key === "Escape") {
            document.querySelectorAll('.modal').forEach(modal => {
                // doesn't have an open modal inside
                if(!modal.querySelector('.modal')){
                    modal.remove()
                }
            })
        }
    });
}

export default attachEscapeKeyListener