import React from 'react';

import { Link } from 'react-router-dom';
import { FacebookProvider, Page } from 'react-facebook';

import styled from 'styled-components';

import { GreenLine } from '../Front.js';

const FooterStyle = styled.footer`
    background-color: #eee;
    
    
`;

const FooterColumns = styled.div`
    padding: 50px 0;
    max-width: 900px;
    margin: 0 auto;
`;

const FooterColumn = styled.div`
    width: calc(100% / 3);
    width: calc(100% / 3);
    display: inline-block;
    vertical-align: top;
`;

const Copyright = styled.div`
    background-color: #bbb;
    color: white;
    text-align: center;
    width: 100%;
    padding: 5px 0;
    font-weight: bold;
`;

export default props => {
    return([
        <GreenLine/>,
        <FooterStyle>
            <FooterColumns>
                <FooterColumn>
                    <ul>
                        <li><Link to='/'>Начало</Link></li>
                        <li><Link to='/about'>Kампанията</Link></li>
                        <li><Link to='/signup'>Запиши се</Link></li>
                        <li><Link to='/watchers'>Застъпници</Link></li>
                        <li><Link to='/videos'>Видео</Link></li>
                        <li><Link to='/privacy-notice'>Декларация за поверителност</Link></li>         
                    </ul>
                </FooterColumn>
                <FooterColumn>
                    <ul>
                        <li>Имейл: team@dabulgaria.bg</li>
                        <li>Адрес: гр. София, 1164</li>
                        <li>бул. „Драган Цанков“</li>
                        <li>12-16, ет. 2, ап. 7</li>
                    </ul>
                </FooterColumn>
                <FooterColumn>
                    {/*
                    <FacebookProvider appId='0'>
                        <Page href="https://www.facebook.com/tibroish/" tabs="timeline" />
                    </FacebookProvider>
                    */}
                </FooterColumn>
            </FooterColumns>
            <Copyright>ПП „Движение Да България” © 2020</Copyright>
        </FooterStyle>
    ])
};