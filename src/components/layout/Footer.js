import React from 'react';

import styled from 'styled-components';

const FooterDiv = styled.footer`
    background-color: #ddd;
    padding: 10px;
    box-sizing: border-box;
    height: 71px;

    p {
        text-align: center;
        font-weight: bold;
        color: #555;
    }
`;  

export default props => {
    return(
        <FooterDiv>
            <p>Това е фуутър {new Date().getFullYear()}</p>
        </FooterDiv>
    )
};
