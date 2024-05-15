export default async ({state}) => {
    const { default: updateZones } = await import('../../../updateZones.js');
    const { pageHeader, pageFooter } = await import('../../../headerFooter.js');
    const { default: { fragment, h1, title, p } } = await import('../../../ht.js');

    const body = fragment(
        await pageHeader(),
        h1("Hello World! Bar page!"),
        p(state.foo),
        await pageFooter()
    )
    
    updateZones('head', title("Bar | SPA"));
    updateZones('body', body);
}