import htjs from 'html-in-javascript'
import uid from '../utils/uniqueId.js'

export default ({
    id = uid(),
    classes = 'modal',
} = {}, ...content) => {
    const { div } = htjs
    return div({
        id, 
        class: classes,
        'data-visible': false,
        onclick: `import('/js/modal.js').then(_ => _.default(this))`
    },
    ...content)
}