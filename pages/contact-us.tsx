import MyButton from '@/component/button/MyButton';
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

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact-Us</title>
      </Head>
      <PageHeroSection
        title="Contact Us"
        subtitle="Get in touch with us for any questions or feedback. Our team is always here to assist you. Contact us through our website's contact form or email us at scopeseekerhelp@gmail.com. We value your input and look forward to hearing from you soon."
        alt="contac us img"
        src="/assets/images/privacy-policy.webp"
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
                <Heading fontSize={'xl'}>
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
                    fontSize={'xs'}
                    resize={'none'}
                    placeholder="Here is a sample placeholder"
                  />
                </VStack>
                <MyButton title="Submit" size="md" px={12} />
              </VStack>
            </FormControl>
          </Center>
        </Center>

        <Center w={'50%'} h={'full'}>
          <Center flexDirection={'column'} w={'full'} gap={4}>
            <Heading fontSize={'xl'} mb={4}>
              Get more details about us
            </Heading>
            <HStack
              w={'55%'}
              h={16}
              borderRadius={6}
              bg={'brand.primary'}
            ></HStack>
            <HStack
              w={'55%'}
              h={16}
              borderRadius={6}
              bg={'brand.primary'}
            ></HStack>
            <HStack
              w={'55%'}
              h={16}
              borderRadius={6}
              bg={'brand.primary'}
            ></HStack>
            <HStack
              w={'55%'}
              h={16}
              borderRadius={6}
              bg={'brand.primary'}
            ></HStack>
          </Center>
        </Center>
      </HStack>
    </>
  );
};

export default ContactUs;
