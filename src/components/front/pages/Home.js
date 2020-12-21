import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import Helmet from 'react-helmet';

import styled from 'styled-components';

import { Wrapper, MainContent, GreenLine } from '../Front';
import { VideoWrapper } from './Videos';

import { MOBILE_WIDTH } from '../Style';

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

    #text3 { font-size: 42px; }
    #text4 { font-size: 16px; margin-bottom: 20px; }

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        padding-top: 5vh;

        #text3 { font-size: 36px; }
        #text4 { font-size: 14px; }
    }

    @media only screen and (max-width: ${MOBILE_WIDTH * 0.6}px) {
        padding-top: 10px;

        #text3 { font-size: 28px; }
        #text4 { font-size: 12px; }
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
                    <TopSection>
                        <p id='text1'>Да дадем на <b>България</b> шанс за</p>
                        <p id='text2'><b>ЧЕСТНИ</b> и <b>СВОБОДНИ</b> избори</p>
                    </TopSection>
                    <MiddleSection>
                        <p id='text3'>търсим <b>12 000</b> защитници на вота</p>
                        <p id='text4'>които да следят за коректното преброяване на гласовете в изборния ден</p>
                        <Link to='/signup'><HomeButton>Запиши се тук</HomeButton></Link> 
                    </MiddleSection>
                    <BottomSection>
                        <p id='text5'>Можем да го направим <b>заедно</b>!</p>
                    </BottomSection>
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
                които да следят за коректното преброяване на гласовете в изборния ден. По един за всяка секция 
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
