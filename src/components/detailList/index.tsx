import React from "react";
import {
  Container,
  HStack,
  Box,
  Text,
  Spacer,
  Avatar,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { DragHandleIcon, HamburgerIcon } from "@chakra-ui/icons";
import Card from "./../card";

type ListType = {
  actors: any;
  handleGridActive: () => void;
  gridActive: boolean;
  onSelect: () => void;
  location: any;
};

const DetailList: React.FC<ListType> = ({
  actors,
  handleGridActive,
  gridActive,
  location,
  onSelect,
}) => {
  console.log("location", location);
  return (
    <Container maxW="container.md">
      <HStack mb="5">
        <Box>
          <Text fontSize="4xl">Actors</Text>
        </Box>
        <Spacer />
        <Box>
          <Box as="button" onClick={handleGridActive}>
            {gridActive ? <HamburgerIcon /> : <DragHandleIcon />}
          </Box>
        </Box>
      </HStack>
      {actors.length > 0 && gridActive
        ? actors.map((actor: any) => {
            return (
              <Box key={actor.id} p={4} boxShadow="lg">
                <HStack spacing={4}>
                  <Avatar
                    name={actor.person.name}
                    src={actor.person.image.original}
                  />
                  <Text fontSize="lg">{actor.person.name}</Text>
                </HStack>
              </Box>
            );
          })
        : null}
      <Grid templateColumns="repeat(3, 1fr)" gap={6} pb="80px">
        {actors.length > 0 && gridActive === false
          ? actors.map((a: any, index: number) => {
              const newObj = {
                name: a.person.name,
                image: {
                  original: a.person.image.original,
                },
                rating: {
                  average: "",
                },
              };
              return (
                <GridItem key={index} w="100%">
                  <Card
                    onSelect={() => console.log("sta se desi")}
                    addIconActive={location.pathname === "/" ? true : false}
                    show={newObj}
                    location={location}
                  />
                </GridItem>
              );
            })
          : null}
      </Grid>
    </Container>
  );
};
export default DetailList;
