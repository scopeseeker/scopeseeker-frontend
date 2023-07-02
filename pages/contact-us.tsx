import { Layout, MainHeading, MyButton, MyIcon, MyImage, MyText } from '@/component';
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
        <VStack w={'full'} alignItems={'flex-start'}  gap={'32px'}> 
            <MainHeading
              title="Get In Touch!"
              subTitle="Get in touch with us for exceptional support and assistance."
              align={'start'}
            /> 
            <Tabs variant="unstyled">
              <TabList
                gap={{ base: '12px', md: '32px' }}
                marginBottom={'32px'}
                w={'full'}
                
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
              <TabPanels alignItems={'flex-start'}>
                <TabPanel px={0}>
                  <VStack
                    w={'full'}
                    border={'1px solid'}
                    borderColor={'brand.lightgray'}
                    borderRadius={'8px'}
                    p={'20px'}
                    gap={'12px'}
                    alignItems={'flex-start'}
                    bg={'brand.aliceblue'}
                  >
                    <MyText title="Location" as="title" />

                    <Center w={'full'} gap={'20px'}>
                      <Center
                        borderRadius={'8px'}
                        border={'1px solid'}
                        borderColor={'brand.lightgray'}
                        w={'40%'}
                        overflow={'hidden'}
                      >
                        <MyImage
                          src={'/assets/images/location.png'}
                          alt={'secope seeker logo'}
                          width={300}
                          height={200}
                        />
                      </Center>
                      <VStack
                        w={'40%'}
                        
                        gap={'12px'}
                        py={'20px'}
                      >
                        <MyText title="Coral casa House No. D-227" as="small" />
                        <MyText
                          title="Sukh Sagar Phase 4, Navi Bagh, Bhopal, Madhya Pradesh"
                          as="small"
                          align={'center'}
                        />
                        <MyButton title='Get Direction' cursor='pointer'/>
                      </VStack>
                    </Center>
                  </VStack>
                </TabPanel>
                <TabPanel px={0}>
                  <VStack
                    w={'full'}
                    h={'300px'}
                    border={'1px solid'}
                    borderColor={'brand.lightgray'}
                    borderRadius={'8px'}
                    p={'20px'}
                    bg={'brand.aliceblue'}
                    alignItems={'flex-start'}
                    gap={'12px'}
                    
                  >
                    <MyText title='You can call us on' as="title" />
                    
                    <HStack w={'full'} gap={'12px'} alignItems={'flex-start'}>
                      <Center border={'1px solid'}
                      borderColor={'brand.lightgray'}
                      bg={'brand.primary'}
                      borderRadius={'50px'}
                      p={'6px'}
                      >
                        
                        <MyIcon name='phone' color='brand.white' height='25px' width='25px'/>
                      </Center>
                      <Box w={'full'} flexWrap={'wrap'}>
                      <MyText title='Give us a ring now and experience exceptional service tailored to your needs. Our team of knowledgeable professionals is ready to go above and beyond to help you every step of the way. Whether you have a burning question, need expert advice, or require immediate assistance, we are just a phone call away!' as='small'/>
                      </Box>
                    </HStack>
                    <Center w={'full'} gap={'12px'}>
                      <Center p={'10px'} border={'1px solid'} bg={'brand.primary'} borderRadius={'6px'} borderColor={'brand.lightgray'} >
                        <MyText title='09755786633' as='small' color='brand.white'/>
                      </Center>
                      <Center p={'10px'} border={'1px solid'} bg={'brand.primary'} borderRadius={'6px'} borderColor={'brand.lightgray'} >
                        <MyText title='06204090140' as='small' color='brand.white'/>
                      </Center>
                      <Center p={'10px'} border={'1px solid'} bg={'brand.primary'} borderRadius={'6px'} borderColor={'brand.lightgray'} >
                        <MyText title='09039122683' as='small' color='brand.white'/>
                      </Center>
                    </Center>

                    <HStack w={'full'}  justifyContent={'flex-end'}>
                      <MyButton title='Chat with us' cursor='pointer'/>
                    </HStack>
                  </VStack>
                </TabPanel>

                <TabPanel px={0}>
                  <VStack
                    w={'full'}
                    h={'300px'}
                    border={'1px solid'}
                    borderColor={'brand.lightgray'}
                    borderRadius={'8px'}
                    p={'20px'}
                    bg={'brand.aliceblue'}
                    alignItems={'flex-start'}
                    gap={'12px'}
                    
                  >
                    <MyText title='You can mail us on' as="title" />
                    
                    <HStack w={'full'} gap={'12px'} alignItems={'flex-start'}>
                      <Center border={'1px solid'}
                      borderColor={'brand.lightgray'}
                      bg={'brand.primary'}
                      borderRadius={'50px'}
                      p={'6px'}
                      >
                        
                        <MyIcon name='gmail' color='brand.white' height='25px' width='25px'/>
                      </Center>
                      <Box w={'full'} flexWrap={'wrap'}>
                      <MyText title='Drop us a message now and open the door to exceptional service tailored to your specific needs. Our team of knowledgeable professionals is eager to go above and beyond, providing you with the support and guidance you require. Whether you have a pressing inquiry, need expert advice, or seek a comprehensive solution, we are here to lend a helping hand!' as='small'/>
                      </Box>

                    </HStack>
                    <Center w={'full'} gap={'12px'}>
                      <Center p={'10px'} border={'1px solid'} bg={'brand.primary'} borderRadius={'6px'} borderColor={'brand.lightgray'} >
                        <MyText title='scopeseekerhelp@gmail.com' as='small' color='brand.white'/>
                      </Center>
                    </Center>

                    <HStack w={'full'}  justifyContent={'flex-end'}>
                      <MyButton title='Compose Email' cursor='pointer'/>
                    </HStack>
                  </VStack>
                </TabPanel>
              </TabPanels>
            </Tabs>
           
          
            </VStack>
      </Layout>
    </>
  );
}
