import { IconData, IconNameType } from '@/constant/IconLibrary';
import { Center } from '@chakra-ui/react';
import React from 'react';

interface IMyIconProps {
  color?: string;
  width?: string;
  height?: string;
  strokeWidth?: string;
  name: IconNameType;
}

const MyIcon = ({
  color = 'brand.black',
  width = '24px',
  height = '24px',
  strokeWidth = '1.5',
  name,
}: IMyIconProps) => {
  return (
    <Center color={color}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        {IconData[name]}
      </svg>
    </Center>
  );
};

export default MyIcon;
