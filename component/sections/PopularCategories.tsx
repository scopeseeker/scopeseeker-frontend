import { popularCategoryObject } from '@/constant/constantFields';
import { Center, HStack, VStack } from '@chakra-ui/react';
import { MyButton } from '../button';
import { Layout } from '../layout';
import { MainHeading } from '../main-heading';
import { MyText } from '../text';

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
            my={'80px'}
            gap={'20px'}
            flexWrap={'wrap'}
            spacing={0}
            justifyContent={'center'}
          >
            <>
              {popularCategoryObject.map((item, key) => {
                return (
                  <Center
                    key={key}
                    w={{
                      base: '90vw',
                      md: '100%',
                      lg: '250px',
                      '2xl': '350px',
                    }}
                    h={{ base: '315px', sm: '280px', md: '145px' }}
                    borderRadius={10}
                    cursor={'pointer'}
                    px={'20px'}
                    py={'12px'}
                    bg={'brand.white'}
                    border={'1px solid'}
                    borderColor={'transparent'}
                    _hover={{
                      borderColor: 'brand.primary',
                      boxShadow: '0px 0px 10px rgb(0,0,0,0.1)',
                    }}
                    flexDirection={'column'}
                    gap={'12px'}
                  >
                    <Center
                      bg={'brand.primary'}
                      p={'8px'}
                      borderRadius={'50%'}
                      color={'white'}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-code"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M7 8l-4 4l4 4"></path>
                        <path d="M17 8l4 4l-4 4"></path>
                        <path d="M14 4l-4 16"></path>
                      </svg>
                    </Center>

                    <MyText
                      title={item.fieldName}
                      as="title"
                      fontWeight={500}
                    />
                  </Center>
                );
              })}
            </>
          </HStack>
          <MyButton
            fontSize={'12px'}
            bg={'brand.primary'}
            title="Browse All Categories"
          />
        </VStack>
      </Layout>
    </VStack>
  );
};

export default Categories;
