import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import MainPage from "./page/MainPage";
import LoginPage from "./page/LoginPage";
import GlobalStyle from "./styled/GlobalStyle";
import CategoriPage from "./page/CategoriPage";
import AdminPage from "./page/AdminPage";
import "./Fonts/pretendard.css";
import ProductPage from "./page/ProductPage";


function App() {
  // useEffect(() => {
  //   axios.get("main/product/3")
  //   .then((response) => {
  //     console.log(response.data)
  //   })
  // },[])
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element = {<MainPage />} />
          <Route path="/login" element = {<LoginPage />} />
          <Route path="/categori/:kind" element = {<CategoriPage />} />
          <Route path="/admin" element = {<AdminPage />} />
          <Route path="/product/:id" element = {<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
