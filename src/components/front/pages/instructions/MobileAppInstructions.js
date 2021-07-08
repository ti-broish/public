import React, { useEffect } from 'react';

import Helmet from 'react-helmet';

import { Wrapper, MainContent } from '../../Front';

import styled from 'styled-components';

import { MOBILE_WIDTH } from '../../Style';
import { YouTubeVideoEmbed } from '../Videos';

const ImagesContainer = styled.div`
    text-align: center;

    img {
        width: calc(100% / ${props => props.cols});
        max-width: 190px;
        margin: 10px;
    }

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        img {
            width: 100%;
            margin: 10px 0;
            max-width: 300px;
        }
    }
`;

const AppBadges = styled.div`
    text-align: center;
    margin-bottom: 35px;

    img {
        height: 50px;
        margin: 0 10px;
    }
`;

export default props => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let metaTitle = "Инструкции | Ти Броиш";
    let metaUrl = "https://tibroish.bg/instructions/mobile-app";
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
                <YouTubeVideoEmbed videoId={"DHI5b53Hyik"} />
                <h1>Инструкция за използване на мобилно приложение “Ти броиш”</h1>
                <hr/>
                <AppBadges>
                    <a href="https://play.google.com/store/apps/details?id=bg.dabulgaria.tibroish&hl=bg">
                        <img src='/google-play-badge.png'/>
                    </a>
                    <a href="https://apps.apple.com/us/app/ti-broish/id1555255776">
                        <img src='/apple-badge.svg'/>
                    </a>
                    <a href="https://appgallery.huawei.com/#/app/C103937827">
                        <img src='/huawei-badge.png'/>
                    </a>
                </AppBadges>
                <h2>I. Регистрация</h2>
                <p>
                    Всеки участник в инициативата “Ти броиш” трябва да разполага с профил в приложението, за да може 
                    да изпраща протоколи и сигнали. За целта е необходимо да влезете през меню “Регистрация” и да 
                    попълните личните си данни в полетата на формата. Задължително е всички полета да бъдат правилно 
                    попълнени на кирилица и да натиснете бутон “Създай профил”. След успешна регистрация ще получите 
                    имейл за потвърждение на въведената от Вас електронна поща.
                </p>
                <ImagesContainer cols={3}>
                    <img src="/images/mobile_instructions_2_0/I-1.jpg"/>
                    <img src="/images/mobile_instructions_2_0/I-2.jpg"/>
                    <img src="/images/mobile_instructions_2_0/I-3.jpg"/>
                </ImagesContainer>
                <hr/>
                <h2>II. Забравена парола</h2>
                <p>
                    Всеки регистриран потребител може да възстанови паролата за профила си през меню “Забравена 
                    парола”. Необходимо е да се въведе имейл адресът, с който е направена регистрацията, да се 
                    отвори линкът от полученото съобщение и да се въведе новата парола.
                </p>
                <ImagesContainer cols={3}>
                    <img src="/images/mobile_instructions_2_0/II-1.jpg"/>
                </ImagesContainer>
                <hr/>
                <h2>III. Навигация</h2>
                <p>
                    Навигацията в приложението се извършва от основния екран или през меню, разположено в горния ляв 
                    ъгъл. Участник в кампанията може да редактира или изтрие регистрацията си от меню “Профил”, 
                    освен ако вече не е изпратил към платформата протокол или сигнал. След края на периода за 
                    съхранение на данните, който е 30 дни, всички регистрации се изтриват автоматично, освен ако 
                    участникът не е дал изрично съгласието си данните да бъдат запазени и за следващите избори. 
                </p>
                <ImagesContainer cols={3}>
                    <img src="/images/mobile_instructions_2_0/III-1.jpg"/>
                    <img src="/images/mobile_instructions_2_0/III-2.jpg"/>
                    <img src="/images/mobile_instructions_2_0/III-3.jpg"/>
                </ImagesContainer>
                <hr/>
                <h2>IV. Изпрати протокол</h2>
                <p>
                    От меню “Изпрати на протокол” участникът регистрира номера на секцията, в която присъства. 
                    Протокол се добавя чрез отваряне на галерията от бутон “Избери снимки”, ако вече е сниман от участника или чрез включване на 
                    камерата от бутон “Снимай”. При включване и на двете функционалности за първи път, трябва да се 
                    разреши достъп на приложението до съответния ресурс. Достъпът е активен само и единствено докато 
                    се използва приложението. С натискането на бутона “Изпрати” завършва и процесът по изпращане на протокола от секцията. 
                </p>
                <ImagesContainer cols={3}>
                    <img src="/images/mobile_instructions_2_0/IV-1.jpg"/>
                    <img src="/images/mobile_instructions_2_0/IV-2.jpg"/>
                    <img src="/images/mobile_instructions_2_0/IV-3.jpg"/>
                    <img src="/images/mobile_instructions_2_0/IV-4.jpg"/>
                    <img src="/images/mobile_instructions_2_0/IV-5.jpg"/>
                    <img src="/images/mobile_instructions_2_0/IV-6.jpg"/>
                </ImagesContainer>
                <hr/>
                <h2>V. Изпрати сигнал</h2>
                <p>
                    От меню “Изпрати сигнал” участникът регистрира нередност, свързана с изборните секции. Сигнали 
                    могат да се подават както в деня за размисъл, така и в изборния ден. Задължително се попълват 
                    всички полета за избирателния район, където е засечено нарушението, а ако е пред или вътре в 
                    избирателна секция - попълва се и нейният номер. Полето “Район” е достъпно и се попълва само 
                    за секции в градовете София, Пловдив и Варна. Снимки към сигнал се добавят чрез отваряне на 
                    галерията от бутон “Избери снимки”, ако вече са налични, или чрез включване на камерата от 
                    бутон “Снимай”. При включване и на двете функционалности за първи път, трябва да се разреши 
                    достъп на приложението до съответния ресурс. Достъпът е активен само и единствено докато се 
                    използва приложението. Сигналът се изпраща с натискане на бутон “Изпрати”.
                </p>
                <ImagesContainer cols={3}>
                    <img src="/images/mobile_instructions_2_0/V-1.jpg"/>
                    <img src="/images/mobile_instructions_2_0/V-2.jpg"/>
                    <img src="/images/mobile_instructions_2_0/V-3.jpg"/>
                </ImagesContainer>
                <hr/>
                <h2>VI. Излъчване на живо</h2>
                <p>
                    От меню “Ти броиш Live” участникът предава на живо процеса на броене на хартиените бюлетини, разпечатване 
                    на финалната разписка от машините и попълване на протоколи в изборната секция. Видеозаснемане 
                    може да се прави единствено след обявяване на края на изборния ден от секционната комисия. Задължително 
                    се попълват всички полета за локацията на самата секция и номера ѝ. Полето “Район” е достъпно и се попълва 
                    само за секции в градовете София, Пловдив и Варна.  При включване на функционалността за първи път,
                    трябва да се разреши достъп на приложението до съответния ресурс. Достъпът е активен само и единствено докато се 
                    използва приложението. Излъчването се стартира и спира с натискане на червения бутон. Надпис "На живо" показва, дали участникът излъчва или не.
                </p>
                <ImagesContainer cols={2}>
                    <img src="/images/mobile_instructions_2_0/VI-1.jpg"/>
                    <img src="/images/mobile_instructions_2_0/VI-2.jpg"/>
                    <img src="/images/mobile_instructions_2_0/VI-3.jpg"/>
                    <img src="/images/mobile_instructions_2_0/VI-4.jpg"/>
                </ImagesContainer>
                <hr/>
                <h2>VII. Отбелязване</h2>
                <p>
                    От меню “Отбелязване” участникът регистрира присъстието си в поверената му секция. Отбелязването се потвърждава с натискане на бутон “Изпрати”. 
                    Препоръчително е да се направи от предния или най-късно сутринта в изборния ден. Това ще спомогне за по-добрата организация и логистика на застъпници 
                    и наблюдатели и по-добра комуникация с членовете на СИК.
                </p>
                <ImagesContainer cols={2}>
                    <img src="/images/mobile_instructions_2_0/VII-1.jpg"/>
                    <img src="/images/mobile_instructions_2_0/VII-2.jpg"/>
                </ImagesContainer>
                <hr/>
                <h2>VIII. Права и задължения</h2>
                <p>
                    В тази секция можете да се запознаете в детайли с правата и задълженията на защитник на вота в 
                    изборния ден. 
                </p>
                <ImagesContainer cols={1}>
                    <img src="/images/mobile_instructions_2_0/VIII-1.jpg"/>
                </ImagesContainer>
            </MainContent>
        </Wrapper>
    )
};
