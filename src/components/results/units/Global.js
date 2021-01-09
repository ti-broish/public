import React, { useEffect, useContext } from 'react';

import ReactTooltip from 'react-tooltip';

import BulgariaMap from '../components/BulgariaMap';
import ResultsTable from '../components/ResultsTable';
import ResultsLine from '../components/ResultsLine';

import { formatCount, formatPercentage } from '../../../Util';
import SubdivisionTable from '../components/SubdivisionTable';

import { ElectionContext } from '../Election.js';

export default props => {
    const { globalData } = useContext(ElectionContext);

    return(
        <div id='global-props.globalData'>
            <ReactTooltip 
                multiline={true} 
                html={true}
                className={'map-tooltip'}
                border={true}
                borderColor={'#aaa'}
                arrowColor={'white'}
                effect={'solid'}
                place={'top'}
                scrollHide={false}
                backgroundColor={'#fff'}
                type={"dark"}
                getContent={content => {
                    //console.log(content);
                    return content;
                }}
            />
            <BulgariaMap 
                regions={globalData.regions} 
                parties={globalData.parties}
                results={globalData.results} 
            />
            <ResultsTable 
                results={globalData.results} 
                parties={globalData.parties} 
                totalValid={globalData.validVotes} 
                totalInvalid={globalData.invalidVotes}
                showThreshold={true}
            />
            <p>Общо действителни гласове: {formatCount(globalData.validVotes)}</p>
            <p>Общо недействителни гласове: {formatCount(globalData.invalidVotes)}</p>
            <p>Общо гласове: {formatCount(globalData.validVotes + globalData.invalidVotes)}</p>
            <p>Общо избиратели: {formatCount(globalData.voters)}</p>
            
            <h1>Избирателни райони</h1>
            <SubdivisionTable
                parties={globalData.parties}
                results={globalData.results}
                subdivisions={Object.keys(globalData.regions).map(key => {
                    return {
                        number: key,
                        name: globalData.regions[key].name,
                        results: globalData.regions[key].results,
                        totalValid: globalData.regions[key].validVotes,
                        totalInvalid: globalData.regions[key].invalidVotes,
                    };
                })}
            />
        </div>
    );
};