export default async ({ state, pageView }) => {
    const [ updateZonesImport, headerFooter, htjs, test ] = [
        '../../updateZones.js', 
        '../../headerFooter.js', 
        '../../ht.js', 
    ].map(importPath => import(importPath))

    const { default: updateZones } = await updateZonesImport;
    const { pageHeader, pageFooter } = await headerFooter;
    const { default: { fragment, h1, title, p, img } } = await htjs;

    const body = fragment(
        await pageHeader(),
        h1("404 page not found"),
        await pageFooter()
    )
    
    updateZones('head', title("404 | SPA"));
    updateZones('body', body);
}