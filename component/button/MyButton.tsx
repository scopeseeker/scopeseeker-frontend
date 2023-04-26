import { IMyButtonProps } from '@/inteface/component-interface';
import { Button } from '@chakra-ui/react';

const MyButton = ({
  title,
  borderRadius,
  fontSize = { base: '14px', md: '16px' },
  variant = 'solid',
  size = 'sm',
  colorScheme = 'messenger',
  decoration = 'none',
  color,
  bg,
  px,
  w,
  mt,
  fontWeight,
  ...rest
}: IMyButtonProps) => {
  return (
    <Button
      size={size}
      color={color}
      variant={variant}
      fontSize={fontSize}
      colorScheme={variant === 'outline' ? 'gray' : colorScheme}
      borderRadius={borderRadius}
      _hover={{
        textDecoration: decoration,
        opacity: variant === 'Link' && 0.6,
      }}
      bg={bg}
      px={px}
      w={w}
      mt={mt}
      fontWeight={fontWeight}
      {...rest}
    >
      {title}
    </Button>
  );
};

export default MyButton;
