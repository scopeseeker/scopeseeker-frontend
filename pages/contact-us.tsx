import MyButton from '@/component/button/MyButton';
import Icon from '@/component/icon/MyIcon';
import MyInput from '@/component/inputs/MyInput';
import PageHeroSection from '@/component/page-hero-section/PageHeroSection';
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
        <title>Contact-Us</title>
      </Head>
      <PageHeroSection
        title="Contact Us"
        subtitle="Get in touch with us for any questions or feedback. Our team is always here to assist you. Contact us through our website's contact form or email us at scopeseekerhelp@gmail.com. We value your input and look forward to hearing from you soon."
        alt="contac us img"
        src="/assets/images/contact-us.png"
      />
      <HStack w={'full'} h={'100vh'}>
        <Center h={'full'} w={'50%'}>
          <Center
            w={'80%'}
            bg={'brand.white'}
            // boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
            px={12}
            py={14}
            borderRadius={20}
          >
            <FormControl>
              <VStack alignItems={'flex-start'} gap={2}>
                <Heading fontSize={'2xl'}>
                  You can share your query here!
                </Heading>
                <MyInput
                  size="sm"
                  labelTitle="Full Name"
                  placeholder="John Doe"
                  w={'100%'}
                  type="text"
                />
                <HStack w={'full'}>
                  <MyInput
                    labelTitle="Email"
                    placeholder="example@gmail.com"
                    w={'50%'}
                    type="text"
                    size={'sm'}
                  />
                  <MyInput
                    labelTitle="Phone"
                    size="sm"
                    placeholder="9876543211"
                    w={'50%'}
                    type="number"
                  />
                </HStack>

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

        <Center w={'50%'} h={'full'}>
          <Center flexDirection={'column'} w={'full'} gap={4}>
            <Heading fontSize={'2xl'} mb={4}>
              Get more details about us
            </Heading>
            <HStack
              w={'55%'}
              h={16}
              borderRadius={6}
              border={'1px solid '}
              borderColor={'blue.600'}
              bg={'blue.200'}
            >
              <HStack gap={3} w={'full'} p={6}>
                <Icon
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
              w={'55%'}
              h={16}
              borderRadius={6}
              border={'1px solid'}
              borderColor={'green.800'}
              bg={'green.200'}
            >
              <HStack gap={4} w={'full'} p={6}>
                <Icon
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
              w={'55%'}
              h={16}
              borderRadius={6}
              border={'1px solid'}
              borderColor={'red.600'}
              bg={'red.200'}
            >
              <HStack gap={4} w={'full'} p={6}>
                <Icon
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
              w={'55%'}
              h={16}
              borderRadius={6}
              border={'1px solid'}
              borderColor={'yellow.600'}
              bg={'yellow.200'}
            >
              <HStack gap={4} w={'full'} p={6}>
                <Icon
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
    </>
  );
}
