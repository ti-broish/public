import React from 'react';

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

    return(
        <div>
            {
                displayParties.map(party => {
                    const percentage = party.validVotes / props.totalValid;
                    return(
                        <div style={{
                            backgroundColor: party.color,
                            width: `${percentage * 100}%`,
                            display: 'inline-block',
                            height: props.thin? '20px' : '50px'
                        }}>
                        </div>
                    )  
                })
            }
            <div style={{
                backgroundColor: '#ddd',
                width: `${(props.totalValid - displayPartiesTotal) / props.totalValid * 100}%`,
                display: 'inline-block',
                height: props.thin? '20px' : '50px'
            }}/>
        </div>
    )
}