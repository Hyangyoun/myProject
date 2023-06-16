import React from "react";
import styled from "styled-components";
import Categori from "../MainPageItem/Categori"

const Head = styled.header`
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    width: 1100px;
    height: 45px;
    margin: auto;
    z-index: 3;
`

function LoginHeader(props) {
    return (
        <Head><Categori /></Head>
    )
}

export default LoginHeader