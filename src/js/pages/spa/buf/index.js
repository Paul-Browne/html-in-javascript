import htjs from 'html-in-javascript'
import updateZones from '../../../updateZones.js'
import { pageHeader, pageFooter } from '../../../headerFooter.js'

// import modal from "../../../../../extended/modalContent/index.js";
// import modal from "../../../../../extended/modalAll/index.js";

import modal from "../../../../../extended/modalTrigger/index.js";
import fullViewportHero from '../../../../../extended/fullScreenHero/browser.js';

export default async ({ state, pageView }) => {
    const { fragment, p, h1, title, a } = htjs
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