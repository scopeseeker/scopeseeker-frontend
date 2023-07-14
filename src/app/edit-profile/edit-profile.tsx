'use client';
import { Layout, MyButton } from '@/component';
import {
  BasicInformationSection,
  EducationSection,
  LeftEditProfilePart,
  ResumeSection,
  SkillsSection,
  WorkExperienceSection,
} from '@/section-components';
import SocialLinksSection from '@/section-components/edit-profile/SocialLinksSection';
import { Center, HStack, VStack } from '@chakra-ui/react';

const EditProfile = () => {
  return (
    <>
      <Layout w={'full'}>
        <HStack
          w={'full'}
          spacing={0}
          h={'full'}
          gap={'32px'}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
        >
          {/* Left Part */}
          <Center
            position={'sticky'}
            top={'86px'}
            w={{ base: 'full', lg: '212px' }}
            display={{ base: 'none', lg: 'initial' }}
          >
            <LeftEditProfilePart />
          </Center>

          {/* Right Part */}
          <VStack w={{ base: 'full', lg: '80%' }} h={'full'} gap={'42px'}>
            <BasicInformationSection />
            <ResumeSection />
            <SkillsSection />
            <WorkExperienceSection />
            <EducationSection />
            <SocialLinksSection />
            <VStack w={'full'} alignItems={'flex-start'}>
              <MyButton title="Submit" px="50px" py={'10px'} />
            </VStack>
          </VStack>
        </HStack>
      </Layout>
    </>
  );
};

export default EditProfile;
