import htjs from 'html-in-javascript'

// import attachEscapeKeyListener from './escapeClosesModal.js'
// attachEscapeKeyListener()

export default (...content) => {
    const { div, button } = htjs
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