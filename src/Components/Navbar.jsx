import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

import Midmenu from "./Midmenu";

const Navbar = () => {
  return (
    <div style={{ border: "1px solid black", margin: "20px" }}>
      <Flex alignItems="center">
        <Box p="2">
          <Heading fontSize="lg">Logo</Heading>
        </Box>
        <Midmenu />
        <Spacer />
        <ButtonGroup>
          <Button colorScheme="BlackAlpha 100" color="gray.600">
            Sign In
          </Button>
          <Button backgroundColor="#ED64A6" color="white">
            Sign Up
          </Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
};

export default Navbar;
