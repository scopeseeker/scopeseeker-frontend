import { faqFieldsObject } from '@/constant/constantFields';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  VStack,
} from '@chakra-ui/react';
import { MainHeading } from '../main-heading';

const FAQ = () => {
  return (
    <VStack w={'full'} gap={10}>
      <MainHeading
        title={'Frequently Asked Questions'}
        subTitle={'Have any question ?'}
      />
      <Accordion>
        <VStack gap={2}>
          {faqFieldsObject.map((items, key) => {
            return (
              <AccordionItem
                p={2}
                w={{ base: '85vw', lg: '65vw', xl: '55vw' }}
                bg={'gray.50'}
                borderRadius={'md'}
                border={'1px solid'}
              >
                <AccordionButton _hover={{ backgroundColor: 'none' }}>
                  <Box as="span" fontSize={'md'} flex="1" textAlign="left">
                    {items.qus}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel fontSize={'sm'}> {items.ans}</AccordionPanel>
              </AccordionItem>
            );
          })}
        </VStack>
      </Accordion>
    </VStack>
  );
};

export default FAQ;
