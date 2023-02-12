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
} from "@chakra-ui/react";
import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";

const HomePage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
            letterSpacing={"widest"}
            fontWeight={500}
            fontSize={"12px"}
            p={"5px 20px"}
            color={colorMode === "light" ? "#FFF" : "#1F2937"}
            bg={colorMode === "light" ? "#1F2937" : "#FFF"}
            onClick={onOpen}
            _hover={{ opacity: 0.8 }}
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
          <ModalContent>
            <ModalHeader>Create your Ticket</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>CATEGORY</FormLabel>
                <Select w={"50%"} placeholder="Select">
                  <option value="Withdrawal">Withdrawal</option>
                  <option value="Missed Evaluation">Missed Evaluation</option>
                  <option value="Leave">Leave</option>
                  <option value="Query">Query</option>
                  <option value="Electives">Electives</option>
                </Select>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>TITLE</FormLabel>
                <Input />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>MESSAGE</FormLabel>
                <Textarea placeholder="Type your message here" />
              </FormControl>
            </ModalBody>

            <ModalFooter justifyContent={"left"}>
              <Button
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
              {/* <Button onClick={onClose}>Cancel</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>

      <Stack
        boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
        bg={useColorModeValue("gray.100", "gray.900")}
        w={"70%"}
        m={"auto"}
        p={10}
        borderRadius={5}
        // border={"1px solid red"}
        mt={10}
      >
        <Stack
          borderRadius={2}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;"
          p={5}
        >
          <Flex
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Text color={"#4F4CE5"} fontSize={"14px"} fontWeight={"600"}>
              Coding Revision Marks
            </Text>
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              RESOLVED
            </Badge>
          </Flex>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Flex gap={5}>
              <Box
                fontWeight={400}
                color={"#6B7280"}
                display={"flex"}
                alignItems={"center"}
                gap={2}
              >
                <Icon fontWeight={600} color={"gray.300"} as={BsPeopleFill} />
                Haris
              </Box>
              <Box
                fontWeight={400}
                color={"#6B7280"}
                display={"flex"}
                alignItems={"center"}
                gap={2}
              >
                <Icon fontWeight={600} color={"#6B7280"} as={BsPeopleFill} />
                Haris
              </Box>
            </Flex>
            <Box
              fontWeight={400}
              color={"#6B7280"}
              display={"flex"}
              alignItems={"center"}
              gap={2}
            >
              <Icon fontWeight={600} color={"#6B7280"} as={BsPeopleFill} />
              <Text>Last Update 8 Oct, 22 - 5:23 pm</Text>
            </Box>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};

export default HomePage;
