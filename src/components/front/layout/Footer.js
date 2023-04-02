import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { GreenLine } from '../Front.js';

import { MOBILE_WIDTH } from '../Style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faSitemap, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

const FooterStyle = styled.footer`
    background-color: #eee;
    
    
`;

const FooterColumns = styled.div`
    padding: 50px 0;
    max-width: 900px;
    margin: 0 auto;

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        padding: 20px 0;
    }
`;

const FooterColumn = styled.div`
    width: calc(100% / 3);
    display: inline-block;
    vertical-align: top;
    padding: 0 20px;
    box-sizing: border-box;
    color: #333;

    ul {
        list-style: none;
        padding: 0;
    }

    a {
        color: #333;
        margin: 10px 0;
        display: block;
    }

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        width: 100%;
        padding-bottom: 20px;
    }
`;

const Copyright = styled.div`
    background-color: #666;
    color: white;
    text-align: center;
    width: 100%;
    padding: 20px 0 30px 0;
    font-weight: bold;
`;

const FooterAppBadges = styled.div`
    text-align: center;
    
    img {
        width: 80%;
    }

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        img {
            height: 80px;
            width: unset;
        }
    }
`;

export default props => {
    return([
        <GreenLine/>,
        <FooterStyle>
            <FooterColumns>
                <FooterColumn>
                    <h2><FontAwesomeIcon icon={faAddressBook}/> Контакти</h2>
                    <p>
                        <b>Демократична България – обединение</b>
                    </p>
                    <p>
                        <b><FontAwesomeIcon icon={faEnvelope}/> Имейл: </b>
                        <a href='mailto:team@tibroish.bg'>team@tibroish.bg</a>
                    </p>
                    <p>
                        <b><FontAwesomeIcon icon={faMapMarkerAlt}/> Адрес: </b> <br/>
                        гр. София, 1164 <br/>
                        бул. „Драган Цанков“ <br/>
                        12-16, ет. 2, ап. 7
                    </p>
                </FooterColumn>
                <FooterColumn>
                    <h2><FontAwesomeIcon icon={faSitemap}/> Карта на сайта</h2>
                    <ul>
                        <li><a href='/results/parliament-2023-04-02/submit'>Начало</a></li>
                        {/*<li><Link to='/about'>Kампанията</Link></li>*/}
                        <li><a href="/results/parliament-2023-04-02/protocol/new">Изпрати протокол</a></li>
                        <li><a href="/results/parliament-2023-04-02/violation/new">Подай сигнал</a></li>
                        <li><Link to='/instructions'>Инструкции</Link></li> 
                        <li><a href="/results/parliament-2023-04-02">Карта</a></li>
                        {/*<li><Link to='/videos'>Видео</Link></li>*/}
                        {/*<li><Link to='/news'>Актуална информация</Link></li>*/}
                        <li><Link to='/privacy-notice'>Декларация за поверителност</Link></li>   
                        {/*<li><Link to='/ti-glasuvash'>Ти Гласуваш!</Link></li>*/}
                    </ul>
                </FooterColumn>
                <FooterColumn>
                    <h3>
                        <FontAwesomeIcon icon={faFacebookSquare}/>
                        &nbsp;
                        <a href='https://www.facebook.com/tibroish/' style={{display: 'inline'}} target='_blank' rel='noopener noreferrer nofollow'>Facebook</a>
                    </h3>
                    <FooterAppBadges>
                        <a href="https://play.google.com/store/apps/details?id=bg.dabulgaria.tibroish&hl=bg">
                            <img src='/google-play-badge.png'/>
                        </a>
                        <a href="https://apps.apple.com/us/app/ti-broish/id1555255776">
                            <img src='/apple-badge.svg'/>
                        </a>
                        <a href="https://appgallery.huawei.com/#/app/C103937827">
                            <img src='/huawei-badge.png'/>
                        </a>
                    </FooterAppBadges>
                </FooterColumn>
            </FooterColumns>
            <Copyright>„Демократична България - обединение“ &copy; {new Date().getFullYear()}</Copyright>
        </FooterStyle>
    ])
};
