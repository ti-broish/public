import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import path from 'path';
import Helmet from 'react-helmet';
import App from './src/components/App.js';

import { ServerStyleSheet } from 'styled-components';

export default renderData => {
    const sheet = new ServerStyleSheet();
    const statsFile = path.resolve('./public/bundles/loadable-stats.json')
    const extractor = new ChunkExtractor({ statsFile });

    try {
        const html = ReactDOMServer.renderToString(
            sheet.collectStyles(extractor.collectChunks(<App renderData={renderData}/>))
        );
        const headTags = Helmet.renderStatic();
        const scriptTags = extractor.getScriptTags();
        const linkTags = extractor.getLinkTags();
        const styleTags = sheet.getStyleTags();

        return {
            html: html,
            headTags: headTags,
            scriptTags: scriptTags,
            linkTags: linkTags,
            styleTags: styleTags,
        };
    } catch (error) {
        console.error(error);
    } finally {
        sheet.seal();
    }
};