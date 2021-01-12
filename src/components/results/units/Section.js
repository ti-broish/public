import React, { useEffect, useState, useContext } from 'react';

import Helmet from 'react-helmet';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingScreen from '../layout/LoadingScreen';
import { formatCount, formatPercentage } from '../../../Util';
import ResultsTable from '../components/ResultsTable';

import { ElectionContext } from '../Election'; 
import Crumbs from '../components/Crumbs';

import styled from 'styled-components';

const SectionDetailsTable = styled.table`
    margin: 60px 0;

    tr {
        margin: 50px 0;
    }

    td {
        padding: 10px 0;
        font-size: 18px;
    }
`;

export default props => {
    const history = useHistory();
    const { election, globalData } = useContext(ElectionContext);
    const { unit } = useParams();

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`/results/${election}/${unit}/routeData.json`).then(res => {
            setData(res.data);
        }).catch(err => { if(!data) history.push('/') });
    }, []);

    //let displayParties = [];

    //if(data) {
    //    displayParties = globalData.parties.sort((a, b) => b.validVotes - a.validVotes).slice(0, 7);
    //}

    return (
        !data? <LoadingScreen/> :
            <div id='section-data'>
                <Helmet>
                    <title>{data.name}</title>
                </Helmet>
                <Crumbs data={data}/>
                <h1>Секция {data.number}</h1>
                <ResultsTable
                    results={data.results} 
                    parties={globalData.parties} 
                    totalValid={data.validVotes} 
                    totalInvalid={data.invalidVotes}
                />
                <SectionDetailsTable>
                    <tbody>
                        <tr>
                            <td>Пълен код на секция(код на район(2), община(2), адм. район(2), секция(3))</td>
                            <td style={{textAlign: 'right'}}>{data.number}</td>
                        </tr>
                        <tr><td colSpan={2}><b>ДАННИ ОТ ИЗБИРАТЕЛНИ СПИСЪЦИ</b></td></tr>
                        <tr>
                            <td>Брой на бюлетините, получени по реда на чл. 215, ал. 1, т. 2 от ИК</td>
                            <td style={{textAlign: 'right'}}>{data.totalBallots}</td>
                        </tr>
                        <tr>
                            <td>Брой на избирателите според избирателния списък при предаването му на СИК</td>
                            <td style={{textAlign: 'right'}}>{data.voters}</td>
                        </tr>
                        <tr>
                            <td>Брой на избирателите, вписани в допълнителната страница (под чертата) на избирателния списък в изборния ден</td>
                            <td style={{textAlign: 'right'}}>{data.additionalVoters}</td>
                        </tr>
                        <tr>
                            <td>Брой на гласувалите избиратели според положените подписи в избирателния списък, включително и подписите в допълнителната страница(под чертата)</td>
                            <td style={{textAlign: 'right'}}>{data.voted}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <b>ДАННИ ИЗВЪН ИЗБИРАТЕЛНИ СПИСЪЦИ И СЪДЪРЖАНИЕТО НА ИЗБИРАТЕЛНАТА КУТИЯ</b>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <b>4. Бюлетини извън избирателната кутия</b>
                            </td>
                        </tr>
                        <tr>
                            <td>брой на неизползваните бюлетини</td>
                            <td style={{textAlign: 'right'}}>{data.unusedBallots}</td>
                        </tr>
                        <tr>
                            <td>брой на унищожените от СИК бюлетини по други поводи</td>
                            <td style={{textAlign: 'right'}}>{data.destroyedBallots}</td>
                        </tr>
                        <tr>
                            <td>брой на недействителните бюлетини по чл. 265, ал. 5 от ИК (когато номерът на бюлетината не съответства на номер в кочана)</td>
                            <td style={{textAlign: 'right'}}>{data.invalidVotes265}</td>
                        </tr>
                        <tr>
                            <td>брой на недействителните бюлетини по чл. 227 от ИК</td>
                            <td style={{textAlign: 'right'}}>{data.invalidVotes227}</td>
                        </tr>
                        <tr>
                            <td>брой на недействителните бюлетини по чл. 228 от ИК</td>
                            <td style={{textAlign: 'right'}}>{data.invalidVotes228}</td>
                        </tr>
                        <tr>
                            <td>брой на сгрешените бюлетини по чл. 267, ал. 2 от ИК</td>
                            <td style={{textAlign: 'right'}}>{data.wrongVotes267}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <b>СЛЕД КАТО ОТВОРИ ИЗБИРАТЕЛНАТА КУТИЯ, СИК УСТАНОВИ</b>
                            </td>
                        </tr>
                        <tr>
                            <td>Брой на намерените в избирателната кутия бюлетини</td>
                            <td style={{textAlign: 'right'}}>{data.totalVotes}</td>
                        </tr>
                        <tr>
                            <td>Брой намерени в избирателната кутия недействителни гласове (бюлетини)</td>
                            <td style={{textAlign: 'right'}}>{data.invalidVotes}</td>
                        </tr>
                        <tr>
                            <td>Общ брой намерени в избирателната кутия действителни гласове (бюлетини)</td>
                            <td style={{textAlign: 'right'}}>{data.validVotes}</td>
                        </tr>
                        <tr>
                            <td>брой на действителните гласове, подадени за кандидатските листи на партии, коалиции и инициативни комитети</td>
                            <td style={{textAlign: 'right'}}>{data.validCandidateVotes}</td>
                        </tr>
                        <tr>
                            <td>брой действителни гласове (отбелязвания) само в квадратчето „Не подкрепям никого“</td>
                            <td style={{textAlign: 'right'}}>{data.validNAVotes}</td>
                        </tr>
                        <tr>
                            <td>Празни бюлетини; бюлетини, в които е гласувано в повече от едно квадратче; бюлетини, в които не може да се установи еднозначно вотът на избирателя и други видове недействителни гласове</td>
                            <td style={{textAlign: 'right'}}>{data.emptyVotes}</td>
                        </tr>
                    </tbody>
                </SectionDetailsTable>
            </div>
    );
};