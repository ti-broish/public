import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import Helmet from 'react-helmet';

import styled from 'styled-components';

import { Wrapper, MainContent, GreenLine } from '../Front';
import { VideoWrapper } from './Videos';

import { MOBILE_WIDTH } from '../Style';

import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';
 
config({ ssrFadeout: window.ssr });

const ContentPanel = styled.div`

`;

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
    text-align: center;

    #text1 {
        margin-top: 15vh;
        font-size: 24px;

        @media only screen and (max-width: ${MOBILE_WIDTH}px) {
            margin-top: 10vh;
            font-size: 18px;
        }
    }

    #text2 {
        font-size: 52px;

        @media only screen and (max-width: ${MOBILE_WIDTH}px) {
            font-size: 36px;
            margin-bottom: 40px;
        }
    }

    #text3 {
        font-size: 42px;
        margin-bottom: 0;

        @media only screen and (max-width: ${MOBILE_WIDTH}px) {
            font-size: 36px;
        }
    }

    #text4 {
        font-size: 16px;
        margin-top: 0;
    }

    #text5 {
        font-size: 35px; 
        position: absolute; 
        top: calc(100vh - 180px);
        width: 100%;

        @media only screen and (max-width: ${MOBILE_WIDTH}px) {
            top: calc(100vh - 220px);
        }
    }
`;

const LandingPageText = styled.p`
    text-align: center;
    color: white;
    font-weight: bold;
    text-shadow: 0px 0px 10px black;

    b { font-weight: 900; }
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

export default props => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return ([
        <Helmet>
            <title>Начало | Ти Броиш</title>
            <link rel="canonical" href={"https://tibroish.bg/"} />
            <meta name="description" content={`
                “Ти броиш” е национална кампания, целяща предотврати опитите за измами и манипулации при 
                броенето на гласовете на предстоящите парламентарни избори.
            `}/>
        </Helmet>,
        <LandingPage>
            <Parallax 
                bgImage="/images/sofia-2337926_1920.jpg" 
                bgImageAlt="Народно събрание" 
                strength={200}
            >
            
                <LandingPageOverlay>
                    <Fade down>
                        <div>
                        <LandingPageText id='text1'>
                            Да дадем на <b>България</b> шанс за
                        </LandingPageText>
                        <LandingPageText id='text2'> 
                            <b>ЧЕСТНИ</b> и <b>СВОБОДНИ</b> избори
                        </LandingPageText>
                        <LandingPageText id='text3'>
                            търсим <b>12 000</b> защитници на вота
                        </LandingPageText>
                        <LandingPageText id='text4'>
                            които да следят за коректното преброяване на гласовете в изборния ден
                        </LandingPageText>
                        <Link to='/signup'><HomeButton>Запиши се за застъпник</HomeButton></Link> 
                        </div>
                    </Fade>
                    <LandingPageText id='text5'>
                        Можем да го направим <b>заедно</b>!
                    </LandingPageText>
                </LandingPageOverlay>
            </Parallax>
        </LandingPage>,
        <GreenLine/>,
        <Wrapper>
            <MainContent>
            <h1>Национална кампания “Ти броиш”</h1>
            <hr/>
            <h2>Какво е “Ти броиш”?</h2>
            <p>
                “Ти броиш” е национална кампания, целяща предотврати опитите за измами и манипулации при броенето 
                на гласовете на предстоящите парламентарни избори.
            </p>
            <HomeButtonWrapper>
                <Link to='/about'><HomeButton>Научи повече</HomeButton></Link>
            </HomeButtonWrapper>
            <p>
                За целта търсим 12 000 души – колкото са изборните секции в страната – които да присъстват на 
                броенето на бюлетините в изборния ден, да следят за тяхното честно преброяване и за коректното 
                вписване на резултатите в протоколите.
            </p>
            <hr/>
            <h2>Търсим 12 000 защитници на вота</h2>
            <p>
                За да дадем на България шанс за честни и свободни избори, търсим 12 000 защитници на вота, 
                които да следят за коректното преброяване на гласовете в изборния ден. По един за всяка секция 
                в страната. Ангажимент за няколко часа в края на изборния ден може да реши бъдещето на България 
                за следващите години. Можем да го направим заедно!  
            </p>
            <HomeButtonWrapper>
                <Link to='/signup'><HomeButton>Запиши се за застъпник</HomeButton></Link>
            </HomeButtonWrapper>
            <p>
                Запишете се днес и до няколко дни ще се свържем с Вас, за да Ви въведем в кампанията. 
            </p>
            <hr/>
            <h2>Информация за застъпници</h2>
            <p>
                Защитниците на вота (или т.нар. „застъпници“) имат право да присъстват в изборното помещение 
                и да следи процеса на преброяване на резултатите от гласуването и изготвянето на протокола 
                на секционната избирателна комисия.
            </p>
            <HomeButtonWrapper>
                <Link to='/watchers'><HomeButton>Научи повече</HomeButton></Link>
            </HomeButtonWrapper>
            <p>
                Застъпникът има право - и е задължително и изключително важно - да получи копие от 
                подписания от членовете на СИК протокол с резултатите от гласуването в избирателната 
                секция след приключване на избирателния ден в съответната секция!
            </p>
            <hr/>
            <h2>Видео</h2>
            <VideoWrapper>
                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fdabulgaria.bg%2Fvideos%2F363350401696989%2F&show_text=false&width=560" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </VideoWrapper>
            <HomeButtonWrapper>
                <Link to='/videos'><HomeButton>Виж още видеа</HomeButton></Link>
            </HomeButtonWrapper>
            </MainContent>
        </Wrapper>
    ]);
};