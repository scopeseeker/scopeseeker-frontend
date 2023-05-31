import { Layout, MainHeading, MyIcon, MyText } from '@/component';
import { Box, Center, HStack, VStack } from '@chakra-ui/react';
const Works = () => {
  return (
    <Layout>
      <VStack gap={'32px'}>
        <MainHeading
          title="Easy Way To Get Job"
          subTitle="The first step to getting a job on Scope Seekr is to create a profile"
        />
        <HStack justifyContent={'center'} flexDirection={{base:'column', md:'row'}} gap={'30px'} w={'full'} pt={'40px'}>
          <HowBox>
            <Box color={'brand.black'}>
                <MyIcon name='createAccount' width='38' height='38' strokeWidth='1'/>
            </Box>
            <MyText as="title" title={'Create an account'} />
            <MyText
              as="span"
              title={
                'Sigup into scopeseeker by filling some information  or click google icon'
              }
            />
          </HowBox>
          <HowBox>
            <Box color={'brand.black'}>
            <MyIcon name='file' width='38' height='38' strokeWidth='1'/>

            </Box>
            <MyText as="title" title={'Complete Your Profile'} />
            <MyText
              as="span"
              title={'Fill you information like skills, intrest, projects etc.'}
            />
          </HowBox>
          <HowBox>
            <Box color={'brand.black'}>
            <MyIcon name='search' width='38' height='38' strokeWidth='1'/>

            </Box>
            <MyText as="title" title={'Search For Jobs'} />
            <MyText
              as="span"
              title={
                'Now you can search jobs and company for personalized jobs'
              }
            />
          </HowBox>
        </HStack>
      </VStack>
    </Layout>
  );
};

export default Works;

const HowBox = ({ children }: any) => {
  return (
    <Center
      w={'320px'}
      h={'150px'}
      border={'1px solid'}
      borderColor={'brand.lightgray'}
      borderRadius={'0px 20px 0px 20px'}
      overflow={'hidden'}
      bg={'brand.white'}
      px={'32px'}
      py={'32px'}
      flexDirection={'column'}
      alignItems={'flex-start'}
      gap={'8px'}
    >
      {children}
    </Center>
  );
};
