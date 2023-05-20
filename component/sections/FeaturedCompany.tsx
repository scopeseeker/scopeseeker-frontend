import { Center } from '@chakra-ui/react';
import { Layout } from '../layout';
import { MainHeading } from '../main-heading';
import { MyCompanyCard } from '../cards';
const CompnayCatergories = () => {
  return (
    <Layout>
      <Center flexDirection={'column'} w={'full'} gap={'32px'}>
        <MainHeading
          title={'Featured Companies'}
          subTitle={
            'Discover these exceptional companies actively searching for top talent to join their dynamic teams. '
          }
        />
        <Center
          overflow={'auto'}
          w={'full'}
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
          gap={'30px'}
          pt={'40px'}
        >
          <MyCompanyCard
                  companyIconLogo={'/assets/images/company-logo/linkedin.png'}
                  role={'Frontend Developer'}
                  companyName={'Tata Consultancy Service'}
                  location={'Bhopal, Madhaya Pradesh'}
                  jobType={[
                    'Full Time',
                    'Part Time',
                    'Internship',
                    'Startup',
                    'Indian MNC',
                  ]}
                  companyDesc="UX designers measure and optimize applications to improve ease of use
      (usability), and create the best user experience by exploring many
     diffrent approaches to solve end's-user problems"
                />
          <>
            {[1, 1].map((key) => {
              return (
                <MyCompanyCard
                  key={key}
                  companyIconLogo={'/assets/images/company-logo/bookmyshow.png'}
                  role={'Frontend Developer'}
                  companyName={'Tata Consultancy Service'}
                  location={'Bhopal, Madhaya Pradesh'}
                  jobType={[
                    'Full Time',
                    'Part Time',
                    'Internship',
                    'Startup',
                    'Indian MNC',
                  ]}
                  companyDesc="UX designers measure and optimize applications to improve ease of use
      (usability), and create the best user experience by exploring many
     diffrent approaches to solve end's-user problems"
                  isNamedLogo={true}
                />
              );
            })}
          </>
          <MyCompanyCard
                  companyIconLogo={'/assets/images/company-logo/github.png'}
                  role={'Frontend Developer'}
                  companyName={'Tata Consultancy Service'}
                  location={'Bhopal, Madhaya Pradesh'}
                  jobType={[
                    'Full Time',
                    'Part Time',
                    'Internship',
                    'Startup',
                    'Indian MNC',
                  ]}
                  companyDesc="UX designers measure and optimize applications to improve ease of use
      (usability), and create the best user experience by exploring many
     diffrent approaches to solve end's-user problems"
                />
        </Center>
      </Center>
    </Layout>
  );
};

export default CompnayCatergories;
