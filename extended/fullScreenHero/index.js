import { fragment, section } from "html-in-javascript"
// import { inlineStyle, linkStylesheet } from "../utils/stylify.js"
// const inline = inlineStyle("extended/fullScreenHero/style.css")

export default ({
    classes = "fullscreen-hero",
} = {}, ...content) => {
    return fragment(
        // inlineStyle("extended/fullScreenHero/style.css"),
        // linkStylesheet("extended/fullScreenHero/style.css", "fullScreenHero.css"),
        section({
            class: classes
        }, ...content)
    )
}