import { Center } from '@chakra-ui/react';
import MyImage from '../image/MyImage';

const Company = () => {
  return (
    <Center gap={20} w={'full'} px={24} py={4}>
      <MyImage src={'/assets/images/company-logo/amazon.png'} alt={'company logo'} width={70} height={40} />
      <MyImage src={'/assets/images/company-logo/bookmyshow.png'} alt={'company logo'} width={70} height={40} />

      <MyImage src={'/assets/images/company-logo/amazon.png'} alt={'company logo'} width={70} height={40} />
      <MyImage src={'/assets/images/company-logo/bookmyshow.png'} alt={'company logo'} width={70} height={40} />

      <MyImage src={'/assets/images/company-logo/amazon.png'} alt={'company logo'} width={70} height={40} />
      <MyImage src={'/assets/images/company-logo/bookmyshow.png'} alt={'company logo'} width={70} height={40} />

    </Center>
  );
};

export default Company;
