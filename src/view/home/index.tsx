import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { Context } from "./../../context/context";
import Card from "./../../components/card";
import SearchBar from "../../components/search";
import Footer from "../../components/footer";

const HomePage = () => {
  const location = useLocation();
  const { shows, selectFavoritesShow } = useContext(Context);
  const [filterValue, setFilterValue] = useState("");
  const handleChange = (event: any) => {
    setFilterValue(event.target.value);
  };

  return (
    <>
      <Container maxW="container.md" minH="100vh" position="relative">
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
                      <Card
                        onSelect={() => selectFavoritesShow(show)}
                        addIconActive={location.pathname === "/" ? true : false}
                        show={show}
                      />
                    </GridItem>
                  );
                })
            : shows.map((show: any) => {
                return (
                  <GridItem key={show.id} w="100%">
                    <Card
                      onSelect={() => selectFavoritesShow(show)}
                      addIconActive={location.pathname === "/" ? true : false}
                      show={show}
                    />
                  </GridItem>
                );
              })}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
export default HomePage;
