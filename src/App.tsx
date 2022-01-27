import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./view/home";
import DetailPage from "./view/detail";
import AboutPage from "./view/about";
import FavoritePage from "./view/favorites";
import Header from "./components/header";
import Provider from "./context/context";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
