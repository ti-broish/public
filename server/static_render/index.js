const { renderHTML, writeHTML } = require('./renderStatic');

const routes = [
    '/',
    '/about',
    '/signup',
    '/watchers',
    '/videos',
    '/privacy-notice',
    '/results'
];

console.log('\nGENERATING STATIC HTML\n');

for(const route of routes) {
    const staticProps = {path: route};
    const rendered = renderHTML(staticProps);
    writeHTML(rendered, staticProps);
}

console.log('\nDONE\n');
process.exit(0);