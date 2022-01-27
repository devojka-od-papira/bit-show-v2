import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Spacer, Text } from "@chakra-ui/react";

type CardType = {
  show: any;
};

const Card: React.FC<CardType> = ({ show }) => {
  return (
    <Box>
      <Box>
        <Link to="">
          <Image w="100%" h="400px" src={show.image.original} alt="" />
        </Link>
      </Box>
      <Box p="6">
        <Box>
          <Text as="h4" mt="1" overflowWrap="break-word" fontWeight="semibold">
            {show.name}
          </Text>
        </Box>
        <Box mt="2" display="flex" alignItems="center">
          <Box
            ml="2"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {show.rating.average}
          </Box>
        </Box>
        <Spacer />
      </Box>
    </Box>
  );
};
export default Card;
