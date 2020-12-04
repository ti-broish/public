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
        axios.get(`/data/admunits/admunit-${params.admunit}.json`).then(res => {
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
                <h1>Община (или държава)</h1>
                <ResultsTable
                    results={data.results} 
                    parties={props.globalData.parties} 
                    totalValid={data.validVotes} 
                    totalInvalid={data.invalidVotes}
                />
                <h1>Райони/секции</h1>
                <div className='subdivision-table'>
                    <table>
                    <tbody>
                    {
                        Object.keys(data.towns).map(key => [
                            <tr>
                                <td style={{textAlign: 'left'}}><b>{data.towns[key].name}</b></td>
                                <td></td>
                            </tr>,
                            Object.keys(data.towns[key].districts).map(districtKey =>
                                districtKey === '00'? null :
                                    <tr>
                                        <td><Link to={`/district/${params.admunit}-${districtKey}`}>
                                                {data.districts[districtKey].name}
                                            </Link>
                                        </td>
                                        <td>
                                            <ResultsLine
                                                results={data.districts[districtKey].results} 
                                                parties={props.globalData.parties}
                                                totalValid={data.districts[districtKey].validVotes} 
                                                totalInvalid={data.districts[districtKey].invalidVotes}
                                                thin
                                            /> 
                                        </td>
                                    </tr>
                            ),
                            Object.keys(data.towns[key].districts).map(districtKey => 
                                districtKey !== '00'? null : 
                                data.towns[key].districts[districtKey].sections.map(sectionKey =>
                                <tr>
                                    <td>Секция {sectionKey}</td>
                                    <td>
                                        <ResultsLine
                                            results={data.districts[districtKey].sections[sectionKey].results} 
                                            parties={props.globalData.parties}
                                            totalValid={data.districts[districtKey].sections[sectionKey].validVotes} 
                                            totalInvalid={data.districts[districtKey].sections[sectionKey].invalidVotes}
                                            thin
                                        /> 
                                    </td>
                                </tr>
                                )
                            )
                        ])
                    }
                    </tbody>
                    </table>
                </div>
            </div>
    );
};