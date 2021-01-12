import React, { useContext } from 'react';

import Helmet from 'react-helmet';

import BulgariaMap from '../components/BulgariaMap';
import ResultsTable from '../components/ResultsTable';
import SubdivisionTable from '../components/SubdivisionTable';

import { ElectionContext } from '../Election.js';

export default props => {
    const { globalData } = useContext(ElectionContext);

    return(
        <div>
            <Helmet>
                <title>{globalData.name}</title>
            </Helmet>
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
                showThreshold={globalData.electionType === 'national-parliament'}
            />
            {/*
            <p>Общо действителни гласове: {formatCount(globalData.validVotes)}</p>
            <p>Общо недействителни гласове: {formatCount(globalData.invalidVotes)}</p>
            <p>Общо гласове: {formatCount(globalData.validVotes + globalData.invalidVotes)}</p>
            <p>Общо избиратели: {formatCount(globalData.voters)}</p>
            */}
            <h1>Избирателни райони</h1>
            <SubdivisionTable
                parties={globalData.parties}
                results={globalData.results}
                showNumbers
                subdivisions={Object.keys(globalData.regions).map(key => {
                    return {
                        number: key,
                        name: globalData.regions[key].name,
                        results: globalData.regions[key].results,
                        totalValid: globalData.regions[key].validVotes,
                        totalInvalid: globalData.regions[key].invalidVotes,
                        voters: globalData.regions[key].voters,
                    };
                })}
            />
        </div>
    );
};