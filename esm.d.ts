type Attributes = {
/**
    lang attribute
	@example
	```
    html({
        lang: 'en'
    });
	```
*/    
    lang?: string,    
/**
    id attribute
    @example
    ```
    div({
        id: "main-content"
    });
    ```
*/
    id?: string,
/**
    class attribute
    @example
    ```
    div({
        class: "main home-page"
    });
    ```
*/    
    class?: string,
/**
    style attribute
    @example
    ```
    div({
        style: "background: blue; color: red;"
    });
    ```
*/
    style?: string,
/**
    onclick attribute
    @example
    ```
    button({
        onclick: "import('/js/some-script.js').default(_ => _.default())"
    });
    ```
*/     
    onclick?: string,
/**
    onchange attribute
    @example
    ```
    input({
        type: "text",
        onchange: "import('/js/some-script.js').default(_ => _.default(this.value))"
    });
    ```
*/    
    onchange?: string, 
/**
    onload attribute
    @example
    ```
    img({
        src: "/images/image.jpg",
        alt: "Image description",
        onload: "import('/js/some-script.js').default(_ => _.default())"
    });
    ```
*/    
    onload?: string,  
/**
    onerror attribute
    @example
    ```
    img({
        src: "/images/image.jpg",
        alt: "Image description",
        onerror: "import('/js/some-script.js').default(_ => _.default())"
    });
    ```
*/    
    onerror?: string,  
/**
    onscroll attribute
    @example
    ```
    body({
        onscroll: "import('/js/some-script.js').default(_ => _.default())"
    });
    ```
*/    
    onscroll?: string,
/**
    src attribute
    @example
    ```
    script({
        src: "/js/script.js",
    });
    ```
*/    
    src?: string,
   /**
    srcset attribute
    @example
    ```
    img({
        srcset: "elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w",
        sizes: "(max-width: 600px) 480px, 800px",
        src: "elva-fairy-800w.jpg",
        alt: "Elva dressed as a fairy"
    });
    ```
*/    
    srcset?: string, 
   /**
    sizes attribute
    @example
    ```
    img({
        srcset: "elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w",
        sizes: "(max-width: 600px) 480px, 800px",
        src: "elva-fairy-800w.jpg",
        alt: "Elva dressed as a fairy"
    });
    ```
*/    
    sizes?: string,     
/**
    href attribute
    @example
    ```
    a({
        href: "/path/to/page",
        target: "_blank"
    }, "Link to page");
    ```
*/    
    href?: string,
/**
    target attribute
    @example
    ```
    a({
        href: "/path/to/page",
        target: "_blank"
    }, "Link to page");
    ```
*/    
    target?: string,
/**
    content attribute
    @example
    ```
    meta({
        name: "description",
        content: "This is a description"
    });
    ```
*/    
    content?: string,   
/**
    name attribute
    @example
    ```
    input({
        type: "text",
        name: "username"
        for: "username"
    });
    ```
*/    
    name?: string,  
/**
    type attribute
    @example
    ```
    input({
        type: "text",
        name: "username"
        for: "username"
    });
    ```
*/    
    type?: string,  
/**
    for attribute
    @example
    ```
    input({
        type: "text",
        name: "username"
        for: "username"
    });
    ```
*/    
    for?: string,
/**
    alt attribute
    @example
    ```
    img({
        src: "/images/image.jpg",
        loading: "lazy",
        alt: "Image description",
    });
    ```
*/
    alt?: string,
/**
    loading attribute
    @example
    ```
    img({
        src: "/images/image.jpg",
        loading: "lazy",
        alt: "Image description",
    });
    ```
*/
    loading?: string,   
/**
    rel attribute
    @example
    ```
    link({
        rel: "stylesheet",
        href: "/css/styles.css"
    });
    ```
*/
    rel?: string,
/**
    width attribute
    @example
    ```
    canvas({
        width: "200",
        height: "100"
    });
    ```
*/
    width?: string,    
/**
    height attribute
    @example
    ```
    canvas({
        width: "200",
        height: "100"
    });
    ```
*/
    height?: string,    
/**
    charset attribute
    @example
    ```
    meta({
        charset: "UTF-8"
    });
    ```
*/
    charset?: string,   
/**
    disabled attribute
    @example
    ```
    button({
        type: "submit",
        disabled: true
    });
    ```
*/
    disabled?: boolean,
/**
    checked attribute
    @example
    ```
    input({
        type: "checkbox",
        checked: true
    });
    ```
*/
    checked?: boolean,
/**
    crossorigin attribute
    @example
    ```
    script({
        src: "/js/script.js",
        crossorigin: "anonymous"
        async: "true"
    });
    ```
*/
    crossorigin?: string,   
/**
    async attribute
    @example
    ```
    script({
        src: "/js/script.js",
        crossorigin: "anonymous"
        async: true
    });
    ```
*/
    async?: boolean,
/**
    defer attribute
    @example
    ```
    script({
        src: "/js/script.js",
        crossorigin: "anonymous"
        defer: true
    });
    ```
*/
    defer?: boolean,
/**
    value attribute
    @example
    ```
    input({
        type: "text",
        value: "Enter your name"
    });
    ```
*/
    value?: string,    
/**
    as attribute
    @example
    ```
    link({
        rel: "preload",
        as: "image",
        href: "/images/image.jpg"
    });
    ```
*/
    as?: string,
/**
    placeholder attribute
    @example
    ```
    input({
        type: "text",
        placeholder: "Enter your name"
    });
    ```
*/
    placeholder?: string,  
/**
    span attribute
    @example
    ```
    col({
        span: "2"
    });
    ```
*/
    span?: string, 
    [key: string]: string | boolean | undefined
};

/**
    `<img>` element.
    @example
    ```
    img({
        src: "/images/image.jpg",
        alt: "Image description"
    });
    ```
    @returns {string} Returns a string.
    ```
    <img src="/images/image.jpg" alt="Image description">
    ```      
*/ 
export function img(args?:Attributes): string;
/**
    `<area>` element.
    @example
    ```
    area({
        href: "/right",
        shape: "circle",
        coords: "290,172,200",
        alt: "Right"
    })
    ```
    @returns {string} Returns a string.
    ```
    <area href="/right" shape="circle" coords="290,172,200" alt="Right">
    ```      
*/ 
export function area(args?:Attributes): string;
/**
    `<base>` element.
    @example
    ```
    base({
        href="https://www.example.com/"
    });
    ```
    @returns {string} Returns a string.
    ```
    <base href="https://www.example.com/">
    ```      
*/ 
export function base(args?:Attributes): string;
/**
    `<br>` element.
    @example
    ```
    br();
    ```
    @returns {string} Returns a string.
    ```
    <br>
    ```      
*/ 
export function br(args?:Attributes): string;
/**
    `<col>` element.
    @example
    ```
    col({
        span: "2"
    });
    ```
    @returns {string} Returns a string.
    ```
    <col span="2">
    ```      
*/ 
export function col(args?:Attributes): string;
/**
    `<embed>` element.
    @example
    ```
    embed({
        src: "/images/video.mp4",
        type: "video/mp4"
    });
    ```
    @returns {string} Returns a string.
    ```
    <embed src="/images/video.mp4" type="video/mp4">
    ```      
*/ 
export function embed(args?:Attributes): string;
/**
    `<hr>` element.
    @example
    ```
    hr();
    ```
    @returns {string} Returns a string.
    ```
    <hr>
    ```    
*/ 
export function hr(args?:Attributes): string;
/**
    `<input>` element.
    @example
    ```
    input({
        type: "text",
        name: "username"
        for: "username"
    });
    ```
    @returns {string} Returns a string.
    ```
    <input type="text" name="username" for="username">
    ```      
*/ 
export function input(args?:Attributes): string;
/**
    `<link>` element.
    @example
    ```
    link({
        rel: "stylesheet",
        href: "/css/styles.css"
    });
    ```
    @returns {string} Returns a string.
    ```
    <link rel="stylesheet" href="/css/styles.css">
    ```      
*/
export function link(args?:Attributes): string;
/**
    `<meta>` element.
    @example
    ```
    meta({
        charset: "UTF-8"
    });
    meta({
        name: "description",
        content: "This is a description"
    });
    meta({
        property: "og:title",
        content: "about page | example.com"
    })
    ```        
    @returns {string} Returns a string.
    ```
    <meta charset="UTF-8">
    <meta name="description" content="This is a description">
    <meta property="og:title" content="about page | example.com">
    ```
*/ 
export function meta(args?:Attributes): string;
/**
    `<param>` element.
    @example
    ```
    param({
        name: "autoplay",
        value: "true"
    });
    ```
    @returns {string} Returns a string.
    ```
    <param name="autoplay" value="true">
    ```      
*/
export function param(args?:Attributes): string;
/**
    `<source>` element.
    @example
    ```
    source({
        src: "/images/video.mp4",
        type: "video/mp4"
    });
    ```
    @returns {string} Returns a string.
    ```
    <source src="/images/video.mp4" type="video/mp4">
    ```      
*/
export function source(args?:Attributes): string;
/**
    `<track>` element.
    @example
    ```
    track({
        src: "/images/video.mp4",
        kind: "captions",
        srclang: "en",
        label: "English"
    });
    ```
    @returns {string} Returns a string.
    ```
    <track src="/images/video.mp4" kind="captions" srclang="en" label="English">
    ```      
*/
export function track(args?:Attributes): string;
/**
    `<wbr>` element.
    @example
    ```
    wbr();
    ```
    @returns {string} Returns a string.
    ```
    <wbr>
    ```      
*/
export function wbr(args?:Attributes): string;
/**
    `<a>` element.
    @example
    ```
    a({
        href: "/path/to/page",
        target: "_blank"
    }, "Link to page");
    ```
    @returns {string} Returns a string.
    ```
    <a href="/path/to/page" target="_blank">Link to page</a>
    ```      
*/
export function a(args?:Attributes|string): string;
/**
    `<abbr>` element.
    @example
    ```
    abbr({
        title: "Hypertext Markup Language"
    }, "HTML");
    ```
    @returns {string} Returns a string.
    ```
    <abbr title="Hypertext Markup Language">HTML</abbr>
    ```      
*/
export function abbr(args?:Attributes|string): string;
/**
    `<address>` element.
    @example
    ```
    address({
        class: "contact"
    }, "123 Main Street");
    ```
    @returns {string} Returns a string.
    ```
    <address class="contact">123 Main Street</address>
    ```      
*/
export function address(args?:Attributes|string): string;
/**
    `<article>` element.
    @example
    ```
    article({
        class: "post"
    }, "This is a post");
    ```
    @returns {string} Returns a string.
    ```
    <article class="post">This is a post</article>
    ```      
*/
export function article(args?:Attributes|string): string;
/**
    `<aside>` element.
    @example
    ```
    aside({
        class: "sidebar"
    }, "This is a sidebar");
    ```
    @returns {string} Returns a string.
    ```
    <aside class="sidebar">This is a sidebar</aside>
    ```      
*/
export function aside(args?:Attributes|string): string;
/**
    `<audio>` element.
    @example
    ```
    audio({
        src: "/audio/music.mp3",
        controls: true
    });
    ```
    @returns {string} Returns a string.
    ```
    <audio src="/audio/music.mp3" controls></audio>
    ```      
*/
export function audio(args?:Attributes|string): string;
/**
    `<b>` element.
    @example
    ```
    b("This is bold text");
    ```
    @returns {string} Returns a string.
    ```
    <b>This is bold text</b>
    ```      
*/
export function b(args?:Attributes|string): string
/**
    `<bdi>` element.
    @example
    ```
    bdi({
        dir: "rtl"
    }, "This text goes right to left");
    ```
    @returns {string} Returns a string.
    ```
    <bdi dir="rtl">This text goes right to left</bdi>
    ```      
*/
export function bdi(args?:Attributes|string): string;
/**
    `<bdo>` element.
    @example
    ```
    bdo({
        dir: "rtl"
    }, "This text goes right to left");
    ```
    @returns {string} Returns a string.
    ```
    <bdo dir="rtl">This text goes right to left</bdo>
    ```      
*/
export function bdo(args?:Attributes|string): string;
/**
    `<blockquote>` element.
    @example
    ```
    blockquote({
        cite: "https://example.com"
    }, "This is a quote");
    ```
    @returns {string} Returns a string.
    ```
    <blockquote cite="https://example.com">This is a quote</blockquote>
    ```      
*/
export function blockquote(args?:Attributes|string): string;
/**
    `<body>` element.
    @example
    ```
    body({
        class: "dark-theme"
    });
    ```
    @returns {string} Returns a string.
    ```
    <body class="dark-theme"></body>
    ```      
*/
export function body(args?:Attributes|string): string;
/**
    `<button>` element.
    @example
    ```
    button({
        type: "submit"
    }, "Submit");
    ```
    @returns {string} Returns a string.
    ```
    <button type="submit">Submit</button>
    ```      
*/
export function button(args?:Attributes|string): string;
/**
    `<canvas>` element.
    @example
    ```
    canvas({
        width: "200",
        height: "100"
    });
    ```
    @returns {string} Returns a string.
    ```
    <canvas width="200" height="100"></canvas>
    ```      
*/
export function canvas(args?:Attributes|string): string;
/**
    `<caption>` element.
    @example
    ```
    caption("Table caption");
    ```
    @returns {string} Returns a string.
    ```
    <caption>Table caption</caption>
    ```      
*/
export function caption(args?:Attributes|string): string;
/**
    `<cite>` element.
    @example
    ```
    cite("This is a citation");
    ```
    @returns {string} Returns a string.
    ```
    <cite>This is a citation</cite>
    ```      
*/
export function cite(args?:Attributes|string): string;
/**
    `<code>` element.
    @example
    ```
    code("This is code");
    ```
    @returns {string} Returns a string.
    ```
    <code>This is code</code>
    ```      
*/
export function code(args?:Attributes|string): string;
/**
    `<colgroup>` element.
    @example
    ```
    colgroup({
        span: "2"
    });
    ```
    @returns {string} Returns a string.
    ```
    <colgroup span="2"></colgroup>
    ```      
*/
export function colgroup(args?:Attributes|string): string;
/**
    `<data>` element.
    @example
    ```
    data({
        value: "100"
    }, "100");
    ```
    @returns {string} Returns a string.
    ```
    <data value="100">100</data>
    ```      
*/
export function data(args?:Attributes|string): string;
/**
    `<datalist>` element.
    @example
    ```
    datalist({
        id: "browsers"
    });
    ```
    @returns {string} Returns a string.
    ```
    <datalist id="browsers"></datalist>
    ```      
*/
export function datalist(args?:Attributes|string): string;
/**
    `<dd>` element.
    @example
    ```
    dd("This is a description");
    ```
    @returns {string} Returns a string.
    ```
    <dd>This is a description</dd>
    ```      
*/
export function dd(args?:Attributes|string): string;
/**
    `<del>` element.
    @example
    ```
    del({
        datetime: "2010-10-10"
    }, "This is deleted text");
    ```
    @returns {string} Returns a string.
    ```
    <del datetime="2010-10-10">This is deleted text</del>
    ```      
*/
export function del(args?:Attributes|string): string;
/**
    `<details>` element.
    @example
    ```
    details({
        open: true
    }, "This is a summary");
    ```
    @returns {string} Returns a string.
    ```
    <details open>This is a summary</details>
    ```      
*/
export function details(args?:Attributes|string): string;
/**
    `<dfn>` element.
    @example
    ```
    dfn({
        class: "quote"
    }, "This is a definition");
    ```
    @returns {string} Returns a string.
    ```
    <dfn class="quote">This is a definition</dfn>
    ```      
*/
export function dfn(args?:Attributes|string): string;
/**
    `<dialog>` element.
    @example
    ```
    dialog({
        open: true
    }, "This is a dialog");
    ```
    @returns {string} Returns a string.
    ```
    <dialog open>This is a dialog</dialog>
    ```      
*/
export function dialog(args?:Attributes|string): string;
/**
    `<div>` element.
    @example
    ```
    div({
        class: "main home-page"
    });
    ```
    @returns {string} Returns a string.
    ```
    <div class="main home-page"></div>
    ```      
*/
export function div(args?:Attributes|string): string;
/**
    `<dl>` element.
    @example
    ```
    dl({
        class: "terms"
    });
    ```
    @returns {string} Returns a string.
    ```
    <dl class="terms"></dl>
    ```      
*/
export function dl(args?:Attributes|string): string;
/**
    `<dt>` element.
    @example
    ```
    dt("This is a term");
    ```
    @returns {string} Returns a string.
    ```
    <dt>This is a term</dt>
    ```      
*/
export function dt(args?:Attributes|string): string;
/**
    `<em>` element.
    @example
    ```
    em({
        class: "quote"
    },
    "This is italic text");
    ```
    @returns {string} Returns a string.
    ```
    <em class="quote">This is italic text</em>
    ```
*/
export function em(args?:Attributes|string): string;
/**
    `<fieldset>` element.
    @example
    ```
    fieldset({
        class: "form"
    });
    ```
    @returns {string} Returns a string.
    ```
    <fieldset class="form"></fieldset>
    ```      
*/
export function fieldset(args?:Attributes|string): string;
/**
    `<figcaption>` element.
    @example
    ```
    figcaption("This is a caption");
    ```
    @returns {string} Returns a string.
    ```
    <figcaption>This is a caption</figcaption>
    ```      
*/
export function figcaption(args?:Attributes|string): string;
/**
    `<figure>` element.
    @example
    ```
    figure({
        class: "image"
    });
    ```
    @returns {string} Returns a string.
    ```
    <figure class="image"></figure>
    ```      
*/
export function figure(args?:Attributes|string): string;
/**
    `<footer>` element.
    @example
    ```
    footer({
        class: "main-footer"
    });
    ```
    @returns {string} Returns a string.
    ```
    <footer class="main-footer"></footer>
    ```      
*/
export function footer(args?:Attributes|string): string;
/**
    `<form>` element.
    @example
    ```
    form({
        action: "/submit",
        method: "post"
    });
    ```
    @returns {string} Returns a string.
    ```
    <form action="/submit" method="post"></form>
    ```      
*/
export function form(args?:Attributes|string): string;
/**
    `<h1>` element.
    @example
    ```
    h1("This is a heading");
    ```
    @returns {string} Returns a string.
    ```
    <h1>This is a heading</h1>
    ```      
*/
export function h1(args?:Attributes|string): string;
/**
    `<h2>` element.
    @example
    ```
    h2("This is a heading");
    ```
    @returns {string} Returns a string.
    ```
    <h2>This is a heading</h2>
    ```      
*/
export function h2(args?:Attributes|string): string;
/**
    `<h3>` element.
    @example
    ```
    h3("This is a heading");
    ```
    @returns {string} Returns a string.
    ```
    <h3>This is a heading</h3>
    ```      
*/
export function h3(args?:Attributes|string): string;
/**
    `<h4>` element.
    @example
    ```
    h4("This is a heading");
    ```
    @returns {string} Returns a string.
    ```
    <h4>This is a heading</h4>
    ```      
*/
export function h4(args?:Attributes|string): string;
/**
    `<h5>` element.
    @example
    ```
    h5("This is a heading");
    ```
    @returns {string} Returns a string.
    ```
    <h5>This is a heading</h5>
    ```      
*/
export function h5(args?:Attributes|string): string;
/**
    `<h6>` element.
    @example
    ```
    h6("This is a heading");
    ```
    @returns {string} Returns a string.
    ```
    <h6>This is a heading</h6>
    ```      
*/
export function h6(args?:Attributes|string): string;
/**
    `<head>` element.
    @example
    ```
    head(
        title("Page title"),
        meta({
            charset: "UTF-8"
        })
    );
    ```
    @returns {string} Returns a string.
    ```
    <head>
        <title>Page title</title>
        <meta charset="UTF-8">
    </head>
    ```      
*/
export function head(args?:Attributes|string): string;
/**
    `<header>` element.
    @example
    ```
    header({
        class: "main-header"
    });
    ```
    @returns {string} Returns a string.
    ```
    <header class="main-header"></header>
    ```      
*/
export function header(args?:Attributes|string): string;
/**
	`<html>` element.
	@example
	```
    html({
            lang: 'en'
        },
        head(...),
        body(...)
    );
	```
    @returns {string} Returns a string.
    ```
    <html lang="en">
        <head>...</head>
        <body>...</body>
    </html>
    ```
*/ 
export function html(args?:Attributes|string): string;
/**
	`<i>` element.
	@example
	```
    i("This is italic text");
	```
    @returns {string} Returns a string.
    ```
    <i>This is italic text</i>
    ```
*/
export function i(args?:Attributes|string): string
/**
    `<iframe>` element.
    @example
    ```
    iframe({
        src: "/path/to/page"
    });
    ```
    @returns {string} Returns a string.
    ```
    <iframe src="/path/to/page"></iframe>
    ```
*/
export function iframe(args?:Attributes|string): string;
/**
    `<ins>` element.
    @example
    ```
    ins({
        datetime: "2010-10-10"
    }, "This is inserted text");
    ```
    @returns {string} Returns a string.
    ```
    <ins datetime="2010-10-10">This is inserted text</ins>
    ```      
*/
export function ins(args?:Attributes|string): string;
/**
    `<kbd>` element.
    @example
    ```
    kbd("Ctrl + C");
    ```
    @returns {string} Returns a string.
    ```
    <kbd>Ctrl + C</kbd>
    ```      
*/
export function kbd(args?:Attributes|string): string;
/**
    `<label>` element.
    @example
    ```
    label({
        for: "username"
    }, "Username");
    ```
    @returns {string} Returns a string.
    ```
    <label for="username">Username</label>
    ```      
*/
export function label(args?:Attributes|string): string;
/**
    `<legend>` element.
    @example
    ```
    legend("This is a legend");
    ```
    @returns {string} Returns a string.
    ```
    <legend>This is a legend</legend>
    ```      
*/
export function legend(args?:Attributes|string): string;
/**
    `<li>` element.
    @example
    ```
    li("List item");
    ```
    @returns {string} Returns a string.
    ```
    <li>List item</li>
    ```      
*/
export function li(args?:Attributes|string): string;
/**
    `<main>` element.
    @example
    ```
    main("Main content");
    ```
    @returns {string} Returns a string.
    ```
    <main>Main content</main>
    ```      
*/
export function main(args?:Attributes|string): string;
/**
    `<map>` element.
    @example
    ```
    map({
        name: "image-map"
    });
    ```
    @returns {string} Returns a string.
    ```
    <map name="image-map"></map>
    ```      
*/
export function map(args?:Attributes|string): string;
/**
    `<mark>` element.
    @example
    ```
    mark("Highlighted text");
    ```
    @returns {string} Returns a string.
    ```
    <mark>Highlighted text</mark>
    ```      
*/
export function mark(args?:Attributes|string): string;
/**
    `<menu>` element.
    @example
    ```
    menu({
        type: "toolbar"
    });
    ```
    @returns {string} Returns a string.
    ```
    <menu type="toolbar"></menu>
    ```      
*/
export function menu(args?:Attributes|string): string;
/**
    `<meter>` element.
    @example
    ```
    meter({
        value: "2",
        min: "0",
        max: "10"
    });
    ```
    @returns {string} Returns a string.
    ```
    <meter value="2" min="0" max="10"></meter>
    ```      
*/
export function meter(args?:Attributes|string): string;
/**
    `<nav>` element.
    @example
    ```
    nav({
        class: "main-nav"
    });
    ```
    @returns {string} Returns a string.
    ```
    <nav class="main-nav"></nav>
    ```      
*/
export function nav(args?:Attributes|string): string;
/**
    `<noscript>` element.
    @example
    ```
    noscript("This site requires JavaScript");
    ```
    @returns {string} Returns a string.
    ```
    <noscript>This site requires JavaScript</noscript>
    ```      
*/
export function noscript(args?:Attributes|string): string;
/**
    `<object>` element.
    @example
    ```
    object({
        data: "/path/to/object"
    });
    ```
    @returns {string} Returns a string.
    ```
    <object data="/path/to/object"></object>
    ```      
*/
export function object(args?:Attributes|string): string;
/**
    `<ol>` element.
    @example
    ```
    ol({
        type: "A"
    });
    ```
    @returns {string} Returns a string.
    ```
    <ol type="A"></ol>
    ```      
*/
export function ol(args?:Attributes|string): string;
/**
    `<optgroup>` element.
    @example
    ```
    optgroup({
        label: "Group"
    });
    ```
    @returns {string} Returns a string.
    ```
    <optgroup label="Group"></optgroup>
    ```      
*/
export function optgroup(args?:Attributes|string): string;
/**
    `<option>` element.
    @example
    ```
    option("Option");
    ```
    @returns {string} Returns a string.
    ```
    <option>Option</option>
    ```      
*/
export function option(args?:Attributes|string): string;
/**
    `<output>` element.
    @example
    ```
    output("Output");
    ```
    @returns {string} Returns a string.
    ```
    <output>Output</output>
    ```      
*/
export function output(args?:Attributes|string): string;
/**
    `<p>` element.
    @example
    ```
    p("This is a paragraph");
    ```
    @returns {string} Returns a string.
    ```
    <p>This is a paragraph</p>
    ```      
*/
export function p(args?:Attributes|string): string;
/**
    `<picture>` element.
    @example
    ```
    picture(
        source({
            srcset: "elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w",
            sizes: "(max-width: 600px) 480px, 800px",
            src: "elva-fairy-800w.jpg",
            type: "image/jpeg"
        }),
        img({
            src: "/images/image.jpg",
            alt: "Image description"
        })
    );
    ```
    @returns {string} Returns a string.
    ```
    <picture>
        <source srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w" sizes="(max-width: 600px) 480px, 800px" src="elva-fairy-800w.jpg" type="image/jpeg">
        <img src="/images/image.jpg" alt="Image description">
    </picture>
    ```      
*/
export function picture(args?:Attributes|string): string;
/**
    `<pre>` element.
    @example
    ```
    pre("This is preformatted text");
    ```
    @returns {string} Returns a string.
    ```
    <pre>This is preformatted text</pre>
    ```      
*/
export function pre(args?:Attributes|string): string;
/**
    `<progress>` element.
    @example
    ```
    progress({
        value: "50",
        max: "100"
    });
    ```
    @returns {string} Returns a string.
    ```
    <progress value="50" max="100"></progress>
    ```      
*/
export function progress(args?:Attributes|string): string;
/**
    `<q>` element.
    @example
    ```
    q({
        cite: "https://example.com"
    }, "This is a quote");
    ```
    @returns {string} Returns a string.
    ```
    <q cite="https://example.com">This is a quote</q>
    ```      
*/
export function q(args?:Attributes|string): string;
/**
    `<rp>` element.
    @example
    ```
    rp("This is ruby parentheses");
    ```
    @returns {string} Returns a string.
    ```
    <rp>This is ruby parentheses</rp>
    ```      
*/
export function rp(args?:Attributes|string): string;
/**
    `<rt>` element.
    @example
    ```
    rt("This is ruby text");
    ```
    @returns {string} Returns a string.
    ```
    <rt>This is ruby text</rt>
    ```      
*/
export function rt(args?:Attributes|string): string;
/**
    `<ruby>` element.
    @example
    ```
    ruby(
        rt("This is ruby text"),
        rp("This is ruby parentheses")
    );
    ```
    @returns {string} Returns a string.
    ```
    <ruby>
        <rt>This is ruby text</rt>
        <rp>This is ruby parentheses</rp>
    </ruby>
    ```      
*/
export function ruby(args?:Attributes|string): string;
/**
    `<s>` element.
    @example
    ```
    s("This is strikethrough text");
    ```
    @returns {string} Returns a string.
    ```
    <s>This is strikethrough text</s>
    ```      
*/
export function s(args?:Attributes|string): string;
/**
    `<samp>` element.
    @example
    ```
    samp("This is sample text");
    ```
    @returns {string} Returns a string.
    ```
    <samp>This is sample text</samp>
    ```      
*/
export function samp(args?:Attributes|string): string;
/**
    `<script>` element.
    @example
    ```
    script({
        src: "/js/script.js"
    });
    ```
    @returns {string} Returns a string.
    ```
    <script src="/js/script.js"></script>
    ```      
*/
export function script(args?:Attributes|string): string;
/**
    `<section>` element.
    @example
    ```
    section("This is a section");
    ```
    @returns {string} Returns a string.
    ```
    <section>This is a section</section>
    ```      
*/
export function section(args?:Attributes|string): string;
/**
    `<select>` element.
    @example
    ```
    select(
        option("Option 1"),
        option("Option 2")
    );
    ```
    @returns {string} Returns a string.
    ```
    <select>
        <option>Option 1</option>
        <option>Option 2</option>
    </select>
    ```      
*/
export function select(args?:Attributes|string): string;
/**
    `<slot>` element.
    @example
    ```
    slot("Slot text");
    ```
    @returns {string} Returns a string.
    ```
    <slot>Slot text</slot>
    ```      
*/
export function slot(args?:Attributes|string): string;
/**
    `<small>` element.
    @example
    ```
    small("Small text");
    ```
    @returns {string} Returns a string.
    ```
    <small>Small text</small>
    ```      
*/
export function small(args?:Attributes|string): string;
/**
    `<span>` element.
    @example
    ```
    span("Span text");
    ```
    @returns {string} Returns a string.
    ```
    <span>Span text</span>
    ```      
*/
export function span(args?:Attributes|string): string;
/**
    `<strong>` element.
    @example
    ```
    strong("Strong text");
    ```
    @returns {string} Returns a string.
    ```
    <strong>Strong text</strong>
    ```      
*/
export function strong(args?:Attributes|string): string;
/**
    `<style>` element.
    @example
    ```
    style("body { color: red; }");
    ```
    @returns {string} Returns a string.
    ```
    <style>body { color: red; }</style>
    ```      
*/
export function style(args?:Attributes|string): string;
/**
    `<sub>` element.
    @example
    ```
    sub("Subscript text");
    ```
    @returns {string} Returns a string.
    ```
    <sub>Subscript text</sub>
    ```      
*/
export function sub(args?:Attributes|string): string;
/**
    `<summary>` element.
    @example
    ```
    summary("Summary text");
    ```
    @returns {string} Returns a string.
    ```
    <summary>Summary text</summary>
    ```      
*/
export function summary(args?:Attributes|string): string;
/**
    `<sup>` element.
    @example
    ```
    sup("Superscript text");
    ```
    @returns {string} Returns a string.
    ```
    <sup>Superscript text</sup>
    ```      
*/
export function sup(args?:Attributes|string): string;
/**
    `<table>` element.
    @example
    ```
    table(
        thead(
            tr(
                th("Name"),
                th("Age")
            )
        ),
        tbody(
            tr(
                td("John"),
                td("25")
            )
        )
    );
    ```
    @returns {string} Returns a string.
    ```
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John</td>
                <td>25</td>
            </tr>
        </tbody>
    </table>
    ```      
*/
export function table(args?:Attributes|string): string;
/**
    `<tbody>` element.
    @example
    ```
    tbody(
        tr(
            td("John"),
            td("25")
        )
    );
    ```
    @returns {string} Returns a string.
    ```
    <tbody>
        <tr>
            <td>John</td>
            <td>25</td>
        </tr>
    </tbody>
    ```      
*/
export function tbody(args?:Attributes|string): string;
/**
    `<td>` element.
    @example
    ```
    td("John");
    ```
    @returns {string} Returns a string.
    ```
    <td>John</td>
    ```      
*/
export function td(args?:Attributes|string): string;
/**
    `<template>` element.
    @example
    ```
    template("Template content");
    ```
    @returns {string} Returns a string.
    ```
    <template>Template content</template>
    ```      
*/
export function template(args?:Attributes|string): string;
/**
    `<textarea>` element.
    @example
    ```
    textarea({
        placeholder: "Enter your message"
    });
    ```
    @returns {string} Returns a string.
    ```
    <textarea placeholder="Enter your message"></textarea>
    ```      
*/
export function textarea(args?:Attributes|string): string;
/**
    `<tfoot>` element.
    @example
    ```
    tfoot(
        tr(
            td("Total")
        )
    );
    ```
    @returns {string} Returns a string.
    ```
    <tfoot>
        <tr>
            <td>Total</td>
        </tr>
    </tfoot>
    ```      
*/
export function tfoot(args?:Attributes|string): string;
/**
    `<th>` element.
    @example
    ```
    th("Name");
    ```
    @returns {string} Returns a string.
    ```
    <th>Name</th>
    ```      
*/
export function th(args?:Attributes|string): string;
/**
    `<thead>` element.
    @example
    ```
    thead(
        tr(
            th("Name"),
            th("Age")
        )
    );
    ```
    @returns {string} Returns a string.
    ```
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    ```      
*/
export function thead(args?:Attributes|string): string;
/**
    `<time>` element.
    @example
    ```
    time({
        datetime: "2020-10-10"
    }, "10:00");
    ```
    @returns {string} Returns a string.
    ```
    <time datetime="2020-10-10">10:00</time>
    ```      
*/
export function time(args?:Attributes|string): string;
/**
    `<title>` element.
    @example
    ```
    title("Page title");
    ```
    @returns {string} Returns a string.
    ```
    <title>Page title</title>
    ```      
*/
export function title(args?:Attributes|string): string;
/**
    `<tr>` element.
    @example
    ```
    tr(
        td("John"),
        td("25")
    );
    ```
    @returns {string} Returns a string.
    ```
    <tr>
        <td>John</td>
        <td>25</td>
    </tr>
    ```      
*/
export function tr(args?:Attributes|string): string;
/**
    `<u>` element.
    @example
    ```
    u("Underlined text");
    ```
    @returns {string} Returns a string.
    ```
    <u>Underlined text</u>
    ```      
*/
export function u(args?:Attributes|string): string
/**
    `<ul>` element.
    @example
    ```
    ul(
        li("List item 1"),
        li("List item 2")
    );
    ```
    @returns {string} Returns a string.
    ```
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
    </ul>
    ```      
*/
export function ul(args?:Attributes|string): string;
/**
    `<video>` element.
    @example
    ```
    video({
        src: "/video/video.mp4",
        controls: true
    });
    ```
    @returns {string} Returns a string.
    ```
    <video src="/video/video.mp4" controls></video>
    ```      
*/
export function video(args?:Attributes|string): string;
/**
	fragment content wrapper.
	@example
	```
    fragment(
        meta({
            charset: "UTF-8"
        }),
        meta({
            name: "description",
            content: "This is a description"
        }) 
    );
	```
    @returns {string} Returns a string.
    ```
    <meta charset="UTF-8">
    <meta name="description" content="This is a description">
    ```
*/
export function fragment(args?:string): string;