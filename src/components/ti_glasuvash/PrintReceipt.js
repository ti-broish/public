import React, { useEffect } from 'react';

import styled from 'styled-components';

const PrintReceiptStyle = styled.div`
    text-align: center;

    h1 {
        font-size: 37px;
        margin-top: 120px;
        margin-bottom: 20px;
    }

    p {
        font-size: 17px;
        margin-bottom: 45px;
    }

    img {
        width: 200px;
        margin: 0 auto;
        display: block;
    }

    h3 {
        font-size: 15px;
        margin-top: 30px;
    }
`;

export default props => {

    useEffect(() => {
        setTimeout(() => {
            props.printReceipt();
        }, 1000);
        
        setTimeout(() => {
            props.receiptPrintedDone();
        }, 5000);
    }, []);

    return (
        <PrintReceiptStyle>
            <h1>Благодаря Ви!</h1>
            <p>Отпечатване на разписката</p>
            <img src='/ti-glasuvash/machine-vote-print.png'/>
            <h3>Моля изчакайте...</h3>
        </PrintReceiptStyle>
    );
};