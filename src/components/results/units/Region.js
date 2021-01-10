import React, { useEffect, useState, useContext } from 'react';

import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingScreen from '../layout/LoadingScreen';

import ResultsTable from '../components/ResultsTable';
import ResultsLine from '../components/ResultsLine';

import { ElectionContext } from '../Election'; 
import { SubdivisionTableDiv } from '../components/SubdivisionTable';
import Crumbs from '../components/Crumbs';

export default props => {
    const { election, globalData } = useContext(ElectionContext);
    const { unit } = useParams();
    const history = useHistory();

    const [data, setData] = useState(null);

    const refreshResults = () => {
        axios.get(`/results/${election}/${unit}/routeData.json`).then(res => {
            setData(res.data);
        }).catch(err => { if(!data) history.push('/') });
    };

    useEffect(() => {
        refreshResults();
    }, []);

    return(
        !data? <LoadingScreen/> :
            <div>
                <Crumbs data={data}/>
                <h1>{data.number}. {data.name}</h1>
                <ResultsTable
                    results={data.results} 
                    parties={globalData.parties} 
                    totalValid={data.validVotes} 
                    totalInvalid={data.invalidVotes}
                />
                <h1>{Object.keys(data.admunits).length === 1? 'Райони' : 'Общини'}</h1>
                {
                    Object.keys(data.admunits).length === 1?
                        <div className='subdivision-table'>
                            <SubdivisionTableDiv>
                                <tbody>
                                {
                                    Object.keys(data.admunits[Object.keys(data.admunits)[0]].districts).map(districtKey => 
                                        <tr>
                                            <td>
                                            <Link to={`/results/${election}/${unit}${Object.keys(data.admunits)[0]}${districtKey}`}>
                                                {data.admunits[Object.keys(data.admunits)[0]].districts[districtKey].name}
                                            </Link>
                                            </td>
                                            <td>
                                            <ResultsLine
                                                results={data.admunits[Object.keys(data.admunits)[0]].districts[districtKey].results} 
                                                parties={globalData.parties}
                                                totalValid={data.admunits[Object.keys(data.admunits)[0]].districts[districtKey].validVotes} 
                                                totalInvalid={data.admunits[Object.keys(data.admunits)[0]].districts[districtKey].invalidVotes}
                                                thin
                                            /> 
                                            </td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </SubdivisionTableDiv>
                        </div> :
                        <SubdivisionTableDiv>
                            <tbody>
                            {
                                Object.keys(data.admunits).map(key => 
                                    <tr>
                                        <td>
                                            <Link to={`/results/${election}/${unit}${key}`}>
                                                {data.admunits[key].name}
                                            </Link>
                                        </td>
                                        <td>
                                        <ResultsLine
                                            results={data.admunits[key].results} 
                                            parties={globalData.parties}
                                            totalValid={data.admunits[key].validVotes} 
                                            totalInvalid={data.admunits[key].invalidVotes}
                                            thin
                                        /> 
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </SubdivisionTableDiv>
                }
            </div>
    );
};