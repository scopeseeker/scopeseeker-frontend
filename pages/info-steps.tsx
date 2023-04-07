import MyButton from '@/component/button/MyButton';
import MyHeading from '@/component/heading/MyHeading';
import Icon from '@/component/icon/Icon';
import MyImage from '@/component/image/MyImage';
import MyInput from '@/component/inputs/MyInput';
import {
  Box,
  Center,
  FormControl,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

const InfoSteps = () => {
  const [isVerify, setIsVerify] = useState(false);

  return (
    <HStack w={'full'} h={'100vh'} spacing={0}>
      {/* Left Part */}
      <Center
        w={'30%'}
        h={'full'}
        bg={'brand.primary'}
        alignSelf={'flex-start'}
      >
        <VStack gap={0}>
          <VStack gap={2}>
            <MyImage
              src={'/assets/svgs/hero-section.svg'}
              alt={'google'}
              width={250}
              height={500}
            />
            <Text color={'white'} fontWeight={'medium'}>
              Your Story, Your Way
            </Text>
          </VStack>

          <VStack gap={4}>
            <Text
              color={'white'}
              w={'75%'}
              textAlign={'center'}
              fontSize={'xs'}
            >
              Craft your career story with confidence and authenticity. Share
              experiences, accomplishments, and goals that highlight what makes
              you unique.
            </Text>
            <MyButton
              bg="aliceblue"
              color="black"
              fontSize="xs"
              title={'SKIP FOR NOW'}
              px={20}
            ></MyButton>
          </VStack>
        </VStack>
      </Center>

      {/* Right Part */}
      <Center w={'70%'} h={'100vh'} overflow={'hidden'}>
        <VStack gap={4} h={'full'} pt={10}>
          <MyHeading title="Just Want to Know more" subTitle="about yourself" />
          <FormControl h={'full'} w={'fit-content'} overflowY={'scroll'} px={10}>
            <VStack w={'full'} gap={2} pb={10}>
              <MyInput
                labelTitle="Full Name"
                type="text"
                placeholder="John Doe"
                leftElem={<Icon name="user" width="16" height="16" />}
                w={'sm'}
              />
              <MyInput
                labelTitle="Email"
                type="email"
                placeholder="johndoe@gmail.com"
                leftElem={<Icon name="gmail" width="16" height="16" />}
                rightElem={
                  <MyButton
                    title={isVerify ? 'Verified' : 'Verify'}
                    bg="green.500"
                    isDisabled={isVerify ? true : false}
                    fontSize="xs"
                  />
                }
                w={'sm'}
              />
              <MyInput
                labelTitle="Phone Number"
                type="number"
                placeholder="9876543210"
                leftElem={<Icon name="phone" width="16" height="16" />}
                rightElem={
                  <MyButton
                    title={isVerify ? 'Verified' : 'Verify'}
                    bg="green.500"
                    isDisabled={isVerify ? true : false}
                    fontSize="xs"
                  />
                }
                w={'sm'}
              />

              <VStack>
                <Text fontSize={'sm'} w={'full'} textAlign={'start'}>
                  Work status
                </Text>

                <HStack>
                  <Center
                    h={20}
                    w={48}
                    borderTopLeftRadius={20}
                    borderBottomRightRadius={20}
                    borderTopRightRadius={10}
                    borderBottomLeftRadius={10}
                    border="1px"
                    borderColor="brand.primary"
                  >
                    <HStack px={4}>
                      <Icon name="job" height="50" width="50" />

                      <VStack lineHeight={1} alignItems={'flex-start'}>
                        <Text as={'span'} fontSize={'sm'}>
                          I&apos;m Experienced
                        </Text>
                        <Text as={'span'} fontSize={'2xs'}>
                          I have work experience (excluding internships)
                        </Text>
                      </VStack>
                    </HStack>
                  </Center>

                  <Center
                    h={20}
                    w={48}
                    borderTopLeftRadius={20}
                    borderBottomRightRadius={20}
                    borderTopRightRadius={10}
                    borderBottomLeftRadius={10}
                    border="1px"
                    borderColor="brand.primary"
                  >
                    <HStack px={4}>
                      <Icon name="fresher" height="50" width="50" />

                      <VStack lineHeight={1} alignItems={'flex-start'}>
                        <Text as={'span'} fontSize={'sm'}>
                          I&apos;m Fresher
                        </Text>
                        <Text as={'span'} fontSize={'2xs'}>
                          I have work experience (excluding internships)
                        </Text>
                      </VStack>
                    </HStack>
                  </Center>
                </HStack>
              </VStack>

              <MyInput
                labelTitle="Organisation/College"
                type="text"
                w={'sm'}
                leftElem={<Icon name="college" width="16" height="16" />}
                placeholder='eg: Sagar Institute of Research Technology and Science (SIRTS), Bhopal'
              />

              <MyInput
                labelTitle="Country"
                type="text"
                w={'sm'}
                leftElem={<Icon name="global" width="16" height="16" />}
              />

              <VStack w={'full'} alignItems={'start'}>
                <Text fontSize={'sm'} w={'full'}>
                  Gender
                </Text>
                <HStack gap={2}>
                  <MyButton
                    title={'Male'}
                    border="1px"
                    borderColor="brand.black"
                    fontSize="xs"
                    borderRadius={50}
                    bg='transparent'
                    color='brand.black'
                    fontWeight='base'
                  />

                  <MyButton
                    title={'Female'}
                    border="1px"
                    borderColor="brand.black"
                    fontSize="xs"
                    borderRadius={50}
                    bg='transparent'
                    color='brand.black'
                    fontWeight='base'
                  />

                  <MyButton
                    title={'Others'}
                    border="1px"
                    borderColor="brand.black"
                    fontSize="xs"
                    borderRadius={50}
                    bg='transparent'
                    color='brand.black'
                    fontWeight='base'
                  />
                </HStack>
              </VStack>

              <VStack w={'full'} alignItems={'start'}>
                <Text fontSize={'sm'} w={'full'}>
                  Domain
                </Text>
                <HStack gap={2}>
                  <MyButton
                    title={'Tech'}
                    border="1px"
                    borderColor="brand.black"
                    fontSize="xs"
                    borderRadius={50}
                    bg='transparent'
                    color='brand.black'
                    fontWeight='base'
                  />

                  <MyButton
                    title={'Non-Tech'}
                    border="1px"
                    borderColor="brand.black"
                    fontSize="xs"
                    borderRadius={50}
                    bg='transparent'
                    color='brand.black'
                    fontWeight='base'

                  />
                </HStack>
              </VStack>
            </VStack>
          </FormControl>
        </VStack>
      </Center>
    </HStack>
  );
};

export default InfoSteps;