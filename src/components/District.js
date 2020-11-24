import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingScreen from './layout/LoadingScreen';
import ResultsTable from './ResultsTable';
import ResultsLine from './ResultsLine';

export default props => {

    const params = useParams();
    const history = useHistory();

    const [data, setData] = useState(null);

    const refreshResults = () => {
        axios.get(`/data/districts/district-${params.district}.json`).then(res => {
            console.log(res.data);
            setData(res.data);
        }).catch(err => { if(!data) history.push('/') });
    };

    useEffect(() => {
        refreshResults();
    }, []);

    return(
        !data? <LoadingScreen/> :
            <div>
                <Link to='/'>Назад</Link>
                <h1>Район (на град)</h1>

                <ResultsTable
                    results={data.results} 
                    parties={props.globalData.parties} 
                    totalValid={data.validVotes} 
                    totalInvalid={data.invalidVotes}
                />

                <h1>Секции</h1>
                <table className='subdivision-table'>
                    <tbody>
                    {
                        Object.keys(data.sections).map(key => 
                            <tr>
                                <td>
                                    Секция {key}
                                </td>
                                <td>
                                <ResultsLine
                                    results={data.sections[key].results} 
                                    parties={props.globalData.parties}
                                    totalValid={data.sections[key].validVotes} 
                                    totalInvalid={data.sections[key].invalidVotes}
                                    thin
                                /> 
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
    );
};