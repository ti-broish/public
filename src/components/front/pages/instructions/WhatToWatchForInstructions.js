import React from 'react';
import Helmet from 'react-helmet';
import { YouTubeVideoEmbed } from '../Videos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import {
  PdfDownloadButton,
  TableOfContents,
  VideoSection,
  VideoLabel,
  SideBySideLayout,
  MainContent,
} from './InstructionStyles';

import MobileAppInstructions from './MobileAppInstructions';


const videos = [
  { videoId: 'Qz4V6uu7gTM', label: 'Защитник на вота - права и задължения', anchorId: 'video-1' },
];

const howToVoteVideos = [
  { videoId: '3hpv4iwoAmA', label: 'Кой може да гласува', anchorId: 'video-4' },
  { videoId: '-RvdMym5nm8', label: 'Как се гласува - с хартия, с машина', anchorId: 'video-5' },
  { videoId: 'O-pWXJq_710', label: 'Как се гласува в чужбина', anchorId: 'video-10' },
];

const sikVideos = [
  { videoId: 'MpX0bA_DRtE', label: 'Как функционира СИК', anchorId: 'video-2' },
  { videoId: '8J8r-e4shS8', label: 'Как откриваме изборния ден', anchorId: 'video-3' },
  { videoId: 'VbyHA1Ksr0Q', label: 'Как приключва изборния ден', anchorId: 'video-6' },
  { videoId: '9WAcSKL-hQg', label: 'Как броим', anchorId: 'video-7' },
  { videoId: 'ZfoL4VLitXI', label: 'Как попълваме протокола', anchorId: 'video-8' },
  { videoId: 'Xm0f61Xv0Pc', label: 'Как предаваме протокола в РИК', anchorId: 'video-9' },
];

export default (props) => {
  let metaTitle = 'Как протича изборния ден | Ти Броиш';
  let metaUrl = 'https://tibroish.bg/instructions/what-to-watch-for';
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

      <SideBySideLayout>
        <TableOfContents>
          <h3>Обучение</h3>
          <ol>
            {videos.map((v) => (
              <li key={v.anchorId}>
                <a href={`#${v.anchorId}`}>{v.label}</a>
              </li>
            ))}
          </ol>

          <br />
          <h3>Гласуване</h3>
          <ol>
            {howToVoteVideos.map((v) => (
              <li key={v.anchorId}>
                <a href={`#${v.anchorId}`}>{v.label}</a>
              </li>
            ))}
          </ol>

          <br />
          <h3>СИК</h3>
          <ol>
            {sikVideos.map((v) => (
              <li key={v.anchorId}>
                <a href={`#${v.anchorId}`}>{v.label}</a>
              </li>
            ))}
          </ol>

          <br />
          <h3>Протоколи и сигнали</h3>
          <ol>
            <li key={'mobile-app-1'}>
              <a href={`#video-protocols`}>Как се изпраща протокол в Ти Броиш</a>
            </li>

            <li key={'mobile-app-2'}>
              <a href={`#video-signals`}>Как се подава сигнал в Ти Броиш</a>
            </li>
          </ol>
        </TableOfContents>

        <MainContent>
          <h3>Как протича изборния ден</h3>

        <PdfDownloadButton
          href="/files/Ти%20Броиш%20Обучителен%20материал%20-%20НС%2027.10.2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFilePdf} />
          Обучение - Избори 27.10.2024 (PDF)
        </PdfDownloadButton>
          <hr />

          {videos.concat(howToVoteVideos, sikVideos).map((v) => (
            <VideoSection key={v.videoId}>
              <VideoLabel id={v.anchorId}>{v.label}</VideoLabel>
              <YouTubeVideoEmbed videoId={v.videoId} />
            </VideoSection>
          ))}

          <hr />

          <MobileAppInstructions id="mobile-app" />
        </MainContent>
      </SideBySideLayout>
    </>
  );
};
