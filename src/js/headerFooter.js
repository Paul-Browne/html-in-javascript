import htjs from 'html-in-javascript'

export const pageHeader = async () => {
    const { header, nav, a } = htjs
    return header(
        {class: 'main-header'},
        nav(
            a({href: '/spa'}, "Home"),
            " | ",
            a({href: '/spa/foo'}, "Foo"),
            " | ",
            a({href: '/spa/bar'}, "Bar"),
            " | ",
            a({href: '/spa/baz'}, "Baz"),
            " | ",
            a({href: '/spa/buf'}, "Buf"),
            " | ",            
            a({class:'hidden', href: '/spa/xyz'}, "404"),
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