import { pageHeader, pageFooter } from '../../../headerFooter.js'
import updateZones from '../../../updateZones.js'

export default async ({ state, pageView }) => {

    const body = await pageHeader() + 'Hello' + await pageFooter()
    
    updateZones('head', '<title>some title</title>' );
    updateZones('body', body);

}