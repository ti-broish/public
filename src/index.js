import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { loadableReady } from '@loadable/component';

loadableReady(() => {
    if (typeof document !== 'undefined') {
        const target = document.getElementById('root');
    
        if(target.hasChildNodes())
            ReactDOM.hydrate(<App/>, target);
        else
            ReactDOM.render(<App/>, target);
    }
});