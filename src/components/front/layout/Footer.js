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
                        <li><Link to='/'>Начало</Link></li>
                        <li><Link to='/about'>Kампанията</Link></li>
                        <li><Link to='/signup'>Запиши се</Link></li>
                        <li><Link to='/news'>Актуална информация</Link></li>
                        <li><Link to='/videos'>Видео</Link></li>
                        <li><Link to='/privacy-notice'>Декларация за поверителност</Link></li>         
                    </ul>
                </FooterColumn>
                <FooterColumn>
                    <h2><FontAwesomeIcon icon={faFacebookSquare}/> Facebook</h2>
                    <div style={{maxWidth: '100%'}} dangerouslySetInnerHTML={{__html: `
                        <div class="fb-page" data-href="https://www.facebook.com/tibroish/" data-tabs="timeline" data-width="" data-height="200px" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/tibroish/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/tibroish/">Ти броиш</a></blockquote></div>
                    `}}/>
                </FooterColumn>
            </FooterColumns>
            <Copyright>„Демократична България - обединение” © 2020</Copyright>
        </FooterStyle>
    ])
};
