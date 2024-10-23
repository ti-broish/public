import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Wrapper, MainContent } from '../../Front';
import { YouTubeVideoEmbed } from '../Videos';

export const InstructionAnchor = styled.a`
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
  let metaTitle = 'Как протича изборния ден | Ти Броиш';
  let metaUrl = 'https://tibroish.bg/instructions/what-to-watch-for';
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
        <h1>Как протича изборния ден</h1>
        <hr />
        <InstructionAnchor href="/files/Ти%20Броиш%20Обучителен%20материал%20-%20НС%2027.10.2024.pdf" target="_blank">
          Обучение - Избори 27.10.2024
        </InstructionAnchor>
        <YouTubeVideoEmbed videoId={'Qz4V6uu7gTM'} />
        <YouTubeVideoEmbed videoId={'MpX0bA_DRtE'} />
        <YouTubeVideoEmbed videoId={'8J8r-e4shS8'} />
        <YouTubeVideoEmbed videoId={'3hpv4iwoAmA'} />
        <YouTubeVideoEmbed videoId={'-RvdMym5nm8'} />
        <YouTubeVideoEmbed videoId={'VbyHA1Ksr0Q'} />
        <YouTubeVideoEmbed videoId={'9WAcSKL-hQg'} />
        <YouTubeVideoEmbed videoId={'ZfoL4VLitXI'} />
        <YouTubeVideoEmbed videoId={'Xm0f61Xv0Pc'} />
        <YouTubeVideoEmbed videoId={'O-pWXJq_710'} />
      </MainContent>
    </Wrapper>
  );
};
