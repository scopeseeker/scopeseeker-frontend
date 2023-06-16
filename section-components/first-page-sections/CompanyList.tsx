import { MyImage } from '@/component';
import { Center } from '@chakra-ui/react';

const CompanyList = () => {
  return (
    <Center gap={10} w={'full'} flexWrap={'wrap'}>
      <MyImage
        src={'/assets/images/company-logo/amazon.png'}
        alt={'company logo'}
        width={70}
        height={40}
      />
      <MyImage
        src={'/assets/images/company-logo/bookmyshow.png'}
        alt={'company logo'}
        width={70}
        height={40}
      />

      <MyImage
        src={'/assets/images/company-logo/amazon.png'}
        alt={'company logo'}
        width={70}
        height={40}
      />
      <MyImage
        src={'/assets/images/company-logo/bookmyshow.png'}
        alt={'company logo'}
        width={70}
        height={40}
      />

      <MyImage
        src={'/assets/images/company-logo/amazon.png'}
        alt={'company logo'}
        width={70}
        height={40}
      />
      <MyImage
        src={'/assets/images/company-logo/bookmyshow.png'}
        alt={'company logo'}
        width={70}
        height={40}
      />
    </Center>
  );
};

export default CompanyList;
