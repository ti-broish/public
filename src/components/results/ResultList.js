import React from 'react';

import { Link } from 'react-router-dom';

export default props => {
    return(
        <div>

            <Link to='/results/evroizbori2019'>Европейски парламент 2019</Link>
            <Link to='/results/parliament2017'>Парламентарни избори 2017</Link>
        </div>
    );
};