import { Button } from '@chakra-ui/react';
import React from 'react';

interface MyButtonProps {
  title: string;
  borderRadius: number;
  fontSize: string;
  color: string;
  bg: string;
  size: string;
  variant: string;
}

const MyButton: React.FC<MyButtonProps> = ({
  title,
  borderRadius = 20,
  fontSize = 'xs',
  color = 'white',
  bg = 'brand.100',
  variant = 'solid',
  size = 'sm',
}: MyButtonProps) => {
  return (
    <Button
      size={size}
      color={color}
      bg={bg}
      variant = {variant}
      fontWeight={'medium'}
      fontSize={fontSize}
      _hover={{ backgroundColor: 'brand.200' }}
      _active={{ backgroundColor: 'brand.300' }}
      borderRadius={borderRadius}
    >
      {title}
    </Button>
  );
};

export default MyButton;