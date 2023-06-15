import React, { useState } from 'react';
import SectionTempalate from './templates/SectionTemplate';
import { Box, Center, Collapse, HStack, VStack } from '@chakra-ui/react';
import { MyButton, MyIcon, MyImage, MyInput, MyText } from '@/component';
import AddBoxTemplete from './templates/AddBoxTemplate';

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

  const handleWorkInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWorkExperience = () => {
    const newWorkExperience = { ...formData };
    setWorkExperience([...workExperience, newWorkExperience]);
    setFormData({
      designation: '',
      sector: '',
      fromYear: '',
      toYear: '',
      organisation: '',
      country: '',
      state: '',
      city: '',
    });
  };

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
        <VStack w={'full'} gap={'22px'}>
          <HStack
            flexDir={{ base: 'column', md: 'row' }}
            spacing={0}
            gap={'22px'}
            w={'full'}
          >
            <MyInput
              labelTitle="Designation"
              leftElement={<MyIcon name="job" />}
              type="text"
              placeholder="Type your designation"
              value={formData.designation}
              onChange={handleWorkInputChange}
            />
            <MyInput
              labelTitle="Sector"
              leftElement={<MyIcon name="fresher" />}
              type="text"
              placeholder="Type your Sector"
              value={formData.sector}
              onChange={handleWorkInputChange}
            />
          </HStack>

          <HStack
            flexDir={{ base: 'column', md: 'row' }}
            spacing={0}
            gap={'22px'}
            w={'full'}
          >
            <MyInput
              labelTitle="From (Year)"
              leftElement={<MyIcon name="time" />}
              type="text"
              placeholder="Enter Year"
              value={formData.fromYear}
              onChange={handleWorkInputChange}
            />
            <MyInput
              labelTitle="To (Year)"
              leftElement={<MyIcon name="time" />}
              type="text"
              placeholder="Enter Year"
              value={formData.toYear}
              onChange={handleWorkInputChange}
            />
          </HStack>

          <HStack
            flexDir={{ base: 'column', md: 'row' }}
            spacing={0}
            gap={'22px'}
            w={'full'}
          >
            <MyInput
              labelTitle="Organisation"
              leftElement={<MyIcon name="college" />}
              type="text"
              placeholder="Enter Organisation"
              value={formData.organisation}
              onChange={handleWorkInputChange}
            />
            <MyInput
              labelTitle="Country"
              leftElement={<MyIcon name="company" />}
              type="text"
              placeholder="Enter Country"
              value={formData.country}
              onChange={handleWorkInputChange}
            />
          </HStack>

          <HStack
            flexDir={{ base: 'column', md: 'row' }}
            spacing={0}
            gap={'22px'}
            w={'full'}
          >
            <MyInput
              labelTitle="State"
              leftElement={<MyIcon name="company" />}
              type="text"
              placeholder="Enter Your State"
              value={formData.state}
              onChange={handleWorkInputChange}
            />
            <MyInput
              labelTitle="City"
              leftElement={<MyIcon name="company" />}
              type="text"
              placeholder="Enter Your City"
              value={formData.city}
              onChange={handleWorkInputChange}
            />
          </HStack>
          <HStack w={'full'} flexWrap={'wrap'} spacing={0} gap={'12px'}>
            <MyButton title="Submit" px="50px" onClick={handleWorkExperience} />
            <MyButton title="Cancel" px="50px" variant="outline" />
          </HStack>
        </VStack>
      </Collapse>
    </SectionTempalate>
  );
};

export default WorkExperienceSection;

