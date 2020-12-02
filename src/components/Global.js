import React from 'react';

import { Link } from 'react-router-dom';
import BulgariaMap from './BulgariaMap';
import ResultsTable from './ResultsTable';
import ResultsLine from './ResultsLine';

import { formatCount, formatPercentage } from '../Util';

export default props => {
    return(
        <div id='global-props.globalData'>
            <ResultsLine
                results={props.globalData.results} 
                parties={props.globalData.parties} 
                totalValid={props.globalData.validVotes} 
                totalInvalid={props.globalData.invalidVotes}
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
            <table className='subdivision-table'>
            <tbody>
            {
                Object.keys(props.globalData.regions).map(key =>
                    <tr>
                        <td>
                            <Link to={`region/${key}`}>
                                {key} {props.globalData.regions[key].name}
                            </Link>
                        </td>
                        <td>
                        <ResultsLine
                            results={props.globalData.regions[key].results} 
                            parties={props.globalData.parties}
                            totalValid={props.globalData.regions[key].validVotes} 
                            totalInvalid={props.globalData.regions[key].invalidVotes}
                            thin
                        /> 
                        </td>
                    </tr>
                )
            }
            </tbody>
            </table>
        </div>
    );
};