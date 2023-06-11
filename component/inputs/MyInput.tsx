// import { IMyInputProps } from '@/inteface/component-interface';
// import { Center, HStack, Input, Text, VStack } from '@chakra-ui/react';
// import { useRef } from 'react';

// const MyInput = (props: IMyInputProps) => {
//   const {
//     inputFontSize = 'sm',
//     labelFontSize = 'xs',
//     labelTitle,
//     placeholder,
//     type,
//     size,
//     mt,
//     leftElem,
//     rightElem,
//     w,
//     hpr,
//     bg = 'brand.aliceblue',
//     ...rest
//   } = props;

//   const boxRef = useRef<HTMLDivElement>(null);

//   const handleInputFocus = () => {
//     if (boxRef.current) {
//       boxRef.current.style.borderColor = '#1A75E8';
//     }
//   };

//   const handleInputBlur = () => {
//     if (boxRef.current) {
//       boxRef.current.style.borderColor = 'transparent';
//     }
//   };
//   return (
//     <>
//       <VStack alignItems={'flex-start'} w={w}>
//         {labelTitle && (
//           <Text as={'span'} mt={mt} fontSize={labelFontSize}>
//             {labelTitle}
//           </Text>
//         )}
//         <HStack
//           bg={bg}
//           px={1}
//           ref={boxRef}
//           border={'1.7px solid transparent'}
//           borderRadius={6}
//           spacing={0}
//           w={'100%'}
//           pr={hpr}
//         >
//           {leftElem && (
//             <Center w={'10%'} h={'full'}>
//               {leftElem}
//             </Center>
//           )}
//           <Center w={'100%'}>
//             <Input
//               _focus={{ border: 'none' }}
//               onFocus={handleInputFocus}
//               onBlur={handleInputBlur}
//               variant={'filled'}
//               border={'none'}
//               fontSize={inputFontSize}
//               bg={'transparent'}
//               placeholder={placeholder}
//               _hover={{ bg: 'transparent' }}
//               _placeholder={{ fontSize: inputFontSize }}
//               type={type}
//               size={size}
//               pl={2}
//               {...rest}
//             />
//           </Center>
//           {rightElem && (
//             <Center w={'20%'} h={'full'}>
//               {rightElem}
//             </Center>
//           )}
//         </HStack>
//       </VStack>
//     </>
//   );
// };

// export default MyInput;

import {
  Box,
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { MyIcon } from '../icon';
import { IMyInputProps } from '@/inteface/component-interface';
import { MyText } from '../text';

const MyInput = ({
  placeholder,
  leftElement,
  rightElement,
  type,
  labelTitle,
  onChange,
}: IMyInputProps) => {
  return (
    <>
      <Flex gap={'8px'} flexDirection={'column'} width={'100%'}>
        {labelTitle && <MyText title={labelTitle} as="span" />}
        <InputGroup>
          {leftElement && (
            <InputLeftElement
              pointerEvents="none"
              h={'100%'}
              color={'brand.black'}
              pl={'6px'}
            >
              <Center width={'25px'} height={'25px'} p={'3px'}>
                {leftElement}
              </Center>
            </InputLeftElement>
          )}
          <Input
            type={type}
            placeholder={placeholder}
            bg={'brand.white'}
            fontSize={{ base: '16px', md: '14px' }}
            height={{ base: '52px', md: '42px' }}
            borderWidth={{ base: '1.8px', md: '1.4px' }}
            variant={'unstyled'}
            pr={'50px'}
            borderRadius={'8px 8px 8px 8px'}
            _focus={{ border: '1.5px solid', borderColor: 'brand.primary' }}
            onChange={onChange}
          />
          {rightElement && (
            <InputRightElement
              width={'68px'}
              px={'6px'}
              h={'100%'}
              color={'brand.black'}
            >
              {rightElement}
            </InputRightElement>
          )}
        </InputGroup>
      </Flex>
    </>
  );
};

export default MyInput;
