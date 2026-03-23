import {  button, span, fragment } from "javascript-to-html"
import { key, store } from "./store.js"

export const update = (el, key, plusMinus) => {
    // client side rendering
    store[key] = (store[key] || 0) + plusMinus
    el.textContent = `count: ${store[key]}`
}

const importPath = (id, key, plusMinus) => `import('/js/signal-test-client.js').then(M => M.update(${id}, '${key}', ${plusMinus}))`

export default () => {
    // server side rendering
    const k = key()
    const value = store[k] || 0
    const id = btoa(Math.random().toString(32).slice(2)).slice(0,7)
    
    return fragment(
        button({
            onclick: importPath(id, k, -1)
        }, `minus`),
        span({id}, `count: ${value}`),
        button({
            onclick: importPath(id, k, 1)
        }, `plus`)                
    )
}







// const render = value => button({
//     onclick: `import('/js/signal-test-client.js').then(M => M.update(this, ${value}))`
// }, `count: ${value}`)

// export const update = (el, value) => {
//     // client side rendering
//     el.outerHTML = render(value + 1)
// }

// export default () => {
//     // server side rendering
//     return render(0)
// }