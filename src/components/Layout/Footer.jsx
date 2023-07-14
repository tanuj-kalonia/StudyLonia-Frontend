import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

import { TiSocialLinkedin, TiSocialInstagram } from "react-icons/ti"
import { DiGithubBadge } from "react-icons/di"

import "./Header.css"

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <Box padding={"4"} bg={"blackAlpha.900"} minH={"10vh"}>
            <Stack direction={["column", "row"]} justifyContent={"space-between"}>
                <VStack alignItems={["center", "flex-start"]} widht={"100%"}>
                    <Heading color={"white"} children="All rights reserved" />
                    <Heading color={"blue.400"} fontFamily={"body"} size={"sm"} children={`@${year} Studylonia `} />
                </VStack>

                <HStack spacing={["2", "10"]} justifyContent={"center"}>
                    <a className='footer-icons' href="https://www.linkedin.com/in/tanuj-kalonia-070628216/" target="_black"><TiSocialLinkedin /></a>
                    <a className='footer-icons' href="https://instagram.com/tanuj_kalonia" target="_black"><TiSocialInstagram /></a>
                    <a className='footer-icons' href="https://github.com/Tanuj3662" target="_black"><DiGithubBadge /></a>

                </HStack>
            </Stack>
        </Box>
    )
}

export default Footer;