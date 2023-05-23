import { Box, VStack } from '@chakra-ui/react'
import React from 'react'
import { MyText } from '../text'

const Benifits = () => {
  return (
    <VStack w={'full'} alignItems={'flex-start'} marginTop={'20px'}>
        <MyText as='heading' title='Company Verified Benifits'/>

        {/* Interface */}
        <Box w={'300px'} h={'200px'} bg={'red'}>

        </Box>
    </VStack>
  )
}

export default Benifits