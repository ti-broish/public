const fs = require('fs');
const ejs = require('ejs');
const minify = require('html-minifier').minify;
require('ignore-styles');

if (!process.env.BROWSER) {
    global.window = { ssr: true };
    global.document = {
        createElement: () =>{return {el:{}, prop:{}, appendChild:()=>{return{};}};},
        getElementsByTagName: () => { return {appendChild:()=>{return{};}}; },
        appendChild: () => { return {}; },
    };
}

require('@babel/register') ({ 
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
let additionalStyleTags = `
    <style>${normalizeCssStr}</style>
    <style>${fontAwesomeCss}</style>
`;  

const renderHTML = renderData => {
    return renderPage.default(renderData);
};

const writeHTML = (rendered, renderData) => {
    const template = fs.readFileSync('./src/index.ejs').toString();
    const html = ejs.render(template, {
        body: rendered.html, 
        headTags: rendered.headTags,
        scriptTags: rendered.scriptTags,
        linkTags: rendered.linkTags,
        styleTags: rendered.styleTags,
        renderData: renderData,
        additionalStyleTags: additionalStyleTags
    });

    let pathUrl = '';

    if(renderData.path !== '/') {
        pathUrl = renderData.path;
    }

    if(!fs.existsSync(`./public${pathUrl}`)) {
        fs.mkdirSync(`./public${pathUrl}`)
    }

    fs.writeFileSync(`./public${pathUrl}/index.html`, minify(html, {
        removeComments: true,
    }));
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
    '/instructions/watchers'
];

console.log('\nGENERATING STATIC HTML\n');

for(const route of routes) {
    const renderData = {path: route};
    const rendered = renderHTML(renderData);
    writeHTML(rendered, renderData);
}

console.log('\nDONE\n');
process.exit(0);
