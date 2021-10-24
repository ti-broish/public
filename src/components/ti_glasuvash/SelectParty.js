import React, { useState } from 'react';

import styled from 'styled-components';

const SelectPartyScreen = styled.div`
  h5 {
    margin: 30px 15px 0px 15px;
    font-size: 11px;
  }

  h2 {
    margin: 0px 15px 5px 15px;
    font-size: 17px;
  }
`;

const VoteSelectionScreen = styled.div`
  border: 5px solid #262629;
  border-radius: 5px;
  margin: 15px;
  height: 550px;
  box-sizing: border-box;
`;

const PartyHalf = styled.div`
  width: 65%;
  display: inline-block;
  border-right: 1px solid #262629;
  height: 100%;
  box-sizing: border-box;
`;

const PreferenceHalf = styled.div`
  width: 35%;
  display: inline-block;
  height: 100%;
  box-sizing: border-box;
  vertical-align: top;
  text-align: center;

  h2 {
    font-size: 12px;
  }
`;

const ReviewButton = styled.button`
  float: right;
  margin-right: 15px;
  width: 220px;
  border: none;
  background-color: #262629;
  color: white;
  font-weight: bold;
  padding: 8px;
  border-radius: 10px;
  font-size: 12px;
`;

const PageButton = styled.button`
  float: right;
  border: 1px solid #262629;
  border-radius: 7px;
  padding: 7px;
  font-size: 12px;
  background-color: white;
  font-weight: bold;
  margin-top: 16px;
  margin-right: 10px;
`;

const PartyTable = styled.table`
  width: 100%;

  tr {
    cursor: pointer;

    &.selected {
      background-color: #262629;
      color: white;
    }
  }

  td {
    width: 38px;
    height: 33px;
    font-size: 12px;
    border-bottom: 1px solid #262629;
    font-weight: bold;
  }
`;

const NumberSquare = styled.div`
  border: 1px solid #262629;
  margin: 0 9px 0 3px;
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  font-weight: 400;
  padding-top: 4px;
  font-size: 13px;
  text-align: center;

  &.selected {
    border: 1px solid white;
  }
`;

const PreferenceCircle = styled.div`
  border: 1px solid #262629;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: inline-block;
  margin: 5px 15px;
  font-size: 13px;
  text-align: center;
  padding-top: 7px;
  box-sizing: border-box;
  cursor: pointer;

  &.selected {
    //background-color: #262629;
    color: white;
  }

  &:before {
    background-color: red;
    z-index: -1;
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border: 5px solid #ffea00;
  }
`;

const Cross = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  margin-top: -5px;
  margin-left: -1px;

  &:before,
  &:after {
    position: absolute;
    content: ' ';
    height: 24px;
    width: 2px;
    background-color: white;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export default (props) => {
  const [page, setPage] = useState(0);
  const [selectedParty, setSelectedParty] = useState(null);
  const [selectedPreference, setSelectedPreference] = useState(null);

  const parties = [
    {
      number: 2,
      name: 'РУСОФИЛИ ЗА ВЪЗРАЖДАНЕ НА ОТЕЧЕСТВОТО',
    },
    {
      number: 4,
      name: 'ПАТРИОТИЧЕН ФРОНТ',
    },
    {
      number: 5,
      name: 'ВЪЗРАЖДАНЕ',
    },
    {
      number: 7,
      name: 'НАЦИОНАЛНО ОБЕДИНЕНИЕ НА ДЕСНИЦАТА',
    },
    {
      number: 8,
      name: 'БСДД – Български Съюз за Директна Демокрация',
    },
    {
      number: 10,
      name: 'БЪЛГАРСКА СОЦИАЛДЕМОКРАЦИЯ – ЕВРОЛЕВИЦА',
    },
    {
      number: 11,
      name: 'АТАКА',
    },
    {
      number: 13,
      name: 'ПП ОБЩЕСТВО ЗА НОВА БЪЛГАРИЯ',
    },
    {
      number: 14,
      name: 'ПП ГЛАС НАРОДЕН',
    },
    {
      number: 17,
      name: 'Движение за права и свободи - ДПС',
    },
    {
      number: 20,
      name: 'ПП ПРАВОТО',
    },
    {
      number: 21,
      name: 'ВМРО - Българско национално движение',
    },
    {
      number: 22,
      name: 'БНО',
    },
    {
      number: 23,
      name: 'ВОЛЯ',
    },
    {
      number: 24,
      name: 'ИМА ТАКЪВ НАРОД',
    },
    {
      number: 20,
      name: 'ПП ПРАВОТО',
    },
    {
      number: 21,
      name: 'ВМРО - Българско национално движение',
    },
    {
      number: 22,
      name: 'БНО',
    },
    {
      number: 23,
      name: 'ВОЛЯ',
    },
    {
      number: 24,
      name: 'ИМА ТАКЪВ НАРОД',
    },
    {
      number: 25,
      name: 'Продължаваме Промяната',
    },
    {
      number: 26,
      name: 'Партия МИР',
    },
    {
      number: 27,
      name: 'ПП БЛАГОДЕНСТВИЕ – ОБЕДИНЕНИЕ – ГРАДИВНОСТ',
    },
    {
      number: 28,
      name: 'Български национален съюз – НД',
    },
    {
      number: 29,
      name: 'ПРЯКА ДЕМОКРАЦИЯ',
    },
    {
      number: 30,
      name: 'ДЕМОКРАТИЧНА БЪЛГАРИЯ – ОБЕДИНЕНИЕ',
    },
    {
      number: 31,
      name: 'ИЗПРАВИ СЕ БГ! НИЕ ИДВАМЕ!',
    },
    {
      number: 32,
      name: 'ГЕРБ-СДС',
    },
    {
      number: 33,
      name: 'БСП ЗА БЪЛГАРИЯ',
    },
    {
      number: 34,
      name: 'БЪЛГАРСКА ПРОГРЕСИВНА ЛИНИЯ',
    },
    {
      number: 35,
      name: 'Партия на ЗЕЛЕНИТЕ',
    },
    {
      number: 36,
      name: 'БРИГАДА',
    },
    {
      number: '',
      name: 'Не подкрепям никого',
    },
  ];

  const addZeroIfNeeded = (number) => {
    const numString = number.toString();
    if (numString.length == 1) {
      return '0' + numString;
    } else return numString;
  };

  const clickReview = () => {
    const party = selectedParty;

    if (selectedParty?.number === '') {
      party.nikogo = true;
    }

    const preference =
      selectedPreference == null
        ? null
        : {
            number: selectedPreference,
            name: 'Име на кандидат',
          };

    props.selectParty(party, preference);
    props.setChoiceSelected(true);
  };

  const partyClicked = (party) => {
    if (party?.number === selectedParty?.number) {
      setSelectedParty();
    } else setSelectedParty(party);
    setSelectedPreference();
  };

  return (
    <SelectPartyScreen>
      <h5>РАЙОН 310000000 000000035</h5>
      <h2>Избори за народни представители</h2>
      <VoteSelectionScreen>
        <PartyHalf>
          <PartyTable>
            <tbody>
              {parties.slice(page * 13, (page + 1) * 13).map((party, i) => (
                <tr
                  onClick={() => partyClicked(party)}
                  className={
                    party?.number === selectedParty?.number ? 'selected' : ''
                  }
                >
                  <td>
                    <NumberSquare
                      className={
                        party?.number === selectedParty?.number
                          ? 'selected'
                          : ''
                      }
                    >
                      {party?.number === selectedParty?.number ? (
                        <Cross />
                      ) : null}
                      {party?.number}
                    </NumberSquare>
                  </td>
                  <td>{party?.name}</td>
                </tr>
              ))}
            </tbody>
          </PartyTable>
          <div style={{ height: '80px' }}>
            {(page + 1) * 13 > parties.length ? null : (
              <PageButton onClick={() => setPage(page + 1)}>
                Следваща стр.
              </PageButton>
            )}
            {page == 0 ? null : (
              <PageButton onClick={() => setPage(page - 1)}>
                Предишна стр.
              </PageButton>
            )}
          </div>
        </PartyHalf>
        <PreferenceHalf>
          <h2>Предпочитание (преференция) за кандидат</h2>
          {selectedParty == null || selectedParty == parties.length - 1
            ? null
            : [...Array(32).keys()].map((key) => (
                <PreferenceCircle
                  className={101 + key === selectedPreference ? 'selected' : ''}
                  onClick={() => {
                    if (selectedPreference) setSelectedPreference(null);
                    else setSelectedPreference(101 + key);
                  }}
                >
                  {101 + key === selectedPreference
                    ? [
                        <Cross style={{ marginLeft: '1px' }} />,
                        <div
                          style={{
                            width: '28px',
                            height: '28px',
                            backgroundColor: '#262629',
                            borderRadius: '50%',
                            boxSizing: 'border-box',
                            marginTop: '-6.2px',
                            marginLeft: '0.5px',
                            zIndex: -1,
                            position: 'absolute',
                          }}
                        />,
                      ]
                    : null}
                  {101 + key}
                </PreferenceCircle>
              ))}
        </PreferenceHalf>
      </VoteSelectionScreen>
      <ReviewButton onClick={clickReview}>Преглед</ReviewButton>
    </SelectPartyScreen>
  );
};
