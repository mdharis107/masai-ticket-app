import React from "react";
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
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthNavbar = () => {
  const app = useSelector((state)=>{
    return state.AuthReducer.isAuth
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

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
                <Link to="/signup">Signup </Link>
              </Box>
              <Box
                fontWeight={"500"}
                color={colorMode === "light" ? "#6B7280" : "#FFFFFFEB"}
              >
                {app ? (
                  <Link to="/"> Home </Link>
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
          </Flex>
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
                <Link to="/signup">Signup </Link>
              </Box>
              <Box
                fontWeight={"500"}
                color={colorMode === "light" ? "#6B7280" : "#FFFFFFEB"}
              >
                <Link to="/login">Login </Link>
              </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default AuthNavbar;
