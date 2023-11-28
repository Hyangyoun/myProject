import React,{useState, useEffect} from "react";
import styled from "styled-components";
import Header from "../MainPageItem/header";
import Footer from "../MainPageItem/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage(props) {
    const [product, setProduct] = useState({})
    const [showImg, setShowImg] = useState("")
    const [imgList, setImgList] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`/product/${id}`)
        .then((response) => {
            setProduct(response.data)
            setShowImg(response.data.image)
            console.log(response.data)
            let img = []
            img.push(response.data.image)
            img.push(response.data.image2)
            img.push(response.data.image3)
            setImgList(img)
        })
    },[id])

    const ClickImg = (num) => {
        setShowImg(imgList[num])
    }
    
    return (
        <>
            <Header />
            <main>
                <ProductSection>
                    <ProductImage>
                        <img className="mainImage" src={showImg} alt="상품이미지"/>
                        <ul>
                            {imgList.map((src, index) => {
                                if(src != null) {
                                    return <li key={index}><img src={src} alt="상품이미지" key={index} onClick={() => ClickImg(index)} /></li>
                                }
                                return;
                            })}
                        </ul>
                    </ProductImage>
                    <img className="content" src={product.content} alt="상품정보" />
                </ProductSection>
            </main>
            <Footer />
        </>
    )
}
export default ProductPage

const ProductSection = styled.div`
    width: 1100px;
    margin: auto;
    text-align: center;
    .content {
        margin: auto;
    }
`

const ProductImage = styled.div`
    margin: 50px 0;
    width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .mainImage {
        width: 480px; height: 480px;
        object-fit: cover;
        cursor: pointer;
    }
    ul {
        margin: 5px 0;
        justify-content: flex-start;
    }
    li {
        :not(:last-child) {
            margin-right: 10px;
        }
    }

    li > img {
        width: 88px;
        height: 88px;
        object-fit: cover;
        cursor: pointer;
    }
`