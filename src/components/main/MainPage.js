/**
File Name : MainPage
Description : 시작하기 버튼 화면
Author : 임지영

History
Date        Author   Status    Description
2024.06.10  임지영   Created
2024.06.13  임지영   Modified    폰트 css 적용
*/

import React from 'react'
import styled from 'styled-components'
import '../../assets/fonts/font.css'
import {useNavigate} from 'react-router-dom'

const MainPageWrapper = styled.div`
    display: flex;
    background-color: #30cb6e;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: sticky;
    height: 100vh;
`

const StartPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* 중앙 정렬 */
`

const UrbanOasis = styled.p`
    font-family: 'gmarket Medium';
    color: white;
    font-size: 4.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: center;
`

const MainImageContainer = styled.div`
    text-align: center;
`

const MainImage = styled.img`
    width: 25vw;
    height: 25vw;
    margin-bottom: 30px;
`

const StartButtonContainer = styled.div`
    text-align: center;
`

const StartButton = styled.button`
    width: 10rem;
    height: 3rem;
    border-radius: 40px;
    border: none;
    background-color: white;
    color: rgb(157, 155, 155);
    font-size: 18pt;
    text-shadow: 0px 0px 1px grey;
    /* 그림자 효과 추가 */
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease; /* 부드러운 전환 효과 */

    &:hover {
        /* 마우스를 올렸을 때의 스타일 변경 */
        transform: scale(1.1); /* 원래 크기의 110%로 확대 */
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3); /* 그림자를 좀 더 진하게 */
        cursor: pointer;
    }
`

const MainPage = () => {
    const navigate = useNavigate()

    const handleStartClick = () => {
        navigate('/login')
    }

    return (
        <MainPageWrapper>
            <StartPage>
                <UrbanOasis>도시의 오아시스</UrbanOasis>
                <MainImageContainer>
                    <MainImage
                        src="https://cdn-icons-png.flaticon.com/512/8073/8073594.png"
                        alt="오아시스 이미지"
                    />
                </MainImageContainer>
                <StartButtonContainer>
                    <StartButton onClick={handleStartClick}>
                        시작하기
                    </StartButton>
                </StartButtonContainer>
            </StartPage>
        </MainPageWrapper>
    )
}

export default MainPage
