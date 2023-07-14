import React from 'react'

import { Button, Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerOverlay, useDisclosure, VStack, HStack } from "@chakra-ui/react"
import ColorModeSwitcher from "../../ColorModeSwitcher"
import { RiDashboardLine, RiLogoutBoxLine, RiMenu4Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/user';

const NavLink = ({ url, title, onClose }) => {
    return (
        <Link onClick={onClose} to={url}>
            <Button>{title}</Button>
        </Link>
    )
}
const Header = ({ isAuthenticated = false, user }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch = useDispatch();
    const logoutHandler = () => {
        onClose();
        dispatch(logout());
    }

    return (
        <>
            <ColorModeSwitcher />
            <Button
                onClick={onOpen} colorScheme={"twitter"}
                width={"12"} height={"12"} rounded="full"
                position={"fixed"} top="6" left={"6"}
            >
                <RiMenu4Fill />
            </Button>

            <Drawer display="flex" placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent padding={"4"} >
                    <Button
                        onClick={onClose} colorScheme={"twitter"}
                        width={"12"} height={"12"} rounded="full"
                        position={"fixed"} top="6" left={"6"}
                    >
                        <ImCross />
                    </Button>
                    <DrawerHeader borderBottom={"1px"} marginTop="12" textAlign={"center"} >StudyLonia</DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={"flex-start"}>
                            <NavLink onClose={onClose} url="/" title="Home" />
                            <NavLink onClose={onClose} url="/courses" title="Explore All courses" />
                            <NavLink onClose={onClose} url="/request" title="Request a courses" />
                            <NavLink onClose={onClose} url="/contact" title="Contact Us" />
                            <NavLink onClose={onClose} url="/about" title="About Us" />

                            <HStack justifyContent={"sapce-evenly"} position="fixed" bottom={"2rem"}>
                                {isAuthenticated ? (<>
                                    <VStack>
                                        <HStack>
                                            <Link onClick={onClose} to="/profile"><Button colorScheme={"twitter"}>Profile</Button></Link>
                                            <Button style={{ marginLeft: "30px" }} colorScheme="gray" onClick={logoutHandler}>
                                                <RiLogoutBoxLine />Logout
                                            </Button>
                                        </HStack>
                                        {
                                            user.role === "admin"
                                                ? <Link onClick={onClose} to="/admin/dashboard">
                                                    <Button variant={"ghost"} colorScheme={"messenger"}>
                                                        <RiDashboardLine /> Dashboard
                                                    </Button>
                                                </Link>
                                                : null
                                        }
                                    </VStack>
                                </>) : (
                                    <>
                                        <Link onClick={onClose} to="/login"><Button colorScheme={"twitter"}>Login</Button></Link>
                                        <p>Or</p>
                                        <Link onClick={onClose} to="/register"><Button colorScheme={"twitter"}>Sign Up</Button></Link>
                                    </>
                                )}
                            </HStack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header