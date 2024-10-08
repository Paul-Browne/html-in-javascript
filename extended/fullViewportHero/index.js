import { fragment, section, link, style, script } from "html-in-javascript"
// import injectStyle from "../utils/injectStyle.js"

export default ({
    classes = "fullscreen-hero",
} = {}, ...content) => {
    // const e = injectStyle({
    //     cssString: `.fullscreen-hero {
    //         width: 100%;
    //         height: 100vh;
    //     }`
    // })
    return fragment(
        // e,
        section({
            class: classes
        }, ...content)
    )
}