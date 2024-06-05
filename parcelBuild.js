import { Parcel } from '@parcel/core';

let bundler = new Parcel({
    entries: './src/js/pages/spa/buf/index.js',
    mode: 'production',
    targets: {
        modern: {
            engines: {
                browsers: ['last 1 Chrome version']
            },
            distDir: "./output"
        },
        legacy: {
            engines: {
                browsers: ['IE 11']
            },
            distDir: "./legacy"
        }
    },
    defaultConfig: '@parcel/config-default'
});


try {
    let x = await bundler.run();
    console.log(await x.bundleGraph());
    let bundles = x.bundleGraph.getBundles();
    console.log(`✨ Built ${bundles.length} bundles in ${x.buildTime}ms!`);
} catch (err) {
    console.log(err.diagnostics);
}