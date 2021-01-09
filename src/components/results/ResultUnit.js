import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Region from './units/Region.js';
import Admunit from './units/Admunit.js';
import District from './units/District.js';
import Section from './units/Section.js';

export default props => {
    const params = useParams();

    useEffect(() => {window.scrollTo(0, 0);}, []);

    return(
        params.unit.length === 2
        ? <Region/> 
        : params.unit.length === 4
        ? <Admunit/>
        : params.unit.length === 6
        ? <District/>
        : params.unit.length === 9
        ? <Section/>
        : null
    )
};