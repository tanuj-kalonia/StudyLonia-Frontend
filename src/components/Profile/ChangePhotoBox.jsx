import {
    Avatar,
    Button,
    Container,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    // useDisclosure,
    VStack
} from '@chakra-ui/react'

import React, { useState } from 'react'
import { fileUploadCss } from '../Auth/Register'

const ChangePhotoBox = ({ isOpen, onClose, changeImageSubmitHandler, loading }) => {
    const [image, setImage] = useState("");
    const [imagePrev, setImagePrev] = useState('');

    const changeImage = e => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        };
    };
    const closeHandler = () => {
        onClose();
        setImagePrev('');
        setImage('');
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay backdropFilter={'blur(10px)'} />
            <ModalContent>
                <ModalHeader>Change Photo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Container>
                        <form onSubmit={e => changeImageSubmitHandler(e, image)}>
                            <VStack spacing={'8'}>
                                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}

                                <Input
                                    type={'file'}
                                    css={{ '&::file-selector-button': fileUploadCss }}
                                    onChange={changeImage}
                                />

                                <Button
                                    isLoading={loading}
                                    w="full"
                                    colorScheme={'twitter'}
                                    type="submit"
                                >
                                    Change
                                </Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>

                <ModalFooter>
                    <Button mr="3" onClick={closeHandler}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ChangePhotoBox