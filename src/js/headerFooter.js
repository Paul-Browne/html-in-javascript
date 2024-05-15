export const pageHeader = async () => {
    const { header, nav, a } = (await import('./ht.js')).default;
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
            a({href: '/spa/xyz'}, "404"),
            " | ",
            a({href: 'https://google.com'}, "google.com"),            
            " | ",
            a("no href"),
        )
    )
}

export const pageFooter = async () => {
    const { footer, p } = (await import('./ht.js')).default;
    return footer(
        {class: 'main-footer'},
        p("This is the footer")
    )
}