import React from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const RemoveReceiptStyle = styled.div`
    h1, p {
        text-align: center;
    }
    p {
        font-size: 20px;
        margin: auto 40px;
    }
`;

const GreenCircle = styled.div`
    font-size: 88px;
    margin: 50% auto 0;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    color: white;
    padding: 30px;
    box-sizing: border-box;
    background-color: green;
`;

export default props => {
    return (
        <RemoveReceiptStyle>
            <GreenCircle>
                <FontAwesomeIcon icon={faCheck}/>
            </GreenCircle>
            <h1>Разписката е готова</h1>
            <p>
                Моля, вземете разписката от Вашето гласуване и я поставете
                в специална кутия за разписки за машинно гласуване, намираща се на
                масата пред членовете на СИК.
            </p>
        </RemoveReceiptStyle>
    );
};
