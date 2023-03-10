import {
  Box,
  Button,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
  Stack,
  Badge,
  Tooltip,
  chakra,
  Heading,
  Spinner,
  Center,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsPeopleFill, BsTag, BsFillCalendar2Fill } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getBookmark } from "../redux/app/action";
import { DeleteIcon } from '@chakra-ui/icons'

const Bookmark = () => {
  const { colorMode } = useColorMode();
  const [ticket, setTickets] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();

  //Loading
  const isLoading = useSelector((state) => {
    return state.AppReducer.isLoading;
  });

  //passing TOKEN for Authentication
  const token = useSelector((state) => {
    return state.AuthReducer.token.token;
  });

  //userID
  const userId = useSelector((state) => {
    return state.AuthReducer.token.data._id;
  });

  const bookmarks = useSelector((state) => {
    return state.AppReducer.bookmarks;
  });

  console.log(bookmarks);
  useEffect(() => {
    dispatch(getBookmark(token, userId));
  }, [dispatch, token, userId]);

  return (
    <>
      <Stack
        boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
        bg={useColorModeValue("gray.100", "gray.900")}
        w={"70%"}
        m={"auto"}
        p={10}
        borderRadius={5}
        mt={10}
      >
        {/* Mapping the tickets over here */}
        {bookmarks.length > 0 ? (
          bookmarks?.map((ele) => {
            return (
              <Stack
                borderRadius={2}
                boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;"
                p={5}
              >
                {isLoading ? (
                  <Center>
                    <Spinner />
                  </Center>
                ) : (
                  <Stack cursor={"pointer"}>
                    {" "}
                    <Flex
                      direction={"row"}
                      justifyContent="space-between"
                      alignItems={"center"}
                    >
                      <Text
                        color={"#4F4CE5"}
                        fontSize={"14px"}
                        fontWeight={"600"}
                      >
                        {ele.title}
                      </Text>
                      <Badge
                        rounded="full"
                        px="2"
                        fontSize="0.8em"
                        colorScheme="red"
                      >
                        RESOLVED
                      </Badge>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Flex gap={5}>
                        <Box
                          fontWeight={400}
                          color={colorMode === "light" ? "#6B7280" : "gray.300"}
                          display={"flex"}
                          alignItems={"center"}
                          gap={2}
                        >
                          <Icon
                            fontWeight={600}
                            color={
                              colorMode === "light" ? "#6B7280" : "gray.300"
                            }
                            as={BsPeopleFill}
                          />
                          Haris
                        </Box>
                        <Box
                          fontWeight={400}
                          color={colorMode === "light" ? "#6B7280" : "gray.300"}
                          display={"flex"}
                          alignItems={"center"}
                          gap={2}
                        >
                          <Icon
                            textTransform={"capitalize"}
                            fontWeight={600}
                            color={
                              colorMode === "light" ? "#6B7280" : "gray.300"
                            }
                            as={BsTag}
                          />
                          {ele.category}
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                          <Tooltip
                            label="Delete"
                            bg="transparent"
                            placement={"top"}
                            color={
                              colorMode === "light" ? "#6B7280" : "gray.300"
                            }
                            fontSize={"12px"}
                          >
                            <chakra.a href={"#"} display={"flex"}>
                              <Button
                                // onClick={() => setMarked(!marked)}
                                _hover={{ bgColor: "none" }}
                              >
                                {/* <Icon
                                  fontSize={"18px"}
                                  fontWeight={600}
                                  color={
                                    colorMode === "light"
                                      ? "#6B7280"
                                      : "gray.300"
                                  }
                                  // as={marked ? BsBookmarkFill : BsBookmark}
                                  as={BsBookmark}
                                /> */}
                                <DeleteIcon fontSize={"18px"}
                                  fontWeight={600} color={
                                    colorMode === "light"
                                      ? "#6B7280"
                                      : "gray.300"
                                  } />
                              </Button>
                            </chakra.a>
                          </Tooltip>
                        </Box>
                      </Flex>
                      <Box
                        fontWeight={400}
                        color={colorMode === "light" ? "#6B7280" : "gray.300"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={2}
                      >
                        <Icon
                          fontWeight={600}
                          color={colorMode === "light" ? "#6B7280" : "gray.300"}
                          as={BsFillCalendar2Fill}
                        />
                        <Text>
                          Last Update {ele.createdAt.substring(0, 10)} -{" "}
                          {ele.createdAt.substring(11, 19)}
                        </Text>
                      </Box>
                    </Flex>
                  </Stack>
                )}
              </Stack>
            );
          })
        ) : (
          <Heading>No Ticket has been Created</Heading>
        )}
      </Stack>
    </>
  );
};

export default Bookmark;
