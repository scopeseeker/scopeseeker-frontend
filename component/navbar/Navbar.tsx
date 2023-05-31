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
  HStack,
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
        boxShadow={'0 0px 10px rgba(0, 0, 0, 0.2)'}
        zIndex={'overlay'}
        px={{ base: '24px', md: '25px',lg: '48px' }}
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
          {/* Links Sections */}
          {/* <HStack gap={'12px'} display={{ base: 'none', md: 'flex' }}>
            <Center
              _hover={{ color: 'brand.primary' }}
              gap={'4px'}
              cursor={'pointer'}
            >
              <MyIcon
                name="job"
                width="18px"
                height="18px"
                strokeWidth="1.2"
                color="currentColor"
              />
              <MyText
                title="Jobs"
                as="link"
                href="/jobs"
                color="currentColor"
              />
            </Center>

            <Center _hover={{ color: 'brand.primary' }} gap={'4px'}>
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
              cursor={'pointer'}
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

            <Center _hover={{ color: 'brand.primary' }} gap={'4px'}>
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
          </HStack> */}
          <MyLinkElements display={{ base: 'none', md: 'flex' }} />
        </HStack>

        {/* Login, signup and avatar section */}
        <HStack>
          <HStack display={{ base: 'none', md: 'flex' }}>
            <MyButton
              title="Login"
              variant="outline"
              onClick={handleLoginSignup}
            />
            <MyButton title="Sign Up" onClick={handleLoginSignup} />
            {avatar && (
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                w={'35px'}
                h={'35px'}
              />
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
                    <HStack w={'full'} alignItems={'flex-start'} mt={'40px'} flexDir={'column'} spacing={0} gap={'10px'}>
                      <MyButton
                        title="Login"
                        variant="outline"
                        onClick={handleLoginSignup}
                        width= {'100%'}
                      />
                      <MyButton title="Sign Up" onClick={handleLoginSignup} width= {'100%'}/>
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
