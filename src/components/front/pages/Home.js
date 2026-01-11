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
    min-height: calc(100vh - 60px);

    img {
      width: auto !important;
    }
  }
`;

const LandingPageOverlay = styled.div`
  background-color: #0005;
  width: 100%;
  min-height: calc(100vh - 60px);
  position: relative;
  box-sizing: border-box;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 0px 0px 10px black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 0;

  b {
    font-weight: 900;
  }
  p {
    margin: 0;
  }
`;

const TopSection = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  flex-shrink: 0;

  p {
    margin: 15px 0;
    line-height: 1.5;
  }

  #text1 {
    font-size: 22px;
    font-weight: 500;
  }
  #text2 {
    font-size: 36px;
    font-weight: 700;
    line-height: 1.3;
  }

  @media only screen and (max-width: 1440px) {
    #text2 {
      font-size: 32px;
    }
  }

  @media only screen and (max-width: 1024px) {
    #text1 {
      font-size: 20px;
    }
    #text2 {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 0 15px;
    #text1 {
      font-size: 16px;
    }
    #text2 {
      font-size: 28px;
    }
  }

  @media only screen and (max-width: 768px) {
    #text1 {
      font-size: 15px;
    }
    #text2 {
      font-size: 26px;
    }
  }

  @media only screen and (max-width: ${MOBILE_WIDTH * 0.6}px) {
    padding: 0 12px;
    #text1 {
      font-size: 14px;
    }
    #text2 {
      font-size: 24px;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 0 10px;
    #text1 {
      font-size: 13px;
    }
    #text2 {
      font-size: 20px;
    }
  }
`;

const MiddleSection = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 40px 20px;
  flex-shrink: 0;

  a {
    color: white;
  }

  p {
    margin: 20px 0;
    line-height: 1.4;
  }

  #text3 {
    font-size: 56px;
    font-weight: 900;
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

  @media only screen and (max-width: 1440px) {
    padding: 35px 20px;
    #text3 {
      font-size: 50px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 30px 20px;
    #text3 {
      font-size: 46px;
    }
    p {
      margin: 18px 0;
    }
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 25px 15px;

    #text3 {
      font-size: 42px;
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

  @media only screen and (max-width: 768px) {
    padding: 20px 15px;
    #text3 {
      font-size: 38px;
    }
    p {
      margin: 15px 0;
    }
  }

  @media only screen and (max-width: ${MOBILE_WIDTH * 0.6}px) {
    padding: 15px 12px;

    #text3 {
      font-size: 34px;
    }
    #text4 {
      font-size: 13px;
    }
    #text5 {
      font-size: 16px;
    }
    #text6 {
      font-size: 38px;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 15px 10px;
    #text3 {
      font-size: 28px;
    }
    #text4 {
      font-size: 12px;
    }
    p {
      margin: 12px 0;
    }
  }
`;

const BottomSection = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px 50px 20px;
  box-sizing: border-box;
  flex-shrink: 0;

  p {
    margin: 20px 0;
    line-height: 1.4;
  }

  #text5 {
    font-size: 35px;
  }

  @media only screen and (max-width: 1440px) {
    padding-bottom: 45px;
    #text5 {
      font-size: 32px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding-bottom: 40px;
    #text5 {
      font-size: 30px;
    }
    p {
      margin: 18px 0;
    }
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 0 15px 30px 15px;
    #text5 {
      font-size: 28px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding-bottom: 25px;
    #text5 {
      font-size: 26px;
    }
    p {
      margin: 15px 0;
    }
  }

  @media only screen and (max-width: ${MOBILE_WIDTH * 0.6}px) {
    padding: 0 12px 25px 12px;
    #text5 {
      font-size: 24px;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 0 10px 20px 10px;
    #text5 {
      font-size: 20px;
    }
    p {
      margin: 12px 0;
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
        bgImage="/images/protest_2025.jpg"
        bgImageAlt="Протест 2025"
        strength={200}
      >
        <LandingPageOverlay>
          <TopSection>
            <p id="text1">
              От площада им взехме оставката. С честни и свободни избори ще изхвърлим завинаги мафията от политическия живот на България.
            </p>
            <p id="text2">
              Запиши се сега и стани пазител на вота. Стани част от армията на “Ти броиш” и защити всеки глас!
            </p>
          </TopSection>
          <MiddleSection>
            <Link to="/signup">
              <HomeButton>Запиши се тук</HomeButton>
            </Link>
          </MiddleSection>
          <BottomSection>
            <p id="text5">
              Всеки един свободен глас оставя прасето гладно!
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
          Този път, търсим защитници на вота, които да станат наблюдатели и да проследят коректното
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
          Търсим пазители на вота, наблюдатели - по един за всяка
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
        <h2>Информация за наблюдатели</h2>
        <p>
          Пазителите на вота (или т.нар. „наблюдатели“) имат право да присъстват
          в изборното помещение и да следят процеса на преброяване на резултатите
          от гласуването и изготвянето на протокола на секционната избирателна
          комисия.
        </p>
        <p>
          Наблюдателят има право - и е задължително и изключително важно - да
          получи копие от подписания от членовете на СИК протокол с резултатите
          от гласуването в избирателната секция след приключване на избирателния
          ден в съответната секция!
        </p>
        <HomeButtonWrapper>
          <Link to="/about">
            <HomeButton>Научи повече</HomeButton>
          </Link>
        </HomeButtonWrapper>
      </MainContent>
    </Wrapper>,
  ];
};
