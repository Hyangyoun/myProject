import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Btnav = styled.nav`
    width: 83%;
    height: 100%;
    display: flex;
    justify-content: center;

    ul > li {
        margin-right: 41.5px;
        margin-left: 42px;
        cursor: pointer;
    }
`

function ListButton(props) {
    const navigate = useNavigate();

    return (
        <Btnav>
            <ul>
                <li onClick={() => {navigate("/")}}>인기상품</li>
                <li onClick={() => {navigate("/")}}>할인상품</li>
                <li onClick={() => {navigate("/")}}>나의식단</li>
                <li onClick={() => {navigate("/")}}>1팩담기</li>
                <li onClick={() => {navigate("/")}}>이벤트</li>
                <li onClick={() => {navigate("/")}}>게시판</li>
            </ul>
        </Btnav>
    )
}

export default ListButton