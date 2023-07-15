import { MyButton, MyIcon, MyInput, MyText } from '@/component';
import { educationSchema } from '@/helpers/validationSchema';
import {
  Collapse,
  FormControl,
  FormErrorMessage,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useState } from 'react';
import AddBoxTemplete from './templates/AddBoxTemplate';
import SectionTempalate from './templates/SectionTemplate';

const EducationSection = () => {
  const [showEducation, setShowEducation] = useState(false);
  const handleOpenEdcation = () => setShowEducation(!showEducation);
  return (
    <SectionTempalate id='education-section'>
      <HStack justifyContent={'space-between'} w={'full'}>
        <MyText as="title" title="Education" />
        <HStack onClick={handleOpenEdcation} cursor={'pointer'}>
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

      <VStack py={'20px'} w={'full'}  gap={'20px'}>
        <AddBoxTemplete
          role="Sagar Institute of Research & Technology (SIRT), Bhopal "
          companyImage="/assets/images/company-logo/amazon.png"
          companyName="B.Tech"
          period="2020 - 2024"
        />

        <AddBoxTemplete
          role="Sagar Institute of Research & Technology (SIRT), Bhopal "
          companyImage="/assets/images/company-logo/amazon.png"
          companyName="B.Tech"
          period="2020 - 2024"
        />
      </VStack>

      <Collapse in={showEducation} style={{ width: '100%' }}>
        <Formik
          initialValues={{
            qualification: '',
            degree: '',
            fromYear: '',
            toYear: '',
            percentage: '',
            cgpa: '',
            specialization: '',
            university: '',
            country: 'India',
            state: '',
            city: '',
            institute: '',
          }}
          validationSchema={educationSchema}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ errors, touched, handleSubmit, resetForm }) => (
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <VStack gap={'22px'} w={'full'}>
                <HStack
                  w={'full'}
                  flexDir={{ base: 'column', md: 'row' }}
                  spacing={0}
                  gap={'22px'}
                  alignItems={'flex-start'}
                >
                  <FormControl
                    isInvalid={!!errors.qualification && touched.qualification}
                  >
                    <Field
                      as={MyInput}
                      labelTitle="Qualification"
                      name="qualification"
                      leftElement={<MyIcon name="job" />}
                      type="text"
                      placeholder="Enter your qualification"
                      border={errors.qualification && '1px solid red'}
                    />
                    <FormErrorMessage>{errors.qualification}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.degree && touched.degree}>
                    <Field
                      as={MyInput}
                      border={errors.degree && '1px solid red'}
                      labelTitle="Degree"
                      name="degree"
                      leftElement={<MyIcon name="fresher" />}
                      type="text"
                      placeholder="Enter your degree"
                    />
                    <FormErrorMessage>{errors.degree}</FormErrorMessage>
                  </FormControl>
                </HStack>

                <HStack
                  w={'full'}
                  flexDir={{ base: 'column', md: 'row' }}
                  spacing={0}
                  gap={'22px'}
                  alignItems={'flex-start'}
                >
                  <FormControl
                    isInvalid={!!errors.fromYear && touched.fromYear}
                  >
                    <Field
                      as={MyInput}
                      border={errors.fromYear && '1px solid red'}
                      labelTitle="From (Year)"
                      leftElement={<MyIcon name="time" />}
                      type="text"
                      placeholder="Enter year"
                      name="fromYear"
                    />
                    <FormErrorMessage>{errors.fromYear}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.toYear && touched.toYear}>
                    <Field
                      as={MyInput}
                      border={errors.fromYear && '1px solid red'}
                      labelTitle="To (Year)"
                      leftElement={<MyIcon name="time" />}
                      type="text"
                      placeholder="Enter year"
                      name="toYear"
                    />
                    <FormErrorMessage>{errors.toYear}</FormErrorMessage>
                  </FormControl>
                </HStack>

                <HStack
                  w={'full'}
                  flexDir={{ base: 'column', md: 'row' }}
                  spacing={0}
                  gap={'22px'}
                  alignItems={'flex-start'}
                >
                  <FormControl
                    isInvalid={!!errors.percentage && touched.percentage}
                  >
                    <Field
                      as={MyInput}
                      border={errors.percentage && '1px solid red'}
                      labelTitle="Percentage"
                      leftElement={<MyIcon name="college" />}
                      type="text"
                      placeholder="Enter your percentage"
                      name="percentage"
                    />
                    <FormErrorMessage>{errors.percentage}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.cgpa && touched.cgpa}>
                    <Field
                      as={MyInput}
                      border={errors.cgpa && '1px solid red'}
                      labelTitle="CGPA"
                      leftElement={<MyIcon name="company" />}
                      type="text"
                      placeholder="Enter your cgpa"
                      name="cgpa"
                    />
                    <FormErrorMessage>{errors.cgpa}</FormErrorMessage>
                  </FormControl>
                </HStack>

                <HStack
                  w={'full'}
                  flexDir={{ base: 'column', md: 'row' }}
                  spacing={0}
                  gap={'22px'}
                  alignItems={'flex-start'}
                >
                  <FormControl
                    isInvalid={
                      !!errors.specialization && touched.specialization
                    }
                  >
                    <Field
                      as={MyInput}
                      border={errors.cgpa && '1px solid red'}
                      labelTitle="Specialization"
                      leftElement={<MyIcon name="company" />}
                      type="text"
                      placeholder="Enter your specialization"
                      name="specialization"
                    />
                    <FormErrorMessage>{errors.specialization}</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={!!errors.university && touched.university}
                  >
                    <Field
                      as={MyInput}
                      border={errors.university && '1px solid red'}
                      labelTitle="University "
                      leftElement={<MyIcon name="company" />}
                      type="text"
                      placeholder="Enter your university"
                      name="university"
                    />
                    <FormErrorMessage>{errors.university}</FormErrorMessage>
                  </FormControl>
                </HStack>

                <FormControl
                  isInvalid={!!errors.institute && touched.institute}
                >
                  <Field
                    as={MyInput}
                    border={errors.institute && '1px solid red'}
                    labelTitle="Institute"
                    leftElement={<MyIcon name="college" />}
                    type="text"
                    placeholder="Enter your Institute"
                    name="institute"
                  />
                  <FormErrorMessage>{errors.institute}</FormErrorMessage>
                </FormControl>

               

                <HStack
                  flexDir={{ base: 'column', md: 'row' }}
                  spacing={0}
                  w={'full'}
                  gap={'22px'}
                  alignItems={'flex-start'}
                >
                  <FormControl isInvalid={!!errors.country && touched.country}>
                    <Field
                      as={MyInput}
                      border={errors.country && '1px solid red'}
                      labelTitle="Country"
                      leftElement={<MyIcon name="company" />}
                      type="text"
                      placeholder="Enter your country"
                      name="country"
                    />
                    <FormErrorMessage>{errors.country}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.state && touched.state}>
                    <Field
                      as={MyInput}
                      border={errors.state && '1px solid red'}
                      labelTitle="State"
                      leftElement={<MyIcon name="company" />}
                      type="text"
                      placeholder="Enter your state"
                      name="state"
                    />
                    <FormErrorMessage>{errors.state}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.city && touched.city}>
                    <Field
                      as={MyInput}
                      border={errors.city && '1px solid red'}
                      labelTitle="City"
                      leftElement={<MyIcon name="company" />}
                      type="text"
                      placeholder="Enter your city"
                      name="city"
                    />
                    <FormErrorMessage>{errors.city}</FormErrorMessage>
                  </FormControl>
                </HStack>
                <HStack w={'full'} flexWrap={'wrap'} spacing={0} gap={'12px'}>
                  <MyButton title="Submit" px="50px" type={'submit'} />
                  <MyButton
                    title="Cancel"
                    px="50px"
                    variant="outline"
                    onClick={resetForm}
                  />
                </HStack>
              </VStack>
            </form>
          )}
        </Formik>
      </Collapse>
    </SectionTempalate>
  );
};

export default EducationSection;
