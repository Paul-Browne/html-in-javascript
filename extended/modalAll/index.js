import htjs from 'html-in-javascript'
import uid from '../utils/uniqueId.js'

export default ({
    id = uid(),
    openText = 'Open Modal',
} = {}, ...content) => {
    const { fragment, div, button } = htjs
    return fragment(
        button({
            onclick: `${id}.dataset.visible = true`
        }, openText),
        div(
            {
                id,
                class: 'modal',
                'data-visible': false,
            },
            button({
                class: 'close',
                onclick: `${id}.dataset.visible = false`
            }, 'X'),
            ...content
        )
    )
}