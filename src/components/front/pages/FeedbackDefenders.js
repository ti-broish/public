import React, { useEffect } from 'react';

import Helmet from 'react-helmet';

import { Wrapper, MainContent } from '../Front';

import styled from 'styled-components';

const FormWrapper = styled.div`
  iframe {
    width: 100%;
    height: 1450px;
  }
`;

export default () => {
  /*useEffect(() => {
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
    }, []);*/

  let metaTitle = 'Остави ни отзив | Ти Броиш';
  let metaUrl = 'https://tibroish.bg/feedback-defenders/';
  let metaDescription = `
        Благодарим Ви за участието като член на СИК или застъпник на 11.07.2021 г. в инициативата „Ти Броиш“. Ти Броиш, с Вашата помощ, успя да достигне до почти всички избирателни секции и да допринесе към прозрачността и честността в изборния ден.
Анкетата е анонимна и конфиденциална. Моля отделете 1 - 2 минути, за да ни дадете вашата обратна връзка.  
    `;

  return (
    <Wrapper>
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
      <MainContent>
        <h1>Анкета за застъпници на Ти броиш</h1>
        <hr />
        <FormWrapper>
          <iframe
            id="gform"
            style={{ border: 'none' }}
            src="https://dabulgaria.bg/tibroish-feedback-defenders-embed/"
          >
            Loading...
          </iframe>
        </FormWrapper>
      </MainContent>
    </Wrapper>
  );
};
