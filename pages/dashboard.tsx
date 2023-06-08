import { Layout, MyIcon, MyImage, MyText } from '@/component';
import { Box, Center, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

function Dashboard() {
  return (
    <Box w={'full'} h={'100vh'} px={'12px'}>
      <HStack w={'full'} h={'full'} gap={'12px'} py={'29px'}>
        {/* Left Part */}
        <VStack w={'212px'} h={'full'} position={'relative'} gap={'18px'}>
          <VStack
            w={'full'}
            borderRight={'1px solid'}
            borderColor={'brand.lightgray'}
            alignItems={'flex-start'}
            gap={'12px'}
            h={'full'}
            p="12px"
          >
            <VStack w={'full'} spacing={0}>
              <Center
                w={'120px'}
                h={'120px'}
                bg={'green.300'}
                borderRadius={'50%'}
                m={'4px'}
                overflow={'hidden'}
                border={'2px solid'}
                borderColor={'brand.primary'}
              >
                <MyImage
                  src={'/assets/images/p12.jpg'}
                  alt="profile"
                  width={120}
                  height={120}
                />
              </Center>
              <MyText as="title" title="Lokesh Dhakar" />
              <MyText as="small" title="lokeshdhakar@gmail.com" />
            </VStack>
            <VStack w={'full'} gap={'4px'}>
              <Center
                gap={'4px'}
                justifyContent={'flex-start'}
                px={'18px'}
                w={'full'}
              >
                <MyIcon
                  name="chartPie"
                  width="20px"
                  height="20px"
                  strokeWidth="1"
                />
                <MyText as="link" title="Dasdhboard" />
              </Center>
              <Center
                gap={'4px'}
                justifyContent={'flex-start'}
                px={'18px'}
                w={'full'}
              >
                <MyIcon
                  name="case"
                  width="20px"
                  height="20px"
                  strokeWidth="1"
                />
                <MyText as="link" title="Recommanded Jobs" />
              </Center>
              <Center
                gap={'4px'}
                justifyContent={'flex-start'}
                px={'18px'}
                w={'full'}
              >
                <MyIcon
                  name="company"
                  width="20px"
                  height="20px"
                  strokeWidth="1"
                />
                <MyText as="link" title="Favourate Company" />
              </Center>
              <Center
                gap={'4px'}
                justifyContent={'flex-start'}
                px={'18px'}
                w={'full'}
              >
                <MyIcon
                  name="company"
                  width="20px"
                  height="20px"
                  strokeWidth="1"
                />
                <MyText as="link" title="Favourate Company" />
              </Center>
              <Center
                gap={'4px'}
                justifyContent={'flex-start'}
                px={'18px'}
                w={'full'}
              >
                <MyIcon
                  name="company"
                  width="20px"
                  height="20px"
                  strokeWidth="1"
                />
                <MyText as="link" title="Favourate Company" />
              </Center>
            </VStack>
          </VStack>
        </VStack>
        <VStack
          w={'80%'}
          h={'full'}
          overflowX={'scroll'}
          p={'12px'}
          gap={'42px'}
          bg={'red.50'}
        >
          <HStack justifyContent={'flex-start'} w={'full'}>
            <MyText title="My Dashboard" as="heading" />
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}

export default Dashboard;
