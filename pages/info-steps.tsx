import { MainHeading, MyButton, MyIcon, MyImage, MyInput } from '@/component';
import {
  Center,
  FormControl,
  HStack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function InfoSteps() {
  // const [isVerify, setIsVerify] = useState(false);
  const isVerify = true;
  const [selectedGender, setSelectedGender] = useState('');
  const [selectDomain, setSelectDomain] = useState('');

  const handleGenderSelection = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleDomainSelection = (domain: string) => {
    setSelectDomain(domain);
  };

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
          <MainHeading
            title="Just Want to Know more"
            subTitle="about yourself"
          />
          <FormControl
            h={'full'}
            w={'fit-content'}
            overflowY={'scroll'}
            px={10}
          >
            <VStack w={'full'} gap={2} pb={10}>
              <MyInput
                labelTitle="Full Name"
                type="text"
                placeholder="John Doe"
                leftElem={<MyIcon name="user" width="16" height="16" />}
                w={'sm'}
              />
              <MyInput
                labelTitle="Email"
                type="email"
                placeholder="johndoe@gmail.com"
                leftElem={<MyIcon name="gmail" width="16" height="16" />}
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
                leftElem={<MyIcon name="phone" width="16" height="16" />}
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
                      <MyIcon name="job" height="50" width="50" />

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
                      <MyIcon name="fresher" height="50" width="50" />

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
                leftElem={<MyIcon name="college" width="16" height="16" />}
                placeholder="eg: Sagar Institute of Research Technology and Science (SIRTS), Bhopal"
              />

              <MyInput
                labelTitle="Country"
                type="text"
                w={'sm'}
                leftElem={<MyIcon name="global" width="16" height="16" />}
                placeholder="India"
              />

              <VStack w={'full'} alignItems={'start'}>
                <Text fontSize={'sm'}>Gender</Text>
                <HStack gap={2}>
                  <MyButton
                    title={'Male'}
                    borderColor="brand.black"
                    fontSize="xs"
                    borderRadius={50}
                    fontWeight="base"
                    onClick={() => handleGenderSelection('male')}
                    bg={
                      selectedGender === 'male'
                        ? 'brand.primary'
                        : 'transparent'
                    }
                    color={
                      selectedGender === 'male' ? 'brand.white' : 'brand.black'
                    }
                    _hover={{
                      bg: selectedGender === 'male' ? 'brand.primary' : 'none',
                    }}
                    border={selectedGender === 'male' ? 'none' : '1px'}
                  />

                  <MyButton
                    title={'Female'}
                    borderColor="brand.black"
                    fontSize="xs"
                    borderRadius={50}
                    fontWeight="base"
                    onClick={() => handleGenderSelection('female')}
                    bg={
                      selectedGender === 'female'
                        ? 'brand.primary'
                        : 'transparent'
                    }
                    color={
                      selectedGender === 'female'
                        ? 'brand.white'
                        : 'brand.black'
                    }
                    _hover={{
                      bg:
                        selectedGender === 'female' ? 'brand.primary' : 'none',
                    }}
                    border={selectedGender === 'female' ? 'none' : '1px'}
                  />

                  <MyButton
                    title={'Others'}
                    borderColor="brand.black"
                    fontSize="xs"
                    borderRadius={50}
                    fontWeight="base"
                    onClick={() => handleGenderSelection('others')}
                    bg={
                      selectedGender === 'others'
                        ? 'brand.primary'
                        : 'transparent'
                    }
                    color={
                      selectedGender === 'others'
                        ? 'brand.white'
                        : 'brand.black'
                    }
                    _hover={{
                      bg:
                        selectedGender === 'others' ? 'brand.primary' : 'none',
                    }}
                    border={selectedGender === 'others' ? 'none' : '1px'}
                  />
                </HStack>
              </VStack>

              <VStack w={'full'} alignItems={'start'}>
                <Text fontSize={'sm'}>Domain</Text>
                <HStack gap={2}>
                  <MyButton
                    title={'Tech'}
                    borderColor="brand.black"
                    fontSize="xs"
                    borderRadius={50}
                    fontWeight="base"
                    onClick={() => handleDomainSelection('tech')}
                    bg={
                      selectDomain === 'tech' ? 'brand.primary' : 'transparent'
                    }
                    color={
                      selectDomain === 'tech' ? 'brand.white' : 'brand.black'
                    }
                    _hover={{
                      bg: selectDomain === 'tech' ? 'brand.primary' : 'none',
                    }}
                    border={selectDomain === 'tech' ? 'none' : '1px'}
                  />

                  <MyButton
                    title={'Non-Tech'}
                    borderColor="brand.black"
                    fontSize="xs"
                    borderRadius={50}
                    fontWeight="base"
                    onClick={() => handleDomainSelection('non-tech')}
                    bg={
                      selectDomain === 'non-tech'
                        ? 'brand.primary'
                        : 'transparent'
                    }
                    color={
                      selectDomain === 'non-tech'
                        ? 'brand.white'
                        : 'brand.black'
                    }
                    _hover={{
                      bg:
                        selectDomain === 'non-tech' ? 'brand.primary' : 'none',
                    }}
                    border={selectDomain === 'non-tech' ? 'none' : '1px'}
                  />
                </HStack>
              </VStack>

              <VStack w={'full'} alignItems={'flex-start'}>
                <Text fontSize={'sm'}>Work Experience</Text>
                <HStack>
                  <MyIcon name="add" height="16" width="16" />
                  <Text fontSize={'xs'} color="brand.primary">
                    Add Work Experience
                  </Text>
                </HStack>
              </VStack>

              <VStack w={'full'} alignItems={'flex-start'}>
                <Text fontSize={'sm'}>Summary</Text>
                <Textarea placeholder="Add custom message..." size={'sm'} />
              </VStack>

              <MyInput
                labelTitle="Skills"
                type="text"
                w={'sm'}
                leftElem={<MyIcon name="pages" width="16" height="16" />}
                placeholder="search skills"
              />

              <VStack alignItems={'flex-start'} w={'full'}>
                <Text fontSize={'sm'}>Social Links</Text>
                <VStack gap={2}>
                  <MyInput
                    labelTitle="Instagram"
                    type="text"
                    w={'sm'}
                    leftElem={
                      <MyIcon name="instagram" width="16" height="16" />
                    }
                  />

                  <MyInput
                    labelTitle="linkedin"
                    type="text"
                    w={'sm'}
                    leftElem={<MyIcon name="linkedin" width="16" height="16" />}
                  />

                  <MyInput
                    labelTitle="GitHub"
                    type="text"
                    w={'sm'}
                    leftElem={<MyIcon name="github" width="16" height="16" />}
                  />
                </VStack>
              </VStack>

              <VStack w={'full'} alignItems={'flex-start'}>
                <Text fontSize={'sm'}>Resume</Text>
                <HStack
                  alignItems={'center'}
                  border={'1px'}
                  borderColor={'brand.lightgray'}
                  borderRadius={50}
                  pr={2}
                >
                  <MyButton
                    title="Upload Resume"
                    fontWeight="thin"
                    borderRadius={50}
                    fontSize="xs"
                  />
                  <Text fontSize={'2xs'}>DOC, DOCx, PDF, RTF | Max: 2 MB</Text>
                </HStack>
                <Text fontSize={'2xs'}>
                  Recruiters give first preference to candidates who have a
                  resume
                </Text>
              </VStack>

              <MyButton
                title="Submit"
                size="md"
                borderRadius={10}
                fontSize="sm"
                fontWeight="normal"
              />
            </VStack>
          </FormControl>
        </VStack>
      </Center>
    </HStack>
  );
}
