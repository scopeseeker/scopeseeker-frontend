import { Center, HStack, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { MyText } from '../text'
import { MyButton } from '../button'

const SignupSection = () => {
  return (
    <Center
          w={'full'}
          h={'80vh'}
          bg={'red'}
          backgroundColor={'transparent'}
          opacity={'0.8'}
          backgroundImage={
            'radial-gradient(circle at center center, transparent, #f7f7fc), repeating-radial-gradient(circle at center center, brand.aliceblue, brand.aliceblue, 1px, transparent 28px, transparent 1px)'
          }
          backgroundBlendMode={'multiply'}
        >
          <VStack gap={'6px'} maxW={'50%'} textAlign={'center'}>
            <Heading color={'brand.primary'}>
              So what are you waiting for🤨?
            </Heading>
            <MyText
              title={`The truth is, there's never a perfect time, and waiting only leads to missed opportunities and regret. Don't let fear or hesitation hold you back any longer. The future is yours to shape, and it all starts with taking action today.`}
              as="p"
            />
            <HStack pt={'12px'}>
              <MyButton title="Register a New Account" size="lg" />
              <MyButton
                title="Sign In to Your Account"
                border={'1.5px solid black'}
                size="lg"
                variant="outline"
              />
            </HStack>
          </VStack>
        </Center>
  )
}

export default SignupSection