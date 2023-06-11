import {
  Layout,
  MyButton,
  MyDivider,
  MyIcon,
  MyInput,
  MyText,
} from '@/component';
import RadioComp from '@/component/radio-buttons/RadioButtons';
import {
  Box,
  Center,
  Collapse,
  HStack,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
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
      <Layout w={'full'} h={'100vh'}>
        <HStack w={'full'} h={'full'} gap={'12px'}>
          {/* Left Part */}
          <VStack w={'212px'} h={'full'} position={'relative'} gap={'18px'}>
            <VStack
              w={'full'}
              border={'1px solid'}
              borderColor={'brand.lightgray'}
              alignItems={'flex-start'}
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
          <VStack
            w={'80%'}
            h={'full'}
            overflowX={'scroll'}
            p={'12px'}
            gap={'42px'}
          >
            <FiledDivTempalate>
              <MyText as="title" title="Basic Information" />

              <VStack w={'full'} alignItems={'flex-start'} gap={'22px'}>
                <MyInput
                  labelTitle="Full Name"
                  type="text"
                  placeholder="Abhishek Kumar"
                  leftElement={<MyIcon name="user" />}
                />

                <HStack w={'full'}>
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
                  />
                </HStack>

                <MyInput
                  labelTitle="Organisation/ College"
                  type="text"
                  placeholder="Sagar Institute of Research Technology and Science (SIRTS), Bhopal"
                  leftElement={<MyIcon name="college" />}
                />

                <HStack w={'full'}>
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

                {/* For USer Type */}
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
                    w={'500px'}
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
                  <Select placeholder="2016" w={'500px'} fontSize={'13px'}>
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
              <VStack w={'full'} gap={'20px'}>
                <HStack w={'full'} justifyContent={'space-between'}>
                  <MyText title="Lokesh.pdf" as={'small'} />

                  <Center
                    w={'30px'}
                    h={'30px'}
                    borderRadius={'50%'}
                    bg={'brand.aliceblue'}
                    cursor={'pointer'}
                  >
                    <MyIcon name={'delete'} />
                  </Center>
                </HStack>

                <Center w={'full'}>
                  <Center
                    h={'220px'}
                    w={'full'}
                    border={'2px dashed'}
                    borderColor={'brand.darkgray'}
                    bg={'brand.aliceblue'}
                    flexDir={'column'}
                    gap={'8px'}
                    borderRadius={'10px'}
                  >
                    <MyIcon name={'upload'} />
                    <MyButton title="Upload Resume" />
                    <MyText
                      title="Supported formate .pdf .doc .docx, upto 2 MB "
                      as={'span'}
                      color="brand.darkgray"
                    />
                  </Center>
                </Center>
              </VStack>
            </FiledDivTempalate>

            {/* Skill Section */}
            <FiledDivTempalate>
              <MyText as="title" title="Skills" />
              <VStack alignItems={'flex-start'} w={'full'}>
                <Box w={'full'}>
                  <HStack w={'full'}>
                    <MyInput
                      type="text"
                      placeholder="Type something..."
                      value={inputText}
                      onChange={handleInputChange}
                      leftElement={<MyIcon name="college" />}
                    />
                    <Box w={'20%'}>
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
              <HStack>
                <MyText as="title" title="Work Experience" />
                <MyIcon
                  name="add"
                  onClick={handleOpenWorkExperience}
                  cursor={'pointer'}
                  width="16px"
                  color="brand.primary"
                  strokeWidth="2.5"
                />
              </HStack>
              <Collapse in={showExperience}>
                <VStack gap={'22px'} w={'full'}>
                  <HStack w={'full'}>
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

                  <HStack>
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

                  <HStack>
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

                  <HStack>
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
                </VStack>
              </Collapse>
            </FiledDivTempalate>

            {/* Education */}
            <FiledDivTempalate>
              <HStack>
                <MyText as="title" title="Education" />
                <MyIcon
                  name="add"
                  onClick={handleOpenEdcation}
                  cursor={'pointer'}
                  width="16px"
                  color="brand.primary"
                  strokeWidth="2.5"
                />
              </HStack>
              <Collapse in={showEducation}>
                <VStack gap={'22px'} w={'full'}>
                  <HStack w={'full'}>
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

                  <HStack w={'full'}>
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

                  <HStack w={'full'}>
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

                  <HStack w={'full'}>
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

                  <HStack>
                    <MyInput
                      labelTitle="Country"
                      leftElement={<MyIcon name="college" />}
                      type="text"
                      placeholder="Enter your country"
                    />
                    <MyInput
                      labelTitle="State"
                      leftElement={<MyIcon name="college" />}
                      type="text"
                      placeholder="Enter your state"
                    />
                    <MyInput
                      labelTitle="City"
                      leftElement={<MyIcon name="college" />}
                      type="text"
                      placeholder="Enter your city"
                    />
                  </HStack>
                </VStack>
              </Collapse>
            </FiledDivTempalate>

            {/* Social Links  */}
            <FiledDivTempalate>
              <MyText as="title" title="Social Media" />
              <VStack gap={'22px'} w={'full'} alignItems={'flex-start'}>
                <HStack w={'full'}>
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

                <HStack w={'full'}>
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
      // h={'320px'}
    >
      {children}
    </VStack>
  );
};
