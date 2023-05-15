import { Layout, MainHeading, MyIcon, MyText } from '@/component';
import { Box, Center, HStack, VStack } from '@chakra-ui/react';
const Works = () => {
  return (
    <Layout>
      <VStack gap={'32px'}>
        <MainHeading
          title="Easy Way TO Get Job"
          subTitle="The first step to getting a job on Scope Seekr is to create a profile"
        />
        <HStack justifyContent={'center'} gap={'32px'} w={'full'} py={'62px'}>
          <Center
            w={'320px'}
            h={'150px'}
            // boxShadow={'0px 0px 20px rgb(0,0,0,0.1)'}
            border={'1px solid'}
            borderColor={'brand.lightgray'}
            borderRadius={'0px 20px 0px 20px'}
            overflow={'hidden'}
            bg={'brand.aliceblue'}
            px={'32px'}
            py={'32px'}
            flexDirection={'column'}
            alignItems={'flex-start'}
            gap={'8px'}
          >
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user-plus"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M16 19h6"></path>
                <path d="M19 16v6"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
              </svg>
            </Box>
            <MyText as="title" title={'Create an account'} />
            <MyText
              as="span"
              title={'Sigup into scopeseeker by filling some information  or click google icon'}
            />
          </Center>
          <Center
            w={'320px'}
            h={'150px'}
            // boxShadow={'0px 0px 20px rgb(0,0,0,0.1)'}
            border={'1px solid'}
            borderColor={'brand.lightgray'}
            borderRadius={'0px 20px 0px 20px'}
            overflow={'hidden'}
            bg={'brand.aliceblue'}
            px={'32px'}
            py={'32px'}
            flexDirection={'column'}
            alignItems={'flex-start'}
            gap={'8px'}
          >
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-file-dots"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M9 14v.01"></path>
                <path d="M12 14v.01"></path>
                <path d="M15 14v.01"></path>
              </svg>
            </Box>
            <MyText as="title" title={'Complete Your Profile'} />
            <MyText
              as="span"
              title={'Fill you information like skills, intrest, projects etc.'}
            />
          </Center>
          <Center
            w={'320px'}
            h={'150px'}
            // boxShadow={'0px 0px 20px rgb(0,0,0,0.1)'}
            border={'1px solid'}
            borderColor={'brand.lightgray'}
            borderRadius={'0px 20px 0px 20px'}
            overflow={'hidden'}
            bg={'brand.aliceblue'}
            px={'32px'}
            py={'32px'}
            flexDirection={'column'}
            alignItems={'flex-start'}
            gap={'8px'}
          >
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-search"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                <path d="M21 21l-6 -6"></path>
              </svg>
            </Box>
            <MyText as="title" title={'Search For Jobs'} />
            <MyText
              as="span"
              title={'Now you can search jobs and company for personalized jobs'}
            />
          </Center>
        </HStack>
      </VStack>
    </Layout>
  );
};

export default Works;
