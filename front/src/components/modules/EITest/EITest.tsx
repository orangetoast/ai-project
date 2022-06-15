import React, { useState } from 'react';
import TestList from '../../utils/TestData.json';

import Big from 'components/atoms/span/big/Big';
import { StyledQuestion, StyledAnswer, StyledButtonDiv } from './EITest.style';
import RadioButton from '../../atoms/radioButton/RadioButton';

import Button from 'components/atoms/button/Button';
import { isDisabled } from '@testing-library/user-event/dist/utils';

function EITest() {
  const [loading, setLoading] = useState(false);
  const [selectCheck, setSelectCheck] = useState(false);
  const [selections, setSelections] = useState<any>([
    Object.keys(TestList).map((x) => []),
  ]);

  const submitHandler = () => {
    console.log(selections);
  };

  const handleChange = (selection: number, index: number) => {
    const tempState = { ...selections };
    console.log(tempState);
    tempState[index] = selection;
    setSelections(tempState);
  };

  const isNumberValid = Object.keys(selections).length === 25;

  return (
    <>
      {TestList.map((item: any, index: any) => {
        return (
          <div key={item.id}>
            <StyledQuestion className='questions'>
              <Big>{item.question}</Big>
            </StyledQuestion>
            <StyledAnswer className='answers'>
              <span>Disagree</span>
              <RadioButton
                color='#2ecc71'
                name='answer'
                value={item.answers[0]}
                checked={selections[index] === 1}
                onChange={() => handleChange(1, index)}
              />

              <RadioButton
                color='#3498db'
                name='answer'
                value={item.answers[1]}
                checked={selections[index] === 2}
                onChange={() => handleChange(2, index)}
              />

              <RadioButton
                color='#f1c40f'
                name='answer'
                value={item.answers[2]}
                checked={selections[index] === 3}
                onChange={() => handleChange(3, index)}
              />

              <RadioButton
                color='#e74c3c'
                name='answer'
                value={item.answers[3]}
                checked={selections[index] === 4}
                onChange={() => handleChange(4, index)}
              />
              <span>Agree</span>
            </StyledAnswer>
          </div>
        );
      })}
      <StyledButtonDiv>
        <Button type='submit' onClick={submitHandler} disabled={!isNumberValid}>
          결과 보기
        </Button>
      </StyledButtonDiv>
    </>
  );
}
export default EITest;
