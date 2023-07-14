import React from 'react'

import { VStack, Heading, Text } from '@chakra-ui/react'

const Banner = ({ heading, text }) => {
    return (
        <>
            <VStack padding="8"
                justifyContent="center"
                alignItems="center"
            >
                <Heading children={heading} size="2xl" />
                <Text children={text} className='banner-heading' />
            </VStack>
        </>
    )
}

export default Banner;