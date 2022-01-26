import React from "react";

export const HeaderContext = React.createContext<any | null>(null);

const HeaderProvider = ({ children }: any) => {
  const pages = [
    {
      name: "BIT SHOW",
      url: "/",
    },
    { name: "Favorite", url: "/favorite" },
    { name: "About", url: "/about" },
  ];
  return (
    <HeaderContext.Provider value={{ pages }}>
      {children}
    </HeaderContext.Provider>
  );
};
export default HeaderProvider;
