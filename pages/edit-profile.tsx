import { Layout, MyButton, MyDivider, MyText } from '@/component';
import { Box, Center, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

function EditProfile() {
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
        _hover={{ bg: 'brand.transprimary' }}
        w={'full'}
        py={'6px'}
        borderRadius={'8px'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        px={'16px'}
        transition={'all ease-in-out .2s'}
      >
        <MyText title={title} as="span" />
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
      h={'320px'}
    >
      {children}
    </VStack>
  );
};
