import { IMyInputProps } from '@/inteface/component-interface';
import {
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import MyText from '../text/MyText';

const MyInput = ({
  placeholder,
  leftElement,
  rightElement,
  type,
  labelTitle,
  onChange,
  value,
  name,
  pr = '12px',
  ...rest
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
            pr={pr}
            borderRadius={'8px 8px 8px 8px'}
            _focus={{ border: '1.5px solid', borderColor: 'brand.primary' }}
            onChange={onChange}
            value={value}
            name={name}
            {...rest}
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
