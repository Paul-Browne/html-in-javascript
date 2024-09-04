import { fragment, h1, title, p, a } from 'html-in-javascript'
// import { pageHeader, pageFooter } from '../../../headerFooter.js'
import updateZones from '../../../updateZones.js'

export default async ({ state, pageView }) => {

    const body = fragment(
        // await pageHeader(),
        h1("Hello World! Baz page!"),
        p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), 
        a({href:"/spa"}, "home"),
        p(state.foo),
        // await pageFooter()
    )
    
    updateZones('head', title("Baz | SPA") );
    updateZones('body', body);


}