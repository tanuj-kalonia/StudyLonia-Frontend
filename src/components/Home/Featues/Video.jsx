import { Heading, Stack, VStack, Text } from '@chakra-ui/react';
import React from 'react'

import introVideo from "../../../assests/videos/introVideo.mp4";
const Video = () => {
    return (
        <Stack className='video-wrapper'
            direction={["column", "row"]} height="100%" width={"100%"} justifyContent={"flex-start"} alignItems="center"
        >
            <video className='video-player'
                autoPlay
                controls
                controlsList='nodownload  noremoteplayback'
                disablePictureInPicture
                disableRemotePlayback
                src={introVideo}>
            </video>
            <VStack className="video-heading" justifyContent="center" alignItems="center"
            // spacing={['16', '18', '20', '56']} // 1unit = 4px
            >
                <Heading children="Crack Coding interviews with India's best platform" />
                <Text className='text' children="Get the subscription and access unlimited live and recorded courses from India's best educators" />

            </VStack>
        </Stack>
    )
}

export default Video