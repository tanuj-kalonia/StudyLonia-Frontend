import React, { useState, useEffect } from 'react'
import {
    Avatar,
    Button,
    Container,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';
// import { FaSubscript } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import ChangePhotoBox from './ChangePhotoBox';

import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {
    removeFromPlaylist,
    updateProfilePicture,
} from '../../redux/actions/profile';
import { cancelSubscription, loadUser } from '../../redux/actions/user';


const Profile = ({ user }) => {
    const dispatch = useDispatch();
    const { loading, message, error } = useSelector(state => state.profile);
    const {
        loading: subscriptionLoading,
        message: subscriptionMessage,
        error: subscriptionError,
    } = useSelector(state => state.subscription);

    const { isOpen, onClose, onOpen } = useDisclosure();
    // const [image, setImage] = useState("");
    // const [imagePrev, setImagePrev] = useState('');

    const removeFromPlaylistHandler = (id) => {
        dispatch(removeFromPlaylist(id));
        dispatch(loadUser());
    }

    const changeImageSubmitHandler = async (e, image) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('file', image);
        dispatch(updateProfilePicture(myForm));
        dispatch(loadUser());
    }
    const cancelSubscriptionHandler = () => {
        dispatch(cancelSubscription());
    };
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
        if (subscriptionMessage) {
            toast.success(subscriptionMessage);
            dispatch({ type: 'clearMessage' });
            dispatch(loadUser());
        }

        if (subscriptionError) {
            toast.error(subscriptionError);
            dispatch({ type: 'clearError' });
        }
    }, [dispatch, error, message, subscriptionError, subscriptionMessage]);
    return (
        <Container minH={'95vh'} maxW="container.lg" py="8">
            <Heading children="Profile" m="8" textTransform={'uppercase'} />
            <Stack
                justifyContent={'flex-start'}
                direction={['column', 'row']}
                alignItems={'center'}
                spacing={['8', '16']}
                padding="8"
            >
                <VStack>
                    <Avatar boxSize={'48'} src={user.avatar.url} />
                    <Button onClick={onOpen} colorScheme={'twitter'} variant="ghost" >
                        Change Photo
                    </Button>
                </VStack>

                <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
                    <HStack>
                        <Text children="Name : " fontWeight={'bold'} />
                        <Text children={user.name} />
                    </HStack>{' '}
                    <HStack>
                        <Text children="Email : " fontWeight={'bold'} />
                        <Text children={user.email} />
                    </HStack>
                    <HStack>
                        <Text children="CreatedAt : " fontWeight={'bold'} />
                        <Text children={user.createdAt.split('T')[0]} />
                    </HStack>
                    {user.role !== 'admin' && (
                        <HStack>
                            <Text children="Subscription : " fontWeight={'bold'} />
                            {user.subscription && user.subscription.status === 'active' ? (
                                <Button
                                    isLoading={subscriptionLoading}
                                    onClick={cancelSubscriptionHandler}
                                    colorScheme={'twitter'}
                                >
                                    Cancel Subscription
                                </Button>
                            ) : (
                                <Link to="/subscribe">
                                    <Button colorScheme={'twitter'}>Subscribe</Button>
                                </Link>
                            )}
                        </HStack>
                    )}

                    <Stack direction={['column', 'row']} alignItems={'center'}>
                        <Link to="/updateprofile">
                            <Button>Update Profile</Button>
                        </Link>

                        <Link to="/changepassword">
                            <Button>Change Password</Button>
                        </Link>
                    </Stack>


                </VStack>
            </Stack>

            <Heading children="Playlist" size={'md'} my="8" />


            {user.playlist.length > 0 && (
                <Stack
                    direction={['column', 'row']}
                    alignItems={'center'}
                    flexWrap="wrap"
                    p="4"
                >
                    {user.playlist.map((element, index) => (
                        <VStack w="48" m="2" key={element.course}>
                            <Image
                                boxSize={'full'}
                                objectFit="contain"
                                src={element.poster}
                            />

                            <HStack>
                                <Link to={`/course/${element.course}`}>
                                    <Button variant={'ghost'} colorScheme="twitter">
                                        Watch Now
                                    </Button>
                                </Link>

                                <Button
                                    isLoading={loading}
                                    onClick={() => removeFromPlaylistHandler(element.course)}
                                >
                                    <RiDeleteBin7Fill />
                                </Button>
                            </HStack>
                        </VStack>
                    ))}
                </Stack>
            )}

            <ChangePhotoBox
                isOpen={isOpen}
                onClose={onClose}
                // image={image} setImage={setImage}
                // imagePrev={imagePrev} setImagePrev={setImagePrev}
                changeImageSubmitHandler={changeImageSubmitHandler}
                loading={loading}
            />
        </Container>

    )
}

export default Profile;