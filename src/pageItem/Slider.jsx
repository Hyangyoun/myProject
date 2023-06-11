import React from "react";
import styled from "styled-components"
import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination, Autoplay, EffectFade} from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

const Slidersection = styled.section`
    height: 400px;
    img {
        flex: 0 0 auto;
        flex-wrap: wrap;
        min-height: 400px;
        width: 100%;
        object-fit: cover;
        cursor: pointer;
    }
`

const Swip = styled(Swiper)`
    .swiper-pagination-bullet {
        border: 1px solid #2e954e;
        background-color: #f1f1f1;
        opacity: 1;
    }
    .swiper-pagination-bullet-active {
        background-color: #2e954e;
    }
`

function Slider(props) {

    return (
        <Slidersection>
            <Swip
            effect={"fade"}
            slidesPerView={1}
            speed={2000}
            simulateTouch={false}
            autoplay={{delay: 5000, disableOnInteraction: false}}
            pagination={{clickable: true}}
            modules={[EffectFade, Pagination,Autoplay]}>
            <SwiperSlide><img src="image/main/main_img.jpg" alt="banner" /></SwiperSlide>
            <SwiperSlide><img src="image/main/main_img_2.jpg" alt="banner" /></SwiperSlide>
            <SwiperSlide><img src="image/main/main_img_3.jpg" alt="banner" /></SwiperSlide>
            <SwiperSlide><img src="image/main/main_img_4.jpg" alt="banner" /></SwiperSlide>
            <SwiperSlide><img src="image/main/main_img_5.jpg" alt="banner" /></SwiperSlide>
            </Swip>
        </Slidersection>
    )
}

export default Slider