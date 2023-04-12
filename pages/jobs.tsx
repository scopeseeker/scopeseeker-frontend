import Icon from '@/component/icon/Icon';
import MyImage from '@/component/image/MyImage';
import MyInput from '@/component/inputs/MyInput';
import {
  Box,
  Center,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';

const Jobs = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = React.useRef(null);
  return (
    // <div>
    //   <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
    //     Open
    //   </Button>
    //   <Drawer
    //     isOpen={isOpen}
    //     placement="right"
    //     onClose={onClose}
    //     finalFocusRef={btnRef}
    //     size={'lg'}
    //   >
    //     <DrawerOverlay />
    //     <DrawerContent>
    //       <DrawerBody>
    //         <Flex flexDirection={'column'} gap={3} px={4} pt={3}>
    //           <Flex minW={'40px'} gap={5} alignItems={'center'}>
    //             <Center w={'80px'} h={'80px'} bg={''} borderRadius={50} p={1}>
    //               <MyImage
    //                 src={'/assets/images/company-logo/github.png'}
    //                 alt={'logo'}
    //                 width={90}
    //                 height={90}
    //               />
    //             </Center>
    //             <VStack h={'65px'} spacing="0" alignItems={'flex-start'}>
    //               <Text as={'span'} fontSize={'md'} fontWeight={'medium'}>
    //                 UI Designer
    //               </Text>
    //               <Text as={'span'} fontSize={'xs'}>
    //                 Git Hub
    //               </Text>
    //               <Text as={'span'} fontSize={'2xs'}>
    //                 New Delhi
    //               </Text>
    //             </VStack>
    //           </Flex>
    //           <HStack
    //             flexWrap={'wrap'}
    //             h={'110px'}
    //             minW={'lg'}
    //             justifyContent={'space-between'}
    //           >
    //             <Center
    //               flexDirection={'column'}
    //               minW={'150px'}
    //               h={'77px'}
    //               bg={'blue.400'}
    //               borderRadius={8}
    //             >
    //               <Text as={'span'} color={'white'} fontSize={'2xs'}>
    //                 Job-Type
    //               </Text>
    //               <Text
    //                 as={'span'}
    //                 color={'white'}
    //                 fontWeight={'500'}
    //                 fontSize={'md'}
    //               >
    //                 Part-Time
    //               </Text>
    //             </Center>
    //             <Center
    //               flexDirection={'column'}
    //               minW={'150px'}
    //               h={'77px'}
    //               bg={'red.400'}
    //               borderRadius={8}
    //             >
    //               <Text as={'span'} fontSize={'2xs'} color={'white'}>
    //                 Skills
    //               </Text>
    //               <Text
    //                 as={'span'}
    //                 color={'white'}
    //                 fontWeight={'500'}
    //                 fontSize={'md'}
    //               >
    //                 Expert
    //               </Text>
    //             </Center>
    //             <Center
    //               flexDirection={'column'}
    //               minW={'150px'}
    //               h={'77px'}
    //               bg={'green.600'}
    //               borderRadius={8}
    //             >
    //               <Text as={'span'} color={'white'} fontSize={'2xs'}>
    //                 Posted
    //               </Text>
    //               <Text
    //                 as={'span'}
    //                 color={'white'}
    //                 fontWeight={'500'}
    //                 fontSize={'md'}
    //               >
    //                 20 days ago
    //               </Text>
    //             </Center>
    //             <Center
    //               flexDirection={'column'}
    //               minW={'150px'}
    //               h={'77px'}
    //               bg={'yellow.600'}
    //               borderRadius={8}
    //             >
    //               <Text as={'span'} color={'white'} fontSize={'2xs'}>
    //                 Salary
    //               </Text>
    //               <Text
    //                 as={'span'}
    //                 color={'white'}
    //                 fontWeight={'500'}
    //                 fontSize={'md'}
    //               >
    //                 $ 40000
    //               </Text>
    //             </Center>
    //           </HStack>

    //           <Flex justifyContent={'space-between'} w={'full'}>
    //             <MyButton
    //               title="Description"
    //               size={'md'}
    //               w={'48%'}
    //               fontWeight={'medium'}
    //               borderRadius={50}
    //               colorScheme="blue"
    //             ></MyButton>
    //             <MyButton
    //               title="Company"
    //               size={'md'}
    //               w={'48%'}
    //               fontWeight={'medium'}
    //               borderRadius={50}
    //               colorScheme="gray"
    //             ></MyButton>
    //           </Flex>
    //           <Flex flexDirection={'column'}
    //           bg={'blue.600'}
    //           overflowY={'auto'}>
    //             <Flex
    //               minH={'22vh'}
    //               minW={'full'}
    //               justifyContent={'flex-start'}
    //               flexDirection={'column'}
    //             >
    //               <Text as={'span'} fontSize={'lg'} fontWeight={500}>
    //                 Job Description
    //               </Text>
    //               <UnorderedList fontSize={'xs'} color={'gray.600'}>
    //                 <ListItem>Design user-centered interfaces</ListItem>
    //                 <ListItem>Develop wireframes and prototypes</ListItem>
    //                 <ListItem>Collaborate with cross-functional teams</ListItem>
    //                 <ListItem>
    //                   Conduct user research and usability testing
    //                 </ListItem>
    //                 <ListItem>
    //                   Stay up-to-date with design trends and best practices
    //                 </ListItem>
    //                 <ListItem>Develop wireframes and prototypes</ListItem>
    //                 <ListItem>Develop wireframes and prototypes</ListItem>
    //                 <ListItem>Develop wireframes and prototypes</ListItem>
    //                 <ListItem>Develop wireframes and prototypes</ListItem>
    //                 <ListItem>Develop wireframes and prototypes</ListItem>
    //                 <ListItem>Develop wireframes and prototypes</ListItem>
    //                 <ListItem>Develop wireframes and prototypes</ListItem>
    //                 <ListItem>Develop wireframes and prototypes</ListItem>
    //               </UnorderedList>
    //             </Flex>
    //             <Flex
    //               minH={'22vh'}
    //               minW={'full'}
    //               justifyContent={'flex-start'}
    //               flexDirection={'column'}
    //             >
    //               <Text as={'span'} fontSize={'lg'} fontWeight={500}>
    //                 Requirment
    //               </Text>
    //               <UnorderedList fontSize={'xs'} color={'gray.600'}>
    //                 <ListItem>
    //                   Knowledge of design trends and best practices in the
    //                   industry.
    //                 </ListItem>
    //                 <ListItem>
    //                   A bachelors degree in design, human-computer interaction,
    //                   or a related field.
    //                 </ListItem>
    //                 <ListItem>
    //                   Proficiency in design software such as Sketch, Figma, or
    //                   Adobe Creative Suite.
    //                 </ListItem>
    //                 <ListItem>
    //                   Knowledge of user research methods such as surveys,
    //                   interviews, and user testing
    //                 </ListItem>
    //                 <ListItem>
    //                   Familiarity with front-end development languages such as
    //                   HTML, CSS, and JavaScript
    //                 </ListItem>
    //                 <ListItem>
    //                   A portfolio of previous design work demonstrating strong
    //                   UI/UX design skills and problem-solving abilities
    //                 </ListItem>
    //               </UnorderedList>
    //             </Flex>
    //           </Flex>
    //           <Flex justifyContent={'space-between'} w={'full'}>
    //             <MyButton
    //               title="Apply"
    //               size={'md'}
    //               w={'48%'}
    //               fontWeight={'medium'}
    //               borderRadius={50}
    //               colorScheme="blue"
    //             ></MyButton>
    //             <MyButton
    //               title="Close"
    //               size={'md'}
    //               w={'48%'}
    //               fontWeight={'medium'}
    //               borderRadius={50}
    //               colorScheme="gray"
    //             ></MyButton>
    //           </Flex>
    //         </Flex>
    //       </DrawerBody>
    //     </DrawerContent>
    //   </Drawer>
    // </div>
    <Box>
      <Box h={'45vw'} w={'full'} bg={'blue.100'}>
        <HStack h={'30vw'} w={'full'}>
          <Center h={'20vw'} w={'50%'} flexDirection={'column'}>
            <Heading>Jobs hiring</Heading>
            <Text as={'span'} fontSize={'md'}>
              "Opportunities don't happen. You create them."
            </Text>

            <MyInput
              size={'xs'}
              type={'search'}
              rightElem={
                <Icon name={'searchicon'} height={'1vw'} width={'1vw'} />
              }
            />
          </Center>
          <Center w={'50%'} h={'20vw'} >
            <MyImage
              src={'/assets/svgs/hero-section.svg'}
              alt={'logo'}
              width={400}
              height={400}
            ></MyImage>
          </Center>
        </HStack>
        <Box bg={'blue.200'}
          h={'15vw'}
          w={'full'}
          p={4}
          boxShadow={'0 4px 30px rgba(0, 0, 0, 0.2)'}
        >
          <Heading fontSize={'xl'}>Categories</Heading>
          <HStack
            h={'10vw'}
            w={'full'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={'6'}
            flexWrap={'wrap'}
          >
            <VStack
              w={'10vw'}
              bg={'brand.white'}
              py={3}
              gap={3}
              borderRadius={'lg'}
            >
              <IconButton
                aria-label="categories"
                icon={<Icon name={'instagram'} width={'40px'} />}
              />
              <VStack lineHeight={1}>
                <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
                  FrontEnd Developer
                </Text>
              </VStack>
            </VStack>
            <VStack
              w={'10vw'}
              bg={'brand.white'}
              py={3}
              gap={3}
              borderRadius={'lg'}
              
            >
              <IconButton
                aria-label="categories"
                icon={<Icon name={'instagram'} width={'40px'} />}
              />
              <VStack lineHeight={1}>
                <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
                  FrontEnd Developer
                </Text>
              </VStack>
            </VStack>

            <VStack
              w={'10vw'}
              bg={'brand.white'}
              py={3}
              gap={3}
              borderRadius={'lg'}
            >
              <IconButton
                aria-label="categories"
                icon={<Icon name={'instagram'} width={'40px'} />}
              />
              <VStack lineHeight={1}>
                <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
                  FrontEnd Developer
                </Text>
              </VStack>
            </VStack>

            <VStack
              w={'10vw'}
              bg={'brand.white'}
              py={3}
              gap={3}
              borderRadius={'lg'}
            >
              <IconButton
                aria-label="categories"
                icon={<Icon name={'instagram'} width={'40px'} />}
              />
              <VStack lineHeight={1}>
                <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
                  FrontEnd Developer
                </Text>
              </VStack>
            </VStack>

            <VStack
              w={'10vw'}
              bg={'brand.white'}
              py={3}
              gap={3}
              borderRadius={'lg'}
            >
              <IconButton
                aria-label="categories"
                icon={<Icon name={'instagram'} width={'40px'} />}
              />
              <VStack lineHeight={1}>
                <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
                  FrontEnd Developer
                </Text>
              </VStack>
            </VStack>

            <VStack
              w={'10vw'}
              bg={'brand.white'}
              py={3}
              gap={3}
              borderRadius={'lg'}
            >
              <IconButton
                aria-label="categories"
                icon={<Icon name={'instagram'} width={'40px'} />}
              />
              <VStack lineHeight={1}>
                <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
                  FrontEnd Developer
                </Text>
              </VStack>
            </VStack>

            <VStack
              w={'10vw'}
              bg={'brand.white'}
              py={3}
              gap={3}
              borderRadius={'lg'}
            >
              <IconButton
                aria-label="categories"
                icon={<Icon name={'instagram'} width={'40px'} />}
              />
              <VStack lineHeight={1}>
                <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
                  FrontEnd Developer
                </Text>
              </VStack>
            </VStack>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Jobs;
