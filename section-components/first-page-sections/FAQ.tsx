import { MainHeading, MyText } from '@/component';
import { faqFieldsObject } from '@/constant/constantFields';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  VStack,
} from '@chakra-ui/react';

const FAQ = () => {
  return (
    <VStack w={'full'} gap={10}>
      <MainHeading
        title={'Frequently Asked Questions'}
        subTitle={'Have any question ?'}
      />
      <Accordion allowMultiple>
        <VStack gap={2}>
          {faqFieldsObject.map((items, key) => {
            return (
              <AccordionItem
                p={'8px'}
                w={{ base: '85vw', lg: '65vw', xl: '55vw' }}
                bg={'brand.white'}
                borderRadius={'md'}
                border={'1px solid'}
                borderColor={'brand.lightgray'}
                _hover={{ borderColor: 'brand.primary' }}
                key={key}
              >
                <AccordionButton _hover={{ backgroundColor: 'none' }}>
                  <MyText
                    title={items.qus}
                    as="span"
                    width={'100%'}
                    textAlign={'start'}
                  />
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                  <MyText title={items.ans} as="p" />
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </VStack>
      </Accordion>
    </VStack>
  );
};

export default FAQ;
