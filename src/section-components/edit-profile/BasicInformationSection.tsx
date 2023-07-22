import { MyButton, MyIcon, MyInput, MyText, RadioButton } from '@/component';
import {
  courseSpecializationNonTech,
  courseSpecializationTech,
  yearOfGraduation,
} from '@/constant/basic-information/data';
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
  return (
    <SectionTempalate id="basic-section">
      <MyText as="title" title="Basic Information" />

      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phone: '',
          organisation: '',
          country: 'India',
          city: '',
          gender: '',
          userType: '',
          domain: '',
          course: '',
          courseSpecialization: '',
          yearOfGraduation: '',
          summary: '',
        }}
        validationSchema={editProfileSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ errors, touched, handleSubmit, values }) => (
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <VStack w={'full'} alignItems={'flex-start'} gap={'22px'}>
              <FormControl isInvalid={!!errors.fullName && touched.fullName}>
                <Field
                  as={MyInput}
                  labelTitle="Full Name"
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  leftElement={<MyIcon name="profile" />}
                  border={errors.fullName && '1px solid red'}
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
                    border={errors.email && '1px solid red'}
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
                    border={errors.phone && '1px solid red'}
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
                  border={errors.organisation && '1px solid red'}
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
                <FormControl isInvalid={!!errors.country && touched.country}>
                  <Field
                    as={MyInput}
                    type="text"
                    labelTitle="Country"
                    placeholder="India"
                    name="country"
                    leftElement={<MyIcon name="global" />}
                    border={errors.country && '1px solid red'}
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
                    border={errors.city && '1px solid red'}
                  />
                  <FormErrorMessage>{errors.city}</FormErrorMessage>
                </FormControl>
              </HStack>

              <FormControl isInvalid={!!errors.gender && touched.gender}>
                <VStack alignItems={'flex-start'}>
                  <MyText as="span" title="Gender" />
                  <Field
                    as={RadioButton}
                    name="gender"
                    options={['Male', 'Female', 'Other', 'Prefer not to say']}
                  />
                </VStack>
                <FormErrorMessage>{errors.gender}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.userType && touched.userType}>
                <VStack alignItems={'flex-start'}>
                  <MyText as="span" title="User Type" />
                  <Field
                    as={RadioButton}
                    name="userType"
                    options={['College Student', 'Professional', 'Fresher']}
                  />
                </VStack>
                <FormErrorMessage>{errors.userType}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.domain && touched.domain}>
                <VStack alignItems={'flex-start'}>
                  <MyText as="span" title="Domain" />
                  <Field
                    as={RadioButton}
                    name="domain"
                    options={['Tech', 'Non-Tech']}
                  />
                </VStack>
                <FormErrorMessage>{errors.domain}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.course && touched.course}>
                <VStack alignItems={'flex-start'}>
                  <MyText as="span" title="Course" />
                  <Field
                    as={RadioButton}
                    name="course"
                    options={['B.Tech', 'M.Tech', 'BCA', 'MCA', 'Other']}
                  />
                </VStack>
                <FormErrorMessage>{errors.course}</FormErrorMessage>
              </FormControl>

              {/* For Course Specialization */}
              <VStack alignItems={'flex-start'}>
                <MyText as="span" title="Course Specialization" />
                <FormControl
                  isInvalid={
                    !!errors.courseSpecialization &&
                    touched.courseSpecialization
                  }
                >
                  <Field
                    placeholder="Select Course Specialization"
                    fontSize={'13px'}
                    name="courseSpecialization"
                    as={Select}
                  >
                    {values.domain === 'Tech'
                      ? courseSpecializationTech.map((value, index) => (
                          <option value={value} key={index}>
                            {value}
                          </option>
                        ))
                      : courseSpecializationNonTech.map((value, index) => (
                          <option value={value} key={index}>
                            {value}
                          </option>
                        ))}
                  </Field>
                  <FormErrorMessage>
                    {errors.courseSpecialization}
                  </FormErrorMessage>
                </FormControl>
              </VStack>

              {/* For Year of Graduation */}
              <VStack alignItems={'flex-start'}>
                <MyText as="span" title="Year Of Graduation" />
                <FormControl
                  isInvalid={
                    !!errors.yearOfGraduation && touched.yearOfGraduation
                  }
                >
                  <Field
                    placeholder="Select Year of Graduation"
                    fontSize={'13px'}
                    name="yearOfGraduation"
                    as={Select}
                  >
                    {yearOfGraduation.map((value, index) => {
                      return (
                        <option value={value} key={index}>
                          {value}
                        </option>
                      );
                    })}
                  </Field>
                  <FormErrorMessage>{errors.yearOfGraduation}</FormErrorMessage>
                </FormControl>
              </VStack>

              {/* For Summary */}
              <VStack alignItems={'flex-start'} w={'full'}>
                <MyText as="span" title="Summary" />
                <FormControl isInvalid={!!errors.summary && touched.summary}>
                  <Field
                    as={Textarea}
                    placeholder="Write about yourself..."
                    resize={'none'}
                    minH={'200px'}
                    name="summary"
                  />
                  <FormErrorMessage>{errors.summary}</FormErrorMessage>
                </FormControl>
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
  );
};

export default BasicInformationSection;
