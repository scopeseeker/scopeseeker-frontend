import {
  companyDescTable,
  companyLeaders,
  companySubsidiaries,
} from '@/constant/constantFields';
import {
  AspectRatio,
  Box,
  Center,
  Grid,
  HStack,
  ListItem,
  Table,
  Tbody,
  Td,
  Tr,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { MyImage } from '../image';
import { MyText } from '../text';

const Overview = () => {
  const companyBoxRef = useRef<HTMLDivElement>(null);
  return (
    <VStack
      w={'full'}
      alignItems={'flex-start'}
      marginTop={'20px'}
      gap={'10px'}
    >
      <MyText as="heading" title="About US" />

      {/* Company About us */}
      <VStack w={'full'} gap={'60px'} alignItems={'flex-start'}>
        <HStack
          w={'850px'}
          h={'300px'}
          boxShadow="0px 0px 30px rgb(0,0,0,0.2)"
          padding={'20px'}
          justifyContent={'space-between'}
          borderRadius={'10px'}
          gap={'20px'}
        >
          {/* Video Part */}
          <Box w={'500px'} h={'full'} borderRadius={'10px'} overflow={'hidden'}>
            <AspectRatio maxW="500px" h={'full'} ratio={1.5}>
              <iframe
                src="https://www.youtube.com/embed/uYRygzr_W0U"
                title="Capgemini Containerization Service Powered by Red Hat"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </Box>

          <VStack w={'500px'} h={'full'} alignItems={'flex-start'}>
            <MyText as="heading" title="Camgimini" />
            <Box overflow={'scroll'} pr={'40px'}>
              <UnorderedList>
                <ListItem>
                  <MyText
                    as="p"
                    title="Capgemini is a global consulting, technology services, and digital transformation company."
                  />
                </ListItem>
                <ListItem>
                  <MyText
                    as="p"
                    title="It was founded in 1967 and operates in over 50 countries."
                  />
                </ListItem>
                <ListItem>
                  <MyText
                    as="p"
                    title="Capgemini offers consulting, technology services, and digital transformation solutions."
                  />
                </ListItem>
                <ListItem>
                  <MyText
                    as="p"
                    title="They assist clients in various industries and help them embrace digital technologies."
                  />
                </ListItem>
                <ListItem>
                  <MyText
                    as="p"
                    title="Capgemini has a strong global presence with offices and delivery centers worldwide."
                  />
                </ListItem>
                <ListItem>
                  <MyText
                    as="p"
                    title="They follow a collaborative approach, working closely with clients to develop tailored solutions."
                  />
                </ListItem>
              </UnorderedList>
            </Box>
          </VStack>
        </HStack>

        {/* Table Section*/}
        <VStack>
          <Box
            borderWidth={'1px'}
            borderColor={'brand.lightgray'}
            borderRadius={'10px'}
            overflow={'hidden'}
          >
            <Table variant="striped" colorScheme="gray" w={'850px'}>
              <Tbody>
                {companyDescTable.map((item, key) => (
                  <Tr key={key}>
                    <Td>
                      <MyText as="title" title={item.name} />
                    </Td>
                    <Td fontSize={'13px'}>
                      <MyText as="small" title={item.value} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </VStack>

        {/* Company Subsidiaries Section*/}
        <VStack w={'full'} alignItems={'flex-start'} gap={'20px'}>
          <MyText as="heading" title="Capgemini Subsidiaries" />

          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}
            gap={'22px'}
          >
            <>
              {companySubsidiaries.map((item, key) => {
                return (
                  <HStack
                    w={'200px'}
                    h={'70px'}
                    borderWidth={'1px'}
                    borderColor={'brand.lightgray'}
                    borderRadius={'5px'}
                    pl={'10px'}
                    gap={'10px'}
                    key={key}
                  >
                    <Center w={'50px'} h={'50px'} borderRadius={'5px'}>
                      <MyImage
                        src={item.image}
                        alt="image"
                        height={40}
                        width={40}
                      />
                    </Center>
                    <MyText as="span" title={item.name} />
                  </HStack>
                );
              })}
            </>
          </Grid>
        </VStack>

        {/* Company Leaders Section */}
        <VStack gap={'20px'} w={'full'} alignItems={'flex-start'}>
          <MyText as="heading" title="Leaders of comapany" />
          <HStack>
            <Center
              px={'12px'}
              cursor={'pointer'}
              onClick={() => {
                if (companyBoxRef && companyBoxRef.current) {
                  companyBoxRef.current.scrollLeft -= 168;
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
                width="24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M249.38 336L170 256l79.38-80M181.03 256H342"
                />
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  strokeWidth="32"
                />
              </svg>
            </Center>
            <HStack
              gap={'20px'}
              maxW={'60%'}
              overflowX={'scroll'}
              h={'300px'}
              css={{
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              }}
              cursor={'pointer'}
              ref={companyBoxRef}
              scrollBehavior={'smooth'}
            >
              <>
                {companyLeaders.map((item, key) => {
                  return (
                    <Center
                      flexShrink={0}
                      key={key}
                      w={'200px'}
                      h={'280px'}
                      boxShadow="0px 10px 30px rgb(0,0,0,0.1)"
                      borderRadius={'5px'}
                      flexDir={'column'}
                      gap={'20px'}
                    >
                      <Center
                        h={'100px'}
                        w={'100px'}
                        borderRadius={'full'}
                        overflow={'hidden'}
                      >
                        <MyImage
                          src={item.image}
                          width={100}
                          height={100}
                          alt="picture"
                        />
                      </Center>

                      <VStack textAlign={'center'} spacing={0}>
                        <MyText as="title" title={item.name} />
                        <MyText as="small" title={item.organisation} />
                      </VStack>
                    </Center>
                  );
                })}
              </>
            </HStack>
            <Center
              px={'12px'}
              cursor={'pointer'}
              onClick={() => {
                if (companyBoxRef && companyBoxRef.current) {
                  companyBoxRef.current.scrollLeft += 168;
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
                width="24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M262.62 336L342 256l-79.38-80M330.97 256H170"
                />
                <path
                  d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  strokeWidth="32"
                />
              </svg>
            </Center>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Overview;
