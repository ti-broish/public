import React from 'react';

import { Link } from 'react-router-dom';
import Logo from './Logo';

export default props => {
    return ([
        <div className='header-compensator'/>,
        <header>
            <div className='wrapper'>
                <Link to='/'>
                    <Logo fill={'#fff'}/>
                    <span className='app-title'>ти броиш</span>
                </Link>
                <h2 style={{float: 'right', margin: '8px 0'}}>Парламентарни избори 2017</h2>
            </div>
        </header>
    ])
};