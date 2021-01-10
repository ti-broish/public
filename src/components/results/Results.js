import React, { useState, useEffect } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import Election from './Election.js';
import ResultList from './ResultList.js';

import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 900px;
    margin: 20px auto 50px auto;
`;

export default props => {
    return(        
        <Switch>
            <Route path='/results/:election' component={Election}/>
            <Route exact path='/results' component={ResultList}/>
            <Redirect to='/results'/>
        </Switch>
    );
};