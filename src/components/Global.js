import React from 'react';

import { Link } from 'react-router-dom';
import BulgariaMap from './BulgariaMap';
import ResultsTable from './ResultsTable';
import ResultsLine from './ResultsLine';

export default props => {
    return(
        <div id='global-props.globalData'>
            <ResultsLine
                results={props.globalData.results} 
                parties={props.globalData.parties} 
                totalValid={props.globalData.validVotes} 
                totalInvalid={props.globalData.invalidVotes}
            /> 
            <button>България</button>
            <button>Извън страната</button>
            <BulgariaMap regions={props.globalData.regions} parties={props.globalData.parties}/>
            <h1>Общи резултати</h1>
            <ResultsTable 
                results={props.globalData.results} 
                parties={props.globalData.parties} 
                totalValid={props.globalData.validVotes} 
                totalInvalid={props.globalData.invalidVotes}
                displayThreshold={true}
            />
            <p>Общо действителни гласове: {props.globalData.validVotes}</p>
            <h1>Резултати по райони</h1>
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