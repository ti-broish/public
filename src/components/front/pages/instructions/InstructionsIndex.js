import React from 'react';

import Helmet from 'react-helmet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import {
  PdfDownloadButton,
  InstructionLink,
  TableOfContents,
} from './InstructionStyles';

export default (props) => {
  let metaTitle = 'Инструкции | Ти Броиш';
  let metaUrl = 'https://tibroish.bg/instructions/';
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
      <h1>Инструкции</h1>

      <PdfDownloadButton
        href="/files/Ти%20Броиш%20Обучителен%20материал%20-%20НС%2027.10.2024.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFilePdf} />
        Обучение - Избори 27.10.2024 (PDF)
      </PdfDownloadButton>

      <TableOfContents>
        <h3>Раздели</h3>
        <ol>
          <li><a href="/instructions/what-to-watch-for">Как протича изборния ден? Обучения.</a></li>
          <li><a href="/instructions/mobile-app">Инструкции за изпращане на протоколи и сигнали</a></li>
          <li><a href="/instructions/how-to-validate">Инструкции за валидиране на протокол</a></li>
          <li><a href="/instructions/guardians">Какво правят защитниците на вота</a></li>
          <li><a href="/instructions/watchers">Какво правят участниците в "Ти Броиш"</a></li>
          <li><a href="/instructions/capturing-results">Как да заснемем процеса на установяване на резултатите"</a></li>
        </ol>
      </TableOfContents>
    </>
  );
};
