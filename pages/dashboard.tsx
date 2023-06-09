import { MyIcon, MyImage, MyInput, MyJobCard, MyText } from '@/component';
import { jobCardFields } from '@/constant/constantFields';
import {
  Box,
  Center,
  Grid,
  GridItem,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

export default function Dashboard() {
  const companyBoxRef = useRef<HTMLDivElement>(null);
  const [isSortClicked, setIsSortClicked] = useState(true);

  return (
    <Box w={'full'} h={'100vh'} px={'12px'}>
      <HStack w={'full'} h={'full'} gap={'12px'} py={'29px'}>
        {/* Left Part */}
        <VStack w={'212px'} h={'full'} position={'relative'} gap={'18px'}>
          <VStack
            w={'full'}
            borderRight={'1px solid'}
            borderColor={'brand.lightgray'}
            alignItems={'flex-start'}
            gap={'12px'}
            h={'full'}
            p="12px"
          >
            <VStack w={'full'} spacing={0}>
              <Center
                w={'120px'}
                h={'120px'}
                bg={'green.300'}
                borderRadius={'50%'}
                m={'4px'}
                overflow={'hidden'}
                border={'2px solid'}
                borderColor={'brand.primary'}
              >
                <MyImage
                  src={'/assets/images/p12.jpg'}
                  alt="profile"
                  width={120}
                  height={120}
                />
              </Center>
              <MyText as="title" title="Lokesh Dhakar" />
              <MyText as="small" title="lokeshdhakar@gmail.com" />
            </VStack>
            <VStack w={'full'} gap={'4px'}>
              <Center
                gap={'4px'}
                justifyContent={'flex-start'}
                px={'18px'}
                w={'full'}
              >
                <MyIcon
                  name="chartPie"
                  width="20px"
                  height="20px"
                  strokeWidth="1"
                />
                <MyText as="link" title="Dasdhboard" />
              </Center>
              <Center
                gap={'4px'}
                justifyContent={'flex-start'}
                px={'18px'}
                w={'full'}
              >
                <MyIcon
                  name="case"
                  width="20px"
                  height="20px"
                  strokeWidth="1"
                />
                <MyText as="link" title="Recommanded Jobs" />
              </Center>
              <Center
                gap={'4px'}
                justifyContent={'flex-start'}
                px={'18px'}
                w={'full'}
              >
                <MyIcon
                  name="company"
                  width="20px"
                  height="20px"
                  strokeWidth="1"
                />
                <MyText as="link" title="Favourate Company" />
              </Center>
              <Center
                gap={'4px'}
                justifyContent={'flex-start'}
                px={'18px'}
                w={'full'}
              >
                <MyIcon
                  name="company"
                  width="20px"
                  height="20px"
                  strokeWidth="1"
                />
                <MyText as="link" title="Favourate Company" />
              </Center>
              <Center
                gap={'4px'}
                justifyContent={'flex-start'}
                px={'18px'}
                w={'full'}
              >
                <MyIcon
                  name="company"
                  width="20px"
                  height="20px"
                  strokeWidth="1"
                />
                <MyText as="link" title="Favourate Company" />
              </Center>
            </VStack>
          </VStack>
        </VStack>
        <VStack
          w={'80%'}
          h={'full'}
          overflowX={'scroll'}
          p={'12px'}
          gap={'42px'}
          // bg={'red.50'}
        >
          {/* My Dashboard */}
          <HStack justifyContent={'flex-start'} w={'full'} gap={'10px'}>
            <MyText title="My Dashboard" as="heading" />
            <Box w={'80%'} alignItems={'flex-start'}>
              <MyInput
                type="text"
                placeholder="Search"
                leftElement={<MyIcon name="search" />}
              />
            </Box>
          </HStack>

          <Center
            w={'full'}
            bg={'brand.primary'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
            px={'30px'}
            py={'20px'}
            borderRadius={'8px'}
            border={'1px solid'}
            borderColor={'brand.lightgray'}
          >
            <VStack
              alignItems={'flex-start'}
              spacing={0}
              gap={'12px'}
              w={'60%'}
            >
              <MyText title="Welcome back Lokesh!" as="heading" color='brand.white' />
              <MyText
                as="p"
                title="Unlocking Opportunities and Streamlining Your Path to Success: Your Dynamic Job Seeking Companion, Providing Insights, Resources, and Tools Tailored to Your Unique Career Goals, Helping You Stand Out and Land Your Dream Job with Confidence and Ease."
              />
            </VStack>
            <MyImage
              src={'/assets/images/welcome.png'}
              alt="logo"
              height={250}
              width={250}
            />
          </Center>
          <VStack w={'full'} alignItems={'flex-start'} gap={'8px'}>
            <HStack>
              <MyIcon name={'statistics'} color="brand.primary" />
              <MyText title="Statistics" as={'heading'} />
            </HStack>

            {/* Statistics */}
            <HStack
              gap={'10px'}
              borderRadius={'8px'}
              boxShadow={'md'}
              p={'10px'}
            >
              <Center
                borderRight={'8px'}
                borderColor={'brand.primary'}
                flexDirection={'column'}
                p={'20px'}
                bg={'brand.aliceblue'}
                borderRadius={'8px'}
              >
                <HStack>
                  <Center bg={'brand.primary'} p={'8px'} borderRadius={'50%'}>
                    <MyIcon name="users" width="30px" height="30px" color='brand.white' />
                  </Center>
                  <VStack spacing={0} alignItems={'flex-start'}>
                    <MyText title="42" as={'title'} />
                    <MyText title="Vistors Jobs" as={'span'} />
                  </VStack>
                </HStack>
              </Center>
              <Center
                borderRight={'8px'}
                borderColor={'brand.primary'}
                flexDirection={'column'}
                p={'20px'}
                bg={'brand.aliceblue'}
                borderRadius={'8px'}
              >
                <HStack>
                  <Center bg={'brand.primary'} p={'8px'} borderRadius={'50%'}>
                    <MyIcon name="target" width="30px" height="30px" color='brand.white' />
                  </Center>
                  <VStack spacing={0} alignItems={'flex-start'}>
                    <MyText title="42" as={'title'} />
                    <MyText title="Recomended Jobs" as={'span'} />
                  </VStack>
                </HStack>
              </Center>
              <Center
                borderRight={'8px'}
                borderColor={'brand.primary'}
                flexDirection={'column'}
                p={'20px'}
                bg={'brand.aliceblue'}
                borderRadius={'8px'}
              >
                <HStack>
                  <Center bg={'brand.primary'} p={'8px'} borderRadius={'50%'}>
                    <MyIcon name="file" width="30px" height="30px" color='brand.white' />
                  </Center>
                  <VStack spacing={0} alignItems={'flex-start'}>
                    <MyText title="42" as={'title'} />
                    <MyText title="Applied Jobs" as={'span'} />
                  </VStack>
                </HStack>
              </Center>
            </HStack>
          </VStack>

          {/* Job section added */}

          <VStack w={'full'} alignItems={'flex-start'}>
            <Tabs variant="enclosed" w={'full'}>
              <TabList>
                <Tab>
                  <HStack>
                    <MyIcon name="point" color="brand.primary" />
                    <MyText title="Recommded Jobs" as={'heading'} />
                  </HStack>
                </Tab>
                <Tab>
                  <HStack>
                    <MyIcon name="point" color="brand.primary" />
                    <MyText title="Recently Viewed" as={'heading'} />
                  </HStack>
                </Tab>
                <Tab>
                  <HStack>
                    <MyIcon name="point" color="brand.primary" />
                    <MyText title="Applied Jobs" as={'heading'} />
                  </HStack>
                </Tab>
              </TabList>
              <TabPanels>
                {/* Recommended Jobs  */}
                <TabPanel>
                  <Grid
                    templateColumns={{
                      base: 'repeat(1, 1fr)',
                      md: 'repeat(2, 1fr)',
                      lg: 'repeat(2, 1fr)',
                    }}
                    gap={{ base: 6, lg: 4, xl: 6 }}
                    mx={'auto'}
                    pt={'25px'}
                    width={'100%'}
                  >
                    <>
                      {jobCardFields.map((item, key) => {
                        return (
                          <GridItem key={key}>
                            <MyJobCard
                              companyIconLogo={item.companyIconLogo}
                              role={item.role}
                              companyName={item.companyName}
                              location={item.location}
                              jobType={item.jobType}
                              companyDesc={item.companyDesc}
                            />
                          </GridItem>
                        );
                      })}
                    </>
                  </Grid>
                </TabPanel>
                {/* Favorouite Jobs */}
                <TabPanel>
                  <Grid
                    templateColumns={{
                      base: 'repeat(1, 1fr)',
                      md: 'repeat(2, 1fr)',
                      lg: 'repeat(2, 1fr)',
                    }}
                    gap={{ base: 6, lg: 4, xl: 6 }}
                    mx={'auto'}
                    pt={'25px'}
                    width={'100%'}
                  >
                    <>
                      {jobCardFields.map((item, key) => {
                        return (
                          <GridItem key={key}>
                            <MyJobCard
                              companyIconLogo={item.companyIconLogo}
                              role={item.role}
                              companyName={item.companyName}
                              location={item.location}
                              jobType={item.jobType}
                              companyDesc={item.companyDesc}
                            />
                          </GridItem>
                        );
                      })}
                    </>
                  </Grid>
                </TabPanel>
                {/* Applied jobs */}
                <TabPanel>
                  <Grid
                    templateColumns={{
                      base: 'repeat(1, 1fr)',
                      md: 'repeat(2, 1fr)',
                      lg: 'repeat(2, 1fr)',
                    }}
                    gap={{ base: 6, lg: 4, xl: 6 }}
                    mx={'auto'}
                    pt={'25px'}
                    width={'100%'}
                  >
                    <>
                      {jobCardFields.map((item, key) => {
                        return (
                          <GridItem key={key}>
                            <MyJobCard
                              companyIconLogo={item.companyIconLogo}
                              role={item.role}
                              companyName={item.companyName}
                              location={item.location}
                              jobType={item.jobType}
                              companyDesc={item.companyDesc}
                            />
                          </GridItem>
                        );
                      })}
                    </>
                  </Grid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </VStack>
          {/* Favorouite section added */}
          <VStack w={'full'} alignItems={'flex-start'}>
            <HStack>
              <MyIcon name="heart" />
              <MyText title="Favorouite Company" as={'heading'} />
            </HStack>

            <Center
              w={'full'}
              gap={'16px'}
              p={'10px'}
              borderRadius={'8px'}
              boxShadow={'lg'}
            >
              <Center
                border={'1px solid'}
                borderColor={'brand.lightgray'}
                borderRadius={'50%'}
                cursor={'pointer'}
                onClick={() => {
                  if (companyBoxRef && companyBoxRef.current) {
                    companyBoxRef.current.scrollLeft -= 168;
                  }
                }}
              >
                <MyIcon name="chevronLeft" />
              </Center>

              <HStack
                w={'full'}
                p={'10px'}
                gap={'12px'}
                overflowX={'scroll'}
                css={{
                  '&::-webkit-scrollbar': {
                    // display: 'none',
                    height: '5px',
                  },
                }}
                cursor={'pointer'}
                ref={companyBoxRef}
                scrollBehavior={'smooth'}
              >
                <CompanyBox
                  companyLogo="/assets/images/company-logo/google.png"
                  companyName="Amazon"
                />
                <CompanyBox
                  companyLogo="/assets/images/company-logo/google.png"
                  companyName="Amazon"
                />
                <CompanyBox
                  companyLogo="/assets/images/company-logo/google.png"
                  companyName="Amazon"
                />
                <CompanyBox
                  companyLogo="/assets/images/company-logo/google.png"
                  companyName="Amazon"
                />
                <CompanyBox
                  companyLogo="/assets/images/company-logo/google.png"
                  companyName="Amazon"
                />
                <CompanyBox
                  companyLogo="/assets/images/company-logo/google.png"
                  companyName="Amazon"
                />
                <CompanyBox
                  companyLogo="/assets/images/company-logo/google.png"
                  companyName="Amazon"
                />

                <CompanyBox
                  companyLogo="/assets/images/company-logo/bookmyshow.png"
                  companyName="Amazon"
                />
                <CompanyBox
                  companyLogo="/assets/images/company-logo/google.png"
                  companyName="Amazon"
                />
                <CompanyBox
                  companyLogo="/assets/images/company-logo/github.png"
                  companyName="GitHub"
                />
                <CompanyBox
                  companyLogo="/assets/images/company-logo/linkedin.png"
                  companyName="LinkedIn"
                />
              </HStack>

              <Center
                border={'1px solid'}
                borderColor={'brand.lightgray'}
                borderRadius={'50%'}
                cursor={'pointer'}
                onClick={() => {
                  if (companyBoxRef && companyBoxRef.current) {
                    companyBoxRef.current.scrollLeft += 168;
                  }
                }}
              >
                <MyIcon name="chevronRight" />
              </Center>
            </Center>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
}

interface ICompanyBox {
  companyName: string;
  companyLogo: string;
}

const CompanyBox = ({ companyName, companyLogo }: ICompanyBox) => {
  return (
    <Center
      px={'40px'}
      h={'80px'}
      gap={'8px'}
      borderRadius="8px"
      border={'1px solid'}
      _hover={{
        borderColor: 'brand.primary',
        boxShadow: '0px 0px 30px rgb(0,0,0,0.1)',
      }}
      borderColor={'brand.darkgray'}
    >
      <MyImage src={companyLogo} alt="company logo" height={30} width={30} />
      <MyText title={companyName} as={'title'} />
    </Center>
  );
};
