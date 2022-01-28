import React from "react";
import {
  Container,
  Grid,
  Box,
  Image,
  VStack,
  Text,
  Divider,
  Tag,
  GridItem,
} from "@chakra-ui/react";

const DetailSection = ({ showDetail }: any) => {
  return (
    <Container maxW="container.md" centerContent>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="100%">
          <Box>
            <Image src={showDetail?.image.original} alt="" />
          </Box>
        </GridItem>
        <GridItem w="100%">
          <VStack display="flex" spacing={6}>
            <Box>
              <Text fontSize="4xl">{showDetail?.name}</Text>
            </Box>
            <Box>
              {showDetail?.genres.map((genre: string) => {
                return (
                  <Tag mr={2} key={showDetail.id}>
                    {genre}
                  </Tag>
                );
              })}
            </Box>
            <Box>
              <Text fontSize="lg">
                {showDetail?.summary.replace(/(<([^>]+)>)/gi, "")}
              </Text>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
      <Divider mb="4" mt="4" />
    </Container>
  );
};
export default DetailSection;
