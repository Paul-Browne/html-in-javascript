import htjs from 'html-in-javascript'
import { pageHeader, pageFooter } from '../../../../headerFooter.js'
import updateZones from '../../../../updateZones.js'
import { LOG }  from '../../../../test.js'

export default async ({ state, pageView }) => {

    const { fragment, h1, title, p, img } = htjs;

    const body = fragment(
        await pageHeader(),
        h1("Hello World! Bar page!"),
        img({src: 'https://via.placeholder.com/500x500', loading:'lazy'}),
        img({src: 'https://via.placeholder.com/140x500'}),
        img({src: 'https://via.placeholder.com/500x500'}),
        img({src: 'https://via.placeholder.com/500x250'}),
        img({src: 'https://via.placeholder.com/500x280'}),
        img({src: 'https://via.placeholder.com/500x500'}),
        p(state.foo),
        await pageFooter()
    );
    
    updateZones('head', title("Bar | SPA"));
    updateZones('body', body);
    
    if(pageView){
        LOG('hello', 'world', 44);
    }

}