import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { Context } from "../../context/context";
import DetailSection from "../../components/detailBlock";
import DetailList from "../../components/detailList";
import Footer from "../../components/footer";

function DetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const { getShowId, showDetail, getActorsId, actors } = useContext(Context);

  const [gridActive, setGridActive] = useState(true);

  useEffect(() => {
    if (id) {
      getShowId(id);
      getActorsId(id);
    }
  }, []);

  const handleGridActive = () => {
    setGridActive(!gridActive);
  };

  return (
    <>
      <Container maxW="container.md" centerContent position="relative">
        <DetailSection showDetail={showDetail} />
        <DetailList
          handleGridActive={handleGridActive}
          gridActive={gridActive}
          actors={actors}
          location={location}
        />
      </Container>
      <Footer />
    </>
  );
}
export default DetailPage;
