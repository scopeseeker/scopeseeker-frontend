'use client';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import MyText from '../text/MyText';

interface IRadioButton {
  name: string;
  options: string[];
  onChange?: any;
}
const RadioButton = ({ name, options, onChange }: IRadioButton) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <RadioGroup onChange={handleChange} value={selectedValue} name={name}>
      <Stack direction="row" gap={'12px'} flexWrap={'wrap'} spacing={0}>
        {options.map((option, index) => {
          return (
            <>
              <Radio value={option} onChange={onChange} key={index}>
                <MyText as="span" title={option} />
              </Radio>
            </>
          );
        })}
      </Stack>
    </RadioGroup>
  );
};

export default RadioButton;
