import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingScreen from './layout/LoadingScreen';
import { formatCount, formatPercentage } from '../Util';
import BulgariaMap from './BulgariaMap';

export default props => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/data/global-results.json').then(res => {
            console.log(res.data);
            setData(res.data);
        });
    }, []);

    let displayParties = [];
    let displayPartiesTotal = 0;

    if(data) {
        displayParties = data.parties.sort((a, b) => b.validVotes - a.validVotes).slice(0, 7);
        displayParties.forEach(party => displayPartiesTotal += party.validVotes);
    }

    let thresholdPlaced = false;

    return(
        !data? <LoadingScreen/> :
            <div id='global-data'>
                <div>
                    {
                        displayParties.map(party => {
                            const percentage = party.validVotes/data.validVotes;
                            return(
                                <div style={{
                                    backgroundColor: party.color,
                                    width: `${percentage * 100}%`,
                                    display: 'inline-block',
                                    height: '50px'
                                }}>
                                    {/*
                                        percentage < 0.04? null :
                                        <span style={{color: 'white', fontWeight: 'bold'}}>
                                            {party.name}
                                        </span>
                                    */}
                                </div>
                            )  
                        })
                    }
                    <div style={{
                        backgroundColor: '#ddd',
                        width: `${(data.validVotes - displayPartiesTotal)/data.validVotes * 100}%`,
                        display: 'inline-block',
                        height: '50px'
                    }}/>
                </div>
                <h1>Общи резултати</h1>
                <table>
                    <tbody>
                        {
                            displayParties.map(party => {
                                const percentage = party.validVotes/data.validVotes;
                                const barPercent = party.validVotes/displayParties[0].validVotes;
                                return ([
                                    percentage < 0.04 && !thresholdPlaced?
                                    <tr className='threshold-row'>
                                        <td colspan="2" style={{textAlign: 'center'}}>
                                            В парламента
                                            <hr/>
                                            Извън парламента
                                        </td>
                                        {thresholdPlaced = true}
                                    </tr> : null,
                                    <tr>
                                        <td>{party.number}</td>
                                        <td>
                                            <span  style={{color: party.color}}>
                                                {party.name}
                                            </span>
                                            <span style={{fontSize: '18px', marginLeft: '10px'}}>
                                                {formatCount(party.validVotes)}
                                            </span>
                                            
                                            <span style={{float: 'right'}}>
                                                {formatPercentage(percentage)}%
                                            </span>
                                            
                                            <br/>

                                            <div>
                                                <div className='vote-percent-bar' style={{
                                                    backgroundColor: party.color,
                                                    width: `${barPercent * 100}%`,
                                                    fontSize: '28px'
                                                }}/>
                                            </div>
                                            {/*<span style={{fontSize: '18px'}}>
                                                {formatCount(party.validVotes)}
                                            </span>*/}
                                            
                                        </td>
                                        {/*<td>{party.invalidVotes}</td>*/}
                                    </tr>
                                ])
                                
                            })
                        }
                        <tr>
                            <td></td>
                            <td>
                                Други
                                <span style={{fontSize: '18px', marginLeft: '10px'}}>
                                    {formatCount(data.validVotes - displayPartiesTotal)}
                                </span>
                                
                                <span style={{float: 'right'}}>
                                    {formatPercentage((data.validVotes - displayPartiesTotal)/data.validVotes)}%
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>Общо действителни гласове: {data.validVotes}</p>
                <h1>Резултати по райони</h1>
                <button>България</button>
                <button>Извън страната</button>
                <BulgariaMap/>
                <ul>
                    {
                        data.regions.map(region =>
                            <li>
                                <Link to={`region/${region.number}`}>
                                    {region.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
    );
};