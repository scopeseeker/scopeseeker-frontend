import {
  Layout,
  MainHeading,
  MyButton,
  MyIcon,
  MyInput,
  MyText,
  OtpVerifyBox,
} from '@/component';
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
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
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
  // for Delete Account
  const {
    isOpen: isOpenSetting,
    onOpen: onOpenSetting,
    onClose: onCloseSetting,
  } = useDisclosure();
  // For verify Email account
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  // For Change Email Account
  const {
    isOpen: isChangeEmailBox,
    onOpen: onOpenEmailBox,
    onClose: onCloseEmailBox,
  } = useDisclosure();
  // For Verify Phone Number
  const {
    isOpen: isOpenVerifyNumberModel,
    onOpen: onOpenVerifyNumberModel,
    onClose: onCloseVerifyNumberModel,
  } = useDisclosure();
  // For Change Number
  const {
    isOpen: isOpenChangeNumber,
    onOpen: onOpenChangeNumber,
    onClose: onCloseChangeNumber,
  } = useDisclosure();
  const cancelRef = useRef(null);
  const [isVerify, setIsVerify] = useState(true);
  const [open, setOpen] = useState(false);

  const handleEmailVerifyBtn = () => {
    setOpen(!open);
  };

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
                  w={{ base: '100%', sm: '70%', md: '100%', lg: '80%' }}
                >
                  <MyText as="heading" title="Account Setting" />

                  <VStack alignItems={'flex-start'} w={'full'} gap={'20px'}>
                    {/* Email */}
                    <SettingElemsDivTemplate
                      label="Email:"
                      value="lokesh@gmail.com"
                      button="Change Email"
                      isVerify={isVerify}
                      onOpenModel={onOpenModal}
                      onOpenEmailBox={onOpenEmailBox}
                    >
                      <MyIcon name="verifyFill" color="green" width="18px" />
                    </SettingElemsDivTemplate>

                    {/* Verify Email Modal */}
                    <Modal
                      isOpen={isOpenModal}
                      onClose={onCloseModal}
                      isCentered
                    >
                      <ModalOverlay backdropFilter="blur(1px)" />
                      <ModalContent py={'20px'}>
                        <ModalCloseButton />
                        <OtpVerifyBox
                          value="abhishek123@gmail.com"
                          onClose={onCloseModal}
                          align={'center'}
                        />
                      </ModalContent>
                    </Modal>

                    {/* Change Email Modal */}
                    <Modal
                      isOpen={isChangeEmailBox}
                      onClose={onCloseEmailBox}
                      isCentered
                    >
                      <ModalOverlay backdropFilter="blur(1px)" />
                      <ModalContent py={'20px'}>
                        <ModalCloseButton />
                        <VStack
                          alignItems={'flex-start'}
                          px={'30px'}
                          gap={'15px'}
                          display={open ? 'none' : 'flex'}
                        >
                          <VStack alignItems={'flex-start'} spacing={0}>
                            <MyText as="title" title="Change Email" />
                            <MyText
                              as="span"
                              title="We will send you a verification email on this email ID"
                            />
                          </VStack>
                          <MyInput
                            type="text"
                            placeholder="Enter email"
                            leftElement={<MyIcon name="email" />}
                          />
                          <HStack>
                            <MyButton
                              title="Cancel"
                              variant="outline"
                              onClick={onCloseEmailBox}
                            />
                            <MyButton
                              title="Verify"
                              onClick={handleEmailVerifyBtn}
                            />
                          </HStack>
                        </VStack>

                        <OtpVerifyBox
                          value="abhishek123@gmail.com"
                          onClose={onCloseEmailBox}
                          align={'center'}
                          display={open ? 'flex' : 'none'}
                        />
                      </ModalContent>
                    </Modal>

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
                      onOpenModel={onOpenVerifyNumberModel}
                      onOpenEmailBox={onOpenChangeNumber}
                    >
                      <MyIcon name="verifyFill" color="green" width="18px" />
                    </SettingElemsDivTemplate>

                    {/* Verify Phone Number */}
                    <Modal
                      isOpen={isOpenVerifyNumberModel}
                      onClose={onCloseVerifyNumberModel}
                      isCentered
                    >
                      <ModalOverlay backdropFilter="blur(1px)" />
                      <ModalContent py={'20px'}>
                        <ModalCloseButton />
                        <OtpVerifyBox
                          value="+91XXXXXXXX04"
                          onClose={onCloseVerifyNumberModel}
                          align={'center'}
                        />
                      </ModalContent>
                    </Modal>

                    {/* Change Phone Number */}
                    <Modal
                      isOpen={isOpenChangeNumber}
                      onClose={onCloseChangeNumber}
                      isCentered
                    >
                      <ModalOverlay backdropFilter="blur(1px)" />
                      <ModalContent py={'20px'}>
                        <ModalCloseButton />
                        <VStack
                          alignItems={'flex-start'}
                          px={'30px'}
                          gap={'15px'}
                          display={open ? 'none' : 'flex'}
                        >
                          <VStack alignItems={'flex-start'} spacing={0}>
                            <MyText as="title" title="Change Number" />
                            <MyText
                              as="span"
                              title="We will send you a verification OTP on this Phone Number"
                            />
                          </VStack>
                          <MyInput
                            type="text"
                            placeholder="Enter Number"
                            leftElement={<MyIcon name="phone" />}
                          />
                          <HStack>
                            <MyButton
                              title="Cancel"
                              variant="outline"
                              onClick={onCloseChangeNumber}
                            />
                            <MyButton
                              title="Verify"
                              onClick={handleEmailVerifyBtn}
                            />
                          </HStack>
                        </VStack>

                        <OtpVerifyBox
                          value="+91XXXXXXXX54"
                          onClose={onCloseChangeNumber}
                          align={'center'}
                          display={open ? 'flex' : 'none'}
                        />
                      </ModalContent>
                    </Modal>

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
                        onClick={onOpenSetting}
                        w={{ base: 'full', sm: 'initial', md: 'initial' }}
                      />
                    </HStack>

                    {/* Delete Account Alert Box */}
                    <AlertDialog
                      isOpen={isOpenSetting}
                      leastDestructiveRef={cancelRef}
                      onClose={onCloseSetting}
                      isCentered
                    >
                      <AlertDialogOverlay backdropFilter="blur(1px)">
                        <AlertDialogContent mx={'8px'}>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            You want to delete the account?
                            <AlertDialogCloseButton />
                          </AlertDialogHeader>

                          <AlertDialogBody>
                            Are you sure? You can&#x27;t undo this action
                            afterwards.
                          </AlertDialogBody>

                          <AlertDialogFooter>
                            <MyButton
                              title="Cancel"
                              ref={cancelRef}
                              onClick={onCloseSetting}
                              borderRadius="5px"
                              variant="outline"
                            />
                            <MyButton
                              title="Delete"
                              colorScheme="red"
                              onClick={onCloseSetting}
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
  onOpenModel?: () => void;
  onOpenEmailBox?: () => void;
}

const SettingElemsDivTemplate = ({
  label,
  value,
  button,
  children,
  isVerify,
  onOpenModel,
  onOpenEmailBox,
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
              <MyButton
                title={'Verify'}
                variant={'outline'}
                h="30px"
                onClick={onOpenModel}
              />
            )}
            <MyButton title={button} h="30px" onClick={onOpenEmailBox} />
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
