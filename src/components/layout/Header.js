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
            </div>
        </header>
    ])
};