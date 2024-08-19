import htjs from 'html-in-javascript'

const { header, nav, a, footer, p, fragment, link, meta } = htjs

export const head = fragment(
    link({rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"}),
    link({rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"}),
    link({rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"}),
    link({rel:"manifest", href:"/site.webmanifest"}),
    link({rel:"mask-icon", href:"/safari-pinned-tab.svg", color:"#5bbad5"}),
    meta({name:"msapplication-TileColor", content:"#2d89ef"}),    
    meta({name:"theme-color", content:"#ffff00"}),        
    link({ rel: "stylesheet", href: "/css/style.css" })    
)

export const pageHeader = async () => {
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
    return footer(
        {class: 'main-footer'},
        p("This is the footer")
    )
}