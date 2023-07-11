import { Layout, MainHeading, MyText } from '@/component';
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
    <Layout>

    <VStack w={'full'} gap={'72px'}>
      <MainHeading
        title={'Frequently Asked Questions'}
        subTitle={'Have any question ?'}
      />
      <Accordion allowMultiple>
        <VStack gap={2}>
          {faqFieldsObject.map((items, index) => {
            return (
              <AccordionItem
                key={index}
                p={'8px'}
                w={{ base: '85vw', lg: '65vw', xl: '55vw' }}
                bg={'brand.white'}
                borderRadius={'md'}
                border={'1px solid'}
                borderColor={'brand.lightgray'}
                _hover={{ borderColor: 'brand.primary' }}
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
    </Layout>

  );
};

export default FAQ;
