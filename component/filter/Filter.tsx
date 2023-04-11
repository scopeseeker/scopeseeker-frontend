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
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

const Filter = () => {
  return (
    <VStack w={'20vw'} p={5} gap={2} alignItems={'flex-start'} minH={'100vh'}>
      <Heading as={'span'} fontSize={'md'} color={'brand.primary'} px={3}>
        Filter Jobs
      </Heading>

      <Accordion allowToggle w={'full'}>
        <FilterBox
          filterHeading={'Company Type'}
          filterItems={[
            'Information Technology',
            'Backend Development',
            'Full Stack Developer',
            'Software Engineering',
          ]}
        />
        <Divider/>
        <FilterBox
          filterHeading={'Job Type'}
          filterItems={[
            'Full Time',
            'Part Time',
            'Internship'
          ]}
        />
        <Divider/>
        <FilterBox
          filterHeading={'Roles'}
          filterItems={[
            'Information Technology',
            'FinTech',
            'Indian MNC',
            'Unicron',
          ]}
        />
      </Accordion>
    </VStack>
  );
};

export default Filter;

interface IFilterBox {
  filterHeading: string;
  filterItems: string[];
}
const FilterBox: React.FC<IFilterBox> = ({
  filterHeading,
  filterItems,
}: IFilterBox) => {
  return (
    <AccordionItem border={'none'}>
      <AccordionButton
        p={3}
        py={3}
        borderRadius={4}
        _hover={{ bg: 'brand.aliceblue' }}
      >
        <Box
          as="span"
          flex="1"
          textAlign="left"
          fontSize={'sm'}
          fontWeight={'medium'}
        >
          {filterHeading}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pl={3}>
        <CheckboxGroup colorScheme="messenger">
          <Stack
            direction={['column', 'column']}
            h={'150px'}
            overflowY={'scroll'}
            css={{
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                borderRadius: '50px',
              },
            }}
            pl={'3px'}
          >
            {filterItems.map((item) => (
              <Checkbox value={item} size={'sm'}>
                <Text as={'span'} fontSize={'xs'}>
                  {item}
                </Text>
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </AccordionPanel>
    </AccordionItem>
  );
};
