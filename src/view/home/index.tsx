import React, { useContext, useState } from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { Context } from "./../../context/context";
import Card from "./../../components/card";
import SearchBar from "../../components/search";

const HomePage = () => {
  const { shows } = useContext(Context);
  const [filterValue, setFilterValue] = useState("");

  const handleChange = (event: any) => {
    setFilterValue(event.target.value);
  };

  return (
    <Container maxW="container.md">
      <SearchBar handleChange={handleChange} />
      <Grid templateColumns="repeat(3, 1fr)" gap={6} pb="80px">
        {filterValue.length > 0
          ? shows
              .filter((show: any) => {
                return show.name.includes(filterValue);
              })
              .map((show: any) => {
                return (
                  <GridItem key={show.id} w="100%">
                    <Card show={show} />
                  </GridItem>
                );
              })
          : shows.map((show: any) => {
              return (
                <GridItem key={show.id} w="100%">
                  <Card show={show} />
                </GridItem>
              );
            })}
      </Grid>
    </Container>
  );
};
export default HomePage;
