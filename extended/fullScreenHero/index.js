import { section } from "javascript-to-html"

export default (...content) => {
    content.forEach(element => {
        element.class = element.class || "full-screen-hero"
    })
    return section(content)
}