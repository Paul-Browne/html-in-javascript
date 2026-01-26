import { div, button } from 'javascript-to-html'

// import attachEscapeKeyListener from './escapeClosesModal.js'
// attachEscapeKeyListener()

export default (...content) => {
    return div(
        {
            class: 'modal',
            'data-visible': true,
        },
        button({
            class: 'close',
            onclick: 'this.parentElement.remove()'
        }, 'X'),
        ...content
    )
}