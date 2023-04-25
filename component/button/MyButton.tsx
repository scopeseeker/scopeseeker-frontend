import { Button } from '@chakra-ui/react';
import React from 'react';

interface MyButtonProps {
  title: string;
  borderRadius?: number;
  fontSize?: {base: string, md: string} | string;
  color?: string;
  bg?: string;
  size?: string;
  variant?: string;
  colorScheme?: string;
  decoration?: string;
  px?: number | string;
  w?: string;
  mt?: number;
  fontWeight?: string;
  [key: string]: any;
}

const MyButton: React.FC<MyButtonProps> = ({
  title,
  borderRadius,
  fontSize = {base: '14px', md: '16px'},
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
}: MyButtonProps) => {
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
