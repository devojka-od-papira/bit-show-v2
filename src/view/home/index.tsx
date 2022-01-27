import React, { useContext } from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { Context } from "./../../context/context";
import Card from "./../../components/card";

// type HomeType = {
//   show: any;
// };

const HomePage = () => {
  const { shows } = useContext(Context);

  return (
    <Container maxW="container.md">
      <Grid templateColumns="repeat(3, 1fr)" gap={6} pb="80px">
        {shows.map((show: any) => {
          return (
            <GridItem w="100%">
              <Card show={show} />
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};
export default HomePage;
