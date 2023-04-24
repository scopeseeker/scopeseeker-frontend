import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  HStack,
  Heading,
  Stack,
  VStack,
} from '@chakra-ui/react';
import MyText from '../text/MyText';

interface IFilter {
  FilterObject: any[];
}
const Filter: React.FC<IFilter> = ({ FilterObject }: IFilter) => {
  return (
    <VStack w={'100%'} gap={2} alignItems={'flex-start'}>
      <HStack w={'20vw'} spacing={0}>
        <Heading
          as={'span'}
          fontWeight={'semibold'}
          fontSize={'md'}
          color={'brand.primary'}
          px={2}
        >
          Filter Jobs
        </Heading>
      </HStack>
      <Accordion w="full">
        {FilterObject.map((item) => (
          <>
          <AccordionItem>
            <AccordionButton
              p={3}
              py={3}
              borderRadius={4}
              _hover={{ bg: 'brand.aliceblue' }}
            >
              <Box flex="1" textAlign="left">
                <MyText as="span" title={item.category} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pl={3}>
              <CheckboxGroup colorScheme="messenger">
                <Stack
                  direction={['column', 'column']}
                  maxH={'150px'}
                  overflowY={'scroll'}
                  css={{
                    '&::-webkit-scrollbar-track': {
                      backgroundColor: 'transparent',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      borderRadius: '50px',
                    },
                  }}
                  pl={'3px'}
                >
                  {item.options.map((option: any) => (
                    <Checkbox
                      alignItems={'center'}
                      key={option.value}
                      value={option.value}
                      size={'sm'}
                    >
                      <Flex alignItems={'center'} h={'full'}>
                        <MyText as="span" title={option.label} />
                      </Flex>
                    </Checkbox>
                  ))}
                </Stack>
              </CheckboxGroup>
            </AccordionPanel>
          </AccordionItem>
          </>
        ))}
      </Accordion>
    </VStack>
  );
};

export default Filter;
