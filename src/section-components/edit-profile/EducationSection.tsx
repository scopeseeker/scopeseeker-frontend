import { MyButton, MyIcon, MyInput, MyText } from '@/component';
import {
  degree,
  graduationDegree,
  postGraduationDegree,
  qualification,
} from '@/constant/editProfileData';
import { educationSchema } from '@/helpers/validationSchema';
import {
  Collapse,
  FormControl,
  FormErrorMessage,
  HStack,
  Select,
  VStack,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useState } from 'react';
import AddBoxTemplete from './templates/AddBoxTemplate';
import SectionTempalate from './templates/SectionTemplate';

const EducationSection = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [buttonText, setButtonText] = useState('Add');

  const handleOpenEducation = () => {
    setShowEducation(!showEducation);
    setButtonText(showEducation ? 'Add' : 'Cancel');
  };

  return (
    <SectionTempalate id="education-section">
      <HStack justifyContent={'space-between'} w={'full'}>
        <MyText as="title" title="Education" />
        <HStack onClick={handleOpenEducation} cursor={'pointer'}>
          <MyIcon
            name={showEducation ? 'minus' : 'add'}
            width="16px"
            color={showEducation ? 'red' : 'brand.primary'}
            strokeWidth="2.5"
          />
          <MyText
            as="span"
            title={showEducation ? 'Cancel' : 'Add'}
            color={showEducation ? 'red' : 'brand.primary'}
            fontWeight={600}
          />
        </HStack>
      </HStack>

      <VStack py={'20px'} w={'full'} gap={'20px'}>
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
            specialization: '',
            country: 'India',
            state: '',
            city: '',
            institute: '',
            other: '',
          }}
          validationSchema={educationSchema}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ errors, touched, handleSubmit, resetForm, values }) => (
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <VStack gap={'22px'} w={'full'}>
                <VStack w={'full'} alignItems={'flex-start'}>
                  <MyText as="span" title="Qualification" />
                  <FormControl
                    isInvalid={!!errors.qualification && touched.qualification}
                  >
                    <Field
                      as={Select}
                      name="qualification"
                      placeholder="Enter your qualification"
                      fontSize={'14px'}
                    >
                      {qualification.map((value, index) => {
                        return (
                          <option value={value} key={index}>
                            {value}
                          </option>
                        );
                      })}
                    </Field>
                    <FormErrorMessage>{errors.qualification}</FormErrorMessage>
                  </FormControl>
                </VStack>

                {values.qualification !== 'Intermediate (12th)' &&
                  values.qualification !== 'High School (10th)' && (
                    <VStack w={'full'} alignItems={'flex-start'}>
                      <MyText as="span" title="Degree" />
                      <FormControl
                        isInvalid={!!errors.degree && touched.degree}
                      >
                        <Field
                          as={Select}
                          name="degree"
                          placeholder="Enter your degree"
                          fontSize={'14px'}
                        >
                          <>
                            {values.qualification === 'PhD' &&
                              degree.map((value, index) => {
                                return (
                                  <option value={value} key={index}>
                                    {value}
                                  </option>
                                );
                              })}

                            {values.qualification === 'Post Graduation' &&
                              postGraduationDegree.map((value, index) => {
                                return (
                                  <option value={value} key={index}>
                                    {value}
                                  </option>
                                );
                              })}

                            {values.qualification === 'Graduation' &&
                              graduationDegree.map((value, index) => {
                                return (
                                  <option value={value} key={index}>
                                    {value}
                                  </option>
                                );
                              })}
                          </>
                        </Field>
                        <FormErrorMessage>{errors.degree}</FormErrorMessage>
                      </FormControl>
                    </VStack>
                  )}

                {values.degree === 'Other' && (
                  <FormControl isInvalid={!!errors.other && touched.other}>
                    <Field
                      as={MyInput}
                      labelTitle="Other"
                      leftElement={<MyIcon name="college" />}
                      type="text"
                      placeholder="Enter your Degree"
                      name="other"
                    />
                    <FormErrorMessage>{errors.other}</FormErrorMessage>
                  </FormControl>
                )}

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
                      labelTitle="Percentage/CGPA"
                      leftElement={<MyIcon name="college" />}
                      type="text"
                      placeholder="Enter your percentage"
                      name="percentage"
                    />
                    <FormErrorMessage>{errors.percentage}</FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={
                      !!errors.specialization && touched.specialization
                    }
                  >
                    <Field
                      as={MyInput}
                      border={errors.specialization && '1px solid red'}
                      labelTitle="Specialization"
                      leftElement={<MyIcon name="company" />}
                      type="text"
                      placeholder="Enter your specialization"
                      name="specialization"
                    />
                    <FormErrorMessage>{errors.specialization}</FormErrorMessage>
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
