import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
    border-top: 2px solid #f1f1f1;
    background-color: black;
    display: flex;
    width: 90%;
    height: 50px;
    margin: auto;
`

function Footer(props) {
    return (
        <Foot></Foot>
    )
}

export default Footer