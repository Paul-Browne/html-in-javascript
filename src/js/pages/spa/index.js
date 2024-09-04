import { fragment, h1, title, p } from 'html-in-javascript'
import { pageHeader, pageFooter } from '../../headerFooter.js'
import updateZones from '../../updateZones.js'

export default async ({ state, pageView }) => {

    const body = fragment(
        await pageHeader(),
        h1("Hello World! Home page!"),
        p(state.foo),
        await pageFooter()
    )
    updateZones('head', title("Home page | SPA"));
    updateZones('body', body);
}
