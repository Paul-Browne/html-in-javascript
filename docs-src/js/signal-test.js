import { fragment, p, h1, button, script } from "javascript-to-html"
// import signal from "../../signal.js"
// const count = signal(0)

import signalTestClient from "./signal-test-client.js"

// import SPAComponentLoader from "./spaComponentLoader.js"

export default () => fragment(
    h1('life is good'),
    p("some dummy content"),
    // button({
    //     onclick: `import('/js/signal-test-client.js').then(M => M.default(this))`
    // }, `click me`),

    // frontend SPA style component
    // script({
    //     type: 'module',
    //     src: '/js/signal-test-client.js'
    // })

    // SPAComponentLoader('/js/signal-test-client.js')

    signalTestClient()

)