import { Layout, MyButton, MyText } from '@/component';
import { Center, HStack, Heading, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const SignupSection = () => {
  return (
    <Center
      w={'full'}
      bg={'red'}
      py={{ base: '80px', md: '100px' }}
      backgroundColor={'transparent'}
      opacity={'0.8'}
      backgroundImage={
        'radial-gradient(circle at center center, transparent, #f7f7fc), repeating-radial-gradient(circle at center center, brand.aliceblue, brand.aliceblue, 1px, transparent 28px, transparent 1px)'
      }
      backgroundBlendMode={'multiply'}
    >
      <Layout w={'full'}>
        <Center w={'full'}>
          <VStack
            maxW={{ base: 'fit-content', md: '75%', lg: '65%' }}
            gap={'6px'}
            textAlign={'center'}
          >
            <Heading color={'brand.primary'}>
              So what are you waiting for?
            </Heading>
            <MyText
              title={`The truth is, there's never a perfect time, and waiting only leads to missed opportunities and regret. Don't let fear or hesitation hold you back any longer. The future is yours to shape, and it all starts with taking action today.`}
              as="p"
            />
            <HStack
              pt={'12px'}
              flexDir={{ base: 'column', sm: 'row' }}
              spacing={0}
              gap={'15px'}
            >
              <Link href={'/signup'}>
                <MyButton
                  title="Register a New Account"
                  px="50px"
                  py={'20px'}
                />
              </Link>
              <Link href={'/login'}>
                <MyButton
                  title="Sign In to Your Account"
                  variant="outline"
                  px="50px"
                  py={'20px'}
                />
              </Link>
            </HStack>
          </VStack>
        </Center>
      </Layout>
    </Center>
  );
};

export default SignupSection;
