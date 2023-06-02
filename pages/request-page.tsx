import {
    Layout,
    MainHeading,
    MyButton,
    MyIcon,
    MyInput,
    MyText,
    PageHeroSection
} from '@/component';
import { Box, Center, HStack, Textarea, VStack } from '@chakra-ui/react';
import Head from 'next/head';

export default function RequestPage() {
  return (
    <>
      <Head>
        <title>Request | Scope Seeker</title>
      </Head>
      <PageHeroSection
        title="We value your opinion"
        subtitle="Share Your Insights for Better Service!"
        src="/assets/images/request.png"
        alt="requets image"
      />

      <Layout>
        <VStack gap={'10px'}>
          <MainHeading
            title="Request for a company"
            subTitle="Your request is our improvement"
          />
          <HStack
            justifyContent={'center'}
            flexDirection={{ base: 'column',md:'row', }}
            gap={'30px'}
            w={'full'}
            p={'40px'}
          >
            <RequestBox>
              <Box color={'brand.black'}>
                <MyIcon name="file" width="38" height="38" strokeWidth="1" />
              </Box>
              <MyText as="title" title={'Fill this form'} />
              <MyText
                as="span"
                title={
                  'Fill This Form and Help Us Expand Our Job Opportunities'
                }
              />
            </RequestBox>
            <RequestBox>
              <Box color={'brand.black'}>
                <MyIcon
                  name="userVerification"
                  width="38"
                  height="38"
                  strokeWidth="1"
                />
              </Box>
              <MyText as="title" title={'User Verification'} />
              <MyText
                as="span"
                title={'Confirm Your Authenticity for a Secure Experience'}
              />
            </RequestBox>
            <RequestBox>
              <Box color={'brand.black'}>
                <MyIcon
                  name="circleCheck"
                  width="38"
                  height="38"
                  strokeWidth="1"
                />
              </Box>
              <MyText as="title" title={'Your Voice Matters'} />
              <MyText
                as="span"
                title={'Submit a Request and Let Us Listen For You'}
              />
            </RequestBox>
          </HStack>
          <Center w={'100%'} h={'full'}  >
            <VStack
              w={{ base: '100%', md: '90%', lg: '65%' }}
              alignItems={'flex-start'}
              gap={'20px'}
            >
              <Box>
                <MyText as="heading" title="Let Us Create A Job Posting" />
                <MyText as="p" title="Effortless Hiring Starts Here." />
              </Box>
              <MyInput
                type="name"
                labelTitle="Full Name"
                placeholder="Jon Doe"
                leftElement={<MyIcon name="user" />}
              />
              <MyInput
                type="email"
                labelTitle="Email Address"
                placeholder="example@gmail.com"
                leftElement={<MyIcon name="email" />}
              />
              
              <HStack w={'full'} flexDir={{base:'column', md:'row'}}>

              <MyInput
                  type="number"
                  labelTitle="Phone(Optional) "
                  placeholder="+91 XXXXXXXX20"
                  leftElement={<MyIcon name="phone" />}
              />
                <MyInput
                  type="text"
                  labelTitle="Country"
                  placeholder="India"
                  leftElement={<MyIcon name="global" />}
                  />
                  
              </HStack>
              <HStack flexDir={{base:'column',sm:'row'}}>
              <MyInput
                type="text"
                labelTitle="Company Name"
                placeholder="ScopeSeeker"
                leftElement={<MyIcon name="company" />}
              />
              <MyInput
                type="text"
                labelTitle="Company Field"
                placeholder="Tech/Non-Tech"
                leftElement={<MyIcon name="company" />}
              />

              </HStack>
              <VStack w={'full'}  alignItems={'flex-start'} >
                <MyText as="span" title="Tell me about Yourself" />
                <Textarea
                  w={'100%'}
                  fontSize={'sm'}
                  resize={'none'}
                  placeholder="Your Bio"
                />
              </VStack>
              <MyButton title="Submit" px={'42px'} />
            </VStack>
          </Center>
        </VStack>
      </Layout>
    </>
  );
}

const RequestBox = ({ children }: any) => {
  return (
    <Center
      w={'320px'}
      h={'150px'}
      border={'1px solid'}
      borderColor={'brand.lightgray'}
      borderRadius={'20px'}
      overflow={'hidden'}
      bg={'brand.aliceblue'}
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
