import htjs from "html-in-javascript"

const { fragment, section } = htjs

export default ({
    classes = "fullscreen-hero",
} = {}, ...content) => {
    return fragment(
        section({
            class: classes
        }, ...content)
    )
}