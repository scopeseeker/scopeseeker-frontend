'use client';
import {
  Layout,
  MainHeading,
  MyButton,
  MyIcon,
  MyInput,
  MyText,
} from '@/component';
import { requestCompanySchema } from '@/helpers/validationSchema';
import { PageHeader } from '@/section-components';
import {
  Box,
  Center,
  FormControl,
  FormErrorMessage,
  HStack,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';

export default function RequestPage() {
  return (
    <>
      <PageHeader
        title="Request A Company"
        subtitle="Add a company to our job listing platform and help expand opportunities for job seekers. Submit your request now and connect job seekers with the right companies."
        src="/assets/images/request.png"
        alt="requets image"
      />
      <Layout>
        <VStack gap={'82px'} my={'52px'}>
          {/* Steps Box */}
          <VStack alignItems={'flex-start'} gap={'42px'} w={'full'}>
            <MainHeading
              title="How we will process the request"
              subTitle="We will process the request in 3 simple steps"
              align={'left'}
            />
            <HStack
              flexDirection={{ base: 'column', md: 'row' }}
              alignItems={'flex-start'}
              gap={'30px'}
              w={'full'}
              flexWrap={'wrap'}
              spacing={0}
            >
              <RequestBox
                iconName="file"
                headName="Fill this Form"
                paraName="First give the detials by filiing these simple fields."
              />
              <RequestBox
                iconName="verifyOutline"
                headName="Verify Company Authenticity"
                paraName="We verify the company and insure that company is authentic."
              />
              <RequestBox
                iconName="checklist"
                headName="Added In List"
                paraName="Congratulations we added comapny into our list."
              />
            </HStack>
          </VStack>
          {/* Form Box */}
          <VStack w={'full'} alignItems={'flex-start'} gap={'32px'}>
            <MainHeading
              title="Fill this form to request a company"
              subTitle="Fill this form to request a company to be added to our job listing platform."
              align={'left'}
            />

            <Center w={'100%'} h={'full'} justifyContent={'flex-start'}>
              <Formik
                initialValues={{
                  fullName: '',
                  email: '',
                  number: '',
                  companyName: '',
                  message: '',
                }}
                validationSchema={requestCompanySchema}
                onSubmit={(values) => {
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                {({ isSubmitting, handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <VStack
                      w={{ base: '100%', md: '90%', lg: '50%' }}
                      alignItems={'flex-start'}
                      gap={'20px'}
                    >
                      <FormControl
                        isInvalid={!!errors.fullName && touched.fullName}
                      >
                        <Field
                          as={MyInput}
                          name="fullName"
                          type="text"
                          labelTitle="Full Name"
                          placeholder="Jon Doe"
                          leftElement={
                            <MyIcon name="profile" width="20px" height="20px" />
                          }
                          border={
                            errors.fullName ? '1.5px solid red' : 'gray.200'
                          }
                        />
                        <FormErrorMessage>{errors.fullName}</FormErrorMessage>
                      </FormControl>

                      <FormControl isInvalid={!!errors.email && touched.email}>
                        <Field
                          as={MyInput}
                          name="email"
                          type="email"
                          labelTitle="Email Address"
                          placeholder="abhi@example.gmail.com"
                          leftElement={
                            <MyIcon name="email" width="20px" height="20px" />
                          }
                          border={errors.email ? '1.5px solid red' : 'gray.200'}
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      </FormControl>

                      <FormControl
                        isInvalid={!!errors.number && touched.number}
                      >
                        <Field
                          as={MyInput}
                          name="number"
                          type="number"
                          labelTitle="Phone(Optional) "
                          placeholder="+91 XXXXXXXX20"
                          leftElement={
                            <MyIcon name="phone" width="20px" height="20px" />
                          }
                          border={
                            errors.number ? '1.5px solid red' : 'gray.200'
                          }
                        />
                        <FormErrorMessage>{errors.number}</FormErrorMessage>
                      </FormControl>

                      <FormControl
                        isInvalid={!!errors.companyName && touched.companyName}
                      >
                        <Field
                          as={MyInput}
                          type="text"
                          labelTitle="Company Name"
                          placeholder="ScopeSeeker"
                          name="companyName"
                          leftElement={
                            <MyIcon name="company" width="20px" height="20px" />
                          }
                          border={
                            errors.companyName ? '1.5px solid red' : 'gray.200'
                          }
                        />
                        <FormErrorMessage>
                          {errors.companyName}
                        </FormErrorMessage>
                      </FormControl>

                      <FormControl>
                        <VStack w={'full'} alignItems={'flex-start'}>
                          <MyText as="span" title="Tell me about Yourself" />
                          <Field
                            w={'100%'}
                            as={Textarea}
                            name={'message'}
                            fontSize={'sm'}
                            resize={'none'}
                            placeholder="Your Bio here..."
                          />
                        </VStack>
                      </FormControl>

                      <MyButton title="Submit" type={'submit'} />
                    </VStack>
                  </form>
                )}
              </Formik>
            </Center>
          </VStack>
        </VStack>
      </Layout>
    </>
  );
}

interface IRequestBox {
  iconName: string;
  headName: string;
  paraName: string;
}
const RequestBox = ({ iconName, headName, paraName }: IRequestBox) => {
  return (
    <Center
      w={{ base: '100%', sm: '80%', md: '500px', lg: '320px' }}
      h={'180px'}
      border={'1px solid'}
      borderColor={'brand.lightgray'}
      borderRadius={'14px'}
      overflow={'hidden'}
      bg={'brand.white'}
      px={'32px'}
      py={'32px'}
      flexDirection={'column'}
      alignItems={'flex-start'}
      justifyContent={'flex-start'}
      gap={'8px'}
    >
      <Box color={'brand.black'}>
        <MyIcon name={iconName} width="38" height="38" strokeWidth="1" />
      </Box>
      <MyText as="title" title={headName} />
      <MyText as="span" title={paraName} />
    </Center>
  );
};
