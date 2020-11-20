import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingScreen from './layout/LoadingScreen';
import { formatCount, formatPercentage } from '../Util';

export default props => {
    const params = useParams();
    const history = useHistory();

    const [data, setData] = useState(null);

    const refreshResults = () => {
        axios.get(`/data/regions/region-${params.region}.json`).then(res => {
            console.log(res.data);
            setData(res.data);
        }).catch(err => { if(!data) history.push('/') });
    };

    useEffect(() => {
        refreshResults();
    }, []);

    let displayParties = [];

    if(data) {
        displayParties = data.parties.sort((a, b) => b.validVotes - a.validVotes).slice(0, 7);
    }

    let protocolGroups = {};

    if(data) {
        data.sections.forEach(section => {
            if(!protocolGroups[section.place]) {
                protocolGroups[section.place] = [];
            }
            protocolGroups[section.place].push(section);
        });
    }

    return(
        !data? <LoadingScreen/> :
            <div id='regional-data'>
                <Link to='/'>Назад</Link>
                <h1>{data.name}</h1>
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
                <h1>Секции</h1>
                <div id='section-list'>
                {
                    Object.keys(protocolGroups).map(key => [
                        <h2>{key}</h2>,
                        protocolGroups[key].map(section => <Link to={`/section/${section.number}`}>{section.number}</Link>)
                    ])
                }
                </div>
            </div>
    );
};