// import { IMyButtonProps } from '@/inteface/component-interface';
// import { Button } from '@chakra-ui/react';

// const MyButton = ({
//   title,
//   borderRadius,
//   fontSize = { base: '14px', md: '16px' },
//   variant = 'solid',
//   size = 'sm',
//   colorScheme = 'messenger',
//   decoration = 'none',
//   color,
//   bg,
//   px,
//   w,
//   mt,
//   fontWeight,
//   ...rest
// }: IMyButtonProps) => {
//   return (
//     <Button
//       size={size}
//       color={color}
//       variant={variant}
//       fontSize={fontSize}
//       colorScheme={variant === 'outline' ? 'gray' : colorScheme}
//       borderRadius={borderRadius}
//       _hover={{
//         textDecoration: decoration,
//         opacity: variant === 'Link' && 0.6,
//       }}
//       bg={bg}
//       px={px}
//       w={w}
//       mt={mt}
//       fontWeight={fontWeight}
//       {...rest}
//     >
//       {title}
//     </Button>
//   );
// };

import { IMyButtonProps } from '@/inteface/component-interface';
import { Button, Center } from '@chakra-ui/react';
import { MyText } from '../text';
import Link from 'next/link';

const MyButton = ({
  title,
  borderRadius,
  fontSize = { base: '14px', md: '16px' },
  variant = 'solid',
  href = '#',
  w = { base: '132px', md: '112px' },
  ...rest
}: IMyButtonProps) => {
  return (
    <Center
      borderRadius={borderRadius || '20px'}
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
      px={'16px'}
      cursor={'pointer'}
      color={variant === 'outline' ? 'brand.darkgray' : 'brand.white'}
    >
      <MyText as="span" color={'currentColor'} title={title} />
    </Center>
  );
};

export default MyButton;
