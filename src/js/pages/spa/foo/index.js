import htjs from 'html-in-javascript'
import { pageHeader, pageFooter } from '../../../headerFooter.js'
import updateZones from '../../../updateZones.js'

export default async ({ state, pageView }) => {

    const { fragment, h1, title, p } = htjs;

    const body = fragment(
        await pageHeader(),
        h1("Hello World! Foo page!"),
        p(state.foo),
        await pageFooter()
    )
    
    updateZones('head', title("Foo | SPA"));
    updateZones('body', body);


}