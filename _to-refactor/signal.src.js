// manually minify from https://minify-js.com/
// then paste to signal.js

export default (value) => {
    const subs = new Set();
    return {
        get: () => value,
        set: v => {
            if (Object.is(v, value)) return;
                value = v;
                subs.forEach(fn => fn(v));
            },
        subscribe: fn => {
            subs.add(fn);
            fn(value);
            return () => subs.delete(fn);
        }
    };
}