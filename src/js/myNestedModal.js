// contents of the modal
import { p, h1 } from 'html-in-javascript'
import modalContent from "../../extended/modalContent/index.js";

export default el => {
    document.getElementById(el.dataset.formodal).innerHTML = modalContent(
        h1("Hello again!"),
        p("This is a nested modal!!"),
        p("This is a nested modal!!"),
        p("This is a nested modal!!"),
        p("This is a nested modal!!"),
    )
}
