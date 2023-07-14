import { Button, Container, Heading, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
    return (
        <Container h="83vh">
            <VStack justifyContent={'center'} h="full" spacing={'4'}>
                <RiErrorWarningFill size={'5rem'} />
                <Heading textTransform={'uppercase'}>Payment Failed</Heading>
                <Text>Please try again. This happens when there is high traffic on the site. Don't worry trying again will fix everything</Text>
                <Link to="/subscribe">
                    <Button colorScheme={"twitter"}>Try Again</Button>
                </Link>
            </VStack>
        </Container>
    );
};

export default PaymentFail;
