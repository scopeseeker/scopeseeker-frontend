import {
  Layout,
  MyButton,
  MyDivider,
  MyIcon,
  MyImage,
  MyInput,
  MyText,
} from '@/component';
import { Box, Center, HStack, VStack } from '@chakra-ui/react';
import Head from 'next/head';

export default function Profile() {
  return (
    <>
      <Head>
        <title>My Profile| Scope Seeker</title>
      </Head>
      <Layout>
        {/* Main VStack Box */}
        <VStack gap={'34px'} px={'32px'}>
          {/* Profile and Detail section */}
          <Center
            bg={'brand.aliceblue'}
            border={'1px solid'}
            borderColor={'brand.darkgray'}
            borderRadius={'12px'}
            justifyContent={'center'}
            py={'18px'}
            px={'32px'}
            gap={'32px'}
            w={'full'}
          >
            <Center flexDirection={'column'} gap={'12px'} h={'full'}>
              <Center
                w={'180px'}
                h={'180px'}
                bg={'brand.white'}
                borderRadius={'50%'}
                border={'2px solid'}
                borderColor={'brand.primary'}
                overflow={'hidden'}
              >
                <MyImage
                  src={'/assets/images/p12.jpg'}
                  alt="profile"
                  width={180}
                  height={180}
                />
              </Center>
              <MyButton title="Edit Picture" />
            </Center>
            {/* mid section name and details */}
            <Center h={'full'}>
              <VStack
                w={'100%'}
                h={'100%'}
                p={'20px'}
                alignItems={'flex-start'}
              >
                <MyText title="Lokesh Dhakar" as={'heading'} />
                <VStack py={'8px'}>
                  <HStack w={'full'} h={'full'} alignItems={'flex-start'}>
                    <HStack w={'200px'}>
                      <MyIcon name={'location'} />
                      <MyText title="Bhopal" as={'span'} />
                    </HStack>
                    <HStack w={'200px'}>
                      <MyIcon name={'phone'} />
                      <MyText title=" +91 9999999999" as={'span'} />
                      <MyIcon name={'verifyOutline'} color="green" />
                    </HStack>
                  </HStack>

                  <HStack w={'full'} h={'full'} alignItems={'flex-start'}>
                    <HStack w={'200px'}>
                      <MyIcon name={'case'} />
                      <MyText title="Freshers" as={'span'} />
                    </HStack>
                    <HStack w={'200px'}>
                      <MyIcon name={'gmail'} />
                      <MyText title="exapmle@gmail.com" as={'span'} />
                      <MyIcon name={'verifyOutline'} color="green" />
                    </HStack>
                  </HStack>
                </VStack>
                {/* Profile bar */}
                <VStack alignItems={'flex-start'}>
                  <MyText title="Profile Complete" as={'title'} />
                  <HStack>
                    <Box
                      w={'400px'}
                      h={'10px'}
                      borderRadius={'20px'}
                      border={'1px solid '}
                      borderColor={'brand.lightgray'}
                      overflow={'hidden'}
                    >
                      <Box
                        w={'200px'}
                        h={'full'}
                        bg={'brand.primary'}
                        borderRadius={'20px'}
                      ></Box>
                    </Box>
                    <MyText title="40%" as={'span'} />
                  </HStack>
                </VStack>
              </VStack>
            </Center>
            {/* left section */}

            <Center h={'full'}>
              <Center
                w={'220px'}
                h={'140px'}
                bg={'brand.primary'}
                borderRadius={'12px'}
                px={'32px'}
              >
                <MyText
                  title="14 Pending Actions"
                  as={'heading'}
                  textAlign={'center'}
                  color="brand.white"
                />
              </Center>
            </Center>
          </Center>
          {/* Quick section */}
          <Center
            borderRadius={'50px'}
            bg={'brand.primary'}
            color={'brand.white'}
            justifyContent={'space-between'}
            px={'32px'}
            py={'12px'}
            gap={'32px'}
          >
            <MyText
              cursor={'pointer'}
              as="span"
              title="User Details"
              color="currentColor"
            />
            <VStack
              h={'20px'}
              w={'0px'}
              bg={'brand.white'}
              borderLeft={'1px solid'}
              spacing={0}
              borderColor={'brand.white'}
            ></VStack>
            <MyText
              cursor={'pointer'}
              as="span"
              title="Resume"
              color="currentColor"
            />
            <VStack
              h={'20px'}
              w={'0px'}
              bg={'brand.white'}
              borderLeft={'1px solid'}
              spacing={0}
              borderColor={'brand.white'}
            ></VStack>
            <MyText
              cursor={'pointer'}
              as="span"
              title="Education"
              color="currentColor"
            />
            <VStack
              h={'20px'}
              w={'0px'}
              bg={'brand.white'}
              borderLeft={'1px solid'}
              spacing={0}
              borderColor={'brand.white'}
            ></VStack>
            <MyText
              cursor={'pointer'}
              as="span"
              title="Work Experience"
              color="currentColor"
            />
            <VStack
              h={'20px'}
              w={'0px'}
              bg={'brand.white'}
              borderLeft={'1px solid'}
              spacing={0}
              borderColor={'brand.white'}
            ></VStack>
            <MyText
              cursor={'pointer'}
              as="span"
              title="Social Links"
              color="currentColor"
            />
            <VStack
              h={'20px'}
              w={'0px'}
              bg={'brand.white'}
              borderLeft={'1px solid'}
              spacing={0}
              borderColor={'brand.white'}
            ></VStack>
            <MyText
              cursor={'pointer'}
              as="span"
              title="User Details"
              color="currentColor"
            />
          </Center>

          

          <VStack gap={'64px'}>

          {/* personal detail */}
          <HStack w={'full'} gap={'10px'}>
            <VStack
              w={'50%'}
              alignItems={'flex-start'}
              gap={'32px'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              p={'20px'}
              borderRadius={'8px'}
            >
              <MyText title="Personal Detals" as={'heading'} />
              <VStack w={'full'} alignItems={'flex-start'}>
                <HStack justifyContent={'space-between'} gap={'42px'}>
                  <VStack spacing={0} alignItems={'flex-start'} w={'120px'}>
                    <MyText title="Date Of Birth" as={'p'} />
                    <MyText title="07/08/2003" as={'span'} />
                  </VStack>
                  <VStack spacing={0} alignItems={'flex-start'} w={'120px'}>
                    <MyText title="Location" as={'p'} />
                    <MyText title="Bhopal" as={'span'} />
                  </VStack>
                </HStack>
                <HStack justifyContent={'space-between'} gap={'42px'}>
                  <VStack spacing={0} alignItems={'flex-start'} w={'120px'}>
                    <MyText title="Location" as={'p'} />
                    <MyText title="Bhopal" as={'span'} />
                  </VStack>
                  <VStack
                    spacing={0}
                    alignItems={'flex-start'}
                    w={'120px'}
                  >
                    <MyText title="State" as={'p'} />
                    <MyText title="MP" as={'span'} />
                  </VStack>
                </HStack>
              </VStack>
            </VStack>
            <VStack
              w={'50%'}
              alignItems={'flex-start'}
              bg={'brand.aliceblue'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              p={'20px'}
              borderRadius={'8px'}
            >
               <MyText title="Recent Activity" as={'heading'} />  
               <MyText title='You submitted the task' as={'small'}/>
               <MyText title='You applied in flipkart' as={'small'}/>
               <MyText title='Recently view company' as={'small'}/>
               <MyText title='Checking the information of Amazon' as={'small'}/>
               <MyText title='Last read article on Blockchain' as={'small'}/>
               

            </VStack>
          </HStack>

            {/* Resume section */}
            <VStack
              w={'full'}
              gap={'10px'}
              spacing={0}
              alignItems={'flex-start'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              p={'20px'}
              borderRadius={'8px'}
            >
              <MyText title="Resume" as={'heading'} />
              <HStack w={'full'} h={'40px'} justifyContent={'space-between'}>
                <Center
                  border={'1px solid'}
                  borderColor={'brand.darkgray'}
                  justifyContent={'flex-start'}
                  p={'8px'}
                  borderRadius={'8px'}
                >
                  <MyText
                    title="Lokesh.pdf Updated on (june 06 2023)"
                    as={'small'}
                  />
                </Center>
                <HStack>
                  <Center
                    w={'30px'}
                    h={'30px'}
                    borderRadius={'50%'}
                    bg={'brand.aliceblue'}
                  >
                    <MyIcon name={'delete'} />
                  </Center>
                  <Center
                    h={'30px'}
                    w={'30px'}
                    borderRadius={'50%'}
                    bg={'brand.aliceblue'}
                  >
                    <MyIcon name={'edit'} />
                  </Center>
                </HStack>
              </HStack>

              <Center h={'300px'} w={'full'}>
                <Center
                  h={'220px'}
                  w={'80%'}
                  border={'2px dashed'}
                  borderColor={'brand.darkgray'}
                  bg={'brand.aliceblue'}
                  flexDir={'column'}
                  gap={'8px'}
                >
                  <MyIcon name={'upload'} />
                  <MyButton title="Upload Resume" />
                  <MyText
                    title="Supported formate .pdf .doc .docx "
                    as={'span'}
                    color="brand.darkgray"
                  />
                </Center>
              </Center>
            </VStack>

            {/* Skills section */}
            <VStack
              alignItems={'flex-start'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              p={'20px'}
              borderRadius={'8px'}
              w={'full'}
              gap={'10px'}
            >
              <MyText as="heading" title="Skills" />

              <HStack
                flexWrap={'wrap'}
                gap={'10px'}
                spacing={0}
                maxW={{ base: '100%', md: '80%' }}
              >
                {[
                  'JavaScript',
                  'React.js',
                  'Angular.js',
                  'Node.js',
                  'MongdoDB',
                  'Express.js',
                  'Node.js',
                  'MongdoDB',
                  'Express.js',
                  'Node.js',
                  'MongdoDB',
                  'Express.js',
                ].map((item, key) => {
                  return (
                    <Center
                      key={key}
                      borderWidth={'1px'}
                      borderColor={'brand.darkgray'}
                      px={'10px'}
                      py={'3px'}
                      borderRadius={'6px'}
                      bg={'brand.offwhite'}
                    >
                      <MyText as="small" title={item} color="brand.darkgray" />
                    </Center>
                  );
                })}
              </HStack>
            </VStack>
            {/* summary section */}
            <VStack
              w={'full'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              p={'20px'}
              borderRadius={'8px'}
              alignItems={'flex-start'}
              bg={'brand.aliceblue'}
            >
              <MyText title="Summary" as={'heading'} />
              <Box>
                <MyText
                  title="The IT professional is highly skilled in software development, network administration, system maintenance, and cybersecurity. Proficient in programming languages like Java and Python, they have developed web applications using frameworks such as Django and Ruby on Rails. Their expertise extends to configuring and managing enterprise-level networks, implementing robust security measures. With a proven track record of meeting project deadlines, they possess strong problem-solving and communication skills. Committed to staying updated with the latest technologies, this proactive IT professional brings a comprehensive skill set, adaptability, and a proactive approach to contribute effectively to any IT team or project."
                  as={'small'}
                />
              </Box>
            </VStack>

            {/* Education section */}
            <VStack
              w={'full'}
              spacing={0}
              gap={0}
              alignItems={'flex-start'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              p={'20px'}
              borderRadius={'8px'}
            >
              <MyText title="Education" as={'heading'} />
              <VStack
                w={'full'}
                p={'10px'}
                justifyContent={'flex-start'}
                alignItems={'flex-start'}
                spacing={0}
                gap={'6px'}
              >
                <VStack w={'full'} alignItems={'flex-start'} spacing={0}>
                  <HStack w={'full'} justifyContent={'space-between'}>
                    <MyText title="B-tech computer Science" as={'p'} />
                    <MyText title="97%" as={'p'} />
                  </HStack>

                  <MyText
                    title="Sagar Institute of research and technology, Bhopal"
                    as={'span'}
                  />
                  <MyText title="2020-2024| full time" as={'small'} />
                </VStack>

                <MyDivider />

                <VStack w={'full'} alignItems={'flex-start'} spacing={0}>
                  <HStack w={'full'} justifyContent={'space-between'}>
                    <MyText title="Class 12th" as={'p'} />
                    <MyText title="99%" as={'p'} />
                  </HStack>
                  <MyText title="2022" as={'span'} />
                  <MyText title="School Name" as={'small'} />
                </VStack>
                <MyDivider />
                <VStack w={'full'} alignItems={'flex-start'} spacing={0}>
                  <HStack w={'full'} justifyContent={'space-between'}>
                    <MyText title="Class 10th" as={'p'} />
                    <MyText title="97%" as={'p'} />
                  </HStack>
                  <MyText title="2022" as={'span'} />
                  <MyText title="School Name" as={'small'} />
                </VStack>
              </VStack>
            </VStack>
            {/* work */}
            <VStack
              w={'full'}
              spacing={0}
              bg={'brand.aliceblue'}
              alignItems={'flex-start'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              p={'20px'}
              borderRadius={'8px'}
            >
              <MyText title="Work Experience" as={'heading'} />
              <VStack
                p={'10px'}
                w={'full'}
                spacing={0}
                alignItems={'flex-start'}
              >
                <MyText title="FullStack Developer" as={'p'} />
                <HStack w={'full'} justifyContent={'space-between'}>
                  <MyText title="Company Name" as={'span'} />
                  <MyText title="Internship Paid" as={'span'} />
                </HStack>
                <MyText title="2024" as={'small'} />
              </VStack>
            </VStack>
            {/* social */}
            <VStack
              w={'full'}
              alignItems={'flex-start'}
              boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
              p={'20px'}
              borderRadius={'8px'}
            >
              <MyText title="Social Links" as={'heading'} />

              <HStack>
                <MyInput
                  type="text"
                  labelTitle="GitHub"
                  placeholder="GitHub Link"
                  leftElement={<MyIcon name="github" />}
                />
                <MyInput
                  type="text"
                  labelTitle="LinkedIn"
                  placeholder="LinkedIn Link"
                  leftElement={<MyIcon name="linkedin" />}
                />
              </HStack>
              <HStack>
                <MyInput
                  type="text"
                  labelTitle="Instagram"
                  placeholder="Instagram Link"
                  leftElement={<MyIcon name="instagram" />}
                />
                <MyInput
                  type="text"
                  labelTitle="Dribble"
                  placeholder="Dribble Link"
                  leftElement={<MyIcon name="dribble" />}
                />
              </HStack>
              <HStack>
                <MyInput
                  type="text"
                  labelTitle="Behance"
                  placeholder="Behance Link"
                  leftElement={<MyIcon name="behance" />}
                />
                <MyInput
                  type="text"
                  labelTitle="Figma"
                  placeholder="Figma Link"
                  leftElement={<MyIcon name="figma" />}
                />
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </Layout>
    </>
  );
}
