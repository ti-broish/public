import React, { useEffect } from 'react';

import Helmet from 'react-helmet';

import { Wrapper, MainContent } from '../Front';

import styled from 'styled-components';

import { MOBILE_WIDTH } from '../Style';

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
                <h1>Инструкция за използване на мобилно приложение “Ти броиш”</h1>
                <hr/>
                <h2>I. Регистрация</h2>
                <p>
                    Всеки участник в инициативата “Ти броиш” трябва да разполага с профил в приложението, 
                    за да може да изпраща протоколи и сигнали. За целта е необходимо да влезете през меню 
                    “Регистрация” и да попълните личните си данни в полетата на формата. Задължително е 
                    всички полета да бъдат правилно попълнени на кирилица. След успешна регистрация ще 
                    получите имейл за потвърждение на въведената от Вас електронна поща. 
                </p>
                <ImagesContainer cols={3}>
                    <img src="/images/instructions/Screenshot_20210207-190623_Ti broish.jpg"/>
                    <img src="/images/instructions/Screenshot_20210207-191258_Ti broish.jpg"/>
                    <img src="/images/instructions/Screenshot_20210207-191302_Ti broish.jpg"/>
                </ImagesContainer>
                <hr/>
                <h2>II. Навигация</h2>
                <p>
                    Навигацията в приложението се извършва от основния екран или през меню, разположено в 
                    горния ляв ъгъл. Участник в кампанията може да редактира или изтрие регистрацията си от 
                    меню “Профил”, освен ако вече не е изпратил към платформата протокол или сигнал. След края 
                    на периода за съхранение на данните, който е 30 дни, всички регистрации се изтриват автоматично, 
                    освен ако участникът не е дал изрично съгласието си данните да бъдат запазени и за следващите 
                    избори. 
                </p>
                <ImagesContainer cols={3}>
                    <img src="/images/instructions/Screenshot_20210207-194129_Ti broish.jpg"/>
                    <img src="/images/instructions/Screenshot_20210207-194145_Ti broish.jpg"/>
                    <img src="/images/instructions/Screenshot_20210207-194255_Ti broish.jpg"/>
                </ImagesContainer>
                <hr/>
                <h2>III. Изпрати протокол</h2>
                <p>
                    От меню “Изпрати протокол” участникът регистрира данните за секцията, в която присъства. 
                    Задължително се попълват всички полета за локацията на самата секция и номера ѝ. Полето “Район” 
                    е достъпно и се попълва само за секции в градовете София, Пловдив и Варна. Протокол се добавя 
                    чрез отваряне на галерията от бутон “Качи снимка”, ако вече е сниман от участника или чрез 
                    включване на камерата от бутон “Снимай”. При включване и на двете функционалности за първи път, 
                    трябва да се разреши достъп на приложението до съответния ресурс. Достъпът е активен само и 
                    единствено докато се използва приложението. С бутон “Приложи” се преминава към екрана за 
                    въвеждане на броя гласове за участващите на изборите партии и коалиции. Пълен списък на 
                    участниците в изборите може да се достъпи с бутона “Добави резултат”, след което се добавят и 
                    получените гласове, вписани в протокола. Всеки участник, използващ приложението “Ти броиш”, 
                    може да въведе получените гласове на всички партии и коалиции, които са се явили на изборите. 
                    С натискането на бутона “Изпрати резултатите” завършва и процесът по изпращане на протокола от 
                    секцията. 
                </p>
                <ImagesContainer cols={3}>
                    <img src="/images/instructions/Screenshot_20210207-194421_Ti broish.jpg"/>
                    <img src="/images/instructions/Screenshot_20210207-194400_Ti broish.jpg"/>
                    <img src="/images/instructions/Screenshot_20210207-194959_Ti broish.jpg"/>
                    <img src="/images/instructions/Screenshot_20210207-194428_Permission controller.jpg"/>
                    <img src="/images/instructions/Screenshot_20210207-194457_Permission controller.jpg"/>
                    <img src="/images/instructions/Screenshot_20210207-194530_Ti broish.jpg"/>
                </ImagesContainer>
                <hr/>
                <h2>IV. Изпрати сигнал</h2>
                <p>
                    От меню “Изпрати сигнал” участникът регистрира нередност, свързана с изборните секции. 
                    Сигнали могат да се подават както в деня за размисъл, така и в изборния ден. Задължително се 
                    попълват всички полета за избирателния район, където е засечено нарушението, а ако е пред 
                    или вътре в избирателна секция - попълва се и нейния номер. Полето “Район” е достъпно и се 
                    попълва само за секции в градовете София, Пловдив и Варна. Снимки към сигнал се добавят 
                    чрез отваряне на галерията от бутон “Качи снимка”, ако вече са налични, или чрез включване 
                    на камерата от бутон “Снимай”. При включване и на двете функционалности за първи път, 
                    трябва да се разреши достъп на приложението до съответния ресурс. Достъпът е активен само и 
                    единствено докато се използва приложението. Сигналът се изпраща с натискане на бутон “Приложи”.
                </p>
                <ImagesContainer cols={3}>
                    <img src="/images/instructions/Screenshot_20210207-195749_Ti broish.jpg"/>
                    <img src="/images/instructions/Screenshot_20210207-195848_Ti broish.jpg"/>
                    <img src="/images/instructions/Screenshot_20210207-200121_Ti broish.jpg"/>
                </ImagesContainer>
                <hr/>
                <h2>V. Права и задължения</h2>
                <p>
                    В тази секция можете да се запознаете в детайли с правата и задълженията на защитник на вота в 
                    изборния ден. 
                </p>
                <ImagesContainer cols={1}>
                    <img src="/images/instructions/Screenshot_20210207-194307_Ti broish.jpg"/>
                </ImagesContainer>
            </MainContent>
        </Wrapper>
    )
};