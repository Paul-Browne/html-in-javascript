import { fragment, p, h1 } from "javascript-to-html"

export default ({color}) => fragment(
    h1('life is good'),
    p({
        style: `font-size: 20px; color: ${color};`
    }, "hello world")
)