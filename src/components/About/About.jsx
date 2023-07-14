import {
    Avatar,
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import Founder from "./Founder";
import VideoPlayer from "./VideoPlayer";
import TandC from './TandC';


const About = () => {
    return (
        <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
            <Heading children="About Us" textAlign={['center', 'left']} />
            <Founder />
            <Stack m="8" direction={['column', 'row']} alignItems="center">
                <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
                    We are a video streaming platform with some premium courses available
                    only for premium users.
                </Text>

                <Link to="/subscribe">
                    <Button variant={'ghost'} colorScheme="twitter">
                        Checkout Our Plan
                    </Button>
                </Link>
            </Stack>

            <VideoPlayer />

            <TandC />

            <HStack my="4" p={'4'}>
                <RiSecurePaymentFill />
                <Heading
                    size={'xs'}
                    fontFamily="sans-serif"
                    textTransform={'uppercase'}
                    children={'Payment is secured by Razorpay'}
                />
            </HStack>
        </Container>
    );
};

export default About;
