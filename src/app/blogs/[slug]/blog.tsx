'use client';
import {
  Layout,
  MainHeading,
  MyIcon,
  MyImage,
  MyInput,
  MyText,
} from '@/component';
import { Center, Flex, HStack, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <Layout>
        <Flex
          w={'full'}
          h={'full'}
          flexDirection={{ base: 'column', md: 'row' }}
          gap={'72px'}
          py={'32px'}
        >
          {/* Left Blog Part */}
          <VStack
            w={{ base: 'full', md: '70%' }}
            gap={'72px'}
            alignItems={'flex-start'}
          >
            <VStack w={'full'}>
              <MainHeading title="Complete Frontend Guide" align={'start'} />
              <HStack
                spacing={0}
                w={'full'}
                gap={{ base: '30px' }}
                flexDirection={{ base: 'column', sm: 'row' }}
                alignItems={{ base: 'flex-start', sm: 'normal' }}
                justifyContent={'space-between'}
              >
                <HStack
                  gap={{ base: '12px', md: '12px' }}
                  spacing={0}
                  alignItems={{ base: 'flex-start', md: 'center' }}
                  // flexDirection={{ base: 'column', sm: 'row' }}
                  flexWrap={'wrap'}
                  w={'full'}
                  flexShrink={0}
                >
                  <Center gap={'4px'}>
                    <MyImage
                      src={'/assets/images/scopeseeker-logo.png'}
                      alt="socpe seeker"
                      height={20}
                      width={20}
                    />
                    <Link href={'/'}>
                      <MyText title="by Scope Seeker" as={'title'} />
                    </Link>
                  </Center>

                  <Center gap={'4px'}>
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
                  </Center>

                  <Center gap={'4px'}>
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
                  </Center>

                  {/* Social  Icons */}
                  <HStack
                    spacing={0}
                    gap={'4px'}
                    alignItems={{
                      base: 'center',
                      sm: 'flex-start',
                      md: 'center',
                    }}
                  >
                    <MyIcon
                      name="whatsapp"
                      _hover={{ color: 'brand.primary' }}
                      cursor={'pointer'}
                      strokeWidth="1.2"
                      width="24px"
                      height="24px"
                    />
                    <MyIcon
                      name="instagram"
                      _hover={{ color: 'brand.primary' }}
                      cursor={'pointer'}
                      strokeWidth="1.2"
                      width="24px"
                      height="24px"
                    />
                    <MyIcon
                      name="facebook"
                      _hover={{ color: 'brand.primary' }}
                      cursor={'pointer'}
                      strokeWidth="1.2"
                      width="24px"
                      height="24px"
                    />
                    <MyIcon
                      name="twitter"
                      _hover={{ color: 'brand.primary' }}
                      cursor={'pointer'}
                      strokeWidth="1.2"
                      width="24px"
                      height="24px"
                    />
                    <MyIcon
                      name="linkedin"
                      _hover={{ color: 'brand.primary' }}
                      cursor={'pointer'}
                      strokeWidth="1.2"
                      width="24px"
                      height="24px"
                    />
                  </HStack>
                </HStack>
              </HStack>
            </VStack>

            <VStack w={'full'} gap={'18px'}>
              {/* Blog content */}
              <VStack alignItems={'flex-start'} gap={'12px'}>
                <MyText
                  title="The Basics of Frontend Development"
                  as={'heading'}
                />
                <MyText title={`slug:`} as={'title'} />
                <MyText
                  title="HTML (Hypertext Markup Language)
                HTML forms the foundation of every webpage. It defines the structure and content, enabling you to create headings, paragraphs, images, links, and more. Mastering HTML is essential for building well-structured web pages.

                CSS (Cascading Style Sheets)
                CSS is responsible for the visual styling of your web pages. With CSS, you can control the layout, colors, fonts, and overall design of your site. Understanding CSS selectors, properties, and how to apply them will help you create visually appealing and responsive interfaces.
                
                JavaScript brings interactivity and functionality to your web pages. It allows you to manipulate HTML elements, handle events, make API calls, and create dynamic user experiences. Learning JavaScript empowers you to add behaviors and make your website more engaging."
                  as={'p'}
                />
              </VStack>
              <VStack alignItems={'flex-start'} gap={'12px'}>
                <MyText
                  title="Prerequisites for frontend development"
                  as={'heading'}
                />
                <MyText
                  title="Programming Languages: Proficiency in at least one backend programming language is essential. Common languages for backend development include:

                Python: Known for its simplicity and versatility, Python is widely used in backend development.
                JavaScript: Node.js allows you to use JavaScript on the server-side, making it a popular choice for full-stack development.
                Java: Renowned for its reliability and performance, Java is commonly used in enterprise-level applications.
                Ruby: Often associated with the Ruby on Rails framework, Ruby is known for its elegant syntax and developer-friendly environment.
                PHP: Widely used in web development, PHP powers many popular content management systems and frameworks."
                  as={'p'}
                />
              </VStack>
              <VStack alignItems={'flex-start'} gap={'12px'}>
                <MyText
                  title="The Basics of Frontend Development"
                  as={'heading'}
                />
                <MyText title={`slug:`} as={'title'} />
                <MyText
                  title="HTML (Hypertext Markup Language)
                HTML forms the foundation of every webpage. It defines the structure and content, enabling you to create headings, paragraphs, images, links, and more. Mastering HTML is essential for building well-structured web pages.

                CSS (Cascading Style Sheets)
                CSS is responsible for the visual styling of your web pages. With CSS, you can control the layout, colors, fonts, and overall design of your site. Understanding CSS selectors, properties, and how to apply them will help you create visually appealing and responsive interfaces.
                
                JavaScript brings interactivity and functionality to your web pages. It allows you to manipulate HTML elements, handle events, make API calls, and create dynamic user experiences. Learning JavaScript empowers you to add behaviors and make your website more engaging."
                  as={'p'}
                />
              </VStack>
              <VStack alignItems={'flex-start'} gap={'12px'}>
                <MyText
                  title="Prerequisites for frontend development"
                  as={'heading'}
                />
                <MyText
                  title="Programming Languages: Proficiency in at least one backend programming language is essential. Common languages for backend development include:

                Python: Known for its simplicity and versatility, Python is widely used in backend development.
                JavaScript: Node.js allows you to use JavaScript on the server-side, making it a popular choice for full-stack development.
                Java: Renowned for its reliability and performance, Java is commonly used in enterprise-level applications.
                Ruby: Often associated with the Ruby on Rails framework, Ruby is known for its elegant syntax and developer-friendly environment.
                PHP: Widely used in web development, PHP powers many popular content management systems and frameworks."
                  as={'p'}
                />
              </VStack>
              <VStack alignItems={'flex-start'} gap={'12px'}>
                <MyText
                  title="The Basics of Frontend Development"
                  as={'heading'}
                />
                <MyText title={`slug:`} as={'title'} />
                <MyText
                  title="HTML (Hypertext Markup Language)
                HTML forms the foundation of every webpage. It defines the structure and content, enabling you to create headings, paragraphs, images, links, and more. Mastering HTML is essential for building well-structured web pages.

                CSS (Cascading Style Sheets)
                CSS is responsible for the visual styling of your web pages. With CSS, you can control the layout, colors, fonts, and overall design of your site. Understanding CSS selectors, properties, and how to apply them will help you create visually appealing and responsive interfaces.
                
                JavaScript brings interactivity and functionality to your web pages. It allows you to manipulate HTML elements, handle events, make API calls, and create dynamic user experiences. Learning JavaScript empowers you to add behaviors and make your website more engaging."
                  as={'p'}
                />
              </VStack>
              <VStack alignItems={'flex-start'} gap={'12px'}>
                <MyText
                  title="Prerequisites for frontend development"
                  as={'heading'}
                />
                <MyText
                  title="Programming Languages: Proficiency in at least one backend programming language is essential. Common languages for backend development include:

                Python: Known for its simplicity and versatility, Python is widely used in backend development.
                JavaScript: Node.js allows you to use JavaScript on the server-side, making it a popular choice for full-stack development.
                Java: Renowned for its reliability and performance, Java is commonly used in enterprise-level applications.
                Ruby: Often associated with the Ruby on Rails framework, Ruby is known for its elegant syntax and developer-friendly environment.
                PHP: Widely used in web development, PHP powers many popular content management systems and frameworks."
                  as={'p'}
                />
              </VStack>
              <VStack alignItems={'flex-start'} gap={'12px'}>
                <MyText
                  title="The Basics of Frontend Development"
                  as={'heading'}
                />
                <MyText title={`slug:`} as={'title'} />
                <MyText
                  title="HTML (Hypertext Markup Language)
                HTML forms the foundation of every webpage. It defines the structure and content, enabling you to create headings, paragraphs, images, links, and more. Mastering HTML is essential for building well-structured web pages.

                CSS (Cascading Style Sheets)
                CSS is responsible for the visual styling of your web pages. With CSS, you can control the layout, colors, fonts, and overall design of your site. Understanding CSS selectors, properties, and how to apply them will help you create visually appealing and responsive interfaces.
                
                JavaScript brings interactivity and functionality to your web pages. It allows you to manipulate HTML elements, handle events, make API calls, and create dynamic user experiences. Learning JavaScript empowers you to add behaviors and make your website more engaging."
                  as={'p'}
                />
              </VStack>
              <VStack alignItems={'flex-start'} gap={'12px'}>
                <MyText
                  title="Prerequisites for frontend development"
                  as={'heading'}
                />
                <MyText
                  title="Programming Languages: Proficiency in at least one backend programming language is essential. Common languages for backend development include:

                Python: Known for its simplicity and versatility, Python is widely used in backend development.
                JavaScript: Node.js allows you to use JavaScript on the server-side, making it a popular choice for full-stack development.
                Java: Renowned for its reliability and performance, Java is commonly used in enterprise-level applications.
                Ruby: Often associated with the Ruby on Rails framework, Ruby is known for its elegant syntax and developer-friendly environment.
                PHP: Widely used in web development, PHP powers many popular content management systems and frameworks."
                  as={'p'}
                />
              </VStack>
            </VStack>
          </VStack>

          {/* Right Blog Part */}
          <VStack
            w={{ base: 'full', sm: 'full', md: '30%' }}
            position={'relative'}
          >
            <VStack
              w={'100%'}
              justifyContent={'flex-start'}
              gap={'32px'}
              p={'12px'}
              position={'sticky'}
              top={'10%'}
            >
              <Center
                p={{ base: '6px', md: '12px' }}
                w={'full'}
                gap={'12px'}
                borderRadius={'6px'}
                border={'1px solid'}
                borderColor={'brand.lightgray'}
              >
                <Center
                  w={'full'}
                  flexDir={'column'}
                  p={'12px'}
                  bg={'brand.aliceblue'}
                  gap={'6px'}
                  borderRadius={'12px'}
                  cursor={'pointer'}
                  _hover={{ bg: 'brand.transprimary' }}
                >
                  <Center
                    w={'36px'}
                    h={'36px'}
                    bg={'brand.primary'}
                    borderRadius={'50px'}
                  >
                    <MyIcon
                      name="like"
                      height="24px"
                      color="brand.white"
                      width="24px"
                    />
                  </Center>
                  <MyText title="Like" as="span" />
                </Center>

                <Center
                  w={'full'}
                  flexDir={'column'}
                  bg={'brand.aliceblue'}
                  p={'12px'}
                  gap={'6px'}
                  borderRadius={'12px'}
                  cursor={'pointer'}
                  _hover={{ bg: 'brand.transprimary' }}
                >
                  <Center
                    w={'36px'}
                    h={'36px'}
                    bg={'brand.primary'}
                    borderRadius={'50px'}
                  >
                    <MyIcon
                      name="save"
                      height="24px"
                      color="brand.white"
                      width="24px"
                    />
                  </Center>
                  <MyText title="Save" as="span" />
                </Center>
              </Center>

              <Center
                w={'full'}
                bg={'brand.aliceblue'}
                border={'1px solid'}
                borderColor={'brand.lightgray'}
                borderRadius={'6px'}
                p={'12px'}
              >
                <VStack w={'full'} alignItems={'flex-start'}>
                  <Center w={'full'} gap={'6px'} justifyContent={'flex-start'}>
                    <HStack spacing={'4px'}>
                      <MyText
                        title="Subscribe"
                        as="title"
                        color="brand.primary"
                      />
                      <MyText title="to our Newsletter" as="span" />
                    </HStack>
                  </Center>
                  <HStack w={'full'}>
                    <MyInput
                      type="email"
                      placeholder="Enter your email"
                      leftElement={<MyIcon name="gmail" />}
                      pr="4px"
                      name='email'
                    />
                    <Center
                      bg={'brand.primary'}
                      borderRadius={'50px'}
                      cursor={'pointer'}
                      p={'4px'}
                    >
                      <MyIcon name="arrowRight" color="brand.white" />
                    </Center>
                  </HStack>
                </VStack>
              </Center>

              <VStack
                alignItems={'flex-start'}
                p={'12px'}
                w={'full'}
                border={'1px solid'}
                borderColor={'brand.lightgray'}
                borderRadius={'6px'}
                gap={'12px'}
              >
                <MyText title="Explore Categories" as="title" />

                <VStack
                  w={'full'}
                  flexDirection={{ base: 'column', sm: 'row', md: 'column' }}
                  alignItems={{
                    base: 'center',
                    sm: 'flex-start',
                    md: 'center',
                  }}
                  flexWrap={'wrap'}
                  spacing={0}
                  gap={'8px'}
                >
                  {[
                    'Development',
                    'Interview',
                    'Frontend',
                    'Backend',
                    'Tips & Tricks',
                  ].map((item, index) => {
                    return (
                      <>
                        <HStack
                          key={index}
                          w={{ base: '100%', sm: '45%', md: '100%' }}
                          p={'12px'}
                          border={'1px solid'}
                          borderColor={'brand.lightgray'}
                          borderRadius={'4px'}
                          cursor={'pointer'}
                          _hover={{ borderColor: 'brand.primary' }}
                        >
                          <Center
                            w="36px"
                            h="36px"
                            borderRadius={'50%'}
                            bg={'brand.primary'}
                          >
                            <MyIcon
                              name="instagram"
                              color="brand.white"
                              width="24px"
                              height="24px"
                            />
                          </Center>
                          <MyText as="span" title={item} fontWeight={500} />
                        </HStack>
                      </>
                    );
                  })}
                </VStack>
              </VStack>
            </VStack>
          </VStack>
        </Flex>
      </Layout>
    </>
  );
}
