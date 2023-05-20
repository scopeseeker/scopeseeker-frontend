import { Layout, MyButton, MyIcon, MyText, PageHeroSection } from '@/component';
import {
  Center,
  FormControl,
  HStack,
  Heading,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | Scope Seeker</title>
      </Head>
      <PageHeroSection
        title="Contact Us"
        subtitle="Get in touch with us for any questions or feedback. Our team is always here to assist you."
        alt="contac us img"
        src="/assets/images/contact-us.png"
      />
      <Layout>
        <MyText
          title={`If you have any questions, feedback, or suggestions, please don't hesitate to reach out to us. We're always happy to hear from our customers and are committed to providing exceptional customer service. There are several ways you can get in touch with us. The easiest way is to use our website's contact form, which you can find on the "Contact Us" page. Alternatively, you can send us an email at scopeseekerhelp@gmail.com. We check our inbox regularly and will respond to your message as soon as possible.`}
          as="p"
        />
        <HStack
          w={'full'}
          h={'100vh'}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Center h={'full'} w={'100%'}>
            <Center w={'100%'} bg={'brand.white'} borderRadius={20}>
              <FormControl>
                <VStack alignItems={'flex-start'} gap={2}>
                  <Heading fontSize={'2xl'}>
                    You can share your query here!
                  </Heading>
                  <VStack w={'full'} alignItems={'flex-start'}>
                    <Text fontSize={'xs'}>Message</Text>
                    <Textarea
                      w={'100%'}
                      bg={'brand.aliceblue'}
                      fontSize={'sm'}
                      resize={'none'}
                      placeholder="Write your message here..."
                    />
                  </VStack>
                  <MyButton title="Submit" size="md" px={12} />
                </VStack>
              </FormControl>
            </Center>
          </Center>
          <Center w={'100%'} h={'full'}>
            <Center flexDirection={'column'} w={'full'} gap={4}>
              <Heading fontSize={'2xl'} mb={4}>
                Get more details about us
              </Heading>
              <HStack
                w={{ base: '95%', md: '55%' }}
                h={16}
                borderRadius={6}
                border={'1px solid '}
                borderColor={'blue.600'}
                bg={'blue.200'}
              >
                <HStack gap={3} w={'full'} p={6}>
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
                    <Text fontSize={'2xs'} color={'brand.semiblack'}>
                      Location
                    </Text>
                    <Text fontSize={'xs'} color={'brand.black'}>
                      Bhopal sonagiri sector C183
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
              <HStack
                w={{ base: '95%', md: '55%' }}
                h={16}
                borderRadius={6}
                border={'1px solid'}
                borderColor={'green.800'}
                bg={'green.200'}
              >
                <HStack gap={4} w={'full'} p={6}>
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
                    <Text fontSize={'2xs'} color={'brand.semiblack'}>
                      WhatsApp
                    </Text>
                    <Text fontSize={'xs'} color={'brand.black'}>
                      09039122683
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
              <HStack
                w={{ base: '95%', md: '55%' }}
                h={16}
                borderRadius={6}
                border={'1px solid'}
                borderColor={'red.600'}
                bg={'red.200'}
              >
                <HStack gap={4} w={'full'} p={6}>
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
                    <Text fontSize={'2xs'} color={'brand.semiblack'}>
                      Email
                    </Text>
                    <Text fontSize={'xs'} color={'brand.black'}>
                      scopeseekerhelp@gmail.com
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
              <HStack
                w={{ base: '95%', md: '55%' }}
                h={16}
                borderRadius={6}
                border={'1px solid'}
                borderColor={'yellow.600'}
                bg={'yellow.200'}
              >
                <HStack gap={4} w={'full'} p={6}>
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
                    <Text fontSize={'2xs'} color={'brand.semiblack'}>
                      Phone
                    </Text>
                    <Text fontSize={'xs'} color={'brand.black'}>
                      09039122683
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
            </Center>
          </Center>
        </HStack>
        <VStack gap={4} w={'full'} alignItems={'flex-start'}>
          <MyText
            title={` In addition to these digital communication channels, you can also contact us by phone or WhatsApp. Our phone number is +919617143257, and we're available to take your call or message during our business hours. If you prefer to meet with us in person, you're welcome to visit us at our location. We're located at Bhanpur, Bhopal Madhya Pradesh, and our business hours are 10AM to 7PM (Mon-Sun).`}
            as="p"
          />
          <MyText title="We are more active on Saturday-Sunday" as="title" />
          <MyText
            title={`We appreciate your interest in our company and look forward to hearing from you soon. Your input is valuable to us, and we're always striving to improve our products and services to better meet your needs. Thank you for choosing Scopeseeker.`}
            as="p"
          />
        </VStack>
      </Layout>
    </>
  );
}
