import {
  VStack,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";

const Midmenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "600px",
      }}
    >
      <Box>
        <Menu isOpen={isOpen} onClose={onClose}>
          <MenuButton onMouseOver={onOpen}>Inspration</MenuButton>
          <MenuList>
            <MenuItem _hover={{ backgroundColor: "#fddde6" }}>
              Explore Design Work
            </MenuItem>
            <MenuItem>New Noteworthy</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      {/* <Box>
        <Menu isOpen={isOpen} onClose={onClose}>
          <MenuButton onMouseOver={onOpen} onmouseout={onClose}>
            Inspration
          </MenuButton>
          <MenuList>
            <VStack
              _hover={{ backgroundColor: "#fddde6" }}
              border="1px solid black"
              display="flex"
              flexDirection="row"
            >
              <MenuItem rightIcon={<ChevronRightIcon />}>
                Explore Design Work
                <Text>Trending Designs</Text>
              </MenuItem>
            </VStack>
            <MenuItem>New Noteworthy</MenuItem>
          </MenuList>
        </Menu>
      </Box> */}
      <Box>
        <Menu>
          <MenuButton>Inspration</MenuButton>
          {/* <MenuList>
            <MenuItem>Explore Design Work</MenuItem>
            <MenuItem>New Noteworthy</MenuItem>
          </MenuList> */}
        </Menu>
      </Box>
      <Box>
        <Menu>
          <MenuButton>Inspration</MenuButton>
          {/* <MenuList>
            <MenuItem>Explore Design Work</MenuItem>
            <MenuItem>New Noteworthy</MenuItem>
          </MenuList> */}
        </Menu>
      </Box>
    </div>
  );
};

export default Midmenu;
