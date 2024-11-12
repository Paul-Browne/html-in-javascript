import { section } from "html-in-javascript"

export default (...content) => {
    content.forEach(element => {
        element.class = element.class || "full-screen-hero"
    })
    return section(content)
}