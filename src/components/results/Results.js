import React, { useState, useEffect } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

export default props => {
    return(        
        <Switch>
            {/*<Route path='/results/:election' component={Election}/>*/}
            <Route exact path='/' component={ResultList}/>
            <Redirect to='/'/>
        </Switch>
    );
};