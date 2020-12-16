import React, { useEffect } from 'react';

import Helmet from 'react-helmet';

import { Wrapper, MainContent } from '../Front';

export default props => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <Wrapper>
            <Helmet>
                <title>Застъпници | Ти Броиш</title>
                <link rel="canonical" href={"https://tibroish.bg/watchers/"} />
                <meta name="description" content={""}/>
            </Helmet>
            <MainContent>
                <h1>За застъпниците</h1>
                <hr/>
                <h2>Защитниците на вота имат специален статут в изборното законодателство</h2>
                <p>
                    Защитниците на вота присъстват в изборните секции в ролята на “застъпници”, 
                    тъй като това е статутът, който е определен за тях в изборното ни законодателство.
                </p>
                <p> 
                    Участниците в Националната кампания “Ти броиш” формално ще бъдат застъпници на 
                    „Демократична България“, което ще им даде право да присъстват във всяка изборна 
                    секция в предварително избрания изборен район.
                </p>
                <p>
                    Както за всички участници в изборния процес, така и за застъпниците важи забраната за 
                    агитация в предизборния и в изборния ден.
                </p>
                <p>
                    Ако секцията, в която ще присъствате при броенето на вота е различна от секцията, 
                    в която можете да упражните правото си на глас (според избирателните списъци на ЦИК), 
                    трябва да упражните правото си на глас в съответната секция и тогава да отидете в тази, 
                    в която ще присъствате в ролята на защитник на вота.
                </p>
                <p>
                    Всеки защитник на вота ще се легитимира в изборната секция със специално издадено 
                    удостоверение за застъпник, както и с бадж с определени от ЦИК формат и размери.
                </p>
                <hr/>
                <h2>Всеки защитник на вота има права</h2>
                <p>
                    За да се гарантират честни и демократични избори, защитниците на вота (т.нар. застъпници) 
                    имат редица права преди и по време на изборния ден.
                </p> 
                <p>
                    Преди изборния ден застъпниците имат право да присъстват на заседанията на 
                    избирателните комисии и да изказват мнения, становища и възражения, които се записват в 
                    протокола. Застъпникът има право да присъства при получаване на изборните книжа и материали 
                    от СИК в предизборния ден.
                </p>
                <p>
                    В изборния ден застъпниците имат право да присъстват в изборното помещение при откриването и 
                    закриването на изборния ден, по време на гласуването, както и при отварянето на избирателните 
                    кутии и при установяване на резултатите от гласуването, както и да получат право на пряка 
                    видимост към всички тези процеси.
                </p>
                <p>
                    Застъпникът има право да присъства при въвеждането в изчислителните пунктове на данните от 
                    протоколите на СИК с резултатите от гласуването в избирателните секции;
                </p>
                <p>
                    Застъпникът има право да подава жалби и сигнали за нарушения на изборния процес:
                </p>
                <ul>
                    <li>пред съответната СИК – за нарушения в нейния район (напр. агитиране близо до секцията);</li>
                    <li>пред съответната РИК – за нарушения от страна на СИК и други нарушения на изборния ден;</li>
                    <li>пред ЦИК – за нарушения на СИК извън страната.</li>
                </ul>
                <p>
                    Освен права, застъпниците имат и задължения - да спазват реда за свободното и спокойно 
                    протичане на гласуването в избирателната секция, да не пречат на гласуването в избирателната 
                    секция и да изпълняват указанията на председателя и решенията на секционната избирателна комисия.
                </p>   
                <hr/>
                <h2>Какво могат да правят защитниците на вота в изборния ден?</h2>
                <p>
                    Защитниците на вота (или т.нар. „застъпници“) имат право да присъстват в изборното помещение 
                    и да следи процеса на преброяване на резултатите от гласуването и изготвянето на протокола 
                    на секционната избирателна комисия.
                </p>
                <p>
                    Застъпникът има право - и е задължително и изключително важно - да получи копие от 
                    подписания от членовете на СИК протокол с резултатите от гласуването в избирателната 
                    секция след приключване на избирателния ден в съответната секция!
                </p>
                <p>
                    Копието се прави в съответната СИК или РИК. Копието на протокола се подпечатва на всяка страница 
                    с печата на комисията и се подписва от председателя, заместник-председател и секретаря. При 
                    получаването на копието, застъпникът се вписва в списък на лицата, получили копие от протокола.
                </p>
                <p>
                    Изборният ден се открива в 7,00 часа и приключва в 20.00 часа местно време.
                </p>
                <hr/>
                <h2>Полезни връзки:</h2>
                <ul>
                    <li>
                        <a href="https://www.cik.bg/bg/decisions/4128/2017-01-26">
                            https://www.cik.bg/bg/decisions/4128/2017-01-26
                        </a>
                    </li>
                    <li>
                        <a href="https://www.cik.bg/bg/decisions/4129/2017-01-26">
                            https://www.cik.bg/bg/decisions/4129/2017-01-26
                        </a>
                    </li>
                </ul>
            </MainContent>
        </Wrapper>
    )
};