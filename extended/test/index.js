import htjs from 'html-in-javascript'

export default text => {
    const { h1 } = htjs
    return h1({class:'mega'}, text)
}