import React from 'react';

import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';

import styled from 'styled-components';

import { Wrapper } from './Results';

const ResultLink = styled(Link)`
    width: 100%;
    color: blue;
    font-size: 25px;
    display: block;
`;

export default props => {
    return(
        <div>
            <Helmet>
                <title>Резултати</title>
            </Helmet>
            <Header title={'Резултати'}/>
            <Wrapper style={{minHeight: 'calc(100vh - 202px)'}}>
                <h1>Резултати от предишни избори</h1>
                <ResultLink to='/results/evroizbori2019'>Европейски парламент 2019</ResultLink>
                <ResultLink to='/results/parliament2017'>Парламентарни избори 2017</ResultLink>
            </Wrapper>
            <Footer/>
        </div>
    );
};