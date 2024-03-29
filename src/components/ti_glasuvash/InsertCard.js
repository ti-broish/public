import React, { useState } from 'react';
import { MachineScreen, MachineFrame, ReceiptSlot, CardSlot } from './TiGlasuvash';

import styled from 'styled-components';

const InsertCardStyle = styled.div`
    text-align: center;

    h1 {
        font-size: 20px;
        margin-top: 110px;
    }

    h2 {
        font-size: 14px;
        margin-bottom: 60px;
        font-weight: 300;
    }

    p {
        font-size: 14px;
        margin-bottom: 50px;
    }

    img {
        width: 185px;
    }
`;

export default props => {
    return (
      <InsertCardStyle>
        <h1>Избори за Народно събрание 02 април 2023 г.</h1>
        <h2><b>Добре дошли</b></h2>
        <p>Натиснете върху картата, за да я поставите.</p>
        <img src="/ti-glasuvash/machine-vote-card.png" />
      </InsertCardStyle>
    );
};
