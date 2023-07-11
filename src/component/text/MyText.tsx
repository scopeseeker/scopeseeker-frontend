import { IMyText } from '@/inteface/component-interface';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';
const MyText = ({
  title,
  as,
  color = 'brand.black',
  href = '#',
  fontWeight,
  fontSize,
  ...rest
}: IMyText) => {
  return (
    <>
      {(() => {
        switch (as) {
          case 'p':
            return (
              <Text
                as={'p'}
                color={color}
                fontSize={{ base: '16px', md: '15px', '2xl': '18px' }}
                fontWeight={fontWeight}
                {...rest}
              >
                {title}
              </Text>
            );
          case 'small':
            return (
              <Text
                as={'span'}
                color={color}
                fontSize={
                  fontSize || { base: '14px', md: '12px', '2xl': '14px' }
                }
                fontWeight={fontWeight}
                {...rest}
              >
                {title}
              </Text>
            );
          case 'heading':
            return (
              <Text
                as={'h3'}
                color={color}
                fontSize={{ base: '24px', md: '20px', '2xl': '22px' }}
                fontFamily={'heading'}
                fontWeight={fontWeight || 600}
                {...rest}
              >
                {title}
              </Text>
            );
          case 'title':
            return (
              <Text
                as={'span'}
                color={color}
                fontSize={{ base: '17px', md: '15px', '2xl': '16px' }}
                fontFamily={'heading'}
                fontWeight={fontWeight || 600}
                {...rest}
              >
                {title}
              </Text>
            );
          case 'link':
            return (
              <Link href={href}>
                <Text
                  as={'span'}
                  color={color}
                  fontSize={{ base: '13px', md: '13px' }}
                  display={'block'}
                  fontWeight={fontWeight}
                  {...rest}
                >
                  {title}
                </Text>
              </Link>
            );
          case 'span':
            return (
              <Text
                as={'span'}
                color={color}
                fontSize={fontSize || { base: '13px', md: '13px' }}
                display={'block'}
                fontWeight={fontWeight}
                {...rest}
              >
                {title}
              </Text>
            );
          default:
            return null;
        }
      })()}
    </>
  );
};

export default MyText;
