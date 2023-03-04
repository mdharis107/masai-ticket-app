import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/auth/action";

const NavBar = () => {
  const isAuth = useSelector((state) => {
    return state.AuthReducer.isAuth;
  });
  const UserName = useSelector((state) => {
    if (isAuth) {
      return state.AuthReducer.token.data.name;
    }
  });
  const log = useSelector((state) => {
    return state.AuthReducer;
  });
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate()

  const handleLogout = () => {
    log.isAuth = false;
    log.token = "";
    console.log(log);
    navigate("/login")
  };
  // useEffect(() => {}, [handleLogout]);

  // console.log(isAuth);
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={10}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Heading>MASAI TICKET</Heading>
            </Box>
            <HStack
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}
            >
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <Box
                fontWeight={"500"}
                color={colorMode === "light" ? "#6B7280" : "#FFFFFFEB"}
              >
                {isAuth ? (
                  <Link to="/home">Home </Link>
                ) : (
                  <Link to="/">Signup </Link>
                )}
                {/* <Link to="/signup">Signup </Link> */}
              </Box>
              <Box
                fontWeight={"500"}
                color={colorMode === "light" ? "#6B7280" : "#FFFFFFEB"}
              >
                {isAuth ? (
                  <Link to="/bookmark"> Bookmark </Link>
                ) : (
                  <Link to="/login">Login </Link>
                )}
                {/* <Link to="/login">Login </Link> */}
              </Box>
            </HStack>
          </HStack>

          <Flex gap={5} alignItems={"center"}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            {isAuth ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{UserName ? UserName : ""}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              ""
            )}
          </Flex>

          {/* <Flex gap={5} alignItems={"center"}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex> */}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              <Box
                fontWeight={"500"}
                color={colorMode === "light" ? "#6B7280" : "#FFFFFFEB"}
              >
                {isAuth ? (
                  <Link to="/home">Home </Link>
                ) : (
                  <Link to="/">Signup </Link>
                )}
              </Box>
              <Box
                fontWeight={"500"}
                color={colorMode === "light" ? "#6B7280" : "#FFFFFFEB"}
              >
                {isAuth ? (
                  <Link to="/bookmark"> Bookmark </Link>
                ) : (
                  <Link to="/login">Login </Link>
                )}
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavBar;
