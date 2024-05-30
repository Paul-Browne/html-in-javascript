// contents of the modal
import htjs from 'html-in-javascript'
import modalContent from "../../extended/modalContent/index.js";
import modal from '../../extended/modalTrigger/index.js';

// run once
import '../../extended/modalContent/escapeClosesModal2.js';
// import style from '../../extended/modalContent/modal.css';

export default el => {
    const { p, h1 } = htjs
    document.getElementById(el.dataset.formodal).innerHTML = modalContent(
        h1("Hello World"),
        p("This is a modal"),
        modal({
            url: '/js/myModal.js'
        }, "Click me!!"),
    )
}
