import Icon from '@/component/icon/Icon';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Checkbox,
  CheckboxGroup,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

const Filter = () => {
  return (
    <VStack w={'20vw'} p={5} gap={2} alignItems={'flex-start'} >
      <HStack w={'20vw'} spacing={0}>
        <Center>
          <Icon name="search" width="20" height="20" color="brand.primary" />
        </Center>
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
      <Accordion allowMultiple w="full">
        <FilterBox
          filterHeading="Company Type"
          filterItems={[
            { label: 'Information Technology', value: 'IT' },
            { label: 'Foreign MNCs', value: 'Foreign MNCs' },
            { label: 'StartUp', value: 'StartUp' },
            { label: 'Corporate', value: 'Corporate' },
            { label: 'FinTech', value: 'FinTech' },
            { label: 'Indian MNC', value: 'IndianMNC' },
            { label: 'Unicorn', value: 'Unicorn' },
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
        <Divider />
        <FilterBox
          filterHeading="Experience"
          filterItems={[
            { label: 'Fresher', value: 'Fresher' },
            { label: 'Intermediate', value: 'Intermediate' },
            { label: 'Expert', value: 'Expert' },
          ]}
        />
        <Divider />
        <FilterBox
          filterHeading="Roles"
          filterItems={[
            { label: 'Information Technology', value: 'IT' },
            { label: 'Front-End Developer', value: 'frontend developer' },
            { label: 'Backend-Developer', value: 'Backend developer' },
            { label: 'Software engineers', value: 'SDE' },
            { label: 'Java Developer', value: 'Java developer' },
            { label: 'Data Scientist', value: 'Data Scienctist' },
            { label: 'Web Developer', value: 'Web Developer' },
            { label: 'Mobile App Developer', value: 'Mobile App Developer' },
            {
              label: 'Database Administrator',
              value: 'Database Administrator',
            },
          ]}
        />
        <Divider />
        <FilterBox
          filterHeading="Location"
          filterItems={[
            { label: 'Bangalore', value: 'Bangalore' },
            { label: 'Pune', value: 'Pune' },
            { label: 'Ahmedabad', value: 'Ahmedabad' },
            { label: 'Noida', value: 'Noida' },
            { label: 'Kolkata', value: 'Kolkata' },
            { label: 'Hydrabad', value: 'Hydrabad' },
            { label: 'Mumbai', value: 'Mumbai' },
            { label: 'Chennai', value: 'Chennai' },
            { label: 'Gurgaon', value: 'Gurgaon' },
          ]}
        />
        <Divider />
        <FilterBox
          filterHeading="Date Posted"
          filterItems={[
            { label: 'Any Time', value: 'Any Time' },
            { label: 'Past Week', value: 'Past Week' },
            { label: 'Past 24 hours', value: 'Past 24 hours' },
            { label: 'Past Month', value: 'Past Month' },
          ]}
        />
        <Divider />
        <Divider />
        <FilterBox
          filterHeading="Technology"
          filterItems={[
            { label: 'JavaScript', value: 'JavaScript' },
            { label: 'Java', value: 'Java' },
            { label: 'React', value: 'React' },
            { label: 'Nextjs', value: 'Nextjs' },
            { label: 'Nodejs', value: 'Nodejs' },
            { label: 'React Native', value: 'React Native' },
            { label: 'UI/UX', value: 'UI/UX' },
            { label: 'AWS', value: 'AWS' },
            { label: 'Expressjs', value: 'Expressjs' },
            { label: 'Python', value: 'Python' },
            { label: 'C++', value: 'C++' },
          ]}
        />
        <Divider />
        <Divider />
        <FilterBox
          filterHeading="Job Categories"
          filterItems={[
            { label: 'Web Developer', value: 'Web Developer' },
            { label: 'UI/UX Designer', value: 'UI/UX Designer' },
            {
              label: 'Full-Stack Web Developer',
              value: 'Full-Stack Web Developer',
            },
            { label: 'Back-End Developer', value: 'Back-end Developer' },
          ]}
        />
        <Divider />
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
          fontSize={'xs'}
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
