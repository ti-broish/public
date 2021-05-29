import React, { useState } from 'react';
import { MachineScreen, MachineFrame, ReceiptSlot, CardSlot } from './TiGlasuvash';

import styled from 'styled-components';

const InsertCardStyle = styled.div`
    text-align: center;

    h1 {
        font-size: 15px;
        margin-top: 110px;
        margin-bottom: 60px;
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
            <h1>Добре дошли в Избори за народни представители в България 2021</h1>
            <p>Поставете картата в слота за четене</p>
            <img src='/ti-glasuvash/machine-vote-card.png'/>
        </InsertCardStyle>
    );
};