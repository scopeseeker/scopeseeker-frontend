import { IMyButtonProps } from '@/inteface/component-interface';
import { Center } from '@chakra-ui/react';
import { MyText } from '../text';

const MyButton = ({
  title,
  borderRadius,
  variant = 'solid',
  px='16px',
  ...rest
}: IMyButtonProps) => {
  return (
    <Center
      borderRadius={borderRadius || '50px'}
      h={'36px'}
      bg={variant === 'outline' ? 'transparent' : 'brand.primary'}
      borderColor={variant === 'outline' ? 'brand.darkgray' : 'transparent'}
      borderWidth="1px"
      borderStyle="solid"
      _hover={
        variant === 'outline'
          ? {
              bg: 'transparent',
              borderColor: 'brand.primary',
              color: 'brand.primary',
            }
          : { bg: 'brand.secondary' }
      }
      _active={
        variant === 'outline' ? { bg: 'transparent' } : { bg: 'brand.ternary' }
      }
      {...rest}
      px={px}
      cursor={'pointer'}
      color={variant === 'outline' ? 'brand.darkgray' : 'brand.white'}
    >
      <MyText as="span" color={'currentColor'} title={title} />
    </Center>
  );
};

export default MyButton;
