import { fragment, h1, title, p, img } from 'html-in-javascript'
import { pageHeader, pageFooter } from '../../../headerFooter.js'
import updateZones from '../../../updateZones.js'
import { LOG }  from '../../../test.js'

export default async ({ state, pageView }) => {

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