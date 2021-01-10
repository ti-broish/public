import React, { useState, useContext, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';
import ResultsLine from './ResultsLine.js';
import SimpleLine from './SimpleLine';
import ReactTooltip from 'react-tooltip';

import styled from 'styled-components';

import { ElectionContext } from '../Election';

import { formatCount, formatPercentage } from '../../../Util';

export const SubdivisionTableDiv = styled.table`
    width: 100%;
    color: #666;
    font-size: 22px;

    td {
        padding: 5px 20px;
        box-sizing: border-box;
    }

    td:nth-child(1) {
        text-align: right;
        width: 280px;
    }

    td:nth-child(2) {
        width: calc(100% - 280px);
    }

    a {
        color: blue;
    }
`;

const SubdivisionTableControls = styled.div`
    text-align: left;

    button {
        border: none;
        background: none;
        padding: 10px;

        &:hover {
            cursor: pointer;
        }

        &.selected {
            color: white;
            background-color: #444;
            border-radius: 10px;
        }
    }
`;

const SubdivisionControlsParty = styled.div`
    text-align: left;
    height: 40px;
    position: relative;
    margin-top: 5px;

    button {
        border: none;
        background: none;
        padding: 5px;

        &:hover {
            cursor: pointer;
        }

        &.selected {
            color: white;
            background-color: #888;
            border-radius: 10px;
        }
    }
`;

export default props => {
    const [mode, setMode] = useState('distribution');
    const [singleParty, setSingleParty] = useState('');
    const { election } = useContext(ElectionContext);
    const { unit } = useParams();

    let displayParties = [];

    useEffect(() => { ReactTooltip.rebuild(); }, [mode]);
    useEffect(() => { ReactTooltip.rebuild(); }, [singleParty]);

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
        } else if(mode === 'voters') {
            let highestCount = 0;
            for(const subdivision of subdivisions) {
                const currentCount = subdivision.voters;

                if(currentCount > highestCount)
                    highestCount = currentCount;
            }

            for(const subdivision of subdivisions) {
                const currentCount = subdivision.voters;
                subdivision.percentage = currentCount / highestCount;
                subdivision.tooltipField = 'Избиратели';
                subdivision.tooltipValue = formatCount(subdivision.voters);
            }

            subdivisions.sort((s1, s2) => s1.percentage < s2.percentage);
        } else if(mode === 'turnout') {
            let highestCount = 0;
            for(const subdivision of subdivisions) {
                const currentCount = (subdivision.totalValid + subdivision.totalInvalid) / subdivision.voters;

                if(currentCount > highestCount)
                    highestCount = currentCount;
            }

            for(const subdivision of subdivisions) {
                const currentCount = (subdivision.totalValid + subdivision.totalInvalid) / subdivision.voters;
                subdivision.percentage = currentCount / highestCount;
                subdivision.tooltipField = 'Активност';
                subdivision.tooltipValue = `${formatPercentage(currentCount)}%`;
            }

            subdivisions.sort((s1, s2) => s1.percentage < s2.percentage);
        }

        return subdivisions;
    };

    const renderRow = subdivision => {
        return(
            <tr>
                <td>
                    <Link to={`/results/${election}/${unit?unit:''}${subdivision.number}`}>
                        {subdivision.number} {subdivision.name}
                    </Link>
                </td>
                <td>
                {
                    mode === 'distribution'?
                        <ResultsLine
                            results={subdivision.results} 
                            parties={props.parties}
                            totalValid={subdivision.totalValid} 
                            totalInvalid={subdivision.totalInvalid}
                            firstParty={singleParty === ''? null : singleParty}
                            thin
                        /> :
                        <SimpleLine
                            percentage={subdivision.percentage}
                            tooltipTitle={subdivision.name}
                            tooltipField={subdivision.tooltipField}
                            tooltipValue={subdivision.tooltipValue}
                            thin
                        />
                }
                </td>
            </tr>
        );
    };

    const renderWithGroupings = () => {
        console.log(props.groupings);
        return null;
        /*const subdivisionsWithoutGroup = [];
        
        Object.keys(props.subdivisions).forEach(key => {
            let contained = false;
            Object.keys(props.groupings).forEach(groupingKey => {
                if(data.groupings[groupingKey].sections.includes(key)) {
                    contained = true;
                }
            });

            if(!contained) {
                subdivisionsWithoutGroup.push(key);
            }
        });

        return([
            Object.keys(props.groupings).map(groupingKey => [
                <tr><td colSpan={2} style={{textAlign: 'left'}}><b>{groupingKey}</b></td></tr>,
                data.groupings[groupingKey].sections.map(sectionKey =>
                    <tr>
                        <td>
                            <Link to={`/results/${election}/${unit}${sectionKey}`}>
                                Секция {sectionKey}
                            </Link>
                        </td>
                        <td>
                            <ResultsLine
                                results={data.sections[sectionKey].results} 
                                parties={globalData.parties}
                                totalValid={data.sections[sectionKey].validVotes} 
                                totalInvalid={data.sections[sectionKey].invalidVotes}
                                thin
                            /> 
                        </td>
                    </tr>
                )
            ]),
            subdivisionsWithoutGroup.length === 0? null : [
                <tr><td><b>Неизяснен адрес</b></td><td></td></tr>,
                subdivisionsWithoutGroup.map(sectionKey =>
                    <tr>
                        <td>Секция {sectionKey}</td>
                        <td>
                            <ResultsLine
                                results={data.sections[sectionKey].results} 
                                parties={globalData.parties}
                                totalValid={data.sections[sectionKey].validVotes} 
                                totalInvalid={data.sections[sectionKey].invalidVotes}
                                thin
                            /> 
                        </td>
                    </tr>
                )
            ]
        ]);
            
            <tr>
                <td>
                    <Link to={`/results/${election}/${unit?unit:''}${subdivision.number}`}>
                        {subdivision.number} {subdivision.name}
                    </Link>
                </td>
                <td>
                {
                    mode === 'distribution'?
                        <ResultsLine
                            results={subdivision.results} 
                            parties={props.parties}
                            totalValid={subdivision.totalValid} 
                            totalInvalid={subdivision.totalInvalid}
                            firstParty={singleParty === ''? null : singleParty}
                            thin
                        /> :
                        <SimpleLine
                            percentage={subdivision.percentage}
                            tooltipTitle={subdivision.name}
                            tooltipField={subdivision.tooltipField}
                            tooltipValue={subdivision.tooltipValue}
                            thin
                        />
                }
                </td>
            </tr>
        );*/
    };

    return(
        <div>
            <SubdivisionTableControls>
                <button className={mode === 'distribution'? 'selected' : ''}  onClick={()=>setMode('distribution')}>Разпределение</button>
                <button className={mode === 'voters'? 'selected' : ''}  onClick={()=>setMode('voters')}>Избиратели</button>
                <button className={mode === 'turnout'? 'selected' : ''}  onClick={()=>setMode('turnout')}>Активност</button>
            </SubdivisionTableControls>
            <SubdivisionControlsParty>
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
            </SubdivisionControlsParty>
            <SubdivisionTableDiv>
            <tbody>
            {
                props.groupings && mode === 'distribution' && singleParty === ''
                    ? renderWithGroupings()
                    : sorted(props.subdivisions).map(subdivision => renderRow(subdivision))
            }
            </tbody>
            </SubdivisionTableDiv>
        </div>
    )
}