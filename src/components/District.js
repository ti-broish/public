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
                <Link to='/'>Назад</Link>
                <h1>Район (на град)</h1>

                <ResultsTable
                    results={data.results} 
                    parties={props.globalData.parties} 
                    totalValid={data.validVotes} 
                    totalInvalid={data.invalidVotes}
                />

                <h1>Секции</h1>
                <div className='subdivision-table'>
                    <table>
                        <tbody>
                        {
                            Object.keys(data.addresses).map(addressKey => [
                                <tr><td colSpan={2} style={{textAlign: 'left'}}><b>{addressKey}</b></td></tr>,
                                data.addresses[addressKey].sections.map(sectionKey =>
                                    <tr>
                                        <td>Секция {sectionKey}</td>
                                        <td>
                                            <ResultsLine
                                                results={data.sections[sectionKey].results} 
                                                parties={props.globalData.parties}
                                                totalValid={data.sections[sectionKey].validVotes} 
                                                totalInvalid={data.sections[sectionKey].invalidVotes}
                                                thin
                                            /> 
                                        </td>
                                    </tr>
                                )
                            ])
                        }
                        {
                            sectionsWithoutAddress.length === 0? null : [
                                <tr><td><b>Неизяснен адрес</b></td><td></td></tr>,
                                sectionsWithoutAddress.map(sectionKey =>
                                    <tr>
                                        <td>Секция {sectionKey}</td>
                                        <td>
                                            <ResultsLine
                                                results={data.sections[sectionKey].results} 
                                                parties={props.globalData.parties}
                                                totalValid={data.sections[sectionKey].validVotes} 
                                                totalInvalid={data.sections[sectionKey].invalidVotes}
                                                thin
                                            /> 
                                        </td>
                                    </tr>
                                )
                            ]
                        }
                        </tbody>
                    </table>
                </div>
            </div>
    );
};