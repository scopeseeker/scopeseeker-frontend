import { companyBenifits, employeeBenifits } from '@/constant/constantFields';
import truncatedParagraph from '@/lib/validator';
import { Center, Grid, HStack, VStack } from '@chakra-ui/react';
import { MyIcon } from '../icon';
import { MyImage } from '../image';
import { MyText } from '../text';

const Benifits = () => {
  return (
    <VStack
      w={'full'}
      alignItems={'flex-start'}
      marginTop={'20px'}
      gap={'32px'}
    >
      <MyText as="heading" title="Company Verified Benifits" />
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={'22px'}
      >
        <>
          {companyBenifits.map((item, key) => {
            return (
              <HStack
                key={key}
                w={'100%'}
                h={'132px'}
                bg={'brand.white'}
                boxShadow={'0 0px 10px rgba(0, 0, 0, 0.1)'}
                borderRadius={'5px'}
                cursor={'pointer'}
                p={'12px'}
                border={'1px solid'}
                borderColor={'brand.lightgray'}
              >
                <Center w={'20%'} h={'full'}>
                  <MyImage
                    src={'/assets/images/company-logo/google.png'}
                    alt="benifits"
                    width={60}
                    height={60}
                  />
                </Center>
                <Center
                  flexDirection={'column'}
                  alignItems={'flex-start'}
                  w={'80%'}
                  h={'full'}
                >
                  <MyText as="title" title={item.label} />
                  <MyText
                    as="small"
                    title={truncatedParagraph(item.value, 40)}
                  />
                </Center>
              </HStack>
            );
          })}
        </>
      </Grid>

      <VStack
        w={'full'}
        alignItems={'flex-start'}
        marginTop={'20px'}
        gap={'32px'}
      >
        <MyText as="heading" title="Benifits reported by employee" />
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(7, 1fr)' }}
          gap={'22px'}
        >
          <>
            {employeeBenifits.map((item, key) => {
              return (
                <Center
                  key={key}
                  h={'100px'}
                  w={'120px'}
                  border={'1px'}
                  borderColor={'brand.lightgray'}
                  borderRadius={'20px'}
                  flexDir={'column'}
                  gap={'10px'}
                >
                  <MyIcon
                    name={item.iconName}
                    height="28px"
                    width="28px"
                    color={'brand.primary'}
                  />
                  <MyText as="small" title={item.value} fontWeight={500} />
                </Center>
              );
            })}
          </>
        </Grid>
      </VStack>
    </VStack>
  );
};

export default Benifits;
