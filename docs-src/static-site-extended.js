import { a, html, head, meta, link, script, div, b, h5, em, title, body, h1, h2, h3, h4, p, button, pre, code, br, fragment, strong, ins } from "html-in-javascript"

const prism = {
    js: content => pre({class:"language-javascript"}, code(content)),
    html: content => pre({class:"language-html"}, code(content))
}

export default fragment(
'<!DOCTYPE html>',
html({lang: "en"},
    head(
        meta({charset:"UTF-8"}),
        meta({name:"viewport", content:"width=device-width, initial-scale=1.0"}),
        meta({name:"description", content:"HT.JS is a library for easily creating HTML in JavaScript, for both the backend and the frontend."}),
        meta({name:"msapplication-TileColor", content:"#2d89ef"}),
        meta({name:"theme-color", content:"#ffff00"}),
        link({rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"}),
        link({rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"}),
        link({rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"}),
        link({rel:"manifest", href:"/site.webmanifest"}),
        link({rel:"mask-icon", href:"/safari-pinned-tab.svg", color:"#5bbad5"}),
        link({rel:"stylesheet", href:"/css/style.css"}),
        title("HT.JS - HTML in JavaScript"),
    ),
    body(
        h1({class:'big-text'}, "HT.JS: Static-site extended"),

        p("Lets make a more powerful static site generator."),

        prism.js(
`/* project structure example

scripts/
├── build.js
├── serve.js
src/
├── pages/
│   ├── index.js
│   ├── about/
│   │   └── index.js
│   └── contact/
│       └── index.js
├── templates/
│   └── html.js
├── components/
│   ├── carousel.js
│   ├── footer.js
│   ├── header.js
│   └── hero.js
├── js/
│   ├── accordion.js
│   ├── carousel.js
│   ├── main.js
│   └── modal.js
├── scss/
│   ├── main.scss
│   ├── special-page.scss
│   └── imports/
│       ├── footer.scss
│       ├── header.scss
│       ├── typography.scss
│       └── variables.scss
├── fonts/
├── images/
├── root/
utils/
│   ├── generic.js
│   └── node.js
dist/
├── index.html
│   ├── about/
│   │   └── index.html
│   └── contact/
│       └── index.html
├── css/
├── js/
├── images/
package.json
README.md
configs, etc.

*/`
        ),

        p("A simple static server for development"),

        prism.js(
`// scripts/serve.js
import express from 'express';

const app = express();

app.use("/", express.static("dist/", {
    maxAge: 0,
    extensions: ["html"],
    redirect: false
}));

app.listen(8080, () => console.log("http://localhost:8080"));`        
        ),

        p("Build process, using esbuild"),

        prism.js(
`// scripts/build.js
import { cp, readdir } from "node:fs/promises";
import { join } from "node:path";
import * as esbuild from 'esbuild'
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import { sassPlugin } from 'esbuild-sass-plugin';
import writeFileRecursively from '../utils/node.js';

// scss -> css
esbuild.build({
    entryPoints: ['src/scss/*.scss'],
    outdir: 'dist/css',
    bundle: true,
    minify: true,
    sourcemap: true,
    external: [
        '*.woff2',
        '*.svg',
        '*.png',
        '*.jpg',
        '*.jpeg',
        '*.gif',
        '*.ico',
        '*.webp'
    ],
    plugins: [
        sassPlugin({
            async transform(source) {
                const { css } = await postcss([autoprefixer]).process(
                    source,
                    { from: undefined }
                );
                return css;
            },
        }),
    ],
})

// frontend js
esbuild.build({
    entryPoints: ['src/js/*.js'],
    bundle: true,
    minify: true,
    sourcemap: true,
    splitting: true,
    treeShaking: true,
    format: "esm",
    target: "esnext",
    outdir: "dist/js",
})

// html: loop over all files in src/pages and build them in dist/
const files = await readdir('src/pages', { 
    recursive: true,
    withFileTypes: true 
});

for (const file of files) {
    if (file.isFile() && file.name === 'index.js') {
        const resource = join(file.parentPath, file.name);
        const outputPath = resource.replace('src/pages', 'dist').replace('index.js', 'index.html');
        import(\`../\${resource}\`).then(module => {
            writeFileRecursively(outputPath, module.default);
        });
    }
}

cp("src/images", "dist/images", { recursive: true })
cp("src/fonts", "dist/fonts", { recursive: true })
// favicons, site.webmanifest, etc.
cp("src/root", "dist", { recursive: true })
`
        ),

        p("nodemon for continuous rebuilding when a file changes"),

        script({src:"/js/prism.js"}),
    )
))