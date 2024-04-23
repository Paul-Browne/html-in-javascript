# HT.JS

HT.JS is a library for easily creating HTML in JavaScript, for both the backend and the frontend.

```js
import htjs from "html-in-javascript"

const { html, head, meta, link, title, body, h1, p, a, img, button } = htjs;

const page = 
html({lang: "en"},
    head(
        meta({charset:"UTF-8"}),
        meta({name:"viewport", content:"width=device-width, initial-scale=1.0"}),
        title("Hello World"),
        link({rel:"stylesheet", href:"style.css"})
    ),
    body(
        h1("Hello World"),
        p("This is a paragraph ",
            a({href:"https://google.com"}, "Google")
        ),       
        img({
            src: "https://via.placeholder.com/150",
            alt: "Placeholder Image"
        }),
        button({onClick: () => console.log("you clicked me!")},
            "click me!!"
        )
    )
)

console.log(page)
```

```html
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Hello World</h1>
        <p>This is a paragraph <a href="https://google.com">Google</a></p>
        <img src="https://via.placeholder.com/150" alt="Placeholder Image">
        <button onClick="(() => console.log('you clicked me!'))()">click me!!</button>
    </body>
</html>
```

[DOCS](https://ht.js.org)