import React from 'react';

import { Link } from 'react-router-dom';
import Logo from './Logo';

import { Wrapper } from '../App';

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

export default props => {
    return ([
        <HeaderCompensator/>,
        <HeaderDiv>
            <Wrapper>
                <Link to='/'>
                    <Logo fill={'#fff'}/>
                    <AppTitle>ти броиш</AppTitle>
                </Link>
                <h2>Парламентарни избори 2017</h2>
            </Wrapper>
        </HeaderDiv>
    ])
};