// if(typeof document == 'object'){
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
// }else{
//     console.error('client side only')
// }