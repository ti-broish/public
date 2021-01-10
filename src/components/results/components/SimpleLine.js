import React from 'react';

import styled from 'styled-components';

const SimpleLineStyle = styled.div`
    display: inline-block;
    background-color: #019D8C;
    height: 50px;

    &.thin { height: 20px; }
    &:hover { box-shadow: 0px 0px 3px #000; }
`;

export default props => {

    const generateTooltip = (color) => {
        return (`
            <div>
                <h2 style="margin: 5px;">
                    ${props.tooltipTitle}
                </h2>
                <hr style="border-color: #aaa; border-top: none;"/>
                <table style="width: 100%;">
                <tbody>
                    <tr>
                        <td>${props.tooltipField}</td>
                        <td style="text-align: right;">${props.tooltipValue}</td> 
                    </tr>
                </tbody>
                </table>
            </div>
        `);
    };

    return(
        <div>
            <SimpleLineStyle 
                className={props.thin? 'thin' : ''}
                style={{width: `${props.percentage * 100}%`}}
                data-tip={generateTooltip()}
            />
        </div>
    )
};