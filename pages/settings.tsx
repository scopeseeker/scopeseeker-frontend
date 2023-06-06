import { Layout, MainHeading, MyButton, MyIcon, MyText } from '@/component';
import {
  Box,
  HStack,
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
          <Tabs variant="unstyled" w={'60%'}>
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
                <VStack alignItems={'flex-start'} gap={'5px'}>
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
                        <MyText as='title' title='Delete my account:'/>
                        <MyButton title={'Delete'} variant='outline' h='25px'/>
                    </HStack>

                    <MyButton title='SignOut'/>
                  </VStack>
                </VStack>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
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
