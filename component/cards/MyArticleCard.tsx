import { MyButton, MyIcon, MyImage, MyText } from '@/component';
import { IMyArticleCard } from '@/inteface/component-interface';
import truncatedParagraph from '@/lib/validator';
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
      flexDir={{base:'column', md:'row'}}
      px={{base: '6px',md:'12px'}}
      py={{base:'9px',md:'16px'}}
      borderRadius={'12px'}
      border={'1px solid'}
      borderColor={'brand.lightgray'}
      boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
      _hover={{ borderColor: 'brand.primary' }}
    >
      <Center
        w={'350px'}
        borderRadius={'12px'}
        overflow={'hidden'}
        flexShrink={0}
      >
        <MyImage src={image} alt="article image" width={350} height={500} />
      </Center>
      <VStack w={'full'} px={'12px'} alignItems={'start'}>
        <MyText
          as="span"
          title={category}
          fontWeight={600}
          color="brand.primary"
        />
        <Link href={readMore}>
          <MyText
            as="heading"
            fontWeight={500}
            title={truncatedParagraph(heading, 10)}
            cursor={'pointer'}
          />
        </Link>
        <MyText as="span" title={truncatedParagraph(paragraph, 20)} />
        <HStack gap={{base:'64px',md:'12px'}} w={'full'}>
          <Link href={readMore}>
            <MyButton title={'Read More'} />
          </Link>
          <Center gap={'6px'}>
            <MyIcon name="calenderTime" strokeWidth="1.2" />
            <MyText as="small" title={date} />
          </Center>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default MyArticleCard;
