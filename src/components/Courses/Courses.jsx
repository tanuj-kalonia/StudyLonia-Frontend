import React, { useState, useEffect } from 'react'
import { Button, Container, Heading, HStack, Input, Text, Stack, VStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "./Courses.css";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/course';
import toast from 'react-hot-toast';
import { addToPlaylist } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';


const Course = ({ description, title, views, imageSrc, id, creator, lectureCount, addToPlayListHandle, loading }) => {
    // console.log(title, typeof addToPlayListHandle);
    return (
        <VStack className="course" alignItems={["center", "flex-start"]} >
            <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
            <Heading
                textAlign={["center", "left"]}
                size={"sm"}
                maxW={"200px"}
                fontFamily="Sans-serif"
                noOfLines={3}
                children={title}
            />
            <Text children={description} noOfLines={2} />
            <HStack>
                <Text children={creator} fontFamily={"body"} textTransform="uppercase" />
                <Text children={creator} fontWeight={"bold"} textTransform="uppercase" />
            </HStack>

            <Heading textAlign={"center"} size={"xs"} textTransform="uppercase" >
                {`Lectures : ${lectureCount}`}
            </Heading>
            {lectureCount > 0 && <Heading
                size="xs"
                children={`Views - ${views}`}
                textTransform="uppercase"
            />}
            <Stack direction={["column", "row"]} alignItems="center">
                <Link to={`/course/${id}`}>
                    <Button colorScheme={"twitter"}>Watch Now</Button>
                </Link>
                <Button
                    isLoading={loading}
                    colorScheme={"twitter"}
                    variant="outline"
                    onClick={() => addToPlayListHandle(id)}
                >Add to Playlist</Button>
            </Stack>
        </VStack>
    )
}

const Courses = () => {
    const [keyword, setKeyword] = useState("")
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();

    function addToPlaylistHandler(cousreId) {
        console.log("added to playlist", cousreId);
        dispatch(addToPlaylist(cousreId));
        dispatch(loadUser());
    };
    console.log(typeof addToPlaylistHandler);
    const categories = [
        "Web Development", "AI", "DSA", "App Development", "Data Science", "Game Development"
    ]
    const { loading, courses, error, message } = useSelector(
        state => state.course
    );
    useEffect(() => {
        dispatch(getAllCourses(category, keyword));

        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
    }, [category, keyword, dispatch, error, message]);
    return (
        <Container minH={"95vh"} minW={"container.lg"} paddingY={"8"}>
            <Heading children="All courses" />
            <Input
                marginTop={"8"}
                type={"text"}
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                placeholder="Search for a course"
                focusBorderColor='blue.600'
            />

            <HStack
                overflowX={"auto"}
                paddingY="8"
                css={{
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                }}>
                {
                    categories.map((item, index) => (
                        <Button onClick={() => setCategory(item)} minW={"60"} key={index}>
                            <Text children={item} />
                        </Button>
                    ))
                }
            </HStack>

            <Stack
                direction={["column", "row"]}
                flexWrap={"wrap"}
                justifyContent={["flex-start", "space-evenly"]}
                alignItems={["center", "flex-start"]}
            >
                {courses.length > 0 ? (
                    courses?.map(item => (
                        <Course
                            key={item._id}
                            title={item.title}
                            description={item.description}
                            views={item.views}
                            imageSrc={item.poster.url}
                            id={item._id}
                            creator={item.createdBy}
                            lectureCount={item.numOfVideos}
                            addToPlaylistHandle={addToPlaylistHandler}
                            loading={loading}
                        />
                    ))
                ) : (
                    <Heading mt="4" children="Courses Not Found" />
                )}
            </Stack>
        </Container>
    )
}

export default Courses  