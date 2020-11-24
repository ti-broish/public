import React, { useEffect, useState } from 'react';

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
        axios.get(`/data/regions/region-${params.region}.json`).then(res => {
            console.log(res.data);
            setData(res.data);
        }).catch(err => { if(!data) history.push('/') });
    };

    useEffect(() => {
        refreshResults();
    }, []);

    return(
        !data? <LoadingScreen/> :
            <div id='regional-data'>
                <Link to='/'>Назад</Link>
                <h1>{data.name}</h1>
                <ResultsTable
                    results={data.results} 
                    parties={props.globalData.parties} 
                    totalValid={data.validVotes} 
                    totalInvalid={data.invalidVotes}
                />
                <h1>{Object.keys(data.admunits).length === 1? 'Райони' : 'Общини'}</h1>
                {
                    Object.keys(data.admunits).length === 1?
                        <table className='subdivision-table'>
                            <tbody>
                            {
                                Object.keys(data.admunits[Object.keys(data.admunits)[0]].districts).map(districtKey => 
                                    <tr>
                                        <td>
                                        <Link to={`/district/${params.region}-${Object.keys(data.admunits)[0]}-${districtKey}`}>
                                            {data.admunits[Object.keys(data.admunits)[0]].districts[districtKey].name}
                                        </Link>
                                        </td>
                                        <td>
                                        <ResultsLine
                                            results={data.admunits[Object.keys(data.admunits)[0]].districts[districtKey].results} 
                                            parties={props.globalData.parties}
                                            totalValid={data.admunits[Object.keys(data.admunits)[0]].districts[districtKey].validVotes} 
                                            totalInvalid={data.admunits[Object.keys(data.admunits)[0]].districts[districtKey].invalidVotes}
                                            thin
                                        /> 
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table> :
                        <table className='subdivision-table'>
                            <tbody>
                            {
                                Object.keys(data.admunits).map(key => 
                                    <tr>
                                        <td>
                                            <Link to={`/admunit/${params.region}-${key}`}>
                                                {data.admunits[key].name}
                                            </Link>
                                        </td>
                                        <td>
                                        <ResultsLine
                                            results={data.admunits[key].results} 
                                            parties={props.globalData.parties}
                                            totalValid={data.admunits[key].validVotes} 
                                            totalInvalid={data.admunits[key].invalidVotes}
                                            thin
                                        /> 
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                }
            </div>
    );
};