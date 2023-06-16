import React from "react";
import styled from "styled-components";

const Serchbox = styled.div`
    width: 450px;
    height: 40px;
    border: 2px solid #2e954e;
    display: flex;
    position: relative;
    align-items: center;
    bottom: 12px;
    left: 14px;
    border-radius: 40px;
`

const TextInput = styled.input`
    width: 85%;
    height: 70%;
    left: 18px;
    position: relative;
    border: 0px none;
    outline: none;
    font-size: 16px;
    font-family: "pretendard";
    ::placeholder {
        color: lightgray;
    }
`
const SearchBtn = styled.button`
    width: 40px;
    height: 40px;
    padding: 12px;
    border: none;
    background: none;
    outline: none;
    margin-left: 20px;
    cursor: pointer;

    & > img {
        width: 100%;
        height: auto;
    }
`

function SearchBar(props) {

    return (
        <Serchbox>
            <TextInput type="text" placeholder="상품명 입력"></TextInput>
            <SearchBtn type="button"><img src="image/main/search.jpg" alt="검색" /></SearchBtn>
        </Serchbox>
    )
}

export default SearchBar