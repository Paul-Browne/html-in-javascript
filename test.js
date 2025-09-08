import {div, span, a, img} from './esm.js';

const test = () => {
    return div({class: 'container'}, 
        span({
            class: 'text',
            onclick: `alert("Clicked!")`,
            disabled: false,
            age: 123
        }, 'Hello World'),
        a({href: '#'}, 'Click Me'),
        img({src: 'image.jpg', alt: 'An image'})
    );
}


console.log(test())