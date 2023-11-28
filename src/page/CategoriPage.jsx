import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../MainPageItem/Footer";
import Header from "../MainPageItem/header";
import ProductList from "../MainPageItem/ProductList";
import { useParams } from "react-router-dom";
import axios from "axios";

function CategoriPage(props) {
    const [ prodList, setProdList] = useState([])
    const [ category, setCategory] = useState([])
    const { kind } = useParams()

    useEffect(() => {
        axios.get(`/product/categori/${kind}`)
        .then((response) => {
            setProdList(response.data)
        })
        axios.get(`/product/subcate/${kind}`)
        .then((response) => {
            setCategory(response.data)
        })

    },[kind])
    return (
        <>
            <Header />
            <MainSection>
                <span>{category.category}</span>
                <img src={`/image/categoriImg/${kind}.jpg`} alt={`카테고리 ${kind}`} />
                <div className="SelectCate">
                    <ul className="SelectList">
                        <li>전체</li>
                        <li>{category.c1}</li>
                        <li>{category.c2}</li>
                        <li>{category.c3}</li>
                        <li>{category.c4}</li>
                        <li>{category.c5}</li>
                        <li>{category.c6}</li>
                        <li>{category.c7}</li>
                        <li>{category.c8}</li>
                    </ul>
                </div>
                <Product>
                    <div className="no">
                        <span>총 <span className="sPoint">{prodList.length}개</span>의 상품이 있습니다.</span>
                    </div>
                    <ProductList itemList = {prodList} number={4} />
                </Product>
            </MainSection>
            <Footer />
        </>
    )
}
export default CategoriPage

const MainSection = styled.div`
    width: 1100px; height: auto;
    margin: auto;

    > span {
        display: inline-block;
        font-size: 25px;
        font-weight: bold;
        margin: 20px 0 10px;
    }
    .SelectCate {
        width: 100%; height: 100px;
        border: 1px solid #d5d5d5;
        margin: 40px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .SelectList {
        width: 800px; height: 80px;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .SelectList > li {
        margin: 0 30px;
        cursor: pointer;
    }
`
const Product = styled.div`
    width: 1100px; height: auto;
    .no {
        border-bottom: 1px solid black;
        margin-bottom: 40px;
    }
    & > div > span {
        display: inline-block;
        font-size: 18px;
        margin-bottom: 5px;
    }
    .sPoint {
        color: #2e954e;
        font-weight: bold;
    }

`