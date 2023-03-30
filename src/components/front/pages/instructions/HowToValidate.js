import React, { useEffect } from 'react';

import Helmet from 'react-helmet';

import { Wrapper, MainContent } from '../../Front';

import styled from 'styled-components';

import { MOBILE_WIDTH } from '../../Style';
import { YouTubeVideoEmbed } from '../Videos';
import { InstructionAnchor } from './WhatToWatchForInstructions.js'

const ImagesContainer = styled.div`
  text-align: center;

  img {
    width: calc(100% / ${(props) => props.cols});
    max-width: 190px;
    margin: 10px;
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    img {
      width: 100%;
      margin: 10px 0;
      max-width: 300px;
    }
  }
`;

const AppBadges = styled.div`
  text-align: center;
  margin-bottom: 35px;

  img {
    height: 50px;
    margin: 0 10px;
  }
`;

export default (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let metaTitle = 'Инструкции | Ти Броиш';
  let metaUrl = 'https://tibroish.bg/instructions/how-to-validate';
  let metaDescription = `
        „Ти броиш“ е национална кампания, целяща да предотврати опитите за измами и манипулации 
        при броенето на гласовете на предстоящите парламентарни избори.
    `;

  return (
    <Wrapper>
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
      <MainContent>
        <h1>Инструкции за валидиране на протокол в “Ти&nbsp;броиш”</h1>
        <hr />
        <InstructionAnchor href="/files/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F-%D0%B7%D0%B0-%D0%B2%D0%B0%D0%BB%D0%B8%D0%B4%D0%B8%D1%80%D0%B0%D0%BD%D0%B5-%D0%A2%D0%B8-%D0%B1%D1%80%D0%BE%D0%B8%D1%88.pdf">
          Как се валидира протокол
        </InstructionAnchor>
        <YouTubeVideoEmbed videoId={'j2ChYutSk-c'} />
      </MainContent>
    </Wrapper>
  );
};
