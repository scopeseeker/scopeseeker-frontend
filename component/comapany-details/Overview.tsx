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
  Table,
  Tbody,
  Td,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { MyImage } from '../image';
import { MyText } from '../text';

const Overview = () => {
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
              <MyText
                as="p"
                title="Capgemini is a multinational consulting, technology services, and digital transformation company. It is headquartered in Paris, France. Capgemini provides services in various areas such as consulting, technology services, and digital transformation. The company offers a wide range of services including strategy and transformation, application services, infrastructure services, engineering services, business process outsourcing, and more.Capgemini has a global presence with offices and delivery centers in numerous countries around the world. It serves clients in various industries including automotive, banking, consumer products, energy, healthcare, insurance, manufacturing, retail, telecommunications, and others.The company is known for its expertise in areas such as cloud computing, cybersecurity, artificial intelligence, data analytics, and digital customer experience. Capgemini works with clients to help them navigate through digital disruptions, improve operational efficiency, enhance customer experience, and drive innovation.Capgemini has a diverse workforce comprising professionals from different backgrounds and expertise. It fosters a collaborative and inclusive work environment and encourages continuous learning and development.Please note that the information provided here is based on the knowledge available up until September 2021, and there may have been updates or changes in Capgeminis operations since then."
              />
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
          <HStack gap={'20px'}>
            <>
              {companyLeaders.map((item, key) => {
                return (
                  <Center
                    w={'200px'}
                    h={'250px'}
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
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Overview;
