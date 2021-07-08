import React from 'react';

import { Wrapper, MainContent } from '../../Front';

import Helmet from 'react-helmet';

import { YouTubeVideoEmbed } from '../Videos';

export default props => {

    let metaTitle = "Как протича изборния ден | Ти Броиш";
    let metaUrl = "https://tibroish.bg/instructions/what-to-watch-for";
    let metaDescription = `
        „Ти броиш“ е национална кампания, целяща да предотврати опитите за измами и манипулации 
        при броенето на гласовете на предстоящите парламентарни избори.
    `;

    return(
        <Wrapper>
            <Helmet>
                <title>{metaTitle}</title>
                <link rel="canonical" href={metaUrl} />
                <meta name="description" content={metaDescription}/>
                <meta property="og:url" content={metaUrl}/>
                <meta property="og:title" content={metaTitle}/>
                <meta property="og:description" content={metaDescription}/>
                <meta property="og:image" content={"/brand/og_image.png"}/>
                <meta property="og:image:width" content={"1200"}/>
                <meta property="og:image:height" content={"628"}/>
            </Helmet>
            <MainContent>
                <h1>Как протича изборния ден</h1>
                <hr/>
                <YouTubeVideoEmbed videoId={"lGB14D2J8z8"} />
                <YouTubeVideoEmbed videoId={"3O88ZRHs4mQ"} />
                <YouTubeVideoEmbed videoId={"H7FhzNln8tU"} />
                <YouTubeVideoEmbed videoId={"D5aFBroNLuQ"} />
                <YouTubeVideoEmbed videoId={"xq-RK3j4MMY"} />
                <YouTubeVideoEmbed videoId={"d-fmYBITnG8"} />
                <YouTubeVideoEmbed videoId={"Bp0EQ06x0mY"} />    
            </MainContent>
        </Wrapper>
    );
};
