import { FormLabel, Input } from '@chakra-ui/react';

interface IMyInputProps {
  inputFontSize?: string;
  labelFontSise?: string;
  labelTitle?: string;
  placeholder?: string;
  size?: string;
  type: string;
  mt?: number;
}

const MyInput: React.FC<IMyInputProps> = (props) => {
  const {
    inputFontSize = 'sm',
    labelFontSise = 'xs',
    labelTitle,
    placeholder,
    type,
    size,
    mt,
  } = props;
  return (
    <>
      <FormLabel mt={mt} fontSize={labelFontSise}>
        {labelTitle}
      </FormLabel>
      <Input
        colorScheme={'messenger'}
        type={type}
        placeholder={placeholder}
        fontSize={inputFontSize}
        size={size}
        variant={'filled'}
        bg={'brand.aliceblue'}
        _hover={{ backgroundColor: 'brand.aliceblue' }}
        _placeholder={{ color: 'brand.darkgrey', fontSize: inputFontSize }}
      />
    </>
  );
};

export default MyInput;
