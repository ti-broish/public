import React, { useState, useEffect } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import Election from './Election.js';
import ResultList from './ResultList.js';

export default props => {
    return(        
        <Switch>
            <Route path='/results/:election' component={Election}/>
            <Route exact path='/results' component={ResultList}/>
            <Redirect to='/results'/>
        </Switch>
    );
};