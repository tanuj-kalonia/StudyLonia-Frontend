import { Box } from '@chakra-ui/react'
import React from 'react'
import introVideo from "../../assests/videos/introVideo.mp4"

const VideoPlayer = () => {
    return (
        <Box>
            <video
                autoPlay
                loop
                muted
                controls
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                disableRemotePlayback
                src={introVideo}
            ></video>
        </Box>
    )
}

export default VideoPlayer  