import { MyImage, MyText } from '@/component';
import { Center, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const ScopeSeekerLogo = ({ color = 'brand.black' }: { color?: string }) => {
  return (
    <Link href={'/'}>
      <Center gap={'8px'} mr={'10px'} justifyContent={'flex-start'}>
        <MyImage
          src={'/assets/images/scopeseeker-logo.png'}
          alt={'secope seeker logo'}
          width={30}
          height={30}
        />
        <VStack alignItems={'flex-start'} spacing={0} color={color}>
          <MyText
            lineHeight={'shorter'}
            title="Scope Seeker"
            as="title"
            color={'currentColor'}
          />
          <MyText
            lineHeight={'shorter'}
            title="Seek the scope of your potential"
            as="small"
            color={'currentColor'}
            fontSize={{ base: '0px', sm: '10px' }}
          />
        </VStack>
      </Center>
    </Link>
  );
};

export default ScopeSeekerLogo;
