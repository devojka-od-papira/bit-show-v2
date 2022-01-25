import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Flex, Box, Stack } from "@chakra-ui/react";
import { HeaderContext } from "../../containers/headerContext";

function Header() {
  const { pages } = useContext(HeaderContext);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={6}
      bg={["primary.500", "primary.500", "blue", "blue"]}
      color={["white", "white", "primary.700", "primary.700"]}
    >
      <Container maxW="container.md">
        <Box
          style={{ backgroundColor: "violet" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Stack
            style={{ backgroundColor: "red" }}
            spacing={8}
            align="center"
            justify={["center", "space-between", "flex-start", "flex-start"]}
            direction={["column", "row"]}
            pt={[4, 4, 0, 0]}
          >
            {pages.map((page: any) => {
              return (
                <Link key={page.name} to={page.url}>
                  {page.name}
                </Link>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Flex>
  );
}
export default Header;
