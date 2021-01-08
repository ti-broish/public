import React, { useEffect } from 'react';

/*import ReactTooltip from 'react-tooltip';

import BulgariaMap from './BulgariaMap';
import ResultsTable from './ResultsTable';
import ResultsLine from './ResultsLine';

import { formatCount, formatPercentage } from '../Util';
import SubdivisionTable from './SubdivisionTable';*/

export default props => {

    useEffect(() => {window.scrollTo(0, 0);}, []);

    return(
        <div id='global-props.globalData'>
            <h1>Това са глобални резултати</h1>
            {/*
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
                regions={props.globalData.regions} 
                parties={props.globalData.parties}
                results={props.globalData.results} 
            />
            <ResultsTable 
                results={props.globalData.results} 
                parties={props.globalData.parties} 
                totalValid={props.globalData.validVotes} 
                totalInvalid={props.globalData.invalidVotes}
                showThreshold={true}
            />
            <p>Общо действителни гласове: {formatCount(props.globalData.validVotes)}</p>
            <p>Общо недействителни гласове: {formatCount(props.globalData.invalidVotes)}</p>
            <p>Общо гласове: {formatCount(props.globalData.validVotes + props.globalData.invalidVotes)}</p>
            <p>Общо избиратели: {formatCount(props.globalData.voters)}</p>
            
            <h1>Избирателни райони</h1>
            <SubdivisionTable
                parties={props.globalData.parties}
                results={props.globalData.results}
                subdivisions={Object.keys(props.globalData.regions).map(key => {
                    return {
                        number: key,
                        name: props.globalData.regions[key].name,
                        results: props.globalData.regions[key].results,
                        totalValid: props.globalData.regions[key].validVotes,
                        totalInvalid: props.globalData.regions[key].invalidVotes,
                    };
                })}
            />*/}
        </div>
    );
};