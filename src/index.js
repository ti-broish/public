import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { loadableReady } from '@loadable/component';

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

loadableReady(() => {
    if (typeof document !== 'undefined') {
        const target = document.getElementById('root');
        const render = Component => {
            // Create a check for child nodes to decide if we should hydrate or render on first load
            // But since we are dev/HMR, we can just start with hydrate or render logic checking children
            if (target.hasChildNodes() && !module.hot) {
                ReactDOM.hydrate(<Component />, target);
            } else {
                ReactDOM.render(<Component />, target);
            }
        }

        render(App);

        if (module.hot) {
            module.hot.accept('./components/App', () => {
                const NextApp = require('./components/App').default;
                render(NextApp);
            });
        }
    }
});