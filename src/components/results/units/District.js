import React, { useState, useEffect, useContext } from 'react';

import Helmet from 'react-helmet';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingScreen from '../layout/LoadingScreen';
import ResultsTable from '../components/ResultsTable';
import ResultsLine from '../components/ResultsLine';

import { ElectionContext } from '../Election';
import SubdivisionTable, { SubdivisionTableDiv } from '../components/SubdivisionTable';
import Crumbs from '../components/Crumbs';

export default props => {
    const { unit } = useParams();
    const history = useHistory();
    const { election, globalData } = useContext(ElectionContext);

    const [data, setData] = useState(null);

    const refreshResults = () => {
        axios.get(`/results/${election}/${unit}/routeData.json`).then(res => {
            setData(res.data);
        }).catch(err => { if(!data) history.push('/'); });
    };

    useEffect(() => {
        refreshResults();
    }, []);

    const sectionsWithoutAddress = [];

    if(data) {
        Object.keys(data.sections).forEach(key => {
            let contained = false;
            Object.keys(data.addresses).forEach(addressKey => {
                if(data.addresses[addressKey].sections.includes(key)) {
                    contained = true;
                }
            });

            if(!contained) {
                sectionsWithoutAddress.push(key);
            }
        });
    }

    return(
        !data? <LoadingScreen/> :
            <div>
                <Helmet>
                    <title>{data.name}</title>
                </Helmet>
                <Crumbs data={data}/>
                <h1>Район {data.name}</h1>

                <ResultsTable
                    results={data.results} 
                    parties={globalData.parties} 
                    totalValid={data.validVotes} 
                    totalInvalid={data.invalidVotes}
                />

                <h1>Секции</h1>
                <SubdivisionTable
                    parties={globalData.parties}
                    results={globalData.results}
                    groupings={Object.keys(data.addresses).map(addressKey => {
                        return {
                            name: addressKey,
                            units: data.addresses[addressKey].sections
                        };
                    })}
                    subdivisions={Object.keys(data.sections).map(key => {
                        return {
                            number: key,
                            name: `Секция ${key}`,
                            results: data.sections[key].results,
                            totalValid: data.sections[key].validVotes,
                            totalInvalid: data.sections[key].invalidVotes,
                            voters: data.sections[key].voters,
                        };
                    })}
                />
            </div>
    );
};