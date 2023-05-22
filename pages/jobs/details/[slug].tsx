import { Layout, MyButton, MyImage, MyJobCard, MyText } from '@/component';
import { Box, Center, HStack, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function DynamicPage() {
  const router = useRouter();
  const {
    query: { slug },
  } = router;
  return (
    <>
      <Head>
        <title>Job Details | Scope Seeker</title>
      </Head>

      <VStack w={'full'} px={'32px'} py={'62px'}>
        <Center
          w={'full'}
          h={'30vh'}
          backgroundImage={
            'radial-gradient(circle at center center, transparent, #EBECFF), repeating-radial-gradient(circle at center center, brand.aliceblue, brand.aliceblue, 1px, transparent 28px, transparent 1px)'
          }
          position="relative"
          borderRadius={'10px'}
        >
          <VStack spacing={0}>
            <MyText as="heading" title="Full Stack Web Developer" />
            <MyText as="span" title="Tata Consultancy Service" />
          </VStack>

          <Center
            h={'80px'}
            w={'80px'}
            bg={'brand.semiblack'}
            position={'absolute'}
            top={'150px'}
            left={'50px'}
            borderRadius={'5px'}
          >
            <MyImage
              src={'/assets/images/company-logo/google.png'}
              alt={'company logo'}
              width={50}
              height={50}
            />
          </Center>
        </Center>

        <Layout>
          <VStack w={'full'} alignItems={'flex-start'}>
            <HStack w={'full'} pr={'8px'} mt={'-36px'}>
              <HStack
                width={'100%'}
                justifyContent={'flex-end'}
                marginTop={'30px'}
              >
                <Center
                  w={'32px'}
                  h={'32px'}
                  bg={'red.300'}
                  borderRadius={'10px'}
                ></Center>
                <Center
                  w={'32px'}
                  h={'32px'}
                  bg={'red.300'}
                  borderRadius={'10px'}
                ></Center>
                <Center
                  w={'32px'}
                  h={'32px'}
                  bg={'red.300'}
                  borderRadius={'10px'}
                ></Center>
              </HStack>
            </HStack>
            <HStack w={'full'} justifyContent={'space-between'}>
              <VStack
                spacing={0}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}
                h={'100%'}
                marginBottom={'30px'}
              >
                <MyText as="title" title="Full Stack Web Developer" />
                <MyText as="st" title="Tata Consultancy Sevice" />
              </VStack>

              <HStack pb={'30px'}>
                <Center
                  w={'112px'}
                  borderRadius={'20px'}
                  h={'36px'}
                  bg={'brand.lightgray'}
                >
                  <MyText as="span" fontWeight={500} title="Save" />
                </Center>
                <Center
                  w={'112px'}
                  borderRadius={'20px'}
                  h={'36px'}
                  bg={'brand.primary'}
                >
                  <MyText
                    as="span"
                    color="brand.white"
                    fontWeight={500}
                    title="Apply"
                  />
                </Center>
              </HStack>
            </HStack>

            <HStack alignItems={'flex-start'} gap={'24px'}>
              {/* Left Psrt */}
              <VStack w={'70%'} alignItems={'flex-start'} gap={'30px'}>
                {/* Experiece Div Start */}

                <HStack h={'80px'} bg={'brand.aliceblue'} borderRadius={'10px'}>
                  <Center
                    gap={3}
                    borderRight={'1px'}
                    borderColor={'brand.lightgray'}
                    h={'full'}
                    w={'180px'}
                  >
                    <Center>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon"
                        viewBox="0 0 512 512"
                        width={'25px'}
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                          d="M32 192L256 64l224 128-224 128L32 192z"
                        />
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                          d="M112 240v128l144 80 144-80V240M480 368V192M256 320v128"
                        />
                      </svg>
                    </Center>

                    <VStack spacing={0} alignItems={'flex-start'}>
                      <MyText
                        as="small"
                        title="Experience"
                        color={'gray.500'}
                      />
                      <MyText as="st" title="Minumum 1 year" />
                    </VStack>
                  </Center>

                  <Center
                    gap={2}
                    borderRight={'1px'}
                    borderColor={'brand.lightgray'}
                    h={'full'}
                    w={'150px'}
                    pr={'10px'}
                  >
                    <Center>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon"
                        viewBox="0 0 512 512"
                        width={'25px'}
                      >
                        <path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" />
                        <path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" />
                      </svg>
                    </Center>

                    <VStack spacing={0} alignItems={'flex-start'}>
                      <MyText as="small" title="Type" color={'gray.500'} />
                      <MyText as="st" title="Full Type" />
                    </VStack>
                  </Center>

                  <Center gap={3} pr={'10px'} h={'full'} w={'150px'}>
                    <Center>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon"
                        viewBox="0 0 512 512"
                        width={'25px'}
                      >
                        <path
                          d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                        />
                        <circle
                          cx="256"
                          cy="192"
                          r="48"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                        />
                      </svg>
                    </Center>

                    <VStack spacing={0} alignItems={'flex-start'}>
                      <MyText as="small" title="Location" color={'gray.500'} />
                      <MyText as="st" title="Bengluru" />
                    </VStack>
                  </Center>

                  {/* <Center gap={3} borderRight={'1px'} borderColor={'brand.lightgray'} h={'full'} pr={'20px'}>
                <Center>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                    width={'30px'}
                  >
                    <path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" />
                    <path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" />
                  </svg>
                </Center>

                <VStack spacing={0}>
                  <MyText as="span" title="Type" />
                  <MyText as="st" title="Full Type" />
                </VStack>
              </Center> */}
                  {/* <Center gap={3} h={'full'} pr={'20px'}>
                <Center>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                    width={'30px'}
                  >
                    <path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" />
                    <path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" />
                  </svg>
                </Center>

                <VStack spacing={0}>
                  <MyText as="span" title="Location" />
                  <MyText as="st" title="New Delhi" />
                </VStack>
              </Center> */}
                </HStack>

                {/* Required Skills part*/}
                <VStack alignItems={'flex-start'} pt={'30px'}>
                  <MyText as="heading" title="Required Skills" />

                  <HStack>
                    <Center
                      bg={'brand.primary'}
                      px={'10px'}
                      py={'3px'}
                      borderRadius={'3px'}
                    >
                      <MyText as="st" title="JavaScript" color="brand.white" />
                    </Center>

                    <Center
                      bg={'brand.primary'}
                      px={'10px'}
                      py={'3px'}
                      borderRadius={'3px'}
                    >
                      <MyText as="st" title="ReactJS" color="brand.white" />
                    </Center>

                    <Center
                      bg={'brand.primary'}
                      px={'10px'}
                      py={'3px'}
                      borderRadius={'3px'}
                    >
                      <MyText as="st" title="TypeScript" color="brand.white" />
                    </Center>

                    <Center
                      bg={'brand.primary'}
                      px={'10px'}
                      py={'3px'}
                      borderRadius={'3px'}
                    >
                      <MyText as="st" title="NextJs" color="brand.white" />
                    </Center>
                  </HStack>
                </VStack>

                {/* Overview */}
                <VStack alignItems={'flex-start'}>
                  <MyText as="heading" title="Overview" />
                  <Box w={'85%'}>
                    <MyText
                      as="span"
                      title="Google is a multinational technology company that specializes in Internet-related services and products. It was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Google mission is to organize the world information and make it universally accessible and useful."
                    />
                  </Box>
                </VStack>

                {/* Job Description */}
                <VStack alignItems={'flex-start'}>
                  <MyText as="heading" title="Job Description" />

                  <VStack w={'full'} alignItems={'flex-start'}>
                    <HStack>
                      <Box
                        h={'10px'}
                        w={'10px'}
                        border={'2px'}
                        borderRadius={'50px'}
                        borderColor={'brand.primary'}
                      ></Box>
                      <MyText
                        as="span"
                        title="Designing, coding, and modifying websites and web applications from layout to functionality, following best practices and industry standards."
                      />
                    </HStack>

                    <HStack>
                      <Box
                        h={'10px'}
                        w={'10px'}
                        border={'2px'}
                        borderRadius={'50px'}
                        borderColor={'brand.primary'}
                      ></Box>
                      <MyText
                        as="span"
                        title="Collaborating with cross-functional teams to gather and define project requirements and specifications."
                      />
                    </HStack>

                    <HStack>
                      <Box
                        h={'10px'}
                        w={'10px'}
                        border={'2px'}
                        borderRadius={'50px'}
                        borderColor={'brand.primary'}
                      ></Box>
                      <MyText
                        as="span"
                        title="Developing user-facing features and building efficient, reusable, and scalable code."
                      />
                    </HStack>

                    <HStack>
                      <Box
                        h={'10px'}
                        w={'10px'}
                        border={'2px'}
                        borderRadius={'50px'}
                        borderColor={'brand.primary'}
                      ></Box>
                      <MyText
                        as="span"
                        title="Implementing front-end interfaces using HTML, CSS, and JavaScript frameworks like React, Angular, or Vue.js."
                      />
                    </HStack>

                    <HStack>
                      <Box
                        h={'10px'}
                        w={'10px'}
                        border={'2px'}
                        borderRadius={'50px'}
                        borderColor={'brand.primary'}
                      ></Box>
                      <MyText
                        as="span"
                        title="Creating and integrating server-side APIs and web services using technologies such as Node.js, Python, or PHP."
                      />
                    </HStack>
                  </VStack>
                </VStack>

                {/* Key Responsibility */}
                <VStack alignItems={'flex-start'}>
                  <MyText as="heading" title="Key Responsibility" />

                  <VStack w={'full'} alignItems={'flex-start'}>
                    <HStack>
                      <Box
                        h={'10px'}
                        w={'10px'}
                        border={'2px'}
                        borderRadius={'50px'}
                        borderColor={'brand.primary'}
                      ></Box>
                      <MyText
                        as="span"
                        title="Develop and maintain web applications, ensuring high-quality and efficient code across the full stack."
                      />
                    </HStack>

                    <HStack>
                      <Box
                        h={'10px'}
                        w={'10px'}
                        border={'2px'}
                        borderRadius={'50px'}
                        borderColor={'brand.primary'}
                      ></Box>
                      <MyText
                        as="span"
                        title="Collaborate with the development team to gather requirements and translate them into technical specifications."
                      />
                    </HStack>

                    <HStack>
                      <Box
                        h={'10px'}
                        w={'10px'}
                        border={'2px'}
                        borderRadius={'50px'}
                        borderColor={'brand.primary'}
                      ></Box>
                      <MyText
                        as="span"
                        title="Design and implement user interfaces, ensuring a seamless and intuitive user experience."
                      />
                    </HStack>

                    <HStack>
                      <Box
                        h={'10px'}
                        w={'10px'}
                        border={'2px'}
                        borderRadius={'50px'}
                        borderColor={'brand.primary'}
                      ></Box>
                      <MyText
                        as="span"
                        title="Build and integrate server-side APIs and web services, ensuring proper functionality and scalability."
                      />
                    </HStack>

                    <HStack>
                      <Box
                        h={'10px'}
                        w={'10px'}
                        border={'2px'}
                        borderRadius={'50px'}
                        borderColor={'brand.primary'}
                      ></Box>
                      <MyText
                        as="span"
                        title="Create and maintain databases, ensuring data integrity, security, and optimal performance."
                      />
                    </HStack>
                  </VStack>
                </VStack>

                <MyButton title="Apply" fontSize={'12px'} w="15%" />

                {/* Share Job */}
                <HStack w={'full'} alignItems={'center'} gap={'10px'}>
                  <MyText as="title" title="Share this job" />
                  <HStack gap={'5px'}>
                    <Center
                      h={'30px'}
                      gap={'5px'}
                      bg={'green.100'}
                      borderRadius={'4px'}
                      px={'10px'}
                      cursor={'pointer'}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon"
                        viewBox="0 0 512 512"
                        width={'15px'}
                      >
                        <path
                          d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z"
                          fillRule="evenodd"
                        />
                      </svg>
                      <MyText as="small" title="Whatsapp" fontWeight={500} />
                    </Center>

                    <Center
                      h={'30px'}
                      gap={'5px'}
                      bg={'blue.200'}
                      borderRadius={'4px'}
                      px={'10px'}
                      cursor={'pointer'}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon"
                        viewBox="0 0 512 512"
                        width={'15px'}
                      >
                        <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
                      </svg>
                      <MyText as="small" title="Linkdein" fontWeight={500} />
                    </Center>

                    <Center
                      h={'30px'}
                      gap={'5px'}
                      bg={'red.200'}
                      borderRadius={'4px'}
                      px={'10px'}
                      cursor={'pointer'}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon"
                        viewBox="0 0 512 512"
                        width={'15px'}
                      >
                        <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                        <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                      </svg>
                      <MyText as="small" title="Instagram" fontWeight={500} />
                    </Center>
                  </HStack>
                </HStack>
              </VStack>

              {/* Right Part */}
              {/* <VStack w={'30%'} bg={'brand.aliceblue'} border={'1px solid'} borderColor={'brand.lightgray'} h={'100vh'} borderRadius={'10px'}>

              </VStack> */}
            </HStack>

            {/* Similar Jobs */}
            <VStack w={'full'} alignItems={'flex-start'} gap={'20px'} pt={'40px'}>
              <MyText as="heading" title="Similar Jobs" />

              <HStack gap={'15px'}>
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
                  isNamedLogo={true}
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
                  isNamedLogo={true}
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
                  isNamedLogo={true}
                />
              </HStack>
            </VStack>
          </VStack>
        </Layout>
      </VStack>
    </>
  );
}
