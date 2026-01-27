import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Helmet from 'react-helmet';

import { Wrapper, MainContent } from '../Front';

import styled from 'styled-components';

const FormWrapper = styled.div`
`;

export default () => {
  // Use build-time environment variable for iframe URL
  // This is injected at build time via webpack DefinePlugin for client-side
  // For SSR (renderStatic.js), process.env.VITE_FORM_URL must be set in Node.js environment
  // For staging builds: VITE_FORM_URL=https://signup-staging.tibroish.bg
  // For production builds: VITE_FORM_URL=https://signup.tibroish.bg
  // Webpack DefinePlugin replaces process.env.VITE_FORM_URL with the actual string value at build time for client bundle
  // During SSR, we read directly from process.env (set in build script)
  const iframeSrc = process.env.VITE_FORM_URL || 'https://signup.tibroish.bg';

  // Debug: Log the iframe URL to verify webpack replacement worked
  if (typeof window !== 'undefined') {
    console.log('[SignUp] iframeSrc:', iframeSrc);
    console.log('[SignUp] process.env.VITE_FORM_URL:', process.env.VITE_FORM_URL);
  } else {
    // SSR logging
    console.log('[SignUp SSR] iframeSrc:', iframeSrc, 'process.env.VITE_FORM_URL:', process.env.VITE_FORM_URL);
  }

  const location = useLocation();

  // Check for referral code in URL
  const getReferralFromUrl = () => {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.search);
    return params.get('ref') || null;
  };

  const referralCode = getReferralFromUrl();
  const shareText = 'Аз се записах за пазител на вота! Запиши се и ти!';

  useEffect(() => {
    window.scrollTo(0, 0);

    var eventMethod = window.addEventListener
      ? 'addEventListener'
      : 'attachEvent';

    var eventer = window[eventMethod];
    var messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';

    const formSubmitHandler = (e) => {
      // Handle legacy formSubmit message
      if (e.data === 'formSubmit' || e.message === 'formSubmit') {
        window.gtag &&
          gtag('event', 'conversion', {
            send_to: 'AW-859816919/zYXnCPLNwOgBENeH_5kD',
          });
      }

      // Handle new tibroishSubmitSuccess message
      if (e.data === 'tibroishSubmitSuccess' || e.message === 'tibroishSubmitSuccess') {
        window.gtag &&
          gtag('event', 'conversion', {
            send_to: 'AW-859816919/zYXnCPLNwOgBENeH_5kD',
          });
      }
    };

    eventer(messageEvent, formSubmitHandler);

    return () => {
      var cleanupMethod = window.addEventListener
        ? 'removeEventListener'
        : 'detachEvent';
      var cleanup = window[cleanupMethod];
      cleanup(messageEvent, formSubmitHandler);
    };
  }, []);

  // Use different title and description if referral code is present
  const metaTitle = referralCode 
    ? `${shareText} | Ти Броиш`
    : 'Запиши се още сега | Ти Броиш';
  
  const metaUrl = referralCode 
    ? `https://tibroish.bg/signup/?ref=${referralCode}`
    : 'https://tibroish.bg/signup/';
  
  const metaDescription = referralCode
    ? shareText
    : `
        За да дадем на България шанс за честни и свободни избори, търсим 12 000 пазители на вота, по един за всяка секция в страната.
От ангажимент за 1 ден важи бъдещето на страната за следващите 4 години.
Можем да го направим заедно!
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
        <h1>Запиши се още сега</h1>
        <hr />
        <p>
          За да дадем на България шанс за честни и свободни избори, търсим 12
          000 пазители на вота, по един за всяка
          секция в страната. От ангажимент за 1 ден важи бъдещето на страната за
          следващите 4 години. Можем да го направим заедно!
        </p>
        <p>
          Запишете се днес, а с наближаването на изборния ден ние ще се свържем
          с вас във връзка с вашето разпределение!
        </p>
        <FormWrapper>
          <iframe
            style={{ border: 'none', overflowY: 'auto' }}
            border="0"
            width="600px"
            height="2100px"
            src={iframeSrc}
            key={location.pathname}
          >
            Зареждане на формуляра&hellip;
            <a href={iframeSrc}>Регистрирай се тук.</a>
          </iframe>
        </FormWrapper>
        <hr />
        <h1>Какво предстои след като се запишете за пазител на вота?</h1>
        <hr />
        <h2>Ще ви изпратим обучително видео и материали</h2>
        <p>
          В момента, в който ЦИК обявят здравния протокол и методически указания
          за предстоящите избори, ще изработим и изпратим обучително видео и
          материали за правата и задълженията на застъпниците. Всички тези
          материали ще бъдат на Ваше разположение и на сайта на кампанията -{' '}
          <a href="https://tibroish.bg">www.tibroish.bg</a>.
        </p>
        <hr />
        <h2>Ще ви разпределим по секции</h2>
        <p>
          След като общините обявят окончателния списък със секциите за
          предстоящите избори, ще бъдете разпределени в някоя от тях и ще Ви
          изпратим информация за номера и адреса на секцията, в която ще бъдете
          застъпник.
        </p>
        <hr />
        <h2>Ще подготвим документите</h2>
        <p>
          За да можете да се легитимирате като пазител на вота в изборния ден,
          ще трябва да разполагате с документ, който удостоверява, че сте
          застъпник (представител на коалиция) на Демократична България и бадж,
          който ще трябва да носите, докато сте в секцията. Веднага щом бъдете
          разпределени в секциите, ще се свържем с Вас, за да уточним как ще
          получите документите си.
        </p>
        <hr />
        <h2>Приложението “Ти броиш” </h2>
        <p>
          Когато мобилното ни приложение е налично за сваляне, ще получите имейл
          с инструкции как да го свалите и как да го ползвате в изборния ден.
          Тази информация ще бъде публикувана и на уебсайта на кампанията{' '}
          <a href="https://tibroish.bg">www.tibroish.bg</a>.
        </p>
      </MainContent>
    </Wrapper>
  );
};
