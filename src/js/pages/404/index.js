export default async () => {
    const { default: updateZones } = await import('../../updateZones.js');
    const { pageHeader, pageFooter } = await import('../../headerFooter.js');
    const { default: { fragment, h1, title, p } } = await import('../../ht.js');

    const body = fragment(
        await pageHeader(),
        h1("404 page not found"),
        await pageFooter()
    )
    
    updateZones('head', title("404 | SPA"));
    updateZones('body', body);
}