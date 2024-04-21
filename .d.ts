type Singletons = "img" | "area" | "base" | "br" | "col" | "embed" | "hr" | "input" | "link" | "meta" | "param" | "source" | "track" | "wbr"
type DomElements = "a" | "abbr" | "address" | "article" | "aside" | "audio" | "b" | "bdi" | "bdo" | "blockquote" | "body" | "button" | "canvas" | "caption" | "cite" | "code" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "html" | "i" | "iframe" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "menu" | "meter" | "nav" | "noscript" | "object" | "ol" | "optgroup" | "option" | "output" | "p" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "small" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "fragment"

type Attributes = {
    [key: string]: any
}

type Htjs = {
    [key in Singletons]: (...args: Attributes[]) => HTMLElement
    [key in DomElements]: (...args: any[]) => HTMLElement
}

declare const htjs: Htjs