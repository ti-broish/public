import React, { useState } from "react";

import styled from "styled-components";

const SelectPresidentScreen = styled.div`
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

const PresidentTable = styled.table`
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
    font-size: 10px;
    border-bottom: 1px solid #262629;
    font-weight: bold;
  }

  p {
    margin: 0;
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

const Cross = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  margin-top: -5px;
  margin-left: -1px;

  &:before,
  &:after {
    position: absolute;
    content: " ";
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

const presidents = [
  {
    party: "Независим кандидат",
    president: "Йоло Димитров Денев",
    vice: "Марио Цанков Филев",
  },
  {
    party: "РУСОФИЛИ ЗА ВЪЗРАЖДАНЕ НА ОТЕЧЕСТВОТО",
    president: "Николай Симеонов Малинов",
    vice: "Светлана Петрова Косева",
  },
  {
    party: "Независим кандидат",
    president: "Росен Пламенов Миленов",
    vice: "Иван Стефанов Иванов",
  },
  {
    party: "ПАТРИОТИЧЕН ФРОНТ – НФСБ, БДС РАДИКАЛИ И БНДС ЦЕЛОКУПНА БЪЛГАРИЯ",
    president: "Валери Симеонов Симеонов",
    vice: "Цветан Венциславов Манчев",
  },
  {
    party: "ВЪЗРАЖДАНЕ",
    president: "Костадин Тодоров Костадинов",
    vice: "Елена Цонева Гунчева",
  },
  {
    party: "Независим кандидат",
    president: "Румен Георгиев Радев",
    vice: "Илияна Малинова Йотова",
  },
  {
    party: "НАЦИОНАЛНО ОБЕДИНЕНИЕ НА ДЕСНИЦАТА",
    president: "Горан Тасев Благоев",
    vice: "Ивелина Колева Георгиева-Стойнова",
  },
  {
    party: "БСДД – Български Съюз за Директна Демокрация",
    president: "Благой Боянов Петревски",
    vice: "Севина Краснодарова Хаджийска",
  },
  {
    party: "Независим кандидат",
    president: "Марина Орфей Малчева",
    vice: "Савина Веселинова Луканова",
  },
  {
    party: "БЪЛГАРСКА СОЦИАЛДЕМОКРАЦИЯ – ЕВРОЛЕВИЦА",
    president: "Александър Трифонов Томов",
    vice: "Лъчезар Аспарухов Аврамов",
  },
  {
    party: "АТАКА",
    president: "Волен Николов Сидеров",
    vice: "Магдалена Ламбова Ташева",
  },
  {
    party: "Независим кандидат",
    president: "Боян Боянов Станков-Расате",
    vice: "Елена Кирилова Ваташка",
  },
  {
    party: "ПП ОБЩЕСТВО ЗА НОВА БЪЛГАРИЯ",
    president: "Жельо Николов Желев",
    vice: "Калин Димитров Крулев",
  },
  {
    party: "ПП ГЛАС НАРОДЕН",
    president: "Светослав Емилов Витков",
    vice: "Веселин Асенов Белоконски",
  },
  {
    party: "Независим кандидат",
    president: "Анастас Георгиев Герджиков",
    vice: "Невяна Михайлова Митева-Матеева",
  },
  {
    party: "Независим кандидат",
    president: "Луна Йорданова Йорданова",
    vice: "Иглена Димитрова Илиева",
  },
  {
    party: "Движение за права и свободи – ДПС",
    president: "Мустафа Сали Карадайъ",
    vice: "Искра Димитрова Михайлова-Копарова",
  },
  {
    party: "Независим кандидат",
    president: "Цвета Кирилова Кирилова",
    vice: "Георги Атанасов Тутанов",
  },
  {
    party: "Независим кандидат",
    president: "Лозан Йорданов Панов",
    vice: "Мария Хиндова Касимова-Моасе",
  },
  {
    party: "ПП ПРАВОТО",
    president: "Мария Петрова Колева",
    vice: "Ганчо Иванов Попов",
  },
  {
    party: "ВМРО",
    president: "Милен Василев Михов",
    vice: "Мария Йорданова Цветкова",
  },
  {
    party: "БНО",
    president: "Георги Венелинов Георгиев",
    vice: "Стоян Андреев Цветков",
  },
  {
    party: "ВОЛЯ",
    president: "Веселин Найденов Марешки",
    vice: "Полина Цветославова Цанкова-Христова",
  },
  {
    party: "",
    president: "НЕ ПОДКРЕПЯМ НИКОГО",
    vice: "",
  },
];

const SelectPresident = (props) => {
  const [disabled, setDisabled] = useState(true);
  const [page, setPage] = useState(0);
  const [selectedPresident, setSelectedPresident] = useState(null);

  const presidentClicked = (presidentNum) => {
    if (presidentNum === selectedPresident) {
      setSelectedPresident();
    } else {
      setSelectedPresident(presidentNum);
    }
  };

  return (
    <SelectPresidentScreen>
      <h5>РАЙОН 310000000 000000035</h5>
      <h2>Избори за президент и вицепрезидент</h2>
      <VoteSelectionScreen>
        <PresidentTable>
          <tbody>
            {presidents
              .slice(page * 13, (page + 1) * 13)
              .map(({ party, president, vice }, index) => {
                return (
                  <tr
                    onClick={() => {
                      presidentClicked(page * 13 + index);
                      setDisabled(false);
                    }}
                    className={
                      page * 13 + index === selectedPresident ? "selected" : ""
                    }
                  >
                    <td style={{ paddingLeft: "10px" }}>{party}</td>
                    <td>
                      <NumberSquare
                        className={
                          page * 13 + index === selectedPresident
                            ? "selected"
                            : ""
                        }
                      >
                        {page * 13 + index === selectedPresident ? (
                          <Cross />
                        ) : null}
                        {page * 13 + index + 1}
                      </NumberSquare>
                    </td>
                    <td>
                      <p>{president}</p>
                      <p>{vice}</p>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </PresidentTable>
        <div style={{ height: "80px" }}>
          {(page + 1) * 13 > presidents.length ? null : (
            <PageButton onClick={() => setPage(page + 1)}>
              Следваща стр.
            </PageButton>
          )}
          {page == 0 ? null : (
            <PageButton
              style={{ float: "left", marginLeft: "10px" }}
              onClick={() => setPage(page - 1)}
            >
              Предишна стр.
            </PageButton>
          )}
        </div>
      </VoteSelectionScreen>
      {props.vote === "president" ? (
        <ReviewButton
          onClick={() => {
            props.setPresidentChoice(presidents[selectedPresident]);
            props.setChoiceSelected(true);
          }}
          disabled={disabled}
        >
          Преглед
        </ReviewButton>
      ) : (
        <ReviewButton
          onClick={() => {
            props.setPresidentChoice(presidents[selectedPresident]);
          }}
          disabled={disabled}
        >
          Към избори за НС
        </ReviewButton>
      )}
    </SelectPresidentScreen>
  );
};

export default SelectPresident;
