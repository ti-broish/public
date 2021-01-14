import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Helmet from 'react-helmet';

import { Wrapper, MainContent } from '../Front';

import styled from 'styled-components';

const FormWrapper = styled.div`
    iframe {
        width: 100%;
        height: 600px;
    }
`;

export default () => {
    const [loadCount, setLoadCount] = useState(0);

    // Second iframe load is after a submission
    // Do not count future loads after editing a response as submissions
    if (loadCount === 2) {
        window.gtag && gtag('event', 'conversion', {
            'send_to': 'AW-859816919/zYXnCPLNwOgBENeH_5kD',
        });
        axios.get('https://dabulgaria.bg/zastapnik.php');
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSignupIframeLoad = () => {
        setLoadCount(loadCount + 1);
    };

    let metaTitle = "Запиши се още сега | Ти Броиш";
    let metaUrl = "https://tibroish.bg/signup/";
    let metaDescription = `
        За да дадем на България шанс за честни и свободни избори, търсим 12 000 защитници на вота, 
        които да следят за коректното преброяване на гласовете в изборния ден. По един за всяка секция 
        в страната. Ангажимент за няколко часа в края на изборния ден може да реши бъдещето на България 
        за следващите години. Можем да го направим заедно!  
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
                <h1>Запиши се още сега</h1>
                <hr/>
                <p>
                    За да дадем на България шанс за честни и свободни избори, търсим 12 000 защитници на вота, 
                    които да следят за коректното преброяване на гласовете в изборния ден. По един за всяка секция 
                    в страната. Ангажиментът за няколко часа в края на изборния ден може да реши бъдещето на България 
                    за следващите години. Можем да го направим&nbsp;заедно!  
                </p>
                <p>
                    Запишете се днес и до няколко дни ще се свържем с Вас, за да Ви въведем в кампанията. 
                </p>
                <FormWrapper>
                    <iframe id="gform" style={{border: 'none'}} onLoad={onSignupIframeLoad} src="https://dabulgaria.bg/stani-zastapnik-embed/">Loading...</iframe>
                    {/*<iframe id="gform" onLoad={onSignupIframeLoad} src="https://docs.google.com/forms/d/e/1FAIpQLSdXMU-qZsIDLMEymzZl7VMthQyC0gJ0-X0Ew8wZo8P3oLHElg/viewform?embedded=true" frameBorder="0">Loading…</iframe>*/}
                </FormWrapper>
            </MainContent>
        </Wrapper>
    )
}
