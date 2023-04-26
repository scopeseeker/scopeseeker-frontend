import { Center } from '@chakra-ui/react';
import MyImage from '../image/MyImage';

const Company = () => {
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

export default Company;
