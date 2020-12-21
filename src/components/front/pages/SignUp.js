import React, { useEffect } from 'react';

import Helmet from 'react-helmet';

import { Wrapper, MainContent } from '../Front';

import styled from 'styled-components';

const FormWrapper = styled.div`
    iframe {
        width: 100%;
        height: 1270px;
    }
`;

export default props => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                <meta property="og:image" content={"https://tibroish.bg/brand/og_image.png"}/>
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
                    <iframe id="gform" src="https://docs.google.com/forms/d/e/1FAIpQLSeBNgZgrixE7hJ_cykkFangamQnU4Pv9R6hi8n59-lB4dI5nw/viewform?embedded=true" frameBorder="0">Loading…</iframe>
                </FormWrapper>
            </MainContent>
        </Wrapper>
    )
}
