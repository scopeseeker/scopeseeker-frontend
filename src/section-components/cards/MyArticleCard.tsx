import { MyButton, MyIcon, MyImage, MyText } from '@/component';
import truncatedParagraph from '@/helpers/validator';
import { IMyArticleCard } from '@/inteface/component-interface';
import { Center, HStack, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const MyArticleCard = ({
  image,
  category,
  heading,
  paragraph,
  readMore,
  date,
}: IMyArticleCard) => {
  return (
    <HStack
      w={'full'}
      flexDir={{ base: 'column', md: 'row' }}
      px={{ base: '12px', sm: '16px', md: '12px' }}
      py={{ base: '12px', sm: '16px', md: '16px' }}
      borderRadius={'12px'}
      border={'1px solid'}
      borderColor={'brand.lightgray'}
      boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
      _hover={{ borderColor: 'brand.primary' }}
      gap={'12px'}
    >
      <Center
        w={{ base: '100%', md: '250px', lg: '300px' }}
        borderRadius={'12px'}
        overflow={'hidden'}
        flexShrink={0}
      >
        <MyImage src={image} alt="article image" width={600} height={600} />
      </Center>
      <VStack w={'full'} alignItems={'start'}>
        <MyText
          as="span"
          title={category}
          fontWeight={600}
          color="brand.primary"
        />
        <Link href={readMore}>
          <MyText
            as="title"
            fontWeight={500}
            title={truncatedParagraph(heading, 10)}
            cursor={'pointer'}
          />
        </Link>
        <MyText as="span" title={truncatedParagraph(paragraph, 20)} />
        <HStack gap={'12px'} w={'full'} flexWrap={'wrap'} spacing={0}>
          <Center gap={'6px'}>
            <MyIcon name="calenderTime" strokeWidth="1.2" />
            <MyText as="small" title={date} />
          </Center>
          <Link href={readMore}>
            <MyButton title={'Read More'} />
          </Link>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default MyArticleCard;
