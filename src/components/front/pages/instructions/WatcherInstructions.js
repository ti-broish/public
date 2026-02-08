import React from 'react';

import Helmet from 'react-helmet';

import { MOBILE_WIDTH } from '../../Style';

import styled from 'styled-components';

const ImagesContainer = styled.div`
  text-align: center;
  img {
    width: calc(100% / ${(props) => props.cols});
    margin: 10px;
  }
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    img {
      width: 100%;
      margin: 10px 0;
    }
  }
`;

export default (props) => {
  let metaTitle = 'Инструкции | Ти Броиш';
  let metaUrl = 'https://tibroish.bg/instructions/watchers';
  let metaDescription = `
        „Ти Броиш" е национална кампания, целяща да предотврати опитите за измами и манипулации
        при броенето на гласовете на предстоящите парламентарни избори.
    `;

  return (
    <>
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
      </Helmet>
      <h1>Какво правят участниците в "Ти Броиш" на 14 ноември 2021</h1>

      <hr />
      <h2>ЧЛЕН НА СИК</h2>
      <hr />
      <ImagesContainer cols={1}>
        <img src="/images/cik-organization-3.0/cik-organization-slide1.jpg" />
        <img src="/images/cik-organization-3.0/cik-organization-slide2.jpg" />
        <img src="/images/cik-organization-3.0/cik-organization-slide3.jpg" />
        <img src="/images/cik-organization-3.0/cik-organization-slide4.jpg" />
        <img src="/images/cik-organization-3.0/cik-organization-slide5.jpg" />
        <img src="/images/cik-organization-3.0/cik-organization-slide6.jpg" />
        <img src="/images/cik-organization-3.0/cik-organization-slide7.jpg" />
        <img src="/images/cik-organization-3.0/cik-organization-slide8.jpg" />
      </ImagesContainer>
      <hr />
      <h2>КАК СЕ ГЛАСУВА</h2>
      <hr />
      <ImagesContainer cols={1}>
        <img src="/images/how-we-vote-3.0/how-we-vote-slide1.jpg" />
        <img src="/images/how-we-vote-3.0/how-we-vote-slide2.jpg" />
        <img src="/images/how-we-vote-3.0/how-we-vote-slide3.jpg" />
        <img src="/images/how-we-vote-3.0/how-we-vote-slide4.jpg" />
        <img src="/images/how-we-vote-3.0/how-we-vote-slide5.jpg" />
        <img src="/images/how-we-vote-3.0/how-we-vote-slide6.jpg" />
        <img src="/images/how-we-vote-3.0/how-we-vote-slide7.jpg" />
        <img src="/images/how-we-vote-3.0/how-we-vote-slide8.jpg" />
      </ImagesContainer>
      <hr />
      <h2>СЛЕД КРАЯ НА ИЗБОРНИЯ ДЕН</h2>
      <hr />
      <ImagesContainer cols={1}>
        <img src="/images/after-election-day-3.0/after-election-day-slide1.jpg" />
        <img src="/images/after-election-day-3.0/after-election-day-slide2.jpg" />
        <img src="/images/after-election-day-3.0/after-election-day-slide3.jpg" />
        <img src="/images/after-election-day-3.0/after-election-day-slide4.jpg" />
        <img src="/images/after-election-day-3.0/after-election-day-slide5.jpg" />
        <img src="/images/after-election-day-3.0/after-election-day-slide6.jpg" />
        <img src="/images/after-election-day-3.0/after-election-day-slide7.jpg" />
        <img src="/images/after-election-day-3.0/after-election-day-slide8.jpg" />
        <img src="/images/after-election-day-3.0/after-election-day-slide9.jpg" />
        <img src="/images/after-election-day-3.0/after-election-day-slide10.jpg" />
        <img src="/images/after-election-day-3.0/after-election-day-slide11.jpg" />
        <img src="/images/after-election-day-3.0/after-election-day-slide12.jpg" />
        <img src="/images/after-election-day-3.0/after-election-day-slide13.jpg" />
        <img src="/images/after-election-day-3.0/after-election-day-slide14.jpg" />
        <img src="/images/after-election-day-3.0/after-election-day-slide15.jpg" />
        <img src="/images/after-election-day-3.0/after-election-day-slide16.jpg" />
        <img src="/images/after-election-day-3.0/after-election-day-slide17.jpg" />
      </ImagesContainer>
      <hr />
      <h3><a href="https://www.cik.bg/bg/pvr-ns14.11.2021/edu">ОБУЧИТЕЛНИ ВИДЕО МАТЕРИАЛИ ЗА ЧЛЕНОВЕ НА СИК</a></h3>
    </>
  );
};
