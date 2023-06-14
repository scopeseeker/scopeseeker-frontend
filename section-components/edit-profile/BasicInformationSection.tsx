import { MyButton, MyIcon, MyInput, MyText, RadioButton } from '@/component';
import {
  Button,
  FormControl,
  HStack,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
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
      | ChangeEvent<HTMLTextAreaElement>
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

  const handleSubmit = () => {
    // Send the formData to the backend API or perform any other action
    console.log('Form Data:', formData);
  };

  return (
    <FormControl isRequired>
      <form>
        <SectionTempalate>
          <MyText as="title" title="Basic Information" />

          <VStack w={'full'} alignItems={'flex-start'} gap={'22px'}>
            <MyInput
              labelTitle="Full Name"
              type="text"
              name="fullName"
              placeholder="Abhishek Kumar"
              leftElement={<MyIcon name="user" />}
              onChange={handleInputChange}
            />

            <HStack
              w={'full'}
              flexDir={{ base: 'column', md: 'row' }}
              spacing={0}
              gap={'22px'}
            >
              <MyInput
                labelTitle="Email"
                type="email"
                name="email"
                placeholder="abhishek123@gmail.com"
                leftElement={<MyIcon name="email" />}
                onChange={handleInputChange}
              />

              <MyInput
                labelTitle="Phone"
                type="number"
                name="phone"
                placeholder="+91XXXXXXXX23"
                leftElement={<MyIcon name="phone" />}
                onChange={handleInputChange}
              />
            </HStack>

            <MyInput
              labelTitle="Organization/ College"
              type="text"
              name="organisation"
              placeholder="Sagar Institute of Research Technology and Science (SIRTS), Bhopal"
              leftElement={<MyIcon name="college" />}
              onChange={handleInputChange}
            />

            <HStack
              w={'full'}
              flexDir={{ base: 'column', md: 'row' }}
              spacing={0}
              gap={'22px'}
            >
              <MyInput
                labelTitle="Country"
                type="text"
                placeholder="India"
                name="country"
                leftElement={<MyIcon name="global" />}
                onChange={handleInputChange}
              />
              <MyInput
                labelTitle="City"
                type="text"
                placeholder="Bhopal"
                name="city"
                leftElement={<MyIcon name="company" />}
                onChange={handleInputChange}
              />
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
                ].map((value, key) => {
                  return (
                    <option value={value} key={key}>
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
                  (value, key) => {
                    return (
                      <option value={value} key={key}>
                        {value}
                      </option>
                    );
                  }
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
        </SectionTempalate>
      </form>
    </FormControl>
  );
};

export default BasicInformationSection;
