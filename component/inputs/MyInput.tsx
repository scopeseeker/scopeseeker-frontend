import { Center, HStack, Input, Text, VStack } from '@chakra-ui/react';
import { useRef } from 'react';

interface IMyInputProps {
  inputFontSize?: string;
  labelFontSize?: string;
  labelTitle?: string;
  placeholder?: string;
  size?: string;
  type: string;
  mt?: number;
  leftElem?: React.ReactNode;
  rightElem?: React.ReactNode;
  w?: number | string;
}

const MyInput: React.FC<IMyInputProps> = (props) => {
  const {
    inputFontSize = 'sm',
    labelFontSize = 'xs',
    labelTitle,
    placeholder,
    type,
    size,
    mt,
    leftElem,
    rightElem,
    w,
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
      <VStack alignItems={'flex-start'} w={w}> 
        <Text as={'span'} mt={mt} fontSize={labelFontSize}>
          {labelTitle}
        </Text>
        <HStack
          bg={'brand.aliceblue'}
          px={1}
          ref={boxRef}
          border={'1.7px solid transparent'}
          borderRadius={6}
          spacing={0}
          w={'100%'}
        >
          {leftElem && (
            <Center w={'10%'} h={'full'}>
              {leftElem}
            </Center>
          )}
          <Center w={'80%'}>
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
              _placeholder={{fontSize: inputFontSize}}
              type={type}
              size={size}
              pl={1}
            />
          </Center>
          {rightElem && (
            <Center w={'20%'} h={'full'}>
              {rightElem}
            </Center>
          )}
        </HStack>
      </VStack>
    </>
  );
};

export default MyInput;
