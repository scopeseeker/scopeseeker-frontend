import { IMyText } from '@/inteface/component-interface';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';
const MyText = ({
  title,
  as,
  color = 'brand.semiblack',
  href = '#',
  fontWeight,
  hoverColor,
  fontSize = { base: '13px', md: '13px' },
  ...rest
}: IMyText) => {
  return (
    <>
      {as === 'p' && (
        <Text
          color={color}
          as={'p'}
          fontSize={{ base: '16px', md: '15px', '2xl': '18px' }}
          {...rest}
        >
          {title}
        </Text>
      )}

      {as === 'small' && (
        <Text
          color={color}
          as={'span'}
          fontSize={{ base: '14px', md: '12px', '2xl': '14px' }}
          fontWeight={fontWeight}
          {...rest}
        >
          {title}
        </Text>
      )}

      {as === 'heading' && (
        <Text
          color={color}
          as={'span'}
          fontFamily={'heading'}
          fontWeight={600}
          fontSize={{ base: '24px', md: '20px', '2xl': '22px' }}
          {...rest}
        >
          {title}
        </Text>
      )}
      {as === 'title' && (
        <Text
          color={color}
          as={'span'}
          fontFamily={'heading'}
          fontWeight={fontWeight ? fontWeight : 600}
          fontSize={{ base: '17px', md: '15px', '2xl': '16px' }}
          {...rest}
        >
          {title}
        </Text>
      )}

      {as === 'link' && (
        <Link href={href}>
          <Text
            color={color}
            display={'block'}
            as={'span'}
            fontSize={fontSize}
            fontWeight={fontWeight}
            {...rest}
          >
            {title}
          </Text>
        </Link>
      )}

      {as === 'span' && (
        <Text
          color={color}
          display={'block'}
          as={'span'}
          fontSize={fontSize}
          fontWeight={fontWeight}
          {...rest}
        >
          {title}
        </Text>
      )}
    </>
  );
};

export default MyText;
