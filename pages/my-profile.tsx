import { Layout, MyButton, MyIcon, MyImage, MyText } from '@/component';
import AddBoxTemplete from '@/section-components/edit-profile/templates/AddBoxTemplate';
import { Box, Center, HStack, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';

export default function Profile() {
  return (
    <>
      <Head>
        <title>My Profile| Scope Seeker</title>
      </Head>
      <Layout>
        {/* Main VStack Box */}
        <VStack gap={'34px'} px={{ base: '0px', md: '32px' }}>
          {/* Profile and Detail section */}
          <Center
            bg={'brand.aliceblue'}
            borderWidth={'1px'}
            borderColor={'brand.darkgray'}
            borderRadius={'12px'}
            py={'18px'}
            px={{ base: '20px', md: '32px' }}
            justifyContent={'space-between'}
            w={'full'}
            flexDir={{ base: 'column', md: 'row' }}
            gap={{ base: '40px', md: 'initial' }}
          >
            {/* Profile Section */}
            <VStack gap={'12px'}>
              <Center
                w={'180px'}
                h={'180px'}
                bg={'brand.white'}
                borderRadius={'50%'}
                border={'2px solid'}
                borderColor={'brand.primary'}
                overflow={'hidden'}
              >
                <MyImage
                  src={'/assets/images/p12.jpg'}
                  alt="profile"
                  width={180}
                  height={180}
                />
              </Center>
              <MyButton title="Edit Picture" />
            </VStack>

            {/* Mid Section */}
            <VStack
              alignItems={'flex-start'}
              width={{ base: 'full', md: '45%' }}
              px={{ base: '0px', md: '25px' }}
            >
              <MyText title="Abhishek Kumar" as={'heading'} />
              <HStack
                w={'full'}
                py={'8px'}
                justifyContent={'space-between'}
                alignItems={'flex-start'}
                spacing={0}
                flexDir={{ base: 'column', lg: 'initial' }}
                gap={{ base: '10px', lg: 'initial' }}
              >
                <VStack alignItems={'flex-start'}>
                  <HStack>
                    <MyIcon name={'location'} />
                    <MyText title="Bhopal" as={'span'} />
                  </HStack>

                  <HStack>
                    <MyIcon name={'case'} />
                    <MyText title="Freshers" as={'span'} />
                  </HStack>
                </VStack>

                <VStack alignItems={'flex-start'}>
                  <HStack>
                    <MyIcon name={'phone'} />
                    <MyText title=" +91 9999999999" as={'span'} />
                    <MyIcon name={'verifyOutline'} color="green" />
                  </HStack>

                  <HStack>
                    <MyIcon name={'gmail'} />
                    <MyText title="exapmle@gmail.com" as={'span'} />
                    <MyIcon name={'verifyOutline'} color="green" />
                  </HStack>
                </VStack>
              </HStack>

              <VStack alignItems={'flex-start'} w={'full'} py={'8px'}>
                <MyText title="Profile Complete" as={'title'} />
                <HStack w={'full'}>
                  <Box
                    w={'full'}
                    h={'10px'}
                    borderRadius={'20px'}
                    border={'1px solid '}
                    borderColor={'brand.lightgray'}
                    overflow={'hidden'}
                  >
                    <Box
                      w={'40%'}
                      h={'full'}
                      bg={'brand.primary'}
                      borderRadius={'20px'}
                    ></Box>
                  </Box>
                  <MyText title="40%" as={'span'} />
                </HStack>
              </VStack>
            </VStack>
            {/* Right Section */}

            <VStack gap={'20px'} display={{ base: 'initial', md: 'flex' }}>
              <Center
                bg={'brand.white'}
                borderRadius={'12px'}
                px={'22px'}
                py={'10px'}
                borderWidth={'1.5px'}
                borderColor={'brand.lighgray'}
                display={{ base: 'none', md: 'initial' }}
              >
                <MyText
                  title="14 Pending Actions"
                  as={'heading'}
                  textAlign={'center'}
                />
              </Center>

              <Center
                gap={'10px'}
                cursor={'pointer'}
                bg={'brand.primary'}
                px={'20px'}
                py={'10px'}
                borderRadius={'10px'}
                borderWidth={'1px'}
                borderColor={'brand.lightgray'}
              >
                <Link href={'/edit-profile'}>
                  <MyIcon name="edit" color="brand.white" />
                </Link>
                <MyText
                  as="link"
                  title="Edit Full Profile"
                  color="brand.white"
                />
              </Center>
            </VStack>
          </Center>

          {/* Quick section */}
          <Center
            borderRadius={'50px'}
            bg={'brand.primary'}
            color={'brand.white'}
            justifyContent={'space-between'}
            px={'32px'}
            py={'12px'}
            gap={'32px'}
            borderWidth={'1px'}
            display={{ base: 'none', md: 'flex' }}
          >
            {[
              'Basic Details',
              'Resume',
              'Skills',
              'Education',
              'Work Experience',
            ].map((item, key) => {
              return (
                <>
                  <MyText
                    key={key}
                    cursor={'pointer'}
                    as="span"
                    title={item}
                    color="currentColor"
                  />
                  <VStack
                    h={'20px'}
                    w={'0px'}
                    bg={'brand.white'}
                    borderLeft={'1px solid'}
                    spacing={0}
                    borderColor={'brand.white'}
                  ></VStack>
                </>
              );
            })}
            <MyText
              cursor={'pointer'}
              as="span"
              title={'Social Links'}
              color="currentColor"
            />
          </Center>

          <VStack gap={'72px'}>
            {/* personal detail */}
            <VStack w={'full'} alignItems={'flex-start'} gap={'12px'}>
              <HStack gap={'6px'}>
                <MyText title="Personal Details" as={'heading'} />
                <Link href={'/edit-profile'}>
                  <MyIcon name="edit" />
                </Link>
              </HStack>
              <HStack
                bg={'brand.aliceblue'}
                borderRadius={'10px'}
                flexDir={{ base: 'column', md: 'row' }}
                borderRight={'12px'}
                overflow={'hidden'}
                gap={0}
                spacing={0}
                border={'1px solid'}
                borderColor={'brand.lightgray'}
              >
                <Center
                  gap={'12px'}
                  h={'full'}
                  w={{ base: '70vw', sm: '50vw', md: '170px', lg: '200px' }}
                  py={'18px'}
                  justifyContent={{ base: 'flex-start', md: 'center' }}
                  px={{ base: '32px', md: '10px' }}
                >
                  <MyIcon name="calenderTime" />

                  <VStack spacing={0} alignItems={'flex-start'}>
                    <MyText
                      as="small"
                      title="Date of Birth"
                      color={'brand.darkgray'}
                    />
                    <MyText as="span" title="14 April 2002" />
                  </VStack>
                </Center>
                <Center
                  gap={'12px'}
                  h={'full'}
                  w={{ base: '70vw', sm: '50vw', md: '170px', lg: '200px' }}
                  py={'18px'}
                  justifyContent={{ base: 'flex-start', md: 'center' }}
                  px={{ base: '32px', md: '10px' }}
                  borderX={{ base: '0px solid', md: '1px solid' }}
                  borderY={{ base: '1px solid', md: '0px solid' }}
                  borderColor={{
                    base: 'brand.lightgray',
                    md: 'brand.lightgray',
                  }}
                >
                  <MyIcon name="global" />

                  <VStack spacing={0} alignItems={'flex-start'}>
                    <MyText
                      as="small"
                      title="Country"
                      color={'brand.darkgray'}
                    />
                    <MyText as="span" title="India" />
                  </VStack>
                </Center>
                <Center
                  gap={'12px'}
                  h={'full'}
                  w={{ base: '70vw', sm: '50vw', md: '170px', lg: '200px' }}
                  py={'18px'}
                  justifyContent={{ base: 'flex-start', md: 'center' }}
                  px={{ base: '32px', md: '10px' }}
                >
                  <MyIcon name="company" />

                  <VStack spacing={0} alignItems={'flex-start'}>
                    <MyText as="small" title="City" color={'brand.darkgray'} />
                    <MyText as="span" title="Bhopal" />
                  </VStack>
                </Center>

                <Center
                  gap={'12px'}
                  h={'full'}
                  w={{ base: '70vw', sm: '50vw', md: '170px', lg: '200px' }}
                  py={'18px'}
                  justifyContent={{ base: 'flex-start', md: 'center' }}
                  px={{ base: '32px', md: '10px' }}
                  borderX={{ base: '0px solid', md: '1px solid' }}
                  borderY={{ base: '1px solid', md: '0px solid' }}
                  borderColor={{
                    base: 'brand.lightgray',
                    md: 'brand.lightgray',
                  }}
                >
                  <MyIcon name="building" />

                  <VStack spacing={0} alignItems={'flex-start'}>
                    <MyText as="small" title="State" color={'brand.darkgray'} />
                    <MyText as="span" title="Madhya Pradesh" />
                  </VStack>
                </Center>
              </HStack>
            </VStack>

            {/* summary section */}
            <VStack
              w={'full'}
              borderRadius={'8px'}
              alignItems={'flex-start'}
              gap={'12px'}
            >
              <HStack gap={'6px'}>
                <MyText title="Summary" as={'heading'} />
                <Link href={'/edit-profile'}>
                  <MyIcon name="edit" />
                </Link>
              </HStack>
              <MyText
                title="The IT professional is highly skilled in software development, network administration, system maintenance, and cybersecurity. Proficient in programming languages like Java and Python, they have developed web applications using frameworks such as Django and Ruby on Rails. Their expertise extends to configuring and managing enterprise-level networks, implementing robust security measures. With a proven track record of meeting project deadlines, they possess strong problem-solving and communication skills. Committed to staying updated with the latest technologies, this proactive IT professional brings a comprehensive skill set, adaptability, and a proactive approach to contribute effectively to any IT team or project."
                as={'small'}
              />
            </VStack>

            {/* Resume section */}
            <VStack
              w={'full'}
              alignItems={'flex-start'}
              borderRadius={'8px'}
              gap={'12px'}
            >
              <HStack gap={'6px'}>
                <MyText title="Resume" as={'heading'} />
                <Link href={'/edit-profile'}>
                  <MyIcon name="edit" />
                </Link>
              </HStack>
              <HStack
                w={{ base: '100%', md: '45%' }}
                justifyContent={'space-between'}
                borderWidth={'1.5px'}
                borderColor={'brand.lightgray'}
                p={'10px'}
                borderRadius={'10px'}
              >
                <MyText title="Lokesh.pdf" as={'small'} />

                <Center
                  w={'30px'}
                  h={'30px'}
                  borderRadius={'50%'}
                  bg={'red'}
                  cursor={'pointer'}
                >
                  <MyIcon name={'delete'} color="brand.white" strokeWidth="2" />
                </Center>
              </HStack>
            </VStack>

            {/* Skills section */}
            <VStack
              alignItems={'flex-start'}
              borderRadius={'8px'}
              w={'full'}
              gap={'12px'}
            >
              <HStack gap={'6px'}>
                <MyText title="Skills" as={'heading'} />
                <Link href={'/edit-profile'}>
                  <MyIcon name="edit" />
                </Link>
              </HStack>

              <HStack
                flexWrap={'wrap'}
                gap={'10px'}
                spacing={0}
                maxW={{ base: '100%', md: '80%' }}
              >
                {[
                  'JavaScript',
                  'React.js',
                  'Angular.js',
                  'Node.js',
                  'MongdoDB',
                  'Express.js',
                  'Node.js',
                  'MongdoDB',
                  'Express.js',
                  'Node.js',
                  'MongdoDB',
                  'Express.js',
                ].map((item, key) => {
                  return (
                    <Center
                      key={key}
                      borderWidth={'1px'}
                      borderColor={'brand.darkgray'}
                      px={'10px'}
                      py={'3px'}
                      borderRadius={'6px'}
                      bg={'brand.offwhite'}
                    >
                      <MyText as="small" title={item} color="brand.darkgray" />
                    </Center>
                  );
                })}
              </HStack>
            </VStack>

            {/* Education section */}
            <VStack
              w={'full'}
              spacing={0}
              alignItems={'flex-start'}
              borderRadius={'8px'}
            >
              <HStack gap={'6px'}>
                <MyText title="Education" as={'heading'} />
                <Link href={'/edit-profile'}>
                  <MyIcon name="edit" />
                </Link>
              </HStack>
              <VStack pt={'20px'} w={'full'} gap={'20px'}>
                <AddBoxTemplete
                  role="Sagar Institute of Research & Technology (SIRT), Bhopal "
                  companyImage="/assets/images/company-logo/amazon.png"
                  companyName="B.Tech"
                  period="2020 - 2024"
                />

                <AddBoxTemplete
                  role="Sagar Institute of Research & Technology (SIRT), Bhopal "
                  companyImage="/assets/images/company-logo/amazon.png"
                  companyName="B.Tech"
                  period="2020 - 2024"
                />
              </VStack>
            </VStack>

            {/* work */}

            <VStack
              w={'full'}
              spacing={0}
              alignItems={'flex-start'}
              borderRadius={'8px'}
            >
              <HStack gap={'6px'}>
                <MyText title="Work Experience" as={'heading'} />
                <Link href={'/edit-profile'}>
                  <MyIcon name="edit" />
                </Link>
              </HStack>
              <VStack pt={'20px'} w={'full'} gap={'20px'}>
                <AddBoxTemplete
                  role="Full Stack Web Developer"
                  companyImage="/assets/images/company-logo/amazon.png"
                  companyName="Align Essential"
                  period="Jan 18, 2023 - Feb 28, 2023"
                />

                <AddBoxTemplete
                  role="Full Stack Web Developer"
                  companyImage="/assets/images/company-logo/amazon.png"
                  companyName="Align Essential"
                  period="Jan 18, 2023 - Feb 28, 2023"
                />
              </VStack>
            </VStack>

            {/* social */}

            <VStack
              w={'full'}
              alignItems={'flex-start'}
              borderRadius={'8px'}
              gap={'12px'}
            >
              <HStack gap={'6px'}>
                <MyText title="Social Links" as={'heading'} />
                <Link href={'/edit-profile'}>
                  <MyIcon name="edit" />
                </Link>
              </HStack>
              <HStack gap={'10px'} flexWrap={'wrap'} spacing={0}>
                <Center
                  gap={'5px'}
                  borderWidth={'1.4px'}
                  borderColor={'brand.lightgray'}
                  borderRadius={'10px'}
                  px={'10px'}
                  py={'5px'}
                  _hover={{
                    bg: 'brand.primary',
                    color: 'brand.white',
                    borderColor: 'brand.primary',
                  }}
                  cursor={'pointer'}
                >
                  <MyIcon
                    name="github"
                    strokeWidth="1.2"
                    color="currentColor"
                  />
                  <MyText as="link" title="GitHub" color="currentColor" />
                </Center>

                <Center
                  gap={'5px'}
                  borderWidth={'1.4px'}
                  borderColor={'brand.lightgray'}
                  borderRadius={'10px'}
                  px={'10px'}
                  py={'5px'}
                  _hover={{
                    bg: 'brand.primary',
                    color: 'brand.white',
                    borderColor: 'brand.primary',
                  }}
                  cursor={'pointer'}
                >
                  <MyIcon
                    name="linkedin"
                    strokeWidth="1.2"
                    color="currentColor"
                  />
                  <MyText as="link" title="Linkedin" color="currentColor" />
                </Center>

                <Center
                  gap={'5px'}
                  borderWidth={'1.4px'}
                  borderColor={'brand.lightgray'}
                  borderRadius={'10px'}
                  px={'10px'}
                  py={'5px'}
                  _hover={{
                    bg: 'brand.primary',
                    color: 'brand.white',
                    borderColor: 'brand.primary',
                  }}
                  cursor={'pointer'}
                >
                  <MyIcon
                    name="instagram"
                    strokeWidth="1.2"
                    color="currentColor"
                  />
                  <MyText as="link" title="Instagram" color="currentColor" />
                </Center>

                <Center
                  gap={'5px'}
                  borderWidth={'1.4px'}
                  borderColor={'brand.lightgray'}
                  borderRadius={'10px'}
                  px={'10px'}
                  py={'5px'}
                  _hover={{
                    bg: 'brand.primary',
                    color: 'brand.white',
                    borderColor: 'brand.primary',
                  }}
                  cursor={'pointer'}
                >
                  <MyIcon
                    name="leetcode"
                    strokeWidth="1.2"
                    color="currentColor"
                  />
                  <MyText as="link" title="LeetCode" color="currentColor" />
                </Center>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </Layout>
    </>
  );
}
