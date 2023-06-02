import { popularCategoryObject } from '@/constant/constantFields';
import { Center, HStack, VStack } from '@chakra-ui/react';
import { MyButton } from '../button';
import { Layout } from '../layout';
import { MainHeading } from '../main-heading';
import { MyText } from '../text';
import { MyIcon } from '../icon';

const Categories = () => {
  return (
    <VStack w={'full'} py={'42px'} bg={'brand.aliceblue'}>
      <Layout>
        <MainHeading
          title={'Popular Job Categories'}
          subTitle={'2020 jobs live - 293 added today'}
        />

        <VStack w={'full'}>
          <HStack
            py={'80px'}
            gap={'30px'}
            flexWrap={'wrap'}
            spacing={0}
            justifyContent={'center'}
          >
            <>
              {popularCategoryObject.map((item, key) => {
                return (
                  <Center
                    key={key}
                    cursor={'pointer'}
                    w={'280px'}
                    h={'80px'}
                    bg={'brand.white'}
                    borderRadius={'6px'}
                    border={'1px solid'}
                    borderColor={'brand.lightgray'}
                    gap={'12px'}
                    _hover={{
                      borderColor: 'brand.primary',
                      boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
                    }}
                    px={'18px'}
                    justifyContent={'flex-start'}
                  >
                    <Center
                      p={'10px'}
                      borderRadius={'100px'}
                      bg={'brand.primary'}
                    >
                      <MyIcon name="job" color="brand.white" />
                    </Center>
                    <MyText
                      as="p"
                      title={item.fieldName}
                    />
                  </Center>
                );
              })}
            </>
          </HStack>
          <MyButton title="Browse All Categories" />
        </VStack>
      </Layout>
    </VStack>
  );
};

export default Categories;
