import React from 'react';
import SectionTempalate from './templates/SectionTemplate';
import { MyIcon, MyInput, MyText } from '@/component';
import { HStack, VStack } from '@chakra-ui/react';

const SocialLinksSection = () => {
  return (
    <SectionTempalate>
      <MyText as="title" title="Social Media" />
      <VStack gap={'22px'} w={'full'} alignItems={'flex-start'}>
        <HStack
          w={'full'}
          flexDir={{ base: 'column', md: 'row' }}
          spacing={0}
          gap={'22px'}
        >
          <MyInput
            labelTitle="Linkedin"
            leftElement={<MyIcon name="linkedin" />}
            type="text"
            placeholder="Enter the link"
            name='linkedin'
          />
          <MyInput
            labelTitle="Facebook"
            leftElement={<MyIcon name="facebook" />}
            type="text"
            placeholder="Enter the link"
            name='facebook'
          />
        </HStack>

        <HStack
          w={'full'}
          flexDir={{ base: 'column', md: 'row' }}
          spacing={0}
          gap={'22px'}
        >
          <MyInput
            labelTitle="Instagram"
            leftElement={<MyIcon name="instagram" />}
            type="text"
            placeholder="Enter the link"
            name='instagram'
          />
          <MyInput
            labelTitle="GitHub"
            leftElement={<MyIcon name="github" />}
            type="text"
            placeholder="Enter the link"
            name='github'
          />
        </HStack>
      </VStack>
    </SectionTempalate>
  );
};

export default SocialLinksSection;
