import { popularCategoryObject } from '@/constant/fields';
import { HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import MyButton from '../button/MyButton';
import MyIcon from '../icon/MyIcon';
import MainHeading from '../main-heading/MainHeading';

const Categories = () => {
  return (
    <VStack w={'full'} py={10} gap={10} bg={'brand.aliceblue'}>
      <MainHeading
        title={'Popular Job Categories'}
        subTitle={'2020 jobs live - 293 added today'}
      />

      <VStack w={'full'}>
        <HStack my={4} gap={4} flexWrap={'wrap'} justifyContent={'center'}>
          <>
            {popularCategoryObject.map((item) => {
              return (
                <VStack
                  w={'3xs'}
                  bg={'brand.white'}
                  py={8}
                  gap={6}
                  borderRadius={'lg'}
                >
                  <IconButton
                    aria-label="categories"
                    icon={<MyIcon name={'instagram'} width={'14px'} />}
                  />
                  <VStack lineHeight={1}>
                    <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
                      {item.fieldName}
                    </Text>
                    <Text
                      as={'span'}
                      fontSize={'10px'}
                      color={'brand.blackAlpha.600'}
                    >
                      ({item.opening} open positions)
                    </Text>
                  </VStack>
                </VStack>
              );
            })}
          </>
        </HStack>
      </VStack>

      <MyButton
        fontSize={'xs'}
        bg={'brand.primary'}
        title="Browse All Categories"
      />
    </VStack>
  );
};

export default Categories;
