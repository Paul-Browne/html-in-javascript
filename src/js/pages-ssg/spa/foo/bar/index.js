import { fragment, h1, title } from 'html-in-javascript'
import { pageHeader, pageFooter } from '../../../../headerFooter.js'
import html5 from '../../../../../../extended/html5/index.js'

export default async ({
    path, 
    lang = "en"
}) => {


    const body = fragment(
        await pageHeader(),
        h1("404 page not found"),
        await pageFooter()
    )

    return html5({
        htmlAttributes: {
            lang
        },
        head: title(path)
    }, body)

}