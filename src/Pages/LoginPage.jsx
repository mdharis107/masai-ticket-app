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
  useToast,
  Spinner,
} from "@chakra-ui/react";
// import { Link as ReachLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/action";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [data, setData] = useState({});
  const loading = useSelector((state) => {
    return state.AuthReducer.isAuthLoading;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  // console.log(loading)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(login(data)).then((res) => {
      // console.log(res.payload);
      {
        res.payload.msg
          ? toast(
              {
                title: res.payload.msg,
                status: "success",
                duration: 3000,
                isClosable: true,
              },
              navigate("/home")
            )
          : toast({
              title: res.payload.message,
              status: "warning",
              duration: 3000,
              isClosable: true,
            });
      }
      // navigate("/")
    });
  };

  return (
    <Stack minH={"92vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <form action="" onSubmit={handleSubmit}>
            <Heading fontSize={"2xl"}>Log in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input name="email" onChange={handleChange} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input name="password" onChange={handleChange} type="password" />
            </FormControl>
            <Stack mt={5} spacing={6}>
              <Button type="submit" colorScheme={"blue"} variant={"solid"}>
                {loading ? <Spinner /> : " Log in"}
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default LoginPage;
