import { IconData, IconNameType } from '@/constant/IconLibrary';
import { IMyIconProps } from '@/inteface/component-interface';
import { Center } from '@chakra-ui/react';

const MyIcon = ({
  color = 'brand.black',
  width = '24px',
  height = '24px',
  strokeWidth = '1.2',
  name,
  ...rest
}: IMyIconProps) => {
  return (
    <Center color={color} {...rest}>
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
