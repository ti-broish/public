import React, { useEffect } from "react";

import Helmet from "react-helmet";

import { Wrapper, MainContent } from "../Front";

import styled from "styled-components";

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

  const metaTitle = "Секции извън България";
  const metaUrl = "https://glasuvam.org/parl2410";
  const metaDescription = `
        Вижте къде има открити секции за гласуване извън България. Данните са от проекта Glasuvam.org.  
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
        <meta property="og:image" content={"/brand/ti-broish-cover.png"} />
        <meta property="og:image:width" content={"1200"} />
        <meta property="og:image:height" content={"628"} />
      </Helmet>
      <MainContent>
        <h1>Секции извън страната</h1>
        <iframe
          src="https://glasuvam.org/parl2410"
          width="100%"
          height="500px"
          allow="geolocation"
          style={{
            borderStyle: "solid",
            borderColor: "lightgray",
            borderWidth: "1px",
            margin: 0,
            padding: 0,
          }}
        ></iframe>
        <p style={{ fontSize: "90%", textAlign: "right" }}>
          Карта на изборите в чужбина от{" "}
          <a href="https://glasuvam.org/">Glasuvam.org</a>
        </p>
      </MainContent>
    </Wrapper>
  );
};
