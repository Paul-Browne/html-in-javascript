// contents of the modal
import htjs from 'html-in-javascript'
import modalContent from "../../extended/modalContent/index.js";

export default el => {
    const { p, h1 } = htjs
    document.getElementById(el.dataset.formodal).innerHTML = modalContent(
        h1("Hello again!"),
        p("This is a nested modal!!"),
        p("This is a nested modal!!"),
        p("This is a nested modal!!"),
        p("This is a nested modal!!"),
    )
}
