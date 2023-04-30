import {
  Center,
  Flex,
  HStack,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import MyIcon from '../icon/MyIcon';
import MyImage from '../image/MyImage';
import MyText from '../text/MyText';

const Footer = () => {
  return (
    <VStack
      bg={'brand.primary'}
      w={'full'}
      px={{ base: '24px', md: '48px' }}
      pt={'22px'}
      gap={'10px'}
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
                width={42}
                height={42}
              />
            </Center>

            <Flex direction={'column'} gap={1}>
              <MyText
                as={'heading'}
                lineHeight={'shorter'}
                color="brand.white"
                title="Scope Seeker"
              />
              <MyText
                as={'st'}
                lineHeight={'shorter'}
                color="brand.white"
                title="Seek the scope of your potential"
              />
            </Flex>
          </HStack>

          <MyText
            as={'span'}
            color={'brand.white'}
            title={
              'Scope Seeker is a cutting-edge web application designed to help job seekers find their dream job with ease'
            }
          />
          <Flex direction={'column'} gap={2}>
            <FooterHeading title={'Stay Connected'} />
            <MyText
              title="Email: scopeseekerhelp@gmail.com"
              as="span"
              color="brand.white"
            />
            <MyText
              title="Phone: +91-9617143257"
              as="span"
              color="brand.white"
            />
          </Flex>
        </Flex>
        <Flex
          w={{ base: '100%', md: 'calc(100%/2)' }}
          // flexDirection={{ base: 'column', sm: 'row' }}
          alignItems={{ base: 'flex-start' }}
          gap={5}
          justifyContent={'center'}
        >
          {/* Links Section */}
          <Center
            w={'50%'}
            justifyContent={{ base: 'flex-start', md: 'center' }}
          >
            <Flex flexDir={'column'} gap={3} p={{ base: 0, md: 4 }}>
              <FooterHeading title={'Links'} />
              <FooterLink link={'/jobs-portal'} title={'Find Jobs'} />
              <FooterLink link={'/companies'} title={'Find Companies'} />
              <FooterLink link={'#'} title={'Find Categories'} />
              <FooterLink
                link={'/helpful-resources'}
                title={'Helpful Resource'}
              />
              <FooterLink link={'/'} title={'FAQs'} />
            </Flex>
          </Center>
          {/* Company Section */}
          <Center
            w={'50%'}
            justifyContent={{ base: 'flex-start', md: 'center' }}
          >
            <Flex flexDir={'column'} gap={3} p={{ base: 0, md: 4 }}>
              <FooterHeading title={'Company'} />
              <FooterLink link={'/about-us'} title={'About Us'} />
              <FooterLink link={'/contact-us'} title={'Contact Us'} />
              <FooterLink
                link={'/legal/terms-of-use'}
                title={'Terms & Conditions'}
              />
              <FooterLink
                link={'/legal/privacy-policy'}
                title={'Privacy Policy'}
              />
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
          <MyText
            as={'span'}
            color="brand.white"
            title="Bhanpur, Ayodhya Bypass, Bhopal Madhya Pradesh, India"
          />
          <Text as={'span'} fontSize={'13px'}>
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
              icon={<MyIcon name={'instagram'} height="20" width="20" />}
            />
            <IconButton
              p={2}
              aria-label="social-meida"
              color={'brand.primary'}
              icon={<MyIcon name={'linkedin'} height="20" width="20" />}
            />
            <IconButton
              p={2}
              aria-label="social-meida"
              color={'brand.primary'}
              icon={<MyIcon name={'twitter'} height="20" width="20" />}
            />

            <IconButton
              p={2}
              aria-label="social-meida"
              color={'brand.primary'}
              icon={<MyIcon name={'whatsapp'} height="20" width="20" />}
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

export default Footer;

interface IFooterHeading {
  title: string;
}

const FooterHeading: React.FC<IFooterHeading> = ({ title }: IFooterHeading) => {
  return <MyText as="heading" title={title} color="brand.white" />;
};

interface IFooterHeading {
  link?: string;
}

const FooterLink = ({ title, link = '#' }: IFooterHeading) => {
  return (
    <Link href={link}>
      <MyText title={title} as="span" color="brand.white" />
    </Link>
  );
};
