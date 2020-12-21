import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { slide as Menu } from 'react-burger-menu';

import { Wrapper } from '../Front';

import styled from 'styled-components';

import { MOBILE_WIDTH } from '../Style';

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

    @media only screen and (max-width: 835px) {
        font-size: 15px;
        a { padding: 7px;}
    }

    @media only screen and (max-width: 790px) {
        font-size: 14px;
        a { padding: 5px;}
    }

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        display: none;
    }
`;

const MobileMenuButton = styled.button`
    float: right;
    border: none;
    background: none;
    color: white;
    font-size: 35px;
    display: none;

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        display: block;
    }
`;

const MobileNavigation = styled.div`
    display: none;

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        display: block;
    }

    .bm-menu {
        background-color: #20a898;
    }

    .bm-burger-button { display: none; }
`;

const MobileNavMenu = styled.div`
    background-color: #20a898;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;

    a {
        color: white;
        width: 100%;
        display: block;
        font-size: 18px;
        text-decoration: none;
        font-weight: bold;
        padding: 10px 0;
    }
`;

export default props => {
    const [menuOpen, setMenuOpen] = useState(false);

    return([
        <HeaderCompensator/>,
        <HeaderStyle>
            <Wrapper>
                <Link to='/'>
                    <LogoImage src='/brand/logo_horizontal_white.png?v=2'/>
                </Link>
                <Navigation>
                    <Link to='/about'>Kампанията</Link>
                    <Link to='/signup'>Запиши се</Link>
                    <Link to='/news'>Актуална информация</Link>
                    <Link to='/videos'>Видео</Link>
                </Navigation>
                <MobileMenuButton onClick={()=>setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={faBars} />
                </MobileMenuButton>
            </Wrapper>
        </HeaderStyle>,
        <MobileNavigation>
            <Menu right isOpen={menuOpen} onStateChange={(state)=> {if(state.isOpen !== menuOpen) setMenuOpen(state.isOpen);}}>
                <MobileNavMenu>
                    <Link to='/' onClick={()=>setMenuOpen(false)}>Начало</Link>
                    <Link to='/about' onClick={()=>setMenuOpen(false)}>Kампанията</Link>
                    <Link to='/signup' onClick={()=>setMenuOpen(false)}>Запиши се</Link>
                    <Link to='/news' onClick={()=>setMenuOpen(false)}>Актуална информация</Link>
                    <Link to='/videos' onClick={()=>setMenuOpen(false)}>Видео</Link>
                    <Link to='/privacy-notice' onClick={()=>setMenuOpen(false)}>Декларация за поверителност</Link>
                </MobileNavMenu>
            </Menu>
        </MobileNavigation>
    ])
};
