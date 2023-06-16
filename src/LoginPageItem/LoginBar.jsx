import React from "react";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";

const LoginInner = styled.div`
    width: 1100px;
    height: 1000px;
    margin: auto;
    display: flex;
    flex-direction: column;
    background-color: #f1f1f1;
`

const InputSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-items: center;
    height: 30%;
    width: 80%;
`

const ImgSection = styled.div`
    margin: 15% auto 0;
    width: 400px;
    height: 52px;
    display: flex;
    justify-content: center;
    cursor: pointer;
`

const InputBar = styled.div`
    border: 1px solid #2e954e;
    background-color: white;
    border-radius: 5px;
    width: 400px;
    height: 50px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    input {
        width: 95%;
        height: 100%;
        font-size: 15px;
        border: none;
        outline: none;
        padding: 0px 15px;
        background: none;
        ::placeholder{
            color: lightgrey;
        }
    }
`
const CheckBox = styled.div`
    width: 400px; height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
    > label {
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    > label::before {
        content: "";
        margin-right: 5px;
        display: inline-block;
        box-sizing: border-box;
        width: 20px; height: 20px;
        border-radius: 4px;
        border: 1px solid #2e954e;
    }

    > input:checked + label::before{
        content: "\\2713";
        text-align: center;
        border: none;
        color: white;
        background-color: #2e954e;
    }

    > input {
        display: none;
    }
`

function LoginBar(props) {
    const navigate = useNavigate()
    return (
        <LoginInner>
            <ImgSection><img src="image/main/logo.png" alt="같이한닭" onClick={() => navigate("/")}/></ImgSection>
            <InputSection>
                <InputBar>
                    <input type="text" placeholder="아이디" />
                </InputBar>
                <InputBar>
                <input type="password" placeholder="비밀번호" />
                </InputBar>
                <CheckBox>
                    <input type="checkbox" id="autoLogin"/>
                    <label for="autoLogin">자동로그인</label>
                    <input type="checkbox" id="saveID"/>
                    <label for="saveID">아이디저장</label>
                </CheckBox>
            </InputSection>
        </LoginInner>
    )
}

export default LoginBar