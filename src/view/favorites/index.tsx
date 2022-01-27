import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { Context } from "../../context/context";
import Card from "./../../components/card";

type FavoiteType = {};

const FavoritePage: React.FC<FavoiteType> = () => {
  const location = useLocation();
  const { favorites, unselectFavoritesShow } = useContext(Context);
  return (
    <Container maxW="container.md">
      <Grid templateColumns="repeat(3, 1fr)" gap={6} pb="80px">
        {favorites.length > 0
          ? favorites.map((favorite: any) => {
              return (
                <GridItem key={favorite.id} w="100%">
                  <Card
                    onSelect={() => unselectFavoritesShow(favorite.id)}
                    addIconActive={location.pathname === "/" ? true : false}
                    show={favorite}
                  />
                </GridItem>
              );
            })
          : null}
      </Grid>
    </Container>
  );
};
export default FavoritePage;
