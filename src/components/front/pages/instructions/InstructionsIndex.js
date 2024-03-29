import React from 'react';

import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import { Wrapper, MainContent } from '../../Front';

import styled from 'styled-components';

const InstructionLink = styled(Link)`
  font-size: 22px;
  width: 100%;
  display: block;
  text-decoration: none;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border-bottom: 2px solid #ccc;
`;

export default (props) => {
  let metaTitle = 'Инструкции | Ти Броиш';
  let metaUrl = 'https://tibroish.bg/instructions/';
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
        <h1>Инструкции</h1>
        <InstructionLink to="/instructions/what-to-watch-for">
          Как протича изборния ден? Обучения.
        </InstructionLink>
        <InstructionLink to="/instructions/mobile-app">
          Инструкции за изпращане на протоколи и сигнали в “Ти броиш”
        </InstructionLink>
        <InstructionLink to="/instructions/how-to-validate">
          Инструкции за валидиране на протокол в “Ти броиш”
        </InstructionLink>
      </MainContent>
    </Wrapper>
  );
};
