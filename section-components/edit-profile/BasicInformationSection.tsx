import React from 'react';
import SectionTempalate from './templates/SectionTemplate';
import { MyIcon, MyInput, MyText, RadioComp } from '@/component';
import { HStack, Select, Textarea, VStack } from '@chakra-ui/react';

const BasicInformationSection = () => {
  const handleRadioChange = (value: string) => {
    // Send the value to the backend API or perform any other action
    console.log('Selected value:', value);
  };

  return (
    <SectionTempalate>
      <MyText as="title" title="Basic Information" />

      <VStack w={'full'} alignItems={'flex-start'} gap={'22px'}>
        <MyInput
          labelTitle="Full Name"
          type="text"
          placeholder="Abhishek Kumar"
          leftElement={<MyIcon name="user" />}
        />

        <HStack
          w={'full'}
          flexDir={{ base: 'column', md: 'row' }}
          spacing={0}
          gap={'22px'}
        >
          <MyInput
            labelTitle="Email"
            type="text"
            placeholder="abhishek123@gmail.com"
            leftElement={<MyIcon name="email" />}
          />

          <MyInput
            labelTitle="Phone"
            type="number"
            placeholder="+91XXXXXXXX23"
            leftElement={<MyIcon name="phone" />}
            maxLength={10}
          />
        </HStack>

        <MyInput
          labelTitle="Organisation/ College"
          type="text"
          placeholder="Sagar Institute of Research Technology and Science (SIRTS), Bhopal"
          leftElement={<MyIcon name="college" />}
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
            leftElement={<MyIcon name="global" />}
          />

          <MyInput
            labelTitle="City"
            type="text"
            placeholder="Bhopal"
            leftElement={<MyIcon name="company" />}
          />
        </HStack>

        {/* For Gender Selection */}
        <VStack alignItems={'flex-start'}>
          <MyText as="span" title="Gender" />
          <RadioComp
            options={['Male', 'Female', 'Other', 'Prefer not to say']}
            onClick={handleRadioChange}
          />
        </VStack>

        {/* For User Type */}
        <VStack alignItems={'flex-start'}>
          <MyText as="span" title="User Type" />
          <RadioComp
            options={['College Student', 'Professional', 'Fresher']}
            onClick={handleRadioChange}
          />
        </VStack>

        {/* For Domain Selection */}
        <VStack alignItems={'flex-start'}>
          <MyText as="span" title="Domain" />
          <RadioComp
            options={['Tech', 'Non-Tech']}
            onClick={handleRadioChange}
          />
        </VStack>

        {/* For Course Selection */}
        <VStack alignItems={'flex-start'}>
          <MyText as="span" title="Course" />
          <RadioComp
            options={['B.Tech', 'M.Tech', 'BCA', 'MCA']}
            onClick={handleRadioChange}
          />
        </VStack>

        {/* For Course Programme */}
        <VStack alignItems={'flex-start'}>
          <MyText as="span" title="Course Programme" />
          <RadioComp
            options={['Full Time', 'Part Time']}
            onClick={handleRadioChange}
          />
        </VStack>

        {/* For Course Specialization */}
        <VStack alignItems={'flex-start'}>
          <MyText as="span" title="Course Specialization" />
          <Select
            placeholder="Computer Science"
            // w={'500px'}
            fontSize={'13px'}
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
          <Select placeholder="2016" fontSize={'13px'}>
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
          <Textarea placeholder="Add custom message..." resize={'none'} />
        </VStack>
      </VStack>
    </SectionTempalate>
  );
};

export default BasicInformationSection;
