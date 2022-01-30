import React from "react";
import { Container, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      as="footer"
      position="absolute"
      w="100%"
      mb={0}
      p={6}
      bg={["primary.500", "primary.500", "blue", "blue"]}
      color={["white", "white", "primary.700", "primary.700"]}
    >
      <Container maxW="container.md">
        <Text>© 2022 Copyright BIT</Text>
      </Container>
    </Flex>
  );
}
export default Footer;
