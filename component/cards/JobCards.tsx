import { IconButton, Text, VStack } from '@chakra-ui/react';
import Icon, { IconNameType } from '../icon/Icon';

interface JobCardsProps {
  iconName: IconNameType;
  categoryTitle: string;
  openingTitle: number;
}

const JobCards: React.FC<JobCardsProps> = (props) => {
  const { iconName, categoryTitle, openingTitle } = props;

  return (
    <VStack w={'3xs'} bg={'brand.white'} py={8} gap={6} borderRadius={'lg'}>
      <IconButton
        aria-label="categories"
        icon={<Icon name={iconName} width={'14px'} />}
      />
      <VStack lineHeight={1}>
        <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
          {categoryTitle}
        </Text>
        <Text as={'span'} fontSize={'10px'} color={'brand.blackAlpha.600'}>
          {` (${openingTitle}open position)`}
        </Text>
      </VStack>
    </VStack>
  );
};

export default JobCards;
