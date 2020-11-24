import React from 'react';

import { formatCount, formatPercentage } from '../Util';

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
        <table className='results-table'>
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
        </table>
    )
}