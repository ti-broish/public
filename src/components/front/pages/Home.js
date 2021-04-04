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

        window.addEventListener('resize', () => {
            setHeightOfIframeContainer(iframeContainerElem);
        })

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
            <h2>Брой сигнали: през приложениято - 612 бр.; по телефон - 289 бр.</h2>
            <GreenLine style={{height: '5px'}}/>
            <h2>Последни сигнали за нередности</h2>
            <ol style={{listStyle: 'none', padding: 0}}>
                <li>
                    <p><strong>
                        Беше даден достъп до документацията на секцията и комисията на лице, което отказа да се легитимира. Извикана е полиция за идентифициране на лицето. Сигнал до РИК изпратен
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработен</dd>
                        <dt>Секция:</dt>
                        <dd>162201083</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. Пловдив</dd>
                        <dt>Локация:</dt>
                        <dd>СУ Л.Каравелов-сграда 1 ул. Бранислав Велешки №2</dd>
                    </dl>
<p><strong>
                        От началото на изборния ден членовете на комисията не изискват от избирателите да свалят за малко маските си, за да се легитимират
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработен</dd>
                        <dt>Секция:</dt>
                        <dd>030602096</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. Варна</dd>
                        <dt>Локация:</dt>
                        <dd>Народно читалище Васил Левски - 1945, ул. Лоза №3</dd>
                    </dl>
<p><strong>
                        Пред входа на секцията няма информация, че в секцията има машина и че може и машинно да се гласува.
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработва се</dd>
                        <dt>Секция:</dt>
                        <dd>031400008</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. Девня</dd>
                        <dt>Локация:</dt>
                        <dd>Кв.Девня, бул. Съединение №165 (Народно читалище Просвета)</dd>
                    </dl>
<p><strong>
                        Не се изисква сваляне на маската, за разпознаване на желаещия да гласува и за сравняване със снимката от личната карта.
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработва се</dd>
                        <dt>Секция:</dt>
                        <dd>234609006</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. София</dd>
                        <dt>Локация:</dt>
                        <dd>120 ОУГ.С.Раковски, пл. Папа Йоан Павел, 7</dd>
                    </dl>
<p><strong>
                        Спряно е машинното гласуване. Това се обяснява устно, причината несъответствие. Имало нареждане от РИК. Подаден сигнал до ЦИК
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработен</dd>
                        <dt>Секция:</dt>
                        <dd>082800029</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. Добрич</dd>
                        <dt>Локация:</dt>
                        <dd>ОУ Христо Ботев ул. Цар Самуил № 14</dd>
                    </dl>
<p><strong>
                        Членовете на изборната секция не питат гражданите дали искат машинно или ръчно, а целенасочено ги насочват към машината. Изпратен сигнал до РИК
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработен</dd>
                        <dt>Секция:</dt>
                        <dd>254624007</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. Банкя</dd>
                        <dt>Локация:</dt>
                        <dd>Помещение към трафопост, кв. Изгрев, ул. Иванянско шосе</dd>
                    </dl>
<p><strong>
                        Машината за гласуване не работи вследствие употреба на дезинфектант, доставен заедно с нея. Тъчскрийнът не реагира. Повече от 3 минути гласоподавател се опитва и се наложи да гласува с хартиена бюлетина. Подаден сигнал по имейл до РИК
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработен</dd>
                        <dt>Секция:</dt>
                        <dd>152400106</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. Плевен</dd>
                        <dt>Локация:</dt>
                        <dd>ул. „Васил Левски” № 155, ДКТ „Иван Радоев”</dd>
                    </dl>
<p><strong>
                        Коментар за секцията: Дойдохме в 09:00 и чакахме един час. Тези, които дойдоха в 9:30 чакат час и половина
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработен</dd>
                        <dt>Секция:</dt>
                        <dd>321300102</dd>
                        <dt>Населено място:</dt>
                        <dd>Мюнхен</dd>
                        <dt>Локация:</dt>
                        <dd>Edelweisstrase 10</dd>
                    </dl>
<p><strong>
                        Бюлетините от машинното гласуване се пускат в урната на хартиеното гласуване. Уведомени в РИК.
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработен</dd>
                        <dt>Секция:</dt>
                        <dd>244601042</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. София</dd>
                        <dt>Локация:</dt>
                        <dd>12 СОУ - ул. Цар Иван Асен ІІ № 72</dd>
                    </dl>
<p><strong>
                        В стаята има член на сик с червена маска с надпис С грижа за хората (слоган на БСП)
                    </strong></p>
                    <dl>
                        <dt>Статус:</dt>
                        <dd>Обработва се</dd>
                        <dt>Секция:</dt>
                        <dd>030602112</dd>
                        <dt>Населено място:</dt>
                        <dd>гр. Варна</dd>
                        <dt>Локация:</dt>
                        <dd>Икономически университет (II корпус), ул. Евлоги Георгиев №24</dd>
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
