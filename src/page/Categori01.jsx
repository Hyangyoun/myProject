import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../MainPageItem/Footer";
import Header from "../MainPageItem/header";
import ProductList from "../MainPageItem/ProductList";

function Categori01(props) {

    return (
        <>
            <Header />
            <MainSection>
                <span>닭가슴살</span>
                <img src="image/categori/카테고리_01.jpg" alt="카테고리_닭가슴살" />
                <div className="SelectCate">
                    <ul className="SelectList">
                        <li>전체</li>
                        <li>소스닭가슴살</li>
                        <li>수비드닭가슴살</li>
                        <li>스팀닭가슴살</li>
                        <li>슬라이스닭가슴살</li>
                        <li>큐브닭가슴살</li>
                        <li>생닭가슴살</li>
                        <li>닭가슴살스테이크</li>
                        <li>닭안심살</li>
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
export default Categori01

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
    .sPoint {
        color: #2e954e;
    }

`

const prodList = [
    {
        img: "image/product_img/01/03/맛있닭 스팀닭가슴살 마늘맛-1.jpg",
        name: "맛있닭 스팀 닭가슴살 마늘맛",
        price: "18,900",
        grade: 0,
        reviews: 0,
        index: 0
    },
    {
        img: "image/product_img/01/03/잇메이트 스팀닭가슴살 고추맛-1.jpg",
        name: "잇메이트 스팀 닭가슴살 고추맛",
        price: "24,900",
        grade: 0,
        reviews: 0,
        index: 0
    },
    {
        img: "image/product_img/01/04/러브잇 슬라이스닭가슴살 훈제-1.jpg",
        name: "러브잇 슬라이스 닭가슴살 훈제",
        price: "18,500",
        grade: 0,
        reviews: 0,
        index: 0
    },
    {
        img: "image/product_img/01/03/맛있닭 스팀닭가슴살 마늘맛-1.jpg",
        name: "신선애 냉동 생 닭가슴살",
        price: "18,900",
        grade: 0,
        reviews: 0,
        index: 0
    },
    {
        img: "image/product_img/01/03/맛있닭 스팀닭가슴살 마늘맛-1.jpg",
        name: "신선애 냉동 생 닭가슴살",
        price: "18,900",
        grade: 0,
        reviews: 0,
        index: 0
    },
    {
        img: "image/product_img/01/03/맛있닭 스팀닭가슴살 마늘맛-1.jpg",
        name: "신선애 냉동 생 닭가슴살",
        price: "18,900",
        grade: 0,
        reviews: 0,
        index: 0
    },
    {
        img: "image/product_img/01/03/맛있닭 스팀닭가슴살 마늘맛-1.jpg",
        name: "신선애 냉동 생 닭가슴살",
        price: "18,900",
        grade: 0,
        reviews: 0,
        index: 0
    },
    {
        img: "image/product_img/01/03/맛있닭 스팀닭가슴살 마늘맛-1.jpg",
        name: "신선애 냉동 생 닭가슴살",
        price: "18,900",
        grade: 0,
        reviews: 0,
        index: 0
    },
    {
        img: "image/product_img/01/03/맛있닭 스팀닭가슴살 마늘맛-1.jpg",
        name: "신선애 냉동 생 닭가슴살",
        price: "18,900",
        grade: 0,
        reviews: 0,
        index: 0
    },
    {
        img: "image/product_img/01/03/맛있닭 스팀닭가슴살 마늘맛-1.jpg",
        name: "신선애 냉동 생 닭가슴살",
        price: "18,900",
        grade: 0,
        reviews: 0,
        index: 0
    },
]