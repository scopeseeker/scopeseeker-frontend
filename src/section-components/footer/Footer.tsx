import { Layout, MyIcon, MyImage, MyText } from '@/component';
import { Center, Flex, HStack, IconButton, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <VStack
      bg={'brand.primary'}
      w={'full'}
      pt={'22px'}
      justifyContent={'space-between'}
      color={'brand.white'}
      mt={'80px'}
    >
      <Layout>
        <Flex
          w={'full'}
          gap={{ base: '20px', md: '0px', xl: '40px' }}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          {/* Section1: Company */}
          <Flex
            flexDir={'column'}
            gap={'12px'}
            w={{ base: '100%', md: 'calc(100%/3)' }}
          >
            <HStack cursor={'pointer'}>
              <Center w={'48px'} h={'48px'}>
                <MyImage
                  src={'/assets/images/scopeseeker-logo.png'}
                  alt={'secope seeker logo'}
                  width={42}
                  height={42}
                />
              </Center>

              <Flex direction={'column'} gap={'4px'}>
                <MyText
                  as={'heading'}
                  lineHeight={'shorter'}
                  color="brand.white"
                  title="Scope Seeker"
                />
                <MyText
                  as={'small'}
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
            <Flex direction={'column'} gap={'8px'}>
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
            justifyContent={'center'}
          >
            {/* Links Section */}
            <Center
              w={'50%'}
              justifyContent={{ base: 'flex-start', md: 'center' }}
            >
              <Flex flexDir={'column'} gap={'12px'} p={{ base: '0px', md: '16px' }}>
                <FooterHeading title={'Links'} />
                <FooterLink link={'/jobs'} title={'Find Jobs'} />
                <FooterLink link={'/company'} title={'Find Companies'} />
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
              <Flex flexDir={'column'} gap={'12px'} p={{ base: '0px', md: '16px' }}>
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
                <FooterLink
                  link={'/request-company'}
                  title={'Report an Issue'}
                />
              </Flex>
            </Center>
          </Flex>

          {/* Meet Us section */}
          <Flex
            flexDir={'column'}
            gap={'12px'}
            w={{ base: '100%', md: 'calc(100%/4)' }}
            p={{ base: '0px', md: '16px' }}
          >
            <FooterHeading title={'Meet Us'} />
            <MyText
              as={'span'}
              color="brand.white"
              title="Bhanpur, Ayodhya Bypass, Bhopal Madhya Pradesh, India"
            />
            <HStack spacing={0}>
              <MyText as="span" title="We" color="brand.white" />
              <MyText as="heading" title="💗" color="brand.white" />
              <MyText as="span" title="new friends" color="brand.white" />
            </HStack>
            <HStack py={'8px'}>
              <IconButton
                p={'8px'}
                aria-label="social-meida"
                color={'brand.primary'}
                icon={<MyIcon name={'instagram'} height="20" width="20" />}
              />
              <IconButton
                p={'8px'}
                aria-label="social-meida"
                color={'brand.primary'}
                icon={<MyIcon name={'linkedin'} height="20" width="20" />}
              />
              <IconButton
                p={'8px'}
                aria-label="social-meida"
                color={'brand.primary'}
                icon={<MyIcon name={'twitter'} height="20" width="20" />}
              />

              <IconButton
                p={'8px'}
                aria-label="social-meida"
                color={'brand.primary'}
                icon={<MyIcon name={'whatsapp'} height="20" width="20" />}
              />
            </HStack>
          </Flex>
        </Flex>

        {/* Bottom Copyright Sections */}
        <Flex
          py={'20px'}
          borderTop={'1px solid lightgray'}
          w={'full'}
          justifyContent={'space-between'}
          alignItems={'center'}
          color={'brand.white'}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <MyText
            as={'span'}
            title={`© 2023 Scope Seeker. All Right Reserved`}
            color="brand.white"
          />
          <MyText
            as={'span'}
            title={'Images Credit: Design by Freepik'}
            color="brand.white"
          />
        </Flex>
      </Layout>
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

interface IFooterLink extends IFooterHeading {
  link?: string;
}

const FooterLink = ({ title, link = '#' }: IFooterLink) => {
  return (
    <Link href={link}>
      <MyText title={title} as="span" color="brand.white" />
    </Link>
  );
};
