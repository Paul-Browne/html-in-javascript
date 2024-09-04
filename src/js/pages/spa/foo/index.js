import { fragment, h1, title, p, a }  from 'html-in-javascript'
import { pageHeader, pageFooter } from '../../../headerFooter.js'
import updateZones from '../../../updateZones.js'

export default async ({ state, pageView }) => {

    const body = fragment(
        await pageHeader(),
        h1("Hello World! Foo page!"),
        p(state.foo),
        a({href: '/spa/foo/bar'}, 'spa/foo/bar'),
        await pageFooter()
    )
    
    updateZones('head', title("Foo | SPA"));
    updateZones('body', body);


}