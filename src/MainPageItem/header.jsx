import React from "react";
import styled from "styled-components";
import Categori from "./Categori";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const Head = styled.header`
    margin: 0;
    padding: 0;
    height: 180px;
    border-bottom: 1px solid #f1f1f1;
`

const HeaderInner = styled.div`
    width: 1100px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    position: relative;
`

const Util = styled.div`
    position: absolute;
    top: 8px;
    right: 0;

    & > ul {
        margin: 0;
    }
`

const Logo = styled.div`
    position: relative;
    width: 180px;
    height: 52px;
    margin-right: 120px;
    bottom: 10px;

    & > img {
        cursor: pointer;
    }
`

const UtillText = styled.li`
    font-size: 13px;
    margin-left: 8.5px;
    color: #888;
    cursor: pointer;
`

function Header(props) {
    const navigate = useNavigate()

    return (
        <Head>
            <HeaderInner>
                <Logo>
                    <img onClick={() => {navigate("/")}} src="image/main/logo.png" alt="같이한닭" />
                </Logo>
                <Util>
                    <ul>
                        <UtillText onClick={() => {navigate("/login")}}>로그인</UtillText>
                        <UtillText>마이페이지</UtillText>
                        <UtillText>장바구니</UtillText>
                        <UtillText>고객센터</UtillText>
                    </ul>
                </Util>
                <SearchBar />
                <Categori />
            </HeaderInner>
        </Head>
    )
}

export default Header