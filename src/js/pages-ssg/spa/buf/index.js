import { fragment, h1, title } from 'html-in-javascript'
import { head, pageHeader, pageFooter } from '../../../headerFooter.js'
import html5 from '../../../../../extended/html5/index.js'
import modal from '../../../../../extended/modalTrigger/index.js';

export default async ({
    path, 
    lang = "en"
}) => {
    return html5({
        htmlAttributes: {
            lang
        },
        head: fragment(
            head,
            title(path)
        )
    },         
        await pageHeader(),
        h1("some page content etc etc etc"),
        modal({
            url: '/js/myModal.js'
        }, "Click me!!"),
        await pageFooter()
    )
}