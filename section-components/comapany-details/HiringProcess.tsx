import { MyIcon, MyText } from '@/component';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Center,
  VStack,
} from '@chakra-ui/react';

export default function HiringProcess() {
  return (
    <VStack
      w={'full'}
      flexWrap={'wrap'}
      spacing={0}
      alignItems={'flex-start'}
      gap={'32px'}
      py={'32px'}
    >
      <MyText
        as="span"
        title="
          The hiring process involves reviewing applications, conducting interviews, and assessing candidates' skills and qualifications. It includes stages like initial screenings, in-person interviews, practical assessments, background checks, and reference verifications. Clear communication and transparency are key throughout the process, ensuring a positive candidate experience."
      />
      <Accordion
        allowToggle
        w={'100%'}
        flexWrap={'wrap'}
        gap={'12px'}
        justifyContent={'space-between'}
        display={'flex'}
      >
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <AccordionItem
              w={'100%'}
              key={index}
              _hover={{ borderColor: 'brand.primary' }}
              borderRadius={'20px'}
              border={'1px solid'}
              borderColor={'brand.lightgray'}
              px={{ base: '16px', md: '32px' }}
            >
              <AccordionButton p={0} _hover={{ bg: 'transparent' }}>
                <Center
                  h={'100px'}
                  w={'100%'}
                  justifyContent={'flex-start'}
                  py={'6px'}
                  gap={'18px'}
                >
                  <Center
                    w={'70px'}
                    h={'70px'}
                    borderRadius={'50%'}
                    bg={'brand.aliceblue'}
                    flexShrink={0}
                    border={'1px solid'}
                    borderColor={'brand.primary'}
                  >
                    <MyIcon name="target" width="40px" height="40px" />
                  </Center>
                  <VStack spacing={0} alignItems={'flex-start'} gap={0}>
                    <MyText as="span" title={`Round ${item}`} />
                    <MyText
                      as="title"
                      align={'start'}
                      title={'Aptitute and Written Test'}
                    />
                  </VStack>
                </Center>
                <AccordionIcon w={'18px'} h={'18px'} />
              </AccordionButton>
              <AccordionPanel pb={'32px'}>
                <MyText
                  as="span"
                  title="Hiring Process Content will place here."
                />
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </VStack>
  );
}
