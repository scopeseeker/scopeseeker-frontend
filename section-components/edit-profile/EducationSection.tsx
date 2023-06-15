import React, { useState } from 'react';
import SectionTempalate from './templates/SectionTemplate';
import { Collapse, HStack, VStack } from '@chakra-ui/react';
import { MyButton, MyIcon, MyInput, MyText } from '@/component';
import AddBoxTemplete from './templates/AddBoxTemplate';

const EducationSection = () => {
  const [showEducation, setShowEducation] = useState(false);
  const handleOpenEdcation = () => setShowEducation(!showEducation);
  return (
    <SectionTempalate>
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
        <VStack gap={'22px'} w={'full'}>
          <HStack
            w={'full'}
            flexDir={{ base: 'column', md: 'row' }}
            spacing={0}
            gap={'22px'}
          >
            <MyInput
              labelTitle="Qualification"
              leftElement={<MyIcon name="job" />}
              type="text"
              placeholder="Enter your qualification"
            />
            <MyInput
              labelTitle="Degree "
              leftElement={<MyIcon name="fresher" />}
              type="text"
              placeholder="Enter your degree"
            />
          </HStack>

          <HStack
            w={'full'}
            flexDir={{ base: 'column', md: 'row' }}
            spacing={0}
            gap={'22px'}
          >
            <MyInput
              labelTitle="From (Year)"
              leftElement={<MyIcon name="time" />}
              type="text"
              placeholder="Enter year"
            />
            <MyInput
              labelTitle="To (Year)"
              leftElement={<MyIcon name="time" />}
              type="text"
              placeholder="Enter year"
            />
          </HStack>

          <HStack
            w={'full'}
            flexDir={{ base: 'column', md: 'row' }}
            spacing={0}
            gap={'22px'}
          >
            <MyInput
              labelTitle="Percentage"
              leftElement={<MyIcon name="college" />}
              type="text"
              placeholder="Enter your percentage"
            />
            <MyInput
              labelTitle="CGPA"
              leftElement={<MyIcon name="company" />}
              type="text"
              placeholder="Enter your cgpa"
            />
          </HStack>

          <HStack
            w={'full'}
            flexDir={{ base: 'column', md: 'row' }}
            spacing={0}
            gap={'22px'}
          >
            <MyInput
              labelTitle="Specialization"
              leftElement={<MyIcon name="company" />}
              type="text"
              placeholder="Enter your specialization"
            />
            <MyInput
              labelTitle="University "
              leftElement={<MyIcon name="company" />}
              type="text"
              placeholder="Enter your university"
            />
          </HStack>

          <MyInput
            labelTitle="Institute"
            leftElement={<MyIcon name="college" />}
            type="text"
            placeholder="Enter your Institute"
          />

          <HStack
            flexDir={{ base: 'column', md: 'row' }}
            spacing={0}
            gap={'22px'}
          >
            <MyInput
              labelTitle="Country"
              leftElement={<MyIcon name="company" />}
              type="text"
              placeholder="Enter your country"
            />
            <MyInput
              labelTitle="State"
              leftElement={<MyIcon name="company" />}
              type="text"
              placeholder="Enter your state"
            />
            <MyInput
              labelTitle="City"
              leftElement={<MyIcon name="company" />}
              type="text"
              placeholder="Enter your city"
            />
          </HStack>
          <HStack w={'full'} flexWrap={'wrap'} spacing={0} gap={'12px'}>
            <MyButton title="Submit" px="50px" />
            <MyButton title="Cancel" px="50px" variant="outline" />
          </HStack>
        </VStack>
      </Collapse>
    </SectionTempalate>
  );
};

export default EducationSection;
