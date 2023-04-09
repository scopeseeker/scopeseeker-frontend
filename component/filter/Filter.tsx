import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Flex,
  HStack,
  Text,
  VStack,
  theme,
} from '@chakra-ui/react';

const filter = () => {
  return (
    <VStack
      w={'20vw'}
      p={5}
      gap={2}
      alignItems={'flex-start'}
      bg={'brand.lightgrey'}
    >
      <Text fontSize={'md'} fontWeight={'medium'} color={'brand.primary'}>
        Filter Jobs
      </Text>

      <VStack>
        <Accordion
          allowToggle
          display={'flex'}
          flexDirection={'column'}
          gap={3}
        >
          <AccordionItem border={'none'}>
            <AccordionButton px={0} py={0} w={'full'}>
              <Box as="span">
                <Text fontSize={'sm'}>Roles</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel
              px={0}
              display={'flex'}
              flexDirection={'column'}
              gap={2}
            >
              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Frontend Developer</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Backend Developer</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Full Stack Developer</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Software Engineer</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Block Chain Developer</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={'none'}>
            <AccordionButton px={0} py={0} w={'full'}>
              <Box as="span">
                <Text fontSize={'sm'}>Job Type</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel
              px={0}
              display={'flex'}
              flexDirection={'column'}
              gap={2}
            >
              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Full Time</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Part Time</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Internship</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={'none'}>
            <AccordionButton px={0} py={0} w={'full'}>
              <Box as="span">
                <Text fontSize={'sm'}>Company Type</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel
              px={0}
              display={'flex'}
              flexDirection={'column'}
              gap={2}
            >
              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Corporate</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Foreign MNC</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Startup</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Indian MNC</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Unicorn</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={'none'}>
            <AccordionButton px={0} py={0} w={'full'}>
              <Box as="span">
                <Text fontSize={'sm'}>Experience</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel
              px={0}
              display={'flex'}
              flexDirection={'column'}
              gap={2}
            >
              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Fresher/ Entry level</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Experienced</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={'none'}>
            <AccordionButton px={0} py={0} w={'full'} gap={28}>
              <Box as="span">
                <Text fontSize={'sm'}>Date Posted</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel
              px={0}
              display={'flex'}
              flexDirection={'column'}
              gap={2}
            >
              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Any Time</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Past Week</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Past 24 Hours</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Past Month</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Unicorn</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={'none'}>
            <AccordionButton px={0} py={0} w={'full'}>
              <Box as="span">
                <Text fontSize={'sm'}>Location</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel
              px={0}
              display={'flex'}
              flexDirection={'column'}
              gap={2}
            >
              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Pune</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Noida</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Hyderabad</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Mumbai</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Chennai</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Gurgaon</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={'none'}>
            <AccordionButton px={0} py={0} w={'full'}>
              <Box as="span">
                <Text fontSize={'sm'}>Technology</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel
              px={0}
              display={'flex'}
              flexDirection={'column'}
              gap={2}
            >
              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>JavaScript</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Java</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Node JS</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Next JS</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>

              <Box
                w={'99%'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Checkbox size={'sm'}>
                  <Text fontSize={'xs'}>Reacj JS</Text>
                </Checkbox>
                <Text fontSize={'2xs'}>(20)</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </VStack>
  );
};

export default filter;
