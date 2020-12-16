import React from 'react';

import { Link } from 'react-router-dom';

import { Wrapper } from '../Front';

import styled from 'styled-components';

const HeaderCompensator = styled.div`
    height: 60px;
`;

const HeaderStyle = styled.header`
    height: 60px;    
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 20;
    background-color: #38decb;
    padding: 10px;
    box-sizing: border-box;
`;

const LogoImage = styled.img`
    height: 40px;
`;

const Navigation = styled.nav`
    float: right;
    font-weight: bold;
    padding-top: 10px;

    a {
        color: white;
        text-decoration: none;
        padding: 10px;
        //margin-left: 15px;

        &:hover {
            color: #eee;
        }
    }
`;

export default props => {
    return([
        <HeaderCompensator/>,
        <HeaderStyle>
            <Wrapper>
                <Link to='/'>
                    <LogoImage src='/brand/logo_horizontal_white.png'/>
                </Link>
                <Navigation>
                    <Link to='/about'>Kампанията</Link>
                    <Link to='/signup'>Запиши се</Link>
                    <Link to='/watchers'>Застъпници</Link>
                    <Link to='/videos'>Видео</Link>
                </Navigation>
            </Wrapper>
        </HeaderStyle>
    ])
};