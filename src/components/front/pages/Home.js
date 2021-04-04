import React, { useEffect, useRef } from 'react';

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

const IframeContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 650px;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border: none;
    }
`

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

const setHeightOfIframeContainer = iframeContainerElem => {
    if (iframeContainerElem.current) {
        let iframeContainerWidth = iframeContainerElem.current.offsetWidth;
        if (iframeContainerWidth < 800) {
            let iframeContainerHeight = iframeContainerWidth / 1.08;
            iframeContainerElem.current.style.height = `${iframeContainerHeight}px`;
        }
    }
}

export default props => {
    const iframeContainerElem = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
        setHeightOfIframeContainer(iframeContainerElem);

        window.onresize = () => {
            setHeightOfIframeContainer(iframeContainerElem);
        }

    }, [iframeContainerElem]);

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
        <IframeContainer ref={iframeContainerElem}>
            <iframe 
                loading="lazy" 
                allowFullScreen 
                src="https://tibroish.bg/results/parliament-2021-04-04/embed/mini-results?mapOnly=true&linkToMainSite=true&homepage=true"
            ></iframe>
        </IframeContainer>,
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
                            Преференциите при машинно гласуване са объркани. Сега е 09:56 и никой от РИК не се е обадил да спрат
                            машинното гласуване, а и тези тук не се обаждат на РИК
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработен</dd>
                        <dt>Секция:</dt>
                        <dd>040400132</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. Килифарево</dd>
                        <dt>Локация:</dt>
                        <dd>ОУ Неофит Рилски</dd>
                    </dl>
                    <GreenLine style={{height: '2px'}}/>
                </li>
                <li>
                    <p><strong>
                            В секция 192700078 не се отбелязва в графа забележки, че избирателят е гласувал машинно. Неспазване на
                            Чл.268, ал.5 от ИК.
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработен</dd>
                        <dt>Секция:</dt>
                        <dd>192700078</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. Русе</dd>
                        <dt>Локация:</dt>
                        <dd>кв. "Дружба - 3", ул. "Илинден" №5, ДГ "Снежанка"</dd>
                    </dl>
                    <GreenLine style={{height: '2px'}}/>
                </li>
                <li>
                    <p><strong>
                            Подадох заявление за заснемане на преброяването без заснемане на лица и гласове. Получих отказ. Прилагам
                            решение на СИК.
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработен</dd>
                        <dt>Секция:</dt>
                        <dd>234615076</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. София</dd>
                        <dt>Локация:</dt>
                        <dd>ж.к. Младост 3 зад блок 318 - 81 СОУ</dd>
                    </dl>
                    <GreenLine style={{height: '2px'}}/>
                </li>
                <li>
                    <p><strong>
                            Капачето от което има достъп до usb порт не беше пломбиран в 3 от 4те секции в 1во ОУ. Помолих да пломбират
                            всичките пред мен
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработен</dd>
                        <dt>Секция:</dt>
                        <dd>122900004</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. Монтана</dd>
                        <dt>Локация:</dt>
                        <dd>бул. Трети март 23 (Първо ОУ "Св. Св. Кирил и Методий")</dd>
                    </dl>
                    <GreenLine style={{height: '2px'}}/>
                </li>
                <li>
                    <p><strong>
                            Машината за гласуване не беше включена и се образуваше опашка.
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработва се</dd>
                        <dt>Секция:</dt>
                        <dd>234608003</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. София</dd>
                        <dt>Локация:</dt>
                        <dd>ИНТЕРПРЕД СТЦ бул. "Драган Цанков" №36</dd>
                    </dl>
                    <GreenLine style={{height: '2px'}}/>
                </li>
                <li>
                    <p><strong>
                            Машината за електронно гласуване работи много бавно.
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработен</dd>
                        <dt>Секция:</dt>
                        <dd>030604336</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. Варна</dd>
                        <dt>Локация:</dt>
                        <dd>СУ " П.К. Яворов ", ж.к. "Вл. Варненчик" III м. р.</dd>
                    </dl>
                    <GreenLine style={{height: '2px'}}/>
                </li>
                <li>
                    <p><strong>
                            Член на СИК обяснява "какво трябва да се натисне" на екрана на машината за гласуване на възрастни хора и
                            нарушава тайната на вота.
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработва се</dd>
                        <dt>Секция:</dt>
                        <dd>021700022</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. Поморие</dd>
                        <dt>Локация:</dt>
                        <dd>ПГТ ”Алеко Константинов”</dd>
                    </dl>
                    <GreenLine style={{height: '2px'}}/>
                </li>
                <li>
                    <p><strong>
                            Здравейте, казвам се Николина Петрова и това е вторият ми сигнал за деня. Няколко пъти наблюдавам, че влизат
                            хора с храна и напитки, които на висок глас питат членовете на СИК, цитирам:"Кой е от ВМРО?". Досега никой
                            не е съобщил, че е от ВМРО. Притесняваме ме факта, че това се изговаря на висок тон пред избирателите, които
                            са в секцията.
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработва се</dd>
                        <dt>Секция:</dt>
                        <dd>254619007</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. София</dd>
                        <dt>Локация:</dt>
                        <dd>137 СУ "Ангел Кънчев", бул. "Европа" №135, ж.к. Люлин I</dd>
                    </dl>
                    <GreenLine style={{height: '2px'}}/>
                </li>
                <li>
                    <p><strong>
                            Кметът, Емил Алексиев, стои пред секцията и агитира хората да гласуват за определена партия.
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработен</dd>
                        <dt>Секция:</dt>
                        <dd>254621029</dd>
                        <dt>Населено място:</dt>
                        <dd>с. Войнеговци</dd>
                        <dt>Локация:</dt>
                        <dd>Читалището- ул. Спортист № 14</dd>
                    </dl>
                    <GreenLine style={{height: '2px'}}/>
                </li>
                <li>
                    <p><strong>
                            Кметът, Валентин Павлов, стои пред двете секции на училището и агитира хората да гласуват за определена
                            партия.
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработен</dd>
                        <dt>Секция:</dt>
                        <dd>254621037</dd>
                        <dt>Населено място:</dt>
                        <dd>с. Негован</dd>
                        <dt>Локация:</dt>
                        <dd>176 ОУ ул. Могилата № 10</dd>
                    </dl>
                    <GreenLine style={{height: '2px'}}/>
                </li>
                <li>
                    <p><strong>
                            Една от жените, които са редом до мен, е без бадж, има пълномощно от Републиканци за България.
                            Председателката на комисията просто я попита за бадж и нищо не последва.
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработен</dd>
                        <dt>Секция:</dt>
                        <dd>270700003</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. Гълъбово</dd>
                        <dt>Локация:</dt>
                        <dd>Дом на културата “Енергетик”, ул. "Тунджа" №1</dd>
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
                За целта сме организирали 12 000 души – колкото са изборните секции в страната – които да присъстват на 
                броенето на бюлетините в изборния ден, да следят за тяхното честно преброяване и за коректното 
                вписване на резултатите в протоколите.
            </p>
            <HomeButtonWrapper>
                <Link to='/about'><HomeButton>Научи повече</HomeButton></Link>
            </HomeButtonWrapper>
            <hr/>
            <h2>12 000 защитници на вота</h2>
            <p>
                За да дадем на България шанс за честни и свободни избори, сме организирали 12 000 защитници на вота, 
                които да следят за коректното преброяване на всички гласове в изборния ден. По един за всяка секция 
                в страната. Ангажимент за няколко часа в края на изборния ден може да реши бъдещето на България 
                за следващите години. Можем да го направим заедно!  
            </p>
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
