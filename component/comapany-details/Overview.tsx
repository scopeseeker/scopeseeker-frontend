import { AspectRatio, Box, HStack, VStack } from '@chakra-ui/react';
import { MyText } from '../text';

const Overview = () => {
  return (
    <VStack w={'full'} alignItems={'flex-start'} marginTop={'20px'} gap={'10px'}>
      <MyText as="heading" title="About US" />

      <HStack
        w={'85vw'}
        h={'60vh'}
        bg={'brand.aliceblue'}
        padding={'20px'}
        justifyContent={'space-between'}
        borderRadius={'10px'}
      >
        {/* Video Part */}
        <Box
          w={'500px'}
          h={'full'}
          bg={'yellow'}
          borderRadius={'10px'}
          overflow={'hidden'}
        >
          <AspectRatio maxW="500px" ratio={1.5}>
            <iframe
              src="https://www.youtube.com/embed/uYRygzr_W0U"
              title="Capgemini Containerization Service Powered by Red Hat"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </Box>

        {/* Company About us */}
        <VStack w={'500px'} h={'full'} alignItems={'flex-start'}>
          <MyText as="heading" title="Camgimini" />
          <Box overflow={'scroll'}>
            <MyText
              as="span"
              title="Capgemini is a multinational consulting, technology services, and digital transformation company. It is headquartered in Paris, France. Capgemini provides services in various areas such as consulting, technology services, and digital transformation. The company offers a wide range of services including strategy and transformation, application services, infrastructure services, engineering services, business process outsourcing, and more.Capgemini has a global presence with offices and delivery centers in numerous countries around the world. It serves clients in various industries including automotive, banking, consumer products, energy, healthcare, insurance, manufacturing, retail, telecommunications, and others.The company is known for its expertise in areas such as cloud computing, cybersecurity, artificial intelligence, data analytics, and digital customer experience. Capgemini works with clients to help them navigate through digital disruptions, improve operational efficiency, enhance customer experience, and drive innovation.Capgemini has a diverse workforce comprising professionals from different backgrounds and expertise. It fosters a collaborative and inclusive work environment and encourages continuous learning and development.Please note that the information provided here is based on the knowledge available up until September 2021, and there may have been updates or changes in Capgeminis operations since then."
            />
          </Box>
        </VStack>
        
      </HStack>
    </VStack>
  );
};

export default Overview;
