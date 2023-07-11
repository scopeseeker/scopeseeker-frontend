import Image, { ImageProps } from 'next/image';
import React from 'react';

interface Props extends ImageProps {
  alt: string;
}

const MyImage: React.FC<Props> = ({ alt, ...props }) => {
  return <Image {...props} alt={alt} />;
};

export default MyImage;
