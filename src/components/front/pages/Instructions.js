import React, { useEffect } from 'react';

import Helmet from 'react-helmet';

import { Wrapper, MainContent } from '../Front';

export default props => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let metaTitle = "Инструкции | Ти Броиш";
    let metaUrl = "https://tibroish.bg/instructions/";
    let metaDescription = `
        „Ти броиш“ е национална кампания, целяща предотврати опитите за измами и манипулации 
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
                <h1>Инструкции</h1>
                <hr/>
                <p>
                    Тук ще публикуваме инструкциите за употреба на приложението “Ти броиш” след 01.02.2021.
                </p>
            </MainContent>
        </Wrapper>
    )
};