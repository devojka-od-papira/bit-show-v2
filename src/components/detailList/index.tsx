import React from "react";
import { Container, HStack, Box, Text, Spacer, Avatar } from "@chakra-ui/react";

const DetailList = ({ actrosDetail }: any) => {
  return (
    <Container maxW="container.md">
      <HStack mb="5">
        <Box>
          <Text fontSize="4xl">Actors</Text>
        </Box>
        <Spacer />
        <Box>
          <Box>ikonica</Box>
        </Box>
      </HStack>
      {actrosDetail.length > 0
        ? actrosDetail.map((actor: any) => {
            return (
              <Box p={4} boxShadow="lg">
                <HStack spacing={4}>
                  <Avatar
                    key={actor.id}
                    name={actor.person.name}
                    src={actor.person.image.original}
                  />
                  <Text fontSize="lg">{actor.person.name}</Text>
                </HStack>
              </Box>
            );
          })
        : null}
    </Container>
  );
};
export default DetailList;
