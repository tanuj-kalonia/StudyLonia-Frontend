import React, { useState } from 'react'
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';

const UpdateProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();
        dispatch(updateProfile(name, email));
        dispatch(loadUser());
        navigate('/profile');
    };
    const { loading } = useSelector(state => state.profile);
    return (
        <Container py="16" minH={'90vh'}>
            <form onSubmit={submitHandler}>
                <Heading
                    textTransform={'uppercase'}
                    children="Update Profile"
                    my="16"
                    textAlign={['center', 'left']}
                />

                <VStack spacing={'8'}>
                    <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Name"
                        type={'text'}
                        focusBorderColor="blue.500"
                    />{' '}
                    <Input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        type={'email'}
                        focusBorderColor="blue.500"
                    />
                    <Button
                        isLoading={loading}
                        w="full"
                        colorScheme={'twitter'}
                        type="submit"
                    >
                        Update
                    </Button>
                </VStack>
            </form>
        </Container>
    )
}

export default UpdateProfile