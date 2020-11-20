import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingScreen from './layout/LoadingScreen';
import { formatCount, formatPercentage } from '../Util';

export default props => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/data/global-results.json').then(res => {
            console.log(res.data);
            setData(res.data);
        });
    }, []);

    let displayParties = [];

    if(data) {
        displayParties = data.parties.sort((a, b) => b.validVotes - a.validVotes).slice(0, 7);
    }

    return(
        !data? <LoadingScreen/> :
            <div id='global-data'>
                <h1>Общи резултати</h1>
                <table>
                    <tbody>
                        {
                            displayParties.map(party => 
                                <tr>
                                    <td>{party.number}</td>
                                    <td>{party.name}</td>
                                    <td>{formatCount(party.validVotes)}</td>
                                    <td>{formatPercentage(party.validVotes/data.validVotes)}%</td>
                                    {/*<td>{party.invalidVotes}</td>*/}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <p>Общо действителни гласове: {data.validVotes}</p>
                <h1>Резултати по райони</h1>
                <ul>
                    {
                        data.regions.map(region =>
                            <li>
                                <Link to={`region/${region.number}`}>
                                    {region.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
    );
};