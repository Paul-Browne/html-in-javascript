export default async ({state}) => {
    const { default: updateZones } = await import('../../updateZones.js');
    const { pageHeader, pageFooter } = await import('../../headerFooter.js');
    const { default: { fragment, h1, title, p } } = await import('../../index.js');

    const body = fragment(
        await pageHeader(),
        h1("Hello World! Baz page!"),
        p(state.foo),
        await pageFooter()
    )
    
    updateZones('head', title("Baz | SPA"));
    updateZones('body', body);
}