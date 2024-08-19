import htjs from 'html-in-javascript'
import { pageHeader, pageFooter } from '../../../../headerFooter.js'
import html5 from '../../../../../../extended/html5/index.js'

const { fragment, h1, title } = htjs;

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