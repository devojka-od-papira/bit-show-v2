import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import DetailSection from "../../components/detailBlock";
import { Context } from "../../context/context";

function DetailPage() {
  const { id } = useParams();
  const { getShowId, showDetail } = useContext(Context);

  useEffect(() => {
    if (id) {
      getShowId(id);
    }
  }, []);

  return (
    <Container maxW="container.md" centerContent>
      <DetailSection showDetail={showDetail} />
    </Container>
  );
}
export default DetailPage;
