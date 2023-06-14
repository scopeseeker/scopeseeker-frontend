import {
  Layout,
  MainHeading,
  MyDivider,
  MyIcon,
  MyImage,
  MyText,
} from '@/component';
import { Box, Flex, HStack, IconButton, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function Category() {
  return (
    <>
      <Layout>
        <Flex w={'full'} flexDirection={'row'}>
          <VStack
            w={'80%'}
            gap={'64px'}
           
            alignItems={'flex-start'}
          >
            {/* This is the Heading and blog detail section */}
            <VStack w={'full'}>
              <MainHeading title="Complete Frontend Guide" align={'start'} />
              <HStack w={'full'} justifyContent={'space-between'}>
                <HStack gap={'18px'}>
                  <HStack spacing={0} gap={'4px'}>
                    <MyImage
                      src={'/assets/images/scopeseeker-logo.png'}
                      alt="socpe seeker"
                      height={20}
                      width={20}
                    />
                    <Link href={'#'}>
                      <MyText title="by Scope Seeker" as={'title'} />
                    </Link>
                  </HStack>

                  <HStack spacing={0} gap={'4px'}>
                    <MyIcon
                      name="time"
                      strokeWidth="1.2"
                      color="brand.darkgray"
                    />
                    <MyText
                      title="24 Min Read"
                      as={'p'}
                      color="brand.darkgray"
                    />
                  </HStack>

                  <HStack spacing={0} gap={'4px'}>
                    <MyIcon
                      name="calenderTime"
                      strokeWidth="1.2"
                      color="brand.darkgray"
                    />
                    <MyText
                      title="June 14 2023"
                      as={'p'}
                      color="brand.darkgray"
                    />
                  </HStack>
                </HStack>
                {/* <HStack>
                <MyIcon
                  name="whatsapp"
                  _hover={{ color: 'brand.primary' }}
                  cursor={'pointer'}
                  strokeWidth="1.2"
                />
                <MyIcon
                  name="instagram"
                  _hover={{ color: 'brand.primary' }}
                  cursor={'pointer'}
                  strokeWidth="1.2"
                />
                <MyIcon
                  name="facebook"
                  _hover={{ color: 'brand.primary' }}
                  cursor={'pointer'}
                  strokeWidth="1.2"
                />
                <MyIcon
                  name="twitter"
                  _hover={{ color: 'brand.primary' }}
                  cursor={'pointer'}
                  strokeWidth="1.2"
                />
                <MyIcon
                  name="linkedin"
                  _hover={{ color: 'brand.primary' }}
                  cursor={'pointer'}
                  strokeWidth="1.2"
                />
              </HStack> */}
              </HStack>
            </VStack>

            <VStack w={'full'} gap={'18px'}>
              {/* Blog content */}
              <VStack alignItems={'flex-start'} gap={'12px'}>
                <MyText
                  title="The Basics of Frontend Development"
                  as={'heading'}
                />
                <Box w={'95%'} flexShrink={0}>
                  <MyText
                    title="HTML (Hypertext Markup Language)
                HTML forms the foundation of every webpage. It defines the structure and content, enabling you to create headings, paragraphs, images, links, and more. Mastering HTML is essential for building well-structured web pages.

                CSS (Cascading Style Sheets)
                CSS is responsible for the visual styling of your web pages. With CSS, you can control the layout, colors, fonts, and overall design of your site. Understanding CSS selectors, properties, and how to apply them will help you create visually appealing and responsive interfaces.
                
                JavaScript brings interactivity and functionality to your web pages. It allows you to manipulate HTML elements, handle events, make API calls, and create dynamic user experiences. Learning JavaScript empowers you to add behaviors and make your website more engaging."
                    as={'p'}
                  />
                </Box>
                <MyDivider />
              </VStack>

              <VStack alignItems={'flex-start'} gap={'12px'}>
                <MyText
                  title="Prerequisites for frontend development"
                  as={'heading'}
                />
                <Box w={'95%'} flexShrink={0}>
                  <MyText
                    title="Programming Languages: Proficiency in at least one backend programming language is essential. Common languages for backend development include:

                Python: Known for its simplicity and versatility, Python is widely used in backend development.
                JavaScript: Node.js allows you to use JavaScript on the server-side, making it a popular choice for full-stack development.
                Java: Renowned for its reliability and performance, Java is commonly used in enterprise-level applications.
                Ruby: Often associated with the Ruby on Rails framework, Ruby is known for its elegant syntax and developer-friendly environment.
                PHP: Widely used in web development, PHP powers many popular content management systems and frameworks."
                    as={'p'}
                  />
                </Box>
                <MyDivider />
              </VStack>
            </VStack>
          </VStack>

          {/* Right Part */}
          <VStack w={'20%'} h={'70px'} justifyContent={'flex-start'} >
            <HStack>
            <HStack py={2}>
              <IconButton
                p={2}
                aria-label="social-meida"
                color={'brand.primary'}
                icon={<MyIcon name={'instagram'} height="25" width="25" />}
              />
              <IconButton
                p={2}
                aria-label="social-meida"
                color={'brand.primary'}
                icon={<MyIcon name={'linkedin'} height="25" width="25" />}
              />
              <IconButton
                p={2}
                aria-label="social-meida"
                color={'brand.primary'}
                icon={<MyIcon name={'twitter'} height="25" width="25" />}
              />

              <IconButton
                p={2}
                aria-label="social-meida"
                color={'brand.primary'}
                icon={<MyIcon name={'whatsapp'} height="25" width="25" />}
              />
            </HStack>

            </HStack>
            
          </VStack>
        </Flex>
      </Layout>
    </>
  );
}
