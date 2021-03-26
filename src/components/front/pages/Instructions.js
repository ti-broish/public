import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import MobileAppInstructions from './instructions/MobileAppInstructions';
import WatcherInstructions from './instructions/WatcherInstructions';
import WhatToWatchForInstructions from './instructions/WhatToWatchForInstructions';
import InstructionsIndex from './instructions/InstructionsIndex';

export default props => {
    return(
        <Switch>
            <Route path='/instructions/mobile-app' component={MobileAppInstructions}/>
            <Route path='/instructions/watchers' component={WatcherInstructions}/>
            <Route path='/instructions/what-to-watch-for' component={WhatToWatchForInstructions}/>
            <Route exact path='/instructions' component={InstructionsIndex}/>
            <Redirect to='/instructions'/>
        </Switch>
    );
};
