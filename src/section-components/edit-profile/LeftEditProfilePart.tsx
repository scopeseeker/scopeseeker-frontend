import { MyButton, MyDivider, MyText } from '@/component';
import { Center, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const LeftEditProfilePart = () => {
  return (
    <VStack w={'full'}>
      <VStack
        border={'1px solid'}
        borderColor={'brand.lightgray'}
        borderRadius={'8px'}
        bg={'brand.aliceblue'}
        p="12px"
        w={'full'}
      >
        <LeftScrollDivText href="#basic-section" title={'Basic Information'} />
        <LeftScrollDivText href="#resume-section" title={'Resume'} />
        <LeftScrollDivText href="#skills-section" title={'Skills'} />
        <LeftScrollDivText href="#work-section" title={'Work Experience'} />
        <LeftScrollDivText href="#education-section" title={'Education'} />
        <LeftScrollDivText href="#social-section" title={'Social Links'} />
      </VStack>
      <Link href={'/'} style={{ width: '100%' }}>
        <MyButton title="Skip For Now" w={'full'} />
      </Link>
    </VStack>
  );
};

export default LeftEditProfilePart;

interface ILeftScrollDivText {
  title: string;
  href: string;
}
const LeftScrollDivText = ({ title, href }: ILeftScrollDivText) => {
  return (
    <>
      <Link href={href} style={{ width: '100%' }}>
        <Center
          cursor={'pointer'}
          w={'full'}
          py={'6px'}
          borderRadius={'8px'}
          flexDirection={'column'}
          alignItems={'flex-start'}
          px={'16px'}
          _hover={{ bg: 'brand.primary', color: 'white' }}
        >
          <MyText title={title} as="span" color="currentColor" />
        </Center>
      </Link>

      <MyDivider />
    </>
  );
};
