import { html, head as headEl, meta, body as bodyEl, fragment } from "html-in-javascript"

export default ({
    htmlAttributes = {
        lang: "en"
    },
    head = [],
    body = []
} = {}) => {
    if(!Array.isArray(head)) head = [head]
    if(!Array.isArray(body)) body = [body]

    return fragment(
        '<!DOCTYPE html>',
        html(htmlAttributes,
            headEl(
                meta({charset:"UTF-8"}),
                meta({name:"viewport", content:"width=device-width, initial-scale=1.0"}),
                ...head
            ),
            bodyEl(...body)
        )
    )   
}