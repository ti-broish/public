import React, { useState } from 'react';

import Helmet from 'react-helmet';

import styled from 'styled-components';
import InsertCard from './InsertCard';
import SelectParty from './SelectParty';
import PrintReceipt from './PrintReceipt';
import RemoveCard from './RemoveCard';
import ConfirmChoice from './ConfirmChoice';

const TiGlasuvashStyle = styled.div`
    font-family: Arial, sans-serif;
    background-color: black;
    color: #262629;
    min-width: 100%;
    min-height: 100%;
    position: absolute;
`;

export const MachineFrame = styled.div`
    background-color: #333;
    width: 680px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 120px;
    border: 4px solid #111;
    border-radius: 8px;
`;

export const ReceiptSlot = styled.div`
    width: 120px;
    margin: 30px auto;
    background-color: #0a0a0a;
    height: 10px;
    border-radius: 4px;
    box-shadow: 0 0 5px black;
`;

export const CardSlot = styled.div`
    width: 120px;
    margin: 30px auto;
    background-color: #0a0a0a;
    height: 10px;
    border-radius: 4px;
    box-shadow: 0 0 5px black;
`;

export const MachineScreen = styled.div`
    background-color: #fff;
    height: 700px;
    width: 600px;
    border: 3px solid #111;
    box-shadow: 0 0 25px #333 inset;
    z-index: 10;
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
`;

const VotingCard = styled.div`
    position: absolute;
    right: calc(100vw / 2 - 460px);
    top: 500px;
    height: 158px;
    width: 100px;
    background-color: white;
    border-radius: 7px;
    cursor: pointer;
    border: 1px solid #999;

    &:hover {
        border: 4px solid yellow;
    }
`;

const CardChip = styled.div`
    width: 20px;
    height: 26px;
    background-color: #ffff0e;
    left: 44px;
    position: relative;
    top: 25px;
`;

const CardSign = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #bbb;
    text-align: center;
    position: relative;
    top: 96px;
`;

const TopPanelHalf = styled.div`
    height: 34px;
    width: 400px;
    z-index: 10;
    background-color: #333;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;

    div {
        background-color: black;
        width: 120px;
        position: absolute;
        bottom: 0;
        z-index: 11;
        height: 5px;
        margin: 0 auto;
        left: 0;
        right: 0;
        border-radius: 5px 5px 0 0;
        box-shadow: 0 0 5px black;
    }
`;

const ReceiptTopPanelHalf = styled.div`
    height: 34px;
    width: 400px;
    z-index: 20;
    background-color: #333;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-top: 3px solid #111;
    top: 21px;

    div {
        background-color: black;
        width: 120px;
        position: absolute;
        bottom: 0;
        z-index: 11;
        height: 5px;
        margin: 0 auto;
        left: 0;
        right: 0;
        border-radius: 5px 5px 0 0;
        box-shadow: 0 0 5px black;
    }
`;

const BrandName = styled.div`
    position: absolute;
    top: 63px;
    left: calc(100vw / 2 + -306px);
    font-weight: bold;
    font-size: 20px;
    color: #aaa;
`;

const Receipt = styled.div`
    opacity: 1;
    top: -153px;
    background-color: white;
    z-index: 15;
    display: block;
    position: absolute;
    width: 100px;
    padding: 30px 10px;
    font-size: 12px;
    box-sizing: border-box;
    left: 0;
    right: 0;
    margin: 0 auto;
    border: 1px solid #aaa;
    box-shadow: 0 0 10px #333;
    color: #777;
`;

export default props => {
    const [cardInserted, setCardInserted] = useState(false);
    const [partySelected, setPartySelected] = useState(null);
    const [choiceConfirmed, setChoiceConfirmed] = useState(false);
    const [receiptPrinted, setReceiptPrinted] = useState(false);

    const [cardStyle, setCardStyle] = useState(null);
    const [receiptStyle, setReceiptStyle] = useState(null);

    const insertCard = () => {
        if(!cardStyle) {
            setCardStyle({
                top: '830px',
                right: 'calc(100vw / 2 - 460px)',
                transition: 'top 1s ease',
            });

            setTimeout(() => {
                setCardStyle({
                    top: '830px',
                    right: 'calc(100vw / 2 - 56px)',
                    transition: 'right 1s ease',
                });
            }, 1000);

            setTimeout(() => {
                setCardStyle({
                    top: '830px',
                    right: 'calc(100vw / 2 - 56px)',
                    transition: 'top 2s ease',
                });
            }, 2000);

            setTimeout(() => {
                setCardStyle({
                    top: '700px',
                    right: 'calc(100vw / 2 - 56px)',
                    transition: 'top 2s ease',
                });

                setTimeout(() => {
                    setCardInserted(true);
                }, 2500);
            }, 2000);
        }

        if(receiptPrinted) {
            setCardStyle({
                top: '830px',
                right: 'calc(100vw / 2 - 56px)',
                transition: 'top 2s ease',
            });

            setTimeout(() => {
                setCardStyle({
                    top: '830px',
                    right: 'calc(100vw / 2 - 460px)',
                    transition: 'right 1s ease',
                });
            }, 2000);

            setTimeout(() => {
                setCardStyle({
                    transition: 'top 1s ease',
                });
            }, 3000);

            setTimeout(() => {
                setCardInserted(false);
                setPartySelected(null);
                setChoiceConfirmed(false);
                setReceiptPrinted(false);
                setCardStyle(null);
            }, 3500);
        }
    };

    const printReceipt = () => {
        setReceiptStyle({
            top: '58px',
            transition: 'top 2s linear'
        });

        setTimeout(() => {
            setReceiptStyle({
                top: '58px',
                opacity: 0,
                transition: 'opacity 1s ease'
            });
        }, 5000);

        setTimeout(() => {
            setReceiptStyle(null);
        }, 6000);
    };

    const selectParty = (party, preference) => {
        setPartySelected({
            reviewClicked: true,
            party: party,
            preference: preference,
        });
    };

    const changeChoice = () => {
        setPartySelected();
    };

    const confirmVote = () => {
        setChoiceConfirmed(true);
    };

    const receiptPrintedDone = () => {
        setReceiptPrinted(true);
    };

    let metaUrl = "https://tibroish.bg/ti-glasuvash";
    let metaDescription = `
        Симулация на машинно гласуване.
    `;
    let metaTitle = "Ти гласуваш";

    return (
        <TiGlasuvashStyle>
            <Helmet>
                <title>{metaTitle}</title>
                <link rel="canonical" href={metaUrl} />
                <meta name="description" content={metaDescription}/>
                <meta property="og:url" content={metaUrl}/>
                <meta property="og:title" content={metaTitle}/>
                <meta property="og:description" content={metaDescription}/>
                <meta property="og:image" content={"/brand/og_image.png"}/>
                <meta property="og:image:width" content={"1200"}/>
                <meta property="og:image:height" content={"628"}/>
                <meta name="viewport" content=""/>
            </Helmet>
            <div style={{
                position: 'absolute',
                top: 0,
                backgroundColor: 'black',
                height: '21px',
                left: 0,
                right: 0,
                zIndex: 30,
            }}/>
            <MachineFrame>
                <ReceiptTopPanelHalf>
                    <div/>
                </ReceiptTopPanelHalf>
                <ReceiptSlot/>
                <BrandName>ГЛАСУВАНЕТИКС</BrandName>
                <MachineScreen>
                {
                    !cardInserted?
                        <InsertCard/> :
                    !partySelected || !partySelected.reviewClicked?
                        <SelectParty selectParty={selectParty}/> :
                    !choiceConfirmed?
                        <ConfirmChoice 
                            partySelected={partySelected}
                            changeChoice={changeChoice}
                            confirmVote={confirmVote}
                        /> :
                    !receiptPrinted?
                        <PrintReceipt printReceipt={printReceipt} receiptPrintedDone={receiptPrintedDone}/> :
                        <RemoveCard/>
                }
                </MachineScreen>
                <TopPanelHalf>
                    <div/>
                </TopPanelHalf>
                <CardSlot/>
            </MachineFrame>,
    
            <VotingCard id='voting-card' style={cardStyle} onClick={insertCard}>
                <span style={{
                    color: 'white',
                    position: 'absolute',
                    top: '-50px',
                    fontWeight: 'bold',
                    visibility: !cardStyle? 'visible' : 'hidden'
                }}>Поставете карта</span>
                <CardChip/>
                <CardSign>ИЗБИРАТЕЛ</CardSign>
            </VotingCard>

            <Receipt style={receiptStyle}>
                Това беше симулация на машинно гласуване за предстоящите избори
                на 11-ти юли. Благодарим ви много, че участвахте!
            </Receipt>
        </TiGlasuvashStyle>
    );
};