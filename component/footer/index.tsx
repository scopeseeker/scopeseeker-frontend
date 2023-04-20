import {
  Center,
  Flex,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import MyButton from '../button/MyButton';
import Icon from '../icon/Icon';
import MyImage from '../image/MyImage';
import MyText from '../text/MyText';

const Footer = () => {
  return (
    <VStack
      bg={'brand.primary'}
      w={'full'}
      px={{ base: 5, xl: 12 }}
      pt={12}
      gap={10}
      justifyContent={'space-between'}
      color={'brand.white'}
      mt={20}
    >
      <Flex
        w={'full'}
        gap={{ base: 5, md: '2', xl: 10 }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        {/* Section1: Company */}
        <Flex
          flexDir={'column'}
          gap={3}
          w={{ base: '100%', md: 'calc(100%/4)' }}
        >
          <HStack cursor={'pointer'}>
            <Center w={12} h={12}>
              <MyImage
                src={'/assets/images/scopeseeker-logo.png'}
                alt={'secope seeker logo'}
                width={60}
                height={60}
              />
            </Center>

            <Flex direction={'column'} gap={1}>
              <Text
                as={'span'}
                lineHeight={'1'}
                fontSize={'lg'}
                fontWeight={'medium'}
              >
                Scope Seeker
              </Text>
              <Text as={'span'} fontSize={'xs'}>
                Seek the scope of your potential
              </Text>
            </Flex>
          </HStack>

          <MyText
            as={'st'}
            color={'brand.white'}
            title={
              'Scope Seeker is a cutting-edge web application designed to help job seekers find their dream job with ease'
            }
          />
          <Flex direction={'column'} mt={5} gap={2}>
            <FooterHeading title={'Stay Connected'} />
            <Text>Email: scopeseekerhelp@gmail.com</Text>
            <Text>Phone: +91-9617143257</Text>
          </Flex>
        </Flex>
        <Flex
          w={{ base: '100%', md: 'calc(100%/2)' }}
          flexDirection={{ base: 'column', sm: 'row' }}
          alignItems={{ base: 'flex-start' }}
          gap={5}
          justifyContent={'center'}
        >
          {/* Links Section */}
          <Center w={'50%'}>
            <Flex flexDir={'column'} gap={3} p={{ base: 0, md: 4 }}>
              <FooterHeading title={'Links'} />
              <FooterLink link={'/jobs'} title={'Find Jobs'} />
              <FooterLink link={'/companies'} title={'Find Companies'} />
              <FooterLink link={'#'} title={'Find Categories'} />
              <FooterLink link={'/helpful-resources'} title={'Helpful Resource'} />
              <FooterLink link={'/'} title={'FAQs'} />
            </Flex>
          </Center>
          {/* Company Section */}
          <Center w={'50%'}>
            <Flex flexDir={'column'} gap={3} p={{ base: 0, md: 4 }}>
              <FooterHeading title={'Company'} />
              <FooterLink link={'/about-us'} title={'About Us'} />
              <FooterLink link={'/contact-us'} title={'Contact Us'} />
              <FooterLink link={'/legal/terms-of-use'} title={'Terms & Conditions'} />
              <FooterLink link={'/legal/privacy-policy'} title={'Privacy Policy'} />
              <FooterLink link={'/contact-us'} title={'Report an Issue'} />
            </Flex>
          </Center>
        </Flex>

        {/* Meet Us section */}
        <Flex
          flexDir={'column'}
          gap={3}
          w={{ base: '100%', md: 'calc(100%/4)' }}
          p={{ base: 0, md: 4 }}
        >
          <FooterHeading title={'Meet Us'} />
          <Text as={'span'}>
            Bhanpur, Ayodhya Bypass, Bhopal Madhya Pradesh, India
          </Text>
          <Text as={'span'}>
            We
            <Text as={'span'} fontSize={'3xl'}>
              ❤️
            </Text>
            new friends
          </Text>
          <HStack py={2}>
            <IconButton
              p={2}
              aria-label="social-meida"
              color={'brand.primary'}
              icon={<Icon name={'instagram'} />}
            />
            <IconButton
              p={2}
              aria-label="social-meida"
              color={'brand.primary'}
              icon={<Icon name={'linkedin'} />}
            />
            <IconButton
              p={2}
              aria-label="social-meida"
              color={'brand.primary'}
              icon={<Icon name={'twitter'} />}
            />

            <IconButton
              p={2}
              aria-label="social-meida"
              color={'brand.primary'}
              icon={<Icon name={'whatsapp'} />}
            />
          </HStack>
        </Flex>
      </Flex>

      {/* Bottom Copyright Sections */}
      <Flex
        py={5}
        borderTop={'1px solid lightgray'}
        w={'full'}
        justifyContent={'space-between'}
        alignItems={'center'}
        color={'brand.white'}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Text as={'span'} fontSize={'xs'}>
          &copy; 2023 Scope Seeker. All Right Reserved
        </Text>
        <Text as={'span'} fontSize={'xs'}>
          Images Credit: Design by Freepik
        </Text>
      </Flex>
    </VStack>
  );
};

interface IFooterHeading {
  title: string;
}

const FooterHeading: React.FC<IFooterHeading> = ({ title }: IFooterHeading) => {
  return (
        <MyText as='heading' title={title} color='brand.white'/>
  );
};

interface IFooterLink {
  title: string;
  link: string;
}

const FooterLink: React.FC<IFooterLink> = ({ title, link }: IFooterLink) => {
  return (
    // <Link href={link}>
    //   <MyButton
    //     color={'brand.white'}
    //     _hover={{ color: 'brand.darkgray' }}
    //     fontWeight={'normal'}
    //     variant={'link'}
    //     title={title}
    //   />
    // </Link>
    <MyText title={title} href={link} as='link' color='brand.white'/>
  );
};

export default Footer;
