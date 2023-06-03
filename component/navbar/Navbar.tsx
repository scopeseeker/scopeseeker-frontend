import {
  Avatar,
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  VStack,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { MyButton } from '../button';
import { MyIcon } from '../icon';
import MyImage from '../image/MyImage';
import MyText from '../text/MyText';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navHeight = { base: '60px', md: '53px' };
  const [avatar, setAvatar] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onClose();
  };

  const handleLoginSignup = () => {
    setAvatar(true);
  };

  return (
    <Box h={navHeight}>
      <HStack
        position={'fixed'}
        top={0}
        left={0}
        w={'full'}
        h={navHeight}
        justifyContent="space-between"
        bg={'brand.white'}
        boxShadow={'0 0px 10px rgba(0, 0, 0, 0.1)'}
        zIndex={'overlay'}
        px={{ base: '24px', md: '25px', lg: '48px' }}
      >
        <HStack gap={'16px'}>
          {/*Scope Seeker Logo*/}
          <Link href={'/'}>
            <Center gap={'8px'} mr={'10px'}>
              <MyImage
                src={'/assets/images/scopeseeker-logo.png'}
                alt={'secope seeker logo'}
                width={30}
                height={30}
              />
              <VStack alignItems={'flex-start'} spacing={0}>
                <MyText
                  lineHeight={'shorter'}
                  title="Scope Seeker"
                  as="title"
                />
                <MyText
                  lineHeight={'shorter'}
                  title="Seek the scope of your potential"
                  as="small"
                  fontSize={{ base: 'none', md: '10px' }}
                  display={{ base: 'none', md: 'initial' }}
                />
              </VStack>
            </Center>
          </Link>

          {/* <MyLinkElements display={{ base: 'none', md: 'flex' }} /> */}
          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>
        </HStack>

        {/* Login, signup and avatar section */}
        <HStack>
          <Center
            onClick={toggleColorMode}
            cursor={'pointer'}
            p={'8px'}
            bg={'brand.aliceblue'}
            border={'1px solid'}
            borderColor={'brand.lightgray'}
            borderRadius={'50%'}
          >
            {colorMode === 'light' ? (
              <Center>
                <MyIcon name="darkMode" width="18px" height="18px" />
              </Center>
            ) : (
              <Center>
                <MyIcon
                  name="sun"
                  width="18px"
                  height="18px"
                  transition={'all .3s ease'}
                  transitionDelay={'.3s'}
                />
              </Center>
            )}
          </Center>
          <HStack display={{ base: 'none', md: 'flex' }}>
            {avatar ? (
              ''
            ) : (
              <HStack gap={'20px'}>
                <HStack>
                  <MyButton
                    title="Login"
                    variant="outline"
                    onClick={handleLoginSignup}
                  />
                  <MyButton title="Sign Up" onClick={handleLoginSignup} />
                </HStack>
              </HStack>
            )}

            {avatar && (
              <HStack gap={'15px'}>
                <Menu>
                  <MenuButton>
                    <MyIcon name={'notification'} />
                  </MenuButton>

                  <MenuList>
                    <VStack
                      px={'30px'}
                      py={'20px'}
                      alignItems={'flex-start'}
                      w={'380px'}
                      h={'350px'}
                    >
                      <HStack
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        w={'full'}
                      >
                        <MyText as="title" title="Notification (1)" />
                        <MyText
                          as="span"
                          title="Mark all as read"
                          color="brand.primary"
                          cursor={'pointer'}
                        />
                      </HStack>
                    </VStack>
                  </MenuList>
                </Menu>

                <Menu>
                  <MenuButton>
                    <Avatar
                      src="https://bit.ly/dan-abramov"
                      w={'35px'}
                      h={'35px'}
                    />
                  </MenuButton>

                  <MenuList>
                    <Box px={'30px'} py={'20px'} w={'350px'}>
                      <HStack gap={'5px'} alignItems={'flex-start'}>
                        <Box
                          w={'60px'}
                          h={'60px'}
                          borderRadius={'100%'}
                          border={'2px'}
                          borderColor={'brand.primary'}
                        >
                          <Avatar
                            src="https://bit.ly/dan-abramov"
                            h={'full'}
                            w={'full'}
                          />
                        </Box>

                        <VStack alignItems={'flex-start'} gap={'5px'}>
                          <VStack spacing={0} alignItems={'flex-start'}>
                            <MyText as="title" title="Abhishek Kumar" />
                            <MyText
                              as="span"
                              title="example123@gmail.com"
                              color="brand.darkgray"
                            />
                          </VStack>

                          <MyText
                            as="link"
                            title="View & Update Profile"
                            color={'brand.primary'}
                            fontWeight={500}
                          />
                        </VStack>
                      </HStack>

                      <Box
                        borderBottom={'1px'}
                        borderColor={'brand.lightgray'}
                        marginTop={'20px'}
                      ></Box>

                      <VStack
                        alignItems={'flex-start'}
                        marginTop={'20px'}
                        gap={'8px'}
                      >
                        <HStack cursor={'pointer'}>
                          <MyIcon name="user" width="20px" strokeWidth="2" />
                          <MyText as="span" title="My Profile" />
                        </HStack>

                        <HStack cursor={'pointer'}>
                          <MyIcon
                            name="settings"
                            width="20px"
                            strokeWidth="2"
                          />
                          <MyText as="span" title="Account Setting" />
                        </HStack>

                        <HStack cursor={'pointer'}>
                          <MyIcon
                            name="questionMark"
                            width="20px"
                            strokeWidth="2"
                          />
                          <MyText as="span" title="FAQ" />
                        </HStack>

                        <HStack cursor={'pointer'}>
                          <MyIcon
                            name="chartPie"
                            width="20px"
                            strokeWidth="2"
                          />
                          <MyText as="span" title="Dashboard" />
                        </HStack>

                        <HStack cursor={'pointer'}>
                          <MyIcon name="logout" width="20px" strokeWidth="2" />
                          <MyText as="span" title="Logout" />
                        </HStack>
                      </VStack>
                    </Box>
                  </MenuList>
                </Menu>

                <Box
                  onClick={toggleColorMode}
                  cursor={'pointer'}
                  px={'5px'}
                  py={'3px'}
                  bg={'brand.lightgray'}
                  borderRadius={'5px'}
                >
                  {colorMode === 'light' ? (
                    <MyIcon name="darkMode" width="20px" />
                  ) : (
                    <MyIcon name="sun" width="20px" />
                  )}
                </Box>
              </HStack>
            )}
          </HStack>

          {/* Mobile Drawer */}
          <HStack display={{ base: 'initial', md: 'none' }}>
            <MyIcon name="hamburgerMenu" onClick={onOpen} cursor={'pointer'} />
            <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader py={'20px'}>
                  <HStack>
                    {avatar && (
                      <Avatar
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                        w={'30px'}
                        h={'30px'}
                      />
                    )}
                  </HStack>
                  <DrawerCloseButton />
                </DrawerHeader>
                <DrawerBody>
                  {/* Links for mobile view  */}
                  <MyLinkElements
                    display={{ base: 'flex', md: 'none' }}
                    onClick={handleClick}
                    flexDirection={'column'}
                    alignItems="flex-start"
                    spacing={0}
                  />

                  {/* Button section  */}
                  {avatar ? (
                    ''
                  ) : (
                    <HStack
                      w={'full'}
                      alignItems={'flex-start'}
                      mt={'40px'}
                      flexDir={'column'}
                      spacing={0}
                      gap={'10px'}
                    >
                      <MyButton
                        title="Login"
                        variant="outline"
                        onClick={handleLoginSignup}
                        width={'100%'}
                      />
                      <MyButton
                        title="Sign Up"
                        onClick={handleLoginSignup}
                        width={'100%'}
                      />
                    </HStack>
                  )}
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;

interface ILinkElements {
  display: {
    base: string;
    md: string;
  };
  onClick?: () => void;
  cursor?: string;
  flexDirection?: any;
  alignItems?: string;
  spacing?: number;
}

const MyLinkElements = ({
  display,
  onClick,
  cursor,
  flexDirection,
  alignItems,
  spacing,
}: ILinkElements) => {
  return (
    <HStack
      gap={'12px'}
      display={display}
      flexDir={flexDirection}
      alignItems={alignItems}
      spacing={spacing}
    >
      <Center
        _hover={{ color: 'brand.primary' }}
        gap={'4px'}
        onClick={onClick}
        cursor={cursor}
      >
        <MyIcon
          name="job"
          width="18px"
          height="18px"
          strokeWidth="1.2"
          color="currentColor"
        />
        <MyText title="Jobs" as="link" href="/jobs" color="currentColor" />
      </Center>

      <Center
        _hover={{ color: 'brand.primary' }}
        gap={'4px'}
        onClick={onClick}
        cursor={cursor}
      >
        <MyIcon
          name="company"
          width="18px"
          height="18px"
          strokeWidth="1.2"
          color="currentColor"
        />
        <MyText
          title="Company"
          as="link"
          href="/company"
          color="currentColor"
        />
      </Center>

      <Center
        _hover={{ color: 'brand.primary' }}
        gap={'4px'}
        onClick={onClick}
        cursor={cursor}
      >
        <MyIcon
          name="user"
          width="18px"
          height="18px"
          strokeWidth="1.2"
          color="currentColor"
        />
        <MyText
          title="About us"
          as="link"
          href="/about-us"
          color="currentColor"
        />
      </Center>

      <Center
        _hover={{ color: 'brand.primary' }}
        gap={'4px'}
        onClick={onClick}
        cursor={cursor}
      >
        <MyIcon
          name="phone"
          width="18px"
          height="18px"
          strokeWidth="1.2"
          color="currentColor"
        />
        <MyText
          title="Contact us"
          as="link"
          href="/contact-us"
          color="currentColor"
        />
      </Center>
    </HStack>
  );
};

// Test data

const DesktopNav = () => {
  return (
    <Stack direction={'row'} gap={'12px'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Center _hover={{ color: 'brand.primary' }} gap={'4px'}>
                <MyIcon
                  name={navItem.iconName}
                  width="18px"
                  height="18px"
                  strokeWidth="1.2"
                  color="currentColor"
                />
                <MyText
                  title={navItem.label}
                  as="link"
                  href={navItem.href}
                  color="currentColor"
                />
              </Center>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={'none'}
                // boxShadow={'0px 0px 30px rgb(0,0,0,0.12)'}
                bg={'brand.white'}
                p={'10px'}
                borderRadius={'5px'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }: NavItem) => {
  return (
    <Box
      role={'group'}
      p={'7px'}
      borderRadius={'8px'}
      _hover={{ bg: 'brand.aliceblue' }}
    >
      <Stack direction={'row'} align={'center'} px={'6px'}>
        <Box>
          <MyText
            as="link"
            title={label}
            transition={'all .3s ease'}
            _groupHover={{ color: 'brand.primary' }}
            fontWeight={500}
            href={href}
          />
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <MyIcon name="chevronRight" width="20px" height="20px" />
        </Flex>
      </Stack>
    </Box>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  iconName?: any;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Jobs',
    iconName: 'job',
    href: '/jobs',
    children: [
      {
        label: 'Full Stack Web Developer',
        href: '#',
      },
      {
        label: 'Frontend Development',
        href: '#',
      },
      {
        label: 'Java Developer',
        href: '#',
      },
      {
        label: 'Software Engineer',
        href: '#',
      },
      {
        label: 'Recommanded Jobs',
        href: '#',
      },
    ],
  },
  {
    label: 'Company',
    iconName: 'company',
    href: '/company',
    children: [
      {
        label: `MNC's Companies`,
        href: '#',
      },
      {
        label: 'Unicorn Companies',
        href: '#',
      },
      {
        label: 'Fortune 500',
        href: '#',
      },
      {
        label: 'Recommanded Companies',
        href: '#',
      },
    ],
  },
  {
    label: 'About us',
    iconName: 'user',
    href: '/about-us',
  },
  {
    label: 'Contact us',
    iconName: 'phone',
    href: '/contact-us',
  },
];
