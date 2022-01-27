import React from "react";
import {
  InputGroup,
  Input,
  InputRightElement,
  Box,
  Container,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

type SearchType = {
  handleChange: any;
};

const SearchBar: React.FC<SearchType> = ({ handleChange }) => {
  return (
    <Container maxW="container.md" centerContent>
      <VStack>
        <HStack mb={6}>
          <Box>
            <InputGroup>
              <Input
                placeholder="Search shows"
                variant="outline"
                onChange={handleChange}
              />
              <InputRightElement children={<Search2Icon />} />
            </InputGroup>
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
};
export default SearchBar;
