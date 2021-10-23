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
        <h1>ИЗБОРИ 14.11.2021</h1>
        <h2>Добре дошли</h2>
        <p>Поставете картата в слота за четене</p>
        <img src="/ti-glasuvash/machine-vote-card.png" />
      </InsertCardStyle>
    );
};