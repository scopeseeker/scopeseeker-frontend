import Layout from '@/component/layout/Layout';
import { Box, Text } from '@chakra-ui/react';

export default function companies() {
  return (
    <Layout>
      <div>
        <Text whiteSpace={'pre-line'}></Text>
        companies
      </div>

<Box color={'red'}>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
        width={'24px'}
        height={'24px'}
      >
        <path
          d="M320 320H192M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
          fill="none"
          stroke="currentColor"
          stroke-linejoin="round"
          stroke-width="24"
        />
      </svg>
</Box>

    </Layout>
  );
}
