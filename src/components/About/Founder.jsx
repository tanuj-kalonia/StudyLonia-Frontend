import { Avatar, Heading, Stack, VStack, Text } from '@chakra-ui/react';
import React from 'react'

const Founder = () => {
    return (

        <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
            <VStack>
                <Avatar
                    src="https://avatars.githubusercontent.com/u/90057479?v=4"
                    boxSize={['40', '48']}
                />
                <Text children="Co-Founder" opacity={0.7} />
            </VStack>

            <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
                <Heading children="Tanuj Kalonia" size={['md', 'xl']} />
                <Text
                    textAlign={['center', 'left']}
                    children={`Hi, I am a full-stack developer and a Coder.
                                Our mission is to provide quality content at reasonable price.`}
                />
            </VStack>
        </Stack>
    );

}

export default Founder