import {
  Box,
  // Button,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
  Stack,
  Badge,
  // Tooltip,
  // chakra,
} from "@chakra-ui/react";
import React from "react";
import {
  BsPeopleFill,
  BsTag,
  BsFillCalendar2Fill,
  // BsBookmark,
  // BsBookmarkFill,
} from "react-icons/bs";
import { Icon } from "@chakra-ui/react";

const Bookmark = () => {
  const { colorMode } = useColorMode();
  return (
    <>
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
                color={colorMode === "light" ? "#6B7280" : "gray.300"}
                display={"flex"}
                alignItems={"center"}
                gap={2}
              >
                <Icon
                  fontWeight={600}
                  color={colorMode === "light" ? "#6B7280" : "gray.300"}
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
                  fontWeight={600}
                  color={colorMode === "light" ? "#6B7280" : "gray.300"}
                  as={BsTag}
                />
                MISSED EVALUATION RECORDING
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
              <Text>Last Update 8 Oct, 22 - 5:23 pm</Text>
            </Box>
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};

export default Bookmark;
