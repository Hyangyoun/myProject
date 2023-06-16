import React from "react";
import styled from "styled-components";
import Slider from "../MainPageItem/Slider";
import Header from "../MainPageItem/header";
import Footer from "../MainPageItem/Footer";

function MainPage(props) {
    return (
        <>
            <Header  />
            <Slider />
            <Footer />
        </>
    )
}

export default MainPage