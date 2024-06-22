/**
File Name : NotFound.js
Description : 404 페이지
Author : 강민규

History
Date        Author   Status      Description
2024.06.21  강민규   Created
2024.06.21  강민규   Modified    홈으로, 이전 페이지로 다 작동 확인
2024.06.21  이유민   Modified    버튼 애니메이션 추가
*/

import React from 'react'
import styled, {keyframes} from 'styled-components'
import '../assets/fonts/font.css'
import Dunes from '../assets/images/dunesNotFound.svg'

import {useNavigate} from 'react-router-dom'

const Center = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
`

const Title = styled.div`
    font-family: 'Pretendard';
    font-color: #252525;
    font-weight: 500em;
    font-size: 30px;
    margin: 40px 40px;
`

const Content = styled.p`
    font-family: 'Pretendard';
    line-height: 3;
    margin: 30px 30px;
`

const Navigate = styled.div`
    margin: 10px 10px;
    * {
        margin: 10px 10px;
    }
`

const animateButton = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
`

const Return = styled.button`
    font-family: 'Pretendard';
    font-size: 14px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #f3d55b;
    color: #996314;
    height: auto;
    width: auto;
    border: none;
    border-radius: 40px;
    margin: 20px 20px;
    transition:
        background-color 0.3s ease-in-out,
        color 0.3s ease-in-out,
        transform 0.3s ease-in-out;
    &:hover {
        background-color: #30cb6e;
        color: #fff;
        animation: ${animateButton} 0.5s ease-in-out infinite;
    }
`

const NotFound = () => {
    //유저 히스토리를 받아서 이전 페이지로 돌아가기
    const navigate = useNavigate()

    const handleNavigateHome = () => {
        navigate('/')
    }

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <Center>
            <Title>404: 페이지를 찾을 수 없습니다.</Title>
            <img src={Dunes} width="20%" height="35%" />
            <Content>
                때로는 여행자도 길을 잃고 방황할 때가 있는 법이죠.
                <br />
                걱정 마세요. 제자리로 돌아올 수 있게 저희가 도와드릴게요.
                <Navigate>
                    <Return onClick={handleNavigateHome}>홈으로</Return>{' '}
                    <Return onClick={handleGoBack}>이전 페이지로</Return>
                </Navigate>
            </Content>
        </Center>
    )
}

export default NotFound
