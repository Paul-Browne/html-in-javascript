export const pageHeader = async () => {
    const { header, nav, a } = (await import('./index.js')).default;
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
        )
    )
}

export const pageFooter = async () => {
    const { footer, p } = (await import('./index.js')).default;
    return footer(
        {class: 'main-footer'},
        p("This is the footer")
    )
}