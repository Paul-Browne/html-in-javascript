import { cp, mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import htjs from 'html-in-javascript';
import { bundle } from 'lightningcss';

const writeFileTo = async (content, path) => {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, content);
}

const { link, style } = htjs;

export const inlineStyle = path => {
    const { code, map } = bundle({
        filename: path,
        minify: true,
    });
    return style(code.toString());
}

export const linkStylesheet = (path, outPath) => {
    const { code, map } = bundle({
        filename: path,
        minify: true
    });
    writeFileTo(code, join('docs/css/', outPath));
    return link({
        rel: 'stylesheet',
        href: join('/css/', outPath),
    });
}