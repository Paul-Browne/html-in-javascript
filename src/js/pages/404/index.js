import { fragment, h1, title } from 'html-in-javascript'
import { pageHeader, pageFooter } from '../../headerFooter.js'
import updateZones from '../../updateZones.js'

export default async ({ state, pageView }) => {
    const body = fragment(
        await pageHeader(),
        h1("404 page not found"),
        await pageFooter()
    )
    
    updateZones('head', title("404 | SPA"));
    updateZones('body', body);
}