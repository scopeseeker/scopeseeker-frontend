import { Layout, MainHeading, MyButton, MyIcon, MyText } from '@/component';
import {
  Box,
  HStack,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';

export default function Settings() {
  return (
    <>
      <Head>
        <title>Settings | Scope Seeker</title>
      </Head>
      <Layout>
        <VStack h={'100vh'} w={'full'} alignItems={'flex-start'} gap={'20px'}>
          <MainHeading title="Settings" align={'start'} />
          <Tabs variant="unstyled" w={'full'}>
            <TabList gap={'32px'} marginBottom={'10px'}>
              <Tab
                _selected={{ color: 'white', bg: 'brand.primary' }}
                border={'1px solid'}
                borderColor={'brand.lightgray'}
                w={'220px'}
                h={'60px'}
                borderRadius={'10px'}
              >
                Account Setting
              </Tab>
              <Tab
                _selected={{ color: 'white', bg: 'brand.primary' }}
                border={'1px solid'}
                borderColor={'brand.lightgray'}
                w={'220px'}
                h={'60px'}
                borderRadius={'10px'}
              >
                Email Setting
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <VStack alignItems={'flex-start'} gap={'5px'} w={'60%'}>
                  <MyText as="heading" title="Account Setting" />

                  <VStack alignItems={'flex-start'} w={'full'} gap={'20px'}>
                    {/* Email */}
                    <Box
                      borderRadius={'5px'}
                      border={'1px solid'}
                      borderColor={'brand.lightgray'}
                      px={'10px'}
                      py={'15px'}
                      _hover={{ bg: 'brand.aliceblue' }}
                      w={'full'}
                    >
                      <HStack position={'relative'}>
                        <MyText as="title" title="Email:" />
                        <HStack
                          justifyContent={'space-between'}
                          w={'75%'}
                          position={'absolute'}
                          right={0}
                        >
                          <HStack spacing={0} gap={'4px'}>
                            <MyText as="span" title="lokesh1234@gmail.com" />
                            <MyIcon
                              name="verifyFill"
                              width="15px"
                              color="brand.primary"
                            />
                          </HStack>
                          <MyButton title="change Email" />
                        </HStack>
                      </HStack>
                    </Box>

                    {/* Password */}
                    <SettingElems
                      label="Password:"
                      value="**************"
                      button="Change Password"
                    />

                    {/* Phone number */}
                    <SettingElems
                      label="Phone No. :"
                      value="91XXXXXXXX32"
                      button="change number"
                    />

                    {/* Delete Account */}
                    <HStack gap={'40px'}>
                      <MyText as="title" title="Delete my account:" />
                      <MyButton title={'Delete'} variant="outline" h="25px" />
                    </HStack>

                    <MyButton title="SignOut" />
                  </VStack>
                </VStack>
              </TabPanel>

              <TabPanel>
                <VStack alignItems={'flex-start'} gap={'5px'}>
                  <MyText as={'heading'} title="Newsletter Preference" />
                  <VStack alignItems={'flex-start'} w={'full'} gap={'20px'}>
                    {/* NewsLetter paragrah */}
                    <VStack alignItems={'flex-start'}>
                      <MyText
                        as="p"
                        title="From here, you can set the preference for receiving our newsletters."
                      />
                      <MyText
                        as="p"
                        title="Our newsletter will gain you access to the latest updates regarding the hiring challenges of top recruiters (like Walmart, Flipkart, Uber, Amazon, etc.), jobs & internships, competitions, quizzes, and hackathons from elite colleges across the world."
                      />
                    </VStack>

                    <Box
                      borderRadius={'5px'}
                      border={'1px solid'}
                      borderColor={'brand.lightgray'}
                      px={'10px'}
                      py={'15px'}
                      _hover={{ bg: 'brand.aliceblue' }}
                      w={'60%'}
                    >
                      <HStack justifyContent={'space-between'}>
                        <MyText as="title" title="Newsletters" />
                        <Switch color={'brand.primary'} />
                      </HStack>
                    </Box>

                    <Box
                      borderRadius={'5px'}
                      border={'1px solid'}
                      borderColor={'brand.lightgray'}
                      px={'10px'}
                      py={'15px'}
                      _hover={{ bg: 'brand.aliceblue' }}
                      w={'60%'}
                    >
                      <HStack justifyContent={'space-between'}>
                        <VStack alignItems={'flex-start'}>
                          <MyText as="title" title="Job Notifications" />
                          <VStack
                            spacing={0}
                            alignItems={'flex-start'}
                            gap={'2px'}
                          >
                            <MyText
                              as="p"
                              title="Here you will find a job updates on email"
                            />
                            <MyText
                              as="span"
                              title="Stay updated on the latest job opportunities with XYZ Enterprises by subscribing to our email notifications."
                            />
                          </VStack>
                        </VStack>
                        <Switch color={'brand.primary'} />
                      </HStack>
                    </Box>

                    <Box
                      borderRadius={'5px'}
                      border={'1px solid'}
                      borderColor={'brand.lightgray'}
                      px={'10px'}
                      py={'15px'}
                      _hover={{ bg: 'brand.aliceblue' }}
                      w={'60%'}
                    >
                      <HStack justifyContent={'space-between'}>
                        <MyText as="title" title="Blog" />
                        <Switch color={'brand.primary'} />
                      </HStack>
                    </Box>
                  </VStack>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Layout>
    </>
  );
}

interface ISettingElems {
  label: string;
  value: string;
  button: string;
}

const SettingElems = ({ label, value, button }: ISettingElems) => {
  return (
    <Box
      borderRadius={'5px'}
      border={'1px solid'}
      borderColor={'brand.lightgray'}
      px={'10px'}
      py={'15px'}
      _hover={{ bg: 'brand.aliceblue' }}
      w={'full'}
    >
      <HStack whiteSpace={'nowrap'} position={'relative'}>
        <MyText as="title" title={label} />
        <HStack
          justifyContent={'space-between'}
          right={0}
          position={'absolute'}
          w={'75%'}
        >
          <MyText as="span" title={value} />

          <MyButton title={button} />
        </HStack>
      </HStack>
    </Box>
  );
};
