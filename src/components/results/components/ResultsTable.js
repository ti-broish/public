import React from 'react';

import { formatCount, formatPercentage } from '../../../Util';

import styled from 'styled-components';

const ResultsTableDiv = styled.table`
    width: 100%;
    color: #666;
    font-size: 28px;

    td {
        padding: 5px 20px;
        box-sizing: border-box;
    }

    .vote-percent-bar {
        height: 10px;
        background-color: #eee;
        transition: width 0.5s ease;
        width: 0;
    }

    .vote-percent-remaining {
        display: inline-block;
        border-top: none;
        box-sizing: border-box;
        margin: 5px 0;
        border-color: #ccc;
    }

    td:nth-child(1) {
        text-align: right;
        width: 72px;
    }

    td:nth-child(2) {
        width: calc(100% - 72px);
    }

    .threshold-row {
        font-size: 12px;
        color: #777;

        hr {
            border-color: #aaa;
            border-top: none;
        }
    }
`;

export default props => {

    let displayParties = [];

    for(var i = 0; i < props.results.length; i += 3) {
        displayParties.push({
            number: props.results[i],
            validVotes: props.results[i+1],
            invalidVotes: props.results[i+2],
            ...props.parties[props.results[i]]
        });
    }

    let displayPartiesTotal = 0;
    
    displayParties = displayParties.sort((a, b) => b.validVotes - a.validVotes).slice(0, 7);
    displayParties.forEach(party => displayPartiesTotal += party.validVotes);
    
    let thresholdPlaced = false;

    return(
        <ResultsTableDiv>
            <tbody>
                {
                    displayParties.map(party => {
                        const percentage = party.validVotes / props.totalValid;
                        const barPercent = party.validVotes / displayParties[0].validVotes;
                        return ([
                            percentage < 0.04 && !thresholdPlaced && props.showThreshold?
                            <tr className='threshold-row'>
                                <td colSpan="2" style={{textAlign: 'center'}}>
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
                                </td>
                            </tr>
                        ])
                        
                    })
                }
                <tr>
                    <td></td>
                    <td>
                        Други
                        <span style={{fontSize: '18px', marginLeft: '10px'}}>
                            {formatCount(props.totalValid - displayPartiesTotal)}
                        </span>
                        
                        <span style={{float: 'right'}}>
                            {formatPercentage((props.totalValid - displayPartiesTotal)/props.totalValid)}%
                        </span>
                    </td>
                </tr>
            </tbody>
        </ResultsTableDiv>
    )
}