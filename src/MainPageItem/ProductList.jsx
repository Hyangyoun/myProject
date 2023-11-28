import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ProductList(props) {
    const {itemList,number} = props
    const navigate = useNavigate()

    return (
        <PordList x={number}>
            {itemList.map((item,index) => {
                return (
                    <li key={index}>
                        <div className="ImgDiv"><img src={item.image} onClick={() => {navigate(`/product/${item.id}`)}} alt={item.name} /></div>
                        <div>
                            <div className="ProdInfo">
                                <img className="Star" src="/image/main/star.jpg" alt="별"/>
                                <span className="Grade">{item.grade}</span>
                                <span className="Reviews">({item.reviews})</span>
                            </div>
                            <div className="ProdName" onClick={() => {navigate(`/product/${item.id}`)}}>{item.name}</div>
                            {item.sale == null && <>
                                <span className="ProdPrice"><strong>{item.price.toLocaleString("ko-KR")}</strong>원</span>
                            </>}
                            {item.sale != null && <>
                                <span className="ProdPrice"><strong>{(Math.round((item.price - (item.price * (item.sale / 100))) / 100) * 100).toLocaleString("ko-KR")}</strong>원</span>
                                <span className="ProdPrice BeforePrice">{item.price.toLocaleString("ko-KR")}원</span>
                                <span className="Discount"><strong>{item.sale}</strong>%</span>
                            </> }
                        </div>
                    </li>
                )
            })}
        </PordList>
    )
}
export default ProductList

const PordList = styled.ul`
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    > li {
        list-style: none;
        flex-direction: column;
        justify-content: center;
        margin: 0 0 65px;
        :not(:nth-child(${props => props.x}n)) {
            margin-right: 20px;
        }
    }
    .ImgDiv {
        width: 260px; height: 180px;
        border-radius: 20px;
        overflow: hidden;
    }
    img {
        width: 100%; height: 100%;
        object-fit: cover;
        cursor: pointer;
    }
    strong {
        font-size: 18px;
    }
    .ProdName {
        font-size: 15px;
        margin: 5px 0 20px;
        cursor: pointer;
    }
    .ProdPrice {
        font-size: 14px;
        margin-right: 5px;
    }
    .BeforePrice {
        margin-left: 5px;
        text-decoration: line-through;
        color: #888888;
    }
    .Discount {
        font-size: 14px;
        color: #2e954e;
    }
    .ProdInfo {
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        margin-top: 5px;
    }
    .Star {
        width: 15px; height: 15px;
    }
    .Grade {
        font-size: 13px;
        font-weight: bold;
        margin-left: 3px;
        color: black;
    }
    .Reviews {
        font-size: 12px;
        margin-left: 1px;
        color: #888888;
    }
`