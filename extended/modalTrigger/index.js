import htjs from 'html-in-javascript'
import uid from '../utils/uniqueId.js'

export default ({
    url = "/js/missing-content.js",
    id = uid(),
} = {}, ...content) => {
    const { fragment, button, div } = htjs
    return fragment(
        button({
            'data-foo': 'bar',
            'data-formodal': id,
            onclick: `import('${url}').then(_ => _.default(this))`
        },
        ...content),
        div({id})
    )
}