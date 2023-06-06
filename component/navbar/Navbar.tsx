import {
  Box,
  Center,
  Flex,
  HStack,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  VStack,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { MyButton } from '../button';
import { MyIcon } from '../icon';
import MyImage from '../image/MyImage';
import MyText from '../text/MyText';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navHeight = { base: '60px', md: '53px' };
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [avatar, setAvatar] = useState(false);
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

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
            <NavLink iconName="user" title="About Us" />
            <NavLink iconName="phone" title="Contact Us" />
          </Flex>
        </HStack>

        {/* Login, signup and avatar section */}
        <HStack>
          <HStack>
            <HStack spacing={0} gap={'12px'}>
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
              <Center
                borderRadius={'50%'}
                bg={'brand.offwhite'}
                border={'1px solid'}
                borderColor={'brand.black'}
                p={'6px'}
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
              <Center display={{ base: 'flex', lg: 'none' }}>
                <MyIcon name="hamburgerMenu" />
              </Center>
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
}
const NavLink = ({ iconName, title }: INavLink) => {
  return (
    <Center _hover={{ color: 'brand.primary' }} gap={'4px'}>
      <MyIcon
        name={iconName}
        width="18px"
        height="18px"
        strokeWidth="1.2"
        color="currentColor"
      />
      <MyText title={title} as="link" href={'#'} color="currentColor" />
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
