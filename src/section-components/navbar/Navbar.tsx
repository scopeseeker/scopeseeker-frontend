import { MyButton, MyDivider, MyIcon, MyImage, MyText } from '@/component';
import { avatarMenuLinks } from '@/constant/linksObject';
import {
  Box,
  Center,
  Collapse,
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
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const navHeight = { base: '60px', md: '53px' };
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const [isJobOpen, setJobOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);

  const handleJobClick = () => {
    setJobOpen(!isJobOpen);
    setCompanyOpen(false); // Close the Company collapse
  };

  const handleCompanyClick = () => {
    setCompanyOpen(!isCompanyOpen);
    setJobOpen(false); // Close the Job collapse
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
          {/* Scope Seeker Logo */}
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

          {/* Desktop Nav Links */}
          <Flex display={{ base: 'none', lg: 'flex' }} gap={'22px'}>
            <DesktopNav iconName="case" title="Job">
              <DesktopSubNav href="#" label="Frontend Developer" />
              <DesktopSubNav href="#" label="Backend Developer" />
              <DesktopSubNav href="#" label="Frontend Developer" />
              {isLogin && (
                <>
                  <DesktopSubNav href="#" label="Recommanded Jobs" />
                  <DesktopSubNav href="#" label="Saved Jobs" />
                </>
              )}
            </DesktopNav>
            <DesktopNav iconName="company" title="Company">
              <DesktopSubNav href="#" label="MNC's Companies" />
              <DesktopSubNav href="#" label="MNC's Companies" />
              <DesktopSubNav href="#" label="MNC's Companies" />
              {isLogin && (
                <>
                  <DesktopSubNav href="#" label="Recommanded Companies" />
                  <DesktopSubNav href="#" label="Favourite Companies" />
                </>
              )}
            </DesktopNav>
            <NavLink iconName="file" title="Resources" href="/resources" />
            <NavLink iconName="book" title="Blog" href="/blogs" />
          </Flex>
        </HStack>

        {/* Right Part of Navbar */}
        <HStack>
          <HStack>
            <HStack spacing={0} gap={{ base: '10px', md: '16px' }}>
              {!isLogin && (
                <HStack
                  gap={'12px'}
                  spacing={0}
                  display={{ base: 'none', md: 'flex' }}
                >
                  <Link href={'/login'}>
                    <MyButton
                      variant="outline"
                      title="Log In"
                      py={'6px'}
                      h={'fit-content'}
                    />
                  </Link>
                  <Link href={'/signup'}>
                    <MyButton title="Sign Up" py={'6px'} h={'fit-content'} />
                  </Link>
                </HStack>
              )}
              {isLogin && (
                <>
                  <Center
                    display={{ base: 'none', md: 'flex' }}
                    borderRadius={'50px'}
                    px={'12px'}
                    py={'4px'}
                    bg={'brand.primary'}
                    gap={'4px'}
                    cursor={'pointer'}
                  >
                    <MyIcon color="brand.white" name="dashboard" width="20px" />
                    <MyText
                      as="link"
                      title="Dashboard"
                      href="/dashboard"
                      color={'brand.white'}
                    />
                  </Center>

                  {/* Notification part  */}
                  <Menu>
                    <MenuButton display={{ base: 'none', md: 'initial' }}>
                      <MyIcon name={'bellFilled'} />
                    </MenuButton>

                    <MenuList
                      boxShadow="0px 0px 30px rgb(0,0,0,0.12)"
                      mt={'16px'}
                    >
                      <VStack
                        px={'25px'}
                        py={'15px'}
                        alignItems={'flex-start'}
                        w={'380px'}
                        h={'300px'}
                      >
                        <HStack
                          justifyContent={'space-between'}
                          alignItems={'center'}
                          w={'full'}
                        >
                          <MyText as="heading" title="Notification (1)" />
                          <MyText
                            as="span"
                            title="Mark all as read"
                            color="brand.primary"
                            cursor={'pointer'}
                          />
                        </HStack>

                        <VStack pt={'10px'} w={'full'} gap={'10px'}>
                          <HStack
                            w={'full'}
                            justifyContent={'space-between'}
                            cursor={'pointer'}
                          >
                            <VStack spacing={0} alignItems={'flex-start'}>
                              <MyText as="title" title="Recommended jobs" />
                              <MyText
                                as="small"
                                title="Frontend Developer"
                                color="brand.darkgray"
                              />
                            </VStack>
                            <Center
                              px={'10px'}
                              py={'2px'}
                              borderWidth={'1px'}
                              borderColor={'brand.lightgray'}
                              borderRadius={'20px'}
                            >
                              <MyText as="small" title="4 New" />
                            </Center>
                          </HStack>

                          <HStack
                            w={'full'}
                            justifyContent={'space-between'}
                            cursor={'pointer'}
                          >
                            <VStack spacing={0} alignItems={'flex-start'}>
                              <MyText as="title" title="Pending Actions" />
                              <MyText
                                as="small"
                                title="Specify Desired location"
                                color="brand.darkgray"
                              />
                            </VStack>
                            <Center
                              px={'10px'}
                              py={'2px'}
                              borderWidth={'1px'}
                              borderColor={'brand.lightgray'}
                              borderRadius={'20px'}
                            >
                              <MyText as="small" title="13 Actions" />
                            </Center>
                          </HStack>
                        </VStack>
                      </VStack>
                    </MenuList>
                  </Menu>

                  {/* DarkMode */}
                  <Center
                    borderRadius={'50%'}
                    bg={'brand.offwhite'}
                    border={'1px solid'}
                    borderColor={'brand.black'}
                    w={'32px'}
                    h={'32px'}
                    cursor={'pointer'}
                    onClick={() => {
                      setIsDarkMode(!isDarkMode);
                    }}
                  >
                    <MyIcon
                      name={isDarkMode ? 'sun' : 'moon'}
                      width="20px"
                      height="20px"
                      strokeWidth="1.5"
                    />
                  </Center>

                  {/* Avatar */}
                  <Menu>
                    <MenuButton>
                      <Center
                        borderRadius={'50%'}
                        bg={'brand.offwhite'}
                        border={'1.5px solid'}
                        borderColor={'brand.primary'}
                        w={'32px'}
                        h={'32px'}
                        cursor={'pointer'}
                        overflow={'hidden'}
                      >
                        <MyImage
                          src={'/assets/images/p12.jpg'}
                          alt="profile"
                          width={32}
                          height={32}
                        />
                      </Center>
                    </MenuButton>

                    <MenuList
                      boxShadow="0px 0px 30px rgb(0,0,0,0.12)"
                      mt={'12px'}
                      mr={{ base: '12px', sm: '0px' }}
                      onClick={onClose}
                    >
                      <Box px={'30px'} py={'20px'} w={'350px'}>
                        <MenuItem bg={'transparent'}>
                          <HStack gap={'15px'} alignItems={'flex-start'}>
                            <Center
                              w={'60px'}
                              h={'60px'}
                              borderRadius={'100%'}
                              border={'2px'}
                              borderColor={'brand.primary'}
                              overflow={'hidden'}
                            >
                              <MyImage
                                src={'/assets/images/p12.jpg'}
                                alt="profile"
                                width={60}
                                height={60}
                              />
                            </Center>

                            <VStack alignItems={'flex-start'} gap={'8px'}>
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
                                href="/my-profile"
                                color={'brand.primary'}
                                fontWeight={500}
                              />
                            </VStack>
                          </HStack>
                        </MenuItem>

                        <MyDivider mt={'20px'} />

                        <VStack
                          alignItems={'flex-start'}
                          marginTop={'20px'}
                          gap={'8px'}
                        >
                          {avatarMenuLinks.map((item, index) => {
                            return (
                              <MenuItem
                                key={index}
                                _hover={{ bg: 'transparent' }}
                                bg={'transparent'}
                              >
                                <HStack
                                  cursor={'pointer'}
                                  _hover={{ color: 'brand.primary' }}
                                >
                                  <MyIcon
                                    name={item.icon}
                                    width="20px"
                                    color={'currentColor'}
                                  />
                                  <MyText
                                    as="link"
                                    href={item.link}
                                    title={item.title}
                                    color={'currentColor'}
                                  />
                                </HStack>
                              </MenuItem>
                            );
                          })}
                        </VStack>
                      </Box>
                    </MenuList>
                  </Menu>

                  {/* Mobile Drawer */}
                  <Center
                    display={{ base: 'flex', lg: 'none' }}
                    onClick={onOpen}
                  >
                    <MyIcon name="hamburgerMenu" width="32px" height="32px" />
                  </Center>
                  <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    size={'xs'}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerCloseButton />
                      </DrawerHeader>
                      <DrawerBody>
                        <VStack
                          w={'full'}
                          h={'full'}
                          alignItems={'flex-start'}
                          gap={'12px'}
                          spacing={0}
                          py={'18px'}
                        >
                          <NavLink
                            iconName="case"
                            title="Jobs"
                            onClick={handleJobClick}
                            rightIcon={true}
                          />

                          <Collapse in={isJobOpen}>
                            <VStack
                              borderLeft={'1px solid'}
                              px={'12px'}
                              mx={'12px'}
                              borderColor={'brand.lightgray'}
                              alignItems={'flex-start'}
                            >
                              <MyText
                                as="link"
                                title="Full Stack Developer"
                                onClick={onClose}
                              />
                              <MyText
                                as="link"
                                title="Backend Developer"
                                onClick={onClose}
                              />
                              <MyText
                                as="link"
                                title="Android Developer"
                                onClick={onClose}
                              />
                              {isLogin && (
                                <>
                                  <MyText
                                    as="link"
                                    title=" Recommanded Jobs"
                                    onClick={onClose}
                                  />
                                  <MyText
                                    as="link"
                                    title="Saved Jobs"
                                    onClick={onClose}
                                  />
                                </>
                              )}
                            </VStack>
                          </Collapse>
                          <NavLink
                            iconName="company"
                            title="Company"
                            onClick={handleCompanyClick}
                            rightIcon={true}
                          />
                          <Collapse in={isCompanyOpen}>
                            <VStack
                              borderLeft={'1px solid'}
                              px={'12px'}
                              mx={'12px'}
                              borderColor={'brand.lightgray'}
                              alignItems={'flex-start'}
                            >
                              <MyText
                                as="link"
                                title="MNC's"
                                onClick={onClose}
                              />
                              <MyText
                                as="link"
                                title="Unicorn"
                                onClick={onClose}
                              />
                              <MyText
                                as="link"
                                title="Fourtune 500"
                                onClick={onClose}
                              />
                              {isLogin && (
                                <>
                                  <MyText
                                    as="link"
                                    title=" Recommanded Companies"
                                    onClick={onClose}
                                  />
                                  <MyText
                                    as="link"
                                    title="Favouriate Comapanies"
                                    onClick={onClose}
                                  />
                                </>
                              )}
                            </VStack>
                          </Collapse>
                          <NavLink
                            iconName="profile"
                            title="About Us"
                            href="/about-us"
                            onClick={onClose}
                          />
                          <NavLink
                            iconName="phone"
                            title="Contact Us"
                            href="/contact-us"
                            onClick={onClose}
                          />
                          {!isLogin && (
                            <>
                              <MyButton
                                title="Login"
                                variant="outline"
                                h={'32px'}
                                w={'120px'}
                              />
                              <MyButton title="Signup" w={'120px'} h={'32px'} />
                            </>
                          )}
                          <NavLink
                            iconName="dashboard"
                            title="Dashboard"
                            href="/dashboard"
                            onClick={onClose}
                            border={'1px solid'}
                            borderRadius={'20px'}
                            p={'6px'}
                            px={'18px'}
                            bg={'brand.primary'}
                            color={'brand.white'}
                          />
                        </VStack>
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </>
              )}
            </HStack>
          </HStack>
        </HStack>
      </HStack>
    </Box>
  );
};
export default Navbar;

interface INavLink {
  iconName: string;
  title: string;
  href?: string;
  [key: string]: any;
  rightIcon?: boolean;
}
const NavLink = ({
  iconName,
  title,
  href = '#',
  rightIcon = false,
  ...rest
}: INavLink) => {
  return (
    <Center _hover={{ color: 'brand.primary' }} gap={'3px'} {...rest}>
      <MyIcon
        name={iconName}
        width="18px"
        height="18px"
        strokeWidth="1.2"
        color="currentColor"
      />
      <MyText title={title} as="link" href={href} color="currentColor" />
      {rightIcon && (
        <MyIcon
          name="chevronDown"
          width="18px"
          height="18px"
          color="currentColor"
        />
      )}
    </Center>
  );
};

interface IDesktopNav extends INavLink {
  children?: React.ReactNode;
}
const DesktopNav = ({ iconName, title, children }: IDesktopNav) => {
  return (
    <Stack direction={'row'} gap={'12px'}>
      <Box>
        <Popover trigger={'hover'} placement={'bottom-start'}>
          <PopoverTrigger>
            <Center _hover={{ color: 'brand.primary' }} gap={'4px'}>
              <MyIcon
                name={iconName}
                width="18px"
                height="18px"
                strokeWidth="1.2"
                color="currentColor"
              />
              <MyText title={title} as="link" href={'#'} color="currentColor" />
              <MyIcon
                name="chevronDown"
                width="18px"
                height="18px"
                color="currentColor"
              />
            </Center>
          </PopoverTrigger>
          <PopoverContent
            border={'none'}
            boxShadow={'0px 10px 30px rgb(0,0,0,0.12)'}
            bg={'brand.white'}
            p={'10px'}
            borderRadius={'20px'}
            borderTopRadius={'5px'}
          >
            <Stack>{children}</Stack>
          </PopoverContent>
        </Popover>
      </Box>
    </Stack>
  );
};

interface IDesktopSubNav {
  label: string;
  href: string;
}
const DesktopSubNav = ({ label, href }: IDesktopSubNav) => {
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
