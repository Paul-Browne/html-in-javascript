import htjs from 'html-in-javascript'
import uid from '../utils/uniqueId.js'

export default ({
    url = "/js/missing-content.js",
    id = uid(),
} = {}, ...content) => {
    const { fragment, button, div, span } = htjs
    return fragment(
        button({
            'data-formodal': id,
            onclick: `import('${url}').then(_ => _.default(this))`
        },
        span(...content)),
        div({
            class: "modal-outer",
            id
        })
    )
}