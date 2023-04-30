import { IconLibrary } from '@/constant/IconLibrary';
import { IconProps } from '@/inteface/component-interface';
import { Box } from '@chakra-ui/react';

const MyIcon = ({ name, style, color, ...rest }: IconProps) => {
  const transform = IconLibrary[name]?.transform;
  const path = IconLibrary[name]?.path;

  return (
    <Box color={color}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={style}
        viewBox="0 0 24 24"
        {...rest}
        className="custom-icon"
      >
        <path d={path} fill="currentColor" transform={transform} />
      </svg>
    </Box>
  );
};

export default MyIcon;
