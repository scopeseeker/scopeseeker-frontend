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
    <VStack w={'full'} my={32} gap={10} px={5}>
      <VStack>
        <Heading textAlign={'center'}>Frequently Asked Questions</Heading>
        <Text as={'span'}>Have any question ?</Text>
        <Text>Input field Here</Text>
      </VStack>

      <Accordion allowMultiple>
        <VStack gap={2}>
          <AccordionItem
            p={2}
            w={{ base: '85vw', lg: '65vw', xl: '55vw' }}
            bg={'gray.50'}
            borderRadius={'md'}
          >
            <AccordionButton _hover={{ backgroundColor: 'none' }}>
              <Box
                as="span"
                fontSize={'md'}
                fontWeight={'medium'}
                flex="1"
                textAlign="left"
              >
                How long is this site live?
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel fontSize={'sm'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem
            p={2}
            w={{ base: '85vw', lg: '65vw', xl: '55vw' }}
            bg={'gray.50'}
            borderRadius={'md'}
          >
            <AccordionButton _hover={{ backgroundColor: 'none' }}>
              <Box
                as="span"
                fontSize={'md'}
                fontWeight={'medium'}
                flex="1"
                textAlign="left"
              >
                How long is this site live?
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel fontSize={'sm'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            p={2}
            w={{ base: '85vw', lg: '65vw', xl: '55vw' }}
            bg={'gray.50'}
            borderRadius={'md'}
          >
            <AccordionButton _hover={{ backgroundColor: 'none' }}>
              <Box
                as="span"
                fontSize={'md'}
                fontWeight={'medium'}
                flex="1"
                textAlign="left"
              >
                How long is this site live?
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel fontSize={'sm'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            p={2}
            w={{ base: '85vw', lg: '65vw', xl: '55vw' }}
            bg={'gray.50'}
            borderRadius={'md'}
          >
            <AccordionButton _hover={{ backgroundColor: 'none' }}>
              <Box
                as="span"
                fontSize={'md'}
                fontWeight={'medium'}
                flex="1"
                textAlign="left"
              >
                How long is this site live?
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel fontSize={'sm'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            p={2}
            w={{ base: '85vw', lg: '65vw', xl: '55vw' }}
            bg={'gray.50'}
            borderRadius={'md'}
          >
            <AccordionButton _hover={{ backgroundColor: 'none' }}>
              <Box
                as="span"
                fontSize={'md'}
                fontWeight={'medium'}
                flex="1"
                textAlign="left"
              >
                How long is this site live?
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel fontSize={'sm'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </VStack>
      </Accordion>
    </VStack>
  );
};

export default FAQ;
