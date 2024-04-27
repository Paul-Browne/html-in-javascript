import htjs from './index.js';

const { div, h1, p, a, img, ul, li, span, button, } = htjs;

const App =  
div({ class: 'container' },
    h1('Hello World'),
    p('This is a paragraph'),
    a({ href: 'https://google.com' }, 'Google'),
    img({ src: 'https://via.placeholder.com/150' }),
    ul(
        li('Item 1'),
        li('Item 2'),
        li('Item 3')
    ),
    span('This is a span'),
    button('Click me')
)

document.body.innerHTML = App;