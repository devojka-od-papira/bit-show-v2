import React, { useEffect, useState } from "react";

import { getShows, getDetailShow, getActors } from "../services";

export const Context = React.createContext<any | null>(null);

const Provider = ({ children }: any) => {
  const [shows, setShows] = useState([]);
  const [favorites, setFavorites] = useState([]) as any;
  const [showDetail, setShowDetail] = useState(null);
  const [actors, setActors] = useState([]) as any;

  const pages = [
    {
      name: "BIT SHOW",
      url: "/",
    },
    { name: "Favorite", url: "/favorite" },
    { name: "About", url: "/about" },
  ];

  useEffect(() => {
    getShows().then((response) => {
      setShows(response);
    });
  }, []);

  const selectFavoritesShow = (show: any) => {
    const newFavorits = [...favorites, show];
    setFavorites(newFavorits);
  };
  const unselectFavoritesShow = (id: number) => {
    const filteredFavorites = favorites.filter((show: any) => {
      return show.id !== id;
    });
    setFavorites(filteredFavorites);
  };
  const getShowId = (id: number) => {
    getDetailShow(id).then((response) => {
      setShowDetail(response);
    });
  };
  const getActorsId = (id: number) => {
    getActors(id).then((response) => {
      setActors(response);
    });
  };

  return (
    <Context.Provider
      value={{
        pages,
        shows,
        selectFavoritesShow,
        favorites,
        unselectFavoritesShow,
        getShowId,
        showDetail,
        getActorsId,
        actors,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provider;
