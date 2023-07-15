import React from 'react';
import SectionTempalate from './templates/SectionTemplate';
import { MyButton, MyIcon, MyText } from '@/component';
import { Box, Center, HStack, VStack } from '@chakra-ui/react';

const ResumeSection = () => {
  return (
    <SectionTempalate id='resume-section'>
      <MyText as="title" title="Resume" />
      <VStack alignSelf={'center'} w={{ base: 'full', md: '80%' }} gap={'20px'}>
        <HStack
          w={'full'}
          justifyContent={'space-between'}
          borderWidth={'1.5px'}
          borderColor={'brand.lightgray'}
          p={'10px'}
          borderRadius={'10px'}
        >
          <MyText title="Lokesh.pdf" as={'small'} />

          <Center
            w={'30px'}
            h={'30px'}
            borderRadius={'50%'}
            bg={'red'}
            cursor={'pointer'}
          >
            <MyIcon name={'delete'} color="brand.white" strokeWidth="2" />
          </Center>
        </HStack>

        <Center
          h={'220px'}
          w={'full'}
          border={'2px dashed'}
          borderColor={'brand.darkgray'}
          bg={'brand.aliceblue'}
          flexDir={'column'}
          gap={'15px'}
          borderRadius={'10px'}
        >
          <MyIcon name={'upload'} />
          <MyButton title="Upload Resume" />
          <Box w={{ base: '80%', md: 'initial' }}>
            <MyText
              title="Supported Formats: doc, docx, rtf, pdf, upto 2 MB"
              as={'span'}
              color="brand.darkgray"
            />
          </Box>
        </Center>
      </VStack>
    </SectionTempalate>
  );
};

export default ResumeSection;
