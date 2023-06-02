import { Center, Grid, GridItem } from '@chakra-ui/react';
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
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={{ base: 6, lg: 4, xl: 6 }}
            mx={'auto'}
            pt={'25px'}
            width={'100%'}
            overflow={'scroll'}
          >
            <>
              {companyCardFields.map((item, key) => {
                return (
                  <GridItem key={key}>
                    <MyCompanyCard
                      companyDesc={item.companyDescription}
                      companyName={item.companyName}
                      tags={item.tags}
                      rating={item.rating}
                      companyLogo={item.companyLogo}
                      fullDetailLink={item.fullDetailsLink}
                      viewJobs={item.viewJobsLink}
                      key={key}
                    />
                  </GridItem>
                );
              })}
            </>
          </Grid>
        </Center>
      </Center>
    </Layout>
  );
};

export default CompnayCatergories;
