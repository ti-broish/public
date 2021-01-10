import React, { useEffect, useState, useContext } from 'react';

import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingScreen from '../layout/LoadingScreen';

import ResultsTable from '../components/ResultsTable';
import ResultsLine from '../components/ResultsLine';

import { ElectionContext } from '../Election'; 
import SubdivisionTable from '../components/SubdivisionTable';
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
                        <SubdivisionTable
                            parties={globalData.parties}
                            results={globalData.results}
                            subdivisions={Object.keys(data.admunits[Object.keys(data.admunits)[0]].districts).map(key => {
                                const district = data.admunits[Object.keys(data.admunits)[0]].districts[key];
                                return {
                                    number: key,
                                    name: district.name,
                                    results: district.results,
                                    totalValid: district.validVotes,
                                    totalInvalid: district.invalidVotes,
                                    voters: district.voters,
                                };
                            })}
                        /> :
                        <SubdivisionTable
                            parties={globalData.parties}
                            results={globalData.results}
                            subdivisions={Object.keys(data.admunits).map(key => {
                                return {
                                    number: key,
                                    name: data.admunits[key].name,
                                    results: data.admunits[key].results,
                                    totalValid: data.admunits[key].validVotes,
                                    totalInvalid: data.admunits[key].invalidVotes,
                                    voters: data.admunits[key].voters,
                                };
                            })}
                        />
                }
            </div>
    );
};