import { Center } from '@chakra-ui/react';
import { MyCompanyCard } from '../cards';
import { Layout } from '../layout';
import { MainHeading } from '../main-heading';
import { companyCardFields } from '@/constant/constantFields';
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
          <>
            {companyCardFields.map((item, key) => {
              return (
                <MyCompanyCard
                  companyDesc={item.companyDescription}
                  companyName={item.companyName}
                  tags={item.tags}
                  rating={item.rating}
                  companyLogo={item.companyLogo}
                  fullDetailLink={item.fullDetailsLink}
                  viewJobs={item.viewJobsLink}
                />
              );
            })}
          </>
        </Center>
      </Center>
    </Layout>
  );
};

export default CompnayCatergories;
