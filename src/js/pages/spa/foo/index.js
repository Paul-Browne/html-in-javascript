export default async ({state}) => {
    const [ updateZonesImport, headerFooter, htjs ] = [
        '../../../updateZones.js', 
        '../../../headerFooter.js', 
        '../../../ht.js'
    ].map(importPath => import(importPath))

    const { default: updateZones } = await updateZonesImport;
    const { pageHeader, pageFooter } = await headerFooter;
    const { default: { fragment, h1, title, p } } = await htjs;

    const body = fragment(
        await pageHeader(),
        h1("Hello World! Foo page!"),
        p(state.foo),
        await pageFooter()
    )
    
    updateZones('head', title("Foo | SPA"));
    updateZones('body', body);


}