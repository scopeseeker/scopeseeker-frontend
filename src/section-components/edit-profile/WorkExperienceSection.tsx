import { MyButton, MyIcon, MyInput, MyText } from '@/component';
import { editProfileSchema, workexpericenceSchema } from '@/helpers/validationSchema';
import {
  Collapse,
  FormControl,
  FormErrorMessage,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import React, { useState } from 'react';
import AddBoxTemplete from './templates/AddBoxTemplate';
import SectionTempalate from './templates/SectionTemplate';



const WorkExperienceSection = () => {
  const [showExperience, setShowExperience] = React.useState(false);
  const [workExperience, setWorkExperience] = useState<IWorkExperience[]>([]);

  const [formData, setFormData] = useState({
    designation: '',
    sector: '',
    fromYear: '',
    toYear: '',
    organisation: '',
    country: '',
    state: '',
    city: '',
  });

  interface IWorkExperience {
    designation: string;
    sector: string;
    fromYear: string;
    toYear: string;
    organisation: string;
    country: string;
    state: string;
    city: string;
  }

  

  
 

  const handleOpenWorkExperience = () => setShowExperience(!showExperience);
 
  return (
    <SectionTempalate>
      <HStack justifyContent={'space-between'} w={'full'}>
        <MyText as="title" title="Work Experience" />

        <HStack onClick={handleOpenWorkExperience} cursor={'pointer'}>
          <MyIcon
            name="add"
            width="16px"
            color="brand.primary"
            strokeWidth="2.5"
          />
          <MyText
            as="span"
            title="Add"
            color="brand.primary"
            fontWeight={600}
          />
        </HStack>
      </HStack>
      {/* Add Work Experience Box*/}
      {workExperience.length > 0 && (
        <VStack py={'20px'} w={'full'} gap={'20px'}>
          <AddBoxTemplete
            role="Full Stack Web Developer"
            companyImage="/assets/images/company-logo/amazon.png"
            companyName="Align Essential"
            period="Jan 18, 2023 - Feb 28, 2023"
          />

          <AddBoxTemplete
            role="Full Stack Web Developer"
            companyImage="/assets/images/company-logo/amazon.png"
            companyName="Align Essential"
            period="Jan 18, 2023 - Feb 28, 2023"
          />
        </VStack>
      )}
      <Collapse in={showExperience} style={{ width: '100%' }}>
          
            <Formik
              initialValues={{
                designation: '',
                sector: '',
                fromYear: '',
                toYear: '',
                organisation: '',
                country: 'India',
                state: '',
                city: '',
              }}
              validationSchema={workexpericenceSchema}
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ errors, touched, handleSubmit }) => (
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                  <VStack w={'full'}  gap={'32px'}>
                  <HStack
                    flexDir={{ base: 'column', md: 'row' }}
                    spacing={0}
                    gap={'22px'}
                    w={'full'}
                    alignItems={'flex-start'}
                  >
                    <FormControl
                      isInvalid={!!errors.designation && touched.designation}
                    >
                      <Field
                        as={MyInput}
                        name="designation"
                        labelTitle="Designation"
                        leftElement={<MyIcon name="job" />}
                        type="text"
                        placeholder="Type your designation"
                        border={errors.designation && '1px solid red'}
                      />
                      <FormErrorMessage>{errors.designation}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.sector && touched.sector}>
                      <Field
                        as={MyInput}
                        border={errors.sector && '1px solid red'}
                        name="sector"
                        labelTitle="Sector"
                        leftElement={<MyIcon name="fresher" />}
                        type="text"
                        placeholder="Type your Sector"
                      />
                      <FormErrorMessage>{errors.sector}</FormErrorMessage>
                    </FormControl>
                  </HStack>

                  <HStack
                    flexDir={{ base: 'column', md: 'row' }}
                    spacing={0}
                    gap={'22px'}
                    w={'full'}
                    align={'flex-start'}
                  >
                    <FormControl
                      isInvalid={!!errors.fromYear && touched.fromYear}
                    >
                      <Field
                        as={MyInput}
                        border={errors.fromYear && '1px solid red'}
                        name="fromYear"
                        labelTitle="From (Year)"
                        leftElement={<MyIcon name="time" />}
                        type="text"
                        placeholder="Enter Year"
                      />
                      <FormErrorMessage>{errors.fromYear}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.toYear && touched.toYear}>
                      <Field
                        as={MyInput}
                        border={errors.toYear && '1px solid red'}
                        name="toYear"
                        labelTitle="To (Year)"
                        leftElement={<MyIcon name="time" />}
                        type="text"
                        placeholder="Enter Year"
                      />
                      <FormErrorMessage>{errors.toYear}</FormErrorMessage>
                    </FormControl>
                  </HStack>

                  <HStack
                    flexDir={{ base: 'column', md: 'row' }}
                    spacing={0}
                    gap={'22px'}
                    w={'full'}
                    alignItems={'flex-start'}
                  >
                    <FormControl
                      isInvalid={!!errors.organisation && touched.organisation}
                    >
                      <Field
                        as={MyInput}
                        border={errors.organisation && '1px solid red'}
                        name="organisation"
                        labelTitle="Organisation"
                        leftElement={<MyIcon name="college" />}
                        type="text"
                        placeholder="Enter Organisation"
                      />
                      <FormErrorMessage>{errors.organisation}</FormErrorMessage>
                    </FormControl>

                    <FormControl
                      isInvalid={!!errors.country && touched.country}
                    >
                      <Field
                        as={MyInput}
                        border={errors.country && '1px solid red'}
                        name="country"
                        labelTitle="Country"
                        leftElement={<MyIcon name="company" />}
                        type="text"
                        placeholder="Enter Country"
                      />
                      <FormErrorMessage>{errors.country}</FormErrorMessage>
                    </FormControl>
                  </HStack>

                  <HStack
                    flexDir={{ base: 'column', md: 'row' }}
                    spacing={0}
                    gap={'22px'}
                    w={'full'}
                    alignItems={'flex-start'}
                  >
                    <FormControl isInvalid={!!errors.state && touched.state}>
                      <Field
                        as={MyInput}
                        border={errors.state && '1px solid red'}
                        name="state"
                        labelTitle="State"
                        leftElement={<MyIcon name="company" />}
                        type="text"
                        placeholder="Enter Your State"
                      />
                      <FormErrorMessage>{errors.state}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.city && touched.city}>
                      <Field
                        as={MyInput}
                        border={errors.city && '1px solid red'}
                        name="city"
                        labelTitle="City"
                        leftElement={<MyIcon name="company" />}
                        type="text"
                        placeholder="Enter Your City"
                      />
                      <FormErrorMessage>{errors.city}</FormErrorMessage>
                    </FormControl>

                    
                  </HStack>
                  <HStack w={'full'} flexWrap={'wrap'} spacing={0} gap={'12px'}>
                    <MyButton
                      title="Submit"
                      px="50px"
                      type={'submit'}
                    />
                    <MyButton title="Cancel" px="50px" variant="outline" />
                  </HStack>
                  </VStack>
                </form>
              )}
            </Formik>
         
      </Collapse>
    </SectionTempalate>
  );
};


export default WorkExperienceSection;
