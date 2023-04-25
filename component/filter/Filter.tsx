import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  HStack,
  Stack,
  VStack,
} from '@chakra-ui/react';
import MyText from '../text/MyText';

interface IFilter {
  FilterObject: any[];
}
const Filter: React.FC<IFilter> = ({ FilterObject }: IFilter) => {
  return (
    <VStack w={'212px'} gap={2} alignItems={'flex-start'}>
      <HStack w={'full'} spacing={0}>
        <MyText title='Filter Jobs' as='heading' color='brand.primary'/>
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
              <AccordionPanel pl={'12px'}>
                <CheckboxGroup colorScheme="messenger">
                  <Stack
                    direction={['column', 'column']}
                    maxH={'150px'}
                    overflowY={'scroll'}
                    css={{
                      '&::-webkit-scrollbar': {
                        width: '4px',
                      },
                      '&::-webkit-scrollbar-track': {
                        backgroundColor: 'transparent',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        borderRadius: '50px',
                        border: 'none',
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
