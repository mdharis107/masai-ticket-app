import {
  Box,
  Button,
  Flex,
  Select,
  Text,
  useColorMode,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
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
import {
  BsPeopleFill,
  BsTag,
  BsFillCalendar2Fill,
  BsBookmark,
  BsBookmarkFill,
} from "react-icons/bs";
import { Icon } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getTickets, postBookmark, postTickets } from "../redux/app/action";

const HomePage = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [marked, setMarked] = useState(false);
  const [ticket, setTicket] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();
  const [sort, setSort] = useState("asc");

  //Loading
  const isLoading = useSelector((state) => {
    return state.AppReducer.isLoading;
  });

  //passing user ID - GET
  const userId = useSelector((state) => {
    return state.AuthReducer.token.data._id;
  });

  //passing TOKEN for Authentication
  const token = useSelector((state) => {
    return state.AuthReducer.token.token;
  });

  //To GET TICKETS of user
  const userTickets = useSelector((state) => {
    return state.AppReducer.ticket;
  });

  //POST - Creating TIckets
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = ticket;
    dispatch(postTickets(token, payload)).then((res) => {
      toast({
        title: res.payload.msg,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      dispatch(getTickets(token, userId, sort));
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicket({
      ...ticket,
      [name]: value,
    });
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handleSelect = (ele) => {
    console.log(ele);
    setMarked(!marked);

    const payload = {
      title: ele.title,
      message: ele.message,
      category: ele.category,
    };

    // if (!marked) {
      dispatch(postBookmark(token, payload)).then((res) => {
        console.log(res)
        toast({
          title: res.payload.msg,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      });
    // }
  };

  // GET Tickets
  useEffect(() => {
    dispatch(getTickets(token, userId, sort));
  }, [userId, dispatch, token, sort]);

  return (
    <>
      {/* Header Section */}
      <Flex
        p={3}
        borderTop={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "WhiteAlpha.600")}
        bg={useColorModeValue("gray.100", "gray.900")}
        alignItems={"center"}
        justifyContent={"space-around"}
        boxShadow="rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
      >
        <Box>
          <Text fontWeight={"500"} fontSize={"22px"}>
            Support Tickets
          </Text>
        </Box>
        <Box>
          <Button
            textTransform={"uppercase"}
            letterSpacing={"widest"}
            fontWeight={500}
            fontSize={"12px"}
            p={"5px 20px"}
            color={colorMode === "light" ? "#FFF" : "#1F2937"}
            bg={colorMode === "light" ? "#1F2937" : "#FFF"}
            onClick={onOpen}
            _hover={{ opacity: 0.8 }}
            boxShadow={"md"}
          >
            CREATE
          </Button>
        </Box>
        <Modal
          isCentered
          size={"3xl"}
          isOpen={isOpen}
          onClose={onClose}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <form action="" onSubmit={handleSubmit}>
            <ModalContent>
              <ModalHeader>Create your Ticket</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>CATEGORY</FormLabel>
                  <Select
                    name="category"
                    onChange={handleChange}
                    w={"50%"}
                    placeholder="Select"
                  >
                    <option value="WITHDRAWAL">WITHDRAWAL</option>
                    <option value="MISSED EVALUATION">MISSED EVALUATION</option>
                    <option value="LEAVE">LEAVE</option>
                    <option value="QUERY">QUERY</option>
                    <option value="ELECTIVES">ELECTIVES</option>
                  </Select>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>TITLE</FormLabel>
                  <Input name="title" onChange={handleChange} />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>MESSAGE</FormLabel>
                  <Textarea
                    name="message"
                    onChange={handleChange}
                    placeholder="Type your message here"
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter justifyContent={"left"}>
                <Button
                  type="submit"
                  letterSpacing={"widest"}
                  fontWeight={500}
                  fontSize={"12px"}
                  p={"5px 20px"}
                  color={colorMode === "light" ? "#FFF" : "#1F2937"}
                  bg={colorMode === "light" ? "#1F2937" : "#FFF"}
                  opacity={0.8}
                  _hover={{ opacity: 1 }}
                >
                  CREATE TICKET
                </Button>
              </ModalFooter>
            </ModalContent>
          </form>
        </Modal>
      </Flex>

      {/* Sorting Sections */}
      <Stack
        boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
        bg={useColorModeValue("gray.100", "gray.900")}
        w={"70%"}
        m={"auto"}
        p={8}
        borderRadius={5}
        // border={"1px solid red"}
        mt={10}
      >
        <Flex gap={5}>
          <Select
            value={sort}
            onChange={handleSort}
            bg={colorMode === "light" ? "#FFF" : "whiteAlpha.200"}
            placeholder="Sort by Date"
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </Select>
          <Select
            bg={colorMode === "light" ? "#FFF" : "whiteAlpha.200"}
            placeholder="Filter by Category"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Flex>
      </Stack>

      {/* Mapped ELements */}
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
        {userTickets.length > 0 ? (
          userTickets?.map((ele) => {
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
                            label="Bookmark"
                            bg="transparent"
                            placement={"top"}
                            color={
                              colorMode === "light" ? "#6B7280" : "gray.300"
                            }
                            fontSize={"12px"}
                          >
                            <chakra.a href={"#"} display={"flex"}>
                              <Button
                                onClick={() => handleSelect(ele)}
                                // onClick={() => setMarked(!marked)}
                                _hover={{ bgColor: "none" }}
                              >
                                <Icon
                                  fontSize={"18px"}
                                  fontWeight={600}
                                  color={
                                    colorMode === "light"
                                      ? "#6B7280"
                                      : "gray.300"
                                  }
                                  // as={marked ? BsBookmarkFill : BsBookmark}
                                  as={BsBookmark}
                                />
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

export default HomePage;
