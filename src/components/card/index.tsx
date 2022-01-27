import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Spacer, Text } from "@chakra-ui/react";
import { StarIcon, PlusSquareIcon, DeleteIcon } from "@chakra-ui/icons";

type CardType = {
  show: any;
  addIconActive: boolean;
  onSelect: any;
};

const Card: React.FC<CardType> = ({ show, addIconActive, onSelect }) => {
  return (
    <Box maxW="sm" borderWidth="1px" overflow="hidden" boxShadow="lg">
      <Box>
        <Link to={`/detail/${show.id}`}>
          <Image w="100%" h="400px" src={show.image.original} alt="" />
        </Link>
      </Box>
      <Box p="6">
        <Box>
          <Text as="h4" mt="1" fontWeight="semibold">
            {show.name}
          </Text>
        </Box>
        <Box mt="2" display="flex" alignItems="center" justifyContent="start">
          <Box ml="2" display="flex" alignItems="center">
            {show.rating.average}
            <StarIcon ml={5} color="yellow.400" />
          </Box>
          <Spacer />
          {addIconActive === true ? (
            <Box
              as="button"
              onClick={onSelect}
              bg="black"
              color="white"
              px={4}
              h={8}
            >
              <PlusSquareIcon color="yellow.400" />
            </Box>
          ) : (
            <Box
              as="button"
              onClick={onSelect}
              bg="black"
              color="white"
              px={4}
              h={8}
            >
              <DeleteIcon color="yellow.400" />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default Card;
