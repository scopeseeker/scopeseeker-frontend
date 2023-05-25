import { Layout, MyIcon, MyImage, MyText } from '@/component';
import Benifits from '@/component/comapany-details/Benifits';
import JobTab from '@/component/comapany-details/JobTab';
import Overview from '@/component/comapany-details/Overview';
import { Center, HStack, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function DynamicPage() {
  const router = useRouter();
  const{ slug } = router.query;
  return (
    <>
      <Head>
        <title>Company Details | Scope Seeker</title>
      </Head>

      <Layout>
        <VStack w={'full'} px={'32px'} py={'32px'} gap={'30px'}>
          <Center
            w={'full'}
            h={'30vh'}
            backgroundImage={
              'radial-gradient(circle at center center, transparent, #EBECFF), repeating-radial-gradient(circle at center center, brand.aliceblue, brand.aliceblue, 1px, transparent 28px, transparent 1px)'
            }
            position="relative"
            borderRadius={'10px'}
          >
            <VStack spacing={0}>
              <MyText as="heading" title={`Full ${slug} Stack Web Developer`}/>
              <MyText as="span" title="Tata Consultancy Service" />
            </VStack>
          </Center>

          <VStack w={'full'} px={'30px'} alignItems={'flex-start'}>
            {/* Company Logo */}
            <HStack w={'full'} py={'13px'} justifyContent={'space-between'}>
              <HStack>
                <Center
                  h={'60px'}
                  w={'60px'}
                  borderRadius={'5px'}
                  bg={'brand.lightgray'}
                >
                  <MyImage
                    src={'/assets/images/company-logo/amazon.png'}
                    alt="company logo"
                    height={50}
                    width={50}
                  />
                </Center>

                <VStack spacing={0} alignItems={'flex-start'}>
                  <HStack justifyContent={'flex-start'}>
                    <MyText as="title" title="Campgemini" />
                    <MyIcon name="verify" width="15px" color="brand.primary" />
                  </HStack>
                  <MyText as="small" title="4.2 Ratings/ 160 Reviews" />
                </VStack>
              </HStack>

              {/* Right Part */}
              <Center
                bg={'red.100'}
                px={'8px'}
                py={'4px'}
                cursor={'pointer'}
                borderRadius={'5px'}
                gap={'5px'}
              >
                <MyText as='small' title="Add to favourite" />
                <MyIcon name="heart" width="15px" />
              </Center>
            </HStack>

            {/* Company Type  */}
            <HStack>
              <Center
                px={'17px'}
                py={'2px'}
                bg={'brand.primary'}
                borderRadius={'2px'}
              >
                <MyText
                  as="small"
                  fontWeight={500}
                  title='small'
                  color="brand.white"
                />
              </Center>

              <Center
                px={'17px'}
                py={'2px'}
                bg={'pink.100'}
                borderRadius={'2px'}
              >
                <MyText as="small" fontWeight={500} title="B2B" />
              </Center>

              <Center
                px={'17px'}
                py={'2px'}
                bg={'green.100'}
                borderRadius={'2px'}
              >
                <MyText as="small" fontWeight={500} title="MNC" />
              </Center>

              <Center
                px={'17px'}
                py={'2px'}
                bg={'purple.100'}
                borderRadius={'2px'}
              >
                <MyText as="small" fontWeight={500} title="Product" />
              </Center>
            </HStack>

            {/* Tabs */}
            <HStack paddingTop={'30px'} w={'full'}>
              <Tabs position="relative" variant="unstyled" w={'full'}>
                <TabList>
                  <Tab> <MyText as='title' title='Overview'/> </Tab>
                  <Tab> <MyText as='title' title='Benifits'/> </Tab>
                  <Tab> <MyText as='title' title='Jobs'/> </Tab>
                </TabList>
                <TabIndicator
                  mt="-1.5px"
                  height="2px"
                  bg="blue.500"
                  borderRadius="1px"
                />
                <TabPanels>
                  <TabPanel>
                    <Overview/>
                  </TabPanel>
                  <TabPanel>
                    <Benifits/>
                  </TabPanel>
                  <TabPanel>
                    <JobTab/>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </HStack>
          </VStack>
        </VStack>
      </Layout>
    </>
  );
}
