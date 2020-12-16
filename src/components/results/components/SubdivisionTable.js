import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import ResultsLine from './ResultsLine.js';

import styled from 'styled-components';

const SubdivisionTableDiv = styled.table`
    width 100%
    color #666
    font-size 22px

    td
        padding 5px 20px
        box-sizing border-box

    td:nth-child(1)
        text-align right
        width 280px

    td:nth-child(2)
        width calc(100% - 280px)

    a
        color blue
`;

const SubdivisionTableControls = styled.div`
    text-align left

    button
        border none
        background none
        padding 10px

        &:hover
            cursor pointer

        &.selected
            color white
            background-color #444
            border-radius 10px
`;

const SubdivisionControlsParty = styled.div`
text-align left
height 40px
position relative
margin-top 5px

button
    border none
    background none
    padding 5px

    &:hover
        cursor pointer

    &.selected
        color white
        background-color #888
        border-radius 10px
`;

export default props => {
    const [mode, setMode] = useState('distribution');
    const [singleParty, setSingleParty] = useState(''); 

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

    const sorted = subdivisions => {
        if(mode === 'distribution') {
            if(singleParty === '') {
                subdivisions.sort((s1, s2) => s1.number > s2.number );
            } else {
                subdivisions.sort((s1, s2) => {
                    const getPartyPercentage = subdivision => {
                        const partyMap = {};
                        for(var i = 0; i < subdivision.results.length; i += 3) {
                            partyMap[subdivision.results[i]] = subdivision.results[i+1];
                        }

                        return partyMap[singleParty] / subdivision.totalValid;
                    };

                    return getPartyPercentage(s2) > getPartyPercentage(s1);
                });
            }
        }

        return subdivisions;
    };

    return(
        <div className='subdivision-table'>
            <div className='controls'>
                <button className={mode === 'distribution'? 'selected' : ''}  onClick={()=>setMode('distribution')}>Разпределение</button>
                <button className={mode === 'voters'? 'selected' : ''}  onClick={()=>setMode('voters')}>Избиратели</button>
                <button className={mode === 'turnout'? 'selected' : ''}  onClick={()=>setMode('turnout')}>Активност</button>
                <button className={mode === 'protocols'? 'selected' : ''}  onClick={()=>setMode('protocols')}>Протоколи</button>
            </div>
            <div className='controls-party'>
            { 
                mode !== 'distribution'? null : [
                    'Подреди по партия: ',
                    <button className={singleParty === ''? 'selected' : ''} onClick={()=>setSingleParty('')}>Никоя</button>,
                    displayParties.map(party =>
                        <button className={singleParty === party.number? 'selected' : ''} onClick={()=>setSingleParty(party.number)}>
                            {party.name}
                        </button>
                    )
                ]
            }
            </div>
            <table>
            <tbody>
            {
                sorted(props.subdivisions).map(subdivision =>
                    <tr>
                        <td>
                            <Link to={`region/${subdivision.number}`}>
                                {subdivision.number} {subdivision.name}
                            </Link>
                        </td>
                        <td>
                        <ResultsLine
                            results={subdivision.results} 
                            parties={props.parties}
                            totalValid={subdivision.totalValid} 
                            totalInvalid={subdivision.totalInvalid}
                            firstParty={singleParty === ''? null : singleParty}
                            thin
                        /> 
                        </td>
                    </tr>
                )
            }
            </tbody>
            </table>
        </div>
    )
}