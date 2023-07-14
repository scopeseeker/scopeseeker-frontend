import { MyButton, MyIcon, MyInput, MyText, RadioButton } from '@/component';
import { useCustomToast } from '@/helpers/toast';
import { editProfileSchema } from '@/helpers/validationSchema';
import {
  FormControl,
  FormErrorMessage,
  HStack,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import React, { ChangeEvent, useState } from 'react';
import SectionTempalate from './templates/SectionTemplate';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  country: string;
  city: string;
  gender: string;
  userType: string;
  domain: string;
  course: string;
  courseSpecialization: string;
  yearOfGraduation: string;
  summary: string;
}

const BasicInformationSection = () => {
  const showToast = useCustomToast();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    organisation: '',
    country: '',
    city: '',
    gender: '',
    userType: '',
    domain: '',
    course: '',
    courseSpecialization: '',
    yearOfGraduation: '',
    summary: '',
  });

  const handleInputChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (e.target.type === 'radio') {
      // Handle radio button value
      const radioValue = e.target.value;
      setFormData((prevData) => ({
        ...prevData,
        [name]: radioValue,
      }));
    } else {
      // Handle other input values
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { phone, ...formDataWithoutPhone } = formData;
    // Check if any fields are empty
    const hasEmptyFields = Object.values(formDataWithoutPhone).some(
      (value) => value.trim() === '',
    );

    if (hasEmptyFields) {
      showToast({
        title: 'Error',
        description: 'Please Fill in  all required fields',
        status: 'error',
      });
      return;
    }
    console.log(formData);
  };

  return (
    <FormControl>
      <form>
        <SectionTempalate>
          <MyText as="title" title="Basic Information" />

          <Formik
            initialValues={{
              fullName: '',
              email: '',
              phone: '',
              organisation: '',
              country: '',
              city: '',
            }}
            validationSchema={editProfileSchema}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <VStack w={'full'} alignItems={'flex-start'} gap={'22px'}>
                  <FormControl
                    isInvalid={!!errors.fullName && touched.fullName}
                  >
                    <Field
                      as={MyInput}
                      labelTitle="Full Name"
                      type="text"
                      name="fullName"
                      placeholder="John Doe"
                      leftElement={<MyIcon name="profile" />}
                      onChange={handleInputChange}
                    />
                    <FormErrorMessage>{errors.fullName}</FormErrorMessage>
                  </FormControl>

                  <HStack
                    w={'full'}
                    flexDir={{ base: 'column', md: 'row' }}
                    spacing={0}
                    gap={'22px'}
                    alignItems={'flex-start'}
                  >
                    <FormControl isInvalid={!!errors.email && touched.email}>
                      <Field
                        as={MyInput}
                        labelTitle="Email"
                        type="email"
                        name="email"
                        placeholder="abhishek123@gmail.com"
                        leftElement={<MyIcon name="email" />}
                        onChange={handleInputChange}
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.phone && touched.phone}>
                      <Field
                        as={MyInput}
                        labelTitle="Phone"
                        type="number"
                        name="phone"
                        placeholder="+91XXXXXXXX23"
                        leftElement={<MyIcon name="phone" />}
                        onChange={handleInputChange}
                      />
                      <FormErrorMessage>{errors.phone}</FormErrorMessage>
                    </FormControl>
                  </HStack>

                  <FormControl
                    isInvalid={!!errors.organisation && touched.organisation}
                  >
                    <Field
                      as={MyInput}
                      labelTitle="Organisation"
                      type="text"
                      name="organisation"
                      placeholder="Sagar Institute of Research Technology and Science (SIRTS), Bhopal"
                      leftElement={<MyIcon name="college" />}
                      onChange={handleInputChange}
                    />
                    <FormErrorMessage>{errors.organisation}</FormErrorMessage>
                  </FormControl>

                  <HStack
                    w={'full'}
                    flexDir={{ base: 'column', md: 'row' }}
                    spacing={0}
                    gap={'22px'}
                    alignItems={'flex-start'}
                  >
                    <FormControl
                      isInvalid={!!errors.country && touched.country}
                    >
                      <Field
                        as={MyInput}
                        type="text"
                        labelTitle="Country"
                        placeholder="India"
                        name="country"
                        leftElement={<MyIcon name="global" />}
                        onChange={handleInputChange}
                      />
                      <FormErrorMessage>{errors.country}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={!!errors.city && touched.city}>
                      <Field
                        as={MyInput}
                        labelTitle="City"
                        type="text"
                        placeholder="Bhopal"
                        name="city"
                        leftElement={<MyIcon name="company" />}
                        onChange={handleInputChange}
                      />
                      <FormErrorMessage>{errors.city}</FormErrorMessage>
                    </FormControl>

                   
                  </HStack>

                  <VStack alignItems={'flex-start'}>
                    <MyText as="span" title="Gender" />
                    <RadioButton
                      name="gender"
                      options={['Male', 'Female', 'Other', 'Prefer not to say']}
                      onChange={handleInputChange}
                    />
                  </VStack>

                  {/* For User Type */}
                  <VStack alignItems={'flex-start'}>
                    <MyText as="span" title="User Type" />
                    <RadioButton
                      name="userType"
                      options={['College Student', 'Professional', 'Fresher']}
                      onChange={handleInputChange}
                    />
                  </VStack>

                  {/* For Domain Selection */}
                  <VStack alignItems={'flex-start'}>
                    <MyText as="span" title="Domain" />
                    <RadioButton
                      name="domain"
                      options={['Tech', 'Non-Tech']}
                      onChange={handleInputChange}
                    />
                  </VStack>

                  {/* For Course Selection */}
                  <VStack alignItems={'flex-start'}>
                    <MyText as="span" title="Course" />
                    <RadioButton
                      name="course"
                      options={['B.Tech', 'M.Tech', 'BCA', 'MCA', 'Other']}
                      onChange={handleInputChange}
                    />
                  </VStack>

                  {/* For Course Specialization */}
                  <VStack alignItems={'flex-start'}>
                    <MyText as="span" title="Course Specialization" />
                    <Select
                      placeholder="Computer Science"
                      fontSize={'13px'}
                      onChange={handleInputChange}
                      name="courseSpecialization"
                    >
                      {[
                        'Aerospace',
                        'Automotive',
                        'Biotechnology',
                        'Chemical',
                        'Civil',
                        'Electrical',
                        'Electronics and Communication',
                        'Information Technology',
                        'Instrument',
                        'Other',
                        'Not Applicable',
                      ].map((value, index) => {
                        return (
                          <option value={value} key={index}>
                            {value}
                          </option>
                        );
                      })}
                    </Select>
                  </VStack>

                  {/* For Year of Graduation */}
                  <VStack alignItems={'flex-start'}>
                    <MyText as="span" title="Year Of Graduation" />
                    <Select
                      placeholder="2016"
                      fontSize={'13px'}
                      name="yearOfGraduation"
                      onChange={handleInputChange}
                    >
                      {['2017', '2018', '2019', '2020', '2021', '2022'].map(
                        (value, index) => {
                          return (
                            <option value={value} key={index}>
                              {value}
                            </option>
                          );
                        },
                      )}
                    </Select>
                  </VStack>

                  {/* For Summary */}
                  <VStack alignItems={'flex-start'} w={'full'}>
                    <MyText as="span" title="Summary" />
                    <Textarea
                      placeholder="Write about yourself..."
                      resize={'none'}
                      onChange={handleInputChange}
                      name="summary"
                    />
                  </VStack>
                  <HStack>
                    <MyButton
                      type={'submit'}
                      title="Save"
                      px={'30px'}
                      onClick={handleSubmit}
                    />
                    <MyButton
                      type={'reset'}
                      title="Cancel"
                      px={'30px'}
                      variant="outline"
                      onClick={handleSubmit}
                    />
                  </HStack>
                </VStack>
              </form>
            )}
          </Formik>
        </SectionTempalate>
      </form>
    </FormControl>
  );
};

export default BasicInformationSection;
