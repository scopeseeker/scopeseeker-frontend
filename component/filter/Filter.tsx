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
      <Accordion allowToggle w="full">
        <FilterBox
          filterHeading="Company Type"
          filterItems={[
            { label: 'Information Technology', value: 'IT' },
            { label: 'Backend Development', value: 'Backend' },
            { label: 'Full Stack Developer', value: 'FullStack' },
            { label: 'Software Engineering', value: 'SoftwareEng' },
          ]}
        />
        <Divider />
        <FilterBox
          filterHeading="Job Type"
          filterItems={[
            { label: 'Full Time', value: 'FullTime' },
            { label: 'Part Time', value: 'PartTime' },
            { label: 'Internship', value: 'Internship' },
          ]}
        />
        <Divider />
        <FilterBox
          filterHeading="Roles"
          filterItems={[
            { label: 'Information Technology', value: 'IT' },
            { label: 'FinTech', value: 'FinTech' },
            { label: 'Indian MNC', value: 'IndianMNC' },
            { label: 'Unicorn', value: 'Unicorn' },
          ]}
        />
      </Accordion>
    </VStack>
  );
};

export default Filter;

interface IFilterBox {
  filterHeading: string;
  filterItems: { label: string; value: string }[];
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
            {filterItems.map((item, key) => (
              <Checkbox key={key} value={item.value} size={'sm'}>
                <Text as={'span'} fontSize={'xs'}>
                  {item.label}
                </Text>
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </AccordionPanel>
    </AccordionItem>
  );
};
