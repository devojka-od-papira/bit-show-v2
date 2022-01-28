import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { Context } from "../../context/context";
import DetailSection from "../../components/detailBlock";
import DetailList from "../../components/detailList";

function DetailPage() {
  const { id } = useParams();
  const { getShowId, showDetail, getActrosId, actrosDetail } =
    useContext(Context);

  useEffect(() => {
    if (id) {
      getShowId(id);
      getActrosId(id);
    }
  }, []);

  return (
    <Container maxW="container.md" centerContent>
      <DetailSection showDetail={showDetail} />
      <DetailList actrosDetail={actrosDetail} />
    </Container>
  );
}
export default DetailPage;
