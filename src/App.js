import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import MainPage from "./page/MainPage";
import GlobalStyle from "./styled/GlobalStyle";
import "./Fonts/pretendard.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element = {<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
