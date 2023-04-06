import { Center, HStack, Input, Text, VStack } from '@chakra-ui/react';
import { useRef } from 'react';

interface IMyInputProps {
  inputFontSize?: string;
  labelFontSise?: string;
  labelTitle?: string;
  placeholder?: string;
  size?: string;
  type: string;
  mt?: number;
  leftElem?: React.ReactNode;
  rightElem?: React.ReactNode;
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
    leftElem,
    rightElem,
  } = props;
  const boxRef = useRef<HTMLDivElement>(null);

  const handleInputFocus = () => {
    if (boxRef.current) {
      boxRef.current.style.borderColor = '#1A75E8';
    }
  };

  const handleInputBlur = () => {
    if (boxRef.current) {
      boxRef.current.style.borderColor = 'transparent';
    }
  };
  return (
    <>
      <VStack alignItems={'flex-start'}>
        <Text as={'span'} mt={mt} fontSize={labelFontSise}>
          {labelTitle}
        </Text>
        <HStack
          bg={'brand.aliceblue'}
          px={1}
          ref={boxRef}
          border={'1.7px solid transparent'}
          borderRadius={6}
          spacing={0}
        >
          {leftElem && (
            <Center w={'20%'} h={'full'}>
              {leftElem}
            </Center>
          )}
          <Center>
            <Input
              _focus={{ border: 'none' }}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              variant={'filled'}
              border={'none'}
              fontSize={inputFontSize}
              bg={'transparent'}
              placeholder={placeholder}
              _hover={{ bg: 'transparent' }}
              type={type}
              size={size}
              px={2}
            />
          </Center>
          {rightElem && (
            <Center maxW={'40%'} h={'full'}>
              {rightElem}
            </Center>
          )}
        </HStack>
      </VStack>
    </>
  );
};

export default MyInput;
