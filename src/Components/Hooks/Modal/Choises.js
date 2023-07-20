import React from "react";
import { styled } from "styled-components";

const ChoiseWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
  column-gap: 15px;
`;
const ChoiseRadio = styled.input`
  cursor: pointer;
  margin-right: 5px;
`;
const ChoiseLabel = styled.label`
  cursor: pointer;
  display: block;
`;

export function Choices({ openItem, choice, changeChoices }) {
  return (
    <>
      <h3>Выбирайте:</h3>
      <ChoiseWrap>
        {openItem.choices.map((item, i) => (
          <ChoiseLabel key={i}>
            <ChoiseRadio
              type="radio"
              name="choices"
              defaultChecked={choice === item}
              value={item}
              onChange={changeChoices}
            />
            {item}
          </ChoiseLabel>
        ))}
      </ChoiseWrap>
    </>
  );
}
