// eslint-disable-next-line
import React from 'react'

import { Stack, VStack, Heading, Text, Button, Image, Box } from '@chakra-ui/react'
import { Link } from "react-router-dom"

import "./Home.css"
import Bannar from "./Banner";
import FeatureSection from "./Featues/Features"
import IntroVideo from "./Featues/Video"

import vg from "../../assests/images/bg.png";

const Home = () => {
    const features = [
        {
            heading: "6M+",
            text: "Happy Students"
        },
        {
            heading: "100+",
            text: "Video Lectures"
        },
        {
            heading: "250+",
            text: "Mock Tests"
        },
        {
            heading: "1000+",
            text: "Questions"
        }
    ]
    return (
        <section className='home'>
            <div className="home-section">
                <Stack // a container with displex flex and direction can be adjusted
                    // column for phone and row for large device
                    direction={["column", "row"]}
                    justifyContent={["center", "space-between"]}
                    alignItems="center"
                    spacing={['16', '18', '20', '55']} // 1unit = 4px
                    padding="8"
                    marginTop={["24", "4"]}
                >
                    <VStack width={"full"} alignItems={["center", "flex-end"]}>
                        <Heading className="heading">Learn from the Experts</Heading>
                        <Text className='text'>The most affordable learning platform</Text>
                        <Link to="/courses">
                            <Button size={'lg'} colorScheme="twitter">Explore Now</Button>
                        </Link>
                    </VStack>

                    <Image className='vector-graphics' boxSize={"md"} src={vg} objectFit="contain" />
                </Stack>
            </div>

            <Box
                className='banner'
                height="50%" width="100%"
                backgroundColor="#1DA1F2"
                color="white"
                display="flex" alignItems="center" justifyContent="center"
                flexDir="column"
                paddingTop={"4"}
            >
                <Heading textAlign="center" marginTop="5" children="India's Most Loved Educational Platform" />
                <Text textAlign="center" marginTop="2" children="With Studylonia, Begin your journey to success." />

                <Stack padding={"4"} direction={["column", "row"]} alignItems={["center", "flex-end"]}>
                    {
                        features.map((feature, index) => {
                            return (
                                <Bannar
                                    heading={feature.heading}
                                    text={feature.text}
                                />
                            )
                        })
                    }
                </Stack>
            </Box>



            {/* section for features */}

            <Box>
                <FeatureSection />
            </Box>

            {/* // section for video */}
            <Box className="video-section"
                display={"flex"} justifyContent="center" alignItems={"center"}
            >
                <IntroVideo />
            </Box>
        </section>
    )
}

export default Home
