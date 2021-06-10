import React from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const RemoveReceiptStyle = styled.div`
    h1 {
        font-weight: 400;
        margin: 367px 70px 0 64px;
        font-size: 20px;
    }
`;

const GreenCircle = styled.div`
    font-size: 88px;
    margin: 20px auto;
    width: 160px;
    height: 160px;
    border: 3px solid #3ff21a;
    border-radius: 50%;
    color: #3ff21a;
    padding: 30px 0 0 30px;
    box-sizing: border-box;
`;

export default props => {
    return (
        <RemoveReceiptStyle>
            <h1>Моля, вземете разписката от вашето гласуване и я поставете в избирателната кутия.</h1>
            <GreenCircle>
                <FontAwesomeIcon icon={faCheck}/>
            </GreenCircle>
        </RemoveReceiptStyle>
    );
};