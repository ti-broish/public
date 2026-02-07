import React, { useEffect } from 'react';

import Helmet from 'react-helmet';

import { YouTubeVideoEmbed } from '../Videos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import {
  PdfDownloadButton,
  VideoSection,
  VideoLabel,
} from './InstructionStyles';

export default (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let metaTitle = 'Инструкции | Ти Броиш';
  let metaUrl = 'https://tibroish.bg/instructions/how-to-validate';
  let metaDescription = `
        „Ти броиш" е национална кампания, целяща да предотврати опитите за измами и манипулации
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
      <h1>Инструкции за валидиране на протокол в "Ти&nbsp;броиш"</h1>
      <hr />

      <PdfDownloadButton
        href="/files/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F-%D0%B7%D0%B0-%D0%B2%D0%B0%D0%BB%D0%B8%D0%B4%D0%B8%D1%80%D0%B0%D0%BD%D0%B5-%D0%A2%D0%B8-%D0%B1%D1%80%D0%BE%D0%B8%D1%88.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFilePdf} />
        Как се валидира протокол (PDF)
      </PdfDownloadButton>

      <VideoSection>
        <VideoLabel id="video-validation">Как се валидира протокол в Ти броиш</VideoLabel>
        <YouTubeVideoEmbed videoId={'j2ChYutSk-c'} />
      </VideoSection>
    </>
  );
};
