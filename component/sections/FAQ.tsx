import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

const FAQ = () => {
  return (
    <Box w={'full'} marginTop={16} marginBottom={20}>
      <VStack spacing={7} py={10}>
        <Text fontSize={'xs'}>FAQs</Text>
        <Heading as="h1" fontSize={'2xl'}>
          Frequents Asked Question
        </Heading>
        <Text fontSize={'xs'}>Have any questions?</Text>
        {/* <InputGroup borderRadius={'full'} justifyContent={'center'}>
          <Input w={'2xs'} borderRadius={'full'} />
          <InputRightAddon borderRadius={'full'} fontSize={'xs'} cursor={'pointer'} children='Search' />
        </InputGroup> */}
        <Text>Input field Here</Text>
      </VStack>

      <Accordion allowMultiple>
        <VStack gap={1}>
          <AccordionItem
            w={'xl'}
            justifyContent={'space-between'}
            bg={'gray.50'}
            border={'1px solid'}
            borderColor={'brand.100'}
            borderRadius={'md'}
          >
            <AccordionButton>
              <Box as="span" fontSize={'sm'} flex="1" textAlign="left">
                How long is this site live?
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel fontSize={'xs'} pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            w={'xl'}
            justifyContent={'space-between'}
            bg={'gray.50'}
            border={'1px solid'}
            borderColor={'brand.100'}
            borderRadius={'md'}
          >
            <AccordionButton>
              <Box as="span" fontSize={'sm'} flex="1" textAlign="left">
                How long is this site live?
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel fontSize={'xs'} pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            w={'xl'}
            justifyContent={'space-between'}
            bg={'gray.50'}
            border={'1px solid'}
            borderColor={'brand.100'}
            borderRadius={'md'}
          >
            <AccordionButton>
              <Box as="span" fontSize={'sm'} flex="1" textAlign="left">
                How long is this site live?
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel fontSize={'xs'} pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            w={'xl'}
            justifyContent={'space-between'}
            bg={'gray.50'}
            border={'1px solid'}
            borderColor={'brand.100'}
            borderRadius={'md'}
          >
            <AccordionButton>
              <Box as="span" fontSize={'sm'} flex="1" textAlign="left">
                How long is this site live?
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel fontSize={'xs'} pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </VStack>
      </Accordion>
    </Box>
  );
};

export default FAQ;
