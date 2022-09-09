import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const VoteSelectionScreen = styled.div`
  h5 {
    margin: 30px 15px 0px 15px;
    font-size: 10px;
  }

  h2 {
    margin: 5px 15px 5px 15px;
    font-size: 12px;
  }

  h1 {
    margin: 20px 15px 5px 15px;
    font-size: 20px;
  }

  p {
    margin: 10px 15px 5px 15px;
    font-size: 14px;
  }
`;

const VoteBoxes = styled.div`
  margin-top: 75px;
  cursor: pointer;

  .both,
  .president,
  .parliament {
    background: black;
    color: white;
  }

  h2 {
    border: 2px solid #262629;
    border-radius: 5px;
    margin: 35px auto;
    height: 70px;
    width: 45%;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    align-items: center;
  }

  text {
    padding: inherit;
    width: 250px;
  }
`;

const Check = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 20px;
  }
`;

const LightButton = styled.button`
  margin-right: 15px;
  width: 220px;
  border: none;
  background-color: #262629;
  color: white;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
  height: 35px;
  padding: inherit;

  &:disabled {
    background-color: #fff;
    border-bottom: 2px solid gray;
    border-right: 2px solid gray;
    border-top: 1px solid gray;
    border-left: 1px solid gray;
    color: black;
    cursor: pointer;
  }
`;

const DarkButton = styled.button`
  width: 160px;
  border: none;
  background-color: #262629;
  color: white;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
  height: 35px;
`;

const ConfirmationScreen = styled.div`
  height: 30%;
  margin: auto;
  display: flex;
  flex-direction: column;
  display: flex;
  width: 80%;
  margin-top: 35%;
`;

const ConfirmationTitle = styled.div`
  border: 2px solid;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom: none;
  padding: 15px;
  font-weight: bold;
  font-size: 10px;
`;

const ConfirmationBody = styled.div`
  border: 2px solid;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 15px;

  h3 {
    font-size: 14px;
  }

  h4 {
    font-size: 12px;
    margin-bottom: 50px;
    margin-top: 25px;
  }
`;

const SelectVote = (props) => {
  const [selection, setSelection] = useState(false);
  const [selectedVote, setSelectedVote] = useState("");
  const [disabled, setDisabled] = useState(true);

  const choiceHandler = (vote) => {
    setSelectedVote(vote);
    setDisabled(false);
  };

  const options = {
    both: "ИЗБОРИ ЗА ПРЕЗИДЕНТ И ВИЦЕПРЕЗИДЕНТ И ЗА НАРОДНИ ПРЕДСТАВИТЕЛИ",
    president: "ИЗБОРИ ЗА ПРЕЗИДЕНТ И ВИЦЕПРЕЗИДЕНТ",
    parliament: "ИЗБОРИ ЗА НАРОДНИ ПРЕДСТАВИТЕЛИ",
  };

  return (
    <>
      {!selection ? (
        <VoteSelectionScreen>
          <h5>Район 310000000 Секция 000000035</h5>
          <h2>ИЗБОРИ 02.10.2022</h2>
          <h1>Посочете в кои избори ще гласувате</h1>
          <p>Натиснете и потвърдете</p>
          <VoteBoxes>
            <h2
              className={selectedVote === "both" ? "both" : null}
              onClick={() => {
                choiceHandler("both");
              }}
            >
              <Check>
                {selectedVote === "both" ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : null}
              </Check>
              <text>{options.both}</text>
            </h2>

            <h2
              className={selectedVote === "president" ? "president" : null}
              onClick={() => {
                choiceHandler("president");
              }}
            >
              <Check>
                {selectedVote === "president" ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : null}
              </Check>
              <text>{options.president}</text>
            </h2>

            <h2
              className={selectedVote === "parliament" ? "parliament" : null}
              onClick={() => {
                choiceHandler("parliament");
              }}
            >
              <Check>
                {selectedVote === "parliament" ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : null}
              </Check>
              <text>{options.parliament}</text>
            </h2>
          </VoteBoxes>
          <LightButton
            style={{
              float: "right",
              position: "absolute",
              bottom: "50px",
              right: "9px",
            }}
            disabled={disabled}
            onClick={() => {
              setSelection(true);
            }}
          >
            Потвърждавам
          </LightButton>
        </VoteSelectionScreen>
      ) : (
        <ConfirmationScreen>
          <ConfirmationTitle>Вие избрахте да гласувате в:</ConfirmationTitle>
          <ConfirmationBody>
            <h3>
              {selectedVote === "both"
                ? options.both
                : selectedVote === "president"
                ? options.president
                : options.parliament}
            </h3>
            <h4>Потвърдете своя избор или се върнете назад.</h4>
            <DarkButton
              style={{
                float: "left",
                bottom: "50px",
                left: "9px",
              }}
              onClick={() => {
                setSelection(false);
                setSelectedVote("");
                setDisabled(true);
              }}
            >
              Връщане назад
            </DarkButton>
            <DarkButton
              style={{
                float: "right",
                bottom: "50px",
                right: "9px",
              }}
              onClick={() => {
                props.setVote(selectedVote);
                props.setVoteSelected(true);
              }}
            >
              Потвърждавам
            </DarkButton>
          </ConfirmationBody>
        </ConfirmationScreen>
      )}
    </>
  );
};

export default SelectVote;
