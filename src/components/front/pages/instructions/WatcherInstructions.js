import React from 'react';

import { Wrapper, MainContent } from '../../Front';

import Helmet from 'react-helmet';

import { MOBILE_WIDTH } from '../../Style';
import { YouTubeVideoEmbed } from '../Videos';

import styled from 'styled-components';

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

    let metaTitle = "Инструкции | Ти Броиш";
    let metaUrl = "https://tibroish.bg/instructions/watchers";
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
                <h1>Какво правят участниците в “Ти Броиш” на 11 юли 2021</h1>

                <hr/>
                <h2>ЧЛЕН НА СИК</h2>    
                <hr/>
                <ImagesContainer cols={1}>
                    <img src="/images/cik-organization/cik-organization-slide1.jpg"/>
                    <img src="/images/cik-organization/cik-organization-slide2.jpg"/>
                    <img src="/images/cik-organization/cik-organization-slide3.jpg"/>
                    <img src="/images/cik-organization/cik-organization-slide4.jpg"/>
                    <img src="/images/cik-organization/cik-organization-slide5.jpg"/>
                    <img src="/images/cik-organization/cik-organization-slide6.jpg"/>
                    <img src="/images/cik-organization/cik-organization-slide7.jpg"/>
                    <img src="/images/cik-organization/cik-organization-slide8.jpg"/>
                </ImagesContainer>
                <hr/>
                <h2>ЗАЩИТНИК НА ВОТА</h2>    
                <hr/>
                <YouTubeVideoEmbed videoId={"ePIlIW_dLfE"} />
                <p>
                    Изборният ден започва в 7:00 ч. и приключва в 20:00 ч. Може да приключи и по-късно - в 21:00 ч., 
                    ако има хора, които още желаят да гласуват пред пред изборното помещение.
                </p>
                <h3>КАК ПОКАЗВАМ, ЧЕ СЪМ ЗАЩИТНИК НА ВОТА?</h3>
                <ul>
                    <li>
                        Защитникът на вота ще има регистрация като застъпник или като представител на коалиция 
                        Демократична България. 
                    </li>
                    <li>
                        Всеки защитник на вота ще получи документ за регистрацията си, бадж, както и номер и адрес на 
                        секцията, към която е разпределен.
                    </li>
                </ul>
                <h3>КАКВО ПРАВЯ, КОГАТО ВЛЯЗА В ИЗБИРАТЕЛНАТА СЕКЦИЯ?</h3>
                <ul>
                    <li>
                        Отидете в посочената секция в началото на изборния ден - 7:00 часа или когато решите, но не 
                        по-късно от 16:00 часа!
                    </li>
                    <li>
                        Представете се на председателя на Секционната избирателна комисия (СИК) като му представите 
                        свой документ за самоличност и документа, който сте получили за застъпник или представител 
                        (не забравяйте да носите баджа си през цялото време).
                    </li>
                    <li>
                        Когато сте в секцията, сте длъжни да изпълнявате указанията на Председателя на секционната 
                        избирателна комисия. 
                    </li>
                </ul>
                <h3>КАКВО ДА ПРАВЯ ПО ВРЕМЕ НА ИЗБОРНИЯ ДЕН?</h3>
                <p>Заставате на мястото в изборната секция, определено от председателя на секционната комисия.</p>
                <p>По време на изборния ден имате право:</p>
                <ul>
                    <li>да наблюдавате процеса на гласуване;</li>
                    <li>
                        ако секционната комисия се събере да обсъди свое решение, 
                        имате право да присъствате на това обсъждане.
                    </li>
                    <li>
                        да излизате от изборната секция и да се връщате в нея до края на изборния ден 
                        (но задължително трябва да присъствате в секцията при приключване на изборния ден, защото 
                        след това няма да бъдете допуснати в нея).
                    </li>
                    <li>
                        да подавате жалби пред председателя на секционната комисия или пред районната избирателна комисия.
                    </li>
                    <li>
                        да подадете сигнал към юристите, които подпомагат работата на защитниците на вота, и те, от 
                        своя страна, да подадат жалба в РИК.
                    </li>
                    <li>
                        Винаги носете своя бадж, който ще Ви легитимира като застъпник или представител на коалиция, 
                        който, заедно с документите, които сме Ви предоставили, ще Ви легитимира в изборния ден.
                    </li>
                </ul>
                <p>По време на изборния ден нямате право:</p>
                <ul>
                    <li>да носите отличителни знаци на партия, коалиция или кандидат, регистрирани за участие в изборите.</li>
                    <li>да казвате на избирателите за кого да гласуват.</li>
                    <li>да нарушавате правилата в изборната секция, установени от секционната комисия.</li>
                </ul>
                <h3>КАКВО ПРАВЯ СЛЕД КРАЯ НА ИЗБОРНИЯ ДЕН И ПО ВРЕМЕ НА БРОЕНЕТО НА БЮЛЕТИНИТЕ?</h3>
                <ul>
                    <li>
                        Заставате на място, което е определено от председателя на секционната комисия. Това място 
                        трябва да Ви осигурява пряка видимост на процеса на преброяване на бюлетините.
                    </li>
                    <li>
                        Следите дали бюлетините се броят правилно.
                    </li>
                    <li>
                        Следите дали преброените гласове се записват точно в протокола на секционната комисия 
                        (в черновата и в беловата на протокола).
                    </li>
                </ul>
                <p>Какво имате право да правите по време на броенето на бюлетините?</p>
                <ul>
                    <li>Имате право да възразявате, когато някоя бюлетина не е правилно преброена.</li>
                    <li>
                        Ако секционната комисия не се съобрази с устното Ви възражение, имате право да поискате 
                        това възражение да се отрази в протокола.
                    </li>
                    <li>
                        Ако възражението Ви не бъде вписано в протокола, веднага подавате сигнал към юридическия 
                        екип, който ще подаде писмен сигнал до съответната Районна избирателна комисия.
                    </li>
                </ul>
                <p>Какво нямате право да правите?</p>
                <ul>
                    <li>Не може да пипате бюлетините или да настоявате Вие да ги преброявате.</li>
                    <li>Не може да нарушавате реда по време на броенето.</li>
                </ul>
                <h3>ВАЖНО!</h3>
                <ul>
                    <li>
                        Ако нарушите реда в избирателната секция, председателят на секционната комисия, може да 
                        разпореди извеждането Ви. Не бива да се стига до подобна ситуация. Запазете спокойствие.
                    </li>
                    <li>
                        Във всеки един момент се дръжте любезно, спокойно, без да повишавате тон или по друг начин 
                        да показвате грубо държание. Изпълнявайте указанията на председателя на секционната комисия. 
                    </li>
                    <li>
                        Не позволявайте да Ви провокират, не ги предизвиквайте, защото всяко подобно действие може да 
                        доведе до принудителното ви извеждане от секцията, което ще осуети работата ви на защитник на 
                        вота! 
                    </li>
                    <li>Не предизвиквайте с нищо и по никакъв начин председателите на СИК.</li>
                </ul>
                <p>Ако не сте съгласни с действията на секционната комисия може да направите следните неща:</p>
                <ul>
                    <li>да искате да се впише възражение в протокола</li>
                    <li>да подадете сигнал към нашите юристи през приложението “Ти броиш”.</li>
                </ul>
                <h3>КАКВО ДА ПРАВЯ СЛЕД КАТО БЮЛЕТИНИТЕ БЪДАТ ПРЕБРОЕНИ И ПРОТОКОЛИТЕ - СЪСТАВЕНИ?</h3>
                <ul>
                    <li>
                        Поискайте копие от окончателния и подписан протокол на секционната комисия 
                        (имате право на него, копието трябва да бъде направено в същата секция, в която се 
                        случва броенето).
                    </li>
                    <li>
                        След като получите копие на протокола, трябва да го качите в приложението “Ти броиш”. 
                    </li>
                </ul>
                <h3>КАКВИ МЕРКИ ЗА ПРЕВЕНЦИЯ ОТ КОВИД-19 ТРЯБВА ДА СПАЗВАМ?</h3>
                <ul>
                    <li>
                        Задължително трябва да носите защитна маска за нос и уста през цялото време, през което сте 
                        в сградата и в изборното помещение.
                    </li>
                    <li>
                        Носете със себе си резервни маски, защото те трябва да бъдат сменяни периодично  - когато се 
                        навлажнят или целостта им се наруши.
                    </li>
                    <li>
                        Защитната маска за нос и уста се сваля само при консумация на напитки или храна, което се 
                        препоръчва да се осъществява при възможност на открито или при спазване на физическа дистанция 
                        от поне 1,5 м от други лица.
                    </li>
                    <li>
                        При влизане в изборните помещения ще бъде измерена телесна Ви температура  с безконтактен 
                        термометър.
                    </li>
                    <li>
                        Лицата с повишена телесна температура (над 37,0°C) или с прояви на остри респираторни 
                        болести (кашлица, хрема, затруднено дишане и др.) не се допускат до избирателната секция.
                    </li>
                    <li>
                        Спазва се физическа дистанция от поне 1,5 м между горепосочените лица и останалите участници 
                        в изборния процес.
                    </li>
                    <li>
                        Редовно се измиват с вода и сапун или се обтриват ръцете с дезинфектант за ръце. Препоръчва 
                        се използване на ръкавици при контакт с предмети. Периодично ръкавиците се дезинфекцират, 
                        както се извършва дезинфекцията на ръцете. Периодично ръкавиците се сменят, като преди 
                        тяхното сваляне те се дезинфекцират, а след тяхното сваляне – ръцете се дезинфекцират или 
                        измиват с топла вода и сапун. Избягвайте да докосвате лицето си с недезинфекцирани/неизмити 
                        ръце или с ръкавици.
                    </li>
                    <li>
                        Ограничават се до минимум директните контакти (ръкостискане, прегръщане и др.). При 
                        невъзможност да ограничите контактите, направете дезинфекция на ръцете или измийте с топла 
                        вода и сапун след осъществен контакт.
                    </li>
                </ul>
            </MainContent>
        </Wrapper>
    );
};
