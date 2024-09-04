// contents of the modal
import { p, h1 } from 'html-in-javascript'

import modalContent from "../../extended/modalContent/index.js";
import modal from '../../extended/modalTrigger/index.js';

import fullViewportHero from '../../extended/fullViewportHero/index.js';

// run once
import attachEscapeKeyListener from '../../extended/modalContent/escapeClosesModal.js';
attachEscapeKeyListener()

export default async el => {
    document.getElementById(el.dataset.formodal).innerHTML = modalContent(
        h1("Hello World"),
        p("This is a modal"),
        fullViewportHero({}, "hello full ZzzZZZZzzZZzzZZ modal!"),
        modal({
            url: '/js/myModal.js'
        }, "Click me!!"),
    )
}
