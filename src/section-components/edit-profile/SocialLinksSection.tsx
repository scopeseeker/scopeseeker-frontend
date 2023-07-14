import { MyIcon, MyInput, MyText } from '@/component';
import { socialLinksSchema } from '@/helpers/validationSchema';
import {
  FormControl,
  FormErrorMessage,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import SectionTempalate from './templates/SectionTemplate';

const SocialLinksSection = () => {
  return (
    <SectionTempalate>
      <MyText as="title" title="Social Media" />
      <Formik
        initialValues={{
          linkedin: '',
          facebook: '',
          instagram: '',
          github: '',
        }}
        validationSchema={socialLinksSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <VStack gap={'22px'} w={'full'} alignItems={'flex-start'}>
              <HStack
                w={'full'}
                flexDir={{ base: 'column', md: 'row' }}
                spacing={0}
                gap={'22px'}
                alignItems={'flex-start'}
              >
                <FormControl isInvalid={!!errors.linkedin && touched.linkedin}>
                  <Field
                    as={MyInput}
                    labelTitle="Linkedin"
                    leftElement={<MyIcon name="linkedin" />}
                    type="text"
                    placeholder="Enter the link"
                    name="linkedin"
                  />
                  <FormErrorMessage>{errors.linkedin}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.facebook && touched.facebook}>
                  <Field
                    as={MyInput}
                    labelTitle="Facebook"
                    leftElement={<MyIcon name="facebook" />}
                    type="text"
                    placeholder="Enter the link"
                    name="facebook"
                  />
                  <FormErrorMessage>{errors.facebook}</FormErrorMessage>
                </FormControl>

                
              </HStack>

              <HStack
                w={'full'}
                flexDir={{ base: 'column', md: 'row' }}
                spacing={0}
                gap={'22px'}
                alignItems={'flex-start'} 
              >
                <FormControl isInvalid={!!errors.instagram && touched.instagram}>
                  <Field
                    as={MyInput}
                    labelTitle="Instagram"
                    leftElement={<MyIcon name="instagram" />}
                    type="text"
                    placeholder="Enter the link"
                    name="instagram"
                   
                  />
                  <FormErrorMessage>{errors.instagram}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.github && touched.github}>
                  <Field
                    as={MyInput}
                    labelTitle="GitHub"
                    leftElement={<MyIcon name="github" />}
                    type="text"
                    placeholder="Enter the link"
                    name="github"
                    
                   
                  />
                  <FormErrorMessage>{errors.github}</FormErrorMessage>
                </FormControl>

               
               
              </HStack>
            </VStack>
          </form>
        )}
      </Formik>
    </SectionTempalate>
  );
};

export default SocialLinksSection;
