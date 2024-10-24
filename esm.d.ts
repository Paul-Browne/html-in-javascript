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
    href attribute
    @example
    ```
    a({
        href: "/path/to/page",
    }, "Link to page");
    ```
*/    
    href?: string,   
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
    [key: string]: string | boolean
};

// Void elements

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
export function area(args?:Attributes): string;
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
export function col(args?:Attributes): string;
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
export function input(args?:Attributes): string;
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
export function param(args?:Attributes): string;
export function source(args?:Attributes): string;
export function track(args?:Attributes): string;
export function wbr(args?:Attributes): string;

export function a(args?:Attributes|string): string;
export function abbr(args?:Attributes|string): string;
export function address(args?:Attributes|string): string;
export function article(args?:Attributes|string): string;
export function aside(args?:Attributes|string): string;
export function audio(args?:Attributes|string): string;
export function b(args?:Attributes|string): string
export function bdi(args?:Attributes|string): string;
export function bdo(args?:Attributes|string): string;
export function blockquote(args?:Attributes|string): string;
export function body(args?:Attributes|string): string;
export function button(args?:Attributes|string): string;
export function canvas(args?:Attributes|string): string;
export function caption(args?:Attributes|string): string;
export function cite(args?:Attributes|string): string;
export function code(args?:Attributes|string): string;
export function colgroup(args?:Attributes|string): string;
export function data(args?:Attributes|string): string;
export function datalist(args?:Attributes|string): string;
export function dd(args?:Attributes|string): string;
export function del(args?:Attributes|string): string;
export function details(args?:Attributes|string): string;
export function dfn(args?:Attributes|string): string;
export function dialog(args?:Attributes|string): string;
export function div(args?:Attributes|string): string;
export function dl(args?:Attributes|string): string;
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
export function fieldset(args?:Attributes|string): string;
export function figcaption(args?:Attributes|string): string;
export function figure(args?:Attributes|string): string;
export function footer(args?:Attributes|string): string;
export function form(args?:Attributes|string): string;
export function h1(args?:Attributes|string): string;
export function h2(args?:Attributes|string): string;
export function h3(args?:Attributes|string): string;
export function h4(args?:Attributes|string): string;
export function h5(args?:Attributes|string): string;
export function h6(args?:Attributes|string): string;
export function head(args?:Attributes|string): string;
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
export function iframe(args?:Attributes|string): string;
export function ins(args?:Attributes|string): string;
export function kbd(args?:Attributes|string): string;
export function label(args?:Attributes|string): string;
export function legend(args?:Attributes|string): string;
export function li(args?:Attributes|string): string;
export function main(args?:Attributes|string): string;
export function map(args?:Attributes|string): string;
export function mark(args?:Attributes|string): string;
export function menu(args?:Attributes|string): string;
export function meter(args?:Attributes|string): string;
export function nav(args?:Attributes|string): string;
export function noscript(args?:Attributes|string): string;
export function object(args?:Attributes|string): string;
export function ol(args?:Attributes|string): string;
export function optgroup(args?:Attributes|string): string;
export function option(args?:Attributes|string): string;
export function output(args?:Attributes|string): string;
export function p(args?:Attributes|string): string
export function picture(args?:Attributes|string): string;
export function pre(args?:Attributes|string): string;
export function progress(args?:Attributes|string): string;
export function q(args?:Attributes|string): string
export function rp(args?:Attributes|string): string;
export function rt(args?:Attributes|string): string;
export function ruby(args?:Attributes|string): string;
export function s(args?:Attributes|string): string
export function samp(args?:Attributes|string): string;
export function script(args?:Attributes|string): string;
export function section(args?:Attributes|string): string;
export function select(args?:Attributes|string): string;
export function slot(args?:Attributes|string): string;
export function small(args?:Attributes|string): string;
export function span(args?:Attributes|string): string;
export function strong(args?:Attributes|string): string;
export function style(args?:Attributes|string): string;
export function sub(args?:Attributes|string): string;
export function summary(args?:Attributes|string): string;
export function sup(args?:Attributes|string): string;
export function table(args?:Attributes|string): string;
export function tbody(args?:Attributes|string): string;
export function td(args?:Attributes|string): string;
export function template(args?:Attributes|string): string;
export function textarea(args?:Attributes|string): string;
export function tfoot(args?:Attributes|string): string;
export function th(args?:Attributes|string): string;
export function thead(args?:Attributes|string): string;
export function time(args?:Attributes|string): string;
export function title(args?:Attributes|string): string;
export function tr(args?:Attributes|string): string;
export function u(args?:Attributes|string): string
export function ul(args?:Attributes|string): string;
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