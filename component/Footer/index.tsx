import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import Icon from '../Icon/Icon';

const Footer = () => {
  return (
    <Box w={'full'} bg={'#030626'} p={3} mt={'500px'}>
      <Flex px={10} position={'relative'} alignItems={'end'}>
        <Text color={'white'} fontSize={'2xl'} pb={10}>
          Right{' '}
          <Text as={'span'} fontWeight={'bold'} color={'brand.100'}>
            opportunity
          </Text>{' '}
          awaiting for you
        </Text>
        <Box>
          <Image
            src={require('../../public/Images3D/a.png')}
            alt={'footer'}
            // width={'fit'}
            height={300}
            style={{ marginLeft: '160%' }}
          />
        </Box>
      </Flex>
      <Divider opacity={0.2} />
      <Grid templateColumns="repeat(6, 1fr)" gap={6} pt={10} pb={10} px={10}>
        <GridItem w="100%" colSpan={2}>
          <VStack pr={'10'}>
            <HStack w={'full'}>
              <Image
                src={require('../../public/scopeseeker-logo.png')}
                alt={'footer'}
                height={40}
              />
              <Text color={'white'} fontSize={'xl'} fontWeight={'semibold'}>
                Scope Seeker
              </Text>
            </HStack>
            <Text as={'p'} color={'whiteAlpha.800'} fontSize={'xs'}>
              Scope Seeker is a cutting-edge web application designed to help
              job seekers find their dream job with ease.{' '}
            </Text>
            <Text as={'span'} w={'full'} fontSize={'sm'} color={'brand.100'}>
              scopeseekerhelp@gmail.com
            </Text>
          </VStack>
        </GridItem>

        {/* Navigation Section */}
        <GridItem w="100%" color={'whiteAlpha.800'}>
          <Heading fontSize={'sm'} fontWeight={'medium'} color={'white'} mb={2}>
            Links
          </Heading>
          <UnorderedList
            fontSize={'xs'}
            ml={0}
            listStyleType={'none'}
            spacing={1}
          >
            <ListItem>Find Jobs</ListItem>
            <ListItem>Find Companies</ListItem>
            <ListItem>Guide How to</ListItem>
            <ListItem>FAQ'S</ListItem>
          </UnorderedList>
        </GridItem>
        {/* Company Section */}
        <GridItem w="100%" color={'whiteAlpha.800'}>
          <Heading fontSize={'sm'} fontWeight={'medium'} color={'white'} mb={2}>
            Company
          </Heading>
          <UnorderedList
            fontSize={'xs'}
            ml={0}
            listStyleType={'none'}
            spacing={1}
          >
            <ListItem>About Us</ListItem>
            <ListItem>Contact Us</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Terms & Condition</ListItem>
          </UnorderedList>
        </GridItem>
        {/* Company Section */}
        <GridItem w="100%" color={'whiteAlpha.800'}>
          <Heading fontSize={'sm'} fontWeight={'medium'} color={'white'} mb={2}>
            Stay Connected
          </Heading>
          <UnorderedList
            fontSize={'xs'}
            ml={0}
            listStyleType={'none'}
            spacing={1}
          >
            <ListItem>Help Center</ListItem>
            <ListItem>FAQ's</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Terms & Conditions</ListItem>
          </UnorderedList>
        </GridItem>

        {/* Meet us Section  */}
        <GridItem w="100%" color={'whiteAlpha.800'}>
          <Heading fontSize={'sm'} fontWeight={'medium'} color={'white'} mb={2}>
            Meet Us
          </Heading>
          <UnorderedList
            fontSize={'xs'}
            ml={0}
            listStyleType={'none'}
            spacing={1}
          >
            <ListItem>Bhanpur, Ayodhya Bypass</ListItem>
            <ListItem>Bhopal, Madhya Pradesh</ListItem>
            <ListItem>India - 462010</ListItem>
          </UnorderedList>
          <Text fontSize={'xs'} mt={2}>
            Mobile: +9755786633
          </Text>
          <Text fontSize={'xs'} mt={2}>
            We{' '}
            <Text as={'span'} fontSize={'2xl'}>
              ❤️
            </Text>{' '}
            new friends
          </Text>
          <HStack mt={2}>
            <Center
              cursor={'pointer'}
              w="40px"
              h="40px"
              bg={'whiteAlpha.300'}
              color="white"
              borderRadius={12}
            >
              <Icon name="instagram" width="24px" height="24px" />
            </Center>
            <Center
              cursor={'pointer'}
              w="40px"
              h="40px"
              bg={'whiteAlpha.300'}
              color="white"
              borderRadius={12}
            >
              <Icon name="linkedin" width="24px" height="24px" />
            </Center>
            <Center
              cursor={'pointer'}
              w="40px"
              h="40px"
              bg={'whiteAlpha.300'}
              color="white"
              borderRadius={12}
            >
              <Icon name="gmail" width="24px" height="24px" />
            </Center>
            <Center
              cursor={'pointer'}
              w="40px"
              h="40px"
              bg={'whiteAlpha.300'}
              color="white"
              borderRadius={12}
            >
              <Icon name="facebook" width="24px" height="24px" />
            </Center>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
