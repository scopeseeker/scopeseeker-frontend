import { HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import MyButton from '../button/MyButton';
import MyHeading from '../heading/MyHeading';
import Icon from '../icon/Icon';

const Categories = () => {
  return (
    <VStack w={'full'} py={10} gap={10} bg={'brand.aliceblue'}>
      <MyHeading
        title={'Popular Job Categories'}
        subTitle={'2020 jobs live - 293 added today'}
      />

      <VStack>
        <HStack my={4} gap={4}>
          <VStack
            w={'3xs'}
            bg={'brand.white'}
            py={8}
            gap={6}
            borderRadius={'lg'}
          >
            <IconButton
              aria-label="categories"
              icon={<Icon name={'instagram'} width={'14px'} />}
            />
            <VStack lineHeight={1}>
              <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
                FrontEnd Developer
              </Text>
              <Text
                as={'span'}
                fontSize={'10px'}
                color={'brand.blackAlpha.600'}
              >
                (2 open position)
              </Text>
            </VStack>
          </VStack>

          <VStack
            w={'3xs'}
            bg={'brand.white'}
            py={8}
            gap={6}
            borderRadius={'lg'}
          >
            <IconButton
              aria-label="categories"
              icon={<Icon name={'instagram'} width={'14px'} />}
            />
            <VStack lineHeight={1}>
              <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
                BackEnd Developer
              </Text>
              <Text
                as={'span'}
                fontSize={'10px'}
                color={'brand.blackAlpha.600'}
              >
                (2 open position)
              </Text>
            </VStack>
          </VStack>

          <VStack
            w={'3xs'}
            bg={'brand.white'}
            py={8}
            gap={6}
            borderRadius={'lg'}
          >
            <IconButton
              aria-label="categories"
              icon={<Icon name={'instagram'} width={'14px'} />}
            />
            <VStack lineHeight={1}>
              <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
                React Developer
              </Text>
              <Text
                as={'span'}
                fontSize={'10px'}
                color={'brand.blackAlpha.600'}
              >
                (2 open position)
              </Text>
            </VStack>
          </VStack>

          <VStack
            w={'3xs'}
            bg={'brand.white'}
            py={8}
            gap={6}
            borderRadius={'lg'}
          >
            <IconButton
              aria-label="categories"
              icon={<Icon name={'instagram'} width={'14px'} />}
            />
            <VStack lineHeight={1}>
              <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
                DevOps Developer
              </Text>
              <Text
                as={'span'}
                fontSize={'10px'}
                color={'brand.blackAlpha.600'}
              >
                (2 open position)
              </Text>
            </VStack>
          </VStack>
        </HStack>

        <HStack gap={4}>
          <VStack
            w={'3xs'}
            bg={'brand.white'}
            py={8}
            gap={6}
            borderRadius={'lg'}
          >
            <IconButton
              aria-label="categories"
              icon={<Icon name={'instagram'} width={'14px'} />}
            />
            <VStack lineHeight={1}>
              <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
                Software Developer
              </Text>
              <Text
                as={'span'}
                fontSize={'10px'}
                color={'brand.blackAlpha.600'}
              >
                (2 open position)
              </Text>
            </VStack>
          </VStack>

          <VStack
            w={'3xs'}
            bg={'brand.white'}
            py={8}
            gap={6}
            borderRadius={'lg'}
          >
            <IconButton
              aria-label="categories"
              icon={<Icon name={'instagram'} width={'14px'} />}
            />
            <VStack lineHeight={1}>
              <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
                Mobile Developer
              </Text>
              <Text
                as={'span'}
                fontSize={'10px'}
                color={'brand.blackAlpha.600'}
              >
                (2 open position)
              </Text>
            </VStack>
          </VStack>

          <VStack
            w={'3xs'}
            bg={'brand.white'}
            py={8}
            gap={6}
            borderRadius={'lg'}
          >
            <IconButton
              aria-label="categories"
              icon={<Icon name={'instagram'} width={'14px'} />}
            />
            <VStack lineHeight={1}>
              <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
                Game Developer
              </Text>
              <Text
                as={'span'}
                fontSize={'10px'}
                color={'brand.blackAlpha.600'}
              >
                (2 open position)
              </Text>
            </VStack>
          </VStack>

          <VStack
            w={'3xs'}
            bg={'brand.white'}
            py={8}
            gap={6}
            borderRadius={'lg'}
          >
            <IconButton
              aria-label="categories"
              icon={<Icon name={'instagram'} width={'14px'} />}
            />
            <VStack lineHeight={1}>
              <Text as={'span'} fontSize={'13px'} fontWeight={'semibold'}>
                Full Stack Developer
              </Text>
              <Text
                as={'span'}
                fontSize={'10px'}
                color={'brand.blackAlpha.600'}
              >
                (2 open position)
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </VStack>

      <MyButton
        fontSize={'xs'}
        bg={'brand.primary'}
        title="Browse All Categories"
      />
    </VStack>
  );
};

export default Categories;
