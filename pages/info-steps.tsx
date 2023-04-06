import MyButton from '@/component/button/MyButton';
import MyHeading from '@/component/heading/MyHeading';
import MyInput from '@/component/inputs/MyInput';
import {
  Box,
  Center,
  FormControl,
  HStack,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import Icon from '../component/icon/Icon';

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
        <VStack gap={8}>
          <VStack gap={2}>
            {/* <Image
              src={require('../public/p1.jpg')}
              alt={'google'}
              style={{ width: '40%' }}
            /> */}
            {/* <MyImage alt="model" /> */}
            <Text color={'white'}>More about you</Text>
          </VStack>

          <VStack gap={4}>
            <Text
              color={'white'}
              w={'70%'}
              textAlign={'center'}
              fontSize={'xs'}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              sunt corrupti quos expedita alias, nam natus cum fuga obcaecati
              tenetur aperiam quis laborum id asperiores doloremque amet beatae
              et minus!
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
              <MyInput labelTitle="Full Name" type="text" />

              {/* <InputGroup mt={4} flexDirection={'column'}>
                <MyInput
                  labelTitle="Email"
                  type="text"
                  placeholder="example@gmail.com"
                />
                <InputRightElement width="4rem" alignItems={'flex-end'}>
                  <MyButton title="verify" size="sm" />
                </InputRightElement>
              </InputGroup> */}
              <Box w={'full'} mt={4}>
                <Center alignItems={'flex-start'}>
                  <MyInput
                    labelTitle="Email"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                  <MyButton title="verify"></MyButton>
                </Center>

                {/* <VStack w={'60%'} alignItems={'flex-start'}>
                  <MyInput
                    labelTitle="Email"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                  
                    <MyButton title="verify" />
                  
                </VStack> */}
              </Box>

              <InputGroup mt={4} flexDirection={'column'}>
                <MyInput
                  labelTitle="Mobile Number"
                  type="number"
                  placeholder="123456789"
                />
                <InputRightElement width="4rem" alignItems={'flex-end'}>
                  <MyButton title="verify" size="sm" />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <VStack w={'full'} alignItems={'flex-start'}>
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
                    <Icon color="white" name={'case'} width={'40px'} />
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
                    <Icon color="white" name={'case'} width={'40px'} />
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
            </VStack>
          </VStack>
        </VStack>
      </Center>
    </HStack>
  );
};

export default InfoSteps;
