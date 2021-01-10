import React, { useContext } from 'react';

import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { ElectionContext } from '../Election';

import styled from 'styled-components';

const CrumbLink = styled(Link)`
    color: #666;
    font-size: 14px;
    text-decoration: none;
    font-weight: bold;
`;

const pointyArrowHeight = 30;

const PointyArrowBase = styled.span`
    display: inline-block;
    height: ${pointyArrowHeight}px;
    box-sizing: border-box;
    vertical-align: top;
`;

const PointyArrowBack = styled(PointyArrowBase)`
    border-left: ${pointyArrowHeight / 2}px solid #0000;
    border-top: ${pointyArrowHeight / 2}px solid #eee;
    border-bottom: ${pointyArrowHeight / 2}px solid #eee;
    margin-left: -11px;
`;

const PointyArrowMiddle = styled(PointyArrowBase)`
    background-color: #eee;
    padding: 6px;
`;

const PointyArrow = styled(PointyArrowBase)`
    border-left: ${pointyArrowHeight / 2}px solid #eee;
    border-top: ${pointyArrowHeight / 2}px solid #0000;
    border-bottom: ${pointyArrowHeight / 2}px solid #0000;
`;

export default props => {
    const { unit } = useParams();
    const { election, globalData } = useContext(ElectionContext);

    const backUrl = props.data.crumbs?
        `/results/${election}/${props.data.crumbs[props.data.crumbs.length-1].unit}` :
        `/results/${election}`;

    return(
        <div>
            <CrumbLink to={backUrl}>
                <PointyArrowMiddle style={{backgroundColor: '#0000'}}>
                    <FontAwesomeIcon icon={faArrowLeft}/> Назад
                </PointyArrowMiddle>
            </CrumbLink>
            <CrumbLink to={`/results/${election}`}>
                <PointyArrowMiddle>
                    {globalData.name}
                </PointyArrowMiddle>
                <PointyArrow/>
            </CrumbLink>
            {
                !props.data.crumbs? null :
                props.data.crumbs.map(crumb =>
                    <CrumbLink to={`/results/${election}/${crumb.unit}`}>
                        <PointyArrowBack/>
                        <PointyArrowMiddle>
                            {crumb.name}
                        </PointyArrowMiddle>
                        <PointyArrow/>
                    </CrumbLink>
                )
            }
            <CrumbLink to={`/results/${election}/${unit}`}>
                <PointyArrowBack/>
                <PointyArrowMiddle>
                    {props.data.name}
                </PointyArrowMiddle>
                <PointyArrow/>
            </CrumbLink>
        </div>
    )
};