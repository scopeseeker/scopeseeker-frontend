import { Button } from '@chakra-ui/react';
import React from 'react';

interface MyButtonProps {
  title: string;
  borderRadius?: number;
  fontSize?: string;
  color?: string;
  bg?: string;
  size?: string;
  variant?: string;
  colorScheme?: string;
  decoration?: string;
}

const MyButton: React.FC<MyButtonProps> = ({
  title,
  borderRadius,
  fontSize,
  variant = 'solid',
  size = 'sm',
  colorScheme = 'messenger',
  decoration = 'none',
  color,
  bg,
}: MyButtonProps) => {
  return (
    <Button
      size={size}
      color={color}
      variant={variant}
      fontSize={fontSize}
      colorScheme={colorScheme}
      borderRadius={borderRadius}
      _hover={{ textDecoration: decoration }}
      bg={bg}
    >
      {title}
    </Button>
  );
};

export default MyButton;
