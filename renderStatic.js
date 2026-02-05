require('dotenv').config();
const fs = require('fs');
const handlebars = require('handlebars');
const minify = require('html-minifier-terser').minify;
require('ignore-styles');

if (!process.env.BROWSER) {
    global.window = { ssr: true };
    global.document = {
        createElement: () => { return { el: {}, prop: {}, appendChild: () => { return {}; } }; },
        getElementsByTagName: () => { return { appendChild: () => { return {}; } }; },
        appendChild: () => { return {}; },
    };
}

require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
    ],
    plugins: [
        '@babel/syntax-dynamic-import',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-object-rest-spread',
        '@loadable/babel-plugin',
    ],
});

const renderPage = require('./renderPage.js');

const normalizeCssStr = fs.readFileSync('./public/css/normalize.min.css', 'utf-8');
const fontAwesomeCss = require('@fortawesome/fontawesome-svg-core').dom.css();
const fontsCss = fs.readFileSync('./public/fonts/fonts.css', 'utf-8');
let additionalStyleTags = `
    <style>${normalizeCssStr}</style>
    <style>${fontAwesomeCss}</style>
    <style>${fontsCss}</style>
`;

const renderHTML = renderData => {
    return renderPage.default(renderData);
};

const template = handlebars.compile(fs.readFileSync('./src/index.hbs').toString());

const writeHTML = async (rendered, renderData) => {
    const html = template({
        body: rendered.html,
        headTags: rendered.headTags,
        scriptTags: rendered.scriptTags,
        linkTags: rendered.linkTags,
        styleTags: rendered.styleTags,
        renderData: renderData,
        additionalStyleTags: additionalStyleTags,
        production: process.env.NODE_ENV == 'production'
    });

    let pathUrl = '';

    if (renderData.path !== '/') {
        pathUrl = renderData.path;
    }

    if (!fs.existsSync(`./public${pathUrl}`)) {
        fs.mkdirSync(`./public${pathUrl}`)
    }

    const minifiedHtml = await minify(html, {
        removeComments: true,
    });

    fs.writeFileSync(`./public${pathUrl}/index.html`, minifiedHtml, 'utf8');
    console.log("Generated HTML", `./public${pathUrl}/index.html`);
};

const routes = [
    '/',
    '/about',
    '/signup',
    '/signup-validator',
    '/news',
    '/videos',
    '/privacy-notice',
    '/instructions',
    '/instructions/mobile-app',
    '/instructions/watchers',
    '/instructions/what-to-watch-for',
    '/instructions/how-to-validate',
    '/instructions/how-to-take-photos',
    '/ti-glasuvash',
    '/izvan-bulgaria',
    '/mobile-app-feedback',
    '/feedback-defenders',
    '/feedback-validators',
];

console.log('\nGENERATING STATIC HTML\n');

(async () => {
    for (const route of routes) {
        const renderData = { path: route };
        const rendered = renderHTML(renderData);
        await writeHTML(rendered, renderData);
    }

    console.log('\nDONE\n');
    process.exit(0);
})();
