import { Layout, MainHeading, MyButton, MyIcon, MyText } from '@/component';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  HStack,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import Head from 'next/head';
import React, { useRef, useState } from 'react';

export default function Settings() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const [isVerify, setIsVerify] = useState(true);

  return (
    <>
      <Head>
        <title>Settings | Scope Seeker</title>
      </Head>
      <Layout w={'full'}>
        <VStack w={'full'} alignItems={'flex-start'} gap={'20px'}>
          <MainHeading
            title="Settings"
            align={'start'}
            subTitle="Customize account visibility, notifications, and profile for personalized experience."
          />
          <Tabs variant="unstyled" w={'full'}>
            <TabList
              gap={{ base: '12px', md: '32px' }}
              marginBottom={'32px'}
              w={'full'}
            >
              <Tab
                _selected={{ color: 'white', bg: 'brand.primary' }}
                border={'1px solid'}
                borderColor={'brand.lightgray'}
                w={{ base: '50%', md: '220px' }}
                h={'60px'}
                borderRadius={'10px'}
              >
                Account Setting
              </Tab>
              <Tab
                _selected={{ color: 'white', bg: 'brand.primary' }}
                border={'1px solid'}
                borderColor={'brand.lightgray'}
                w={{ base: '50%', md: '220px' }}
                h={'60px'}
                borderRadius={'10px'}
              >
                Email Setting
              </Tab>
            </TabList>
            <TabPanels alignItems={'flex-start'}>
              {/* Account setting Tab */}
              <TabPanel px={0}>
                <VStack
                  alignItems={'flex-start'}
                  gap={'32px'}
                  w={{ base: '100%',sm: '70%', md: '100%', lg: '80%' }}
                >
                  <MyText as="heading" title="Account Setting" />

                  <VStack alignItems={'flex-start'} w={'full'} gap={'20px'}>
                    {/* Email */}
                    <SettingElemsDivTemplate
                      label="Email:"
                      value="lokesh@gmail.com"
                      button="Change Email"
                      isVerify={isVerify}
                    >
                      <MyIcon name="verifyFill" color="green" width="18px" />
                    </SettingElemsDivTemplate>

                    {/* Password */}
                    <SettingElemsDivTemplate
                      label="Password:"
                      value="**************"
                      button="Change Password"
                    />

                    {/* Phone number */}
                    <SettingElemsDivTemplate
                      label="Phone No. :"
                      value="+91XXXXXXXX32"
                      button="Change Number"
                      isVerify={isVerify}
                    >
                      <MyIcon name="verifyFill" color="green" width="18px" />
                    </SettingElemsDivTemplate>

                    {/* Delete Account */}
                    <HStack
                      gap={{ base: '15px', sm: '40px', md: '40px' }}
                      flexDir={{ base: 'column', sm: 'row', md: 'row' }}
                      w={'full'}
                      spacing={0}
                      alignItems={{ base: 'flex-start', md: 'center' }}
                      paddingTop={'12px'}
                    >
                      <MyText as="title" title="Delete my account:" />
                      <MyButton
                        title={'Delete Account'}
                        variant="outline"
                        h="30px"
                        borderColor={'red'}
                        borderWidth={'1.5px'}
                        color={'red'}
                        onClick={onOpen}
                        w={{ base: 'full', sm: 'initial', md: 'initial' }}
                      />
                    </HStack>

                    <AlertDialog
                      isOpen={isOpen}
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}
                      isCentered
                    >
                      <AlertDialogOverlay backdropFilter="blur(1px)">
                        <AlertDialogContent mx={'8px'}>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            You want to delete the account?
                            <AlertDialogCloseButton />
                          </AlertDialogHeader>

                          <AlertDialogBody>
                            Are you sure? You can&aposa;t undo this action
                            afterwards.
                          </AlertDialogBody>

                          <AlertDialogFooter>
                            <MyButton
                              title="Cancel"
                              ref={cancelRef}
                              onClick={onClose}
                              borderRadius="5px"
                              variant="outline"
                            />
                            <MyButton
                              title="Delete"
                              colorScheme="red"
                              onClick={onClose}
                              borderRadius="5px"
                              ml={'10px'}
                              bg={'red'}
                              _hover={{ bg: 'red.500' }}
                            />
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialogOverlay>
                    </AlertDialog>

                    <MyButton
                      title="SignOut"
                      px="50px"
                      w={{ base: 'full', sm: 'initial' }}
                    />
                  </VStack>
                </VStack>
              </TabPanel>

              {/* Email setting Tab */}
              <TabPanel px={0}>
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

                    <EmailSettingElemsDivTemplate
                      label="Newsletter"
                      dets="From here, you can set the preference for receiving our newsletters."
                    />

                    <EmailSettingElemsDivTemplate
                      label="Job Notifications"
                      dets="Stay updated on the latest job opportunities with XYZ Enterprises by subscribing to our email notifications."
                    />

                    <EmailSettingElemsDivTemplate
                      label="Blog"
                      dets='New blog post: "How to Land Your Dream Job'
                    />
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

interface ISettingElemsDivTemplate {
  label: string;
  value: string;
  button: string;
  children?: React.ReactNode;
  isVerify?: boolean;
}

const SettingElemsDivTemplate = ({
  label,
  value,
  button,
  children,
  isVerify,
}: ISettingElemsDivTemplate) => {
  return (
    <Box
      borderRadius={'12px'}
      border={'1px solid'}
      borderColor={'brand.lightgray'}
      p={'20px'}
      _hover={{ bg: 'brand.aliceblue' }}
      w={'full'}
      bg={'brand.offwhite'}
    >
      <HStack whiteSpace={'nowrap'} spacing={0}>
        <HStack
          justifyContent={'space-between'}
          w={'full'}
          flexDir={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
          spacing={0}
          flexWrap={'wrap'}
        >
          <HStack
            gap={{ base: '0px', sm: '20px', md: '70px' }}
            flexDir={{ base: 'column', sm: 'row', md: 'row' }}
            alignItems={{ base: 'flex-start', sm: 'center', md: 'center' }}
            spacing={0}
            mb={{ base: '10px', md: '0px' }}
          >
            <Box w={{ base: '100px', sm: 'initial', md: '100px' }}>
              <MyText as="title" title={label} />
            </Box>
            <HStack spacing={0} gap={'4px'}>
              <MyText as="span" title={value} />
              {children}
            </HStack>
          </HStack>

          <HStack
            alignItems={{ base: 'flex-start', md: 'center' }}
            spacing={0}
            gap={'10px'}
          >
            {isVerify && (
              <MyButton title={'Verify'} variant={'outline'} h="30px" />
            )}
            <MyButton title={button} h="30px" />
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
};

interface IEmailSettingElemsDivTemplate {
  label: string;
  dets: string;
}

const EmailSettingElemsDivTemplate = ({
  label,
  dets,
}: IEmailSettingElemsDivTemplate) => {
  return (
    <Box
      borderRadius={'5px'}
      border={'1px solid'}
      borderColor={'brand.lightgray'}
      p={'20px'}
      _hover={{ bg: 'brand.aliceblue' }}
      w={{ base: '100%', md: '100%', lg: '60%' }}
    >
      <HStack justifyContent={'space-between'}>
        <VStack alignItems={'flex-start'}>
          <MyText as="title" title={label} />
          <VStack spacing={0} alignItems={'flex-start'} gap={'2px'}>
            <MyText as="span" title={dets} />
          </VStack>
        </VStack>
        <Switch color={'brand.primary'} />
      </HStack>
    </Box>
  );
};
