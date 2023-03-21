import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import Icon from '../icon/Icon';

const Footer = () => {
  return (
    <VStack w={'full'} bg={'green'}>
      <HStack w={'full'} h={'xs'}>
        {/* Fotter Content Will Show Here */}
      </HStack>
      <Box maxW={'100vw'} mt={'10'} bg={'green'} position={'relative'} p={'10'}>
        <VStack
        justifyContent={'center'}
          w={'180vw'}
          bg={'brand.100'}
          h={'120px'}
          position={'absolute'}
          left={'50%'}
          transform={'translate(-50%, -50%)'}
          borderTopRadius={'150%'}
        >
            <Text as={'span'} fontSize={'xs'} color={'white'}>Copyright © 2023 Scope Seeker Pvt. Ltd. - All rights reserved.</Text>
            <Text as={'span'} fontSize={'xs'} color={'white'}>Image Credit: Designed By Freepik</Text>
          
        </VStack>
      </Box>
    </VStack>
  );
};

export default Footer;
