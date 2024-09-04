import { fragment, section } from "html-in-javascript"

export default ({
    classes = "fullscreen-hero",
} = {}, ...content) => {
    return fragment(
        section({
            class: classes
        }, ...content)
    )
}