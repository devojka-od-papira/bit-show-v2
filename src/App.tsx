import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./view/home";
import DetailPage from "./view/detail";
import AboutPage from "./view/about";
import FavoritePage from "./view/favorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="favorite" element={<FavoritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
