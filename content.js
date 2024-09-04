import { fragment, p, h1, title, a } from 'html-in-javascript'
import updateZones from './src/js/updateZones.js'
import { pageHeader, pageFooter } from './src/js/headerFooter.js'

// import modal from "../../../../../extended/modalContent/index.js";
// import modal from "../../../../../extended/modalAll/index.js";

import modal from "./extended/modalTrigger/index.js";
import fullViewportHero from './extended/fullScreenHero/browser.js';

export const qweqweqweqwewq = (q,w,e) => {
    const testing = fullViewportHero({}, "hello full screen!")
    const newer = testing.replace("hello", "goodbye")
    console.log(newer)
}

export const eeee = (q,w,e) => {
    const testing = fullViewportHero({}, "hello full screen!")
    const newer = testing.replace("hello", "goodbye")
    console.log(newer)
}

export const spa = async ({ state, pageView }) => {
    const body = fragment(
        await pageHeader(),
        h1("Hello World! Buf page!"),
        a({href:"/spa"}, "home"),
        p(state.foo),
        fullViewportHero({}, "hello full screen!"),
        fullViewportHero({}, "hello full again!"),
        modal({
            url: '/js/myModal.js'
        }, "Click me!!"),
        // modal({}, p('modal content')),
        await pageFooter()
    )

    updateZones('head', title('hi'));
    updateZones('body', body);

}