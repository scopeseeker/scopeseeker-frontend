import {
  Layout,
  MyButton,
  MyIcon,
  MyInput,
  MyText,
  PageHeroSection,
} from '@/component';
import { Center, HStack, Heading, Textarea, VStack } from '@chakra-ui/react';
import Head from 'next/head';

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | Scope Seeker</title>
      </Head>
      <PageHeroSection
        title="Contact Us"
        subtitle="We eagerly await your contact to address any inquiries, comments, or ideas you may have. Our team of experts is here to extend a helping hand, offering unrivaled assistance that goes above and beyond."
        alt="contac us img"
        src="/assets/images/contact-us.png"
      />
      <Layout>
        <VStack w={'full'} minH={'100vh'}>
          <Center w={'100%'} h={'full'} boxShadow={'lg'} py={10} margin={20}>
            <VStack>
              {/* <MyText as='heading' title='You can share yout query here'/> */}
              <MyText as='heading' title='You can share your query here!'/>
              <HStack pt={10}>
                <MyInput
                  placeholder="John"
                  type="text"
                  labelTitle="First Name"
                  leftElement={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ionicon"
                      viewBox="0 0 512 512"
                    >
                      <path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" />
                      <path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" />
                    </svg>
                  }
                />

                <MyInput
                  placeholder="Doe"
                  type="text"
                  labelTitle="Last Name"
                  leftElement={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ionicon"
                      viewBox="0 0 512 512"
                    >
                      <path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" />
                      <path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" />
                    </svg>
                  }
                />
              </HStack>

              <MyInput
                placeholder="example@gmail.com"
                type="email"
                labelTitle="Email"
                leftElement={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>
                }
              />

              <MyInput
                placeholder="+919617143257"
                type="phone"
                labelTitle="Phone Number"
                leftElement={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  </svg>
                }
              />

              <VStack w={'full'} alignItems={'flex-start'} pb={8}>
                <MyText as="span" title="Message" />
                <Textarea
                  w={'100%'}
                  fontSize={'sm'}
                  resize={'none'}
                  placeholder="Write your message here..."
                />
              </VStack>

              <MyButton
                title="Submit"
                fontSize={'12px'}
                borderRadius={4}
                w="full"
              />
            </VStack>
          </Center>

          <VStack w={'full'} pt={20} bg={'brand.aliceblue'}>
            <Heading fontSize={'2xl'}>Get more details about us</Heading>

            <Center w={'full'} py={10}>
              <VStack gap={5}>
                <HStack gap={5}>
                  <HStack
                    gap={3}
                    w={'300px'}
                    p={6}
                    h={'70px'}
                    bg={'brand.white'}
                    borderRadius={'md'}
                  >
                    <MyIcon
                      name="location"
                      width="30"
                      height="30"
                      color="brand.semiblack"
                    />
                    <VStack
                      alignItems={'flex-start'}
                      spacing={0}
                      justifyContent={'center'}
                    >
                      <MyText
                        as={'span'}
                        fontSize={{ base: '13px', md: '10px' }}
                        title="Location"
                        color={'brand.semiblack'}
                      />
                      <MyText
                        as={'st'}
                        title="Bhopal sonagiri sector C183"
                        color={'brand.semiblack'}
                      />
                    </VStack>
                  </HStack>

                  <HStack
                    gap={3}
                    w={'300px'}
                    p={6}
                    h={'70px'}
                    bg={'brand.white'}
                    borderRadius={'md'}
                    boxShadow={'md'}
                  >
                    <MyIcon
                      name="whatsapp"
                      width="30"
                      height="30"
                      color="brand.semiblack"
                    />
                    <VStack
                      alignItems={'flex-start'}
                      spacing={0}
                      justifyContent={'center'}
                    >
                      <MyText
                        as={'span'}
                        fontSize={{ base: '13px', md: '10px' }}
                        title={'WhatsApp'}
                        color={'brand.semiblack'}
                      />
                      <MyText
                        as={'st'}
                        title={'09039122683'}
                        color={'brand.semiblack'}
                      />
                    </VStack>
                  </HStack>
                </HStack>

                <HStack gap={5}>
                  <HStack
                    gap={3}
                    p={6}
                    w={'300px'}
                    h={'70px'}
                    bg={'brand.white'}
                    borderRadius={'md'}
                  >
                    <MyIcon
                      name="gmail"
                      width="30"
                      height="30"
                      color="brand.semiblack"
                    />
                    <VStack
                      alignItems={'flex-start'}
                      spacing={0}
                      justifyContent={'center'}
                    >
                      <MyText
                        as={'span'}
                        fontSize={{ base: '13px', md: '10px' }}
                        title="Email"
                        color={'brand.semiblack'}
                      />
                      <MyText
                        as={'st'}
                        fontSize={{ base: '13px', md: '10px' }}
                        title="scopeseekerhelp@gmail.com"
                        color={'brand.semiblack'}
                      />
                    </VStack>
                  </HStack>

                  <HStack
                    gap={3}
                    p={6}
                    w={'300px'}
                    h={'70px'}
                    bg={'brand.white'}
                    borderRadius={'md'}
                  >
                    <MyIcon
                      name="phone"
                      width="30"
                      height="30"
                      color="brand.semiblack"
                    />
                    <VStack
                      alignItems={'flex-start'}
                      spacing={0}
                      justifyContent={'center'}
                    >
                      <MyText
                        as={'span'}
                        fontSize={{ base: '13px', md: '10px' }}
                        title="Phone"
                        color={'brand.semiblack'}
                      />
                      <MyText
                        as={'st'}
                        title="09039122683"
                        color={'brand.semiblack'}
                      />
                    </VStack>
                  </HStack>
                </HStack>
              </VStack>
            </Center>
          </VStack>
        </VStack>
      </Layout>
    </>
  );
}
