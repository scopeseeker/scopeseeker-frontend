import {
  Layout,
  MainHeading,
  MyButton,
  MyIcon,
  MyImage,
  MyText,
} from '@/component';
import { PageHeader } from '@/section-components';
import {
  Box,
  Center,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | Scope Seeker</title>
      </Head>
      <PageHeader
        title="Contact Us"
        subtitle="We eagerly await your contact to address any inquiries, comments, or ideas you may have. Our team of experts is here to extend a helping hand, offering unrivaled assistance that goes above and beyond."
        alt="contac us img"
        src="/assets/images/contact-us.png"
      />

      <Layout w={'full'}>
        <Center w={'full'} flexDir={'column'} gap={'32px'} mt={'52px'}>
          <MainHeading
            title="Get In Touch!"
            subTitle="Get in touch with us for exceptional support and assistance."
          />
          <Center w={'60%'}>
            <Tabs variant="unstyled">
              <TabList
                gap={{ base: '12px', md: '32px' }}
                marginBottom={'32px'}
                w={'full'}
                justifyContent={'center'}
              >
                <Tab
                  _selected={{ color: 'white', bg: 'brand.primary' }}
                  border={'1px solid'}
                  borderColor={'brand.lightgray'}
                  w={{ base: '50%', md: '200px' }}
                  h={'60px'}
                  borderRadius={'10px'}
                  gap={'16px'}
                >
                  <MyIcon
                    name="location"
                    color="currentcolor"
                    strokeWidth="1.2"
                    height="50px"
                    width="30px"
                  />
                  Location
                </Tab>
                <Tab
                  _selected={{ color: 'white', bg: 'brand.primary' }}
                  border={'1px solid'}
                  borderColor={'brand.lightgray'}
                  w={{ base: '50%', md: '200px' }}
                  h={'60px'}
                  borderRadius={'10px'}
                  gap={'16px'}
                >
                  <MyIcon
                    name="phone"
                    color="currentcolor"
                    strokeWidth="1.2"
                    height="50px"
                    width="30px"
                  />
                  Phone
                </Tab>
                <Tab
                  _selected={{ color: 'white', bg: 'brand.primary' }}
                  border={'1px solid'}
                  borderColor={'brand.lightgray'}
                  w={{ base: '50%', md: '200px' }}
                  h={'60px'}
                  borderRadius={'10px'}
                  gap={'16px'}
                >
                  <MyIcon
                    name="gmail"
                    color="currentcolor"
                    strokeWidth="1.2"
                    height="50px"
                    width="30px"
                  />
                  Email
                </Tab>
              </TabList>
              <TabPanels justifyContent={'center'}>
                <TabPanel px={0}>
                  <VStack
                    w={'full'}
                    border={'1px solid'}
                    borderColor={'brand.lightgray'}
                    borderRadius={'8px'}
                    p={'28px'}
                    gap={'12px'}
                    alignItems={'flex-start'}
                    bg={'brand.aliceblue'}
                  >
                    <MyText title="Our Location" as="heading" />

                    <Center
                      gap={'32px'}
                      w={'full'}
                      alignItems={'flex-start'}
                      justifyContent={'flex-start'}
                    >
                      <Center
                        borderRadius={'8px'}
                        border={'1px solid'}
                        borderColor={'brand.lightgray'}
                        overflow={'hidden'}
                        w={'50%'}
                      >
                        <MyImage
                          src={'/assets/images/location.png'}
                          alt={'secope seeker logo'}
                          width={400}
                          height={400}
                        />
                      </Center>
                      <VStack
                        alignItems={'start'}
                        gap={'12px'}
                        py={'28px'}
                        flexDir={'column'}
                        w={'40%'}
                      >
                        <Box flexWrap={'wrap'}>
                          <MyText
                            title="Coral casa House No. D-227 Sukh Sagar Phase 4, Navi Bagh, Bhopal, Madhya Pradesh"
                            as="small"
                          />
                        </Box>

                        <MyButton title="Get Direction" cursor="pointer" />
                      </VStack>
                    </Center>
                  </VStack>
                </TabPanel>
                <TabPanel px={0}>
                  <VStack
                    w={'full'}
                    border={'1px solid'}
                    borderColor={'brand.lightgray'}
                    borderRadius={'8px'}
                    p={'28px'}
                    bg={'brand.aliceblue'}
                    alignItems={'flex-start'}
                    gap={'12px'}
                  >
                    <MyText
                      title="We can connect on Call and Whatsapp"
                      as="heading"
                    />
                    <Box w={'full'} flexWrap={'wrap'}>
                      <MyText
                        title="Give us a ring now and experience exceptional service tailored to your needs. Our team of knowledgeable professionals is ready to go above and beyond to help you every step of the way. Whether you have a burning question, need expert advice, or require immediate assistance, we are just a phone call away!"
                        as="small"
                      />
                    </Box>

                    <HStack w={'full'} gap={'2px'}>
                      <Center
                        px={'20px'}
                        py={'10px'}
                        border={'1px dashed'}
                        borderRadius={'50px'}
                        borderColor={'brand.primary'}
                      >
                        <MyText title="Phone: +91-9617143257" as="small" />
                      </Center>
                      <Center
                        borderRadius={'50px'}
                        bg={'brand.primary'}
                        py={'10px'}
                        px={'18px'}
                        cursor={'pointer'}
                        gap={'6px'}
                      >
                        <MyIcon
                          name="phone"
                          strokeWidth="1.2"
                          color="brand.white"
                          cursor={'pointer'}
                        />
                        <MyText
                          as="span"
                          title="Call Now"
                          color="brand.white"
                        />
                      </Center>
                      <Center
                        borderRadius={'50px'}
                        bg={'brand.primary'}
                        p={'6px'}
                        gap={'6px'}
                        py={'10px'}
                        px={'18px'}
                        cursor={'pointer'}
                      >
                        <MyIcon
                          name="whatsapp"
                          strokeWidth="1.2"
                          color="brand.white"
                          cursor={'pointer'}
                        />
                        <MyText
                          as="span"
                          title="Whatsapp"
                          color="brand.white"
                        />
                      </Center>
                    </HStack>
                  </VStack>
                </TabPanel>

                <TabPanel px={0}>
                  <VStack
                    w={'full'}
                    border={'1px solid'}
                    borderColor={'brand.lightgray'}
                    borderRadius={'8px'}
                    p={'28px'}
                    bg={'brand.aliceblue'}
                    alignItems={'flex-start'}
                    gap={'12px'}
                  >
                    <MyText title="Email Address" as="heading" />
                    <HStack w={'full'} gap={'12px'} alignItems={'flex-start'}>
                      <Box w={'full'} flexWrap={'wrap'}>
                        <MyText
                          title="Drop us a message now and open the door to exceptional service tailored to your specific needs. Our team of knowledgeable professionals is eager to go above and beyond, providing you with the support and guidance you require. Whether you have a pressing inquiry, need expert advice, or seek a comprehensive solution, we are here to lend a helping hand!"
                          as="small"
                        />
                      </Box>
                    </HStack>
                    <HStack w={'full'} gap={'2px'}>
                      <Center
                        px={'20px'}
                        py={'10px'}
                        border={'1px dashed'}

                        borderRadius={'50px'}
                        borderColor={'brand.primary'}
                      >
                        <MyText
                          title="Email: scopeseekerhelp@gmail.com"
                          as="small"
                        />
                      </Center>
                      <Center
                        borderRadius={'50px'}
                        bg={'brand.primary'}
                        py={'10px'}
                        px={'18px'}
                        cursor={'pointer'}
                        gap={'6px'}
                      >
                        <MyIcon
                          name="email"
                          strokeWidth="1.2"
                          color="brand.white"
                          cursor={'pointer'}
                        />
                        <MyText
                          as="span"
                          title="Send Email"
                          color="brand.white"
                        />
                      </Center>
                    </HStack>
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Center>
        </Center>
      </Layout>
    </>
  );
}
