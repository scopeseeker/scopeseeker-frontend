'use client';
import {
  Layout,
  MainHeading,
  MyButton,
  MyDivider,
  MyIcon,
  MyImage,
  MyText,
} from '@/component';
import { jobCardFields } from '@/constant/constantFields';
import { MyJobCard } from '@/section-components';
import { Box, Center, HStack, Heading, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <Layout w={'full'}>
      <VStack alignItems={'flex-start'} gap={'72px'}>
        <MainHeading
          title="Dashboard"
          subTitle="Stay organized by monitoring saved jobs, applied jobs, and favorite companies all in one place."
          align={'start'}
        />
        <HStack w={'full'} alignItems={'start'}>
          {/* Left Part */}
          <VStack
            w={'20%'}
            display={{ base: 'none', lg: 'flex' }}
            px={{ xl: '12px' }}
            gap={'32px'}
            position={'sticky'}
            top={90}
          >
            <Center
              cursor={'pointer'}
              w={'full'}
              h={'60px'}
              borderRadius={'6px'}
              bg={'brand.primary'}
              gap={'4px'}
            >
              <MyIcon name="profile" strokeWidth="1.8" color="brand.white" />
              <MyText as="title" title="My Profile" color="brand.white" />
            </Center>
            <VStack w={'full'} gap={'8px'}>
              {[
                { name: 'Dashboard', icon: 'dashboard', href: '/' },
                { name: 'Helpful Resources', icon: 'tools', href: '/' },
                { name: 'Preferred Companies', icon: 'target', href: '/' },
                { name: 'Saved Jobs', icon: 'bookmarks', href: '/' },
                { name: 'Recommanded Jobs', icon: 'case', href: '/' },
              ].map((items, index) => {
                return (
                  <>
                    <Link
                      href={items.href}
                      style={{ width: '100%' }}
                      key={index}
                    >
                      <Center
                        w={'full'}
                        justifyContent={'flex-start'}
                        borderRadius={'8px'}
                        pl={{ xl: '16px' }}
                        py={'6px'}
                        gap={'4px'}
                        cursor={'pointer'}
                        _hover={{ bg: 'brand.aliceblue' }}
                      >
                        <MyIcon name={items.icon} width="22px" height="22px" />
                        <MyText as="span" title={items.name} />
                      </Center>
                    </Link>
                  </>
                );
              })}
            </VStack>

            <Center overflow={'hidden'} p={'10px'} pb={'0'} w={'full'}>
              <MyImage
                src={'/assets/images/plant.png'}
                alt="section"
                width={180}
                height={180}
              />
            </Center>
          </VStack>

          {/* Right Part */}
          <VStack width={{ base: '100%', lg: '80%' }}>
            <VStack w={{ base: '100%', lg: '90%' }} gap={'52px'}>
              {/* Hello Section */}
              <HStack
                w={'full'}
                h={'160px'}
                borderRadius={'12px'}
                justifyContent={'space-between'}
                bgGradient="linear(to-r, brand.aliceblue,brand.aliceblue, transparent, transparent)"
                p={'12px'}
                px={'32px'}
                position={'relative'}
              >
                <Box maxW={{ base: '100%', md: '50%' }}>
                  <Heading color={'brand.primary'}>Hello, Lokesh</Heading>
                  <MyText
                    as="span"
                    title={`Choose a job you love, and you'll never work.`}
                  />
                </Box>
                <Center
                  position={'absolute'}
                  right={0}
                  bottom={0}
                  display={'none'}
                >
                  <MyImage
                    src={'/assets/images/d.png'}
                    alt="homepage"
                    width={300}
                    height={300}
                  />
                </Center>
              </HStack>

              {/* Overview */}
              <VStack w={'full'} alignItems={'flex-start'} gap={'22px'}>
                <MyText as="heading" title="Overview" />
                <HStack gap={'12px'} flexWrap={'wrap'} spacing={0}>
                  {[
                    { count: '34', tag: 'Visited Jobs', icon: 'user' },
                    { count: '04', tag: 'Saved Jobs', icon: 'save' },
                    { count: '14', tag: 'Applied Jobs', icon: 'file' },
                    { count: '14', tag: 'Recommanded Jobs', icon: 'file' },
                  ].map((item, index) => {
                    return (
                      <>
                        <Center
                          key={index}
                          w={'230px'}
                          borderRadius={'8px'}
                          h={'80px'}
                          boxShadow={'0px 4px 6px rgba(0,0,0,0.1)'}
                          border={'1px solid'}
                          borderColor={'brand.lightgray'}
                          cursor={'pointer'}
                          // bg={'brand.aliceblue'}
                          borderRight={'5px solid'}
                          borderRightColor={'brand.primary'}
                          px={'12px'}
                          gap={'12px'}
                          justifyContent={'flex-start'}
                        >
                          <Center
                            w={'52px'}
                            h={'52px'}
                            borderRadius={'50%'}
                            bg={'brand.aliceblue'}
                          >
                            <MyIcon
                              name={item.icon}
                              width="30px"
                              height="30px"
                              // color="brand.white"
                            />
                          </Center>
                          <VStack spacing={0} alignItems={'flex-start'}>
                            <MyText as="heading" title={item.count} />
                            <MyText as="span" title={item.tag} />
                          </VStack>
                        </Center>
                      </>
                    );
                  })}
                </HStack>
              </VStack>
              <MyDivider />

              {/* Recommanded Jobs */}
              <VStack w={'full'} alignItems={'flex-start'} gap={'18px'}>
                <HStack
                  w={'full'}
                  justifyContent={'space-between'}
                  flexDir={{ base: 'column', sm: 'row' }}
                  alignItems={'flex-start'}
                  spacing={0}
                  gap={{ base: '10px', sm: '0px' }}
                >
                  <MyText as="heading" title="Recommanded Jobs" />
                  <MyButton title="View All" />
                </HStack>
                <HStack
                  w={'full'}
                  overflow={'scroll'}
                  gap={'14px'}
                  py={'18px'}
                  __css={{
                    '&::-webkit-scrollbar': {
                      height: '8px',
                    },
                  }}
                >
                  {jobCardFields.map((item, index) => {
                    return (
                      <MyJobCard
                        key={index}
                        companyIconLogo={item.companyIconLogo}
                        role={item.role}
                        companyName={item.companyName}
                        location={item.location}
                        jobType={item.jobType}
                        companyDesc={item.companyDesc}
                        flexShrink={0}
                        w={'49%'}
                      />
                    );
                  })}
                </HStack>
              </VStack>
              <MyDivider />

              {/* Top Company */}
              <VStack w={'full'} alignItems={'flex-start'} gap={'18px'}>
                <HStack
                  w={'full'}
                  justifyContent={'space-between'}
                  flexDir={{ base: 'column', sm: 'row' }}
                  alignItems={'flex-start'}
                  spacing={0}
                  gap={{ base: '10px', sm: '0px' }}
                >
                  <MyText as="heading" title="Top Companies" />
                  <MyButton title="View All" />
                </HStack>

                <HStack
                  w={'full'}
                  overflow={'scroll'}
                  gap={'14px'}
                  py={'18px'}
                  __css={{
                    '&::-webkit-scrollbar': {
                      height: '8px',
                    },
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
                    return (
                      <Center
                        key={index}
                        p={'18px'}
                        gap={'16px'}
                        flexDirection={'column'}
                        minW={'200px'}
                        maxW={'250px'}
                        h={'200px'}
                        _hover={{
                          borderColor: 'brand.primary',
                          boxShadow: '0px 0px 30px rgb(0,0,0,0.1)',
                        }}
                        borderRadius={'12px'}
                        border={'1px solid'}
                        borderColor={'brand.lightgray'}
                      >
                        <Center
                          w={'60px'}
                          h={'60px'}
                          borderRadius={'50%'}
                          p={'8px'}
                          bg={'brand.aliceblue'}
                        >
                          <MyImage
                            src={'/assets/images/company-logo/google.png'}
                            alt="company"
                            width={50}
                            height={50}
                          />
                        </Center>
                        <VStack spacing={0}>
                          <MyText as="title" title="Microsoft" />
                          <MyText
                            as="small"
                            title={`⭐ 43 Rating | 444 Review`}
                            textAlign={'center'}
                          />
                        </VStack>
                        <MyButton title="View Jobs" />
                      </Center>
                    );
                  })}
                </HStack>
              </VStack>
              <MyDivider />

              {/* Saved Jobs */}
              <VStack w={'full'} alignItems={'flex-start'} gap={'18px'}>
                <HStack
                  w={'full'}
                  justifyContent={'space-between'}
                  flexDir={{ base: 'column', sm: 'row' }}
                  alignItems={'flex-start'}
                  spacing={0}
                  gap={{ base: '10px', sm: '0px' }}
                >
                  <MyText as="heading" title="Saved Jobs" />
                  <MyButton title="View All" />
                </HStack>
                <HStack
                  w={'full'}
                  overflow={'scroll'}
                  gap={'14px'}
                  py={'18px'}
                  __css={{
                    '&::-webkit-scrollbar': {
                      height: '8px',
                    },
                  }}
                >
                  {jobCardFields.map((item, index) => {
                    return (
                      <MyJobCard
                        key={index}
                        companyIconLogo={item.companyIconLogo}
                        role={item.role}
                        companyName={item.companyName}
                        location={item.location}
                        jobType={item.jobType}
                        companyDesc={item.companyDesc}
                        flexShrink={0}
                        w={{ base: '100%', md: '48%', xl: '49%' }}
                      />
                    );
                  })}
                </HStack>
              </VStack>
              <MyDivider />

              {/* Blog Suggestion */}
              <VStack
                w={'full'}
                alignItems={'flex-start'}
                gap={'32px'}
                className="hello"
              >
                <HStack
                  w={'full'}
                  justifyContent={'space-between'}
                  flexDir={{ base: 'column', sm: 'row' }}
                  alignItems={'flex-start'}
                  spacing={0}
                  gap={{ base: '10px', sm: '0px' }}
                >
                  <MyText as="heading" title="Must Read Blog" />
                  <MyButton title="See More" />
                </HStack>
                <HStack
                  w={'full'}
                  overflow={'scroll'}
                  gap={'20px'}
                  __css={{
                    '&::-webkit-scrollbar': {
                      height: '8px',
                    },
                  }}
                  pb={'18px'}
                >
                  {[1, 2, 3, 4].map((item, index) => {
                    return (
                      <>
                        <Center
                          key={index}
                          w={{ base: '100%', sm: '48%', md: '48%' }}
                          borderRadius={'20px'}
                          minH={'100px'}
                          bg={'brand.white'}
                          border={'1px solid'}
                          borderColor={'brand.lightgray'}
                          justifyContent={'flex-start'}
                          p={'8px'}
                          gap={'18px'}
                          flexShrink={0}
                          boxShadow={'0px 0px 10px rgba(0, 0, 0, 0.1)'}
                          cursor={'pointer'}
                          _hover={{ borderColor: 'brand.primary' }}
                          flexDir={{ base: 'column', md: 'row' }}
                          alignItems={{ base: 'flex-start', md: 'initial' }}
                        >
                          <Center
                            w={{ base: 'full', md: '140px' }}
                            height={'100%'}
                            bg={'green.200'}
                            borderRadius={'20px'}
                            overflow={'hidden'}
                          >
                            <MyImage
                              alt="blog"
                              width={500}
                              height={500}
                              src={'/assets/images/blog.jpg'}
                            />
                          </Center>
                          <Box>
                            <MyText
                              as="title"
                              title="Frontend Development Guide"
                            />
                            <HStack>
                              <MyText
                                as="span"
                                title="Development"
                                color="brand.primary"
                                fontWeight={500}
                              />
                            </HStack>
                          </Box>
                        </Center>
                      </>
                    );
                  })}
                </HStack>
              </VStack>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </Layout>
  );
}
