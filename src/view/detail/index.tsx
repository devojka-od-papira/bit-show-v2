import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { Context } from "../../context/context";
import DetailSection from "../../components/detailBlock";
import DetailList from "../../components/detailList";

function DetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const { getShowId, showDetail, getActorsId, actors, selectFavoritesShow } =
    useContext(Context);

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
    <Container maxW="container.md" centerContent>
      <DetailSection showDetail={showDetail} />
      <DetailList
        handleGridActive={handleGridActive}
        gridActive={gridActive}
        actors={actors}
        location={location}
        onSelect={selectFavoritesShow}
      />
    </Container>
  );
}
export default DetailPage;
