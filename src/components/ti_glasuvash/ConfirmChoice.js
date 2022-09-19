import React from "react";

import styled from "styled-components";

const ConfirmChoiceStyle = styled.div`
  h5 {
    margin: 30px 15px 0px 15px;
    font-size: 11px;
  }

  h2 {
    margin: 0px 15px 5px 15px;
    font-size: 17px;
  }

  h1 {
    font-size: 24px;
    margin-left: 15px;
    margin-bottom: 5px;
  }

  p {
    font-size: 15px;
    margin: 13px 15px;
  }
`;

const ChoiceBox = styled.div`
  border: 3px solid black;
  width: 240px;
  margin: 0 auto;
  border-radius: 4px;
  margin-top: 50px;
  padding: 5px 10px;

  h3 {
    text-align: center;
    margin: 0;
    font-size: 14px;
  }

  h2 {
    font-size: 13px;
    margin: 0;
  }

  p {
    margin: 0px;
    font-weight: 700;
  }
`;

const DarkButton = styled.button`
  margin-right: 15px;
  width: 250px;
  border: none;
  background-color: #262629;
  color: white;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  font-size: 12px;

  &:disabled {
    background-color: #aaa;
    color: #ccc;
  }
`;

export default (props) => {
  return (
    <ConfirmChoiceStyle>
      <h5>Район 310000000 000000035</h5>
      <h2>Избори за Народно събрание 2 октомври 2022 г.</h2>
      <h1>Преглед на направените избори</h1>
      <p>Прегледайте избора си. </p>
      <p>Може да го промените, като натиснете <b>"Промени избора"</b>.</p>
      <p>Натиснете <b>"Гласуване"</b> и изчакайте разписка.</p>
      <ChoiceBox>
        <h3>000000035</h3>
        <hr />
        {props.presidentChoice ? (
          <>
            <h2
              style={{
                fontSize: "11px",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            >
              Избори за президент и вицепрезидент
            </h2>
            <p style={{ fontSize: "12px" }}>
              {props.presidentChoice[1] + 1}.{" "}
              {props.presidentChoice[0].president}
            </p>
            <p style={{ fontSize: "12px" }}>{props.presidentChoice[0].vice}</p>
            <p style={{ fontSize: "10px", marginTop: '10px' }}>{props.presidentChoice[0].party}</p>
          </>
        ) : null}
        {props.partySelected ? (
          <>
            <h2
              style={{
                fontSize: "11px",
                marginTop: "30px",
                marginBottom: "10px",
              }}
            >
              Избори за народни представители
            </h2>
            {!props.partySelected || !props.partySelected.party ? (
              <p>Не е направен избор</p>
            ) : (
              <div style={{ marginTop: "10px" }}>
                <div>
                  {/*<div
                    style={{
                    width: "16px",
                    height: "16px",
                    backgroundColor: "#262629",
                    display: "inline-block",
                    verticalAlign: "top",
                    }}
                /> */}
                  <p
                    /*style={{
                    display: "inline-block",
                    margin: 0,
                    marginLeft: "-8px",
                    paddingLeft: "22px",
                    width: "245px",
                    borderLeft: "1px solid #262629",
                    fontSize: "12px",
                    }} */
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    {props.partySelected.party.nikogo
                      ? null
                      : props.partySelected.party.number + ". "}
                    {props.partySelected.party.name}
                  </p>
                </div>

                <div>
                  {/*                   <div
                    style={{
                      width: "12px",
                      height: "20px",
                      borderLeft: "1px solid #262629",
                      borderBottom: "1px solid #262629",
                      marginLeft: "8px",
                      display: "inline-block",
                      marginTop: "-1px",
                    }}
                  /> */}
                  <p
                    /*                     style={{
                      fontSize: "12px",
                      margin: "0",
                      display: "inline-block",
                      marginLeft: "18px",
                      marginBottom: "20px",
                    }} */
                    style={{
                      fontSize: "12px",
                      marginBottom: "20px",
                    }}
                  >
                    {props.partySelected.party.nikogo
                      ? ""
                      : !props.partySelected.preference
                      ? "Не е направен избор"
                      : `${props.partySelected.preference.number}. ${props.partySelected.preference.name}`}
                  </p>
                </div>
              </div>
            )}
          </>
        ) : null}
      </ChoiceBox>
      <DarkButton
        onClick={() => {
          props.changeChoice();
        }}
        style={{
          margin: "8px auto",
          width: "266px",
          left: 0,
          right: 0,
          position: "absolute",
        }}
      >
        Промени избора
      </DarkButton>
      <DarkButton
        onClick={props.confirmVote}
        style={{
          float: "right",
          position: "absolute",
          bottom: "19px",
          right: "9px",
        }}
        disabled={
          props.partySelected
            ? !props.partySelected.party
            : !props.presidentChoice
        }
      >
        Гласуване
      </DarkButton>
    </ConfirmChoiceStyle>
  );
};
