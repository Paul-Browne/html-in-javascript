export default async ({ state, pageView }) => {
    const [ updateZonesImport, headerFooter, htjs, test ] = [
        '../../../updateZones.js',  
        '../../../headerFooter.js', 
        '../../../ht.js',           
        '../../../test.js'          
    ].map(importPath => import(importPath))

    const { default: updateZones } = await updateZonesImport;
    const { pageHeader, pageFooter } = await headerFooter;
    const { default: { fragment, h1, title, p, img } } = await htjs;
    const { LOG } = await test

    const body = fragment(
        await pageHeader(),
        h1("Hello World! Bar page!"),
        img({src: 'https://via.placeholder.com/200x200', loading:'lazy'}),
        img({src: 'https://via.placeholder.com/140x200'}),
        img({src: 'https://via.placeholder.com/500x200'}),
        img({src: 'https://via.placeholder.com/200x250'}),
        img({src: 'https://via.placeholder.com/200x280'}),
        img({src: 'https://via.placeholder.com/100x100'}),
        p(state.foo),
        await pageFooter()
    );
    
    updateZones('head', title("Bar | SPA"));
    updateZones('body', body);
    
    if(pageView){
        LOG('hello', 'world', 44);
    }

}