import htjs from "html-in-javascript"

const { html, head:headEl, meta, body:bodyEl, fragment } = htjs;

export default ({
    htmlAttributes = {
        lang: "en"
    },
    head = ""
} = {}, ...body) => fragment(
    '<!DOCTYPE html>',
    html(htmlAttributes,
        headEl(
            meta({charset:"UTF-8"}),
            meta({name:"viewport", content:"width=device-width, initial-scale=1.0"}),
            head
        ),
        bodyEl(...body)
    )
)
