import { fragment, button, div } from "javascript-to-html"
import signal from "../../signal.js"
import store from "./store.js"

export const add = (el) => {
    // count.set(count.get() + 1)
    // console.log("add", count.get())
    // xyz[key].set(xyz[key].get() + 1)

    window[el.id]++
    el.textContent = `count: ${window[el.id]}`
    console.log("add", el, window[el.id])


}
export default () => {

    // const [ key ] = store()
    // xyz[key] = signal(0)
    // console.log("xyz", xyz)

    const [ key, storeHTML ] = store(0)

    return fragment(
        storeHTML,
        button({
            id: key,
            onclick: `import('/js/signal-test-client.js').then(M => M.add(this))`
        }, `count: 0`))
}

/*

const init = (el) => {

    console.log(el)

    const state = {
        count: signal(0),
        add: (el) => {
            init.count.set(init.count.get() + 1)
            el.textContent = `count: ${init.count.get()}`
        },
    }

    el.outerHTML = button({
        onclick: `import('/js/signal-test-client.js').then(M => M.default.state.add(this))`
    }, `count: ${state.count.get()}`)

    // el.state = state

}

export default init


// export const mount = (el) => {

//     const count = signal(0)

//     const add = () => {
//         count.set(count.get() + 1)
//         console.log("add", count.get())
//     }

//     el.outerHTML = button({
//         onclick: `import('/js/signal-test-client.js').then(M => M.add())`
//     }, `count: ${count.get()}`)
// }

*/