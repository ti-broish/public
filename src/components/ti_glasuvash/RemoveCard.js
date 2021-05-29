import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const RemoveCardStyle = styled.h1`
    font-size: 16px;
    text-align: center;
    margin-top: 325px;
`;

export default props => {
    return (
        <RemoveCardStyle>
            <FontAwesomeIcon icon={faExclamationTriangle} style={{color: 'yellow', marginRight: '20px'}}/>
            Извадете картата, за да продължите.
        </RemoveCardStyle>
    );
};