import {
  Layout,
  MyButton,
  MyDivider,
  MyIcon,
  MyImage,
  MyInput,
  MyText,
  RadioComp,
} from '@/component';
import {
  Box,
  Center,
  Collapse,
  HStack,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import React, { useState } from 'react';

function EditProfile() {
  const handleRadioChange = (value: string) => {
    // Send the value to the backend API or perform any other action
    console.log('Selected value:', value);
  };

  const [items, setItems] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');
  const [showExperience, setShowExperience] = React.useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [isWorkExperience, setIsWorkExperience] = useState([{}]);

  const handleWorkExperience = () => {
    
  }

  const handleOpenWorkExperience = () => setShowExperience(!showExperience);

  const handleOpenEdcation = () => setShowEducation(!showEducation);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddItem = () => {
    if (inputText.trim() !== '') {
      setItems([...items, inputText.trim()]);
      setInputText('');
    }
  };

  const handleDeleteItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <>
      <Head>
        <title>Edit Profile | Scope Seeker</title>
      </Head>
      <Layout w={'full'}>
        <HStack
          w={'full'}
          spacing={0}
          h={'full'}
          gap={'32px'}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}
        >
          {/* Left Part */}
          <VStack
            w={'212px'}
            gap={'18px'}
            display={{ base: 'none', lg: 'initial' }}
          >
            <VStack
              border={'1px solid'}
              borderColor={'brand.lightgray'}
              borderRadius={'8px'}
              bg={'brand.aliceblue'}
              p="12px"
            >
              <LeftScrollDivText title={'Basic Information'} />
              <LeftScrollDivText title={'Resume'} />
              <LeftScrollDivText title={'Skills'} />
              <LeftScrollDivText title={'Work Experience'} />
              <LeftScrollDivText title={'Education'} />
              <LeftScrollDivText title={'Social Links'} />
            </VStack>
            <MyButton title="Skip For Now" w={'full'} />
          </VStack>
          {/* Right Part */}
          <VStack w={{ base: 'full', lg: '80%' }} h={'full'} gap={'42px'}>
            {/* Basic Information */}
            <FiledDivTempalate>
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
                  <Textarea
                    placeholder="Add custom message..."
                    resize={'none'}
                  />
                </VStack>
              </VStack>
            </FiledDivTempalate>

            {/* Resume Section */}
            <FiledDivTempalate>
              <MyText as="title" title="Resume" />
              <VStack
                alignSelf={'center'}
                w={{ base: 'full', md: '80%' }}
                gap={'20px'}
              >
                <HStack
                  w={'full'}
                  justifyContent={'space-between'}
                  borderWidth={'1.5px'}
                  borderColor={'brand.lightgray'}
                  p={'10px'}
                  borderRadius={'10px'}
                >
                  <MyText title="Lokesh.pdf" as={'small'} />

                  <Center
                    w={'30px'}
                    h={'30px'}
                    borderRadius={'50%'}
                    bg={'red'}
                    cursor={'pointer'}
                  >
                    <MyIcon
                      name={'delete'}
                      color="brand.white"
                      strokeWidth="2"
                    />
                  </Center>
                </HStack>

                <Center
                  h={'220px'}
                  w={'full'}
                  border={'2px dashed'}
                  borderColor={'brand.darkgray'}
                  bg={'brand.aliceblue'}
                  flexDir={'column'}
                  gap={'15px'}
                  borderRadius={'10px'}
                >
                  <MyIcon name={'upload'} />
                  <MyButton title="Upload Resume" />
                  <Box w={{ base: '80%', md: 'initial' }}>
                    <MyText
                      title="Supported Formats: doc, docx, rtf, pdf, upto 2 MB"
                      as={'span'}
                      color="brand.darkgray"
                    />
                  </Box>
                </Center>
              </VStack>
            </FiledDivTempalate>

            {/* Skill Section */}
            <FiledDivTempalate>
              <MyText as="title" title="Skills" />
              <VStack alignItems={'flex-start'} w={'full'}>
                <Box w={'full'}>
                  <HStack
                    w={'full'}
                    flexDir={{ base: 'column', md: 'row' }}
                    spacing={0}
                    gap={'10px'}
                  >
                    <MyInput
                      type="text"
                      placeholder="Type something..."
                      value={inputText}
                      onChange={handleInputChange}
                      leftElement={<MyIcon name="college" />}
                    />
                    <Box w={{ base: '100%', md: '20%' }}>
                      <MyButton title="Add item" onClick={handleAddItem} />
                    </Box>
                  </HStack>
                  <HStack
                    mt={'20px'}
                    flexWrap={'wrap'}
                    spacing={0}
                    gap={'10px'}
                  >
                    {items.map((item, index) => (
                      <Box
                        key={index}
                        display={'flex'}
                        alignItems={'center'}
                        px={'8px'}
                        borderRadius={'5px'}
                        borderWidth={'1.5px'}
                        borderColor={'brand.primary'}
                        gap={'5px'}
                      >
                        <MyText as="span" title={item} color="brand.primary" />
                        <Box onClick={() => handleDeleteItem(index)}>
                          <MyIcon
                            name="cross"
                            width="16px"
                            cursor={'pointer'}
                            color="red.500"
                          />
                        </Box>
                      </Box>
                    ))}
                  </HStack>
                </Box>
              </VStack>
            </FiledDivTempalate>

            {/* Work Experience */}
            <FiledDivTempalate>
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
              {isWorkExperience.length > 0 && 
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
              }
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
                    />
                    <MyInput
                      labelTitle="Sector"
                      leftElement={<MyIcon name="fresher" />}
                      type="text"
                      placeholder="Type your Sector"
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
                    />
                    <MyInput
                      labelTitle="To (Year)"
                      leftElement={<MyIcon name="time" />}
                      type="text"
                      placeholder="Enter Year"
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
                    />
                    <MyInput
                      labelTitle="Country"
                      leftElement={<MyIcon name="company" />}
                      type="text"
                      placeholder="Enter Country"
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
                    />
                    <MyInput
                      labelTitle="City"
                      leftElement={<MyIcon name="company" />}
                      type="text"
                      placeholder="Enter Your City"
                    />
                  </HStack>
                  <HStack w={'full'}>
                    <MyButton title="Submit" px="50px" onClick={handleWorkExperience}/>
                    <MyButton title="Cancel" px="50px" variant="outline" />
                  </HStack>
                </VStack>
              </Collapse>
            </FiledDivTempalate>

            {/* Education */}
            <FiledDivTempalate>
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
                  <HStack w={'full'}>
                    <MyButton title="Submit" px="50px" />
                    <MyButton title="Cancel" px="50px" variant="outline" />
                  </HStack>
                </VStack>
              </Collapse>
            </FiledDivTempalate>

            {/* Social Links  */}
            <FiledDivTempalate>
              <MyText as="title" title="Social Media" />
              <VStack gap={'22px'} w={'full'} alignItems={'flex-start'}>
                <HStack
                  w={'full'}
                  flexDir={{ base: 'column', md: 'row' }}
                  spacing={0}
                  gap={'22px'}
                >
                  <MyInput
                    labelTitle="Linkedin"
                    leftElement={<MyIcon name="linkedin" />}
                    type="text"
                    placeholder="Enter the link"
                  />
                  <MyInput
                    labelTitle="Facebook"
                    leftElement={<MyIcon name="facebook" />}
                    type="text"
                    placeholder="Enter the link"
                  />
                </HStack>

                <HStack
                  w={'full'}
                  flexDir={{ base: 'column', md: 'row' }}
                  spacing={0}
                  gap={'22px'}
                >
                  <MyInput
                    labelTitle="Instagram"
                    leftElement={<MyIcon name="instagram" />}
                    type="text"
                    placeholder="Enter the link"
                  />
                  <MyInput
                    labelTitle="GitHub"
                    leftElement={<MyIcon name="github" />}
                    type="text"
                    placeholder="Enter the link"
                  />
                </HStack>
              </VStack>
            </FiledDivTempalate>

            <VStack w={'full'} alignItems={'flex-start'}>
              <MyButton title="Submit" px="50px" py={'10px'} />
            </VStack>
          </VStack>
        </HStack>
      </Layout>
    </>
  );
}

export default EditProfile;

interface ILeftScrollDivText {
  title: string;
}
const LeftScrollDivText = ({ title }: ILeftScrollDivText) => {
  return (
    <>
      <Center
        cursor={'pointer'}
        w={'full'}
        py={'6px'}
        borderRadius={'8px'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        px={'16px'}
        transition={'all ease-in-out .2s'}
      >
        <MyText title={title} as="span" _hover={{ color: 'brand.primary' }} />
      </Center>
      <MyDivider />
    </>
  );
};

interface IFiledDivTempalate {
  children?: React.ReactNode;
}
const FiledDivTempalate = ({ children }: IFiledDivTempalate) => {
  return (
    <VStack
      alignItems={'start'}
      p={'18px'}
      bg={'brand.white'}
      border={'1px solid'}
      borderColor={'brand.lightgray'}
      w={'full'}
      borderRadius={'8px'}
      flexShrink={0}
    >
      {children}
    </VStack>
  );
};

interface IAddBoxTemplete {
  role: string;
  companyName: string;
  period: string;
  companyImage: string;
}

const AddBoxTemplete = ({
  role,
  companyName,
  period,
  companyImage,
}: IAddBoxTemplete) => {
  return (
    <HStack
      w={'full'}
      justifyContent={'space-between'}
      borderWidth={'1px'}
      borderColor={'brand.lightgray'}
      px={'20px'}
      py={'10px'}
      borderRadius={'20px'}
    >
      <HStack>
        <Center
          h={'70px'}
          w={'70px'}
          borderRadius={'50px'}
          bg={'brand.aliceblue'}
        >
          <MyImage alt="img" src={companyImage} width={40} height={40} />
        </Center>
        <VStack spacing={0} alignItems={'flex-start'}>
          <MyText as="span" title={role} />
          <MyText as="small" title={companyName} />
          <MyText as="small" title={period} color="brand.darkgray" />
        </VStack>
      </HStack>

      {/* Icon Part  */}
      <HStack>
        <Center
          w={'30px'}
          h={'30px'}
          borderRadius={'50%'}
          bg={'brand.primary'}
          cursor={'pointer'}
        >
          <MyIcon name={'edit'} color="brand.white" strokeWidth="2" />
        </Center>

        <Center
          w={'30px'}
          h={'30px'}
          borderRadius={'50%'}
          bg={'red'}
          cursor={'pointer'}
        >
          <MyIcon name={'delete'} color="brand.white" strokeWidth="2" />
        </Center>
      </HStack>
    </HStack>
  );
};
