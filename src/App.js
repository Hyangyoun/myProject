import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import MainPage from "./page/MainPage";
import LoginPage from "./page/LoginPage";
import GlobalStyle from "./styled/GlobalStyle";
import Categori01 from "./page/Categori01";
import "./Fonts/pretendard.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element = {<MainPage />} />
          <Route path="/login" element = {<LoginPage />} />
          <Route path="/chickenBreast" element = {<Categori01 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
