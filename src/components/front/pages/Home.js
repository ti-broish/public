import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import Helmet from 'react-helmet';

import styled from 'styled-components';

import { Wrapper, MainContent, GreenLine } from '../Front';
import { VideoWrapper, YouTubeVideoEmbed } from './Videos';

import { MOBILE_WIDTH } from '../Style';
import './utils.css';

const LandingPage = styled.div`
    background-color: black;

    .react-parallax {
        width: 100%; 
        height: calc(100vh - 60px);

        img { width: auto !important; }
    }
`;

const LandingPageOverlay = styled.div`
    background-color: #0005;
    width: 100%;
    height: 100%;
    height: calc(100vh - 60px);
    position: absolute;
    box-sizing: border-box;
    text-align: center;
    color: white;
    font-weight: bold;
    text-shadow: 0px 0px 10px black;

    b { font-weight: 900; }
    p { margin: 0; }
`;

const TopSection = styled.div`
    position: absolute;
    bottom: 55vh;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;

    p { margin: 20px 0; }

    #text1 { font-size: 24px; }
    #text2 { font-size: 52px; }

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        #text1 { font-size: 16px; }
        #text2 { font-size: 42px; }
    }

    @media only screen and (max-width: ${MOBILE_WIDTH * 0.6}px) {
        #text1 { font-size: 14px; }
        #text2 { font-size: 32px; }
    }
`;

const MiddleSection = styled.div`
    position: absolute;
    width: 100%;
    top: calc(45vh - 60px);
    box-sizing: border-box;
    padding: 0 10px;
    padding-top: 50px;

    a { color: white; }

    #text3 { font-size: 42px; }
    #text4 { font-size: 16px; margin-bottom: 20px; }
    #text5 { font-size: 18px; margin-top: 15px;}
    #text6 { font-size: 48px; margin-top: 5px; }

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        padding-top: 5vh;

        #text3 { font-size: 36px; }
        #text4 { font-size: 14px; }
        #text5 { font-size: 18px; }
        #text6 { font-size: 42px; }
    }

    @media only screen and (max-width: ${MOBILE_WIDTH * 0.6}px) {
        padding-top: 10px;

        #text3 { font-size: 28px; }
        #text4 { font-size: 12px; }
        #text5 { font-size: 18px; }
        #text6 { font-size: 42px; }
    }
`;

const BottomSection = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 0 10px 50px 10px;
    box-sizing: border-box;

    #text5 { font-size: 35px; }

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        padding-bottom: 30px;
        #text5 { font-size: 28px; }
    }

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        padding-bottom: 20px;
        #text5 { font-size: 24px; }
    }
`;

const HomeButton = styled.button`
    border: none;
    color: white;
    background-color: #30cebc;
    padding: 10px 20px;
    font-size: 21px;
    font-family: Montserrat;
    font-weight: bold;
    box-shadow: 0px 0px 10px #444;
    border-radius: 20px;

    &:hover {
        background-color: #38decb;
    }

    &:active { 
        background-color: #2ab9a8;
        box-shadow: 0px 0px 10px #444 inset;
    }
`;

const HomeButtonWrapper = styled.div`
    padding: 20px 0;
    text-align: center;
`;

export const AppBadges = styled.div`
    padding: 20px;
    text-align: center;
    background-color: #eee;
    width: 100%;
    box-sizing: border-box;

    img {
        height: 60px;
        margin: 10px 10px;
    }
`;

export default props => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let metaUrl = "https://tibroish.bg/";
    let metaDescription = `
        „Ти броиш“ е национална кампания, целяща да предотврати опитите за измами и манипулации при 
        броенето на гласовете на предстоящите парламентарни избори.
    `;
    let metaTitle = "Начало | Ти Броиш";

    return ([
        <Helmet>
            <title>{metaTitle}</title>
            <link rel="canonical" href={metaUrl} />
            <meta name="description" content={metaDescription}/>
            <meta property="og:url" content={metaUrl}/>
            <meta property="og:title" content={metaTitle}/>
            <meta property="og:description" content={metaDescription}/>
            <meta property="og:image" content={"/brand/og_image.png"}/>
            <meta property="og:image:width" content={"1200"}/>
            <meta property="og:image:height" content={"628"}/>
        </Helmet>,
        <AppBadges>
            <div style={{maxWidth: '800px', margin: '0 auto'}}> 
                <h2 style={{float: 'left'}}>Към Ти броиш <em style={{color: 'red'}}>Live</em></h2>
                <a href="https://play.google.com/store/apps/details?id=bg.dabulgaria.tibroish.stream&hl=bg">
                    <img src='/google-play-badge.png'/>
                </a>
                <a>
                    <img src='/apple-badge.svg'/>
                </a>
            </div>
        </AppBadges>,
        <div className="lg-only">
            <iframe 
                width={800} 
                height={650} 
                style={{border: 'none', display: 'block', margin: '50px auto'}} 
                loading="lazy" 
                allowFullScreen 
                src="https://tibroish.bg/results/parliament-2021-04-04/embed/mini-results?mapOnly=true&linkToMainSite=true&homepage=true"
            ></iframe>
        </div>,
        <GreenLine style={{height: '15px'}}/>,
        <AppBadges>
            <a href="https://play.google.com/store/apps/details?id=bg.dabulgaria.tibroish&hl=bg">
                <img src='/google-play-badge.png'/>
            </a>
            <a href="https://apps.apple.com/us/app/ti-broish/id1555255776">
                <img src='/apple-badge.svg'/>
            </a>
            <a href="https://appgallery.huawei.com/#/app/C103937827">
                <img src='/huawei-badge.png'/>
            </a>
        </AppBadges>,
        <Wrapper>
            <MainContent>
            <h1>Национална кампания „Ти броиш“</h1>
            <GreenLine style={{height: '5px'}}/>
            <h2>Последни сигнали</h2>
            <ol style={{listStyle: 'none', padding: 0}}>
                <li>
                    <p><strong>
                        Проблем с машината. Преустановено е машинното гласуване.
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработва се</dd>
                        <dt>Секция:</dt>
                        <dd>0040400041</dd>
                        <dt>Населено място:</dt>
                        <dd>Велико Търново</dd>
                        <dt>Локация:</dt>
                        <dd>Езикова гимназия "Проф.д-р А. Златаров"</dd>
                    </dl>
                    <GreenLine style={{height: '2px'}}/>
                </li>
                <li>
                    <p><strong>
                    Член на СИК без инструктаж раздава и приема бюлетините. Едва след като 10-15 бюлетини бяха пуснати се установи, че не са положени втори печати на бюлетините. Имаше предложение тези печати да бъдат поставени впоследствие при отварянето на кутиите.
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработва се</dd>
                        <dt>Секция:</dt>
                        <dd>0244606021</dd>
                        <dt>Населено място:</dt>
                        <dd>София</dd>
                        <dt>Локация:</dt>
                        <dd>143 ОУ "Георги Бенковски" ул. Тодорини кукли № 9</dd>
                    </dl>
                    <GreenLine style={{height: '2px'}}/>
                </li>
                <li>
                    <p><strong>
                        Членовете на комисията не поставиха печат на бюлетината преди гласуването, нито след това! След направена забележка от мен бяха поставени два печата едновремено след гласуването. Отговора беше, че не знаели. Преди мен имаше поне 10 бюлетини.
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Изпратен сигнал до РИК</dd>
                        <dt>Секция:</dt>
                        <dd>0234610002</dd>
                        <dt>Населено място:</dt>
                        <dd>София</dd>
                        <dt>Локация:</dt>
                        <dd>41 ОУ "СВ.ПАТР.ЕВТИМИЙ", УЛ. "ЦАР САМУИЛ" № 24</dd>
                    </dl>
                    <GreenLine style={{height: '2px'}}/>
                </li>
                <li>
                    <p><strong>
                        Машината за машинно гласуване в секцията не работи. Хората не желаят да гласуват с хартиена бюлетина. Искат възможност да гласуват в съседната 55-а секция или друго разрешение на техния казус.Към кого да се обърнат
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Изпратено разяснения на запитващия.</dd>
                        <dt>Секция:</dt>
                        <dd>0234609056</dd>
                        <dt>Населено място:</dt>
                        <dd>София</dd>
                        <dt>Локация:</dt>
                        <dd>Център за специалнаобразователна подкрепа ул. "Русалийски проход", 12</dd>
                    </dl>
                    <GreenLine style={{height: '2px'}}/>
                </li>
                <li>
                    <p><strong>
                        Изборният процес все още не е започнал. В момента вече е 07:08 ч.
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Изпратен сигнал до РИК</dd>
                        <dt>Секция:</dt>
                        <dd>0273100079</dd>
                        <dt>Населено място:</dt>
                        <dd>Стара Загора</dd>
                        <dt>Локация:</dt>
                        <dd>Клуб на пенсионера, ул. "Августа Траяна" №3</dd>
                    </dl>
                </li>
            </ol>
            <GreenLine style={{height: '5px'}}/>
            <br />
            <h2>Какво е „Ти броиш“?</h2>
            <p>
                „Ти броиш“ е национална кампания, целяща да предотврати опитите за измами и манипулации при броенето 
                на гласовете на предстоящите парламентарни избори.
            </p>
            <p>
                За целта търсим 12 000 души – колкото са изборните секции в страната – които да присъстват на 
                броенето на бюлетините в изборния ден, да следят за тяхното честно преброяване и за коректното 
                вписване на резултатите в протоколите.
            </p>
            <HomeButtonWrapper>
                <Link to='/about'><HomeButton>Научи повече</HomeButton></Link>
            </HomeButtonWrapper>
            <hr/>
            <h2>Търсим 12 000 защитници на вота</h2>
            <p>
                За да дадем на България шанс за честни и свободни избори, търсим 12 000 защитници на вота, 
                които да следят за коректното преброяване на всички гласове в изборния ден. По един за всяка секция 
                в страната. Ангажимент за няколко часа в края на изборния ден може да реши бъдещето на България 
                за следващите години. Можем да го направим заедно!  
            </p>
            <p>
                Запишете се днес и до няколко дни ще се свържем с Вас, за да Ви въведем в кампанията. 
            </p>
            <HomeButtonWrapper>
                <Link to='/signup'><HomeButton>Запиши се тук</HomeButton></Link>
            </HomeButtonWrapper>
            <hr/>
            <h2>Информация за застъпници</h2>
            <p>
                Защитниците на вота (или т.нар. „застъпници“) имат право да присъстват в изборното помещение 
                и да следи процеса на преброяване на резултатите от гласуването и изготвянето на протокола 
                на секционната избирателна комисия.
            </p>
            <p>
                Застъпникът има право - и е задължително и изключително важно - да получи копие от 
                подписания от членовете на СИК протокол с резултатите от гласуването в избирателната 
                секция след приключване на избирателния ден в съответната секция!
            </p>
            <HomeButtonWrapper>
                <Link to='/news'><HomeButton>Научи повече</HomeButton></Link>
            </HomeButtonWrapper>
            <hr/>
            <h2>Видеа от кампанията</h2>
            <YouTubeVideoEmbed videoId={"J_B0525_hcs"} />
            <HomeButtonWrapper>
                <Link to='/videos'><HomeButton>Виж още видеа</HomeButton></Link>
            </HomeButtonWrapper>
            </MainContent>
        </Wrapper>
    ]);
};
