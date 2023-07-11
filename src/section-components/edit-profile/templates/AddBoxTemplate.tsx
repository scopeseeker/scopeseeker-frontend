import { MyIcon, MyImage, MyText } from '@/component';
import { Box, Center, HStack, VStack } from '@chakra-ui/react';

interface IAddBoxTemplete {
  role: string;
  companyName: string;
  period: string;
  companyImage: string;
}

const AddBoxTemplete = ({
  role,
  companyName,
  period,
  companyImage,
}: IAddBoxTemplete) => {
  return (
    <HStack
      w={'full'}
      justifyContent={'space-between'}
      borderWidth={'1px'}
      borderColor={'brand.lightgray'}
      px={'20px'}
      py={'10px'}
      borderRadius={'20px'}
      flexDir={{ base: 'column', md: 'row' }}
      gap={{ base: '10px', md: '0px' }}
    >
      <HStack
        flexDir={{ base: 'column', sm: 'row' }}
        gap={{ base: '10px', sm: '0px' }}
        alignItems={{ base: 'flex-start', sm: 'center' }}
        w={'full'}
      >
        <Box>
          <Center
            h={'70px'}
            w={'70px'}
            borderRadius={'50px'}
            bg={'brand.aliceblue'}
          >
            <MyImage alt="img" src={companyImage} width={40} height={40} />
          </Center>
        </Box>
        <VStack spacing={0} alignItems={'flex-start'}>
          <MyText as="span" title={role} />
          <MyText as="small" title={companyName} />
          <MyText as="small" title={period} color="brand.darkgray" />
        </VStack>
      </HStack>

      {/* Icon Part  */}
      <HStack
        justifyContent={{ base: 'flex-start', sm: 'flex-end' }}
        w={'full'}
      >
        <Center
          w={'30px'}
          h={'30px'}
          borderRadius={'50%'}
          bg={'brand.primary'}
          cursor={'pointer'}
        >
          <MyIcon name={'edit'} color="brand.white" strokeWidth="2" />
        </Center>

        <Center
          w={'30px'}
          h={'30px'}
          borderRadius={'50%'}
          bg={'red'}
          cursor={'pointer'}
        >
          <MyIcon name={'delete'} color="brand.white" strokeWidth="2" />
        </Center>
      </HStack>
    </HStack>
  );
};

export default AddBoxTemplete;
