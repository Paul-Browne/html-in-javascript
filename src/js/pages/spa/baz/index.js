export default async ({state}) => {
    const [ updateZonesImport, headerFooter, htjs ] = [
        '../../../updateZones.js', 
        '../../../headerFooter.js', 
        '../../../ht.js'
    ].map(importPath => import(importPath))

    const { default: updateZones } = await updateZonesImport;
    const { pageHeader, pageFooter } = await headerFooter;
    const { default: { fragment, h1, title, p, a } } = await htjs;

    const body = fragment(
        await pageHeader(),
        h1("Hello World! Baz page!"),
        p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), p("This is the Baz page."), 
        a({href:"/spa"}, "home"),
        p(state.foo),
        await pageFooter()
    )
    
    updateZones('head', title("Baz | SPA"), );
    updateZones('body', body);


}