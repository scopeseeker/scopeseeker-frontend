import MyButton from '@/component/button/MyButton';
import MyHeading from '@/component/heading/MyHeading';
import Icon from '@/component/icon/Icon';
import MyImage from '@/component/image/MyImage';
import MyInput from '@/component/inputs/MyInput';
import { Center, FormControl, HStack, Text, VStack } from '@chakra-ui/react';

const InfoSteps = () => {
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
      <Center w={'70%'} h={'full'}>
        <VStack gap={4}>
          <MyHeading title="Just Want to Know more" subTitle="about yourself" />
          <VStack w={'full'}>
            <FormControl>
              <MyInput
                labelTitle="Full Name"
                type="text"
                placeholder="John Doe"
                leftElem={<Icon name='job' width='20' height='20'/>}
                rightElem={<MyButton title='Verify' />}
              />
            </FormControl>

            {/* <VStack w={'full'} alignItems={'flex-start'}>
              <Text fontSize={'sm'} mt={4}>
                Work status
              </Text>
              <HStack>
                <Box
                  h={20}
                  w={64}
                  bg={'brand.primary'}
                  borderTopLeftRadius={20}
                  borderBottomRightRadius={20}
                  borderTopRightRadius={10}
                  borderBottomLeftRadius={10}
                >
                  <HStack h={'full'} ml={2}>
                    <MyIconcolor="white" name={'case'} width={'40px'} />
                    <VStack
                      alignItems={'flex-start'}
                      lineHeight={1}
                      color={'white'}
                    >
                      <Text>I&apos;m Experienced</Text>
                      <Text as={'span'} fontSize={'xs'}>
                        I have work experience (excluding internships)
                      </Text>
                    </VStack>
                  </HStack>
                </Box>

                <Box
                  h={20}
                  w={64}
                  bg={'brand.primary'}
                  borderTopLeftRadius={20}
                  borderBottomRightRadius={20}
                  borderTopRightRadius={10}
                  borderBottomLeftRadius={10}
                >
                  <HStack h={'full'} ml={2}>
                    <MyIconcolor="white" name={'case'} width={'40px'} />
                    <VStack
                      alignItems={'flex-start'}
                      lineHeight={1}
                      color={'white'}
                    >
                      <Text>I&apos;m Fresher</Text>
                      <Text as={'span'} fontSize={'xs'} w={'90%'}>
                        I am a student/ Haven&apos;t worked after graduation
                      </Text>
                    </VStack>
                  </HStack>
                </Box>
              </HStack>
            </VStack> */}
          </VStack>
        </VStack>
      </Center>
    </HStack>
  );
};

export default InfoSteps;
