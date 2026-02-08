import React, { useEffect } from 'react';

import Helmet from 'react-helmet';

import { YouTubeVideoEmbed } from '../Videos';
import {
  TableOfContents,
  VideoSection,
  VideoLabel,
} from './InstructionStyles';

const videos = [
    { videoId: 'vG-evl0Jlp8', label: 'Изпращане на протокол в Ти Броиш', anchorId: 'video-protocols' },
    { videoId: 'x4j9s-LliVs', label: 'Подаване на сигнал в Ти Броиш', anchorId: 'video-signals' },
];

export default (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let metaTitle = 'Инструкции | Ти Броиш';
  let metaUrl = 'https://tibroish.bg/instructions/mobile-app';
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
      <h1>Инструкции за изпращане на протоколи и сигнали в "Ти Броиш"</h1>
      <hr />

      {videos.map((v) => (
        <VideoSection key={v.videoId}>
          <VideoLabel id={v.anchorId}>{v.label}</VideoLabel>
          <YouTubeVideoEmbed videoId={v.videoId} />
        </VideoSection>
      ))}
    </>
  );
};
