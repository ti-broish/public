import React from 'react';

import { Link } from 'react-router-dom';
import Logo from './Logo';

import { Wrapper } from '../Results';

import styled from 'styled-components';

const HeaderCompensator = styled.div`
    height: 60px;
`;

const HeaderDiv = styled.header`
    background-color: #00D5BD;
    color: white;
    padding: 8px 0;
    height: 60px;
    position: fixed;
    box-sizing: border-box;
    top: 0;
    width: 100%;
    z-index: 20;

    a {
        margin: 0;
        svg { height: 45px; }
    }

    h2 {
        float: right;
        margin: 8px 0;
    }
`;

const AppTitle = styled.span`
    vertical-align: top;
    display: inline-block;
    color: white;
    font-size: 34px;
`;

const LogoImage = styled.img`
    height: 40px;
`;

export default props => {
    return (
        <div>
            <HeaderCompensator/>
            <HeaderDiv>
                <Wrapper style={{margin: '0 auto'}}>
                    <Link to='/'>
                        <LogoImage src='/brand/logo_horizontal_white.png?v=2'/>
                    </Link>
                    <h2>{props.title}</h2>
                </Wrapper>
            </HeaderDiv>
        </div>
    );
};