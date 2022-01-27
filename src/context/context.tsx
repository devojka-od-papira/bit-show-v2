import React, { useEffect, useState } from "react";
import { getShows } from "../services";

export const Context = React.createContext<any | null>(null);

const Provider = ({ children }: any) => {
  const [shows, setShows] = useState([]);

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

  return (
    <Context.Provider value={{ pages, shows }}>{children}</Context.Provider>
  );
};
export default Provider;
