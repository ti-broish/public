import React from 'react';

import { Wrapper, MainContent } from '../../Front';

import Helmet from 'react-helmet';

import { YouTubeVideoEmbed } from '../Videos';

export default props => {

    let metaTitle = "За какво да следим? | Ти Броиш";
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
                <h1>За&nbsp;какво да следите при преброяването на&nbsp;бюлетините?</h1>
                <hr/>
                <YouTubeVideoEmbed videoId={"_vMu6jdSgmA"} />
                <YouTubeVideoEmbed videoId={"gY8Yzcqr0fo"} />
                <YouTubeVideoEmbed videoId={"Mxs6egB2c9w"} />
                <YouTubeVideoEmbed videoId={"nvc1VipwYLI"} />
            </MainContent>
        </Wrapper>
    );
};
