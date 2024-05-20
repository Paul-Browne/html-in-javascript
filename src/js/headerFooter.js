import htjs from 'html-in-javascript'

export const pageHeader = async () => {
    const { header, nav, a, link } = htjs
    return header(
        {class: 'main-header'},
        nav(
            a({href: '/spa'}, "Home"),
            // link({ rel: 'prefetch', href:'/js/pages/spa/index.js' }),
            " | ",
            a({href: '/spa/foo'}, "Foo"),
            // link({ rel: 'prefetch', href:'/js/pages/spa/foo/index.js' }),
            " | ",
            a({href: '/spa/bar'}, "Bar"),
            // link({ rel: 'prefetch', href:'/js/pages/spa/bar/index.js' }),
            " | ",
            a({href: '/spa/baz'}, "Baz"),
            // link({ rel: 'prefetch', href:'/js/pages/spa/baz/index.js' }),
            " | ",
            a({class:'hidden', href: '/spa/xyz'}, "404"),
            // link({ rel: 'prefetch', href:'/js/pages/spa/xyz/index.js' }),
            " | ",
            a({href: 'https://google.com'}, "google.com"),            
            " | ",
            a("no href"),
        )
    )
}

export const pageFooter = async () => {
    const { footer, p } = htjs
    return footer(
        {class: 'main-footer'},
        p("This is the footer")
    )
}