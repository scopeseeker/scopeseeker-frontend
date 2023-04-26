import { IMyInputProps } from '@/inteface/component-interface';
import { Center, HStack, Input, Text, VStack } from '@chakra-ui/react';
import { useRef } from 'react';

const MyInput = (props: IMyInputProps) => {
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
    hpr,
    bg = 'brand.aliceblue',
    ...rest
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
        {labelTitle && (
          <Text as={'span'} mt={mt} fontSize={labelFontSize}>
            {labelTitle}
          </Text>
        )}
        <HStack
          bg={bg}
          px={1}
          ref={boxRef}
          border={'1.7px solid transparent'}
          borderRadius={6}
          spacing={0}
          w={'100%'}
          pr={hpr}
        >
          {leftElem && (
            <Center w={'10%'} h={'full'}>
              {leftElem}
            </Center>
          )}
          <Center w={'100%'}>
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
              _placeholder={{ fontSize: inputFontSize }}
              type={type}
              size={size}
              pl={2}
              {...rest}
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
