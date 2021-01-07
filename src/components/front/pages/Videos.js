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

const EmbedYouTubeVideo = props => {
    const iframeSrc = `https://www.youtube.com/embed/${props.videoId}`;

    return(
        <VideoWrapper>
            <iframe width="560" height="315" src={iframeSrc} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
        </VideoWrapper>
    );
};

export default () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
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
                <EmbedYouTubeVideo videoId={"JBgplUhCPCQ"} />
                <EmbedYouTubeVideo videoId={"eOEUrun-I3M"} />
                <EmbedYouTubeVideo videoId={"CoAk-Lu74rM"} />
                <EmbedYouTubeVideo videoId={"-1zSi5tq82o"} />
                <EmbedYouTubeVideo videoId={"yFS9Uv54R34"} />
                <EmbedYouTubeVideo videoId={"nxM0fnUPDx4"} />
                <EmbedYouTubeVideo videoId={"-L0y6Ih8id8"} />
                <EmbedYouTubeVideo videoId={"apAuVIu53Gg"} />
                <EmbedYouTubeVideo videoId={"xgIZ8uFmmpY"} />
                <EmbedYouTubeVideo videoId={"Q4Ijwoy2WR8"} />
                <EmbedYouTubeVideo videoId={"J_B0525_hcs"} />
            </MainContent>
        </Wrapper>
    )
};
