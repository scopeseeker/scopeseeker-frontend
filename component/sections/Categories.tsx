import { popularCategoryObject } from '@/constant/fields';
import { HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import MyButton from '../button/MyButton';
import MyIcon from '../icon/MyIcon';
import MainHeading from '../main-heading/MainHeading';
import { Layout } from '../layout';
import { MyText } from '../text';

const Categories = () => {
  return (
    <VStack w={'full'} py={10} bg={'brand.aliceblue'}>
      <Layout>
        <MainHeading
          title={'Popular Job Categories'}
          subTitle={'2020 jobs live - 293 added today'}
        />

        <VStack w={'full'}>
          <HStack my={4} gap={4} flexWrap={'wrap'} spacing={0} justifyContent={'center'} bg={'red'}>
            <>
              {popularCategoryObject.map((item) => {
                return (
                  <VStack
                    w={{base: '100%',sm: '40%', md: '220px'}}
                    bg={'brand.white'}
                    py={{base: 10, md: 8}}
                    borderRadius={'lg'}
                  >
                    <IconButton
                      aria-label="categories"
                      icon={
                        <MyIcon
                          name={'job'}
                          width='24px'
                          color="brand.primary"
                        />
                      }
                      size={'lg'}
                    />

                    <VStack lineHeight={1}>
                      <MyText
                        as={'link'}
                        title={item.fieldName}
                        color="brand.black"
                        fontWeight={500}
                      />
                      <MyText
                        as={'span'}
                        title={`(${item.opening} open positions)`}
                        fontSize={{base: '13px', md: '10px'}}
                      />
                    </VStack>
                  </VStack>
                );
              })}
            </>
          </HStack>
          <MyButton
            fontSize={'xs'}
            bg={'brand.primary'}
            title="Browse All Categories"
          />
        </VStack>
      </Layout>
    </VStack>
  );
};

export default Categories;
