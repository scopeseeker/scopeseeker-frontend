import { Layout, MyImage } from '@/component';
import { Center } from '@chakra-ui/react';

const CompanyList = () => {
  return (
    <Layout py={{ base: '0px', md: '0' }}>
      <Center gap={'52px'} w={'full'} flexWrap={'wrap'}>
        {[
          'bookmyshow.png',
          'amazon.png',
          'capgemini.png',
          'bookmyshow.png',
          'amazon.png',
          'capgemini.png',
          'amazon.png',
          'capgemini.png',
        ].map((item, index) => {
          return (
            <>
              <MyImage
                key={index}
                src={`/assets/images/company-logo/${item}`}
                alt={'company logo'}
                width={80}
                height={40}
              />
            </>
          );
        })}
      </Center>
    </Layout>
  );
};

export default CompanyList;
