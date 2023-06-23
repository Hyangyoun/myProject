import React, {useState, useEffect} from "react";
import styled from "styled-components";

function EventSlider(props) {
    const [slider, setSlider] = useState(0)

    const ClickNext = () => {
        if(slider < 7) {
            setSlider(slider + 1)
            console.log("증가성공")
        }
    }
    const ClickPrev = () => {
        if(slider > 0) {
            setSlider(slider - 1)
        }
    }

    useEffect(() => {
        const autoSlide = setTimeout(() => {
            if(slider < 7)
                setSlider(slider + 1)
            else
                setSlider(0)
        }, 5000)

        return () => { clearTimeout(autoSlide) }
    },[slider])


    return (
        <SlideSection>
            <SlideBox>
                {sliderList.map((item) => {
                    return <SliderImg src={item.src} alt={item.alt} key={item.index} x={slider} />
                })}
            </SlideBox>
            <SlideButton onClick={ClickPrev} className="prev_button" x={slider}><img src="image/button/왼쪽.png" alt="왼쪽" /></SlideButton>
            <SlideButton onClick={ClickNext} className="next_button" x={slider}><img src="image/button/오른쪽.png" alt="오른쪽" /></SlideButton>
        </SlideSection>
    )
}
export default EventSlider

const SlideSection = styled.div`
    width: 210px;
    height: auto;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
`

const SlideBox = styled.div`
    width: 210px;
    height: auto;
    display: flex;
    flex-direction: row;
    overflow: hidden;
`
const SliderImg = styled.img`
    width: 100px; height: auto;
    position: relative;
    right: ${(props) => props.x * 110}px;
    margin-right: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s;
`
const SlideButton = styled.button`
    width: 45px; height: 45px;
    border-radius: 50%;
    border: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: rgba(255,255,255,0.85);
    cursor: pointer;

    &.prev_button {
        left: -30px;
        ${(props) => props.x <= 0 ? `
            opacity: 0.5;
            cursor: default;
        ` : `
            opacity: 1;
            cursor: pointer;
        `}
    }
    &.next_button {
        right: -30px;
        ${(props) => props.x >= 7 ? `
            opacity: 0.5;
            cursor: default;
        ` : `
            opacity: 1;
            cursor: pointer;
        `}
    }

    img {
        width: 20px; height: 20px;
    }
`

const sliderList = [
    {
        src: "image/event/맛있닭 다이어트도시락 카레볶음밥-1.jpg",
        alt: "카레볶음밥",
        index: 0
    },
    {
        src: "image/event/아임웰 곤약 닭가슴살 잡채볶음밥-1.jpg",
        alt: "잡채볶음밥",
        index: 1
    },
    {
        src: "image/event/비건 도시락 콩불구이 전주비빔밥-1.jpg",
        alt: "전주비빔밥",
        index: 2
    },
    {
        src: "image/event/맛있닭 닭가슴살스테이크 오리지널-2.jpg",
        alt: "닭가슴살 스테이크",
        index: 3
    },
    {
        src: "image/event/맛있닭 스팀닭가슴살 오리지널-3.jpg",
        alt: "스팀닭가슴살 오리지널",
        index: 4
    },
    {
        src: "image/event/맛있닭 스팀닭가슴살 고추맛-3.jpg",
        alt: "스팀닭가슴살 고추맛",
        index: 5
    },
    {
        src: "image/event/맛있닭 스팀닭가슴살 마늘맛-3.jpg",
        alt: "스팀닭가슴살 마늘맛",
        index: 6
    },
    {
        src: "image/event/아임닭 수비드닭가슴살 칠리페퍼-1.jpg",
        alt: "수비드닭가슴살 칠리페퍼",
        index: 7
    },
    {
        src: "image/event/프레쉬홈 이지 샐러드 Atype-1.jpg",
        alt: "이지 샐러드",
        index: 8
    },
]