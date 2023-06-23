import React from "react";
import styled from "styled-components";
import Slider from "../MainPageItem/Slider";
import Header from "../MainPageItem/header";
import Footer from "../MainPageItem/Footer";
import EventSlider from "../MainPageItem/EventSlider";
import ProductList from "../MainPageItem/ProductList";

function MainPage(props) {
    return (
        <>
            <Header  />
            <Slider />
            <MainSection>
                <EventProd>
                    <div>
                        <span>일일 특가</span>
                        <ProductList itemList={discountProdList} number={3} />
                    </div>
                    <div>
                        <span>신상품</span>
                        <ProductList itemList={newProdList} number={3} />
                    </div>
                </EventProd>
                <SlideBar>
                    <img className="DeliveryInfoImg" src="image/main/Frame 3.jpg" alt="배송안내" />
                    <EventBox>
                        <div>
                            <span>오직 </span> <span className="pointText">같이한닭</span><span>에서만!</span>
                            <span className="bottomText">깜짝 주말특가!</span>
                        </div>
                        <img className="eventImg" src="image/main/이벤트.jpg" alt="이벤트" />
                        <EventSlider />
                    </EventBox>
                </SlideBar>
            </MainSection>
            <Footer />
        </>
    )
}

export default MainPage

const MainSection = styled.div`
    width: 1100px; height: auto;
    margin: 40px auto 0;
    display: flex;
    flex-direction: row;
`

const EventBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 250px; height: 360px;
    border-radius: 30px;
    background-color: #f1f1f1;

    span {
        font-size: 20px;
        font-weight: bold;
        cursor: default;
    }

    .eventImg {
        width: 220px; height: auto;
        border-radius: 10px;
        cursor: pointer;
    }

    .bottomText {
        display: block;
    }
    .pointText {
        font-size: 25px;
        color: #2e954e;
    }
`
const EventProd = styled.div`
    width: 850px; height: 1000px;
    display: flex;
    flex-direction: column;
    > div {
        width: 820px; height: auto;
    }
    & > div > span {
        display: inline-block;
        font-size: 24px;
        font-weight: bold;
        margin: 20px 0;
    }
`
const SlideBar = styled.div`
    width: 250px; height: auto;

    .DeliveryInfoImg {
        width: 250px; height: auto;
        margin: 0 auto 30px;
        border-radius: 10px;
        cursor: pointer;
    }
`

const discountProdList = [
    {
        img: "image/product_img/01/08/잇메이트 닭안심살 카레맛-1.jpg",
        name: "잇메이트 닭안심살 카레맛",
        price: "22,100",
        beforePrice: "31,500원",
        discount: "30",
        grade: 0,
        reviews: 0,
        index: 0
    },
    {
        img: "image/product_img/01/02/아임닭 수비드닭가슴살 칠리페퍼-1.jpg",
        name: "아임닭 수비드닭가슴살 칠리페퍼",
        price: "28,400",
        beforePrice: "39,500원",
        discount: "28",
        grade: 0,
        reviews: 0,
        index: 1
    },
    {
        img: "image/product_img/06/01/닥터유프로 단백질파우더-1.jpg",
        name: "닥터유프로 단백질 파우더",
        price: "22,100",
        beforePrice: "31,500원",
        discount: "30",
        grade: 0,
        reviews: 0,
        index: 2
    },
]

const newProdList = [
    {
        img: "image/product_img/01/06/신선애 생닭가슴살-1.jpg",
        name: "신선애 냉동 생 닭가슴살",
        price: "9,500",
        grade: 0,
        reviews: 0,
        index: 0
    },
    {
        img: "image/product_img/07/01/뉴트리커먼 XL- 엘- 아르기닌-1.jpg",
        name: "뉴트리커먼 XL-엘-아르기닌",
        price: "18,900",
        grade: 0,
        reviews: 0,
        index: 1
    },
    {
        img: "image/product_img/06/01/닥터유프로 단백질파우더-1.jpg",
        name: "닥터유프로 단백질 파우더",
        price: "22,100",
        beforePrice: "31,500원",
        discount: "30",
        grade: 0,
        reviews: 0,
        index: 2
    },
]