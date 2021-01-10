import React, { useEffect, useState, useContext } from 'react';

import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoadingScreen from '../layout/LoadingScreen';
import { formatCount, formatPercentage } from '../../../Util';

import { ElectionContext } from '../Election'; 
import Crumbs from '../components/Crumbs';

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
    //    displayParties = data.parties.sort((a, b) => b.validVotes - a.validVotes).slice(0, 7);
    //}

    return (
        !data? <LoadingScreen/> :
            <div id='section-data'>
                <Crumbs data={data}/>
                <h1>Секция {data.number}</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>Пълен код на секция(код на район(2), община(2), адм. район(2), секция(3))</td>
                            <td>{data.number}</td>
                        </tr>
                        <tr>
                            <td>Брой на бюлетините, получени по реда на чл. 215, ал. 1, т. 2 от ИК</td>
                            <td>{data.totalBallots}</td>
                        </tr>
                        <tr>
                            <td>Брой на избирателите според избирателния списък при предаването му на СИК</td>
                            <td>{data.voters}</td>
                        </tr>
                        <tr>
                            <td>Брой на избирателите, вписани в допълнителната страница (под чертата) на избирателния списък в изборния ден</td>
                            <td>{data.additionalVoters}</td>
                        </tr>
                        <tr>
                            <td>Брой на гласувалите избиратели според положените подписи в избирателния списък, включително и подписите в допълнителната страница(под чертата)</td>
                            <td>{data.voted}</td>
                        </tr>
                        <tr>
                            <td>брой на неизползваните бюлетини</td>
                            <td>{data.unusedBallots}</td>
                        </tr>
                        <tr>
                            <td>брой на унищожените от СИК бюлетини по други поводи</td>
                            <td>{data.destroyedBallots}</td>
                        </tr>
                        <tr>
                            <td>брой на недействителните бюлетини по чл. 265, ал. 5 от ИК (когато номерът на бюлетината не съответства на номер в кочана)</td>
                            <td>{data.invalidVotes265}</td>
                        </tr>
                        <tr>
                            <td>брой на недействителните бюлетини по чл. 227 от ИК</td>
                            <td>{data.invalidVotes227}</td>
                        </tr>
                        <tr>
                            <td>брой на недействителните бюлетини по чл. 228 от ИК</td>
                            <td>{data.invalidVotes228}</td>
                        </tr>
                        <tr>
                            <td>брой на сгрешените бюлетини по чл. 267, ал. 2 от ИК</td>
                            <td>{data.wrongVotes267}</td>
                        </tr>
                        <tr>
                            <td>Брой на намерените в избирателната кутия бюлетини</td>
                            <td>{data.totalVotes}</td>
                        </tr>
                        <tr>
                            <td>Брой намерени в избирателната кутия недействителни гласове (бюлетини)</td>
                            <td>{data.invalidVotes}</td>
                        </tr>
                        <tr>
                            <td>Общ брой намерени в избирателната кутия действителни гласове (бюлетини)</td>
                            <td>{data.validVotes}</td>
                        </tr>
                        <tr>
                            <td>брой на действителните гласове, подадени за кандидатските листи на партии, коалиции и инициативни комитети</td>
                            <td>{data.validCandidateVotes}</td>
                        </tr>
                        <tr>
                            <td>брой действителни гласове (отбелязвания) само в квадратчето „Не подкрепям никого“</td>
                            <td>{data.validNAVotes}</td>
                        </tr>
                        <tr>
                            <td>Празни бюлетини; бюлетини, в които е гласувано в повече от едно квадратче; бюлетини, в които не може да се установи еднозначно вотът на избирателя и други видове недействителни гласове</td>
                            <td>{data.emptyVotes}</td>
                        </tr>
                    </tbody>
                </table>
                {/*
                <h1>Резултати по партии</h1>
                <table>
                    <tbody>
                        {
                            displayParties.map(party => 
                                <tr>
                                    <td>{party.number}</td>
                                    <td>{party.name}</td>
                                    <td>{formatCount(party.validVotes)}</td>
                                    <td>{formatPercentage(party.validVotes/data.validVotes)}%</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                    */}
            </div>
    );
};