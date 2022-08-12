import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import Helmet from 'react-helmet';

import styled from 'styled-components';

import { Wrapper, MainContent, GreenLine } from '../Front';
import { VideoWrapper, YouTubeVideoEmbed } from './Videos';

import { MOBILE_WIDTH } from '../Style';

const LandingPage = styled.div`
  background-color: black;

  .react-parallax {
    width: 100%;
    height: calc(100vh - 60px);

    img {
      width: auto !important;
    }
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

  b {
    font-weight: 900;
  }
  p {
    margin: 0;
  }
`;

const TopSection = styled.div`
  position: absolute;
  bottom: 55vh;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;

  p {
    margin: 20px 0;
  }

  #text1 {
    font-size: 24px;
  }
  #text2 {
    font-size: 52px;
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    #text1 {
      font-size: 16px;
    }
    #text2 {
      font-size: 42px;
    }
  }

  @media only screen and (max-width: ${MOBILE_WIDTH * 0.6}px) {
    #text1 {
      font-size: 14px;
    }
    #text2 {
      font-size: 32px;
    }
  }
`;

const MiddleSection = styled.div`
  position: absolute;
  width: 100%;
  top: calc(45vh - 60px);
  box-sizing: border-box;
  padding: 0 10px;
  padding-top: 50px;

  a {
    color: white;
  }

  #text3 {
    font-size: 42px;
  }
  #text4 {
    font-size: 16px;
    margin-bottom: 20px;
  }
  #text5 {
    font-size: 18px;
    margin-top: 15px;
  }
  #text6 {
    font-size: 48px;
    margin-top: 5px;
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding-top: 5vh;

    #text3 {
      font-size: 36px;
    }
    #text4 {
      font-size: 14px;
    }
    #text5 {
      font-size: 18px;
    }
    #text6 {
      font-size: 42px;
    }
  }

  @media only screen and (max-width: ${MOBILE_WIDTH * 0.6}px) {
    padding-top: 10px;

    #text3 {
      font-size: 28px;
    }
    #text4 {
      font-size: 12px;
    }
    #text5 {
      font-size: 18px;
    }
    #text6 {
      font-size: 42px;
    }
  }
`;

const BottomSection = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 10px 50px 10px;
  box-sizing: border-box;

  #text5 {
    font-size: 35px;
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding-bottom: 30px;
    #text5 {
      font-size: 28px;
    }
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding-bottom: 20px;
    #text5 {
      font-size: 24px;
    }
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

export default (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let metaUrl = 'https://tibroish.bg/';
  let metaDescription = `
        „Ти броиш“ е национална кампания, целяща да предотврати опитите за измами и манипулации при 
        броенето на гласовете на предстоящите парламентарни избори.
    `;
  let metaTitle = 'Начало | Ти Броиш';

  return [
    <Helmet>
      <title>{metaTitle}</title>
      <link rel="canonical" href={metaUrl} />
      <meta name="description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={'/brand/ti-broish-cover.png'} />
      <meta property="og:image:width" content={'1200'} />
      <meta property="og:image:height" content={'628'} />
    </Helmet>,
    <LandingPage>
      <Parallax
        bgImage="/images/national-assembly-building-sofia-bg.jpg"
        bgImageAlt="Народно събрание"
        strength={200}
      >
        <LandingPageOverlay>
          <TopSection>
            <p id="text1">
              Да дадем на <b>България</b> шанс за
            </p>
            <p id="text2">
              <b>ЧЕСТНИ</b> и <b>СВОБОДНИ</b> избори
            </p>
          </TopSection>
          <MiddleSection>
            <p id="text3">
              търсим пазители на вота
            </p>
            <p id="text4">
              които да гарантират за коректното протичане на изборния ден!
            </p>
            <Link to="/signup">
              <HomeButton>Запиши се тук</HomeButton>
            </Link>
          </MiddleSection>
          <BottomSection>
            <p id="text5">
              Можем да го направим <b>заедно</b>!
            </p>
          </BottomSection>
        </LandingPageOverlay>
      </Parallax>
    </LandingPage>,
    <GreenLine style={{ height: '15px' }} />,
    <AppBadges>
      <a href="https://play.google.com/store/apps/details?id=bg.dabulgaria.tibroish&hl=bg">
        <img src="/google-play-badge.png" />
      </a>
      <a href="https://apps.apple.com/us/app/ti-broish/id1555255776">
        <img src="/apple-badge.svg" />
      </a>
      <a href="https://appgallery.huawei.com/#/app/C103937827">
        <img src="/huawei-badge.png" />
      </a>
    </AppBadges>,
    <Wrapper>
      <MainContent>
        <h1>Национална кампания „Ти броиш“</h1>
        <hr />
        <h2>Какво е „Ти броиш“?</h2>
        <p>
          „Ти броиш“ е национална кампания, целяща да гарантира честността на вота на предстоящите парламентарни
          избори. След успеха на последната кампания и най-скорошните изменения
          в Изборния кодекс, "Ти Броиш" порасна!
        </p>
        <p>
          Този път, търсим защитници на вота, които да станат членове на
          Секционни избирателни комисии или застъпници и да проследят коректното
          протичане на изборния процес.
        </p>
        <HomeButtonWrapper>
          <Link to="/about">
            <HomeButton>Научи повече</HomeButton>
          </Link>
        </HomeButtonWrapper>
        <hr />
        <h2>Търсим пазители на вота</h2>
        <p>
          Търсим пазители на вота, членове на СИК или застъпници - по един за всяка
          секция в страната. Можем да го направим заедно!
        </p>
        <p>
          Запишете се днес и с наближаването на изборния ден ще се свържем с
          вас, за да ви въведем в кампанията!
        </p>
        <HomeButtonWrapper>
          <Link to="/signup">
            <HomeButton>Запиши се тук</HomeButton>
          </Link>
        </HomeButtonWrapper>
        <hr />
        <h2>Информация за членове на СИК</h2>
        <p>
          Един от начините на станете пазител на вота е като се запишете за член
          на Секционна избирателна комисия (СИК). Членовете на СИК са главните
          участници в организирането на изборния процес във всяка секция. Те
          следят за спазване на разпоредбите на Изборния кодекс и методическите
          указания на ЦИК в изборното помещение, като осигуряват свободното
          протичане на гласуването.
        </p>
        <p>
          След края на изборния ден преброяват гласовете от хартиените бюлетини
          (ако има такива) и вписват данните в протокола, който предоставят на
          Централната избирателна комисия (ЦИК) заедно с протокола от машинното
          гласуване.
        </p>
        <p>
          Ангажиментът е овъзмезден, като размерът на сумата варира според
          населеното място и големината на секцията.
        </p>
        <HomeButtonWrapper>
          <Link to="/news">
            <HomeButton>Научи повече</HomeButton>
          </Link>
        </HomeButtonWrapper>
        <h2>Информация за застъпници</h2>
        <p>
          Пазителите на вота (или т.нар. „застъпници“) имат право да присъстват
          в изборното помещение и да следи процеса на преброяване на резултатите
          от гласуването и изготвянето на протокола на секционната избирателна
          комисия.
        </p>
        <p>
          Застъпникът има право - и е задължително и изключително важно - да
          получи копие от подписания от членовете на СИК протокол с резултатите
          от гласуването в избирателната секция след приключване на избирателния
          ден в съответната секция!
        </p>
        <HomeButtonWrapper>
          <Link to="/news">
            <HomeButton>Научи повече</HomeButton>
          </Link>
        </HomeButtonWrapper>
      </MainContent>
    </Wrapper>,
  ];
};
