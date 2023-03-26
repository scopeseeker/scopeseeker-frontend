import { Center, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Company = () => {
  return (
    <Center gap={28} w={'full'} h={'3xs'} px={28}>
          <Center w={36} h={30}>
            <Image src={require('../../public/amazon.png')}/>
          </Center>
          <Center w={36} h={30}>
            <Image src={require('../../public/bookmyshow.png')}/>
          </Center>
          <Center w={36} h={30}>
            <Image src={require('../../public/amazon.png')}/>
          </Center>
          <Center w={36} h={30}>
            <Image src={require('../../public/bookmyshow.png')}/>
          </Center>
          <Center w={36} h={30}>
            <Image src={require('../../public/amazon.png')}/>
          </Center>
          <Center w={36} h={30}>
            <Image src={require('../../public/bookmyshow.png')}/>
          </Center>
          <Center w={36} h={30}>
            <Image src={require('../../public/amazon.png')}/>
          </Center>
    </Center> 
  )
}

export default Company