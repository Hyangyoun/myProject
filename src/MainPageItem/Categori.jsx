import React from "react";
import styled from "styled-components";
import ListButton from "./Listbutton";
import { useNavigate } from "react-router-dom";

const Warpdiv = styled.div`
    width: 100%;
    height: 45px;
    position: absolute;
    bottom: 0;
    display: flex;
    font-size: 15px;
    font-weight: bold;
    border-top: 1px solid #f1f1f1;
    z-index: 2;
    background-color: white;
`

const CateBox = styled.div`
    display: block;
    width: 17%;
    height: 100%;
    align-items: center;
    border-right: 1px solid #f1f1f1;

    & > p {
        font-size: 15px;
        width: 100%;
        margin: 12.5px 0;
        text-align: center;
    }

    :hover {
        background-color: #2e954e;
        color: white;
        & > nav {
            height: 300px;
            text-align: center;
            border: 1px solid #2e954e;
            background-color: white;
        }
    }
`

const OnMouseCate = styled.nav`
    height: 0;
    transition: 0.5s;

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 40px;
        color: black;
        cursor: pointer;
        :hover {
            background-color: #f1f1f1;
        }
    }
    ul, li {
        list-style-type: none;
    }
    ul {
        width: 100%;
        flex-direction: column;
        align-items: center;
        display: flex;
        font-size: 15px;
        font-weight: bold;
        margin: 10px 0;
    }
`

function Categori(props){
    const navigate = useNavigate()
    return (
        <Warpdiv>
            <CateBox>
                <p>카테고리</p>
                <OnMouseCate>
                    <ul>
                        <li onClick={() => {navigate("/categori/01")}}>닭가슴살</li>
                        <li onClick={() => {navigate("/categori/02")}}>간편식</li>
                        <li onClick={() => {navigate("/categori/03")}}>도시락</li>
                        <li onClick={() => {navigate("/categori/04")}}>샐러드</li>
                        <li onClick={() => {navigate("/categori/05")}}>비건</li>
                        <li onClick={() => {navigate("/categori/06")}}>프로틴</li>
                        <li onClick={() => {navigate("/categori/07")}}>건강식품</li>
                    </ul>
                </OnMouseCate>
            </CateBox>
            <ListButton></ListButton>
        </Warpdiv>
    )
}

export default Categori