import React from "react";
import styled from "styled-components";

/*상품 목록을 위한 컴포넌트 *itemList props를 받아야함*
    src: product's image src
    name: product's name
    grade: product's grade
    reviews: the number of product reviews
    index: key value
    // optional // *Recommended use of "beforePrice" and "discount" together*
    beforePrice: price before discount
    discount: discount rate
*/
function ProductList(props) {
    const itemList = props.itemList

    return (
        <PordList>
            {itemList.map((item) => {
                return (
                    <li key={item.index}>
                        <div className="ImgDiv"><img src={item.img} alt={item.name} /></div>
                        <div>
                            <div className="ProdInfo">
                                <img className="Star" src="image/main/star.jpg" alt="별"/>
                                <span className="Grade">{item.grade}</span>
                                <span className="Reviews">({item.reviews})</span>
                            </div>
                            <div className="ProdName">{item.name}</div>
                            <span className="ProdPrice"><strong>{item.price}</strong>원</span>
                            {item.beforePrice != null && <span className="ProdPrice BeforePrice">{item.beforePrice}</span>}
                            {item.discount != null && <span className="Discount"><strong>{item.discount}</strong>%</span>}
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
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0;
    > li {
        list-style: none;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 65px;
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