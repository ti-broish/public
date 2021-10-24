import React from 'react';

import { Wrapper, MainContent } from '../../Front';
import Helmet from 'react-helmet';

export default (props) => {
  let metaTitle =
    'Как да снимаме процеса на установяване на резултатите | Ти Броиш';
  let metaUrl = 'https://tibroish.bg/instructions/how-to-take-photos';
  let metaDescription = `
        „Ти броиш“ е национална кампания, целяща да предотврати опитите за измами и манипулации 
        при броенето на гласовете на предстоящите парламентарни избори.
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
        <h1>КАК ДА СНИМАМЕ ПРОЦЕСА НА УСТАНОВЯВАНЕ НА РЕЗУЛТАТИТЕ</h1>
        <hr />
        <p>
          Всеки защитник на вота може да видеозаснема и да видеоизлъчва процеса
          на установяване на резултатите от гласуването в секцията, в която се
          намира. Видеозаснемането и видеоизлъчването започва след края на
          изборния ден, когато в секцията няма останали избиратели.
        </p>
        <p>
          Може да се извършва единствено в изборното помещение и в помещението
          на районната избирателна комисия. Не може да се заснемат избирателните
          списъци. Видеозаснемането и видеоизлъчването обхваща:
        </p>
        <ul>
          <li>действията на СИК след приключване на изборния ден;</li>
          <li>
            процеса на разпечатване от машината за гласуване на протокола с
            резултатите;
          </li>
          <li>
            процеса на броене на хартиени бюлетини, в секциите, в които се
            гласува с хартиени бюлетини;
          </li>
          <li>
            процеса на преброяване на хартиените разписки в случаите, когато се
            налага това преброяване;
          </li>
          <li>процеса на съставяне на протокола от СИК;</li>
          <li>
            процеса на предаване и приемане на протоколите от СИК в РИК и
            въвеждане на данните от протоколите на СИК.
          </li>
        </ul>
      </MainContent>
    </Wrapper>
  );
};
