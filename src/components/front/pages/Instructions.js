import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import MobileAppInstructions from './instructions/MobileAppInstructions';
import HowToValidate from './instructions/HowToValidate';
import WatcherInstructions from './instructions/WatcherInstructions';
import WhatToWatchForInstructions from './instructions/WhatToWatchForInstructions';
import InstructionsIndex from './instructions/InstructionsIndex';

export default props => {
    return(
        <Switch>
            <Route path='/instructions/what-to-watch-for' component={WhatToWatchForInstructions}/>
            <Route path='/instructions/mobile-app' component={MobileAppInstructions}/>
            <Route path='/instructions/how-to-validate' component={HowToValidate}/>
            <Route path='/instructions/watchers' component={WatcherInstructions}/>
            <Route exact path='/instructions' component={InstructionsIndex}/>
            <Redirect to='/instructions'/>
        </Switch>
    );
};
