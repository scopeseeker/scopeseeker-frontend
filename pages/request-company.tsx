import {
  Layout,
  MyButton,
  MyIcon,
  MyInput,
  MyText,
  PageHeroSection,
} from '@/component';
import { Box, Center, HStack, Textarea, VStack } from '@chakra-ui/react';
import Head from 'next/head';

export default function RequestPage() {
  return (
    <>
      <Head>
        <title>Request Company| Scope Seeker</title>
      </Head>
      <PageHeroSection
        title="Request A Company"
        subtitle="Add a company to our job listing platform and help expand opportunities for job seekers. Submit your request now and connect job seekers with the right companies."
        src="/assets/images/request.png"
        alt="requets image"
      />

      <Layout>
        <VStack gap={'82px'} my={'52px'}>
          {/* Steps Box */}
          <VStack alignItems={'flex-start'} gap={'42px'} w={'full'}>
            <MyText
              as="heading"
              w={'100%'}
              title={`How we'll process the request`}
            />
            <HStack
              flexDirection={{ base: 'column', md: 'row' }}
              alignItems={'flex-start'}
              gap={'30px'}
              w={'full'}
              flexWrap={'wrap'}
              spacing={0}
            >
              <RequestBox
                iconName="file"
                headName="Fill this Form"
                paraName="First give the detials by filiing these simple fields."
              />
              <RequestBox
                iconName="verifyOutline"
                headName="Verify Company Authenticity"
                paraName="We verify the company and insure that company is authentic."
              />
              <RequestBox
                iconName="checklist"
                headName="Added In List"
                paraName="Congratulations we added comapny into our list."
              />
            </HStack>
          </VStack>
          {/* Form Box */}
          <VStack w={'full'} alignItems={'flex-start'} gap={'32px'}>
            <Box>
              <MyText as="heading" title="Let Send A Request For Company" />
              <MyText as="p" title="Effortless Hiring Starts Here." />
            </Box>

            <Center w={'100%'} h={'full'} justifyContent={'flex-start'}>
              <VStack
                w={{ base: '100%', md: '90%', lg: '50%' }}
                alignItems={'flex-start'}
                gap={'20px'}
              >
                <MyInput
                  type="name"
                  labelTitle="Full Name"
                  placeholder="Jon Doe"
                  leftElement={
                    <MyIcon name="user" width="20px" height="20px" />
                  }
                />
                <MyInput
                  type="email"
                  labelTitle="Email Address"
                  placeholder="example@gmail.com"
                  leftElement={
                    <MyIcon name="email" width="20px" height="20px" />
                  }
                />

                <HStack
                  w={'full'}
                  flexDir={{ base: 'column', md: 'row' }}
                  gap={'20px'}
                  spacing={0}
                >
                  <MyInput
                    type="number"
                    labelTitle="Phone(Optional) "
                    placeholder="+91 XXXXXXXX20"
                    leftElement={
                      <MyIcon name="phone" width="20px" height="20px" />
                    }
                  />
                  <MyInput
                    type="text"
                    labelTitle="Country"
                    placeholder="India"
                    leftElement={
                      <MyIcon name="global" width="20px" height="20px" />
                    }
                  />
                </HStack>
                <HStack
                  flexDir={{ base: 'column', sm: 'row' }}
                  gap={'20px'}
                  spacing={0}
                >
                  <MyInput
                    type="text"
                    labelTitle="Company Name"
                    placeholder="ScopeSeeker"
                    leftElement={
                      <MyIcon name="company" width="20px" height="20px" />
                    }
                  />
                  <MyInput
                    type="text"
                    labelTitle="Company Field"
                    placeholder="Tech/Non-Tech"
                    leftElement={
                      <MyIcon name="company" width="20px" height="20px" />
                    }
                  />
                </HStack>
                <VStack w={'full'} alignItems={'flex-start'}>
                  <MyText as="span" title="Tell me about Yourself" />
                  <Textarea
                    w={'100%'}
                    fontSize={'sm'}
                    resize={'none'}
                    placeholder="Your Bio"
                  />
                </VStack>
                <MyButton
                  title="Submit"
                  w={{ base: '100%', md: 'initial' }}
                  px={'32px'}
                />
              </VStack>
            </Center>
          </VStack>
        </VStack>
      </Layout>
    </>
  );
}

interface IRequestBox {
  iconName: string;
  headName: string;
  paraName: string;
}
const RequestBox = ({ iconName, headName, paraName }: IRequestBox) => {
  return (
    <Center
      w={{ base: '100%', sm: '80%', md: '500px', lg: '320px' }}
      h={'180px'}
      border={'1px solid'}
      borderColor={'brand.lightgray'}
      borderRadius={'4px'}
      overflow={'hidden'}
      bg={'brand.aliceblue'}
      px={'32px'}
      py={'32px'}
      flexDirection={'column'}
      alignItems={'flex-start'}
      justifyContent={'flex-start'}
      gap={'8px'}
    >
      <Box color={'brand.black'}>
        <MyIcon name={iconName} width="38" height="38" strokeWidth="1" />
      </Box>
      <MyText as="title" title={headName} />
      <MyText as="span" title={paraName} />
    </Center>
  );
};
