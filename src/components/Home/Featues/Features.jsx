import { VStack, Text, Stack, Image, Heading, HStack, Box } from '@chakra-ui/react'
import React from 'react'

import pathshala from "../../../assests/images/pathshala.svg"
import "./Features.css"

import Star from "../../../assests/images/star.svg"
import Interection from "../../../assests/images/interection.svg"
import Class from "../../../assests/images/class.svg"
import Personalized from "../../../assests/images/personalized.svg"

const Features = () => {
    const features = [
        {
            src: Star,
            text: "Live-ScheduleLive Scheduled Lectures by best faculties of India"
        },
        {
            src: Interection,
            text: "Interactive classes for better understandin"
        },
        {
            src: Class,
            text: "classes with online setting"
        },
        {
            src: Personalized,
            text: "Personalized attention for all students"
        },
    ]
    return (
        <VStack
            display={"flex"} flexDirection={"column"} alignItems="flex-start"
            className='features-section' >

            <Box paddingLeft={["6", "16"]} marginTop="8">
                <Text
                    bgGradient='linear(to-l, #7928CA, #FF0080)'
                    bgClip='text' fontSize='4xl' fontWeight='extrabold'
                    children="Studylonia : A Blended Solution"
                />
                <Text className='heading-para' size={["1xl", "2xl"]} children="Pathshala is an engaging blend of traditional and online learning for giving students best e-learning platform in this new normal." />
            </Box>

            <Stack paddingLeft={["4", "16"]} width={"100%"} direction={["column", "row"]} >

                <VStack className='b-and-f' width={["100%", "55%"]} alignItems="flex-start" justifyContent={"center"} marginTop="10" >
                    <Heading className='benifits-heading' children="Benifits and Features" marginBottom="4" />
                    <Box display={"flex"} flexDirection="column" alignItems={"flex-start"}
                        className='feature-points' width="100%">
                        {
                            features.map((feature, index) => {
                                return (
                                    <HStack key={index} width="90%" marginTop={"4"}>
                                        <Image src={feature.src} />
                                        <Text className='features-list' children={feature.text} />
                                    </HStack>
                                )
                            })
                        }
                    </Box>
                </VStack>
                <Box padding={"8"} display="flex" alignItems="center" justifyContent="center" >
                    <Image className='image' src={pathshala} objectFit="cover" margin={"10"} />
                </Box>
            </Stack>
        </VStack>
    )
}

export default Features;