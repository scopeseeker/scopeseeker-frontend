import { MyButton, MyIcon, MyImage, MyText } from '@/component';
import { IMyArticleCard } from '@/inteface/component-interface';
import truncatedParagraph from '@/lib/validator';
import { Box, HStack, VStack } from '@chakra-ui/react';

const MyArticleCard = ({
  articleImage,
  articleHeading,
  articleHighlight,
  articlePara= "this is demo",
  articleButton,
  dateIcon,
  articledate,
}: IMyArticleCard) => {
  return (
    <VStack alignItems={'flex-start'} w={'300px'}>
      <Box borderRadius={'8px'} overflow={'hidden'}>
        <MyImage src={articleImage} alt="article" width={300} height={10} />
      </Box>
      <MyText
        title={articleHeading}
        cursor={'pointer'}
        href="#"
        as={'title'}
        color="brand.primary"
      />
      <MyText title={articleHighlight} as={'heading'} />

      <MyText
        title={truncatedParagraph(articlePara, 12)}
        overflowWrap={'break-word'}
        as="p"
      />
      <MyButton title={articleButton} />
      <HStack spacing={0} gap={'2px'}>
        <MyIcon name={dateIcon} height="18px" />
        <MyText title={articledate} as="span" />
      </HStack>
    </VStack>
  );
};

export default MyArticleCard;
