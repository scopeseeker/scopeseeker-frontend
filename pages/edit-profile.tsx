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
import { HStack, VStack } from '@chakra-ui/react';
import Head from 'next/head';

function EditProfile() {
  return (
    <>
      <Head>
        <title>Edit Profile | Scope Seeker</title>
      </Head>
      <Layout w={'full'}>
        <HStack
          w={'full'}
          spacing={0}
          h={'full'}
          gap={'32px'}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
        >
          <LeftEditProfilePart />
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
}

export default EditProfile;
