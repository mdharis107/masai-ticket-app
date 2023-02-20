import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";
import { Link as ReachLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../redux/auth/action";

const SignupPage = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const toast = useToast();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(data)).then((res) => {
      console.log(res.payload);
      {
        res.payload.msg
          ? toast({
              title: "Account created.",
              description: res.payload.msg,
              status: "success",
              duration: 3000,
              isClosable: true,
            })
          : toast({
              title: res.payload.message,
              status: "error",
              duration: 3000,
              isClosable: true,
            });
      }
      navigate("/login")
    })
  };

  return (
    <Stack minH={"92vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <form action="" onSubmit={handleSubmit}>
            <Heading fontSize={"2xl"}>Sign up to your account</Heading>
            <FormControl id="name">
              <FormLabel>Full Name</FormLabel>
              <Input name="name" onChange={handleChange} type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input name="email" onChange={handleChange} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input name="password" onChange={handleChange} type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"flex-start"}
              >
                <Text>
                  Already a User?{" "}
                  <Link as={ReachLink} to="/login" color="blue.500">
                    Click here
                  </Link>
                </Text>
              </Stack>
              <Button type={"submit"} colorScheme={"blue"} variant={"solid"}>
                Sign up
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
};

export default SignupPage;
