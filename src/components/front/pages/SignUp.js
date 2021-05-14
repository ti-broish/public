import React, { useEffect } from 'react';

import Helmet from 'react-helmet';

import { Wrapper, MainContent } from '../Front';

import styled from 'styled-components';

const FormWrapper = styled.div`
    iframe {
        width: 100%;
        height: 700px;
    }
`;

export default () => {

    useEffect(() => {
        window.scrollTo(0, 0);

        var eventMethod = window.addEventListener
			? "addEventListener"
            : "attachEvent";
        
        var eventer = window[eventMethod];
        var messageEvent = eventMethod === "attachEvent"
            ? "onmessage"
            : "message";

        const formSubmitHandler = e => {
            if (e.data === "formSubmit" || e.message === "formSubmit") {
                window.gtag && gtag('event', 'conversion', {
                    'send_to': 'AW-859816919/zYXnCPLNwOgBENeH_5kD',
                });
            }
        };

        eventer(messageEvent, formSubmitHandler);

        return () => {
            var cleanupMethod = window.addEventListener
                ? "removeEventListener"
                : "detachEvent";
            var cleanup = window[cleanupMethod];
            cleanup(messageEvent, formSubmitHandler);
        };
    }, []);

    let metaTitle = "Запиши се още сега | Ти Броиш";
    let metaUrl = "https://tibroish.bg/signup/";
    let metaDescription = `
        За да дадем на България шанс за честни и свободни избори, търсим 12 000 защитници на вота, 
        които да следят за коректното преброяване на всички гласове в изборния ден. По един за всяка секция 
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
                    които да следят за коректното преброяване на всички гласове в изборния ден. По един за всяка секция 
                    в страната. Ангажиментът за няколко часа в края на изборния ден може да реши бъдещето на България 
                    за следващите години. Можем да го направим&nbsp;заедно!  
                </p>
                <p>
                    Запишете се днес и до няколко дни ще се свържем с Вас, за да Ви въведем в кампанията. 
                </p>
                <FormWrapper>
                    <iframe id="gform" style={{border: 'none'}} src="https://dabulgaria.bg/tibroish-chlen-na-sik-embed/">Loading...</iframe>
                    {/*<iframe id="gform" onLoad={onSignupIframeLoad} src="https://docs.google.com/forms/d/e/1FAIpQLSdXMU-qZsIDLMEymzZl7VMthQyC0gJ0-X0Ew8wZo8P3oLHElg/viewform?embedded=true" frameBorder="0">Loading…</iframe>*/}
                </FormWrapper>
                <hr/>
                <h1>Какво предстои след като се запишете за защитник на вота?</h1>
                <hr/>
                <h2>Ще ви изпратим обучително видео и материали</h2>
                <p>
                    В момента, в който ЦИК обявят здравния протокол и методически указания за предстоящите избори, ще изработим и 
                    изпратим обучително видео и материали за правата и задълженията на застъпниците. Всички тези материали ще бъдат на 
                    Ваше разположение и на сайта на кампанията - <a href="https://tibroish.bg">www.tibroish.bg</a>.
                </p>
                <hr/>
                <h2>Ще ви разпределим по секции</h2>
                <p>
                    След като общините обявят окончателния списък със секциите за предстоящите избори, ще бъдете разпределени в някоя 
                    от тях и ще Ви изпратим информация за номера и адреса на секцията, в която ще бъдете застъпник.
                </p>
                <hr/>
                <h2>Ще подготвим документите</h2>
                <p>
                    За да можете да се легитимирате като пазител на вота в изборния ден, ще трябва да разполагате с документ, който удостоверява, 
                    че сте застъпник (представител на коалиция) на Демократична България и бадж, който ще трябва да носите, докато сте в секцията. 
                    Веднага щом бъдете разпределени в секциите, ще се свържем с Вас, за да уточним как ще получите документите си.
                </p>
                <hr/>
                <h2>Приложението “Ти броиш” </h2>
                <p>
                    Когато мобилното ни приложение е налично за сваляне, ще получите имейл с инструкции как да го свалите и как да го ползвате в изборния 
                    ден. Тази информация ще бъде публикувана и на уебсайта на кампанията <a href="https://tibroish.bg">www.tibroish.bg</a>.
                </p>
            </MainContent>
        </Wrapper>
    )
}
