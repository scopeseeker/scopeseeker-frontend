import { Box, HStack, useRadio, useRadioGroup } from '@chakra-ui/react';

function RadioButtons(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="50px"
        _checked={{
          bg: 'brand.primary',
          color: 'white',
        }}
        px={'10px'}
        py={'5px'}
        fontSize={'13px'}
      >
        {props.children}
      </Box>
    </Box>
  );
}

interface IRadioBtnProps {
  options: string[];
  onClick: (value: string) => void;
}

function RadioComp({ options, onClick }: IRadioBtnProps) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'gender',
    defaultValue: 'male',
    onChange: (value) => onClick(value),
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioButtons
            key={value}
            {...radio}
            options={options}
            onClick={onClick}
          >
            {value}
          </RadioButtons>
        );
      })}
    </HStack>
  );
}

export default RadioComp;
