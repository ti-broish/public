import React, { useEffect } from 'react';

import Helmet from 'react-helmet';

import styled from 'styled-components';

import { Wrapper, MainContent } from '../Front';

export const VideoWrapper = styled.div`
    margin: 40px 0;
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
    background-color: black;
      
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
`;

export const YouTubeVideoEmbed = ({ videoId }) => {
    const iframeSrc = `https://www.youtube.com/embed/${videoId}`;

    return(
        <VideoWrapper>
            <iframe width="560" height="315" src={iframeSrc} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
        </VideoWrapper>
    );
};

export default () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let metaTitle = "Видео | Ти Броиш";
    let metaUrl = "https://tibroish.bg/videos/";
    let metaDescription = "Видеа от кампанията";

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
                <h1>Видеа от кампанията</h1>
                <hr/>
                <YouTubeVideoEmbed videoId={"0m3eBb6M6zs"} />
                <YouTubeVideoEmbed videoId={"JBgplUhCPCQ"} />
                <YouTubeVideoEmbed videoId={"eOEUrun-I3M"} />
                <YouTubeVideoEmbed videoId={"CoAk-Lu74rM"} />
                <YouTubeVideoEmbed videoId={"-1zSi5tq82o"} />
                <YouTubeVideoEmbed videoId={"yFS9Uv54R34"} />
                <YouTubeVideoEmbed videoId={"nxM0fnUPDx4"} />
                <YouTubeVideoEmbed videoId={"-L0y6Ih8id8"} />
                <YouTubeVideoEmbed videoId={"apAuVIu53Gg"} />
                <YouTubeVideoEmbed videoId={"xgIZ8uFmmpY"} />
                <YouTubeVideoEmbed videoId={"Q4Ijwoy2WR8"} />
                <YouTubeVideoEmbed videoId={"J_B0525_hcs"} />
            </MainContent>
        </Wrapper>
    )
};
