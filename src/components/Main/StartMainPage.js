/**
File Name : StartMainPage
Description : 렌더링 초기 애니매이션 화면
Author : 임지영

History
Date        Author   Status    Description
2024.06.10  임지영   Created
*/

import React from 'react'
import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const drawLine = keyframes`
  from {
    height: 0;
  }
  to {
    height: 230px;
  }
`
const MainPageWrapper = styled.div`
    display: flex;
    background-color: #30cb6e;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: sticky;
    height: 100vh;
`
const MainPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-family: 'GmarketSansMedium';
`

const FadeIn = styled.div`
    font-size: 2rem;
    animation: ${fadeIn} 2s;
`

const FadeIn3 = styled.div`
    font-size: 2rem;
    animation: ${fadeIn} 3s 3s forwards;
    opacity: 0;
`

const VerticalLine = styled.div`
    margin: 40px 0; /* 세로선 가운데 정렬 */
    border-left: solid #887c7c;
    height: 0;
    animation: ${drawLine} 1s 2s forwards;
    text-align: center;
`

const StartMainPage = () => {
    return (
        <MainPageWrapper>
            <MainPage>
                <FadeIn>
                    바쁜 일상 속 잠시 쉬어갈 공간이 필요하지 않나요?
                </FadeIn>
                <VerticalLine />
                <FadeIn3>
                    <strong>도시의 오아시스</strong>와 함께
                    <br /> 주변 공원을 찾아보세요!
                </FadeIn3>
            </MainPage>
        </MainPageWrapper>
    )
}

export default StartMainPage
