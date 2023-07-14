import React, { useState } from 'react'
import { Box, Button, Container, FormLabel, Heading, HStack, Input, VStack } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { login } from '../../redux/actions/user'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }
    return (
        <Container h={"95vh"}>
            <VStack h={"full"} justifyContent={"center"} spacing={"16"}>
                <Heading children="Weclome to Studylonia" />

                <form onSubmit={submitHandler} style={{ width: "100%" }}>
                    <Box marginY={"4"}>
                        <FormLabel htmlFor='email' children="Email Address" />
                        <Input
                            required
                            type="email"
                            id="emial"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeHolder={"Enter your email"}
                            border={"1px"}
                            borderColor="blue.300"
                            focusBorderColor={"blue.500"}
                            autoComplete="on"
                        />
                    </Box>
                    <Box marginY={"4"}>
                        <FormLabel htmlFor='password' children="Password" />
                        <Input
                            required
                            type="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeHolder={"Enter your password"}
                            border={"1px"}
                            borderColor="blue.300"
                            focusBorderColor={"blue.500"}
                        />
                    </Box>

                    <HStack justifyContent={"space-between"}>
                        <Button onClick={submitHandler} my={"4"} colorScheme="twitter" type='submit'>
                            Login
                        </Button>
                        <Box>
                            <Link to="/forgetPassword">
                                <Button fontSize={"sm"} colorScheme="twitter" variant={"link"}>
                                    Forget Password
                                </Button>
                            </Link>
                        </Box>
                    </HStack>
                    <Box my={"4"}>New User?{" "} Click
                        <Link to="/register">
                            <Button fontSize={"sm"} colorScheme="twitter" variant={"link"}>
                                here
                            </Button>
                            to Sign Up
                        </Link>
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Login