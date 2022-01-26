import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Flex, Box, Stack } from "@chakra-ui/react";
import { HeaderContext } from "../../context/headerContext";
import ThemeSwitch from "../themeSwitch";

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
          display="flex"
          justifyContent="space-between"
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Stack
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
          <ThemeSwitch />
        </Box>
      </Container>
    </Flex>
  );
}
export default Header;
