'use client';
import { Layout, MyButton, MyIcon, MyImage, MyText } from '@/component';
import { MyJobCard } from '@/section-components';
import { Center, Grid, HStack, VStack } from '@chakra-ui/react';

export default function MoreJobs() {
  return (
    <>
      <VStack w={'full'}>
        {/* Header */}
        <Center
          w={'full'}
          h={'200px'}
          backgroundImage={
            'radial-gradient(circle at center center, transparent, #EBECFF), repeating-radial-gradient(circle at center center, brand.aliceblue, brand.aliceblue, 10px, transparent 28px, transparent 10px)'
          }
          position="relative"
          borderRadius={'10px'}
          px={'12px'}
          zIndex={'9'}
        >
          <Layout
            h={'100%'}
            justifyContent={'center'}
            display={'flex'}
            flexDirection={'column'}
            textAlign={'center'}
          >
            <MyText
              fontWeight={500}
              as="heading"
              title={`Full Stack Web Developer`}
            />
            <MyText as="span" title="Tata Consultancy Service" />
          </Layout>
        </Center>
        <Layout>
          {/* Intro Heading Logo Part */}
          <VStack
            w={'full'}
            alignItems={'flex-start'}
            mt={{ base: '-70px', md: '-82px' }}
            zIndex={'9999'}
            position="relative"
          >
            <Center
              w={{ base: '70px', md: '80px' }}
              h={{ base: '70px', md: '80px' }}
              bg={'brand.white'}
              border={'1.3px solid'}
              borderColor={'brand.lightgray'}
              borderRadius={'10px'}
            >
              <MyImage
                src={'/assets/images/company-logo/amazon.png'}
                alt={'company logo'}
                width={50}
                height={50}
              />
            </Center>
            <HStack
              w={'full'}
              justifyContent={'space-between'}
              flexDir={{ base: 'column', md: 'row' }}
              alignItems={'flex-start'}
              spacing={0}
              py={'16px'}
            >
              <VStack
                spacing={0}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}
                h={'100%'}
                marginBottom={'30px'}
              >
                <MyText as="title" title="Full Stack Web Developer" />
                <MyText as="small" title="Tata Consultancy Sevice" />
              </VStack>

              <HStack pb={'30px'} display={{ base: 'none', md: 'flex' }}>
                <MyButton title="Apply" px={'36px'} />
                <MyButton title="Save" variant="outline" px={'36px'} />
              </HStack>
            </HStack>
          </VStack>
          <HStack
            alignItems={'flex-start'}
            gap={'32px'}
            w={'100%'}
            flexDirection={{ base: 'column', md: 'row' }}
            spacing={0}
          >
            {/* Left Part */}
            <VStack
              w={{ base: '100%', md: '70%' }}
              alignItems={'flex-start'}
              gap={'32px'}
            >
              {/* Quick Info Div*/}
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
                  <MyIcon name="job" />

                  <VStack spacing={0} alignItems={'flex-start'}>
                    <MyText
                      as="small"
                      title="Experience"
                      color={'brand.darkgray'}
                    />
                    <MyText as="span" title="Minumum 1 year" />
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
                  <MyIcon name="instagram" />

                  <VStack spacing={0} alignItems={'flex-start'}>
                    <MyText as="small" title="Type" color={'brand.darkgray'} />
                    <MyText as="span" title="Full Time" />
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
                  <MyIcon name="job" />

                  <VStack spacing={0} alignItems={'flex-start'}>
                    <MyText
                      as="small"
                      title="Location"
                      color={'brand.darkgray'}
                    />
                    <MyText as="span" title="Mumbai" />
                  </VStack>
                </Center>
              </HStack>

              {/* Required Skills part*/}
              <VStack alignItems={'flex-start'} gap={'10px'}>
                <MyText as="heading" title="Required Skills" />

                <HStack
                  flexWrap={'wrap'}
                  gap={'6px'}
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
                        <MyText
                          as="small"
                          title={item}
                          color="brand.darkgray"
                        />
                      </Center>
                    );
                  })}
                </HStack>
              </VStack>

              {/* Overview */}
              <VStack alignItems={'flex-start'}>
                <MyText as="heading" title="Overview" />
                <MyText
                  as="p"
                  title="Google is a multinational technology company that specializes in Internet-related services and products. It was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Google mission is to organize the world information and make it universally accessible and useful."
                />
              </VStack>

              {/* Job Description */}
              <VStack alignItems={'flex-start'}>
                <MyText as="heading" title="Job Description" />

                <VStack alignItems={'flex-start'}>
                  {[
                    'We are seeking a talented Software Engineer to join our team. The ideal candidate will have experience in developing high-quality software solutions and a passion for cutting-edge technologies.',
                    'We are looking for a motivated Marketing Coordinator to join our marketing team. The ideal candidate will be responsible for implementing marketing strategies, coordinating campaigns, and analyzing market data.',
                    'We are hiring a Customer Service Representative to provide exceptional service to our clients. The successful candidate will handle inquiries, resolve complaints, and ensure customer satisfaction.',
                  ].map((item, key) => {
                    return (
                      <HStack
                        gap={'6px'}
                        spacing={0}
                        alignItems={'flex-start'}
                        key={key}
                      >
                        <Center mt={'5px'}>
                          <MyIcon
                            name="borderCircle"
                            width="13px"
                            height="13px"
                            strokeWidth="4"
                            color="brand.primary"
                          />
                        </Center>
                        <MyText as="p" title={item} />
                      </HStack>
                    );
                  })}
                </VStack>
              </VStack>

              {/* Key Responsibility */}
              <VStack alignItems={'flex-start'}>
                <MyText as="heading" title="Key Responsibilities" />

                <VStack alignItems={'flex-start'}>
                  {[
                    'Design and implement software applications using programming languages such as Python and Java',
                    'Collaborate with cross-functional teams to gather and analyze requirements',
                    'Write clean, efficient, and maintainable code',
                    'Conduct thorough testing and debugging of applications',
                    'Participate in code reviews and provide constructive feedback',
                    'Stay up-to-date with industry trends and technologies',
                    'Assist in troubleshooting and resolving software defects',
                    'Document software specifications and user manuals',
                  ].map((item, key) => {
                    return (
                      <HStack
                        gap={'6px'}
                        spacing={0}
                        alignItems={'flex-start'}
                        key={key}
                      >
                        <Center mt={'5px'}>
                          <MyIcon
                            name="borderCircle"
                            width="13px"
                            height="13px"
                            strokeWidth="4"
                            color="brand.primary"
                          />
                        </Center>
                        <MyText as="p" title={item} />
                      </HStack>
                    );
                  })}
                </VStack>
              </VStack>

              {/* Buttons */}
              <HStack w={'full'}>
                <MyButton
                  title="Apply"
                  py={{ base: '24px', md: '18px' }}
                  w={'100%'}
                />
                <MyButton
                  w={'100%'}
                  display={{ base: 'flex', md: 'none' }}
                  title="Save"
                  variant="outline"
                  py={'24px'}
                />
              </HStack>

              {/* Share Job */}
              <HStack w={'full'} gap={'10px'}>
                <MyText as="title" title="Share this job:" />
                <HStack>
                  <MyIcon name="whatsapp" cursor={'pointer'} />
                  <MyIcon name="telegram" cursor={'pointer'} />
                  <MyIcon name="instagram" cursor={'pointer'} />
                  <MyIcon name="facebook" cursor={'pointer'} />
                  <MyIcon name="linkedin" cursor={'pointer'} />
                </HStack>
              </HStack>
            </VStack>

            {/* Right Part */}
            <VStack
              w={{ base: '100%', md: '30%' }}
              borderRadius={'4px'}
              h={'160vh'}
              pl={'12px'}
            >
              <Center
                px={'12px'}
                color={'brand.white'}
                bg={'brand.primary'}
                w={'100%'}
                h={'250px'}
                gap={'12px'}
                borderRadius={'20px'}
                flexDirection={'column'}
                alignItems={'flex-start'}
              >
                <MyText
                  as="title"
                  color="currentColor"
                  title="Join Our Tech Job Updates WhatsApp Group!"
                />
                <MyText
                  color="currentColor"
                  as="span"
                  title="Stay ahead in your tech career with our exclusive WhatsApp group. Get instant job updates, curated tech news, career tips, and network with industry professionals."
                />
                <MyButton
                  title="Join Now"
                  bg={'brand.white'}
                  color={'green.400'}
                  px={'42px'}
                  fontWeight={600}
                />
              </Center>
            </VStack>
          </HStack>

          {/* Similar Jobs */}
          <VStack w={'full'} alignItems={'flex-start'} gap={'20px'} pt={'40px'}>
            <MyText as="heading" title="Similar Jobs" />

            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(2, 1fr)',
              }}
              gap={{ base: 6, lg: 4, xl: 6 }}
              mx={'auto'}
              pt={'25px'}
              width={'100%'}
            >
              <MyJobCard
                companyIconLogo={'/assets/images/company-logo/bookmyshow.png'}
                role={'Frontend Developer'}
                companyName={'Tata Consultancy Service'}
                location={'Bhopal, Madhaya Pradesh'}
                jobType={[
                  'Full Time',
                  'Part Time',
                  'Internship',
                  'Startup',
                  'Indian MNC',
                ]}
                companyDesc="UX designers measure and optimize applications to improve ease of use
  (usability), and create the best user experience by exploring many
  diffrent approaches to solve end's-user problems"
              />
              <MyJobCard
                companyIconLogo={'/assets/images/company-logo/bookmyshow.png'}
                role={'Frontend Developer'}
                companyName={'Tata Consultancy Service'}
                location={'Bhopal, Madhaya Pradesh'}
                jobType={[
                  'Full Time',
                  'Part Time',
                  'Internship',
                  'Startup',
                  'Indian MNC',
                ]}
                companyDesc="UX designers measure and optimize applications to improve ease of use
  (usability), and create the best user experience by exploring many
  diffrent approaches to solve end's-user problems"
              />

              <MyJobCard
                companyIconLogo={'/assets/images/company-logo/bookmyshow.png'}
                role={'Frontend Developer'}
                companyName={'Tata Consultancy Service'}
                location={'Bhopal, Madhaya Pradesh'}
                jobType={[
                  'Full Time',
                  'Part Time',
                  'Internship',
                  'Startup',
                  'Indian MNC',
                ]}
                companyDesc="UX designers measure and optimize applications to improve ease of use
  (usability), and create the best user experience by exploring many
  diffrent approaches to solve end's-user problems"
              />

              <MyJobCard
                companyIconLogo={'/assets/images/company-logo/bookmyshow.png'}
                role={'Frontend Developer'}
                companyName={'Tata Consultancy Service'}
                location={'Bhopal, Madhaya Pradesh'}
                jobType={[
                  'Full Time',
                  'Part Time',
                  'Internship',
                  'Startup',
                  'Indian MNC',
                ]}
                companyDesc="UX designers measure and optimize applications to improve ease of use
  (usability), and create the best user experience by exploring many
  diffrent approaches to solve end's-user problems"
              />
            </Grid>
          </VStack>
        </Layout>
      </VStack>
    </>
  );
}
