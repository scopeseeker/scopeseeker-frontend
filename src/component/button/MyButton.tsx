import { IMyButtonProps } from '@/inteface/component-interface';
import { Button } from '@chakra-ui/react';

const MyButton = ({
  title,
  variant = 'solid',
  type = 'button',
  isLoading = false,
  colorScheme = 'messenger',
  ...rest
}: IMyButtonProps) => {
  return (
    <Button
      fontSize={'14px'}
      borderRadius={'50px'}
      fontWeight={500}
      variant={variant}
      px={'28px'}
      colorScheme={colorScheme}
      type={type}
      isLoading={isLoading}
      {...rest}
    >
      {title}
    </Button>

    // Old Button Type
    // <Center
    //   as={Button}
    //   borderRadius={borderRadius || '50px'}
    //   h={h || '36px'}
    //   bg={variant === 'outline' ? 'transparent' : 'brand.primary'}
    //   borderColor={variant === 'outline' ? 'brand.darkgray' : 'transparent'}
    //   borderWidth="1px"
    //   borderStyle="solid"
    //   _hover={
    //     variant === 'outline'
    //       ? {
    //           bg: 'transparent',
    //           borderColor: 'brand.primary',
    //           color: 'brand.primary',
    //         }
    //       : { bg: 'brand.secondary' }
    //   }
    //   _active={
    //     variant === 'outline' ? { bg: 'transparent' } : { bg: 'brand.ternary' }
    //   }
    //   px={px}
    //   cursor={cursor}
    //   type={type}
    //   color={variant === 'outline' ? 'brand.darkgray' : 'brand.white'}
    //   {...rest}
    // >
    //   <MyText as="span" color={'currentColor'} title={title} />
    // </Center>
  );
};

export default MyButton;
