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
  Button,
  Center,
  HStack,
  Input,
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

              <VStack w={'full'} alignItems={'flex-start'} gap={'10px'}>
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
                  <Select placeholder="Computer Science" w={'500px'} fontSize={'13px'}>
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

                {/* For Skills */}
                <VStack alignItems={'flex-start'} w={'full'}>
                  <MyText as="span" title="Skills" />
                  <Box w={'full'}>
                    <HStack w={'full'}>
                      <MyInput
                      type='text'
                        placeholder="Type something..."
                        value={inputText}
                        onChange={handleInputChange}
                        leftElement={<MyIcon name='code'/>}
                      />
                      <Box w={'20%'}>
                        <MyButton title="Add item" onClick={handleAddItem} />
                      </Box>
                    </HStack>
                    <HStack mt={'10px'}>
                      {items.map((item, index) => (
                        <Box
                          key={index}
                          // boxShadow="0px 0px 30px rgb(0,0,0,0.1)"
                          display={'flex'}
                          alignItems={'center'}
                          pl={'10px'}
                          borderRadius={'5px'}
                          borderWidth={'1.5px'}
                          borderColor={'brand.primary'}
                        >
                          <MyText
                            as="span"
                            title={item}
                            color="brand.darkgray"
                          />
                          <Box
                            px={0}
                            
                            onClick={() => handleDeleteItem(index)}
                          >
                            <MyIcon name="cross" width="16px" />
                          </Box>
                        </Box>
                      ))}
                    </HStack>
                  </Box>
                </VStack>
              </VStack>
            </FiledDivTempalate>
            <FiledDivTempalate>
              <MyText as="title" title="Resume" />
            </FiledDivTempalate>
            <FiledDivTempalate>
              <MyText as="title" title="Skills" />
            </FiledDivTempalate>
            <FiledDivTempalate>
              <MyText as="title" title="Work Experience" />
            </FiledDivTempalate>
            <FiledDivTempalate>
              <MyText as="title" title="Education" />
            </FiledDivTempalate>
            <FiledDivTempalate>
              <MyText as="title" title="Social Media" />
            </FiledDivTempalate>
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
