'use client'

import { Box, Button, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const about = () => {
    return (
        <Box bg={{
            sm: 'red',
            md: 'green',
            lg: 'blue',
        }}
            w={'full'} h={'3xl'}>
            <Heading color={'blue'}>About Us</Heading>
            <Text></Text>

            <Button size={'lg'}>
            <Link href={'/hello'}></Link>
            Hello
            </Button>
        </Box>
    )
}

export default about